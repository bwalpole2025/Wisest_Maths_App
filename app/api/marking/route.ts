/**
 * POST /api/marking
 *
 * Marks a photo of a student's HANDWRITTEN working for one question.
 * A vision model (Gemini) transcribes the student's final answer; the answer is
 * then graded by SYMBOLIC EQUIVALENCE against the question's canonical solution
 * (the same engine as /api/quiz/grade) — never string matching, and the canonical
 * target is looked up server-side so it is never leaked to the client.
 *
 * Request:  multipart/form-data { image: File (png/jpeg/webp/heic, ≤8MB), questionId }
 * Returns:  HandwritingMarkingResult { recognised, legible, equivalent, needsManualGrade, method, detail }
 *
 * Security layers (in order):
 *   1. Authentication (signed session cookie)
 *   2. Rate limiting ("ai" tier — vision calls are expensive)
 *   3. Feature availability (GEMINI_API_KEY) → 503
 *   4. Multipart parse + server-side type & size validation (SECURITY UPLOAD-8.1)
 *   5. Question lookup server-side (canonical never trusted from / leaked to client)
 *   6. In-memory processing only — the image is never persisted
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { getQuestionById } from "@/lib/services/quizGenerator";
import { markHandwriting } from "@/lib/services/handwritingMarking";
import { ALLOWED_UPLOAD_TYPES, MAX_IMAGE_BYTES, isAllowedUploadType } from "@/lib/ai/marking/sanitise";

// SymPy grading (a child_process) requires the Node.js runtime, not Edge.
export const runtime = "nodejs";

const QuestionIdSchema = z.string().min(1).max(64);

export async function POST(request: NextRequest) {
  // ── 1. Authentication ──────────────────────────────────────────
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  // ── 2. Rate limiting (AI tier) ─────────────────────────────────
  const rate = await checkRateLimit(session.sub, "ai");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 },
    );
  }

  // ── 3. Feature availability ────────────────────────────────────
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Handwriting marking isn't set up on this site yet — it needs a Google Gemini API key (GEMINI_API_KEY).",
      },
      { status: 503 },
    );
  }

  // ── 4. Parse multipart form ────────────────────────────────────
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart/form-data." }, { status: 400 });
  }

  const qid = QuestionIdSchema.safeParse(form.get("questionId"));
  if (!qid.success) {
    return NextResponse.json({ error: "Missing or invalid questionId." }, { status: 400 });
  }

  const file = form.get("image");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Upload a photo of your working." }, { status: 400 });
  }
  // Server-side type validation (never trust the client) — SECURITY UPLOAD-8.1.
  if (!isAllowedUploadType(file.type)) {
    return NextResponse.json(
      { error: `Unsupported file type. Allowed: ${[...ALLOWED_UPLOAD_TYPES].join(", ")}.` },
      { status: 415 },
    );
  }
  if (file.size === 0) {
    return NextResponse.json({ error: "The image is empty." }, { status: 400 });
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return NextResponse.json(
      { error: `Image too large (max ${Math.round(MAX_IMAGE_BYTES / (1024 * 1024))} MB).` },
      { status: 413 },
    );
  }

  // ── 5. Question lookup (canonical answer stays server-side) ────
  const question = getQuestionById(qid.data);
  if (!question) {
    return NextResponse.json({ error: "Unknown question." }, { status: 404 });
  }

  // ── 6. Recognise + mark (image is in-memory only; never persisted) ──
  const imageBase64 = Buffer.from(await file.arrayBuffer()).toString("base64");
  try {
    const result = await markHandwriting({ imageBase64, mimeType: file.type, question });
    return NextResponse.json(result);
  } catch (err) {
    // Vision API failure (key/network/upstream) — don't leak internals.
    console.error("[Marking] failed:", err);
    return NextResponse.json(
      { error: "Couldn't mark the photo right now. Please try again." },
      { status: 502 },
    );
  }
}
