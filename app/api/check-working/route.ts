/**
 * POST /api/check-working
 *
 * Deterministically grades a student's typed working against the question's
 * worked solution — both the FINAL ANSWER (symbolic equivalence) and the
 * WORKINGS (which model steps appear in the working). No AI; the canonical
 * answer is looked up server-side and never leaked (only the verdict + matched/
 * missing step descriptions are returned).
 *
 * Body:   { questionId, working }
 * Returns { finalAnswer: {equivalent, needsManualGrade, method, detail},
 *           working: {totalSteps, matchedSteps, missing: [{stepNumber, description}]} }
 *
 * Security layers: auth → rate limit ("global", keyed on user id) → strict Zod.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getQuestionById } from "@/lib/services/quizGenerator";
import { checkWorking } from "@/lib/services/workingCheck";

// child_process (the SymPy subprocess, via the final-answer grade) requires the
// Node.js runtime, not Edge.
export const runtime = "nodejs";

const CheckSchema = z
  .object({
    questionId: z.string().min(1).max(64),
    working: z.string().min(1).max(512),
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
  const parsed = CheckSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const question = getQuestionById(parsed.data.questionId);
  if (!question) {
    return NextResponse.json({ error: "Unknown question." }, { status: 404 });
  }

  const result = await checkWorking(parsed.data.working, question);
  return NextResponse.json(result);
}
