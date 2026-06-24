"use client";

import { useEffect, useMemo, useState } from "react";
import { MathTextInline } from "@/components/questions/MathText";
import { LessonRunner, lessonIsDone } from "@/components/learn/LessonRunner";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { getCourseQuestionCounts } from "@/lib/data/questionCounts";
import { useLesson } from "@/hooks/useLesson";

type View = "subcategory" | "subtopics" | "lesson";

// Per-unit accent colours (cycled), referencing the theme's chart tokens.
const CHART = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];

// Pure Year 1 subcategories, in teaching order (matches the AI Tutor browser).
const PURE_SUBCATEGORIES = [
  "Algebra",
  "Quadratics and Cubics",
  "Coordinate Geometry",
  "Trigonometry 1",
  "Exponentials and Logarithms",
  "Differentiation 1",
  "Integration 1",
  "Vectors 1",
  "Binomial Expansions 1",
  "Inequalities and Simultaneous Equations",
];

export default function GuidedLearningPage() {
  const [view, setView] = useState<View>("subcategory");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedRef, setSelectedRef] = useState<string | null>(null);
  const [lessonRefs, setLessonRefs] = useState<Set<string>>(new Set());
  // Completed-lesson refs, read from localStorage on the client only (avoids a
  // hydration mismatch from reading storage during render). Refreshed whenever we
  // return to the browser so a just-finished lesson shows its tick.
  const [doneRefs, setDoneRefs] = useState<Set<string>>(new Set());

  // Which subtopics have an authored lesson (so we can light them up).
  useEffect(() => {
    const ctrl = new AbortController();
    fetch("/api/lessons?list=1", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : { refs: [] }))
      .then((d) => setLessonRefs(new Set((d.refs as string[]) ?? [])))
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  const pureTopics = useMemo(
    () =>
      getTopicsForCourse("a-level-maths").filter(
        (t) => t.module === 1 && t.category === "Pure Mathematics",
      ),
    [],
  );
  const counts = useMemo(() => getCourseQuestionCounts("a-level-maths"), []);

  // Refresh completion ticks on mount and whenever we land on the browser views.
  useEffect(() => {
    if (view === "lesson") return;
    const done = new Set<string>();
    for (const t of pureTopics) if (lessonIsDone(t.ref)) done.add(t.ref);
    setDoneRefs(done);
  }, [view, pureTopics]);

  // Subtopics in a subcategory that have question content (and so can have a lesson).
  const subtopicsFor = (sub: string) =>
    pureTopics
      .filter((t) => t.subcategory === sub && (counts.get(t.ref) ?? 0) > 0)
      .sort((a, b) => a.ref.localeCompare(b.ref, undefined, { numeric: true }));

  // Available subcategories (those with at least one content-bearing subtopic).
  const subcategories = PURE_SUBCATEGORIES.filter((s) => subtopicsFor(s).length > 0);

  const { lesson, loaded, notFound } = useLesson(view === "lesson" ? selectedRef : null);

  const goSubcategory = () => { setView("subcategory"); setSelectedSubcategory(null); setSelectedRef(null); };
  const goSubtopics = (sub: string) => { setSelectedSubcategory(sub); setSelectedRef(null); setView("subtopics"); };
  const goLesson = (ref: string) => { setSelectedRef(ref); setView("lesson"); };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Breadcrumbs + header */}
      <div className="mb-8 fade-up">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground/50 flex-wrap">
          <button onClick={goSubcategory} className="hover:text-accent transition-colors">Guided Learning</button>
          <span className="text-foreground/30">/</span>
          <span className="text-foreground/70">A-Level Maths · Year 1 · Pure</span>
          {selectedSubcategory && view !== "subcategory" && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goSubtopics(selectedSubcategory)} className="hover:text-accent transition-colors">{selectedSubcategory}</button>
            </>
          )}
        </div>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground">
          {view === "subcategory" ? "Guided Learning" : view === "subtopics" ? selectedSubcategory : (lesson?.title ?? "Lesson")}
        </h1>
        <p className="mt-1.5 text-sm text-foreground/60">
          {view === "subcategory" && "Interactive lessons — learn each idea, then prove it on a quick question. The AI tutor nudges you until it clicks."}
          {view === "subtopics" && "Choose a subtopic to start its lesson."}
          {view === "lesson" && (lesson?.intro ?? "")}
        </p>
      </div>

      {/* SUBCATEGORY GRID — colourful unit cards */}
      {view === "subcategory" && (
        <div className="space-y-6 fade-up-delay-1">
          <div className="grid gap-4 sm:grid-cols-2">
            {subcategories.map((sub, idx) => {
              const subs = subtopicsFor(sub);
              const ready = subs.filter((t) => lessonRefs.has(t.ref)).length;
              const done = subs.filter((t) => doneRefs.has(t.ref)).length;
              const accent = CHART[idx % CHART.length];
              const pct = ready > 0 ? Math.round((done / ready) * 100) : 0;
              return (
                <button key={sub} onClick={() => goSubtopics(sub)} className="card-dark-glow group relative overflow-hidden rounded-3xl p-5 text-left transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-[#04222a] shadow-lg" style={{ background: `hsl(var(--${accent}))` }}>
                      {sub.slice(0, 1)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-base font-bold text-foreground leading-snug">{sub}</h2>
                      <p className="mt-0.5 text-xs text-foreground/55">{ready > 0 ? `${done}/${ready} lessons done` : `${subs.length} subtopics · coming soon`}</p>
                    </div>
                  </div>
                  {ready > 0 && (
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: `hsl(var(--${accent}))` }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-foreground/45">Year 2, Statistics, Mechanics and other courses are coming soon.</p>
        </div>
      )}

      {/* SUBTOPIC PATH — vertical journey of nodes */}
      {view === "subtopics" && selectedSubcategory && (
        <div className="fade-up-delay-1">
          {(() => {
            const subs = subtopicsFor(selectedSubcategory);
            const doneCount = subs.filter((t) => doneRefs.has(t.ref)).length;
            return (
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all" style={{ width: `${subs.length ? (doneCount / subs.length) * 100 : 0}%` }} />
                </div>
                <span className="font-display text-xs font-bold text-foreground/70">{doneCount}/{subs.length}</span>
              </div>
            );
          })()}
          <div className="relative space-y-3 pl-2">
            {subtopicsFor(selectedSubcategory).map((t, i, arr) => {
              const ready = lessonRefs.has(t.ref);
              const done = ready && doneRefs.has(t.ref);
              const nodeClass = done ? "path-node-done" : ready ? "path-node-ready" : "path-node-locked";
              return (
                <div key={t.ref} className="relative flex items-center gap-4">
                  {/* connector */}
                  {i < arr.length - 1 && <span className="absolute left-[1.5rem] top-12 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 bg-border" />}
                  <div className={`path-node ${nodeClass} relative z-10`}>{done ? "✓" : ready ? "★" : "🔒"}</div>
                  <div className={`card-dark-glow flex flex-1 items-center gap-3 rounded-2xl p-4 ${ready ? "" : "opacity-60"}`}>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-sm font-bold text-foreground truncate"><MathTextInline text={t.title} /></h3>
                      <p className="mt-0.5 text-xs text-foreground/50">{ready ? (done ? "Completed — revisit any time" : "Interactive lesson ready") : "Lesson coming soon"}</p>
                    </div>
                    {ready ? (
                      <button onClick={() => goLesson(t.ref)} className="btn-3d shrink-0 px-5 py-2 text-xs">{done ? "Revisit" : "Start"}</button>
                    ) : (
                      <span className="shrink-0 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground/40">Soon</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LESSON */}
      {view === "lesson" && (
        <div className="fade-up-delay-1">
          {!loaded && <div className="rounded-xl border border-border bg-card px-5 py-10 text-center text-sm text-foreground/50">Loading lesson…</div>}
          {loaded && notFound && (
            <div className="rounded-xl border border-border bg-card px-5 py-10 text-center text-sm text-foreground/60">
              This lesson isn’t ready yet.{" "}
              <button onClick={() => goSubtopics(selectedSubcategory!)} className="font-semibold text-accent">Back</button>
            </div>
          )}
          {loaded && lesson && (
            <LessonRunner lesson={lesson} onExit={() => goSubtopics(selectedSubcategory ?? "")} />
          )}
        </div>
      )}
    </div>
  );
}
