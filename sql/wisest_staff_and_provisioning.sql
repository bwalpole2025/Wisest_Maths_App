-- ============================================================
-- Wisest staff (no-PII back-office) + school suspend
-- ============================================================
-- Adds:
--   1. schools.status  (active | suspended)  — Wisest can disable access.
--   2. PII-FREE VIEWS   school_overview / school_admins — counts + status +
--      liaison contact only; NO student/teacher names, emails, or answers.
--   3. A restricted `wisest_staff` Postgres role + RLS so a Wisest EMPLOYEE can
--      create/suspend schools and seed a school admin, but physically CANNOT read
--      student PII (no grant on class_members / student rows of school_members).
--
-- The employee's app connection (lib/db/platform.ts → DATABASE_URL_WISEST) runs
-- as `wisest_staff` with app.current_role set; super-admin (`wisest_admin`) keeps
-- the service-role for break-glass support.
--
-- Idempotent. Run AFTER sql/multi_tenant_schools.sql.
-- ============================================================

-- 1. Suspend flag --------------------------------------------------------------
ALTER TABLE public.schools
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'active'
  CHECK (status IN ('active', 'suspended'));

-- 2. PII-free views (definer-rights: aggregate PII without exposing rows) ------
-- These run with the owner's (postgres) privileges, so they read the underlying
-- tables to COUNT — but a caller granted only the view sees counts, never rows.
CREATE OR REPLACE VIEW public.school_overview AS
  SELECT s.id   AS school_id,
         s.name,
         s.contract_ref,
         s.seats,
         s.status,
         s.created_at,
         (SELECT count(*) FROM public.school_members m WHERE m.school_id = s.id AND m.role = 'teacher')      AS teacher_count,
         (SELECT count(*) FROM public.school_members m WHERE m.school_id = s.id AND m.role = 'student')      AS student_count,
         (SELECT count(*) FROM public.classes c        WHERE c.school_id = s.id)                              AS classes_count
  FROM public.schools s;

-- Liaison contact only (the school admin Wisest sets up) — not student data.
CREATE OR REPLACE VIEW public.school_admins AS
  SELECT m.school_id,
         m.email,
         m.name,
         (m.user_id IS NOT NULL) AS linked
  FROM public.school_members m
  WHERE m.role = 'school_admin';

-- 3. RLS so the wisest role can manage schools (read all, create, suspend) -----
-- The Wisest connection sets app.current_role = 'wisest_staff' | 'wisest_admin'.
DROP POLICY IF EXISTS schools_wisest ON public.schools;
CREATE POLICY schools_wisest ON public.schools
  FOR ALL
  USING (current_setting('app.current_role', true) IN ('wisest_staff', 'wisest_admin'))
  WITH CHECK (current_setting('app.current_role', true) IN ('wisest_staff', 'wisest_admin'));

-- Wisest may INSERT a school admin row (seed the liaison) — and ONLY a school_admin.
-- No SELECT/UPDATE/DELETE policy for wisest on school_members → cannot read members.
DROP POLICY IF EXISTS school_members_wisest_insert ON public.school_members;
CREATE POLICY school_members_wisest_insert ON public.school_members
  FOR INSERT
  WITH CHECK (current_setting('app.current_role', true) IN ('wisest_staff', 'wisest_admin')
             AND role = 'school_admin');

-- 4. Grants for the restricted wisest_staff role -------------------------------
-- NOTE: create the role first (rotate the password) — e.g.
--   CREATE ROLE wisest_staff WITH LOGIN PASSWORD '...' NOSUPERUSER NOCREATEDB NOCREATEROLE;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'wisest_staff') THEN
    GRANT USAGE ON SCHEMA public TO wisest_staff;
    -- Manage schools (create / suspend) + read them back.
    GRANT SELECT, INSERT, UPDATE ON public.schools TO wisest_staff;
    -- Read PII-FREE views only.
    GRANT SELECT ON public.school_overview TO wisest_staff;
    GRANT SELECT ON public.school_admins   TO wisest_staff;
    -- Seed a school admin (INSERT only — cannot read the roster).
    GRANT INSERT ON public.school_members  TO wisest_staff;
    GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO wisest_staff;
    -- Explicitly DO NOT grant any access to student PII:
    --   class_members, quiz_assignments, quiz_submissions, and SELECT on
    --   school_members are all withheld by omission.
  END IF;
END $$;

-- The super-admin's service-role and the school_overview view both need the
-- views readable by service_role too (REST/admin fallback path).
GRANT SELECT ON public.school_overview, public.school_admins TO anon, authenticated, service_role;
