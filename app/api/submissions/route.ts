/**
 * POST /api/submissions
 *
 * Upload a photo of a student's handwritten working. Validates the image
 * (declared type → size → magic-byte signature), streams it to object storage,
 * and creates a `submissions` row (status UPLOADED) holding ONLY the storage key
 * — never the bytes. Returns 201 { submissionId, status }.
 *
 * Identity: the student is ALWAYS the authenticated user (session.sub); a
 * studentId is never accepted from the body.
 *
 * Privacy: we log a random correlation id only — never the image bytes, the
 * client-provided filename, or the student id.
 *
 * Security layers: auth → "ai" rate limit → multipart parse → type/size →
 * DB-configured guard → magic-byte signature (in the service) → store → insert.
 */

import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { tenantDbEnabled } from "@/lib/db/tenant";
import { isAllowedUploadType, ALLOWED_UPLOAD_TYPES, MAX_SUBMISSION_IMAGE_BYTES } from "@/lib/ai/marking/sanitise";
import { createSubmission, UploadError } from "@/lib/services/submissionUpload";

// fs / pg need the Node.js runtime, not Edge.
export const runtime = "nodejs";

const QuestionIdSchema = z.string().min(1).max(64);

export async function POST(request: NextRequest) {
  const correlationId = randomUUID();

  // 1. Authentication — student is the authenticated user.
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  // 2. Rate limiting (uploads kick off the AI pipeline).
  const rate = await checkRateLimit(session.sub, "ai");
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 },
    );
  }

  // 3. Parse multipart form.
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
    return NextResponse.json({ error: "Upload a photo or PDF of your working (field 'image')." }, { status: 400 });
  }

  // 4. Cheap pre-checks (fail fast before reading bytes).
  if (!isAllowedUploadType(file.type)) {
    return NextResponse.json(
      { error: `Unsupported file type. Allowed: ${[...ALLOWED_UPLOAD_TYPES].join(", ")}.` },
      { status: 415 },
    );
  }
  if (file.size === 0) {
    return NextResponse.json({ error: "The file is empty." }, { status: 400 });
  }
  if (file.size > MAX_SUBMISSION_IMAGE_BYTES) {
    return NextResponse.json(
      { error: `File too large (max ${Math.round(MAX_SUBMISSION_IMAGE_BYTES / (1024 * 1024))} MB).` },
      { status: 413 },
    );
  }

  // 5. Persistence must be configured (no localStorage fallback for uploads).
  if (!tenantDbEnabled()) {
    return NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });
  }

  // 6. Read bytes (capped above), then validate signature + store + insert.
  const bytes = Buffer.from(await file.arrayBuffer());
  try {
    const result = await createSubmission(
      {
        studentId: session.sub,
        questionId: qid.data,
        declaredMimeType: file.type,
        sizeBytes: file.size,
        bytes,
        correlationId,
      },
      { sub: session.sub, role: session.role, schoolId: session.schoolId, email: session.email },
    );
    console.info(`[submissions] ${correlationId} created status=${result.status}`);
    return NextResponse.json(
      { submissionId: result.submissionId, status: result.status },
      { status: 201 },
    );
  } catch (err) {
    if (err instanceof UploadError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    // Unexpected (storage/DB) failure — log correlation id only, no PII.
    console.error(`[submissions] ${correlationId} failed`);
    return NextResponse.json(
      { error: "Couldn't save your upload right now. Please try again." },
      { status: 500 },
    );
  }
}
