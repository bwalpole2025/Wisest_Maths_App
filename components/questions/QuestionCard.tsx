"use client";

import type { Question } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { MathText } from "./MathText";

const diffColours: Record<string, string> = {
  Foundation: "bg-emerald-100 text-emerald-700",
  Standard: "bg-amber-100 text-amber-700",
  Challenge: "bg-red-100 text-red-700",
};

export function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={diffColours[question.difficulty]}>
            {question.difficulty}
          </Badge>
          <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">
            {question.topicRef}
          </span>
          <span className="text-xs text-muted-foreground">
            {question.topicTitle}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {question.marks} marks
        </span>
      </div>
      <div className="text-sm leading-relaxed text-foreground">
        <MathText text={question.questionText} />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {question.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
