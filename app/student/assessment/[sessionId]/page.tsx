"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { AIAssessmentInterface } from "@/components/assessment/AIAssessmentInterface";
import { getTopicById } from "@/lib/data/topics";
import type { AssessmentSession } from "@/lib/types";

/* ── Timer hook ── */
function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const stop = useCallback(() => setRunning(false), []);

  const formatted = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  return { seconds, formatted, stop };
}

/* ── Grade band ── */
function gradeBand(score: number, max: number) {
  const pct = (score / max) * 100;
  if (pct >= 90) return { grade: "A*", color: "text-green-600" };
  if (pct >= 80) return { grade: "A", color: "text-green-600" };
  if (pct >= 70) return { grade: "B", color: "text-blue-600" };
  if (pct >= 60) return { grade: "C", color: "text-amber-600" };
  if (pct >= 50) return { grade: "D", color: "text-orange-600" };
  return { grade: "U", color: "text-red-600" };
}

/* ── Score circle SVG ── */
function ScoreRing({ score, max }: { score: number; max: number }) {
  const pct = max > 0 ? score / max : 0;
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} stroke="#e2e8f0" strokeWidth="10" fill="none" />
        <circle
          cx="70"
          cy="70"
          r={r}
          stroke="#be123c"
          strokeWidth="10"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute text-center">
        <span className="block text-2xl font-bold text-foreground">{score}</span>
        <span className="block text-xs text-muted-foreground">/ {max}</span>
      </div>
    </div>
  );
}

export default function AssessmentPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.sessionId as string;
  const topic = getTopicById(topicId);

  const { formatted: timerDisplay, stop: stopTimer } = useTimer();
  const [session, setSession] = useState<AssessmentSession | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const topicTitle = topic?.title ?? topicId;
  const topicRef = topic?.ref ?? topicId;

  const handleComplete = useCallback(
    (completedSession: AssessmentSession) => {
      stopTimer();
      setSession(completedSession);
    },
    [stopTimer],
  );

  const handleExit = () => {
    setShowExitConfirm(true);
  };

  const confirmExit = () => {
    router.push("/student/topics");
  };

  /* ── END SCREEN ── */
  if (session) {
    const maxScore = session.problems.length * 10;
    const band = gradeBand(session.overallScore ?? 0, maxScore);

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Minimal top bar */}
        <div className="border-b border-border bg-white px-6 py-3">
          <span className="text-sm font-medium text-muted-foreground">
            Assessment Complete — {topicTitle}
          </span>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10">
          {/* Score summary */}
          <div className="mb-8 text-center">
            <ScoreRing score={session.overallScore ?? 0} max={maxScore} />
            <p className={`mt-4 text-3xl font-bold ${band.color}`}>{band.grade}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {session.overallScore ?? 0} out of {maxScore}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Completed in {timerDisplay}
            </p>
          </div>

          {/* AI summary */}
          {session.aiFeedback && (
            <div className="mb-8 rounded-lg border border-border bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-sm font-semibold text-foreground">AI Summary</h2>
              <p className="text-sm text-muted-foreground">{session.aiFeedback}</p>
            </div>
          )}

          {/* Results table */}
          <div className="mb-8 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">#</th>
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">Question</th>
                  <th className="px-4 py-2 text-center font-medium text-muted-foreground">Score</th>
                  <th className="px-4 py-2 text-center font-medium text-muted-foreground">Result</th>
                </tr>
              </thead>
              <tbody>
                {session.problems.map((p, i) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-2 font-medium text-foreground">{i + 1}</td>
                    <td className="max-w-xs truncate px-4 py-2 text-muted-foreground">
                      {p.questionText.slice(0, 60)}…
                    </td>
                    <td className="px-4 py-2 text-center font-semibold">
                      {p.aiScore}/10
                    </td>
                    <td className="px-4 py-2 text-center">
                      {p.isCorrect ? (
                        <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                          Pass
                        </span>
                      ) : (
                        <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                          Needs work
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Review all answers */}
          {reviewOpen && (
            <div className="mb-8 space-y-6">
              {session.problems.map((p, i) => (
                <div key={p.id} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    Question {i + 1}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">{p.questionText}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Your answer</span>
                      <p className="mt-0.5 text-sm">{p.studentAnswer || "—"}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Correct answer</span>
                      <div className="mt-0.5 text-sm">
                        <BlockMath math={p.correctAnswer} />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <strong>Feedback:</strong> {p.aiFeedback}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setReviewOpen(!reviewOpen)}
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              {reviewOpen ? "Hide Answers" : "Review All Answers"}
            </button>
            <button
              onClick={() => router.push("/student/topics")}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── ACTIVE ASSESSMENT (focus mode) ── */
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar — focus mode */}
      <div className="sticky top-0 z-40 border-b border-border bg-white px-6 py-3 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground">{topicTitle}</span>
            <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {topicRef}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">{timerDisplay}</span>
            <button
              onClick={handleExit}
              className="rounded border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
            >
              Exit
            </button>
          </div>
        </div>
      </div>

      {/* Exit confirmation */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-foreground">Exit assessment?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your progress will be lost. Are you sure you want to leave?
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="rounded border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50"
              >
                Cancel
              </button>
              <button
                onClick={confirmExit}
                className="rounded bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="mx-auto max-w-3xl px-4 py-8">
        <AIAssessmentInterface
          topicRef={topicRef}
          topicTitle={topicTitle}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
}
