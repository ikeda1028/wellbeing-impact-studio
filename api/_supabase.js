const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

export function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

function restUrl(path, params = "") {
  const base = SUPABASE_URL.replace(/\/$/, "");
  return `${base}/rest/v1/${path}${params ? `?${params}` : ""}`;
}

export function normalizeKey(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/株式会社|有限会社|合同会社|inc\.?|corp\.?|corporation|co\.?,?\s*ltd\.?|ltd\.?/gi, "")
    .replace(/[・･\s　\-ー–—_.,、。()（）［］\[\]「」'"]/g, "")
    .trim() || "unknown";
}

export async function supabaseRequest(path, options = {}) {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured");
  }
  const response = await fetch(restUrl(path, options.params), {
    method: options.method || "GET",
    headers: {
      "apikey": SUPABASE_SERVICE_ROLE_KEY,
      "authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "content-type": "application/json",
      "prefer": options.prefer || "return=representation",
      ...(options.headers || {})
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(data?.message || data?.hint || text || `Supabase request failed: ${response.status}`);
  }
  return data;
}

export async function upsertRows(table, rows, conflictTarget) {
  const params = conflictTarget ? `on_conflict=${encodeURIComponent(conflictTarget)}` : "";
  return supabaseRequest(table, {
    method: "POST",
    params,
    prefer: conflictTarget ? "resolution=merge-duplicates,return=representation" : "return=representation",
    body: rows
  });
}

export async function insertRows(table, rows) {
  return supabaseRequest(table, {
    method: "POST",
    prefer: "return=representation",
    body: rows
  });
}
