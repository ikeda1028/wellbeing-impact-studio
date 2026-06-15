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

function normalizeCompanyNameForCompare(name = "") {
  return String(name)
    .toLowerCase()
    .replace(/株式会社|有限会社|合同会社|持株会社|ホールディングス|グループ|inc\.?|corp\.?|corporation|co\.?,?\s*ltd\.?|ltd\.?/gi, "")
    .replace(/[・･\s　\-ー–—_.,、。()（）［］\[\]「」'"]/g, "")
    .trim();
}

function isSameCompanyName(candidate, companyName) {
  const candidateKey = normalizeCompanyNameForCompare(candidate);
  const companyKey = normalizeCompanyNameForCompare(companyName);
  if (!candidateKey || !companyKey) return false;
  if (candidateKey === companyKey) return true;
  const shorter = candidateKey.length < companyKey.length ? candidateKey : companyKey;
  const longer = candidateKey.length < companyKey.length ? companyKey : candidateKey;
  return shorter.length >= 3 && longer.includes(shorter);
}

function scenarioCompetitorFallbacks(industry = "") {
  if (industry.includes("自動車") || industry.includes("モビリティ")) return ["本田技研工業", "日産自動車", "SUBARU", "マツダ", "スズキ"];
  if (industry.includes("電機") || industry.includes("エレクトロニクス")) return ["ソニーグループ", "パナソニックホールディングス", "日立製作所", "富士通", "NEC"];
  if (industry.includes("IT") || industry.includes("インターネット")) return ["楽天グループ", "LINEヤフー", "Amazon", "Google", "メルカリ"];
  if (industry.includes("金融") || industry.includes("保険")) return ["三井住友フィナンシャルグループ", "みずほフィナンシャルグループ", "野村ホールディングス", "東京海上ホールディングス", "大和証券グループ"];
  if (industry.includes("不動産") || industry.includes("都市")) return ["三菱地所", "三井不動産", "住友不動産", "東急不動産", "野村不動産"];
  if (industry.includes("小売") || industry.includes("流通")) return ["セブン&アイ・ホールディングス", "イオン", "ローソン", "ファミリーマート", "ファーストリテイリング"];
  if (industry.includes("食品") || industry.includes("飲料")) return ["サントリーホールディングス", "キリンホールディングス", "アサヒグループホールディングス", "味の素", "日清食品ホールディングス"];
  if (industry.includes("医療") || industry.includes("ヘルスケア")) return ["第一三共", "中外製薬", "エムスリー", "メドレー", "武田薬品工業"];
  if (industry.includes("教育") || industry.includes("探究")) return ["ベネッセコーポレーション", "リクルート（スタディサプリ）", "Classi", "atama plus", "Z会"];
  if (industry.includes("観光") || industry.includes("宿泊")) return ["JTB", "HIS", "楽天トラベル", "リクルート（じゃらん）", "Klook"];
  return ["同業大手候補", "隣接プラットフォーム候補", "地域同業候補", "代替サービス候補", "新興企業候補"];
}

function sanitizeCompetitors(competitors = [], companyName = "", industry = "") {
  const seen = new Set();
  const filtered = [];
  [...competitors, ...scenarioCompetitorFallbacks(industry)].forEach((name) => {
    const competitor = String(name || "").trim();
    const key = normalizeCompanyNameForCompare(competitor);
    if (!competitor || seen.has(key) || isSameCompanyName(competitor, companyName)) return;
    seen.add(key);
    filtered.push(competitor);
  });
  return filtered.slice(0, Math.max(3, Math.min(5, filtered.length)));
}

function sanitizeScenarioPlan(plan, context) {
  const companyName = plan.companyName || context.companyName || context.websiteAssessment?.companyName || "";
  const industry = plan.inferredIndustry || plan.industry || context.industryHint || "";
  const competitors = sanitizeCompetitors(plan.competitors || [], companyName, industry);
  const replacement = competitors[0] || "主要競合候補";
  const scenes = (plan.scenes || []).map((scene) => {
    let prompt = scene.prompt || "";
    if (companyName) {
      prompt = prompt
        .replaceAll(`競合候補の${companyName}`, `競合候補の${replacement}`)
        .replaceAll(`比較対象の${companyName}`, `比較対象の${replacement}`)
        .replaceAll(`競合の${companyName}`, `競合の${replacement}`);
    }
    return { ...scene, prompt };
  });
  return {
    ...plan,
    competitors,
    scenes,
    industryAnalysis: {
      ...(plan.industryAnalysis || {}),
      competitorBasis: `${plan.industryAnalysis?.competitorBasis || "業界における代表的な競合候補です。"} 対象会社と同一または同一グループと見なされる社名は除外しています。`
    }
  };
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
- 入力データに industryHint がある場合は最優先の業界仮説として扱う。ただし会社名・URL・AI解析結果と明らかに矛盾する場合は、inferredIndustry はAIの判断を優先し、industryAnalysis.basis と assumptions に矛盾理由を書く
- 入力データに scenarioThemeHint がある場合は、recommendedScenarioTheme と5場面の葛藤設計に反映する
- industryAnalysis に、業界判断の根拠、確信度、顧客セグメント、事業モデル、競合推定の根拠、注意すべき仮定、推奨シナリオテーマを入れる
- competitors には、可能な限り具体的な社名候補を3-5社入れる
- competitors には、companyName の対象会社自身、対象会社の略称、同一グループ会社名を絶対に入れない
- 対象会社が業界大手の場合は、その会社を除いた同業他社、代替サービス、隣接プラットフォームを競合候補にする
- 実名の確度が低い場合でも、代表的な競合候補として使える社名を挙げ、industryAnalysis.competitorBasis で「候補であり要確認」と明記する
- 直接競合だけでなく、代替サービス、プラットフォーム、大手隣接企業も候補に含めてよい
- 競合他社は断定せず「競合候補」として扱い、シナリオ内でも「候補」「比較対象」と分かる表現にする
- scenes は5場面
- 各sceneのpromptには、競合他社、顧客、社内関係者、地域/市場プレイヤーのいずれかを登場させる
- 各場面で受講者が判断を迫られる問いにする
- 各sceneのpromptには、制約条件、利害対立、追加イベント、判断しない場合のリスクを含める
- 場面は「初動調査」「社内対立」「競合対応」「実証中のトラブル」「投資・ESG説明」の流れにする
- 各sceneは業界固有の商流、規制、顧客、現場課題、収益モデルが分かる内容にする。汎用的な組織開発シナリオだけにしない
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
      "prompt": "受講者が判断を迫られる複雑な場面説明。制約条件、利害対立、追加イベント、判断しない場合のリスクを含める",
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
  return sendJson(response, sanitizeScenarioPlan(parsed, context));
}
