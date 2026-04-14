"use client";

import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

/**
 * Renders a string containing inline LaTeX delimiters \(...\)
 * as a mix of plain text and KaTeX-rendered maths.
 *
 * If a math segment contains \begin{array} or similar,
 * it renders as BlockMath (display mode) for better table display.
 */
export function MathText({ text }: { text: string }) {
  const segments: { type: "text" | "math" | "display-math"; value: string }[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const open = text.indexOf("\\(", cursor);
    if (open === -1) {
      segments.push({ type: "text", value: text.slice(cursor) });
      break;
    }
    if (open > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, open) });
    }
    const close = text.indexOf("\\)", open + 2);
    if (close === -1) {
      segments.push({ type: "text", value: text.slice(open) });
      break;
    }
    const latex = text.slice(open + 2, close);
    const isBlock = latex.includes("\\begin{array}") ||
                    latex.includes("\\begin{tabular}") ||
                    latex.includes("\\begin{aligned}") ||
                    latex.includes("\\begin{pmatrix}") ||
                    latex.includes("\\begin{cases}");
    segments.push({ type: isBlock ? "display-math" : "math", value: latex });
    cursor = close + 2;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "display-math" ? (
          <div key={i} className="my-2 overflow-x-auto">
            <BlockMath math={seg.value} />
          </div>
        ) : seg.type === "math" ? (
          <InlineMath key={i} math={seg.value} />
        ) : (
          <span key={i}>
            {seg.value.split("\\newline").map((part, j, arr) => (
              <span key={j}>
                {part}
                {j < arr.length - 1 && <br />}
              </span>
            ))}
          </span>
        ),
      )}
    </>
  );
}
