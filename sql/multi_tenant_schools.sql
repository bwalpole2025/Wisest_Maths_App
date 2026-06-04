-- ============================================================
-- Multi-tenancy: schools → (teachers, students) → classes
-- ============================================================
-- Adds a "school" tenant boundary so a school's teachers/students
-- cannot see another school's data. Isolation is enforced by
-- Row Level Security keyed on per-request settings:
--   app.current_user_id   (text)  = session.sub
--   app.current_school_id (uuid)  = session.schoolId
--   app.current_role      (text)  = session.role  (student|teacher|school_admin)
--   app.current_email     (text)  = session.email
-- These are set with `SET LOCAL ...` inside each request transaction by
-- lib/db/tenant.ts (running as the restricted `wisest_app_user` role — NOT
-- the service-role key, which bypasses RLS). See sql/zero_trust_roles.sql.
--
-- Safe to run more than once (IF NOT EXISTS / DROP POLICY IF EXISTS /
-- CREATE OR REPLACE).
-- ============================================================

CREATE EXTENSION IF NOT EXISTS citext;

-- ── Tenant root ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.schools (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  contract_ref text,
  seats        integer CHECK (seats IS NULL OR seats > 0),
  created_at   timestamptz NOT NULL DEFAULT now()
);

-- ── School roster + first-login identity resolution ─────────
-- Every teacher/student/admin a school provisions lands here (seeded by email).
-- On first sign-in we match the email, stamp app_metadata.{role,school_id} onto
-- the auth user, and fill `user_id`. Source of truth linking an account to one school.
CREATE TABLE IF NOT EXISTS public.school_members (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id   uuid NOT NULL REFERENCES public.schools (id) ON DELETE CASCADE,
  email       citext NOT NULL,
  name        text NOT NULL,
  role        text NOT NULL CHECK (role IN ('school_admin', 'teacher', 'student')),
  user_id     uuid,                       -- filled on first sign-in
  created_at  timestamptz NOT NULL DEFAULT now(),
  UNIQUE (school_id, email)
);
CREATE INDEX IF NOT EXISTS idx_school_members_email ON public.school_members (email);
CREATE INDEX IF NOT EXISTS idx_school_members_school ON public.school_members (school_id);

-- ── Tenant column on classes (members/assignments inherit via class) ─
ALTER TABLE public.classes
  ADD COLUMN IF NOT EXISTS school_id uuid REFERENCES public.schools (id) ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS idx_classes_school ON public.classes (school_id);
-- NOTE: make NOT NULL once all rows are backfilled:
--   ALTER TABLE public.classes ALTER COLUMN school_id SET NOT NULL;

-- Roster rows carry the student's school email — used to link their account on
-- first sign-in and to read their assignments before linking. Self-contained
-- here so this migration doesn't depend on the earlier "add email" step.
ALTER TABLE public.class_members
  ADD COLUMN IF NOT EXISTS email text;
CREATE INDEX IF NOT EXISTS idx_class_members_email ON public.class_members (lower(email));

-- ============================================================
-- Cross-table helpers (SECURITY DEFINER)
-- ============================================================
-- These read across classes ↔ class_members from INSIDE the RLS policies. They
-- run as the function OWNER (bypassing RLS), which BREAKS the infinite recursion
-- you'd otherwise get when the classes policy queries class_members and the
-- class_members policy queries classes. They return only scalars used to gate
-- access — never bulk rows.
CREATE OR REPLACE FUNCTION public.class_school_id(cid uuid) RETURNS uuid
  LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT school_id FROM public.classes WHERE id = cid
$$;

CREATE OR REPLACE FUNCTION public.class_teacher_id(cid uuid) RETURNS text
  LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT teacher_id FROM public.classes WHERE id = cid
$$;

-- Is the current user a member of this class (by linked account OR verified email)?
CREATE OR REPLACE FUNCTION public.is_class_member(cid uuid, uid text, mail text) RETURNS boolean
  LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.class_members m
    WHERE m.class_id = cid
      AND ( m.student_id::text = uid
            OR (mail <> '' AND lower(m.email) = lower(mail)) )
  )
$$;

GRANT EXECUTE ON FUNCTION
  public.class_school_id(uuid),
  public.class_teacher_id(uuid),
  public.is_class_member(uuid, text, text)
  TO wisest_app_user, anon, authenticated, service_role;

-- ============================================================
-- Row Level Security
-- ============================================================
ALTER TABLE public.schools        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_members ENABLE ROW LEVEL SECURITY;

-- Retire the old teacher-only policies and any prior versions of ours.
DROP POLICY IF EXISTS classes_own              ON public.classes;
DROP POLICY IF EXISTS class_members_own         ON public.class_members;
DROP POLICY IF EXISTS quiz_assignments_own      ON public.quiz_assignments;
DROP POLICY IF EXISTS classes_school            ON public.classes;
DROP POLICY IF EXISTS classes_student           ON public.classes;
DROP POLICY IF EXISTS class_members_school      ON public.class_members;
DROP POLICY IF EXISTS class_members_self        ON public.class_members;
DROP POLICY IF EXISTS quiz_assignments_school   ON public.quiz_assignments;
DROP POLICY IF EXISTS quiz_assignments_student  ON public.quiz_assignments;
DROP POLICY IF EXISTS schools_own               ON public.schools;
DROP POLICY IF EXISTS school_members_read       ON public.school_members;
DROP POLICY IF EXISTS school_members_write      ON public.school_members;

-- The session's school as a uuid (nullif avoids an error when unset → no match).
--   current_school := nullif(current_setting('app.current_school_id', true), '')::uuid

-- schools: a user may read only their own school.
CREATE POLICY schools_own ON public.schools
  FOR SELECT
  USING (id = nullif(current_setting('app.current_school_id', true), '')::uuid);

-- school_members: everyone in the school may READ; only a school_admin may WRITE.
CREATE POLICY school_members_read ON public.school_members
  FOR SELECT
  USING (school_id = nullif(current_setting('app.current_school_id', true), '')::uuid);
CREATE POLICY school_members_write ON public.school_members
  FOR ALL
  USING (school_id = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND current_setting('app.current_role', true) = 'school_admin')
  WITH CHECK (school_id = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND current_setting('app.current_role', true) = 'school_admin');

-- classes: the owning teacher OR a school_admin, within the school.
CREATE POLICY classes_school ON public.classes
  FOR ALL
  USING (school_id = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND (teacher_id = current_setting('app.current_user_id', true)
              OR current_setting('app.current_role', true) = 'school_admin'))
  WITH CHECK (school_id = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND (teacher_id = current_setting('app.current_user_id', true)
              OR current_setting('app.current_role', true) = 'school_admin'));

-- classes: a student may READ the classes they belong to (name/course), in their school.
CREATE POLICY classes_student ON public.classes
  FOR SELECT
  USING (school_id = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND public.is_class_member(id,
               current_setting('app.current_user_id', true),
               current_setting('app.current_email', true)));

-- class_members: gated through the parent class (via SECURITY DEFINER helpers).
CREATE POLICY class_members_school ON public.class_members
  FOR ALL
  USING (public.class_school_id(class_id) = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND (public.class_teacher_id(class_id) = current_setting('app.current_user_id', true)
              OR current_setting('app.current_role', true) = 'school_admin'))
  WITH CHECK (public.class_school_id(class_id) = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND (public.class_teacher_id(class_id) = current_setting('app.current_user_id', true)
              OR current_setting('app.current_role', true) = 'school_admin'));

-- class_members: a student may READ their own roster rows (by account or email), in school.
CREATE POLICY class_members_self ON public.class_members
  FOR SELECT
  USING ((student_id::text = current_setting('app.current_user_id', true)
          OR (current_setting('app.current_email', true) <> ''
              AND lower(email) = lower(current_setting('app.current_email', true))))
         AND public.class_school_id(class_id) = nullif(current_setting('app.current_school_id', true), '')::uuid);

-- quiz_assignments: gated through the parent class (teacher/admin).
CREATE POLICY quiz_assignments_school ON public.quiz_assignments
  FOR ALL
  USING (public.class_school_id(class_id) = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND (public.class_teacher_id(class_id) = current_setting('app.current_user_id', true)
              OR current_setting('app.current_role', true) = 'school_admin'))
  WITH CHECK (public.class_school_id(class_id) = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND (public.class_teacher_id(class_id) = current_setting('app.current_user_id', true)
              OR current_setting('app.current_role', true) = 'school_admin'));

-- quiz_assignments: a student may READ assignments of classes they belong to, in school.
CREATE POLICY quiz_assignments_student ON public.quiz_assignments
  FOR SELECT
  USING (public.class_school_id(class_id) = nullif(current_setting('app.current_school_id', true), '')::uuid
         AND public.is_class_member(class_id,
               current_setting('app.current_user_id', true),
               current_setting('app.current_email', true)));

-- ============================================================
-- Table privileges
-- ============================================================
-- Supabase's built-in roles need table-level privileges (separate from RLS):
--   service_role  — used by the admin client (provisioning, OAuth identity
--                   resolution); it BYPASSES RLS but still needs GRANTs.
--   anon/authenticated — granted for completeness; RLS still denies them every
--                   row here. New Supabase tables get these grants automatically,
--                   but tables created via raw SQL do not.
GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.schools, public.school_members
  TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.classes, public.class_members, public.quiz_assignments
  TO service_role;

-- The restricted application role used by lib/db/tenant.ts (RLS is enforced).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'wisest_app_user') THEN
    GRANT USAGE ON SCHEMA public TO wisest_app_user;
    GRANT SELECT                         ON public.schools         TO wisest_app_user;
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.school_members  TO wisest_app_user;
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.classes         TO wisest_app_user;
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_members   TO wisest_app_user;
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.quiz_assignments TO wisest_app_user;
  END IF;
END $$;
