"use client";

/**
 * Browser-side Supabase client — used ONLY to run the Google (OAuth) sign-in
 * handshake. It uses the PUBLIC anon key (safe to expose), never the service
 * role key. After OAuth completes, we hand the resulting Supabase access token
 * to our own server (/api/auth/google), which verifies it and mints the app's
 * own signed session cookie — so Supabase's browser session is only a stepping
 * stone, not the app's session of record.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True when the public env vars needed for browser OAuth are present. */
export function googleSignInConfigured(): boolean {
  return Boolean(URL && ANON);
}

let client: SupabaseClient | null = null;
function browserClient(): SupabaseClient {
  if (!client) {
    client = createClient(URL!, ANON!, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" },
    });
  }
  return client;
}

/** Kick off the Google OAuth redirect; returns to /auth/callback when done. */
export async function signInWithGoogle(): Promise<{ error?: string }> {
  if (!googleSignInConfigured()) {
    return { error: "School sign-in isn't configured on this site yet." };
  }
  const { error } = await browserClient().auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${window.location.origin}/auth/callback` },
  });
  return error ? { error: error.message } : {};
}

/**
 * On the callback page, resolve the Supabase session that OAuth produced and
 * return its access token. Waits briefly for `detectSessionInUrl` to exchange
 * the `?code=` for a session.
 */
export async function getOAuthAccessToken(): Promise<string | null> {
  if (!googleSignInConfigured()) return null;
  const supabase = browserClient();
  for (let i = 0; i < 20; i++) {
    const { data } = await supabase.auth.getSession();
    if (data.session?.access_token) return data.session.access_token;
    await new Promise((r) => setTimeout(r, 150));
  }
  return null;
}

/**
 * After arriving on the reset page from the emailed link, wait briefly for the
 * recovery session to be established from the URL, then report whether one
 * exists (i.e. the link was valid).
 */
export async function hasRecoverySession(): Promise<boolean> {
  if (!googleSignInConfigured()) return false;
  const supabase = browserClient();
  for (let i = 0; i < 20; i++) {
    const { data } = await supabase.auth.getSession();
    if (data.session) return true;
    await new Promise((r) => setTimeout(r, 150));
  }
  return false;
}

/** Set a new password for the recovery session established by the reset link. */
export async function updatePassword(password: string): Promise<{ error?: string }> {
  if (!googleSignInConfigured()) {
    return { error: "Password reset isn't configured on this site yet." };
  }
  const { error } = await browserClient().auth.updateUser({ password });
  return error ? { error: error.message } : {};
}

/** Drop the local Supabase session once our own cookie is set. */
export async function clearSupabaseSession(): Promise<void> {
  if (!googleSignInConfigured()) return;
  try {
    await browserClient().auth.signOut();
  } catch {
    /* ignore */
  }
}
