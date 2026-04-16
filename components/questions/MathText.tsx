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
          <TextSegment key={i} value={seg.value} />
        ),
      )}
    </>
  );
}

/**
 * Renders a plain-text segment, converting LaTeX text-mode commands
 * (\newline, \quad, \qquad, \,, \;, \:) into real whitespace/line breaks.
 */
function TextSegment({ value }: { value: string }) {
  // Tokenise on the LaTeX commands we want to visualise.
  // Order matters: longer commands (\qquad, \newline) before shorter (\q).
  const pattern = /(\\newline|\\qquad|\\quad|\\,|\\;|\\:)/g;
  const parts = value.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        switch (part) {
          case "\\newline":
            return <br key={i} />;
          case "\\qquad":
            return <span key={i} style={{ display: "inline-block", width: "2em" }} />;
          case "\\quad":
            return <span key={i} style={{ display: "inline-block", width: "1em" }} />;
          case "\\;":
            return <span key={i} style={{ display: "inline-block", width: "0.28em" }} />;
          case "\\:":
            return <span key={i} style={{ display: "inline-block", width: "0.22em" }} />;
          case "\\,":
            return <span key={i} style={{ display: "inline-block", width: "0.17em" }} />;
          default:
            return <span key={i}>{part}</span>;
        }
      })}
    </span>
  );
}
