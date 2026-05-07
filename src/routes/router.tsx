import {
  createRouter,
  createRoute,
  createRootRoute,
  redirect,
  Outlet,
} from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";

// Pages
import { LandingPage } from "@/pages/Landing";
import { LoginPage } from "@/pages/Login";
import { CourseSelectionPage } from "@/pages/CourseSelection";
import { CourseLandingPage } from "@/pages/CourseLanding";
import { CourseYear1Page } from "@/pages/CourseYear1";
import { CourseYear2Page } from "@/pages/CourseYear2";
import { StudentDashboard } from "@/pages/student/Dashboard";
import { StudentTopics } from "@/pages/student/Topics";
import { TopicDetailPage } from "@/pages/student/TopicDetail";
import { StudentQuestions } from "@/pages/student/Questions";
import { QuestionAttemptPage } from "@/pages/student/QuestionAttempt";
import { AssessmentPage } from "@/pages/student/Assessment";
import { TutorPage } from "@/pages/student/Tutor";
import { TeacherDashboard } from "@/pages/teacher/Dashboard";
import { TeacherTopics } from "@/pages/teacher/Topics";
import { TeacherQuestionBank } from "@/pages/teacher/QuestionBank";
import { QuestionEditorPage } from "@/pages/teacher/QuestionEditor";
import { TeacherStudents } from "@/pages/teacher/Students";

// Layouts
import { StudentLayout } from "@/routes/layouts/StudentLayout";
import { TeacherLayout } from "@/routes/layouts/TeacherLayout";

// Auth helper
function getUser() {
  try {
    const stored = localStorage.getItem("mathsapp-auth");
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return null;
}

// ── Root ──────────────────────────────────────────
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  ),
});

// ── Public routes ─────────────────────────────────
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

// ── Courses routes (auth required) ────────────────
const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  beforeLoad: () => {
    if (!getUser()) throw redirect({ to: "/login" });
  },
  component: CourseSelectionPage,
});

const aLevelMathsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/a-level-maths",
  beforeLoad: () => {
    if (!getUser()) throw redirect({ to: "/login" });
  },
  component: CourseLandingPage,
});

const year1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/a-level-maths/year-1",
  beforeLoad: () => {
    if (!getUser()) throw redirect({ to: "/login" });
  },
  component: CourseYear1Page,
});

const year2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/a-level-maths/year-2",
  beforeLoad: () => {
    if (!getUser()) throw redirect({ to: "/login" });
  },
  component: CourseYear2Page,
});

// ── Student layout route ──────────────────────────
const studentLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "student-layout",
  component: StudentLayout,
  beforeLoad: () => {
    if (!getUser()) throw redirect({ to: "/login" });
  },
});

const studentDashboardRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/dashboard",
  component: StudentDashboard,
});

const studentTopicsRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/topics",
  component: StudentTopics,
});

const studentTopicDetailRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/topics/$topicId",
  component: () => {
    const { topicId } = studentTopicDetailRoute.useParams();
    return <TopicDetailPage params={{ topicId }} />;
  },
});

const studentQuestionsRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/questions",
  validateSearch: (search: Record<string, unknown>) => ({
    topicRef: (search.topicRef as string) || undefined,
    subcategory: (search.subcategory as string) || undefined,
    module: search.module ? String(search.module) : undefined,
    year: search.year ? String(search.year) : undefined,
    component: (search.component as string) || undefined,
  }),
  component: () => {
    const search = studentQuestionsRoute.useSearch();
    return <StudentQuestions search={search} />;
  },
});

const questionAttemptRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/questions/attempt",
  validateSearch: (search: Record<string, unknown>) => ({
    id: (search.id as string) || undefined,
  }),
  component: () => {
    const search = questionAttemptRoute.useSearch();
    return <QuestionAttemptPage search={search} />;
  },
});

const assessmentRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/assessment/$sessionId",
  component: () => {
    const { sessionId } = assessmentRoute.useParams();
    return <AssessmentPage params={{ sessionId }} />;
  },
});

const tutorRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/student/tutor",
  component: TutorPage,
});

// ── Teacher layout route ──────────────────────────
const teacherLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "teacher-layout",
  component: TeacherLayout,
  beforeLoad: () => {
    const user = getUser();
    if (!user) throw redirect({ to: "/login" });
    if (user.role !== "teacher") throw redirect({ to: "/login" });
  },
});

const teacherDashboardRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/teacher/dashboard",
  component: TeacherDashboard,
});

const teacherTopicsRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/teacher/topics",
  component: TeacherTopics,
});

const teacherQuestionBankRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/teacher/question-bank",
  component: TeacherQuestionBank,
});

const teacherQuestionEditorRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/teacher/question-bank/$questionId",
  component: () => {
    const { questionId } = teacherQuestionEditorRoute.useParams();
    return <QuestionEditorPage params={{ questionId }} />;
  },
});

const teacherStudentsRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/teacher/students",
  component: TeacherStudents,
});

// ── Route tree ────────────────────────────────────
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  coursesRoute,
  aLevelMathsRoute,
  year1Route,
  year2Route,
  studentLayoutRoute.addChildren([
    studentDashboardRoute,
    studentTopicsRoute,
    studentTopicDetailRoute,
    studentQuestionsRoute,
    questionAttemptRoute,
    assessmentRoute,
    tutorRoute,
  ]),
  teacherLayoutRoute.addChildren([
    teacherDashboardRoute,
    teacherTopicsRoute,
    teacherQuestionBankRoute,
    teacherQuestionEditorRoute,
    teacherStudentsRoute,
  ]),
]);

// ── Router instance ───────────────────────────────
export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
