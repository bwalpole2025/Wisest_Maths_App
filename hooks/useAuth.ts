"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import type { UserRole } from "@/lib/types";
import { homeForRole } from "@/lib/auth/home";

export interface AuthUser {
  email: string;
  name: string;
  role: UserRole;
}

export interface LoginResult {
  ok: boolean;
  error?: string;
}

interface AuthState {
  user: AuthUser | null;
  role: UserRole | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState>({
  user: null,
  role: null,
  loading: true,
  login: async () => ({ ok: false }),
  logout: async () => {},
});

export function useAuth(): AuthState {
  return useContext(AuthContext);
}

export { AuthContext };

export function useAuthProvider(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Hydrate from the server. The session cookie is HttpOnly, so the client
  // cannot read it directly — it asks the server who it is.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (!cancelled && res.ok) {
          const data = await res.json();
          setUser(data.user ?? null);
        }
      } catch {
        // Treat any failure as "not signed in".
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<LoginResult> => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          return { ok: false, error: data.error ?? "Sign in failed." };
        }
        const authUser: AuthUser = data.user;
        setUser(authUser);
        router.push(homeForRole(authUser.role));
        return { ok: true };
      } catch {
        return { ok: false, error: "Network error. Please try again." };
      }
    },
    [router],
  );

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } catch {
      // ignore — clear local state regardless
    }
    localStorage.removeItem("mathsapp-course");
    setUser(null);
    router.push("/login");
  }, [router]);

  return { user, role: user?.role ?? null, loading, login, logout };
}
