const OPENAI_API_URL = "https://api.openai.com/v1/responses";

function sendJson(response, payload, status = 200) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("access-control-allow-origin", "*");
  response.setHeader("access-control-allow-methods", "POST, OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type");
  response.end(JSON.stringify(payload));
}

function extractJson(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) return JSON.parse(trimmed);
  const match = trimmed.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("No JSON object found in model output");
  return JSON.parse(match[0]);
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") return sendJson(response, { ok: true });
  if (request.method !== "POST") return sendJson(response, { error: "Method not allowed" }, 405);

  const apiKey = process.env.OPENAI_WBS_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) return sendJson(response, { error: "OPENAI_WBS_KEY is not configured" }, 500);

  const context = request.body || {};
  const prompt = `
あなたは人的資本、組織開発、ESG投資適格性、well-being、TLAプログラム設計に詳しい組織変革コンサルタントです。
入力された診断結果と会社・組織文脈に基づき、その組織に属した具体的な提案を作成してください。
一般論ではなく、会社名、業界、組織タイプ、弱み、ばらつき、AIシナリオ、ESG適格性を反映してください。

入力データ:
${JSON.stringify(context, null, 2)}

制約:
- 日本語で書く
- 5枚の提案カードにする
- 各カードは title, body, target, list を持つ
- target には数値目標を必ず含める
- list は3項目
- 取締役、各部署、現場メンバー、次世代リーダーを必要に応じて含める
- TLA組織開発プログラム、組織OSアクション、ESG投資適格性、改善タスクフォースの観点を少なくともどこかに含める

必ずJSONだけで返してください。Markdownや説明文は禁止です。
{
  "source": "AI組織別提案",
  "summary": "80字以内で、この組織向け提案の要約",
  "cards": [
    {
      "title": "提案タイトル",
      "body": "組織固有の文脈を踏まえた説明",
      "target": "数値目標",
      "list": ["実行項目1", "実行項目2", "実行項目3"]
    }
  ]
}
`;

  const openaiResponse = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_RECOMMENDATION_MODEL || process.env.OPENAI_SCENARIO_MODEL || "gpt-5.5",
      input: prompt
    })
  });

  if (!openaiResponse.ok) {
    const detail = await openaiResponse.text();
    return sendJson(response, { error: "OpenAI request failed", detail }, 502);
  }

  const data = await openaiResponse.json();
  const outputText = data.output_text || data.output?.flatMap((item) => item.content || []).map((part) => part.text || "").join("") || "";
  const parsed = extractJson(outputText);
  return sendJson(response, parsed);
}
