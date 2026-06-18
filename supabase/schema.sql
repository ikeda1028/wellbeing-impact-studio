create extension if not exists pgcrypto;

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  company_key text not null unique,
  name text not null,
  website_url text,
  industry text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news_crawls (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete set null,
  source text not null default 'Google News RSS',
  period_days integer not null default 30,
  fetched_at timestamptz not null default now(),
  board_summary text,
  request jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.news_topics (
  id uuid primary key default gen_random_uuid(),
  crawl_id uuid not null references public.news_crawls(id) on delete cascade,
  topic_id text not null,
  label text not null,
  board_signal text,
  article_count integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.news_articles (
  id uuid primary key default gen_random_uuid(),
  article_key text not null unique,
  company_id uuid references public.companies(id) on delete set null,
  title text not null,
  link text not null,
  source text,
  published_at timestamptz,
  summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news_crawl_articles (
  id uuid primary key default gen_random_uuid(),
  crawl_id uuid not null references public.news_crawls(id) on delete cascade,
  article_id uuid not null references public.news_articles(id) on delete cascade,
  topic_id text not null,
  topic_label text,
  relevance integer not null default 0,
  created_at timestamptz not null default now(),
  unique (crawl_id, article_id, topic_id)
);

create table if not exists public.participant_profiles (
  id uuid primary key default gen_random_uuid(),
  participant_key text not null unique,
  auth_user_id uuid unique,
  display_name text not null,
  email text,
  phone text,
  phone_verified_at timestamptz,
  participation_mode text not null default 'individual' check (participation_mode in ('individual', 'organization')),
  current_company_id uuid references public.companies(id) on delete set null,
  team_name text,
  role text,
  status text not null default 'active',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organization_memberships (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references public.participant_profiles(id) on delete cascade,
  company_id uuid not null references public.companies(id) on delete cascade,
  team_name text,
  role text,
  membership_status text not null default 'active' check (membership_status in ('active', 'pending', 'past')),
  joined_at timestamptz not null default now(),
  left_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (participant_id, company_id, team_name)
);

create table if not exists public.assessment_sessions (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid references public.participant_profiles(id) on delete set null,
  auth_user_id uuid,
  company_id uuid references public.companies(id) on delete set null,
  participant_key text not null,
  mode text not null default 'individual' check (mode in ('individual', 'organization')),
  round text not null default 'before' check (round in ('before', 'after')),
  member_label text,
  member_role text,
  scores jsonb not null default '{}'::jsonb,
  answers jsonb not null default '{}'::jsonb,
  esg_answers jsonb not null default '{}'::jsonb,
  scenario_scores jsonb not null default '{}'::jsonb,
  context jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists companies_company_key_idx on public.companies(company_key);
create index if not exists news_crawls_company_fetched_idx on public.news_crawls(company_id, fetched_at desc);
create index if not exists news_articles_published_idx on public.news_articles(published_at desc);
create index if not exists news_crawl_articles_crawl_idx on public.news_crawl_articles(crawl_id);
create index if not exists participant_profiles_key_idx on public.participant_profiles(participant_key);
create index if not exists participant_profiles_auth_user_idx on public.participant_profiles(auth_user_id);
create index if not exists organization_memberships_participant_idx on public.organization_memberships(participant_id, membership_status);
create index if not exists assessment_sessions_participant_created_idx on public.assessment_sessions(participant_key, created_at desc);
create index if not exists assessment_sessions_company_created_idx on public.assessment_sessions(company_id, created_at desc);

alter table public.companies enable row level security;
alter table public.news_crawls enable row level security;
alter table public.news_topics enable row level security;
alter table public.news_articles enable row level security;
alter table public.news_crawl_articles enable row level security;
alter table public.participant_profiles enable row level security;
alter table public.organization_memberships enable row level security;
alter table public.assessment_sessions enable row level security;

-- The app writes through Supabase REST with SUPABASE_SERVICE_ROLE_KEY on Vercel.
-- Do not expose the service role key in browser code.
