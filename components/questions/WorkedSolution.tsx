"use client";

import { useState } from "react";
import type { WorkedSolution as WS } from "@/lib/types";
import { BlockMath } from "react-katex";
import { MathText } from "@/components/questions/MathText";
import { QuadraticGraph } from "@/components/questions/QuadraticGraph";
import { TikzDiagram } from "@/components/questions/TikzDiagram";
import { CurveDiagram } from "@/components/questions/CurveDiagram";

export function WorkedSolutionPanel({ solution }: { solution: WS }) {
  return (
    <div className="space-y-6">
      {solution.steps.map((s) => (
        <div key={s.stepNumber} className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
            {s.stepNumber}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground">
              <MathText text={s.description} />
            </p>
            {s.workingLatex && (
              <div className="my-2 overflow-x-auto rounded-md bg-muted/50 px-3 py-2 katex-left">
                <BlockMath math={s.workingLatex} />
              </div>
            )}
            {s.graph && (
              <div className="my-3">
                <QuadraticGraph data={s.graph} />
              </div>
            )}
            {s.diagram && <CurveDiagram config={s.diagram} />}
            {s.tikz && <TikzDiagram source={s.tikz} />}
            <p className="text-sm leading-relaxed text-muted-foreground">
              <MathText text={s.explanation} />
            </p>
          </div>
        </div>
      ))}

      {/* Final answer */}
      <div className="rounded-lg border-2 border-accent/30 bg-accent/5 p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Final Answer
        </p>
        <div className="overflow-x-auto">
          <FinalAnswerDisplay answer={solution.finalAnswer} />
        </div>
      </div>

      {/* Common mistakes */}
      {solution.commonMistakes && solution.commonMistakes.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            Common Mistakes
          </p>
          <ul className="space-y-1.5">
            {solution.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-800">
                <span className="shrink-0">&#x26A0;</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


function FinalAnswerDisplay({ answer }: { answer: string }) {
  // 1. Already has \( \) delimiters — use MathText directly
  if (answer.includes("\\(")) {
    return <p className="text-base leading-relaxed text-foreground"><MathText text={answer} /></p>;
  }

  // 2. Check if it's pure math (no multi-letter English words)
  const withoutLatexCmds = answer.replace(/\\[a-zA-Z]+\{[^}]*\}/g, "").replace(/\\[a-zA-Z]+/g, "");
  const hasBareWords = /\b[A-Za-z]{2,}\b/.test(withoutLatexCmds);

  if (!hasBareWords) {
    // Pure math like "(x-2)(x+1)(x+5)" — render with BlockMath
    return <BlockMath math={answer} />;
  }

  // 3. Mixed text+math: auto-wrap math portions in \( \)
  // Split on semicolons and known text words, wrap math-looking parts
  const parts = answer.split(/([;.])\s*/);
  const formatted = parts.map((part) => {
    const trimmed = part.trim();
    if (!trimmed || trimmed === ";" || trimmed === ".") return trimmed + " ";
    // Check if this part has math (=, ^, (, ), x, digits with operators)
    const hasMath = /[=^{}()]|\\/.test(trimmed) || /\b[xyz]\b/.test(trimmed);
    const hasText = /[A-Za-z]{2,}/.test(trimmed);
    if (hasMath && hasText) {
      // Mixed within one part — wrap math-looking segments
      return trimmed.replace(
        /([xyz]\s*=\s*[^,;.]+|[-+]?\d+(?:\.\d+)?|\([^)]+\)|\\[a-zA-Z]+\{[^}]*\})/g,
        "\\($1\\)"
      );
    }
    if (hasMath && !hasText) {
      return "\\(" + trimmed + "\\)";
    }
    return trimmed;
  }).join(" ").replace(/\s+/g, " ").trim();

  return <p className="text-base leading-relaxed text-foreground"><MathText text={formatted} /></p>;
}

/** Collapsible wrapper — used where solutions should be toggle-able */
export function WorkedSolution({ solution }: { solution: WS }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3 rounded-lg border border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted/50"
      >
        Worked Solution
        <span className="text-muted-foreground">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-border px-4 py-4">
          <WorkedSolutionPanel solution={solution} />
        </div>
      )}
    </div>
  );
}
