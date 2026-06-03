-- ============================================================
-- Zero-Trust Database Configuration for Wisest Maths App
-- ============================================================
-- Principle of Least Privilege: the application connects as
-- 'wisest_app_user' which can only SELECT public content and
-- perform controlled CRUD on user-facing tables. It CANNOT
-- drop tables, access raw credentials, or modify the schema.
-- ============================================================

-- 1. Create the restricted application role
CREATE ROLE wisest_app_user WITH
  LOGIN
  PASSWORD 'CHANGE_ME_IN_PRODUCTION'   -- rotate via secrets manager
  NOSUPERUSER
  NOCREATEDB
  NOCREATEROLE
  CONNECTION LIMIT 50;                 -- prevent connection exhaustion

-- 2. Revoke all default privileges (start from zero)
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM wisest_app_user;
REVOKE ALL ON SCHEMA public FROM wisest_app_user;

-- 3. Grant usage on the public schema (needed to see tables)
GRANT USAGE ON SCHEMA public TO wisest_app_user;

-- 4. READ-ONLY access to content tables (questions, lessons, topics)
GRANT SELECT ON TABLE
  public.lessons,
  public.worked_examples,
  public.topics,
  public.questions,
  public.binomial_expansions
TO wisest_app_user;

-- 5. Controlled CRUD on user-facing tables
--    (the app needs to create/update user progress, sessions, etc.)
GRANT SELECT, INSERT, UPDATE ON TABLE
  public.users,
  public.sessions,
  public.subscriptions,
  public.user_progress,
  public.consent_records,
  public.assessment_results
TO wisest_app_user;

-- 6. Allow sequence usage (needed for auto-increment IDs)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO wisest_app_user;

-- 7. EXPLICITLY DENY dangerous operations
--    (these are already denied by default, but we make it explicit)
REVOKE DELETE ON TABLE
  public.lessons,
  public.worked_examples,
  public.topics,
  public.questions
FROM wisest_app_user;

-- 8. Block access to the private schema entirely
--    This schema contains raw PII, password hashes, API keys
CREATE SCHEMA IF NOT EXISTS users_private_details;

REVOKE ALL ON SCHEMA users_private_details FROM wisest_app_user;
REVOKE ALL ON ALL TABLES IN SCHEMA users_private_details FROM wisest_app_user;

-- 9. Prevent DROP, ALTER, TRUNCATE (schema modification)
--    The app user has no CREATE/ALTER privileges by default,
--    but we add an explicit event trigger as defense-in-depth.
CREATE OR REPLACE FUNCTION prevent_destructive_ops()
RETURNS event_trigger
LANGUAGE plpgsql AS $$
BEGIN
  IF current_user = 'wisest_app_user' THEN
    RAISE EXCEPTION 'Destructive DDL operations are not permitted for this role';
  END IF;
END;
$$;

CREATE EVENT TRIGGER block_ddl_for_app_user
  ON ddl_command_start
  EXECUTE FUNCTION prevent_destructive_ops();

-- 10. Row-Level Security (RLS) on EVERY user-data table.
--     Users can only access their own records. Each policy has BOTH:
--       USING      — gates which existing rows a query can read/affect.
--       WITH CHECK — gates the values a row may be INSERTed/UPDATEd to, so a
--                    user cannot create or move a row to another user_id.
--     Without WITH CHECK, INSERTs are unconstrained (CWE-639): a user could
--     write rows owned by someone else.
--
--     NOTE: these policies only protect connections that do NOT bypass RLS.
--     The Supabase service-role key bypasses RLS entirely, so any user-data
--     CRUD must go through a request-scoped role (the restricted
--     `wisest_app_user`, or the anon/authenticated client) with
--     `SET LOCAL app.current_user_id = '<uuid>'` per request — never the
--     service-role client.

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY users_own_data ON public.users
  FOR ALL
  USING      (id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (id = current_setting('app.current_user_id', true)::uuid);

ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY progress_own_data ON public.user_progress
  FOR ALL
  USING      (user_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (user_id = current_setting('app.current_user_id', true)::uuid);

ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY assessment_own_data ON public.assessment_results
  FOR ALL
  USING      (user_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (user_id = current_setting('app.current_user_id', true)::uuid);

-- The remaining user-facing tables (granted CRUD in step 5) also need RLS,
-- otherwise they are readable/writable across users by any non-bypassing role.
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY sessions_own_data ON public.sessions
  FOR ALL
  USING      (user_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (user_id = current_setting('app.current_user_id', true)::uuid);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY subscriptions_own_data ON public.subscriptions
  FOR ALL
  USING      (user_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (user_id = current_setting('app.current_user_id', true)::uuid);

ALTER TABLE public.consent_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY consent_own_data ON public.consent_records
  FOR ALL
  USING      (user_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (user_id = current_setting('app.current_user_id', true)::uuid);

-- ============================================================
-- ADMIN ROLE (for migrations, backups — never used by the app)
-- ============================================================
CREATE ROLE wisest_admin WITH
  LOGIN
  PASSWORD 'CHANGE_ME_ADMIN'
  SUPERUSER
  CREATEDB
  CREATEROLE
  CONNECTION LIMIT 3;

-- ============================================================
-- Notes for deployment:
-- 1. Replace passwords with values from your secrets manager
-- 2. Set DATABASE_URL in .env.local to use wisest_app_user
-- 3. Use wisest_admin ONLY for migrations (prisma migrate)
-- 4. Set app.current_user_id at the start of each request
--    for RLS to work: SET LOCAL app.current_user_id = '<uuid>';
-- ============================================================
