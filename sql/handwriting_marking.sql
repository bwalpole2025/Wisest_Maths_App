-- ============================================================
-- Handwriting Marking — schema
-- ============================================================
-- Persistence is Supabase/Postgres (this repo does not use Prisma).
-- Run AFTER sql/zero_trust_roles.sql (needs the wisest_app_user + service_role
-- roles). Safe to run more than once (IF NOT EXISTS / enum guard /
-- CREATE OR REPLACE / DROP POLICY|TRIGGER IF EXISTS).
--
-- Data model for the handwriting-marking feature: a student uploads a photo of
-- their working; an OCR provider transcribes it; the student confirms/edits the
-- transcription; a marker produces an (advisory) mark breakdown. The image
-- BYTES are never stored here — only an object-storage key + a retention expiry.
--
-- Identifiers follow the existing convention:
--   * student_id  uuid  = session.sub (Supabase auth user id); NO FK
--                          (there is no local users table) — cf. quiz_submissions.
--   * question_id text  = static-TS question id e.g. "gn12-001"; NO FK
--                          (the bank is in-memory TS) — cf. quiz_answers.question_id.
--   * mark_scheme_id text = opaque reference; no mark-scheme table yet.
--
-- RLS follows sql/zero_trust_roles.sql: every policy has USING + WITH CHECK and
-- `app.current_user_id` is set per request by a non-service-role connection.
-- Rows are owned by the student; child rows are gated through the parent
-- submission's ownership (same shape as quiz_answers.answers_own).
-- ============================================================

-- 1. Submission lifecycle status.
DO $$ BEGIN
  CREATE TYPE submission_status AS ENUM (
    'UPLOADED', 'RECOGNISING', 'AWAITING_CONFIRMATION',
    'CONFIRMED', 'MARKING', 'MARKED', 'FAILED'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 2. Submission — the student-owned root row.
CREATE TABLE IF NOT EXISTS public.submissions (
  id                   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  -- session.sub (Supabase auth user id); no FK (no local users table).
  student_id           uuid NOT NULL,
  -- static-TS question id (e.g. "gn12-001"); no FK (the bank is in-memory TS).
  question_id          text,
  status               submission_status NOT NULL DEFAULT 'UPLOADED',
  -- object-storage key, NOT the image bytes.
  image_storage_key    text NOT NULL,
  image_mime_type      text NOT NULL,
  image_size_bytes     integer NOT NULL,
  -- when the stored image must be deleted (retention).
  retention_expires_at timestamptz NOT NULL,
  created_at           timestamptz NOT NULL DEFAULT now(),
  updated_at           timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_submissions_student_created
  ON public.submissions (student_id, created_at);
CREATE INDEX IF NOT EXISTS idx_submissions_status
  ON public.submissions (status);

-- 3. Recognition — one current OCR result per submission.
CREATE TABLE IF NOT EXISTS public.recognitions (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id      uuid NOT NULL UNIQUE REFERENCES public.submissions (id) ON DELETE CASCADE,
  provider           text NOT NULL DEFAULT 'mathpix',
  raw_latex          text NOT NULL,
  rendered_markdown  text,
  overall_confidence double precision,
  -- per-line text + confidence as returned by the OCR provider.
  line_data          jsonb,
  created_at         timestamptz NOT NULL DEFAULT now()
);

-- 4. TranscriptionConfirmation — the student-approved working.
CREATE TABLE IF NOT EXISTS public.transcription_confirmations (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id     uuid NOT NULL UNIQUE REFERENCES public.submissions (id) ON DELETE CASCADE,
  confirmed_latex   text NOT NULL,
  -- true if the student corrected the OCR before confirming.
  edited_by_student boolean NOT NULL,
  confirmed_at      timestamptz NOT NULL DEFAULT now()
);

-- 5. MarkingResult — the (advisory) marks for a submission.
CREATE TABLE IF NOT EXISTS public.marking_results (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id         uuid NOT NULL UNIQUE REFERENCES public.submissions (id) ON DELETE CASCADE,
  mark_scheme_id        text NOT NULL,
  total_marks_available integer NOT NULL,
  total_marks_awarded   integer NOT NULL,
  final_answer_correct  boolean,
  -- array of per-mark objects (element schema defined in Phase 5).
  mark_breakdown        jsonb NOT NULL DEFAULT '[]'::jsonb,
  -- method-mark allocation is advisory.
  advisory              boolean NOT NULL DEFAULT true,
  marker_model          text NOT NULL,
  created_at            timestamptz NOT NULL DEFAULT now()
);

-- 6. Keep submissions.updated_at fresh as the status moves through the
-- lifecycle (the other tables are append-only, so they have no updated_at).
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger
  LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_submissions_set_updated_at ON public.submissions;
CREATE TRIGGER trg_submissions_set_updated_at
  BEFORE UPDATE ON public.submissions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 7. Row Level Security — students own their submissions; child rows are gated
-- through the parent submission's ownership.
ALTER TABLE public.submissions                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recognitions                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transcription_confirmations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marking_results             ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS submissions_own            ON public.submissions;
DROP POLICY IF EXISTS recognitions_own           ON public.recognitions;
DROP POLICY IF EXISTS transcription_conf_own     ON public.transcription_confirmations;
DROP POLICY IF EXISTS marking_results_own        ON public.marking_results;

CREATE POLICY submissions_own ON public.submissions
  FOR ALL
  USING      (student_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (student_id = current_setting('app.current_user_id', true)::uuid);

CREATE POLICY recognitions_own ON public.recognitions
  FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.submissions s
    WHERE s.id = recognitions.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.submissions s
    WHERE s.id = recognitions.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid));

CREATE POLICY transcription_conf_own ON public.transcription_confirmations
  FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.submissions s
    WHERE s.id = transcription_confirmations.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.submissions s
    WHERE s.id = transcription_confirmations.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid));

CREATE POLICY marking_results_own ON public.marking_results
  FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.submissions s
    WHERE s.id = marking_results.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.submissions s
    WHERE s.id = marking_results.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid));

-- 8. Grants.
--  * wisest_app_user: the RLS-respecting application role (per-request GUCs).
--    DELETE supports retention cleanup; ON DELETE CASCADE clears child rows.
--  * service_role: the privileged server pipeline (OCR/marking) + retention job
--    that run without a student session (RLS-bypassing), cf. provisioning grants.
GRANT SELECT, INSERT, UPDATE, DELETE ON
  public.submissions,
  public.recognitions,
  public.transcription_confirmations,
  public.marking_results
TO wisest_app_user;

GRANT SELECT, INSERT, UPDATE, DELETE ON
  public.submissions,
  public.recognitions,
  public.transcription_confirmations,
  public.marking_results
TO service_role;
