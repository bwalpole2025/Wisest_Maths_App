/**
 * POST /api/student/quiz-questions
 *
 * Given a list of question ids (the ids of a quiz the student has been
 * assigned), return those questions WITHOUT their worked solutions, so the
 * student can take the quiz while the answers stay on the server. Grading still
 * happens server-side via /api/quiz/grade.
 *
 * Body: { ids: string[] }   (max 100)
 */
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getQuestionById } from "@/lib/data/questions";

export async function POST(request: NextRequest) {
  // 1. Authentication
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  // 2. Rate limiting (keyed on user id)
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }
  // 3. Parse + validate the body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const ids = (body as { ids?: unknown }).ids;
  if (!Array.isArray(ids) || ids.length > 100 || ids.some((x) => typeof x !== "string")) {
    return NextResponse.json({ error: "Invalid ids." }, { status: 400 });
  }
  // 4. Look up each question and strip the solution. Preserve the requested
  //    order, and silently drop any id that no longer exists.
  const questions = (ids as string[])
    .map((id) => getQuestionById(id))
    .filter((q): q is NonNullable<typeof q> => Boolean(q))
    .map((q) => ({ ...q, workedSolution: { steps: [], finalAnswer: "" } }));

  return NextResponse.json({ questions });
}
