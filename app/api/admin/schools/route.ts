/**
 * /api/admin/schools — Wisest onboarding console.
 *
 *   GET                                   → PII-free school overview (counts + status)
 *   POST { name, contractRef?, seats?, adminEmail, adminName }
 *        → create a school + seed its first School Admin.
 *
 * Gated to "wisest_admin" or "wisest_staff". A Wisest employee runs through the
 * restricted no-PII connection; the super-admin uses the service-role.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth/guard";
import { supabaseClassesEnabled } from "@/lib/services/supabaseClasses";
import { createSchool, listSchoolOverview, createSchoolAdmin } from "@/lib/services/schools";

const NOT_CONFIGURED = NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });

export async function GET(request: NextRequest) {
  const auth = await requireRole(request, ["wisest_admin", "wisest_staff"]);
  if (auth.error) return auth.error;
  if (!supabaseClassesEnabled()) return NOT_CONFIGURED;
  try {
    return NextResponse.json({ schools: await listSchoolOverview(auth.session) });
  } catch {
    return NextResponse.json({ error: "Could not load schools." }, { status: 500 });
  }
}

const CreateSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
    contractRef: z.string().trim().max(120).optional(),
    seats: z.number().int().positive().max(100000).optional(),
    adminEmail: z.string().email().max(254),
    adminName: z.string().trim().min(1).max(120),
  })
  .strict();

export async function POST(request: NextRequest) {
  const auth = await requireRole(request, ["wisest_admin", "wisest_staff"]);
  if (auth.error) return auth.error;
  if (!supabaseClassesEnabled()) return NOT_CONFIGURED;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = CreateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const p = parsed.data;
  try {
    const school = await createSchool(auth.session, p.name, p.contractRef, p.seats);
    await createSchoolAdmin(auth.session, school.id, p.adminEmail, p.adminName);
    return NextResponse.json({ school });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Database error." }, { status: 500 });
  }
}
