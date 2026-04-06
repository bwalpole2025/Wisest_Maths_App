"use client";

import { useState, useCallback } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { MathText } from "@/components/questions/MathText";
import { questions as allQuestions } from "@/lib/data/questions";
import { simulateAIFeedback } from "@/lib/utils/mathHelpers";
import type { AssessmentProblem, AssessmentSession } from "@/lib/types";

interface Props {
  topicRef: string;
  topicTitle: string;
  onComplete: (session: AssessmentSession) => void;
}

function sampleQuestions(topicRef: string, count: number) {
  /* Gather questions for this topic first, then pad with others */
  const topicQs = allQuestions.filter((q) => q.topicRef === topicRef);
  const otherQs = allQuestions.filter((q) => q.topicRef !== topicRef);
  const pool = [...topicQs, ...otherQs];

  /* Fisher–Yates shuffle */
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  /* Repeat if we don't have enough */
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i % shuffled.length]);
  }
  return result;
}

const TOTAL = 8;

const MATH_SYMBOLS = [
  { label: "x²", insert: "^2" },
  { label: "√", insert: "\\sqrt{}" },
  { label: "∫", insert: "\\int " },
  { label: "π", insert: "\\pi " },
  { label: "÷", insert: "\\div " },
  { label: "±", insert: "\\pm " },
  { label: "θ", insert: "\\theta " },
  { label: "≤", insert: "\\leq " },
];

export function AIAssessmentInterface({ topicRef, topicTitle, onComplete }: Props) {
  const [sampled] = useState(() => sampleQuestions(topicRef, TOTAL));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [problems, setProblems] = useState<AssessmentProblem[]>([]);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<{
    score: number;
    feedback: string;
    correct: string;
    improvements: string[];
  } | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintText, setHintText] = useState<string | null>(null);

  const current = sampled[currentIndex];

  const handleSubmit = useCallback(() => {
    if (!current || !answer.trim()) return;

    const result = simulateAIFeedback(
      current.questionText,
      answer,
      explanation,
      current.workedSolution.finalAnswer,
    );

    const problem: AssessmentProblem = {
      id: `p-${currentIndex}`,
      questionText: current.questionText,
      correctAnswer: current.workedSolution.finalAnswer,
      studentAnswer: answer,
      studentExplanation: explanation,
      aiScore: result.score,
      aiFeedback: result.feedback,
      isCorrect: result.score >= 7,
      hintsUsed,
    };

    setProblems((prev) => [...prev, problem]);
    setCurrentFeedback(result);
    setFeedbackVisible(true);
  }, [current, answer, explanation, currentIndex, hintsUsed]);

  const handleNext = useCallback(() => {
    const nextIdx = currentIndex + 1;
    if (nextIdx >= TOTAL) {
      /* All done — build session and emit */
      const updatedProblems = [...problems];
      const totalScore = updatedProblems.reduce((s, p) => s + p.aiScore, 0);
      const session: AssessmentSession = {
        id: `sess-${Date.now()}`,
        studentId: "current-user",
        topicRef,
        topicTitle,
        status: "completed",
        startedAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
        problems: updatedProblems,
        overallScore: totalScore,
        aiFeedback:
          totalScore >= 56
            ? "Excellent performance! You have a strong grasp of this topic."
            : totalScore >= 32
              ? "Good effort. Some areas need more practice — review the worked solutions."
              : "This topic needs more work. Revisit the video lessons and try the question bank.",
      };
      onComplete(session);
      return;
    }

    setCurrentIndex(nextIdx);
    setAnswer("");
    setExplanation("");
    setFeedbackVisible(false);
    setCurrentFeedback(null);
    setHintsUsed(0);
    setHintText(null);
  }, [currentIndex, problems, topicRef, topicTitle, onComplete]);

  const handleHint = useCallback(() => {
    if (!current) return;
    const step = current.workedSolution.steps[0];
    setHintText(step ? step.description : "Review the standard method for this topic.");
    setHintsUsed((prev) => prev + 1);
  }, [current]);

  const insertSymbol = useCallback((sym: string) => {
    setAnswer((prev) => prev + sym);
  }, []);

  /* ── Score colour ── */
  const scoreColor = (score: number) => {
    if (score >= 7) return "text-green-600 border-green-500 bg-green-50";
    if (score >= 4) return "text-amber-600 border-amber-500 bg-amber-50";
    return "text-red-600 border-red-500 bg-red-50";
  };

  return (
    <div className="space-y-6">
      {/* Question display */}
      <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Question {currentIndex + 1} of {TOTAL}
          </span>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
            {current.marks} marks
          </span>
        </div>
        <div className="mt-3 text-base text-foreground">
          <MathText text={current.questionText} />
        </div>
        {/* Diagram placeholder */}
        <div className="mt-4 flex h-20 items-center justify-center rounded border border-dashed border-border bg-muted/30 text-xs text-muted-foreground">
          Diagram area (coming soon)
        </div>
      </div>

      {/* Answer input */}
      {!feedbackVisible && (
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Your Answer
          </label>
          {/* Math symbol toolbar */}
          <div className="mb-2 flex flex-wrap gap-1">
            {MATH_SYMBOLS.map((sym) => (
              <button
                key={sym.label}
                type="button"
                onClick={() => insertSymbol(sym.insert)}
                className="rounded border border-border bg-muted/40 px-2.5 py-1 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {sym.label}
              </button>
            ))}
          </div>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full rounded border border-input px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Enter your answer..."
          />

          <label className="mb-1.5 mt-4 block text-sm font-medium text-foreground">
            Explain your reasoning
          </label>
          <textarea
            rows={4}
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            className="w-full rounded border border-input px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Show your working and explain your approach..."
          />

          {hintText && (
            <div className="mt-3 rounded border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800">
              <strong>Hint:</strong> {hintText}
            </div>
          )}

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={!answer.trim()}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-40"
            >
              Submit Answer
            </button>
            <button
              onClick={handleHint}
              className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50"
            >
              Get a Hint
            </button>
          </div>
        </div>
      )}

      {/* AI Feedback panel */}
      {feedbackVisible && currentFeedback && (
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            {/* Score circle */}
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 text-xl font-bold ${scoreColor(currentFeedback.score)}`}
            >
              {currentFeedback.score}
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-green-700">What you got right</h3>
                <p className="text-sm text-foreground">{currentFeedback.correct}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Feedback</h3>
                <p className="text-sm text-muted-foreground">{currentFeedback.feedback}</p>
              </div>
              {currentFeedback.improvements.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-amber-700">Areas for improvement</h3>
                  <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-muted-foreground">
                    {currentFeedback.improvements.map((imp, i) => (
                      <li key={i}>{imp}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Collapsible worked solution */}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm font-medium text-accent hover:underline">
                  View worked solution
                </summary>
                <div className="mt-2 rounded border border-border bg-muted/20 p-4">
                  {current.workedSolution.steps.map((step) => (
                    <div key={step.stepNumber} className="mb-3">
                      <p className="text-xs font-semibold text-muted-foreground">
                        Step {step.stepNumber}: {step.description}
                      </p>
                      <div className="my-1">
                        <BlockMath math={step.workingLatex} />
                      </div>
                      <p className="text-xs text-muted-foreground">{step.explanation}</p>
                    </div>
                  ))}
                  <div className="mt-2 rounded bg-accent/5 p-2 text-center text-sm font-semibold">
                    <BlockMath math={current.workedSolution.finalAnswer} />
                  </div>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
            >
              {currentIndex + 1 >= TOTAL ? "Finish Assessment" : "Next Question →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
