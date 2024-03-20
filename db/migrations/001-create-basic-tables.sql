CREATE TABLE jobs (
  job_id TEXT PRIMARY KEY,
  title TEXT,
  company_name TEXT,
  location TEXT,
  via TEXT,
  description TEXT,
  job_highlights JSONB,
  related_links JSONB,
  thumbnail TEXT,
  extensions JSONB,
  detected_extensions JSONB,
  would_shannon_like_this_job BOOLEAN,
  pros JSONB,
  cons JSONB,
  job_summary TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  google_jobs_listing_url TEXT,
  apply_options JSONB
);

CREATE TABLE read_jobs (
    id UUID PRIMARY KEY,
    job_id TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE read_jobs ENABLE electric;
ALTER TABLE jobs ENABLE electric;

