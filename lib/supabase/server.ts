/**
 * Supabase client for use in **server components, route handlers, and server
 * actions**. Reads/writes session cookies via Next.js's cookies() helper, so
 * tokens stay in httpOnly cookies and never touch the client JS bundle.
 *
 * Usage in a route handler:
 *   import { createClient } from "@/lib/supabase/server";
 *   export async function POST() {
 *     const supabase = await createClient();
 *     const { data: { user } } = await supabase.auth.getUser();
 *     ...
 *   }
 *
 * Why getUser() not getSession(): getUser() makes a network call to Supabase
 * to verify the JWT, so a tampered cookie won't pass. getSession() only reads
 * the cookie locally and is unsafe for security decisions.
 */

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Called from a Server Component — Next blocks cookie writes there.
            // The middleware refresh path handles this case.
          }
        },
      },
    },
  );
}

/**
 * Service-role Supabase client. **Server-only.** Bypasses RLS entirely; use
 * only for trusted admin operations (e.g. role assignment from a webhook).
 * Never import this from a client component.
 */
export function createAdminClient() {
  if (!env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured");
  }
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      cookies: {
        getAll: () => [],
        setAll: () => {},
      },
    },
  );
}
