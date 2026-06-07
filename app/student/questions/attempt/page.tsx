"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useQuestionById } from "@/hooks/useQuestions";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { WorkedSolutionPanel } from "@/components/questions/WorkedSolution";
import { CurveDiagram } from "@/components/questions/CurveDiagram";
import { Badge } from "@/components/ui/badge";
import { MathSymbolField } from "@/components/tutor/MathSymbolField";
import { HandwritingUpload } from "@/components/assessment/HandwritingUpload";
import type { WorkingCheckResult } from "@/lib/services/workingCheck";

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Standard: "bg-amber-50 text-amber-700 border-amber-200",
  Challenge: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function AttemptPage() {
  const searchParams = useSearchParams();
  const questionId = searchParams.get("id");
  const { question, loaded } = useQuestionById(questionId);

  const [studentAnswer, setStudentAnswer] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<WorkingCheckResult | null>(null);

  async function handleCheck() {
    if (!studentAnswer.trim() || !question) return;
    setChecking(true);
    try {
      const res = await fetch("/api/check-working", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: question.id, working: studentAnswer }),
      });
      if (res.ok) setResult(await res.json());
    } catch {
      // Network/parse failure → fall back to the plain "recorded" state below.
    } finally {
      setChecking(false);
      setHasChecked(true);
    }
  }

  if (!loaded) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-foreground/50">
        Loading question…
      </div>
    );
  }

  if (!question) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Question not found</h1>
        <Link href="/student/questions" className="mt-4 inline-block text-sm text-accent hover:underline">
          Back to Question Bank
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {/* Back link */}
      <Link
        href={`/student/questions?topicRef=${encodeURIComponent(question.topicRef)}`}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to <MathTextInline text={question.topicTitle.replace(/\s*\d+$/, "")} /> Questions
      </Link>

      {/* Header */}
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-secondary text-sm font-bold text-white font-mono shadow-glow-sm">
          {question.topicRef}
        </span>
        <div>
          <h1 className="text-lg font-bold text-foreground">
            <MathTextInline text={question.topicTitle} />
          </h1>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="outline" className={diffBadge[question.difficulty]}>
              {question.difficulty}
            </Badge>
            <span className="text-xs text-foreground/60">
              {question.marks} {question.marks === 1 ? "mark" : "marks"}
            </span>
            {question.examStyle && (
              <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2 py-0.5 text-xs font-medium text-secondary">
                Exam Style
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="mt-8 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.06] to-transparent p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Question</p>
        <div className="text-left katex-left text-[0.95rem] leading-relaxed text-foreground/90 overflow-x-auto">
          <MathText text={question.questionText} />
        </div>
        {question.questionDiagram && <CurveDiagram config={question.questionDiagram} />}
      </div>

      {/* Answer area */}
      <div className="mt-6">
        <MathSymbolField
          label="Your Working"
          value={studentAnswer}
          onChange={setStudentAnswer}
          placeholder="Show your working here — use the Symbols button for √, ∫, π, θ…"
          maxLength={512}
          multiline
          rows={8}
          disabled={hasChecked}
        />
      </div>

      {/* Handwriting upload — photograph working instead of (or as well as) typing */}
      <div className="mt-4">
        <HandwritingUpload questionId={question.id} disabled={hasChecked} />
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3">
        {!hasChecked && (
          <button
            onClick={handleCheck}
            disabled={!studentAnswer.trim() || checking}
            className="btn-shine rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-6 py-3 text-sm font-bold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-40 disabled:hover:translate-y-0 disabled:shadow-none"
          >
            {checking ? "Checking…" : "Check My Answer"}
          </button>
        )}
        {hasChecked && !showSolution && (
          <div className="rounded-xl border border-black/10 bg-black/[0.02] p-6">
            {result ? (
              <CheckResultPanel result={result} />
            ) : (
              <p className="text-center text-sm text-foreground/70">Your answer has been recorded.</p>
            )}
            <button
              onClick={() => setShowSolution(true)}
              className="mt-4 w-full rounded-lg border border-accent/40 bg-accent/5 px-6 py-3 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10 hover:border-accent/60"
            >
              Reveal Worked Solution
            </button>
          </div>
        )}
        {showSolution && (
          <>
            <div className="mt-2 rounded-xl border border-black/10 bg-white/60 p-6">
              <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-accent to-secondary text-white text-xs">
                  &#10003;
                </span>
                Worked Solution
              </h3>
              <WorkedSolutionPanel solution={question.workedSolution} />
            </div>
            <Link
              href={`/student/questions?topicRef=${encodeURIComponent(question.topicRef)}`}
              className="mt-4 block w-full rounded-lg border border-accent/40 bg-accent/5 px-6 py-3 text-center text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10 hover:border-accent/60"
            >
              Back to <MathTextInline text={question.topicTitle.replace(/\s*\d+$/, "")} /> Questions
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

/** Verdict (final answer) + method feedback shown after Check My Answer. */
function CheckResultPanel({ result }: { result: WorkingCheckResult }) {
  const { finalAnswer, working } = result;

  const verdict =
    finalAnswer.equivalent === true
      ? { box: "border-emerald-200 bg-emerald-50 text-emerald-800", label: "Final answer: Correct" }
      : finalAnswer.equivalent === false
        ? { box: "border-rose-200 bg-rose-50 text-rose-800", label: "Final answer: Not quite" }
        : {
            box: "border-amber-200 bg-amber-50 text-amber-800",
            label: "We couldn't auto-check your final answer — reveal the solution to compare.",
          };

  const showMissing = finalAnswer.equivalent !== true && working.missing.length > 0;

  return (
    <div className="space-y-3 text-left">
      <div className={`rounded-lg border px-3 py-2.5 text-sm font-bold ${verdict.box}`}>
        {verdict.label}
      </div>

      {working.totalSteps > 0 && (
        <div className="rounded-lg border border-black/10 bg-white/60 px-3 py-2.5 text-sm text-foreground/80">
          <p className="font-semibold">
            Method: you showed {working.matchedSteps} of {working.totalSteps} key steps.
          </p>
          {showMissing && (
            <>
              <p className="mt-2 text-foreground/70">These steps don&apos;t appear in your working:</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-foreground/70">
                {working.missing.map((s) => (
                  <li key={s.stepNumber}>
                    <MathTextInline text={s.description} />
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-foreground/50">
                A valid alternative method may not match these model steps — reveal the worked solution to compare.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
