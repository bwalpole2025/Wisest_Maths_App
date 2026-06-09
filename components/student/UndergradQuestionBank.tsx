"use client";

import { useMemo, useState } from "react";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { getCourseQuestionCounts } from "@/lib/data/questionCounts";
import { useTopicQuestionSummaries } from "@/hooks/useQuestions";
import { MathTextInline } from "@/components/questions/MathText";
import { QuestionBankCard } from "@/components/questions/QuestionBankCard";
import type { QuestionSummary } from "@/lib/types";

/**
 * Self-contained undergraduate question browser: Category → Topic → Questions.
 * Kept separate from the A-Level Year/Component state machine (which has no
 * equivalent here) and modelled on GcseQuestionBank, dropping the tier level.
 * Categories are the tripos topic groupings (Topic.category, e.g. "Asymptotic
 * Methods"); topics are the leaf subtopics. Leaves with banked questions are
 * attemptable; the rest read "Questions coming soon".
 */

type Level = "category" | "topics" | "questions";

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

export function UndergradQuestionBank({
  onBackToCourse,
  onTryQuestion,
  rootLabel = "Question Bank",
}: {
  onBackToCourse: () => void;
  /** When provided, each question shows a "Try with AI" button calling this
   *  (used by the AI tutor) instead of an "Attempt" link to the bank. */
  onTryQuestion?: (q: QuestionSummary) => void;
  rootLabel?: string;
}) {
  const allTopics = useMemo(() => getTopicsForCourse("undergrad-maths"), []);
  const counts = useMemo(() => getCourseQuestionCounts("undergrad-maths"), []);
  const [level, setLevel] = useState<Level>("category");
  const [category, setCategory] = useState<string | null>(null);
  const [topicRef, setTopicRef] = useState<string | null>(null);

  const categoriesWithCounts = useMemo(() => {
    const byCat = new Map<string, { topics: number; questions: number }>();
    for (const t of allTopics) {
      const row = byCat.get(t.category) ?? { topics: 0, questions: 0 };
      row.topics += 1;
      row.questions += counts.get(t.ref) ?? 0;
      byCat.set(t.category, row);
    }
    return Array.from(byCat.entries()).map(([name, v]) => ({ name, ...v }));
  }, [allTopics, counts]);

  const topicsInCategory = useMemo(
    () => allTopics.filter((t) => t.category === category),
    [allTopics, category],
  );

  const selectedTopic = topicsInCategory.find((t) => t.ref === topicRef);
  const { questions, loaded, hasMore, loadMore } = useTopicQuestionSummaries(
    level === "questions" ? topicRef : null,
  );
  const sortedQuestions = useMemo(
    () => [...questions].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })),
    [questions],
  );

  const goCategory = () => { setLevel("category"); setCategory(null); setTopicRef(null); };
  const goTopics = (c: string) => { setCategory(c); setLevel("topics"); setTopicRef(null); };
  const goQuestions = (ref: string) => { setTopicRef(ref); setLevel("questions"); };

  const heading =
    level === "category" ? "Undergraduate Maths" :
    level === "topics" ? category! :
    (selectedTopic?.title ?? "");

  const sub =
    level === "category" ? "Select a topic area." :
    level === "topics" ? "Select a topic." :
    loaded ? `${sortedQuestions.length} question${sortedQuestions.length !== 1 ? "s" : ""} available.` : "Loading questions…";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Breadcrumbs */}
      <div className="mb-8 fade-up">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-foreground/50">
          <button onClick={onBackToCourse} className="hover:text-accent transition-colors">{rootLabel}</button>
          <span className="text-foreground/30">/</span>
          <button onClick={goCategory} className="hover:text-accent transition-colors">Undergraduate Maths</button>
          {category && level !== "category" && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goTopics(category)} className="hover:text-accent transition-colors">{category}</button>
            </>
          )}
          {selectedTopic && level === "questions" && (
            <>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground/80"><MathTextInline text={selectedTopic.title} /></span>
            </>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gradient-cool">{heading}</h1>
        <p className="mt-1.5 text-sm text-foreground/60">{sub}</p>
      </div>

      {/* ── CATEGORY ─────────────────────────── */}
      {level === "category" && (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 fade-up-delay-1">
          {categoriesWithCounts.map(({ name, topics: nTopics, questions: nQ }) => (
            <button
              key={name}
              onClick={() => goTopics(name)}
              className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">
                {"∂"}
              </div>
              <h2 className="mt-4 text-base font-bold text-foreground">{name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {nTopics} topic{nTopics !== 1 ? "s" : ""}
                {nQ > 0 ? ` · ${nQ} questions` : ""}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* ── TOPICS ───────────────────────────── */}
      {level === "topics" && (
        <>
          <BackButton label="Back" onClick={goCategory} />
          <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
            {topicsInCategory.map((t) => {
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
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-accent truncate transition-colors"><MathTextInline text={t.title} /></h3>
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
          <BackButton label={`Back to ${category}`} onClick={() => goTopics(category!)} />
          <div className="space-y-4 fade-up-delay-1">
            {!loaded &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={`sk-${i}`} className="animate-pulse rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-black/5 bg-black/[0.02] px-5 py-3">
                    <div className="h-5 w-32 rounded bg-black/10" />
                    <div className="h-5 w-16 rounded bg-black/10" />
                  </div>
                  <div className="px-5 py-5">
                    <div className="h-4 w-3/4 rounded bg-black/10" />
                  </div>
                </div>
              ))}
            {loaded && sortedQuestions.map((q, idx) => (
              <QuestionBankCard
                key={q.id}
                index={idx + 1}
                question={q}
                showTopicTitle={false}
                action={
                  onTryQuestion
                    ? { kind: "button", label: "Try with AI", onClick: () => onTryQuestion(q) }
                    : { kind: "link", href: `/student/questions/attempt?id=${q.id}` }
                }
              />
            ))}
            {loaded && hasMore && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={loadMore}
                  className="rounded-lg border border-accent/40 bg-accent/5 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
