"use client";

/**
 * /auth/reset — the page the password-reset email links to.
 *
 * Supabase establishes a short-lived "recovery" session from the link, which
 * lets the user set a new password (and nothing else). We confirm that session
 * exists, take the new password (min 8 chars), call updateUser, then send them
 * back to /login. If the link is missing/expired there is no session, so we
 * show an error rather than a form.
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  googleSignInConfigured,
  hasRecoverySession,
  updatePassword,
  clearSupabaseSession,
} from "@/lib/auth/supabaseBrowser";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"checking" | "ready" | "invalid" | "done">("checking");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!googleSignInConfigured()) {
      setPhase("invalid");
      setError("Password reset isn't configured on this site yet.");
      return;
    }
    let cancelled = false;
    hasRecoverySession().then((ok) => {
      if (!cancelled) setPhase(ok ? "ready" : "invalid");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("The passwords don't match.");
      return;
    }
    setSubmitting(true);
    const { error: err } = await updatePassword(password);
    if (err) {
      setError(err);
      setSubmitting(false);
      return;
    }
    await clearSupabaseSession();
    setPhase("done");
    setTimeout(() => router.push("/login"), 1800);
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-surface-alt px-6">
      <div className="w-full max-w-md rounded-lg border border-border bg-white p-8 shadow-md">
        <h1 className="text-xl font-bold text-foreground">Set a new password</h1>

        {phase === "checking" && (
          <p className="mt-3 text-sm text-muted-foreground">Verifying your reset link…</p>
        )}

        {phase === "invalid" && (
          <div className="mt-4 space-y-3">
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
              {error ?? "This reset link is invalid or has expired."}
            </p>
            <a href="/login" className="text-sm font-medium text-accent hover:underline">
              ← Back to sign in
            </a>
          </div>
        )}

        {phase === "done" && (
          <p className="mt-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            Password updated. Redirecting you to sign in…
          </p>
        )}

        {phase === "ready" && (
          <form onSubmit={submit} className="mt-4 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">New password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Confirm password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-accent py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
            >
              {submitting ? "Updating…" : "Update password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
