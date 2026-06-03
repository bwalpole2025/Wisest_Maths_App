/**
 * GET /api/student/assignments
 *
 * Returns the quizzes assigned to the logged-in student — found by matching the
 * student's name against class rosters server-side. Any authenticated user may
 * call it (students and teachers).
 *
 * Returns 503 { error: "supabase-not-configured" } in mock mode so the client
 * falls back to the local store (see hooks/useStudentAssignments.ts).
 */

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/rateLimit";
import { supabaseClassesEnabled, assignmentsForStudentName } from "@/lib/services/supabaseClasses";

export async function GET(request: NextRequest) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }
  const rate = await checkRateLimit(session.sub, "global");
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }
  if (!supabaseClassesEnabled()) {
    return NextResponse.json({ error: "supabase-not-configured" }, { status: 503 });
  }
  try {
    const assignments = await assignmentsForStudentName(session.name);
    return NextResponse.json({ assignments });
  } catch {
    return NextResponse.json({ error: "Could not load assignments." }, { status: 500 });
  }
}
