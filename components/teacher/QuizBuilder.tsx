"use client";

/**
 * Teacher quiz control panel.
 *
 * Lets a teacher: name a quiz, set a target length, pick multiple topics, and
 * allocate EXACT counts per difficulty band within each topic. A live readout
 * shows allocated-vs-target. "Generate Quiz" posts the config to
 * /api/quiz/generate and renders the sampled questions, surfacing any shortfalls
 * the bank couldn't satisfy.
 *
 * Note: we import the (small) `topics` list directly rather than via
 * `courseData`, so the whole question bank is NOT bundled into this client
 * component. Pool sizes/shortfalls come back from the server response.
 */

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { topics as ALL_TOPICS } from "@/lib/data/topics";
import { POOL_SIZES } from "@/lib/data/poolSizes.generated";
import { useCourse } from "@/hooks/useCourse";
import { cn } from "@/lib/utils";
import type { QuestionDifficulty } from "@/lib/types";
import { MathTextInline } from "@/components/questions/MathText";
import { AssignToClass } from "@/components/teacher/AssignToClass";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DIFFS: QuestionDifficulty[] = ["Foundation", "Standard", "Challenge"];

const diffBadge: Record<QuestionDifficulty, string> = {
  Foundation: "bg-emerald-100 text-emerald-300 border-emerald-300",
  Standard: "bg-amber-100 text-amber-300 border-amber-300",
  Challenge: "bg-red-100 text-red-300 border-red-300",
};

type Quota = Record<QuestionDifficulty, number>;
const emptyQuota = (): Quota => ({ Foundation: 0, Standard: 0, Challenge: 0 });

interface GenQuestion {
  id: string;
  topicRef: string;
  topicTitle: string;
  difficulty: QuestionDifficulty;
  marks: number;
  questionText: string;
  tags: string[];
}
interface GenResponse {
  title: string;
  questions: GenQuestion[];
  requestedTotal: number;
  fulfilledTotal: number;
  warnings: { topicRef: string; difficulty: QuestionDifficulty; requested: number; available: number }[];
}

export function QuizBuilder() {
  const { course } = useCourse();
  const [title, setTitle] = useState("Untitled quiz");
  const [target, setTarget] = useState(10);
  const [shuffle, setShuffle] = useState(true);
  const [quotas, setQuotas] = useState<Record<string, Quota>>({});
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<GenResponse | null>(null);
  // Which topics (subcategories) are expanded to reveal their subtopics.
  const [open, setOpen] = useState<Set<string>>(new Set());
  // How many questions exist per topicRef per difficulty (from the API), so we
  // can show "N available" and cap the inputs. Empty until loaded.
  // Availability comes from a precomputed static map (lib/data/poolSizes.generated)
  // — synchronous, tiny, and immune to API/auth/timing. Keyed by course → ref →
  // difficulty.
  const pools = useMemo<Record<string, Quota>>(
    () => (course && POOL_SIZES[course]) || {},
    [course],
  );
  const poolsLoaded = !!course;

  // Total questions available in the whole selected course (0 ⇒ empty course,
  // e.g. Further Maths) — used to explain an all-zero state instead of leaving
  // it silent.
  const courseTotal = useMemo(
    () =>
      Object.values(pools).reduce((s, r) => s + r.Foundation + r.Standard + r.Challenge, 0),
    [pools],
  );

  // Available count for a (ref, difficulty): a number (0 if none), or undefined
  // before a course is selected.
  const availOf = (ref: string, d: QuestionDifficulty): number | undefined =>
    course ? (pools[ref]?.[d] ?? 0) : undefined;

  // Three-level hierarchy for this course:
  //   Year       = Topic.module (1 = Year 1, 2 = Year 2)   — top split
  //   "topic"    = subcategory  (e.g. "Trigonometry (Y2)") — click to expand
  //   "subtopic" = the individual topic (e.g. "6.1 Arcs and Sectors" → y2tf1)
  const grouped = useMemo(() => {
    const pool = (course && POOL_SIZES[course]) || {};
    // Only show subtopics that actually have questions in the bank — the topic
    // list otherwise includes curriculum-mapping entries (e.g. "Ma1") with 0
    // questions, which just show "0 avail" and can't be used in a quiz.
    const hasQuestions = (ref: string) => {
      const r = pool[ref];
      return !!r && r.Foundation + r.Standard + r.Challenge > 0;
    };
    const list = ALL_TOPICS.filter((t) => t.course === course && hasQuestions(t.ref));
    // module(year) -> subcategory -> subtopics[]
    const byYear = new Map<number, Map<string, { ref: string; title: string }[]>>();
    for (const t of list) {
      if (!byYear.has(t.module)) byYear.set(t.module, new Map());
      const subs = byYear.get(t.module)!;
      if (!subs.has(t.subcategory)) subs.set(t.subcategory, []);
      const arr = subs.get(t.subcategory)!;
      if (!arr.some((x) => x.ref === t.ref)) arr.push({ ref: t.ref, title: t.title });
    }
    // Year 1 before Year 2.
    return [1, 2]
      .filter((y) => byYear.has(y))
      .map((y) => [y, [...byYear.get(y)!.entries()]] as const);
  }, [course]);

  function toggleOpen(key: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const allocated = useMemo(
    () =>
      Object.values(quotas).reduce(
        (sum, q) => sum + q.Foundation + q.Standard + q.Challenge,
        0,
      ),
    [quotas],
  );

  const selectedTopics = Object.keys(quotas);

  function toggleTopic(ref: string, on: boolean) {
    setQuotas((prev) => {
      const next = { ...prev };
      if (on) next[ref] = emptyQuota();
      else delete next[ref];
      return next;
    });
  }

  function setCount(ref: string, diff: QuestionDifficulty, value: number) {
    setQuotas((prev) => ({
      ...prev,
      [ref]: { ...(prev[ref] ?? emptyQuota()), [diff]: Math.max(0, Math.min(50, value || 0)) },
    }));
  }

  async function generate() {
    if (!course) return;
    if (allocated < 1) {
      toast.error("Allocate at least one question across your topics.");
      return;
    }
    setBusy(true);
    setResult(null);
    try {
      const payload = {
        title: title.trim() || "Untitled quiz",
        course,
        shuffle,
        topics: selectedTopics.map((ref) => ({ topicRef: ref, ...quotas[ref] })),
      };
      const res = await fetch("/api/quiz/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Request failed." }));
        toast.error(error ?? "Could not generate quiz.");
        return;
      }
      const data: GenResponse = await res.json();
      setResult(data);
      if (data.warnings.length) {
        toast.warning(
          `Generated ${data.fulfilledTotal}/${data.requestedTotal} — the bank was short on ${data.warnings.length} quota(s).`,
        );
      } else {
        toast.success(`Generated ${data.fulfilledTotal} questions.`);
      }
    } catch {
      toast.error("Network error generating quiz.");
    } finally {
      setBusy(false);
    }
  }

  if (!course) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_minmax(320px,420px)]">
      {/* ── Configuration panel ──────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle>Quiz configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title + length */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="quiz-title">Quiz title</Label>
              <Input
                id="quiz-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={120}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="quiz-target">Target length: {target}</Label>
              <div className="flex items-center gap-3">
                <input
                  id="quiz-target"
                  type="range"
                  min={1}
                  max={50}
                  value={target}
                  onChange={(e) => setTarget(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
                <Input
                  type="number"
                  min={1}
                  max={100}
                  value={target}
                  onChange={(e) => setTarget(Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
          </div>

          {/* Allocation readout */}
          <div className="flex items-center justify-between rounded-md border bg-muted/40 px-3 py-2 text-sm">
            <span>
              Allocated <strong>{allocated}</strong> / target <strong>{target}</strong>
            </span>
            <span
              className={
                allocated === target
                  ? "text-emerald-600"
                  : allocated === 0
                    ? "text-muted-foreground"
                    : "text-amber-600"
              }
            >
              {allocated === target ? "matches target" : allocated > target ? "over target" : "under target"}
            </span>
          </div>

          <Separator />

          {/* Course availability banner — never let an all-zero state be silent. */}
          {poolsLoaded &&
            (courseTotal === 0 ? (
              <div className="rounded-md border border-amber-300 bg-amber-500/15 px-3 py-2 text-sm text-amber-800">
                The{" "}
                <strong>
                  {course === "a-level-further-maths" ? "A-Level Further Maths" : "selected"}
                </strong>{" "}
                question bank is empty, so every count below is 0. Switch to{" "}
                <strong>A-Level Maths</strong> (the 🔄 switcher at the bottom of the sidebar) to
                build a quiz.
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">
                <strong>{courseTotal.toLocaleString()}</strong> questions available in{" "}
                {course === "a-level-maths" ? "A-Level Maths" : "A-Level Further Maths"}.
              </p>
            ))}

          {/* Topic → subtopic selector.
              Click a topic (subcategory) to reveal its subtopics; tick any
              subtopic and set its per-difficulty counts. */}
          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
            {grouped.map(([year, subcats]) => (
              <div key={year} className="space-y-1.5">
                <p className="rounded bg-foreground/[0.04] px-2 py-1 text-xs font-bold uppercase tracking-wider text-foreground/70">
                  Year {year}
                </p>
                {subcats.map(([subcat, subtopics]) => {
                  const key = `${year}::${subcat}`;
                  const isOpen = open.has(key);
                  const selectedCount = subtopics.filter((t) => t.ref in quotas).length;
                  return (
                    <div key={key} className="overflow-hidden rounded-md border">
                      {/* Topic header — click to expand its subtopics */}
                      <button
                        type="button"
                        onClick={() => toggleOpen(key)}
                        className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-medium hover:bg-muted/50"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={cn(
                            "inline-block text-muted-foreground transition-transform",
                            isOpen && "rotate-90",
                          )}
                          aria-hidden
                        >
                          ▸
                        </span>
                        <span className="flex-1">{subcat}</span>
                        {selectedCount > 0 && (
                          <Badge variant="secondary" className="text-[10px]">
                            {selectedCount} selected
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{subtopics.length}</span>
                      </button>

                      {/* Subtopics — selectable, each with difficulty counts */}
                      {isOpen && (
                        <div className="space-y-2 border-t bg-muted/20 p-2">
                          {subtopics.map((t) => {
                            const on = t.ref in quotas;
                            return (
                              <div key={t.ref} className="rounded-md border bg-background p-2.5">
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    id={`t-${t.ref}`}
                                    checked={on}
                                    onCheckedChange={(c) => toggleTopic(t.ref, c === true)}
                                  />
                                  <Label
                                    htmlFor={`t-${t.ref}`}
                                    className="cursor-pointer text-sm font-medium leading-tight"
                                  >
                                    {t.title}
                                  </Label>
                                  {poolsLoaded && (
                                    <span className="ml-auto flex shrink-0 gap-1.5 font-mono text-[10px]">
                                      <span className="text-emerald-600" title="Foundation available">
                                        F{pools[t.ref]?.Foundation ?? 0}
                                      </span>
                                      <span className="text-amber-600" title="Standard available">
                                        S{pools[t.ref]?.Standard ?? 0}
                                      </span>
                                      <span className="text-red-600" title="Challenge available">
                                        C{pools[t.ref]?.Challenge ?? 0}
                                      </span>
                                    </span>
                                  )}
                                  <span
                                    className={cn(
                                      "font-mono text-[10px] text-muted-foreground",
                                      !poolsLoaded && "ml-auto",
                                    )}
                                  >
                                    {t.ref}
                                  </span>
                                </div>
                                {on && (
                                  <div className="mt-2.5 grid grid-cols-3 gap-2">
                                    {DIFFS.map((d) => {
                                      const avail = availOf(t.ref, d);
                                      // Availability is ADVISORY — never block typing. Flag in red
                                      // if the request exceeds what's in the bank (the generator
                                      // also returns a shortfall warning).
                                      const over =
                                        avail !== undefined && (quotas[t.ref]?.[d] ?? 0) > avail;
                                      return (
                                        <div key={d} className="space-y-1">
                                          <Label
                                            htmlFor={`${t.ref}-${d}`}
                                            className="flex items-center justify-between text-[11px]"
                                          >
                                            <span>{d}</span>
                                            <span
                                              className={cn(
                                                "font-normal",
                                                over ? "text-red-600" : "text-foreground",
                                              )}
                                            >
                                              {avail === undefined ? "—" : `${avail} available`}
                                            </span>
                                          </Label>
                                          <Input
                                            id={`${t.ref}-${d}`}
                                            type="number"
                                            min={0}
                                            max={50}
                                            value={quotas[t.ref]?.[d] ?? 0}
                                            onChange={(e) => setCount(t.ref, d, Number(e.target.value))}
                                            className={cn("h-8", over && "border-red-400 text-red-600")}
                                          />
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={shuffle} onCheckedChange={(c) => setShuffle(c === true)} />
              Shuffle question order
            </label>
            <Button onClick={generate} disabled={busy || allocated < 1}>
              {busy ? "Generating…" : "Generate quiz"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Preview panel ────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {!result && (
            <p className="text-sm text-muted-foreground">
              Configure topics and difficulty counts, then generate to preview the sampled quiz.
            </p>
          )}

          {result && (
            <>
              <div className="text-sm">
                <strong>{result.title}</strong> — {result.fulfilledTotal} of {result.requestedTotal}{" "}
                requested question{result.requestedTotal === 1 ? "" : "s"}.
              </div>

              {result.warnings.length > 0 && (
                <div className="rounded-md border border-amber-300 bg-amber-500/15 p-2 text-xs text-amber-800">
                  Not enough questions in the bank for:
                  <ul className="mt-1 list-disc pl-4">
                    {result.warnings.map((w, i) => (
                      <li key={i}>
                        {w.topicRef} · {w.difficulty}: wanted {w.requested}, found {w.available}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ol className="space-y-2">
                {result.questions.map((q, i) => (
                  <li key={q.id} className="rounded-md border p-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">{i + 1}.</span>
                      <Badge variant="outline" className={diffBadge[q.difficulty]}>
                        {q.difficulty}
                      </Badge>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {q.marks} mark{q.marks === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="mt-1">
                      <MathTextInline text={q.questionText} />
                    </div>
                  </li>
                ))}
              </ol>

              {result.fulfilledTotal > 0 && (
                <AssignToClass
                  title={result.title}
                  questionIds={result.questions.map((q) => q.id)}
                  total={result.fulfilledTotal}
                  course={course}
                />
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
