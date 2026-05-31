/**
 * Supabase session helper for Next.js middleware (Edge runtime).
 *
 * Called from the root middleware on every request that needs auth checking.
 * Refreshes the session cookie if needed, returns the verified user (or null).
 *
 * The pattern is the standard one from the Supabase SSR docs, adapted for our
 * default-deny middleware: if `user` is null on a protected path, the caller
 * redirects to /login.
 */

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "@/lib/env";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: getUser() makes a network call and validates the JWT against
  // Supabase. Don't use getSession() here — that only reads the local cookie.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { supabaseResponse, user };
}
