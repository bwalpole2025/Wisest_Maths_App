/**
 * POST /api/quiz/generate
 *
 * Teacher-only. Turns a quiz configuration (per-topic, per-difficulty quotas)
 * into a concrete quiz by sampling the in-memory question bank.
 *
 * Security layers (mirror /api/assess):
 *   1. Authentication — verified signed session cookie.
 *   2. Authorisation  — role must be "teacher".
 *   3. Rate limiting  — "global" tier, keyed on user id, after auth.
 *   4. Input validation — strict Zod schema, bounded sizes/counts.
 *
 * Returns the sampled questions WITHOUT worked solutions/canonical answers
 * (lean payload; solutions stay server-side), plus any quota shortfalls.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { generateQuiz, type QuizConfig } from "@/lib/services/quizGenerator";

const QuotaSchema = z
  .object({
    topicRef: z.string().min(1).max(40),
    Foundation: z.number().int().min(0).max(50).default(0),
    Standard: z.number().int().min(0).max(50).default(0),
    Challenge: z.number().int().min(0).max(50).default(0),
  })
  .strict();

const GenerateSchema = z
  .object({
    title: z.string().min(1).max(120),
    course: z.enum(["a-level-maths", "a-level-further-maths"]),
    topics: z.array(QuotaSchema).min(1).max(60),
    seed: z.number().int().optional(),
    shuffle: z.boolean().optional().default(true),
  })
  .strict()
  // Reject an all-zero config and anything over the hard cap of 100 questions.
  .refine(
    (c) => {
      const total = c.topics.reduce((s, t) => s + t.Foundation + t.Standard + t.Challenge, 0);
      return total >= 1 && total <= 100;
    },
    { message: "Total questions must be between 1 and 100." },
  );

export async function POST(request: NextRequest) {
  // 1. Authentication
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  // 2. Authorisation
  if (session.role !== "teacher") {
    return NextResponse.json({ error: "Teachers only." }, { status: 403 });
  }
  // 3. Rate limiting
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 },
    );
  }
  // 4. Input validation
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = GenerateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const config: QuizConfig = parsed.data;
  const result = generateQuiz(config);

  // Lean, solution-free question payload for the client.
  const questions = result.questions.map((q) => ({
    id: q.id,
    topicRef: q.topicRef,
    topicTitle: q.topicTitle,
    difficulty: q.difficulty,
    marks: q.marks,
    questionText: q.questionText,
    tags: q.tags,
  }));

  // NOTE: persistence (quiz_templates / quizzes per sql/quiz_engine.sql) is the
  // next step — write through a request-scoped, RLS-respecting connection with
  // teacher_id = session.sub, NOT the service-role client. Returning the
  // generated quiz is enough to satisfy the builder UI today.
  return NextResponse.json({
    title: config.title,
    course: config.course,
    questions,
    requestedTotal: result.requestedTotal,
    fulfilledTotal: result.fulfilledTotal,
    warnings: result.warnings,
  });
}
