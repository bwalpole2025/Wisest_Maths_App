"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  const [tab, setTab] = useState<"student" | "teacher">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    login(email, password);
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
          {(["student", "teacher"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setTab(r)}
              className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${
                tab === r
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              I&apos;m a {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                tab === "teacher"
                  ? "you@teacher.mathsapp.com"
                  : "you@school.ac.uk"
              }
              className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-accent py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
          >
            Sign In
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
              onClick={() => login("demo@school.ac.uk", "demo")}
              className="flex-1 rounded-md border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Demo Student
            </button>
            <button
              type="button"
              onClick={() => login("demo@teacher.mathsapp.com", "demo")}
              className="flex-1 rounded-md border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Demo Teacher
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          New student? Ask your teacher for an access code.
        </p>
      </div>
    </div>
  );
}
