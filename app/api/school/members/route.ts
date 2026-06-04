/**
 * /api/school/members — a School Admin manages their school's roster.
 *
 *   GET                          → list teachers + students in the admin's school
 *   POST { members: [{ email, name, role }] }  → bulk upsert (role: teacher|student)
 *
 * Gated to role === "school_admin"; every operation is bounded to the admin's
 * own school by RLS (withTenant). DATABASE_URL must be configured.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth/guard";
import { tenantDbEnabled } from "@/lib/db/tenant";
import { importMembers, listMembers } from "@/lib/services/schoolMembers";

const NOT_CONFIGURED = NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });

export async function GET(request: NextRequest) {
  const auth = await requireRole(request, ["school_admin"]);
  if (auth.error) return auth.error;
  if (!tenantDbEnabled()) return NOT_CONFIGURED;
  try {
    return NextResponse.json({ members: await listMembers(auth.session) });
  } catch {
    return NextResponse.json({ error: "Could not load members." }, { status: 500 });
  }
}

const ImportSchema = z
  .object({
    members: z
      .array(
        z
          .object({
            email: z.string().email().max(254),
            name: z.string().trim().min(1).max(120),
            role: z.enum(["teacher", "student"]),
          })
          .strict(),
      )
      .min(1)
      .max(1000),
  })
  .strict();

export async function POST(request: NextRequest) {
  const auth = await requireRole(request, ["school_admin"]);
  if (auth.error) return auth.error;
  if (!tenantDbEnabled()) return NOT_CONFIGURED;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = ImportSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  try {
    const count = await importMembers(auth.session, parsed.data.members);
    return NextResponse.json({ count, members: await listMembers(auth.session) });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Database error." }, { status: 500 });
  }
}
