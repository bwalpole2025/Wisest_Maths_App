"use client";

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

/**
 * Renders a string containing inline LaTeX delimiters \(...\)
 * as a mix of plain text and KaTeX-rendered maths.
 *
 * Uses a manual scan instead of regex to avoid edge cases.
 */
export function MathText({ text }: { text: string }) {
  const segments: { type: "text" | "math"; value: string }[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const open = text.indexOf("\\(", cursor);
    if (open === -1) {
      // No more LaTeX — rest is plain text
      segments.push({ type: "text", value: text.slice(cursor) });
      break;
    }
    // Push text before the \(
    if (open > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, open) });
    }
    // Find matching \)
    const close = text.indexOf("\\)", open + 2);
    if (close === -1) {
      // No closing delimiter — treat rest as text
      segments.push({ type: "text", value: text.slice(open) });
      break;
    }
    // Extract the LaTeX content between \( and \)
    segments.push({ type: "math", value: text.slice(open + 2, close) });
    cursor = close + 2;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "math" ? (
          <InlineMath key={i} math={seg.value} />
        ) : (
          <span key={i}>{seg.value}</span>
        ),
      )}
    </>
  );
}
