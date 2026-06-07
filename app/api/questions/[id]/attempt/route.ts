/**
 * POST /api/questions/:id/attempt
 *
 * The single diagnosis entry point. Loads the question + the caller's own attempt
 * state, runs all diagnosis layers (Layer 0 correctness → Layer 1 generic
 * transforms → Layer 2 authored distractors → Layer 3 progressive disclosure),
 * persists the updated attempt state, and returns the unified DiagnosisResult.
 *
 * Never calls an LLM (math.js + optional internal SymPy sidecar only). The
 * student id comes solely from the verified session — never from the path/body —
 * so a caller can only ever touch their own attempt state (also RLS-enforced).
 * The internal `misconception` tag is recorded for analytics and stripped here.
 *
 * Body:   { answer }
 * Returns DiagnosisResult (without `misconception`)
 *
 * Security layers: auth → rate limit ("global", keyed on user id) → strict Zod.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getQuestionById } from "@/lib/services/quizGenerator";
import { diagnoseAttempt } from "@/lib/services/attemptDiagnosis";

// withTenant (pg) + the optional symbolic sidecar fetch require the Node runtime.
export const runtime = "nodejs";

const AttemptSchema = z.object({ answer: z.string().min(1).max(512) }).strict();

export async function POST(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
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

  const { id } = await ctx.params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = AttemptSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const question = getQuestionById(id);
  if (!question) {
    return NextResponse.json({ error: "Unknown question." }, { status: 404 });
  }

  const result = await diagnoseAttempt(
    {
      sub: session.sub,
      role: session.role,
      schoolId: session.schoolId,
      email: session.email,
    },
    parsed.data.answer,
    question,
  );

  // Omit the internal misconception tag from the student-facing payload (it is
  // recorded for analytics inside diagnoseAttempt).
  return NextResponse.json({
    correct: result.correct,
    source: result.source,
    hint: result.hint,
    revealedStep: result.revealedStep,
    fullSolutionUnlocked: result.fullSolutionUnlocked,
  });
}
