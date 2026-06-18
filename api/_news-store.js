import { insertRows, isSupabaseConfigured, normalizeKey, upsertRows } from "./_supabase.js";

function toIsoDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function articleKey(article) {
  return normalizeKey(article.link || article.title);
}

export async function saveNewsIntelligence(payload) {
  if (!isSupabaseConfigured()) {
    return { enabled: false, saved: false, reason: "SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not configured" };
  }

  const companyKey = normalizeKey(`${payload.companyName || "unspecified"}-${payload.industry || "general"}`);
  const [company] = await upsertRows("companies", [{
    company_key: companyKey,
    name: payload.companyName || "未指定企業",
    industry: payload.industry || null,
    updated_at: new Date().toISOString()
  }], "company_key");

  const [crawl] = await insertRows("news_crawls", [{
    company_id: company.id,
    source: payload.source || "Google News RSS",
    period_days: payload.periodDays || 30,
    fetched_at: payload.fetchedAt,
    board_summary: payload.boardSummary || "",
    request: {
      companyName: payload.companyName,
      industry: payload.industry,
      periodDays: payload.periodDays
    }
  }]);

  const topicRows = (payload.topics || []).map((topic) => ({
    crawl_id: crawl.id,
    topic_id: topic.id,
    label: topic.label,
    board_signal: topic.boardSignal || "",
    article_count: topic.articles?.length || 0
  }));
  if (topicRows.length) await insertRows("news_topics", topicRows);

  const articleRows = (payload.articles || []).map((article) => ({
    article_key: articleKey(article),
    company_id: company.id,
    title: article.title,
    link: article.link,
    source: article.source || null,
    published_at: toIsoDate(article.publishedAt),
    summary: article.summary || "",
    updated_at: new Date().toISOString()
  }));
  const savedArticles = articleRows.length ? await upsertRows("news_articles", articleRows, "article_key") : [];
  const articleByKey = new Map(savedArticles.map((article) => [article.article_key, article]));
  const crawlArticleRows = (payload.articles || []).map((article) => {
    const saved = articleByKey.get(articleKey(article));
    if (!saved) return null;
    return {
      crawl_id: crawl.id,
      article_id: saved.id,
      topic_id: article.topicId,
      topic_label: article.topicLabel,
      relevance: article.relevance || 0
    };
  }).filter(Boolean);
  if (crawlArticleRows.length) await upsertRows("news_crawl_articles", crawlArticleRows, "crawl_id,article_id,topic_id");

  return {
    enabled: true,
    saved: true,
    companyId: company.id,
    crawlId: crawl.id,
    articleCount: savedArticles.length,
    topicCount: topicRows.length
  };
}
