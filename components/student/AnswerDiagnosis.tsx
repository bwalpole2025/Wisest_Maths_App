"use client";

/**
 * Student-facing front-end for the diagnosis engine. Posts a final answer to
 * POST /api/questions/[id]/attempt and renders the unified DiagnosisResult:
 *   exact            → "Correct"
 *   generic-transform / distractor → a targeted hint (never the answer)
 *   disclosure       → the next worked-solution step (revealed on repeated tries)
 *   unparseable      → "couldn't read that"
 * The misconception tag is recorded server-side for analytics and is not in the
 * payload.
 */
import { useState } from "react";
import { MathText } from "@/components/questions/MathText";
import { MathSymbolField } from "@/components/tutor/MathSymbolField";

interface DiagnosisResult {
  correct: boolean;
  source: "exact" | "generic-transform" | "distractor" | "disclosure" | "unparseable";
  hint?: string;
  revealedStep?: { index: number; content: string };
  fullSolutionUnlocked?: boolean;
}

export function AnswerDiagnosis({ questionId }: { questionId: string }) {
  const [answer, setAnswer] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    const a = answer.trim();
    if (!a || busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/questions/${encodeURIComponent(questionId)}/attempt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: a }),
      });
      if (!res.ok) {
        setError(res.status === 401 ? "Please sign in to check answers." : "Couldn't check that — try again.");
        return;
      }
      setResult((await res.json()) as DiagnosisResult);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-5">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Check your answer</p>
      <MathSymbolField
        label="Final answer"
        value={answer}
        onChange={setAnswer}
        placeholder="Type just your final answer (e.g. 2√3, 1/2, x^2+1)…"
        maxLength={512}
      />
      <button
        onClick={submit}
        disabled={!answer.trim() || busy}
        className="btn-shine mt-3 rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-5 py-2.5 text-sm font-bold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
      >
        {busy ? "Checking…" : "Check"}
      </button>

      {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}

      {result && (
        <div className="mt-4">
          {result.correct ? (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              ✓ Correct — well done!
            </div>
          ) : result.source === "unparseable" ? (
            <div className="rounded-lg border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-foreground/70">
              We couldn&apos;t read that answer — check your notation and try again.
            </div>
          ) : result.revealedStep ? (
            <div className="rounded-lg border border-accent/30 bg-accent/[0.06] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Step {result.revealedStep.index + 1}
                {result.fullSolutionUnlocked ? " · full solution" : ""}
              </p>
              <div className="mt-1 text-sm leading-relaxed text-foreground/85 overflow-x-auto">
                <MathText text={result.revealedStep.content} />
              </div>
            </div>
          ) : result.hint ? (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Hint</p>
              <div className="mt-1 text-sm leading-relaxed text-amber-900 overflow-x-auto">
                <MathText text={result.hint} />
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-foreground/70">
              Not quite — try again.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
