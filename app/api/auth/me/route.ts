/**
 * GET /api/auth/me
 *
 * Returns the currently authenticated user (demo or Supabase) for client-side
 * consumption — used by useAuth so client components can render the right
 * thing for both auth paths.
 *
 * No body, no auth headers — relies on the request's httpOnly cookies which
 * Next.js automatically forwards.
 */

import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/lib/auth";

export async function GET() {
  const user = await getAuthenticatedUser();
  return NextResponse.json({ user });
}
