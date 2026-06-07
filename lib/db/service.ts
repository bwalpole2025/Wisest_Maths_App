/**
 * Supabase SERVICE-ROLE client for session-less, RLS-bypassing pipeline steps
 * (handwriting recognition/marking, retention cleanup). The migration grants
 * `service_role` CRUD on the submissions/recognitions tables; these steps run
 * without a student session so they cannot use the RLS `withTenant` path.
 *
 * Mirrors the privileged-client pattern in lib/services/schools.ts. Credentials
 * come from the env/config layer, never process.env in callers.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

let client: SupabaseClient | null = null;

export function serviceDbEnabled(): boolean {
  return Boolean(env.NEXT_PUBLIC_SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getServiceClient(): SupabaseClient {
  if (!client) {
    const url = env.NEXT_PUBLIC_SUPABASE_URL;
    const key = env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error("Supabase service-role client is not configured.");
    }
    client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  }
  return client;
}
