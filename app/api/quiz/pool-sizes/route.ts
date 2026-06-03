/**
 * GET /api/quiz/pool-sizes?course=a-level-maths
 *
 * Returns how many questions exist in the bank for each (topicRef, difficulty),
 * so the Quiz Builder can show "N available" next to each difficulty input and
 * cap the counts. Lean counts only — avoids shipping the whole question bank to
 * the client.
 *
 * Teacher-only: auth → role → rate limit ("global", keyed on user id).
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { poolSizes } from "@/lib/services/quizGenerator";
import type { Course } from "@/lib/types";

const COURSES = new Set<Course>(["a-level-maths", "a-level-further-maths"]);

export async function GET(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  if (session.role !== "teacher") {
    return NextResponse.json({ error: "Teachers only." }, { status: 403 });
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const course = request.nextUrl.searchParams.get("course") as Course | null;
  if (!course || !COURSES.has(course)) {
    return NextResponse.json({ error: "Unknown or missing course." }, { status: 400 });
  }

  return NextResponse.json({ pools: poolSizes(course) });
}
