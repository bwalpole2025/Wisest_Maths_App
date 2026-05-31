/**
 * POST /api/auth/signup
 *
 * Create a new Supabase user. New accounts default to role="student" — promotion
 * to "teacher" is an admin operation (Supabase Studio, or an admin-only API).
 *
 * Security:
 *   1. Rate limit (auth tier — 5 attempts / minute / IP)
 *   2. Zod validation (email format, password length)
 *   3. Password length enforced server-side (≥ 8 chars)
 *   4. Supabase hashes passwords with bcrypt internally; we never see plaintext
 *      again after this request
 */

import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { rateLimitResponse } from "@/lib/rateLimit";

const SignupSchema = z.object({
  email: z.string().email().max(254),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128),
  name: z.string().min(1).max(100).optional(),
});

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limited = await rateLimitResponse(ip, "auth");
  if (limited) return limited;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  const parsed = SignupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        name: parsed.data.name ?? parsed.data.email.split("@")[0],
        // Role is recorded in user_metadata for display only; the
        // authoritative role lives in app_metadata (server-managed).
      },
    },
  });

  if (error || !data.user) {
    // Generic message; Supabase's own message may indicate "user already exists",
    // which we don't want to expose for enumeration reasons.
    return NextResponse.json(
      { error: "Could not create account. Please try again." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    user: {
      id: data.user.id,
      email: data.user.email,
      role: "student",
    },
    // Supabase may require email confirmation depending on project settings.
    requiresConfirmation: !data.session,
  });
}
