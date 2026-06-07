/**
 * POST /api/submissions/[id]/confirm
 *
 * The student approves (and may have edited) the recognised LaTeX. Persists a
 * TranscriptionConfirmation and moves the submission AWAITING_CONFIRMATION →
 * CONFIRMED. Idempotent: confirming an already-CONFIRMED submission is safe and
 * does not create a duplicate row.
 *
 * Authenticated + ownership-checked via withTenant (RLS): a non-owner → 404.
 *
 * The persisted `confirmedLatex` is the ONLY input the marker may later read —
 * never `Recognition.rawLatex`. See lib/services/confirmationService.ts.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { tenantDbEnabled } from "@/lib/db/tenant";
import { confirmTranscription } from "@/lib/services/confirmationService";
import { onSubmissionConfirmed } from "@/lib/services/submissionPipeline";

export const runtime = "nodejs";

const ConfirmSchema = z.object({ confirmedLatex: z.string().min(1).max(5000) }).strict();

export async function POST(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }
  if (!tenantDbEnabled()) {
    return NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = ConfirmSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "confirmedLatex is required." }, { status: 400 });
  }

  const { id } = await ctx.params;
  const result = await confirmTranscription(id, session, parsed.data.confirmedLatex);

  if (result.ok) {
    // Trigger marking. Awaited (no queue exists); marking records its own MARKED/
    // FAILED status, observable via GET. The confirm response reports the
    // confirmation outcome. TODO(queue): move marking to a durable queue.
    await onSubmissionConfirmed(id).catch(() => undefined);
    return NextResponse.json({ status: "CONFIRMED" });
  }
  if (result.code === "empty") {
    return NextResponse.json({ error: "Confirmed working cannot be empty." }, { status: 400 });
  }
  if (result.code === "not_found") {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }
  return NextResponse.json(
    { error: `Submission cannot be confirmed (status: ${result.status}).`, status: result.status },
    { status: 409 },
  );
}
