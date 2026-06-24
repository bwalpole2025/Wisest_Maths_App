"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useStudentAssignments } from "@/hooks/useStudentAssignments";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { MathSymbolField } from "@/components/tutor/MathSymbolField";
import type { Question } from "@/lib/types";

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center text-sm text-foreground/60">
      {children}
    </div>
  );
}

export default function QuizPage() {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const { user } = useAuth();
  const { assignments, loaded: assignmentsLoaded } = useStudentAssignments(user?.name);

  const assignment = useMemo(
    () => assignments.find((a) => a.id === assignmentId),
    [assignments, assignmentId],
  );

  const [questions, setQuestions] = useState<Question[]>([]);
  const [qLoaded, setQLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [grades, setGrades] = useState<Record<string, boolean | null>>({});
  const [finished, setFinished] = useState(false);

  // Load the quiz's questions (stems only — solutions stay on the server).
  useEffect(() => {
    if (!assignment) return;
    let cancelled = false;
    setQLoaded(false);
    fetch("/api/student/quiz-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: assignment.questionIds }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        if (!cancelled) {
          setQuestions(d.questions ?? []);
          setQLoaded(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setQuestions([]);
          setQLoaded(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [assignment]);

  if (!assignmentsLoaded) return <Centered>Loading quiz…</Centered>;

  if (!assignment)
    return (
      <Centered>
        <p className="text-lg font-bold text-foreground">Quiz not found</p>
        <Link href="/student/dashboard" className="mt-3 inline-block text-accent hover:underline">
          Back to dashboard
        </Link>
      </Centered>
    );

  if (!qLoaded) return <Centered>Loading questions…</Centered>;

  if (questions.length === 0)
    return (
      <Centered>
        <p className="text-lg font-bold text-foreground">This quiz has no questions yet.</p>
        <Link href="/student/dashboard" className="mt-3 inline-block text-accent hover:underline">
          Back to dashboard
        </Link>
      </Centered>
    );

  if (finished) {
    const correct = questions.filter((x) => grades[x.id] === true).length;
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">Quiz complete</h1>
        <p className="mt-1 text-foreground/70">{assignment.title}</p>
        <p className="mt-6 text-5xl font-bold text-accent">
          {correct} / {questions.length}
        </p>
        <Link
          href="/student/dashboard"
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white"
        >
          Back to dashboard
        </Link>
      </div>
    );
  }

  const q = questions[index];
  const answer = answers[q.id] ?? "";
  const grade = grades[q.id];
  const graded = q.id in grades;

  async function check() {
    if (!answer.trim()) return;
    try {
      const res = await fetch("/api/quiz/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: q.id, studentAnswer: answer }),
      });
      const d = await res.json();
      setGrades((g) => ({ ...g, [q.id]: d.equivalent ?? null }));
    } catch {
      setGrades((g) => ({ ...g, [q.id]: null }));
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/student/dashboard" className="text-xs text-foreground/50 hover:text-accent">
          ← Exit quiz
        </Link>
        <span className="text-xs font-semibold text-foreground/60">
          Question {index + 1} of {questions.length}
        </span>
      </div>

      <h1 className="mb-4 text-lg font-bold text-foreground">{assignment.title}</h1>

      <QuestionCard question={q} />

      <div className="mt-5">
        <MathSymbolField
          label="Your answer"
          value={answer}
          onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          placeholder="Type your answer — use the Symbols button for √, ∫, π, θ…"
          maxLength={512}
          multiline
          rows={6}
          disabled={graded}
        />
      </div>

      {graded && (
        <div
          className={`mt-3 rounded-lg border p-3 text-sm ${
            grade === true
              ? "border-emerald-300 bg-emerald-500/15 text-emerald-300"
              : grade === false
                ? "border-rose-300 bg-rose-500/15 text-rose-300"
                : "border-amber-300 bg-amber-500/15 text-amber-300"
          }`}
        >
          {grade === true
            ? "Correct ✓"
            : grade === false
              ? "Not quite."
              : "Recorded — your teacher will review this one."}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-40"
        >
          Previous
        </button>

        {!graded ? (
          <button
            onClick={check}
            disabled={!answer.trim()}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-white disabled:opacity-40"
          >
            Check answer
          </button>
        ) : index < questions.length - 1 ? (
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-white"
          >
            Next question
          </button>
        ) : (
          <button
            onClick={() => setFinished(true)}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-white"
          >
            Finish quiz
          </button>
        )}
      </div>
    </div>
  );
}
