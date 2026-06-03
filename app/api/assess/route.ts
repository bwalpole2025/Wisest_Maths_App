/**
 * POST /api/assess
 *
 * AI-powered assessment scoring for a single question.
 *
 * Body: { questionText, studentAnswer, studentExplanation?, correctAnswer }
 * Returns: { score, feedback, improvements }
 *
 * Security layers (in order):
 *   1. Authentication — verified signed session cookie (401 if absent).
 *   2. Rate limiting — "ai" tier, keyed on user id, after auth.
 *   3. Input validation — Zod schema; reject unknown/oversized input with 400.
 *
 * NOTE: the scoring body is still a placeholder. When wiring a real LLM call,
 * keep these three guards at the top so the paid endpoint is never reachable
 * unauthenticated or unthrottled.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";

const AssessSchema = z
  .object({
    questionText: z.string().min(1).max(2000),
    studentAnswer: z.string().max(2000),
    studentExplanation: z.string().max(2000).optional().default(""),
    correctAnswer: z.string().max(2000),
  })
  .strict();

export async function POST(request: NextRequest) {
  // ── 1. Authentication ────────────────────────────────────────────────
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  // ── 2. Rate limiting (AI tier, after auth) ───────────────────────────
  const rate = await checkRateLimit(session.sub, "ai");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 },
    );
  }

  // ── 3. Input validation ──────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = AssessSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { studentAnswer } = parsed.data;
  const hasContent = studentAnswer.trim().length > 0;

  // Placeholder scoring — replace with a server-side LLM call (the guards above
  // already protect a paid endpoint).
  return NextResponse.json({
    score: hasContent ? 7 : 2,
    feedback: hasContent
      ? "Good attempt! You correctly identified the method but made an arithmetic error in the final step."
      : "You did not provide an answer. Try to show your working even if you are unsure.",
    improvements: [
      "Check your arithmetic carefully in the final step",
      "Remember to include the constant of integration where applicable",
    ],
  });
}
