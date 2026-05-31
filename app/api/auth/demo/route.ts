/**
 * ⚠ DEMO MODE — REMOVE BEFORE PRODUCTION DEPLOY (see lib/demoMode.ts)
 *
 * GET  /api/auth/demo        → { enabled: boolean }   (UI calls this to decide
 *                                                       whether to show the button)
 * POST /api/auth/demo        → { ok: true } + sets the demo cookie
 *      body: { role: "student" | "teacher" }
 *
 * Both routes refuse to do anything unless isDemoModeAllowed() returns true.
 * That function checks BOTH NODE_ENV !== "production" AND DEMO_MODE === "true".
 */

import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import {
  DEMO_COOKIE_NAME,
  DEMO_USERS,
  isDemoModeAllowed,
} from "@/lib/demoMode";

export async function GET() {
  return NextResponse.json({ enabled: isDemoModeAllowed() });
}

const RoleSchema = z.object({
  role: z.enum(["student", "teacher"]),
});

export async function POST(request: NextRequest) {
  if (!isDemoModeAllowed()) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = RoleSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const user = DEMO_USERS[parsed.data.role];

  const response = NextResponse.json({
    ok: true,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  });

  // HttpOnly so client JS can't read; SameSite=Lax matches Supabase's pattern;
  // value is just the role string — meaningless without the server-side gates.
  response.cookies.set({
    name: DEMO_COOKIE_NAME,
    value: parsed.data.role,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // doesn't matter — demo is dev-only
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: DEMO_COOKIE_NAME,
    value: "",
    path: "/",
    maxAge: 0,
  });
  return response;
}
