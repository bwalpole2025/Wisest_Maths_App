"use client";

import { useState, useMemo } from "react";
import { getTopicsForCourse, getQuestionsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import type { Question } from "@/lib/types";
import { MathText } from "@/components/questions/MathText";
import { WorkedSolutionPanel } from "@/components/questions/WorkedSolution";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

/* ── colour maps ──────────────────────────────────────── */

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-100 text-emerald-700 border-emerald-300",
  Standard: "bg-amber-100 text-amber-700 border-amber-300",
  Challenge: "bg-red-100 text-red-700 border-red-300",
};

const diffDot: Record<string, string> = {
  Foundation: "bg-emerald-500",
  Standard: "bg-amber-500",
  Challenge: "bg-red-500",
};

const diffOrder: Record<string, number> = {
  Foundation: 0,
  Standard: 1,
  Challenge: 2,
};

type Diff = "Foundation" | "Standard" | "Challenge";
type SortKey = "difficulty" | "topic" | "marks";

/* ── page ─────────────────────────────────────────────── */

export default function StudentQuestionBank() {
  /* ── filter state ───────────────────────────────────── */
  const { course } = useCourse();
  const topics = course ? getTopicsForCourse(course) : [];
  const questions = course ? getQuestionsForCourse(course) : [];
  const [search, setSearch] = useState("");
  const [topicSearch, setTopicSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [showTopicDrop, setShowTopicDrop] = useState(false);
  const [diffs, setDiffs] = useState<Set<Diff>>(new Set());
  const [moduleFilter, setModuleFilter] = useState<"all" | 1 | 2>("all");
  const [examOnly, setExamOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("difficulty");

  /* attempt modal state */
  const [attemptQ, setAttemptQ] = useState<Question | null>(null);
  const [studentAnswer, setStudentAnswer] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  /* topic map */
  const topicMap = useMemo(() => {
    const m: Record<string, (typeof topics)[0]> = {};
    topics.forEach((t) => (m[t.ref] = t));
    return m;
  }, []);

  /* matching topics for dropdown */
  const matchingTopics = useMemo(() => {
    if (!topicSearch.trim()) return [];
    const q = topicSearch.toLowerCase();
    return topics
      .filter(
        (t) =>
          t.ref.toLowerCase().includes(q) ||
          t.title.toLowerCase().includes(q) ||
          t.subcategory.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [topicSearch]);

  /* filtered + sorted */
  const results = useMemo(() => {
    let list = questions;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (qn) =>
          qn.questionText.toLowerCase().includes(q) ||
          qn.topicTitle.toLowerCase().includes(q) ||
          qn.tags.some((tag) => tag.includes(q)),
      );
    }
    if (topicFilter) list = list.filter((qn) => qn.topicRef === topicFilter);
    if (diffs.size > 0) list = list.filter((qn) => diffs.has(qn.difficulty));
    if (moduleFilter !== "all")
      list = list.filter(
        (qn) => topicMap[qn.topicRef]?.module === moduleFilter,
      );
    if (examOnly) list = list.filter((qn) => qn.examStyle);

    return [...list].sort((a, b) => {
      if (sortBy === "difficulty")
        return diffOrder[a.difficulty] - diffOrder[b.difficulty];
      if (sortBy === "topic") return a.topicRef.localeCompare(b.topicRef);
      return a.marks - b.marks;
    });
  }, [search, topicFilter, diffs, moduleFilter, examOnly, sortBy, topicMap]);

  const uniqueTopicCount = new Set(results.map((q) => q.topicRef)).size;

  const clearFilters = () => {
    setSearch("");
    setTopicSearch("");
    setTopicFilter(null);
    setDiffs(new Set());
    setModuleFilter("all");
    setExamOnly(false);
  };

  const toggleDiff = (d: Diff) => {
    setDiffs((prev) => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });
  };

  const openAttempt = (q: Question) => {
    setAttemptQ(q);
    setStudentAnswer("");
    setHasChecked(false);
    setShowSolution(false);
  };

  const closeAttempt = () => {
    setAttemptQ(null);
    setStudentAnswer("");
    setHasChecked(false);
    setShowSolution(false);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Question Bank</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse questions and test yourself before revealing solutions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* ── Filter Sidebar ─────────────────────────── */}
        <aside className="space-y-5 rounded-xl border border-border bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Filters
          </h2>

          <div>
            <Label className="text-xs">Search</Label>
            <Input
              placeholder="Keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-1.5"
            />
          </div>

          {/* Topic searchable dropdown */}
          <div className="relative">
            <Label className="text-xs">Topic</Label>
            <Input
              placeholder="Search topics..."
              value={topicSearch}
              onChange={(e) => {
                setTopicSearch(e.target.value);
                setShowTopicDrop(true);
                if (!e.target.value.trim()) setTopicFilter(null);
              }}
              onFocus={() => topicSearch && setShowTopicDrop(true)}
              onBlur={() => setTimeout(() => setShowTopicDrop(false), 200)}
              className="mt-1.5"
            />
            {showTopicDrop && matchingTopics.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-md border border-border bg-white shadow-lg">
                {topicFilter && (
                  <button
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setTopicFilter(null);
                      setTopicSearch("");
                      setShowTopicDrop(false);
                    }}
                    className="w-full px-3 py-2 text-left text-xs text-accent hover:bg-muted"
                  >
                    Clear topic filter
                  </button>
                )}
                {matchingTopics.map((t) => (
                  <button
                    key={t.id}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setTopicFilter(t.ref);
                      setTopicSearch(t.ref + " \u2013 " + t.title);
                      setShowTopicDrop(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted"
                  >
                    <span className="font-mono text-xs text-accent">
                      {t.ref}
                    </span>{" "}
                    {t.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Separator />

          <div>
            <Label className="text-xs">Difficulty</Label>
            <div className="mt-2 space-y-2">
              {(["Foundation", "Standard", "Challenge"] as Diff[]).map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={diffs.has(d)}
                    onCheckedChange={() => toggleDiff(d)}
                  />
                  <span className={`h-2 w-2 rounded-full ${diffDot[d]}`} />
                  {d}
                </label>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-xs">Module</Label>
            <div className="mt-2 space-y-2">
              {[
                { v: "all" as const, l: "All" },
                { v: 1 as const, l: "Year 1" },
                { v: 2 as const, l: "Year 2" },
              ].map((o) => (
                <label
                  key={String(o.v)}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="radio"
                    name="module"
                    checked={moduleFilter === o.v}
                    onChange={() => setModuleFilter(o.v)}
                    className="accent-accent"
                  />
                  {o.l}
                </label>
              ))}
            </div>
          </div>

          <Separator />

          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={examOnly}
              onCheckedChange={(v) => setExamOnly(!!v)}
            />
            Exam style only
          </label>

          <button
            onClick={clearFilters}
            className="w-full rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted"
          >
            Clear Filters
          </button>
        </aside>

        {/* ── Main Content ───────────────────────────── */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {results.length}
              </span>{" "}
              question{results.length !== 1 ? "s" : ""} across{" "}
              <span className="font-semibold text-foreground">
                {uniqueTopicCount}
              </span>{" "}
              topic{uniqueTopicCount !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="rounded-md border border-input px-2.5 py-1.5 text-xs"
              >
                <option value="difficulty">Difficulty</option>
                <option value="topic">Topic</option>
                <option value="marks">Marks</option>
              </select>
            </div>
          </div>

          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
              No questions match your filters.
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((q) => (
                <div
                  key={q.id}
                  className="flex items-start gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition-colors hover:bg-muted/20"
                >
                  <span
                    className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${diffDot[q.difficulty]}`}
                    title={q.difficulty}
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-foreground">
                        {q.topicTitle}
                      </span>
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">
                        {q.topicRef}
                      </span>
                      <Badge
                        variant="outline"
                        className={diffBadge[q.difficulty]}
                      >
                        {q.difficulty}
                      </Badge>
                      {q.examStyle && (
                        <Badge variant="secondary" className="text-xs">
                          Exam
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <MathText text={q.questionText} />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {q.marks} marks
                    </div>
                  </div>

                  <button
                    onClick={() => openAttempt(q)}
                    className="shrink-0 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    Attempt Question
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Attempt Question Modal ───────────────── */}
      <Dialog open={!!attemptQ} onOpenChange={(o) => !o && closeAttempt()}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          {attemptQ && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">
                    {attemptQ.topicRef}
                  </span>
                  <Badge
                    variant="outline"
                    className={diffBadge[attemptQ.difficulty]}
                  >
                    {attemptQ.difficulty}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {attemptQ.marks} marks
                  </span>
                </div>
                <DialogTitle className="mt-2">
                  {attemptQ.topicTitle}
                </DialogTitle>
              </DialogHeader>

              <Separator className="my-4" />

              {/* Full question */}
              <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground">
                <MathText text={attemptQ.questionText} />
              </div>

              {/* Student answer area */}
              <div className="mt-5">
                <Label className="text-sm font-semibold">Your Working</Label>
                <Textarea
                  rows={5}
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  placeholder="Show your working here..."
                  className="mt-2 font-mono"
                  disabled={hasChecked}
                />
              </div>

              {/* Check / Reveal buttons */}
              <div className="mt-4 flex flex-col gap-3">
                {!hasChecked && (
                  <button
                    onClick={() => setHasChecked(true)}
                    disabled={!studentAnswer.trim()}
                    className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    Check My Answer
                  </button>
                )}

                {hasChecked && !showSolution && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Your answer has been recorded. Ready to see the worked
                      solution?
                    </p>
                    <button
                      onClick={() => setShowSolution(true)}
                      className="rounded-lg border-2 border-accent bg-accent/5 px-6 py-3 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
                    >
                      Reveal Worked Solution
                    </button>
                  </div>
                )}

                {showSolution && (
                  <div className="mt-2">
                    <Separator className="mb-4" />
                    <h3 className="mb-4 text-sm font-bold text-foreground">
                      Worked Solution
                    </h3>
                    <WorkedSolutionPanel solution={attemptQ.workedSolution} />
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
