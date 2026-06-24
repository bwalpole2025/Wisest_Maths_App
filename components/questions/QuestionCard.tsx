"use client";

import type { Question } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { MathText, MathTextInline } from "./MathText";
import { CurveDiagram } from "./CurveDiagram";
import { MafsDiagram } from "./MafsDiagram";

const diffColours: Record<string, string> = {
  Foundation: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
  Standard: "bg-amber-500/15 text-amber-300 border-amber-400/40",
  Challenge: "bg-rose-500/15 text-rose-300 border-rose-400/40",
};

export function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border bg-foreground/[0.06] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/15 to-secondary/15 ring-1 ring-black/10 text-xs font-bold text-accent font-mono">
            {question.topicRef}
          </span>
          <span className="text-sm font-semibold text-foreground">
            <MathTextInline text={question.topicTitle} />
          </span>
          <Badge variant="outline" className={diffColours[question.difficulty]}>
            {question.difficulty}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-foreground/[0.06] px-2.5 py-0.5 text-xs font-medium text-foreground/60">
            {question.marks} {question.marks === 1 ? "mark" : "marks"}
          </span>
          {question.examStyle && (
            <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary">Exam</span>
          )}
        </div>
      </div>
      <div className="px-5 py-5">
        <div className="text-left katex-left text-sm leading-relaxed text-foreground/85 overflow-x-auto">
          <MathText text={question.questionText} />
        </div>
        {question.questionDiagram && <CurveDiagram config={question.questionDiagram} />}
        {question.questionMafs && <MafsDiagram source={question.questionMafs} />}
      </div>
    </div>
  );
}
