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
import { getQuestionById, getQuestionsByTopicRef } from "@/lib/data/questions";
import { getQuestionsForCourse } from "@/lib/data/courseQuestions";
import type { Course } from "@/lib/types";

const COURSES = new Set<Course>(["a-level-maths", "a-level-further-maths"]);

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
    const question = getQuestionById(id);
    if (!question) {
      return NextResponse.json({ error: "Question not found." }, { status: 404 });
    }
    return NextResponse.json({ question });
  }

  if (topicRef) {
    return NextResponse.json({ questions: getQuestionsByTopicRef(topicRef) });
  }

  if (course) {
    if (!COURSES.has(course)) {
      return NextResponse.json({ error: "Unknown course." }, { status: 400 });
    }
    return NextResponse.json({ questions: getQuestionsForCourse(course) });
  }

  return NextResponse.json(
    { error: "Provide exactly one of: id, topicRef, course." },
    { status: 400 },
  );
}
