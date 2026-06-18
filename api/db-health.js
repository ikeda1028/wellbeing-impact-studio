import { isSupabaseConfigured, supabaseRequest } from "./_supabase.js";

function sendJson(response, payload, status = 200) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("access-control-allow-origin", "*");
  response.setHeader("access-control-allow-methods", "GET, OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type");
  response.end(JSON.stringify(payload));
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") return sendJson(response, { ok: true });
  if (request.method !== "GET") return sendJson(response, { error: "Method not allowed" }, 405);

  if (!isSupabaseConfigured()) {
    return sendJson(response, {
      ok: false,
      configured: false,
      message: "SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not configured"
    }, 200);
  }

  try {
    const rows = await supabaseRequest("companies", {
      params: "select=id&limit=1"
    });
    return sendJson(response, {
      ok: true,
      configured: true,
      message: "Supabase connection OK",
      sampleCount: Array.isArray(rows) ? rows.length : 0
    });
  } catch (error) {
    return sendJson(response, {
      ok: false,
      configured: true,
      message: error.message
    }, 200);
  }
}
