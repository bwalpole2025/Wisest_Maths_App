/**
 * POST /api/auth/logout
 *
 * Server-side logout. Clears the Supabase session cookies and any local state.
 */

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return NextResponse.json({ ok: true });
}
