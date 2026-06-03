"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { googleSignInConfigured, signInWithGoogle } from "@/lib/auth/supabaseBrowser";

export default function LoginPage() {
  const { login } = useAuth();
  const [tab, setTab] = useState<"student" | "teacher" | "school">("student");
  const tabLabel: Record<typeof tab, string> = {
    student: "Student",
    teacher: "Teacher",
    school: "School login",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  // Password-reset ("forgot password") sub-view.
  const [forgot, setForgot] = useState(false);
  const [resetMsg, setResetMsg] = useState<string | null>(null);
  // Google ("school login") SSO.
  const [googleBusy, setGoogleBusy] = useState(false);
  const [googleErr, setGoogleErr] = useState<string | null>(null);
  const googleReady = googleSignInConfigured();

  const handleGoogle = async () => {
    setGoogleErr(null);
    setGoogleBusy(true);
    const { error: gErr } = await signInWithGoogle();
    if (gErr) {
      setGoogleErr(gErr);
      setGoogleBusy(false);
    }
    // On success the browser redirects to Google, then back to /auth/callback.
  };

  const attemptLogin = async (e: string, p: string) => {
    setError(null);
    setSubmitting(true);
    const result = await login(e, p);
    if (!result.ok) {
      setError(result.error ?? "Sign in failed.");
      setSubmitting(false);
    }
    // On success the provider redirects; leave submitting true to disable UI.
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    void attemptLogin(email, password);
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResetMsg(null);
    if (!email.trim()) {
      setError("Enter your email first.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      // Always generic — the server never reveals whether the account exists.
      setResetMsg(
        data.message ??
          "If an account exists for that email, a password-reset link has been sent.",
      );
    } catch {
      setResetMsg("If an account exists for that email, a password-reset link has been sent.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-surface-alt px-6">
      <div className="w-full max-w-md rounded-lg border border-border bg-white p-8 shadow-md">
        {/* Logo */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-md">
            <span className="text-2xl font-bold text-accent">∫</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">MathsApp</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to continue
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex rounded-lg border border-border bg-muted/50 p-1">
          {(["student", "teacher", "school"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setTab(r)}
              className={`flex-1 rounded-md py-2 text-xs font-medium transition-all sm:text-sm ${
                tab === r
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tabLabel[r]}
            </button>
          ))}
        </div>

        {forgot ? (
          /* ── Forgot-password panel ──────────────────────────── */
          <form onSubmit={handleForgot} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your email and we&apos;ll send you a link to reset your password.
            </p>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.ac.uk"
                className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p>
            )}
            {resetMsg && (
              <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{resetMsg}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-accent py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send reset link"}
            </button>
            <button
              type="button"
              onClick={() => {
                setForgot(false);
                setError(null);
                setResetMsg(null);
              }}
              className="w-full text-sm font-medium text-accent hover:underline"
            >
              ← Back to sign in
            </button>
          </form>
        ) : (
          <>
            {tab === "school" && (
              <div className="mb-6 space-y-3">
                <p className="text-sm text-muted-foreground">
                  Sign in with the Google account your school gave you.
                </p>
                <button
                  type="button"
                  onClick={handleGoogle}
                  disabled={!googleReady || googleBusy}
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-input bg-white py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62z" />
                    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.85.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z" />
                    <path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33z" />
                    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 9 0 9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" />
                  </svg>
                  {googleBusy ? "Redirecting to Google…" : "Sign in with Google"}
                </button>
                {!googleReady && (
                  <p className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800">
                    School Google sign-in isn&apos;t configured on this site yet. You can still use
                    the email and password your school provided below.
                  </p>
                )}
                {googleErr && (
                  <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                    {googleErr}
                  </p>
                )}
                <div className="relative pt-1">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs text-muted-foreground">
                      or use your school email
                    </span>
                  </div>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  {tab === "school" ? "School email" : "Email"}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    tab === "teacher"
                      ? "you@teacher.mathsapp.com"
                      : tab === "school"
                        ? "firstname.surname@yourschool.ac.uk"
                        : "you@school.ac.uk"
                  }
                  className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => {
                    setForgot(true);
                    setError(null);
                    setResetMsg(null);
                  }}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              {error && (
                <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-accent py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Signing in…" : "Sign In"}
              </button>
            </form>

            {/* Demo login buttons */}
            <div className="mt-6">
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-muted-foreground">or try a demo account</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => attemptLogin("demo@school.ac.uk", "demo")}
                  className="flex-1 rounded-md border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-60"
                >
                  Demo Student
                </button>
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => attemptLogin("demo@teacher.mathsapp.com", "demo")}
                  className="flex-1 rounded-md border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-60"
                >
                  Demo Teacher
                </button>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              {tab === "school"
                ? "Use the email and password your school provided. Your teacher sets up your account."
                : "New student? Ask your teacher for an access code."}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
