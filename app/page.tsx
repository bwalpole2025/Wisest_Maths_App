import Link from "next/link";
import { topics } from "@/lib/data/topics";

const floatingSymbols = [
  { symbol: "\u222b", left: "8%",  size: "2.5rem", duration: "18s", delay: "0s" },
  { symbol: "\u03a3", left: "22%", size: "2rem",   duration: "22s", delay: "3s" },
  { symbol: "\u221a", left: "38%", size: "2.2rem", duration: "20s", delay: "7s" },
  { symbol: "\u03c0", left: "55%", size: "2.8rem", duration: "24s", delay: "1s" },
  { symbol: "dx", left: "70%", size: "1.8rem", duration: "19s", delay: "5s" },
  { symbol: "\u221e", left: "85%", size: "2.4rem", duration: "21s", delay: "9s" },
  { symbol: "\u03b8", left: "15%", size: "1.9rem", duration: "25s", delay: "12s" },
  { symbol: "\u0394", left: "48%", size: "2.1rem", duration: "23s", delay: "4s" },
  { symbol: "\u2202", left: "92%", size: "2rem",   duration: "17s", delay: "8s" },
  { symbol: "\u03bb", left: "62%", size: "2.3rem", duration: "26s", delay: "11s" },
];

const features = [
  {
    emoji: "\ud83c\udfac",
    title: "Video Lessons",
    desc: "Short, focused videos on every OCR MEI topic. Watch 4 videos, then prove your understanding.",
  },
  {
    emoji: "\ud83e\uddee",
    title: "Question Bank",
    desc: "Hundreds of A-level questions mapped to every spec reference, with full worked solutions.",
  },
  {
    emoji: "\ud83e\udd16",
    title: "AI Assessment",
    desc: "After every 4 videos, our AI gives you 8 problems and guides you to the correct reasoning.",
  },
];

const steps = [
  { num: 1, icon: "\ud83d\udcda", title: "Pick a topic", desc: "Choose from the full OCR MEI specification" },
  { num: 2, icon: "\ud83c\udfac", title: "Watch 4 video lessons", desc: "~20 minutes of focused, visual explanations" },
  { num: 3, icon: "\ud83e\udd16", title: "Complete an 8-question AI assessment", desc: "Answer problems and explain your reasoning" },
  { num: 4, icon: "\ud83d\udcca", title: "Review and track progress", desc: "Study worked solutions and see how you improve" },
];

const previewTopics = topics.slice(0, 6);

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="hero-grid relative overflow-hidden bg-primary px-6 py-28 text-center text-white md:py-36">
        {floatingSymbols.map((s, i) => (
          <span
            key={i}
            className="float-symbol"
            style={{
              left: s.left,
              fontSize: s.size,
              animationDuration: s.duration,
              animationDelay: s.delay,
            }}
          >
            {s.symbol}
          </span>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(190,18,60,.2),transparent_70%)]" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Master A-Level Maths
          </h1>
          <span className="mt-5 inline-block rounded-full border border-accent/40 bg-accent/15 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-accent-light">
            OCR B (MEI)
          </span>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Video lessons, a comprehensive question bank, and AI-powered
            assessment — all in one place.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login"
              className="rounded-lg bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
            >
              I&apos;m a Student →
            </Link>
            <Link
              href="/login"
              className="rounded-lg border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
            >
              I&apos;m a Teacher →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="relative z-10 -mt-14 px-6">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-white p-7 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold text-foreground">
          How it <span className="text-accent">works</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          A simple, repeatable cycle designed around how students actually learn.
        </p>

        <div className="mt-14 space-y-10">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex gap-5">
              {i < steps.length - 1 && <div className="step-connector" />}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md shadow-accent/25">
                {s.num}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOPIC PREVIEW */}
      <section className="border-t border-border bg-surface-alt px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-foreground">
            Explore <span className="text-accent">topics</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
            Every topic from the OCR B (MEI) H640 specification, organised by component.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewTopics.map((t) => (
              <Link
                key={t.id}
                href={`/student/topics/${t.id}`}
                className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent font-mono">
                    {t.ref}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Year {t.module}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-accent">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {t.learningOutcome}
                </p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {t.subcategory}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/student/topics"
              className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary"
            >
              View all {topics.length} topics →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-primary px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/50">
            MathsApp © 2025 · Built for OCR B (MEI) A-Level Mathematics
          </p>
          <nav className="flex gap-6 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/student/topics", label: "Topics" },
              { href: "/student/questions", label: "Question Bank" },
              { href: "/login", label: "Login" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/40 transition-colors hover:text-white/70"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
