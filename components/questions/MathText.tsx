"use client";

import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

/**
 * Parses a markdown-style pipe table into structured rows.
 * Returns null if the text doesn't contain a valid table.
 */
function parseMarkdownTable(text: string): { headers: string[]; rows: string[][] } | null {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length < 3) return null;

  const tableLines = lines.filter(l => l.startsWith("|") && l.endsWith("|"));
  if (tableLines.length < 3) return null;

  const parseLine = (line: string) =>
    line.split("|").slice(1, -1).map(cell => cell.trim());

  const headers = parseLine(tableLines[0]);
  // Skip separator line (|---|---|)
  const rows = tableLines.slice(2).map(parseLine);

  if (headers.length === 0) return null;
  return { headers, rows };
}

/**
 * Renders a markdown table as a styled HTML table with inline KaTeX.
 */
function MarkdownTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-3 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-accent/30 bg-accent/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-semibold text-foreground whitespace-nowrap">
                <MathTextInline text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-border/40 ${i % 2 === 0 ? "bg-white" : "bg-muted/20"}`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 text-foreground whitespace-nowrap">
                  <MathTextInline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Inline math-text renderer. No tables, no block wrappers — safe inside
 * headings, card titles, breadcrumbs, and other inline contexts.
 */
export function MathTextInline({ text }: { text: string }) {
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
          <span key={i} className="my-1 overflow-x-auto inline-block">
            <BlockMath math={seg.value} />
          </span>
        ) : seg.type === "math" ? (
          <InlineMath key={i} math={seg.value} />
        ) : (
          <PlainTextSegment key={i} value={seg.value} />
        ),
      )}
    </>
  );
}

/**
 * Main MathText component.
 *
 * First checks for markdown tables in the raw text (before splitting on math delimiters),
 * then renders each chunk appropriately.
 */
export function MathText({ text: rawText }: { text: string }) {
  // Many question stems use the LaTeX text-mode "\newline" command as a line
  // break instead of a real "\n". Normalise so list/sentence detection treats
  // them the same. (Inside KaTeX math mode "\newline" is invalid anyway —
  // math uses "\\" — so a global replace is safe.)
  const text = rawText.replace(/\\newline\s*/g, "\n");

  // Split text into table chunks and non-table chunks FIRST,
  // before doing any math delimiter parsing.
  if (text.includes("|") && text.includes("---|")) {
    const lines = text.split("\n");
    const chunks: { type: "text" | "table"; lines: string[] }[] = [];
    let current: string[] = [];
    let inTable = false;

    for (const line of lines) {
      const trimmed = line.trim();
      const isTableLine = trimmed.startsWith("|") && trimmed.endsWith("|");
      const isSeparator = /^\|[\s\-:]+\|$/.test(trimmed);

      if (isTableLine || isSeparator) {
        if (!inTable && current.length > 0) {
          chunks.push({ type: "text", lines: current });
          current = [];
        }
        inTable = true;
        current.push(trimmed);
      } else {
        if (inTable && current.length > 0) {
          chunks.push({ type: "table", lines: current });
          current = [];
        }
        inTable = false;
        current.push(line);
      }
    }
    if (current.length > 0) {
      chunks.push({ type: inTable ? "table" : "text", lines: current });
    }

    return (
      <>
        {chunks.map((chunk, i) => {
          if (chunk.type === "table") {
            const tableText = chunk.lines.join("\n");
            const parsed = parseMarkdownTable(tableText);
            if (parsed) return <MarkdownTable key={i} headers={parsed.headers} rows={parsed.rows} />;
            // Fallback: render as plain text
            return <MathTextInline key={i} text={tableText} />;
          }
          // Regular text chunk — render with math support
          const joinedText = chunk.lines.join("\n");
          return <MathTextWithBreaks key={i} text={joinedText} />;
        })}
      </>
    );
  }

  // No tables — standard rendering
  return <MathTextWithBreaks text={text} />;
}

/**
 * Detects whether a sequence of lines forms a bullet/enumerated list.
 * Recognised markers: `-`, `*`, `•` (bullets); `a)`, `(a)`, `(i)`, `(ii)`, `(iii)`,
 * `(iv)`, `(v)`…, `1.`, `1)` (enums). Roman numerals match via `[ivx]+`.
 */
const LIST_ITEM_RE = /^\s*(?:[-*•]|\(?[ivx]+\)|\(?[a-zA-Z]\)|\(?\d+[\.\)])\s+(.*)$/;

// Matches an inline Roman/alpha enumerator like "(i) ", "(ii) ", "(iii) ", "(a) ".
// Used to split a single paragraph that lists items inline ("Find (i) … and (ii) …").
const INLINE_ENUM_RE = /(?:^|(?<=\s))\((?:[ivx]+|[a-zA-Z])\)\s+/g;

/**
 * If a single line contains 2+ inline enumerators like "(i) … (ii) … (iii) …",
 * split it on those markers so each item becomes its own line. The text before
 * the first enumerator (if non-trivial) is kept as a preceding line.
 */
function expandInlineEnumerators(line: string): string[] {
  // Don't try to split inside math segments — strip them first to find marker
  // positions in the *text* portion, then map back to original indices.
  // Simpler approach: only split when the enumerators appear outside of \( \).
  const mathRanges: Array<[number, number]> = [];
  let i = 0;
  while (i < line.length) {
    const open = line.indexOf("\\(", i);
    if (open === -1) break;
    const close = line.indexOf("\\)", open + 2);
    if (close === -1) break;
    mathRanges.push([open, close + 2]);
    i = close + 2;
  }
  const inMath = (idx: number) =>
    mathRanges.some(([a, b]) => idx >= a && idx < b);

  const matches = [...line.matchAll(INLINE_ENUM_RE)].filter(
    (m) => !inMath(m.index ?? 0),
  );
  if (matches.length < 2) return [line];

  const parts: string[] = [];
  const firstIdx = matches[0].index ?? 0;
  const preamble = line.slice(0, firstIdx).trim();
  // Strip a trailing "Find both" / "Find" connector since it reads awkwardly
  // when the list follows on the next line, but otherwise keep the preamble.
  if (preamble && !/^(?:find(?:\s+both)?|both)\s*[:.,]?$/i.test(preamble)) {
    parts.push(preamble);
  }
  for (let k = 0; k < matches.length; k++) {
    const m = matches[k];
    const start = m.index ?? 0;
    const end = k + 1 < matches.length ? (matches[k + 1].index ?? line.length) : line.length;
    let body = line.slice(start, end).trim();
    // On the LAST item, peel off any trailing sentence that clearly isn't part of
    // the enumeration. Heuristic: ". " followed by a capital starts a new sentence;
    // also "; " or " — " followed by a capital. Math segments are skipped so a
    // coordinate like `(-2, 4).` inside `\( … \)` won't trigger a split.
    let trailing = "";
    if (k === matches.length - 1) {
      const localMathRanges: Array<[number, number]> = [];
      let p = 0;
      while (p < body.length) {
        const o = body.indexOf("\\(", p);
        if (o === -1) break;
        const c = body.indexOf("\\)", o + 2);
        if (c === -1) break;
        localMathRanges.push([o, c + 2]);
        p = c + 2;
      }
      const localInMath = (idx: number) =>
        localMathRanges.some(([a, b]) => idx >= a && idx < b);
      const sentenceRe = /(?:\.|;|—)\s+(?=[A-Z])/g;
      let sm: RegExpExecArray | null;
      let splitAt = -1;
      while ((sm = sentenceRe.exec(body)) !== null) {
        if (!localInMath(sm.index)) {
          splitAt = sm.index + sm[0].length;
          break;
        }
      }
      if (splitAt > 0) {
        trailing = body.slice(splitAt).trim();
        body = body.slice(0, splitAt).trim();
      }
    }
    // Drop trailing connectors like "and", "," and trailing horizontal-space
    // LaTeX (\quad, \,, \;, \:, \qquad) that only made sense when items were inline.
    body = body
      .replace(/(?:\\(?:qquad|quad|[,;:]))+\s*$/g, "")
      .replace(/[,;]?\s+(?:and|or)\s*$/i, "")
      .replace(/[,;]\s*$/, "")
      .trim();
    parts.push(body);
    if (trailing) parts.push(trailing);
  }
  return parts;
}

function splitIntoListAndTextChunks(
  text: string,
): { type: "text" | "list"; lines: string[] }[] {
  // Pre-expand inline enumerated runs into separate lines.
  const lines = text
    .split("\n")
    .flatMap((l) => expandInlineEnumerators(l));
  const chunks: { type: "text" | "list"; lines: string[] }[] = [];
  let current: string[] = [];
  let inList = false;

  const flush = () => {
    if (current.length > 0) {
      chunks.push({ type: inList ? "list" : "text", lines: current });
      current = [];
    }
  };

  for (const line of lines) {
    const isItem = LIST_ITEM_RE.test(line);
    if (isItem) {
      if (!inList) {
        flush();
        inList = true;
      }
      current.push(line);
    } else {
      // Blank line inside a list — keep list grouping unless the run ends with the next non-item
      if (inList && line.trim() === "") {
        current.push(line);
        continue;
      }
      if (inList) {
        flush();
        inList = false;
      }
      current.push(line);
    }
  }
  flush();

  // Only treat a run as a list if it has 2+ items
  return chunks.map((c) => {
    if (c.type !== "list") return c;
    const items = c.lines.filter((l) => LIST_ITEM_RE.test(l));
    return items.length >= 2 ? c : { type: "text" as const, lines: c.lines };
  });
}

function BulletList({ lines }: { lines: string[] }) {
  const items = lines
    .filter((l) => LIST_ITEM_RE.test(l))
    .map((l) => {
      const m = l.match(LIST_ITEM_RE);
      const marker = l.slice(0, l.length - (m?.[1].length ?? 0)).trim();
      const body = m?.[1] ?? l;
      return { marker, body };
    });

  return (
    <ul className="my-2 space-y-3 list-none">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 leading-relaxed">
          <span className="shrink-0 font-bold text-accent">
            <MathTextInline text={it.marker} />
          </span>
          <span className="flex-1">
            <MathTextInline text={it.body} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Renders text with math delimiters and newline handling.
 */
function MathTextWithBreaks({ text }: { text: string }) {
  // Detect bullet/enum lists and render them with styled markers
  const chunks = splitIntoListAndTextChunks(text);
  if (chunks.some((c) => c.type === "list")) {
    return (
      <>
        {chunks.map((c, i) =>
          c.type === "list" ? (
            <BulletList key={i} lines={c.lines} />
          ) : (
            // Wrap text chunks in a block <div> so any prose that follows a
            // bullet list starts on a fresh, flush-left line.
            <div key={i} className="block">
              <MathTextWithBreaksInner text={c.lines.join("\n")} />
            </div>
          ),
        )}
      </>
    );
  }
  return <MathTextWithBreaksInner text={text} />;
}

function MathTextWithBreaksInner({ text }: { text: string }) {
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
          <PlainTextSegment key={i} value={seg.value} />
        ),
      )}
    </>
  );
}

/**
 * Renders a plain-text segment, converting LaTeX text-mode commands
 * (\newline, \quad, \qquad, \,, \;, \:) and literal newlines into visual elements.
 */
function PlainTextSegment({ value }: { value: string }) {
  const pattern = /(\\newline|\\qquad|\\quad|\\,|\\;|\\:|\n)/g;
  const parts = value.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        switch (part) {
          case "\n":
            return <br key={i} />;
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
