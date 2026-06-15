const OPENAI_IMAGE_API_URL = "https://api.openai.com/v1/images/generations";

function sendJson(response, payload, status = 200) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("access-control-allow-origin", "*");
  response.setHeader("access-control-allow-methods", "POST, OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type");
  response.end(JSON.stringify(payload));
}

function resolveImageModel(value) {
  const model = (value || "gpt-image-2").trim();
  if (model === "image2") return "gpt-image-2";
  if (model === "image1") return "gpt-image-1";
  return model;
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") return sendJson(response, { ok: true });
  if (request.method !== "POST") return sendJson(response, { error: "Method not allowed" }, 405);

  const apiKey = process.env.OPENAI_WBS_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) return sendJson(response, { error: "OPENAI_WBS_KEY is not configured" }, 500);

  const { prompt } = request.body || {};
  if (!prompt || typeof prompt !== "string") {
    return sendJson(response, { error: "prompt is required" }, 400);
  }

  const openaiResponse = await fetch(OPENAI_IMAGE_API_URL, {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: resolveImageModel(process.env.OPENAI_IMAGE_MODEL),
      prompt,
      size: "1536x1024"
    })
  });

  if (!openaiResponse.ok) {
    const detail = await openaiResponse.text();
    return sendJson(response, { error: "OpenAI image request failed", detail }, 502);
  }

  const data = await openaiResponse.json();
  const imageBase64 = data.data?.[0]?.b64_json;
  if (!imageBase64) {
    return sendJson(response, { error: "OpenAI image response did not include image data" }, 502);
  }

  return sendJson(response, { imageBase64 });
}
