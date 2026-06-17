const GOOGLE_NEWS_RSS = "https://news.google.com/rss/search";
const MAX_ITEMS_PER_QUERY = 8;

function sendJson(response, payload, status = 200) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("access-control-allow-origin", "*");
  response.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type");
  response.end(JSON.stringify(payload));
}

function decodeXml(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .trim();
}

function stripTags(value = "") {
  return decodeXml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

function xmlValue(item, tag) {
  const match = item.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

function xmlSource(item) {
  const match = item.match(/<source(?:\s[^>]*)?>([\s\S]*?)<\/source>/i);
  return match ? stripTags(match[1]) : "";
}

function parseRssItems(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => {
    const item = match[1];
    const publishedAt = xmlValue(item, "pubDate");
    return {
      title: stripTags(xmlValue(item, "title")),
      link: stripTags(xmlValue(item, "link")),
      source: xmlSource(item),
      publishedAt,
      publishedTime: publishedAt ? Date.parse(publishedAt) : 0,
      summary: stripTags(xmlValue(item, "description"))
    };
  }).filter((item) => item.title && item.link);
}

function uniqueArticles(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.title.toLowerCase()}|${item.source.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function topicDefinitions(companyName = "", industry = "") {
  const subject = [companyName, industry].filter(Boolean).join(" ");
  return [
    {
      id: "humanCapital",
      label: "人的資本価値",
      query: `${subject} 人的資本 人材戦略 リスキリング 従業員 エンゲージメント`,
      keywords: ["人的資本", "人材", "リスキリング", "従業員", "エンゲージメント", "賃上げ", "働き方", "採用"]
    },
    {
      id: "wellbeing",
      label: "well-being",
      query: `${subject} well-being ウェルビーイング 健康経営 働きがい 地域`,
      keywords: ["well-being", "ウェルビーイング", "健康経営", "働きがい", "心理的安全", "地域", "幸福", "DEI"]
    },
    {
      id: "esg",
      label: "ESG",
      query: `${subject} ESG サステナビリティ 非財務 開示 気候 人権 ガバナンス`,
      keywords: ["ESG", "サステナ", "非財務", "開示", "気候", "人権", "ガバナンス", "統合報告"]
    },
    {
      id: "innovation",
      label: "新しいイノベーション",
      query: `${subject} イノベーション AI DX 新規事業 研究開発 スタートアップ`,
      keywords: ["イノベーション", "AI", "DX", "新規事業", "研究開発", "スタートアップ", "実証", "生成AI"]
    }
  ];
}

function relevanceScore(article, topic, companyName = "") {
  const text = `${article.title} ${article.summary}`.toLowerCase();
  let score = 35;
  topic.keywords.forEach((keyword) => {
    if (text.includes(keyword.toLowerCase())) score += 12;
  });
  if (companyName && text.includes(companyName.toLowerCase())) score += 18;
  if (article.publishedTime) {
    const ageDays = (Date.now() - article.publishedTime) / 86400000;
    if (ageDays <= 7) score += 12;
    else if (ageDays <= 30) score += 6;
  }
  return Math.min(100, score);
}

function boardSignal(topic, articles) {
  if (!articles.length) return `${topic.label}に関する直近ニュースは限定的です。開示資料や業界レポートで補完確認してください。`;
  const top = articles[0];
  if (topic.id === "humanCapital") return `人的資本は採用・定着・生産性だけでなく、資本市場への説明力に直結します。直近では「${top.title}」が監視対象です。`;
  if (topic.id === "wellbeing") return `well-beingは従業員体験と地域インパクトの両方で評価されます。直近では「${top.title}」を事業・組織施策に接続できるか確認が必要です。`;
  if (topic.id === "esg") return `ESGは開示品質、リスク管理、非財務KPIの一貫性が問われます。直近では「${top.title}」が取締役会での論点候補です。`;
  return `イノベーションはAI・DX・新規事業の速度差が競争優位を左右します。直近では「${top.title}」を競合比較に入れるべきです。`;
}

function extractRequest(request) {
  const query = request.query || {};
  const body = request.body || {};
  return {
    companyName: String(body.companyName || query.companyName || "").trim(),
    industry: String(body.industry || query.industry || "").trim(),
    periodDays: Math.max(1, Math.min(365, Number(body.periodDays || query.periodDays || 30))),
    locale: String(body.locale || query.locale || "ja").trim()
  };
}

async function fetchTopic(topic, requestContext) {
  const url = new URL(GOOGLE_NEWS_RSS);
  const subject = [requestContext.companyName, requestContext.industry].filter(Boolean).join(" ");
  const keywordQuery = topic.keywords.slice(0, 6).join(" OR ");
  const query = subject
    ? `${subject} (${keywordQuery}) when:${requestContext.periodDays}d`
    : `(${keywordQuery}) when:${requestContext.periodDays}d`;
  url.searchParams.set("q", query);
  url.searchParams.set("hl", requestContext.locale === "en" ? "en-US" : "ja");
  url.searchParams.set("gl", requestContext.locale === "en" ? "US" : "JP");
  url.searchParams.set("ceid", requestContext.locale === "en" ? "US:en" : "JP:ja");

  const response = await fetch(url.toString(), {
    headers: { "user-agent": "WellbeingImpactStudio/1.0" },
    signal: AbortSignal.timeout(10000)
  });
  if (!response.ok) throw new Error(`Google News RSS failed: ${response.status}`);
  const xml = await response.text();
  const cutoff = Date.now() - requestContext.periodDays * 86400000;
  const articles = uniqueArticles(parseRssItems(xml))
    .filter((item) => !item.publishedTime || item.publishedTime >= cutoff)
    .map((item) => ({
      ...item,
      topicId: topic.id,
      topicLabel: topic.label,
      relevance: relevanceScore(item, topic, requestContext.companyName)
    }))
    .sort((a, b) => b.relevance - a.relevance || b.publishedTime - a.publishedTime)
    .slice(0, MAX_ITEMS_PER_QUERY);
  return {
    ...topic,
    articles,
    boardSignal: boardSignal(topic, articles)
  };
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") return sendJson(response, { ok: true });
  if (!["GET", "POST"].includes(request.method)) return sendJson(response, { error: "Method not allowed" }, 405);

  const context = extractRequest(request);
  const topics = topicDefinitions(context.companyName, context.industry);
  try {
    const results = await Promise.all(topics.map((topic) => fetchTopic(topic, context)));
    const allArticles = uniqueArticles(results.flatMap((topic) => topic.articles))
      .sort((a, b) => b.relevance - a.relevance || b.publishedTime - a.publishedTime)
      .slice(0, 20);
    return sendJson(response, {
      source: "Google News RSS",
      fetchedAt: new Date().toISOString(),
      periodDays: context.periodDays,
      companyName: context.companyName,
      industry: context.industry,
      topics: results,
      articles: allArticles,
      boardSummary: [
        `直近${context.periodDays}日で、人的資本・well-being・ESG・イノベーションのニュースを横断取得しました。`,
        allArticles.length ? `取締役会では、上位${Math.min(5, allArticles.length)}件を事業機会、開示リスク、組織能力投資の観点で確認してください。` : "該当ニュースが少ないため、対象企業名、業界、期間を広げて再取得してください。"
      ].join("")
    });
  } catch (error) {
    return sendJson(response, { error: "News crawl failed", detail: error.message }, 502);
  }
}
