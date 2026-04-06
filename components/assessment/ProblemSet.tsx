"use client";

import type { Question } from "@/lib/types";

interface ProblemSetProps {
  questions: Question[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function ProblemSet({ questions, currentIndex, onSelect }: ProblemSetProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Questions
      </h3>
      {questions.map((q, i) => (
        <button
          key={q.id}
          onClick={() => onSelect(i)}
          className={`w-full text-left rounded-md border px-3 py-2 text-sm transition-colors ${
            i === currentIndex
              ? "border-accent bg-accent/5 font-semibold text-accent"
              : "border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          {i + 1}. {q.topicTitle}
        </button>
      ))}
    </div>
  );
}
