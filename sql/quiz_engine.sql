-- ============================================================
-- Teacher Quiz Configuration & Grading — schema
-- ============================================================
-- Persistence is Supabase/Postgres (this repo does not use Prisma).
--
-- DESIGN NOTE on the question bank:
--   The live question bank is currently in-memory TypeScript
--   (lib/data/questions → Question[]). The quiz GENERATOR samples from
--   that bank in-process (see lib/services/quizGenerator.ts); it does NOT
--   read `question_bank` below. The `question_bank` table is provided as the
--   migration target for when the bank moves into the DB — its columns mirror
--   the TS `Question` shape so the sampler can later be repointed at SQL with
--   no API change. Until then it can stay empty.
--
-- RLS follows sql/zero_trust_roles.sql: every policy has USING + WITH CHECK,
-- and `app.current_user_id` is set per request by a non-service-role connection.
-- ============================================================

-- 1. Difficulty enum mirrors the TS QuestionDifficulty union.
DO $$ BEGIN
  CREATE TYPE question_difficulty AS ENUM ('Foundation', 'Standard', 'Challenge');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 2. (Migration target) DB-backed question bank — mirrors the TS Question shape.
CREATE TABLE IF NOT EXISTS public.question_bank (
  id            text PRIMARY KEY,                  -- e.g. "y2tf1-076" (stable content id)
  topic_ref     text NOT NULL,                     -- maps to Topic.ref, e.g. "y2tf1"
  topic_title   text NOT NULL,
  difficulty    question_difficulty NOT NULL,
  question_text text NOT NULL,
  marks         integer NOT NULL DEFAULT 1 CHECK (marks >= 0),
  exam_style    boolean NOT NULL DEFAULT false,
  tags          text[] NOT NULL DEFAULT '{}',
  -- grading + display
  final_answer      text,                          -- LaTeX prose (display)
  canonical_answer  text,                          -- clean parseable expr (grading); nullable
  worked_solution   jsonb,                         -- full WorkedSolution blob
  year_created      integer,
  created_at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_qbank_topic_diff ON public.question_bank (topic_ref, difficulty);

-- 3. Quiz template — the teacher's reusable CONFIGURATION (not the questions).
--    `topic_quotas` stores the exact per-topic, per-difficulty counts, e.g.
--    [{ "topicRef": "d1", "Foundation": 2, "Standard": 0, "Challenge": 1 }, ...]
CREATE TABLE IF NOT EXISTS public.quiz_templates (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id    text NOT NULL,                      -- owner = session.sub
  title         text NOT NULL CHECK (char_length(title) BETWEEN 1 AND 120),
  course        text NOT NULL,                      -- "a-level-maths" | "a-level-further-maths"
  total_target  integer NOT NULL CHECK (total_target BETWEEN 1 AND 100),
  topic_quotas  jsonb NOT NULL,                     -- TopicQuota[]
  shuffle       boolean NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_templates_teacher ON public.quiz_templates (teacher_id);

-- 4. Generated quiz — a concrete instance produced from a template/config.
--    `question_ids` is the ordered set the generator sampled (ids into the bank),
--    `seed` makes a generation reproducible.
CREATE TABLE IF NOT EXISTS public.quizzes (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id    text NOT NULL,                      -- owner = session.sub
  template_id   uuid REFERENCES public.quiz_templates (id) ON DELETE SET NULL,
  title         text NOT NULL,
  course        text NOT NULL,
  question_ids  text[] NOT NULL,                    -- ordered bank ids
  seed          bigint,
  created_at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_quizzes_teacher ON public.quizzes (teacher_id);

-- 5. Per-student submission of a quiz.
CREATE TABLE IF NOT EXISTS public.quiz_submissions (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id       uuid NOT NULL REFERENCES public.quizzes (id) ON DELETE CASCADE,
  student_id    uuid NOT NULL,
  submitted_at  timestamptz NOT NULL DEFAULT now(),
  total_marks   integer,
  awarded_marks integer
);
CREATE INDEX IF NOT EXISTS idx_submissions_quiz ON public.quiz_submissions (quiz_id);
CREATE INDEX IF NOT EXISTS idx_submissions_student ON public.quiz_submissions (student_id);

-- 6. Per-question answer + grading verdict from the symbolic engine.
CREATE TABLE IF NOT EXISTS public.quiz_answers (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id   uuid NOT NULL REFERENCES public.quiz_submissions (id) ON DELETE CASCADE,
  question_id     text NOT NULL,
  student_answer  text NOT NULL,
  is_equivalent   boolean,                          -- grader verdict; null = needs manual grade
  grade_method    text,                             -- 'symbolic' | 'numeric' | 'constant' | 'manual'
  created_at      timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_answers_submission ON public.quiz_answers (submission_id);

-- ============================================================
-- Row-Level Security (USING + WITH CHECK on every policy)
-- ============================================================
ALTER TABLE public.question_bank    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_templates   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_answers     ENABLE ROW LEVEL SECURITY;

-- Question bank: readable by any authenticated user; writes go through a
-- privileged (service-role) path only, so no non-bypassing write policy.
CREATE POLICY qbank_read ON public.question_bank
  FOR SELECT USING (current_setting('app.current_user_id', true) IS NOT NULL);

-- Templates & quizzes: a teacher only sees and mutates their own.
CREATE POLICY templates_own ON public.quiz_templates
  FOR ALL
  USING      (teacher_id = current_setting('app.current_user_id', true))
  WITH CHECK (teacher_id = current_setting('app.current_user_id', true));

CREATE POLICY quizzes_own ON public.quizzes
  FOR ALL
  USING      (teacher_id = current_setting('app.current_user_id', true))
  WITH CHECK (teacher_id = current_setting('app.current_user_id', true));

-- Submissions: a student owns their own submissions.
CREATE POLICY submissions_own ON public.quiz_submissions
  FOR ALL
  USING      (student_id = current_setting('app.current_user_id', true)::uuid)
  WITH CHECK (student_id = current_setting('app.current_user_id', true)::uuid);

-- Answers: gated through ownership of the parent submission.
CREATE POLICY answers_own ON public.quiz_answers
  FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.quiz_submissions s
    WHERE s.id = quiz_answers.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.quiz_submissions s
    WHERE s.id = quiz_answers.submission_id
      AND s.student_id = current_setting('app.current_user_id', true)::uuid));

-- ============================================================
-- Classes & quiz assignment (added for the "build a class from
-- names → assign a quiz to it" feature).
--
-- NOTE: the live app currently stores classes in the browser
-- (localStorage, via lib/services/classStore.ts) because it runs in
-- mock mode. These tables are the production target — when a real
-- backend is wired, repoint the store at them with teacher_id =
-- session.sub, written through an RLS-respecting (non-service-role)
-- connection that sets app.current_user_id.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.classes (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  -- text (not uuid): holds session.sub, which is the user's email in mock mode
  -- and the Supabase user id once real auth is wired.
  teacher_id  text NOT NULL,
  name        text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
  course      text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_classes_teacher ON public.classes (teacher_id);

-- A class member is just a name in the prototype (no student account yet);
-- student_id is nullable so it can be linked to a real users row later.
CREATE TABLE IF NOT EXISTS public.class_members (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id    uuid NOT NULL REFERENCES public.classes (id) ON DELETE CASCADE,
  name        text NOT NULL,
  student_id  uuid,
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_class_members_class ON public.class_members (class_id);

-- A quiz assigned to a class (links the generated quiz to the cohort).
CREATE TABLE IF NOT EXISTS public.quiz_assignments (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id     uuid NOT NULL REFERENCES public.classes (id) ON DELETE CASCADE,
  quiz_id      uuid REFERENCES public.quizzes (id) ON DELETE SET NULL,
  title        text NOT NULL,
  question_ids text[] NOT NULL,
  assigned_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_assignments_class ON public.quiz_assignments (class_id);

ALTER TABLE public.classes          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_members    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_assignments ENABLE ROW LEVEL SECURITY;

-- A teacher only sees/mutates their own classes.
CREATE POLICY classes_own ON public.classes
  FOR ALL
  USING      (teacher_id = current_setting('app.current_user_id', true))
  WITH CHECK (teacher_id = current_setting('app.current_user_id', true));

-- Members & assignments are gated through ownership of the parent class.
CREATE POLICY class_members_own ON public.class_members
  FOR ALL
  USING (EXISTS (SELECT 1 FROM public.classes c
                 WHERE c.id = class_members.class_id
                   AND c.teacher_id = current_setting('app.current_user_id', true)))
  WITH CHECK (EXISTS (SELECT 1 FROM public.classes c
                 WHERE c.id = class_members.class_id
                   AND c.teacher_id = current_setting('app.current_user_id', true)));

CREATE POLICY quiz_assignments_own ON public.quiz_assignments
  FOR ALL
  USING (EXISTS (SELECT 1 FROM public.classes c
                 WHERE c.id = quiz_assignments.class_id
                   AND c.teacher_id = current_setting('app.current_user_id', true)))
  WITH CHECK (EXISTS (SELECT 1 FROM public.classes c
                 WHERE c.id = quiz_assignments.class_id
                   AND c.teacher_id = current_setting('app.current_user_id', true)));
