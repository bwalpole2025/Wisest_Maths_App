/**
 * GET /api/questions
 *
 * Serves question data to the client WITHOUT bundling the ~18MB bank into any
 * page's JS. The bank is imported server-side only (here + lib/data/courseQuestions).
 *
 * Query (exactly one selector):
 *   ?id=y2tf7-001        -> { question }            single question (or 404)
 *   ?topicRef=y2tf7      -> { questions }           all questions for one topic
 *   ?course=a-level-maths-> { questions }           all questions for a course
 *
 * Any authenticated user may read questions. Rate-limited on the "global" tier,
 * keyed on the user id.
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  getFullQuestionById,
  getFullQuestionsByTopicRef,
  getFullQuestionsForCourse,
} from "@/lib/data/questionsFull";
import { getSummariesByTopicRef } from "@/lib/data/questionSummaries";
import type { Course } from "@/lib/types";

// This route serves FULL questions (with workedSolution). It reads them from the
// precomputed lib/data/questions-full.generated.json via fs (see questionsFull.ts)
// rather than importing the ~27MB bank — importing the bank made the first cold
// request ~3.6s in dev. The hot browse/list path is still /api/summaries.
// Regenerate the artifact after editing the bank: `npm run gen:data`.

const COURSES = new Set<Course>(["a-level-maths", "a-level-further-maths", "gcse-maths", "undergrad-maths"]);

// The bank is static between deploys and identical for every user, but this
// endpoint is auth-gated → cache privately (browser only, never a shared CDN)
// so repeat browsing is instant. SWR keeps it snappy while revalidating.
const CACHE_HEADERS = { "Cache-Control": "private, max-age=300, stale-while-revalidate=86400" };

const MAX_LIMIT = 100;

function clampInt(raw: string | null, fallback: number, max: number): number {
  const n = Number.parseInt(raw ?? "", 10);
  if (!Number.isFinite(n) || n < 0) return fallback;
  return Math.min(n, max);
}

export async function GET(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const params = request.nextUrl.searchParams;
  const id = params.get("id");
  const topicRef = params.get("topicRef");
  const course = params.get("course") as Course | null;

  if (id) {
    const question = getFullQuestionById(id);
    if (!question) {
      return NextResponse.json({ error: "Question not found." }, { status: 404 });
    }
    return NextResponse.json({ question }, { headers: CACHE_HEADERS });
  }

  if (topicRef) {
    // Slim, paginated summaries (back-compat). The hot path is /api/summaries.
    if (params.get("summary")) {
      const limit = clampInt(params.get("limit"), MAX_LIMIT, MAX_LIMIT);
      const offset = clampInt(params.get("offset"), 0, Number.MAX_SAFE_INTEGER);
      const { items, total } = getSummariesByTopicRef(topicRef, { limit, offset });
      return NextResponse.json({ questions: items, total }, { headers: CACHE_HEADERS });
    }
    // Full questions (tutor / assessment use these).
    return NextResponse.json({ questions: getFullQuestionsByTopicRef(topicRef) }, { headers: CACHE_HEADERS });
  }

  if (course) {
    if (!COURSES.has(course)) {
      return NextResponse.json({ error: "Unknown course." }, { status: 400 });
    }
    return NextResponse.json({ questions: getFullQuestionsForCourse(course) }, { headers: CACHE_HEADERS });
  }

  return NextResponse.json(
    { error: "Provide exactly one of: id, topicRef, course." },
    { status: 400 },
  );
}
