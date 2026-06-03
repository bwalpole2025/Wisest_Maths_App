/**
 * POST /api/quiz/grade
 *
 * Grades a single student answer by SYMBOLIC EQUIVALENCE against the question's
 * canonical solution — never string matching. The canonical target is looked up
 * server-side from the question id, so the answer is never trusted from / leaked
 * to the client.
 *
 * Body:   { questionId, studentAnswer }
 * Returns { equivalent, method, detail }  (normalised forms kept server-side)
 *
 * Security layers: auth → rate limit ("global", keyed on user id) → strict Zod.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getQuestionById } from "@/lib/services/quizGenerator";
import { checkEquivalence, canonicalFor } from "@/lib/services/symbolicGrading";

const GradeSchema = z
  .object({
    questionId: z.string().min(1).max(64),
    studentAnswer: z.string().min(1).max(512),
  })
  .strict();

export async function POST(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = GradeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { questionId, studentAnswer } = parsed.data;
  const question = getQuestionById(questionId);
  if (!question) {
    return NextResponse.json({ error: "Unknown question." }, { status: 404 });
  }

  const canonical = canonicalFor(question.workedSolution);
  const result = checkEquivalence(studentAnswer, canonical);

  // `equivalent: null` => engine could not auto-grade (e.g. a proof or an
  // unparseable canonical). Surface that as "needs manual grading" rather than
  // a false negative, so the student isn't wrongly penalised.
  return NextResponse.json({
    questionId,
    equivalent: result.equivalent,
    needsManualGrade: result.equivalent === null,
    method: result.method,
    detail: result.detail,
  });
}
