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
あなたは人的資本、組織開発、well-being、ESG、事業開発を統合したAIシナリオ設計者です。
会社名・URL・AI解析結果・診断スコアから、業界を特定し、競合他社や市場プレイヤーが登場する実践判断シナリオを作ってください。

入力データ:
${JSON.stringify(context, null, 2)}

要件:
- 日本語で作成
- 会社名やURLから推定できる業界を inferredIndustry に入れる
- industryAnalysis に、業界判断の根拠、確信度、顧客セグメント、事業モデル、競合推定の根拠、注意すべき仮定、推奨シナリオテーマを入れる
- competitors には、可能な限り具体的な社名候補を3-5社入れる
- 実名の確度が低い場合でも、代表的な競合候補として使える社名を挙げ、industryAnalysis.competitorBasis で「候補であり要確認」と明記する
- 直接競合だけでなく、代替サービス、プラットフォーム、大手隣接企業も候補に含めてよい
- 競合他社は断定せず「競合候補」として扱い、シナリオ内でも「候補」「比較対象」と分かる表現にする
- scenes は3場面
- 各sceneのpromptには、競合他社、顧客、社内関係者、地域/市場プレイヤーのいずれかを登場させる
- 各場面で受講者が判断を迫られる問いにする
- 01診断の弱み、ESG、well-being、事業性を評価できるようにする
- scenes は industryAnalysis.recommendedScenarioTheme に沿って設計する

必ずJSONだけで返してください。Markdownや説明文は禁止です。
{
  "source": "AI会社別シナリオ",
  "companyName": "推定会社名",
  "inferredIndustry": "推定業界",
  "industryAnalysis": {
    "confidence": 0-100,
    "basis": "業界をそう判断した根拠",
    "businessModel": "推定される事業モデル",
    "customerSegments": ["顧客1", "顧客2", "顧客3"],
    "competitorBasis": "競合候補をそう置いた理由。不確かな場合は候補であり要確認と明記",
    "assumptions": ["仮定1", "仮定2"],
    "recommendedScenarioTheme": "この会社に最もよいシナリオテーマ"
  },
  "market": "対象市場・顧客",
  "location": "会社や地域の文脈",
  "challenge": "組織内課題",
  "desiredImpact": "実現したい変化",
  "competitors": ["競合1", "競合2", "競合3"],
  "marketPlayers": ["顧客/自治体/取引先など1", "市場プレイヤー2", "市場プレイヤー3"],
  "storySeed": "シナリオ全体の物語設定",
  "scenes": [
    {
      "title": "場面1: タイトル",
      "prompt": "受講者が判断を迫られる場面説明",
      "focus": "評価焦点"
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
      model: process.env.OPENAI_SCENARIO_GENERATION_MODEL || process.env.OPENAI_SCENARIO_MODEL || "gpt-5.5",
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
