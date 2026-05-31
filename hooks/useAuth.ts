"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { UserRole } from "@/lib/types";

/**
 * Client-side auth hook backed by Supabase Auth.
 *
 * Auth tokens are stored in **httpOnly cookies** by the Supabase SSR client —
 * NOT in localStorage. This hook only mirrors the user object for UI use.
 * Logging in / out is done via server routes (/api/auth/login etc.) so that
 * cookie writes happen server-side with the correct security attributes.
 */

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthState {
  user: AuthUser | null;
  role: UserRole | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (
    email: string,
    password: string,
    name?: string,
  ) => Promise<{ ok: boolean; error?: string; requiresConfirmation?: boolean }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState>({
  user: null,
  role: null,
  loading: true,
  login: async () => ({ ok: false }),
  signup: async () => ({ ok: false }),
  logout: async () => {},
});

export function useAuth(): AuthState {
  return useContext(AuthContext);
}

export { AuthContext };

function buildAuthUser(
  id: string,
  email: string | undefined,
  metadata: Record<string, unknown> | undefined,
  appMetadata: Record<string, unknown> | undefined,
): AuthUser {
  const role =
    (appMetadata?.role as UserRole | undefined) ?? "student";
  const name =
    (metadata?.name as string | undefined) ??
    (email ? email.split("@")[0] : "User");
  return { id, email: email ?? "", name, role };
}

export function useAuthProvider(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    // Initial fetch from /api/auth/me — returns either the demo user (if
    // demo mode is active and the cookie is set) or the Supabase user.
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data: { user: AuthUser | null }) => {
        if (!cancelled) {
          setUser(data.user);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    // Subscribe to Supabase auth changes too (other-tab login etc.).
    const supabase = createClient();
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(
            buildAuthUser(
              session.user.id,
              session.user.email,
              session.user.user_metadata,
              session.user.app_metadata,
            ),
          );
        }
        // Don't null out on SIGNED_OUT — the demo cookie may still be valid.
        // Re-fetch /api/auth/me to get the authoritative current user.
        else {
          fetch("/api/auth/me")
            .then((r) => r.json())
            .then((data: { user: AuthUser | null }) => {
              if (!cancelled) setUser(data.user);
            })
            .catch(() => {
              if (!cancelled) setUser(null);
            });
        }
      },
    );

    return () => {
      cancelled = true;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        return { ok: false, error: body.error ?? "Login failed." };
      }

      const body = (await res.json()) as { user: AuthUser };
      const target =
        body.user.role === "teacher" ? "/teacher/dashboard" : "/courses";
      router.push(target);
      router.refresh();
      return { ok: true };
    },
    [router],
  );

  const signup = useCallback(
    async (email: string, password: string, name?: string) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        return { ok: false, error: body.error ?? "Signup failed." };
      }

      const body = (await res.json()) as { requiresConfirmation: boolean };
      if (!body.requiresConfirmation) {
        router.push("/courses");
        router.refresh();
      }
      return { ok: true, requiresConfirmation: body.requiresConfirmation };
    },
    [router],
  );

  const logout = useCallback(async () => {
    // Clear both Supabase session and any demo cookie. Each endpoint is a no-op
    // if its cookie isn't present, so calling both is safe.
    await Promise.all([
      fetch("/api/auth/logout", { method: "POST" }),
      fetch("/api/auth/demo", { method: "DELETE" }),
    ]);
    setUser(null);
    router.push("/login");
    router.refresh();
  }, [router]);

  return { user, role: user?.role ?? null, loading, login, signup, logout };
}
