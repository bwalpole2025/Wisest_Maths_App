-- Per-student / per-question attempt state for the diagnosis engine's Layer-3
-- progressive disclosure (reveal worked-solution steps one at a time on repeated
-- failure). Mirrors the RLS conventions of sql/handwriting_marking.sql.
--
-- No migration runner exists in this repo — apply this file manually (Supabase
-- SQL editor or psql) against the same database as the other sql/ files. The
-- `set_updated_at()` function is defined here too (CREATE OR REPLACE) so this
-- file is self-contained regardless of apply order.

CREATE TABLE IF NOT EXISTS public.student_attempts (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  -- session.sub (Supabase auth user id); no FK (no local users table).
  student_id          uuid NOT NULL,
  -- static-TS question id (e.g. "gn12-001"); no FK (the bank is in-memory TS).
  question_id         text NOT NULL,
  -- total wrong attempts for this student+question (resets when answered right).
  wrong_attempts      integer NOT NULL DEFAULT 0,
  -- how many workedSolution steps have been revealed so far (monotonic, capped).
  revealed_step_count integer NOT NULL DEFAULT 0,
  last_attempt_at     timestamptz NOT NULL DEFAULT now(),
  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now(),
  UNIQUE (student_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_student_attempts_student
  ON public.student_attempts (student_id, question_id);

-- Keep updated_at fresh on every UPDATE (shared with handwriting_marking.sql).
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger
  LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_student_attempts_set_updated_at ON public.student_attempts;
CREATE TRIGGER trg_student_attempts_set_updated_at
  BEFORE UPDATE ON public.student_attempts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Row Level Security — a student may only read/write their own attempt rows.
ALTER TABLE public.student_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS student_attempts_own ON public.student_attempts;
CREATE POLICY student_attempts_own ON public.student_attempts
  FOR ALL
  USING      (student_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (student_id = current_setting('app.current_user_id', true)::uuid);

-- Grants. wisest_app_user is the RLS-respecting application role (per-request
-- GUCs); service_role is the privileged server role.
GRANT SELECT, INSERT, UPDATE, DELETE ON public.student_attempts TO wisest_app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.student_attempts TO service_role;
