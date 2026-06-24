"use client";

import { useMemo, useState } from "react";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { getCourseQuestionCounts } from "@/lib/data/questionCounts";
import { useTopicQuestionSummaries } from "@/hooks/useQuestions";
import { MathTextInline } from "@/components/questions/MathText";
import { QuestionBankCard } from "@/components/questions/QuestionBankCard";
import type { QuestionSummary } from "@/lib/types";

/**
 * Self-contained undergraduate question browser:
 *   Module (category) → Topic (subcategory) → Subtopic (leaf) → Questions.
 * Mirrors the content taxonomy (e.g. Asymptotic Methods → 10 topics → 4
 * subtopics each). Subtopics with banked questions are attemptable; the rest
 * read "Questions coming soon". Kept separate from the A-Level state machine.
 */

type Level = "module" | "topic" | "subtopic" | "questions";

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
  const [level, setLevel] = useState<Level>("module");
  const [moduleName, setModuleName] = useState<string | null>(null);
  const [topicName, setTopicName] = useState<string | null>(null);
  const [subtopicRef, setSubtopicRef] = useState<string | null>(null);

  // Distinct modules (category), each with its topic + question totals.
  const modules = useMemo(() => {
    const byCat = new Map<string, { topics: Set<string>; questions: number }>();
    for (const t of allTopics) {
      const row = byCat.get(t.category) ?? { topics: new Set(), questions: 0 };
      row.topics.add(t.subcategory);
      row.questions += counts.get(t.ref) ?? 0;
      byCat.set(t.category, row);
    }
    return Array.from(byCat.entries()).map(([name, v]) => ({
      name,
      topics: v.topics.size,
      questions: v.questions,
    }));
  }, [allTopics, counts]);

  // Topics (subcategory) within the chosen module, preserving manifest order.
  const topics = useMemo(() => {
    if (!moduleName) return [] as { name: string; subtopics: number; questions: number }[];
    const order: string[] = [];
    const map = new Map<string, { subtopics: number; questions: number }>();
    for (const t of allTopics) {
      if (t.category !== moduleName) continue;
      if (!map.has(t.subcategory)) {
        map.set(t.subcategory, { subtopics: 0, questions: 0 });
        order.push(t.subcategory);
      }
      const row = map.get(t.subcategory)!;
      row.subtopics += 1;
      row.questions += counts.get(t.ref) ?? 0;
    }
    return order.map((name) => ({ name, ...map.get(name)! }));
  }, [allTopics, counts, moduleName]);

  // Subtopics (leaves) within the chosen module + topic.
  const subtopics = useMemo(
    () => allTopics.filter((t) => t.category === moduleName && t.subcategory === topicName),
    [allTopics, moduleName, topicName],
  );

  const selectedSubtopic = subtopics.find((t) => t.ref === subtopicRef);
  const { questions, loaded, hasMore, loadMore } = useTopicQuestionSummaries(
    level === "questions" ? subtopicRef : null,
  );
  const sortedQuestions = useMemo(
    () => [...questions].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })),
    [questions],
  );

  const goModule = () => { setLevel("module"); setModuleName(null); setTopicName(null); setSubtopicRef(null); };
  const goTopics = (m: string) => { setModuleName(m); setLevel("topic"); setTopicName(null); setSubtopicRef(null); };
  const goSubtopics = (t: string) => { setTopicName(t); setLevel("subtopic"); setSubtopicRef(null); };
  const goQuestions = (ref: string) => { setSubtopicRef(ref); setLevel("questions"); };

  const heading =
    level === "module" ? "Undergraduate Maths" :
    level === "topic" ? moduleName! :
    level === "subtopic" ? topicName! :
    (selectedSubtopic?.title ?? "");

  const sub =
    level === "module" ? "Select a module." :
    level === "topic" ? "Select a topic." :
    level === "subtopic" ? "Select a subtopic." :
    loaded ? `${sortedQuestions.length} question${sortedQuestions.length !== 1 ? "s" : ""} available.` : "Loading questions…";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Breadcrumbs */}
      <div className="mb-8 fade-up">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-foreground/50">
          <button onClick={onBackToCourse} className="hover:text-accent transition-colors">{rootLabel}</button>
          <span className="text-foreground/30">/</span>
          <button onClick={goModule} className="hover:text-accent transition-colors">Undergraduate Maths</button>
          {moduleName && level !== "module" && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goTopics(moduleName)} className="hover:text-accent transition-colors">{moduleName}</button>
            </>
          )}
          {topicName && (level === "subtopic" || level === "questions") && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goSubtopics(topicName)} className="hover:text-accent transition-colors">{topicName}</button>
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

      {/* ── MODULE ───────────────────────────── */}
      {level === "module" && (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 fade-up-delay-1">
          {modules.map((m) => (
            <button
              key={m.name}
              onClick={() => goTopics(m.name)}
              className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">
                {"∂"}
              </div>
              <h2 className="mt-4 text-base font-bold text-foreground">{m.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {m.topics} topic{m.topics !== 1 ? "s" : ""}
                {m.questions > 0 ? ` · ${m.questions} questions` : ""}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* ── TOPIC ────────────────────────────── */}
      {level === "topic" && (
        <>
          <BackButton label="Back" onClick={goModule} />
          <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
            {topics.map((t, i) => (
              <button
                key={t.name}
                onClick={() => goSubtopics(t.name)}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-accent/40 hover:shadow-sm hover:-translate-y-0.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 font-mono text-xs font-bold text-accent">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{t.name}</h3>
                    <p className="mt-0.5 text-xs text-foreground/50">
                      {t.subtopics} subtopic{t.subtopics !== 1 ? "s" : ""}
                      {t.questions > 0 ? ` · ${t.questions} questions` : " · coming soon"}
                    </p>
                  </div>
                </div>
                <span className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all">&#8594;</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── SUBTOPIC ─────────────────────────── */}
      {level === "subtopic" && (
        <>
          <BackButton label={`Back to ${moduleName}`} onClick={() => goTopics(moduleName!)} />
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
          <BackButton label={`Back to ${topicName}`} onClick={() => goSubtopics(topicName!)} />
          <div className="space-y-4 fade-up-delay-1">
            {!loaded &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={`sk-${i}`} className="animate-pulse rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border bg-foreground/[0.06] px-5 py-3">
                    <div className="h-5 w-32 rounded bg-foreground/10" />
                    <div className="h-5 w-16 rounded bg-foreground/10" />
                  </div>
                  <div className="px-5 py-5">
                    <div className="h-4 w-3/4 rounded bg-foreground/10" />
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
