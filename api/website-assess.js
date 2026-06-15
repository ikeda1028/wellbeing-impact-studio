const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const MAX_PAGE_TEXT = 12000;

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

function normalizeUrl(value) {
  const raw = String(value || "").trim();
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  const url = new URL(withProtocol);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("Only http and https URLs are supported");
  const host = url.hostname.toLowerCase();
  const blockedHosts = ["localhost", "127.0.0.1", "0.0.0.0", "::1"];
  const blockedRanges = [/^10\./, /^192\.168\./, /^172\.(1[6-9]|2\d|3[0-1])\./, /^169\.254\./];
  if (blockedHosts.includes(host) || blockedRanges.some((pattern) => pattern.test(host))) {
    throw new Error("Local and private network URLs are not supported");
  }
  return url;
}

function pageTextFromHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_PAGE_TEXT);
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") return sendJson(response, { ok: true });
  if (request.method !== "POST") return sendJson(response, { error: "Method not allowed" }, 405);

  const apiKey = process.env.OPENAI_WBS_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) return sendJson(response, { error: "OPENAI_WBS_KEY is not configured" }, 500);

  let url;
  try {
    url = normalizeUrl(request.body?.url);
  } catch {
    return sendJson(response, { error: "valid url is required" }, 400);
  }

  let pageText = "";
  try {
    const pageResponse = await fetch(url.toString(), {
      headers: {
        "user-agent": "WellbeingImpactStudio/1.0 (+https://wellbeing-impact-studio)"
      },
      redirect: "follow",
      signal: AbortSignal.timeout(12000)
    });
    if (!pageResponse.ok) {
      return sendJson(response, { error: "Website request failed", detail: `${pageResponse.status} ${pageResponse.statusText}` }, 502);
    }
    const contentType = pageResponse.headers.get("content-type") || "";
    const raw = await pageResponse.text();
    pageText = contentType.includes("text/html") ? pageTextFromHtml(raw) : raw.replace(/\s+/g, " ").trim().slice(0, MAX_PAGE_TEXT);
  } catch (error) {
    return sendJson(response, { error: "Website could not be read", detail: error.message }, 502);
  }

  if (!pageText) return sendJson(response, { error: "Website did not include readable text" }, 422);

  const prompt = `
あなたは公開ホームページから、人的資本価値、探究度数、組織OS、well-being、事業性、ESG投資適格性を暫定診断するアナリストです。
ホームページの公開情報だけを根拠に、未確認の点は控えめに評価してください。これは正式評価ではなく、01診断の下書きです。

対象URL:
${url.toString()}

取得したページ本文:
${pageText}

必ずJSONだけで返してください。Markdownや説明文は禁止です。
{
  "companyName": "推定した会社・団体名。分からなければ空文字",
  "confidence": 0-100,
  "scores": {
    "human": 0-100,
    "inquiry": 0-100,
    "autonomy": 0-100,
    "project": 0-100,
    "leadership": 0-100,
    "orgWellbeing": 0-100,
    "regional": 0-100,
    "business": 0-100
  },
  "esgScores": {
    "esgGovernance": 0-100,
    "esgStrategy": 0-100,
    "esgRisk": 0-100,
    "esgMetrics": 0-100,
    "esgImpact": 0-100,
    "esgClimate": 0-100
  },
  "summary": "120字以内の日本語サマリー",
  "evidence": ["根拠1", "根拠2", "根拠3"],
  "cautions": ["注意点1", "注意点2"]
}
`;

  const openaiResponse = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_WEBSITE_MODEL || process.env.OPENAI_SCENARIO_MODEL || "gpt-5.5",
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
  return sendJson(response, { ...parsed, sourceUrl: url.toString() });
}
