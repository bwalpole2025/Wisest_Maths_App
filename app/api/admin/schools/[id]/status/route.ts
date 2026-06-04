/**
 * POST /api/admin/schools/[id]/status — suspend or re-activate a school.
 *
 * Body: { status: "active" | "suspended" }. A suspended school blocks all of its
 * users at login. Gated to "wisest_admin" or "wisest_staff" (staff via the
 * restricted no-PII connection).
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth/guard";
import { supabaseClassesEnabled } from "@/lib/services/supabaseClasses";
import { setSchoolStatus } from "@/lib/services/schools";

const Schema = z.object({ status: z.enum(["active", "suspended"]) }).strict();

export async function POST(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const auth = await requireRole(request, ["wisest_admin", "wisest_staff"]);
  if (auth.error) return auth.error;
  if (!supabaseClassesEnabled()) {
    return NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });
  }
  const { id } = await ctx.params;
  if (!z.string().uuid().safeParse(id).success) {
    return NextResponse.json({ error: "Invalid school id." }, { status: 400 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = Schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  try {
    await setSchoolStatus(auth.session, id, parsed.data.status);
    return NextResponse.json({ ok: true, status: parsed.data.status });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Database error." }, { status: 500 });
  }
}
