"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { getCourseQuestionCounts } from "@/lib/data/questionCounts";
import { useTopicQuestions } from "@/hooks/useQuestions";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { Badge } from "@/components/ui/badge";
import type { Topic } from "@/lib/types";

/**
 * Self-contained GCSE question browser: Tier → Strand → Topic → Subtopic →
 * Questions. Kept separate from the A-Level question-bank state machine so the
 * two flows don't entangle. Subtopics with banked questions are attemptable;
 * the rest read "Questions coming soon".
 */

const STRANDS = [
  "Number",
  "Algebra",
  "Ratio, Proportion & Rates of Change",
  "Geometry & Measures",
  "Probability",
  "Statistics",
] as const;

const STRAND_SHORT: Record<string, string> = {
  Number: "Number",
  Algebra: "Algebra",
  "Ratio, Proportion & Rates of Change": "Ratio & Proportion",
  "Geometry & Measures": "Geometry & Measures",
  Probability: "Probability",
  Statistics: "Statistics",
};

const STRAND_ICON: Record<string, string> = {
  Number: "#",
  Algebra: "x",
  "Ratio, Proportion & Rates of Change": "∶",
  "Geometry & Measures": "△",
  Probability: "½",
  Statistics: "Σ",
};

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Standard: "bg-amber-50 text-amber-700 border-amber-200",
  Challenge: "bg-rose-50 text-rose-700 border-rose-200",
};

type Level = "tier" | "strand" | "topic" | "subtopics" | "questions";

function tierMatches(t: Topic, tier: "Foundation" | "Higher"): boolean {
  // Foundation paper = "Both" content; Higher covers everything.
  return tier === "Higher" ? true : t.tier === "Both";
}

function BackButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </button>
  );
}

export function GcseQuestionBank({ onBackToCourse }: { onBackToCourse: () => void }) {
  const allTopics = useMemo(() => getTopicsForCourse("gcse-maths"), []);
  const counts = useMemo(() => getCourseQuestionCounts("gcse-maths"), []);
  const [level, setLevel] = useState<Level>("tier");
  const [tier, setTier] = useState<"Foundation" | "Higher" | null>(null);
  const [strand, setStrand] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const [subtopicRef, setSubtopicRef] = useState<string | null>(null);

  const tierTopics = useMemo(
    () => (tier ? allTopics.filter((t) => tierMatches(t, tier)) : []),
    [allTopics, tier],
  );

  const strandsWithCounts = useMemo(
    () =>
      STRANDS.map((s) => ({
        strand: s,
        count: tierTopics.filter((t) => t.category === s).length,
      })).filter((s) => s.count > 0),
    [tierTopics],
  );

  const topicsInStrand = useMemo(() => {
    if (!strand) return [] as { title: string; subs: number; questions: number }[];
    const subs = new Map<string, { subs: number; questions: number }>();
    for (const t of tierTopics) {
      if (t.category !== strand) continue;
      const row = subs.get(t.subcategory) ?? { subs: 0, questions: 0 };
      row.subs += 1;
      row.questions += counts.get(t.ref) ?? 0;
      subs.set(t.subcategory, row);
    }
    return Array.from(subs.entries()).map(([title, v]) => ({ title, ...v }));
  }, [tierTopics, strand, counts]);

  const subtopics = useMemo(
    () => tierTopics.filter((t) => t.category === strand && t.subcategory === topic),
    [tierTopics, strand, topic],
  );

  const selectedSubtopic = subtopics.find((t) => t.ref === subtopicRef);
  const { questions, loaded } = useTopicQuestions(level === "questions" ? subtopicRef : null);
  const sortedQuestions = useMemo(
    () => [...questions].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })),
    [questions],
  );

  const goTier = () => { setLevel("tier"); setTier(null); setStrand(null); setTopic(null); setSubtopicRef(null); };
  const goStrand = (tr: "Foundation" | "Higher") => { setTier(tr); setLevel("strand"); setStrand(null); setTopic(null); setSubtopicRef(null); };
  const goTopic = (s: string) => { setStrand(s); setLevel("topic"); setTopic(null); setSubtopicRef(null); };
  const goSubtopics = (sub: string) => { setTopic(sub); setLevel("subtopics"); setSubtopicRef(null); };
  const goQuestions = (ref: string) => { setSubtopicRef(ref); setLevel("questions"); };

  const heading =
    level === "tier" ? "GCSE Maths" :
    level === "strand" ? `${tier} Tier` :
    level === "topic" ? (STRAND_SHORT[strand!] ?? strand!) :
    level === "subtopics" ? topic! :
    (selectedSubtopic?.title ?? "");

  const sub =
    level === "tier" ? "Choose your tier." :
    level === "strand" ? "Select a strand." :
    level === "topic" ? "Select a topic." :
    level === "subtopics" ? "Select a subtopic." :
    loaded ? `${sortedQuestions.length} question${sortedQuestions.length !== 1 ? "s" : ""} available.` : "Loading questions…";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Breadcrumbs */}
      <div className="mb-8 fade-up">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-foreground/50">
          <button onClick={onBackToCourse} className="hover:text-accent transition-colors">Question Bank</button>
          <span className="text-foreground/30">/</span>
          <button onClick={goTier} className="hover:text-accent transition-colors">GCSE Maths</button>
          {tier && level !== "tier" && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goStrand(tier)} className="hover:text-accent transition-colors">{tier} Tier</button>
            </>
          )}
          {strand && level !== "tier" && level !== "strand" && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goTopic(strand)} className="hover:text-accent transition-colors">{STRAND_SHORT[strand] ?? strand}</button>
            </>
          )}
          {topic && (level === "subtopics" || level === "questions") && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goSubtopics(topic)} className="hover:text-accent transition-colors">{topic}</button>
            </>
          )}
          {selectedSubtopic && level === "questions" && (
            <>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground/80"><MathTextInline text={selectedSubtopic.title} /></span>
            </>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gradient-cool">{heading}</h1>
        <p className="mt-1.5 text-sm text-foreground/60">{sub}</p>
      </div>

      {/* ── TIER ─────────────────────────────── */}
      {level === "tier" && (
        <div className="grid gap-5 sm:grid-cols-2 fade-up-delay-1">
          {(["Foundation", "Higher"] as const).map((tr) => (
            <button
              key={tr}
              onClick={() => goStrand(tr)}
              className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">
                {tr === "Foundation" ? "F" : "H"}
              </div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{tr} Tier</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {tr === "Foundation" ? "Grades 1–5 · core content." : "Grades 4–9 · all content."}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* ── STRAND ───────────────────────────── */}
      {level === "strand" && (
        <>
          <BackButton label="Back" onClick={goTier} />
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 fade-up-delay-1">
            {strandsWithCounts.map(({ strand: s, count }) => (
              <button
                key={s}
                onClick={() => goTopic(s)}
                className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">
                  {STRAND_ICON[s]}
                </div>
                <h2 className="mt-4 text-base font-bold text-foreground">{STRAND_SHORT[s] ?? s}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{count} subtopics</p>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── TOPIC ────────────────────────────── */}
      {level === "topic" && (
        <>
          <BackButton label="Back" onClick={() => goStrand(tier!)} />
          <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
            {topicsInStrand.map((t) => (
              <button
                key={t.title}
                onClick={() => goSubtopics(t.title)}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-accent/40 hover:shadow-sm hover:-translate-y-0.5"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{t.title}</h3>
                  <p className="mt-0.5 text-xs text-foreground/50">
                    {t.subs} subtopic{t.subs !== 1 ? "s" : ""}
                    {t.questions > 0 ? ` · ${t.questions} questions` : ""}
                  </p>
                </div>
                <span className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all">&#8594;</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── SUBTOPICS ────────────────────────── */}
      {level === "subtopics" && (
        <>
          <BackButton label={`Back to ${STRAND_SHORT[strand!] ?? strand!}`} onClick={() => goTopic(strand!)} />
          <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
            {subtopics.map((t) => {
              const count = counts.get(t.ref) ?? 0;
              const comingSoon = count === 0;
              return (
                <button
                  key={t.id}
                  onClick={() => !comingSoon && goQuestions(t.ref)}
                  disabled={comingSoon}
                  className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all ${comingSoon ? "opacity-50 cursor-not-allowed" : "hover:border-accent/40 hover:shadow-sm hover:-translate-y-0.5"}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 font-mono text-xs font-bold text-accent">
                    {t.ref}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-accent truncate transition-colors">{t.title}</h3>
                    <p className="mt-0.5 text-xs text-foreground/50">
                      {comingSoon ? "Questions coming soon" : `${count} question${count !== 1 ? "s" : ""}`}
                    </p>
                  </div>
                  {!comingSoon && <span className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all">&#8594;</span>}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* ── QUESTIONS ────────────────────────── */}
      {level === "questions" && (
        <>
          <BackButton label={`Back to ${topic}`} onClick={() => goSubtopics(topic!)} />
          <div className="space-y-4 fade-up-delay-1">
            {!loaded && (
              <div className="rounded-xl border border-border bg-card px-5 py-8 text-center text-sm text-foreground/50">
                Loading questions…
              </div>
            )}
            {loaded && sortedQuestions.map((q, idx) => (
              <div key={q.id} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-md">
                <div className="flex items-center justify-between border-b border-black/5 bg-black/[0.02] px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 text-sm font-bold text-accent font-mono">
                      {idx + 1}
                    </span>
                    <Badge variant="outline" className={diffBadge[q.difficulty]}>{q.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-0.5 text-xs font-medium text-foreground/60">{q.marks} {q.marks === 1 ? "mark" : "marks"}</span>
                    {q.examStyle && <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary">Exam</span>}
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="text-sm leading-relaxed text-foreground/85 overflow-x-auto"><MathText text={q.questionText} /></div>
                  <div className="mt-5 flex items-center justify-end">
                    <Link
                      href={`/student/questions/attempt?id=${q.id}`}
                      className="btn-shine shrink-0 rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      Attempt
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
