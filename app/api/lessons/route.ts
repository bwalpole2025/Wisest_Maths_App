/**
 * Guided Learning — API route.
 *
 *   GET  /api/lessons?topicRef=a1   → the static Lesson for a subtopic (or 404)
 *   POST /api/lessons               → { action: "check", ... } guided Socratic
 *                                     evaluation of a lesson mini-question
 *
 * The POST path mirrors the security stack of /api/socratic: cookie auth →
 * rate limit (ai tier) → GEMINI_API_KEY check → input sanitisation → Gemini call
 * → output validation. The lesson card (concept, expected answer, insight) is
 * looked up SERVER-SIDE from the authoritative lesson registry — the client only
 * sends topicRef + cardId — so the grounding can't be tampered with.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitiseStudentInput } from "@/lib/ai/socratic/sanitise";
import { validateGeminiOutput } from "@/lib/ai/socratic/validateOutput";
import { LESSON_COACHING_INSTRUCTIONS } from "@/lib/ai/socratic/systemInstructions";
import { callGemini, type GeminiTurn } from "@/lib/ai/gemini";
import { getLessonByRef, getLessonRefs } from "@/lib/data/lessons";
import { checkRateLimit } from "@/lib/rateLimit";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import type { TurnEvaluation } from "@/lib/ai/socratic/types";

const CACHE_HEADERS = { "Cache-Control": "private, max-age=300, stale-while-revalidate=86400" };

/** Strip markdown bold the model sometimes adds; keep LaTeX backslashes intact. */
function clean(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

// ── GET: serve the static lesson ─────────────────────────────────────

export async function GET(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  // ?list=1 → just the refs that have an authored lesson (for the browser).
  if (request.nextUrl.searchParams.get("list")) {
    return NextResponse.json({ refs: [...getLessonRefs()] }, { headers: CACHE_HEADERS });
  }

  const topicRef = request.nextUrl.searchParams.get("topicRef");
  if (!topicRef) {
    return NextResponse.json({ error: "Provide a topicRef." }, { status: 400 });
  }
  const lesson = getLessonByRef(topicRef);
  if (!lesson) {
    return NextResponse.json({ error: "No lesson for this topic yet." }, { status: 404 });
  }
  return NextResponse.json({ lesson }, { headers: CACHE_HEADERS });
}

// ── POST: check a mini-question answer (guided, iterative) ───────────

const CheckSchema = z.object({
  action: z.literal("check"),
  topicRef: z.string().min(1).max(20),
  cardId: z.string().min(1).max(50),
  answer: z.string().min(1).max(500),
  reasoning: z.string().max(500).optional().default(""),
  // Prior attempts at THIS card, replayed so the tutor escalates its nudges.
  attempts: z
    .array(
      z.object({
        answer: z.string().max(500),
        reasoning: z.string().max(500),
        feedback: z.string().max(5000),
        guidingQuestion: z.string().max(2000).nullable(),
      }),
    )
    .max(12)
    .optional(),
  revealRequested: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  // ── 1. Auth ────────────────────────────────────────────────────
  const claims = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!claims) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  // ── 2. Rate limit (AI tier) ────────────────────────────────────
  const rate = await checkRateLimit(claims.sub, "ai");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 },
    );
  }

  // ── 2b. Feature availability ───────────────────────────────────
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "The AI lesson tutor isn't set up on this site yet — it needs a Google Gemini API key (GEMINI_API_KEY).",
      },
      { status: 503 },
    );
  }

  // ── 3. Parse + validate body ───────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON in request body." }, { status: 400 });
  }
  const parsed = CheckSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request format." }, { status: 400 });
  }
  const payload = parsed.data;

  // ── 4. Look up the lesson card SERVER-SIDE (authoritative) ──────
  const lesson = getLessonByRef(payload.topicRef);
  const card = lesson?.cards.find((c) => c.id === payload.cardId);
  if (!lesson || !card) {
    return NextResponse.json({ error: "Lesson card not found." }, { status: 404 });
  }

  // ── 5. Sanitise input (reasoning optional in lessons) ──────────
  const reasoning = payload.reasoning?.trim() ? payload.reasoning : "(no explanation given)";
  const sanitised = sanitiseStudentInput(payload.answer, reasoning);
  if (!sanitised.valid) {
    return NextResponse.json({ error: sanitised.error }, { status: 400 });
  }

  try {
    // ── 6. Build conversation history from prior attempts ────────
    const history: GeminiTurn[] = [];
    if (payload.attempts?.length) {
      for (const att of payload.attempts) {
        history.push({
          role: "user",
          parts: [{ text: `[Answer]: ${att.answer}\n[Reasoning]: ${att.reasoning}` }],
        });
        history.push({
          role: "model",
          parts: [
            {
              text: JSON.stringify({
                questionNumber: 1,
                questionText: null,
                evaluation: {
                  answerCorrect: false,
                  reasoningSound: false,
                  feedback: att.feedback,
                  guidingQuestion: att.guidingQuestion,
                  mentalModelCorrection: null,
                  correctWorking: null,
                  score: 0,
                },
                sessionComplete: false,
              }),
            },
          ],
        });
      }
    }

    const attemptCount = (payload.attempts?.length ?? 0) + 1;
    const revealLine =
      payload.revealRequested || attemptCount >= 4
        ? `\n[REVEAL REQUESTED] The student has now made ${attemptCount} attempt(s)${
            payload.revealRequested ? " and has explicitly asked to see the answer" : ""
          }. Apply the REVEAL RULE: walk through the method kindly in correctWorking and make the insight explicit.`
        : "";

    const userMessage = `[Concept]: ${card.concept}
[Question]: ${card.miniQuestion.prompt}
[Expected answer]: ${card.miniQuestion.expectedAnswer}
[Insight]: ${card.miniQuestion.insight}

[Answer]: ${sanitised.sanitisedAnswer}
[Reasoning]: ${sanitised.sanitisedReasoning}

This is attempt #${attemptCount}. Judge the answer against the expected answer (accept mathematically-equivalent forms). Follow GUIDED LEARNING mode. If wrong, give a brief warm diagnosis in "feedback" and ONE leading question in "guidingQuestion", keep correctWorking null, and do not reveal the answer or insight. If correct, celebrate and make the insight land. Set questionNumber to 1, questionText to null, sessionComplete to false.${revealLine} Respond with raw JSON only, no markdown fences.`;

    // ── 7. Call Gemini + validate ────────────────────────────────
    const raw = await callGemini(history, userMessage, LESSON_COACHING_INSTRUCTIONS);
    const validation = validateGeminiOutput(raw, 1);

    if (!validation.valid || !validation.parsed || !validation.parsed.evaluation) {
      return NextResponse.json({
        evaluation: {
          answerCorrect: false,
          reasoningSound: false,
          feedback: "I couldn't check that just now — please try again.",
          guidingQuestion: null,
          mentalModelCorrection: null,
          correctWorking: null,
          score: 0,
        } satisfies TurnEvaluation,
      });
    }

    const e = validation.parsed.evaluation;
    const evaluation: TurnEvaluation = {
      answerCorrect: e.answerCorrect,
      reasoningSound: e.reasoningSound,
      feedback: clean(e.feedback),
      guidingQuestion: e.guidingQuestion ? clean(e.guidingQuestion) : null,
      mentalModelCorrection: e.mentalModelCorrection ? clean(e.mentalModelCorrection) : null,
      correctWorking: e.correctWorking ? clean(e.correctWorking) : null,
      score: e.score,
    };

    return NextResponse.json({ evaluation });
  } catch (error) {
    console.error("[Lessons] Internal error:", error);
    return NextResponse.json({ error: "An error occurred. Please try again." }, { status: 500 });
  }
}
