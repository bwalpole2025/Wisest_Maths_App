"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const tiers = [
  {
    id: "Foundation",
    title: "Foundation Tier",
    description:
      "Grades 1–5. Core Number, Algebra, Ratio, Geometry, Probability & Statistics.",
    href: "/student/topics?tier=Foundation",
    available: true,
  },
  {
    id: "Higher",
    title: "Higher Tier",
    description:
      "Grades 4–9. All Foundation content plus surds, advanced algebra, trig rules, circle theorems and more.",
    href: "/student/topics?tier=Higher",
    available: true,
  },
];

export default function GcseMathsTierPage() {
  const { loading: authLoading } = useAuth();

  // Auth handled by courses layout RouteGuard

  if (authLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/[0.08] blur-3xl" />
      </div>

      <div className="w-full max-w-3xl text-center">
        <div className="fade-up mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to courses
          </Link>
        </div>

        <h1 className="fade-up-delay-1 text-4xl md:text-5xl font-bold tracking-tight text-gradient-cool">
          GCSE Maths
        </h1>
        <p className="fade-up-delay-2 mx-auto mt-3 max-w-lg text-sm text-foreground/60">
          Choose your tier to start browsing the curriculum.
        </p>

        <div className="fade-up-delay-3 mt-10 grid gap-5 sm:grid-cols-2">
          {tiers.map((t, i) => (
            <Link
              key={t.id}
              href={t.href}
              className="card-glow group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 text-left transition-all cursor-pointer hover:border-accent/40"
              style={{ animationDelay: `${0.35 + i * 0.08}s` }}
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:bg-accent/20" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 text-xl font-bold text-foreground shadow-inner-glow ring-1 ring-black/10">
                {t.id === "Foundation" ? "F" : "H"}
              </div>
              <h2 className="relative mt-5 text-lg font-bold text-foreground">
                {t.title}
              </h2>
              <p className="relative mt-2 text-sm text-foreground/85 leading-relaxed">
                {t.description}
              </p>
              <div className="relative mt-4 flex items-center gap-1.5 text-xs font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                Browse topics
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
