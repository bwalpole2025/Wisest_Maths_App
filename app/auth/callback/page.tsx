"use client";

/**
 * /auth/callback — where Google (Supabase OAuth) redirects back to.
 *
 * Flow: Supabase's browser client exchanges the `?code=` in the URL for a
 * session (detectSessionInUrl). We read that session's access token, hand it to
 * our own server (/api/auth/google) which verifies it and mints our signed
 * session cookie, then drop the Supabase browser session and hard-navigate to
 * the role-appropriate dashboard (a full load re-hydrates app auth state).
 *
 * If the link is missing/expired, OAuth was denied, or SSO isn't configured, we
 * show an error with a way back to the login page — never a blank dead-end.
 */

import { useEffect, useState } from "react";
import {
  googleSignInConfigured,
  getOAuthAccessToken,
  clearSupabaseSession,
} from "@/lib/auth/supabaseBrowser";
import { homeForRole } from "@/lib/auth/home";

export default function AuthCallbackPage() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // OAuth provider can return an error in the query string (e.g. denied).
      const params = new URLSearchParams(window.location.search);
      const oauthError = params.get("error_description") || params.get("error");
      if (oauthError) {
        if (!cancelled) setError(decodeURIComponent(oauthError));
        return;
      }

      if (!googleSignInConfigured()) {
        if (!cancelled) setError("School sign-in isn't configured on this site yet.");
        return;
      }

      const accessToken = await getOAuthAccessToken();
      if (!accessToken) {
        if (!cancelled) setError("We couldn't complete your Google sign-in. Please try again.");
        return;
      }

      try {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ accessToken }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          if (!cancelled) setError(data.error ?? "Sign in failed. Please try again.");
          return;
        }
        // App session cookie is set. Drop the Supabase browser session and do a
        // full navigation so the AuthProvider re-hydrates from /api/auth/me.
        await clearSupabaseSession();
        const dest = homeForRole(data.user?.role ?? "student");
        window.location.assign(dest);
      } catch {
        if (!cancelled) setError("Network error. Please try again.");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-surface-alt px-6">
      <div className="w-full max-w-md rounded-lg border border-border bg-white p-8 text-center shadow-md">
        {error ? (
          <div className="space-y-4">
            <h1 className="text-lg font-bold text-foreground">Sign-in problem</h1>
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
            <a href="/login" className="text-sm font-medium text-accent hover:underline">
              ← Back to sign in
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
            <p className="text-sm text-muted-foreground">Finishing your school sign-in…</p>
          </div>
        )}
      </div>
    </div>
  );
}
