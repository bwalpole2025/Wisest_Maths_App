/**
 * GET /api/submissions/[id]
 *
 * Returns the full current pipeline state for the owner: status, recognition
 * summary (once recognised), confirmation (once confirmed), and the marking
 * result (once MARKED) — with the ASSERTABLE `finalAnswerCorrect` separated from
 * the ADVISORY M/A/B breakdown (per-mark confidence + needs-review flags).
 *
 * Authenticated + ownership-checked via withTenant (RLS): a non-owner → 404.
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { tenantDbEnabled } from "@/lib/db/tenant";
import { getSubmissionState } from "@/lib/services/submissionState";

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
  const state = await getSubmissionState(id, session);
  if (!state) {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }
  return NextResponse.json(state);
}
