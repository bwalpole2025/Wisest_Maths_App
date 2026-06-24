"use client";

/**
 * Shared question-bank card — the canonical way a question is presented in a
 * browse list (numbered badge, optional topic title, difficulty badge, marks /
 * Exam pills, full KaTeX stem, optional diagram, a prominent action button).
 *
 * Used by the A-Level question bank, the GCSE bank, and the AI tutor. The action
 * is configurable: an "Attempt" link in the banks, a "Try with AI" button in the
 * tutor.
 */

import Link from "next/link";
import type { QuestionSummary } from "@/lib/types";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { CurveDiagram } from "@/components/questions/CurveDiagram";
import { Badge } from "@/components/ui/badge";

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
  Standard: "bg-amber-500/15 text-amber-300 border-amber-400/40",
  Challenge: "bg-rose-500/15 text-rose-300 border-rose-400/40",
};

const BTN =
  "btn-shine shrink-0 rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow";

export type QuestionCardAction =
  | { kind: "link"; href: string; label?: string; onClick?: () => void }
  | { kind: "button"; label: string; onClick: () => void };

export function QuestionBankCard({
  index,
  question,
  showTopicTitle = true,
  action,
}: {
  index: number;
  question: QuestionSummary;
  showTopicTitle?: boolean;
  action: QuestionCardAction;
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-md">
      <div className="flex items-center justify-between border-b border-border bg-foreground/[0.06] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 text-sm font-bold text-accent font-mono">
            {index}
          </span>
          {showTopicTitle && (
            <span className="text-sm font-semibold text-foreground">
              <MathTextInline text={question.topicTitle} />
            </span>
          )}
          <Badge variant="outline" className={diffBadge[question.difficulty]}>
            {question.difficulty}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-foreground/[0.06] px-2.5 py-0.5 text-xs font-medium text-foreground/60">
            {question.marks} {question.marks === 1 ? "mark" : "marks"}
          </span>
          {question.examStyle && (
            <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary">
              Exam
            </span>
          )}
        </div>
      </div>
      <div className="px-5 py-5">
        <div className="text-sm leading-relaxed text-foreground/85 overflow-x-auto">
          <MathText text={question.questionText} />
        </div>
        {question.questionDiagram && <CurveDiagram config={question.questionDiagram} />}
        <div className="mt-5 flex items-center justify-end">
          {action.kind === "link" ? (
            <Link href={action.href} onClick={action.onClick} className={BTN}>
              {action.label ?? "Attempt"}
            </Link>
          ) : (
            <button type="button" onClick={action.onClick} className={BTN}>
              {action.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
