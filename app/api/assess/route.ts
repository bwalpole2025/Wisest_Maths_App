/**
 * POST /api/assess
 *
 * AI-powered assessment scoring. Currently returns a stub response — wire to
 * a real LLM when the API key is configured (see TODO at the bottom).
 *
 * Security layers (in order, matching the Socratic route):
 *   1. Authentication (Supabase getUser — JWT-validated)
 *   2. Rate limiting (ai tier — 30 req/min per user)
 *   3. Zod input validation
 *   4. Generic error messages on failure
 */

import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { getAuthenticatedUser } from "@/lib/auth";
import { rateLimitResponse } from "@/lib/rateLimit";

const AssessSchema = z.object({
  questionText: z.string().min(1).max(2000),
  studentAnswer: z.string().max(2000).default(""),
  studentExplanation: z.string().max(5000).default(""),
  correctAnswer: z.string().min(1).max(2000),
});

export async function POST(request: NextRequest) {
  // ── 1. Auth (demo or Supabase) ───────────────────────────────────
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json(
      { error: "Authentication required." },
      { status: 401 },
    );
  }

  // ── 2. Rate limit (keyed on verified user id) ────────────────────
  const limited = await rateLimitResponse(user.id, "ai");
  if (limited) return limited;

  // ── 3. Parse + validate ──────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }
  const parsed = AssessSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  const { studentAnswer } = parsed.data;
  const hasContent = studentAnswer.trim().length > 0;

  // ── 4. Stub response ─────────────────────────────────────────────
  // TODO: Replace with a real LLM call (Anthropic / Gemini). Pattern:
  //   - Build prompt using parsed.data
  //   - Call the LLM with a small max_tokens
  //   - Parse the JSON response with a Zod schema
  //   - Sanity-check (score in [0, 10] etc.)
  //   - Return a generic 502 on LLM error (do not echo raw error to client)
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
