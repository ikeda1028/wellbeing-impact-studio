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

  const { context, scene, answer, selfScores, esgScores } = request.body || {};

  const prompt = `
あなたは人的資本価値、探究学習、組織開発、well-being、ESG投資適格性を評価する教育シミュレーターです。
受講者の自由記述回答を、実践判断として測定してください。

評価対象の文脈:
${JSON.stringify(context, null, 2)}

場面:
${JSON.stringify(scene, null, 2)}

受講者の回答:
${answer}

01自己診断スコア:
${JSON.stringify(selfScores, null, 2)}

ESG診断スコア:
${JSON.stringify(esgScores, null, 2)}

必ずJSONだけで返してください。説明文やMarkdownは禁止です。
{
  "score": {
    "inquiry": 0-100,
    "org": 0-100,
    "wellbeing": 0-100,
    "business": 0-100,
    "esg": 0-100
  },
  "feedback": "80字以内の日本語フィードバック",
  "nextProbe": "必要なら次に深掘りすべき問いを1つ。不要なら空文字",
  "detectedStrengths": ["強み1", "強み2"],
  "detectedRisks": ["リスク1", "リスク2"]
}
`;

  const openaiResponse = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_SCENARIO_MODEL || "gpt-5.5",
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
