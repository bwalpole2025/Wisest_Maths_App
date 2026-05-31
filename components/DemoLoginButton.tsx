/**
 * ⚠ DEMO MODE — REMOVE BEFORE PRODUCTION DEPLOY (see lib/demoMode.ts)
 *
 * Quick-access buttons shown on /login when DEMO_MODE=true in .env.local.
 * In production, the /api/auth/demo GET returns { enabled: false } and this
 * component renders nothing.
 *
 * To remove: delete this file, and the import + JSX usage in app/login/page.tsx.
 */

"use client";

import { useEffect, useState } from "react";

export function DemoLoginButton() {
  const [enabled, setEnabled] = useState(false);
  const [submitting, setSubmitting] = useState<"student" | "teacher" | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/demo")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setEnabled(Boolean(data.enabled));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!enabled) return null;

  const handle = async (role: "student" | "teacher") => {
    setSubmitting(role);
    try {
      const res = await fetch("/api/auth/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      if (!res.ok) {
        setSubmitting(null);
        return;
      }
      // Full reload so useAuth re-fetches /api/auth/me and picks up the demo
      // cookie. (router.push wouldn't re-run the AuthProvider's useEffect.)
      const target = role === "teacher" ? "/teacher/dashboard" : "/courses";
      window.location.href = target;
    } catch {
      setSubmitting(null);
    }
  };

  return (
    <div className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-800">
        Development demo (DEMO_MODE=true)
      </p>
      <p className="mb-3 text-xs text-amber-900">
        Skip auth and jump straight to the content. This block does not render in production.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handle("student")}
          disabled={submitting !== null}
          className="flex-1 rounded-md border border-amber-300 bg-white py-2 text-sm font-medium text-amber-900 transition-colors hover:bg-amber-100 disabled:opacity-60"
        >
          {submitting === "student" ? "Loading..." : "Demo Student"}
        </button>
        <button
          type="button"
          onClick={() => handle("teacher")}
          disabled={submitting !== null}
          className="flex-1 rounded-md border border-amber-300 bg-white py-2 text-sm font-medium text-amber-900 transition-colors hover:bg-amber-100 disabled:opacity-60"
        >
          {submitting === "teacher" ? "Loading..." : "Demo Teacher"}
        </button>
      </div>
    </div>
  );
}
