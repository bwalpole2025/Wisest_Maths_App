/**
 * GET /api/submissions/[id]/recognition
 *
 * Returns the recognised LaTeX for the student to review before marking. Only
 * valid when the submission is AWAITING_CONFIRMATION (or CONFIRMED, returning the
 * confirmed version); any other state → 409 with the current status.
 *
 * Authenticated + ownership-checked: access runs via withTenant (RLS), so a
 * non-owner sees no row → 404 (we don't reveal another user's submission exists).
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { tenantDbEnabled } from "@/lib/db/tenant";
import { getRecognitionForConfirmation } from "@/lib/services/confirmationService";

export const runtime = "nodejs";

export async function GET(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
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

  const { id } = await ctx.params;
  const result = await getRecognitionForConfirmation(id, session);

  if (result.ok) return NextResponse.json(result.body);
  if (result.code === "not_found") {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }
  return NextResponse.json(
    { error: `Submission is not awaiting confirmation (status: ${result.status}).`, status: result.status },
    { status: 409 },
  );
}
