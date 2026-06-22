import { insertRows, isSupabaseConfigured, normalizeKey, supabaseRequest, upsertRows } from "./_supabase.js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function cleanText(value, fallback = "") {
  return String(value || fallback).trim();
}

function bearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match?.[1] || "";
}

async function getAuthUser(accessToken) {
  if (!accessToken || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
  const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/auth/v1/user`, {
    headers: {
      "apikey": SUPABASE_SERVICE_ROLE_KEY,
      "authorization": `Bearer ${accessToken}`
    }
  });
  if (!response.ok) return null;
  return response.json();
}

async function resolveCompany(profile = {}) {
  if (profile.participationMode !== "organization") return null;
  const companyName = cleanText(profile.companyName);
  if (!companyName) return null;

  const rows = await upsertRows("companies", [{
    company_key: normalizeKey(companyName || profile.websiteUrl),
    name: companyName,
    website_url: cleanText(profile.websiteUrl) || null,
    industry: cleanText(profile.industry) || null,
    updated_at: new Date().toISOString()
  }], "company_key");

  return rows?.[0] || null;
}

async function findProfileByAuthUserId(authUserId) {
  if (!authUserId) return null;
  const rows = await supabaseRequest("participant_profiles", {
    params: `auth_user_id=eq.${encodeURIComponent(authUserId)}&select=id,participant_key&limit=1`
  });
  return rows?.[0] || null;
}

async function saveProfile(profile = {}, authUser = null) {
  const company = await resolveCompany(profile);
  const existingAuthProfile = await findProfileByAuthUserId(authUser?.id);
  const participantKey = cleanText(existingAuthProfile?.participant_key || profile.participantKey);
  if (!participantKey) throw new Error("participantKey is required");
  const phone = cleanText(authUser?.phone || profile.phone);

  const profileRows = await upsertRows("participant_profiles", [{
    participant_key: participantKey,
    auth_user_id: authUser?.id || null,
    display_name: cleanText(profile.displayName, "参加者"),
    email: cleanText(authUser?.email || profile.email) || null,
    phone: phone || null,
    phone_verified_at: phone ? new Date().toISOString() : null,
    participation_mode: profile.participationMode === "organization" ? "organization" : "individual",
    current_company_id: company?.id || null,
    team_name: cleanText(profile.teamName) || null,
    role: cleanText(profile.role) || null,
    metadata: {
      source: "web-app",
      companyName: cleanText(profile.companyName) || null,
      websiteUrl: cleanText(profile.websiteUrl) || null,
      industry: cleanText(profile.industry) || null,
      authProvider: authUser?.app_metadata?.provider || null
    },
    updated_at: new Date().toISOString()
  }], existingAuthProfile ? "auth_user_id" : "participant_key");

  const participant = profileRows?.[0];
  if (company && participant) {
    await upsertRows("organization_memberships", [{
      participant_id: participant.id,
      company_id: company.id,
      team_name: cleanText(profile.teamName, "全社"),
      role: cleanText(profile.role) || null,
      membership_status: "active",
      updated_at: new Date().toISOString()
    }], "participant_id,company_id,team_name");
  }

  return { participant, company };
}

async function saveAssessment(profileResult, assessment = {}) {
  if (!assessment || !Object.keys(assessment).length) return null;
  const participant = profileResult.participant;
  const company = profileResult.company;
  const rows = await insertRows("assessment_sessions", [{
    participant_id: participant?.id || null,
    auth_user_id: participant?.auth_user_id || null,
    company_id: company?.id || null,
    participant_key: cleanText(participant?.participant_key || assessment.participantKey),
    mode: assessment.mode === "organization" ? "organization" : "individual",
    round: assessment.round === "after" ? "after" : "before",
    member_label: cleanText(assessment.memberLabel) || null,
    member_role: cleanText(assessment.memberRole) || null,
    scores: assessment.scores || {},
    answers: assessment.answers || {},
    esg_answers: assessment.esgAnswers || {},
    scenario_scores: assessment.scenarioScores || {},
    context: assessment.context || {}
  }]);
  return rows?.[0] || null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("allow", "POST");
    return json(res, 405, { ok: false, error: "Method not allowed" });
  }

  if (!isSupabaseConfigured()) {
    return json(res, 200, { ok: false, configured: false, error: "Supabase is not configured" });
  }

  try {
    const body = await readBody(req);
    const authUser = await getAuthUser(bearerToken(req));
    const profileResult = await saveProfile(body.profile || {}, authUser);
    const assessment = await saveAssessment(profileResult, body.assessment);
    return json(res, 200, {
      ok: true,
      configured: true,
      participantId: profileResult.participant?.id,
      participantKey: profileResult.participant?.participant_key || null,
      authUserId: authUser?.id || null,
      phoneVerified: Boolean(authUser?.phone),
      companyId: profileResult.company?.id || null,
      assessmentId: assessment?.id || null
    });
  } catch (error) {
    console.error("participant-session failed", error);
    return json(res, 500, { ok: false, configured: true, error: error.message || "Save failed" });
  }
}
