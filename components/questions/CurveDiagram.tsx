"use client";

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import type { CurveDiagramConfig } from "@/lib/types";

const WIDTH = 540;
const HEIGHT = 380;
const PAD_L = 54;
const PAD_R = 30;
const PAD_T = 28;
const PAD_B = 44;

type Anchor = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw" | "center";

const ANCHOR_TRANSLATE: Record<Anchor, { tx: string; ty: string; px: number; py: number }> = {
  n:      { tx: "-50%",  ty: "-100%", px: 0,  py: -6 },
  s:      { tx: "-50%",  ty: "0%",    px: 0,  py: 6 },
  e:      { tx: "0%",    ty: "-50%",  px: 6,  py: 0 },
  w:      { tx: "-100%", ty: "-50%",  px: -6, py: 0 },
  ne:     { tx: "0%",    ty: "-100%", px: 6,  py: -6 },
  nw:     { tx: "-100%", ty: "-100%", px: -6, py: -6 },
  se:     { tx: "0%",    ty: "0%",    px: 6,  py: 6 },
  sw:     { tx: "-100%", ty: "0%",    px: -6, py: 6 },
  center: { tx: "-50%",  ty: "-50%",  px: 0,  py: 0 },
};

type OverlayLabel = {
  x: number; // viewBox x
  y: number; // viewBox y
  math: string;
  anchor: Anchor;
  color: string;
  fontSize: number;
};

/**
 * LaTeX commands / function names whose multi-letter identifier should NOT be
 * treated as English prose — leave them inside the math segment so KaTeX
 * renders them correctly. The leading backslash is stripped before lookup.
 */
const MATH_KEYWORDS = new Set([
  "sin", "cos", "tan", "cot", "sec", "csc", "cosec",
  "ln", "log", "exp", "lim", "max", "min", "arg",
  "pi", "theta", "alpha", "beta", "gamma", "delta", "phi", "psi", "rho",
  "sigma", "tau", "omega", "lambda", "mu", "nu", "epsilon",
  "sqrt", "frac", "tfrac", "dfrac", "left", "right",
  "leq", "geq", "neq", "approx", "equiv", "circ", "infty",
  "text", "mathrm", "operatorname", "implies", "Longrightarrow", "Rightarrow",
  "longrightarrow", "rightarrow", "to", "mapsto", "quad", "qquad", "cdot",
  "times", "div", "pm", "mp", "checkmark", "in", "notin", "cup", "cap",
]);

/**
 * Renders a label that may mix plain prose with embedded math. The label string
 * can use explicit `\text{...}` runs; we also auto-detect English words (runs of
 * 2+ letters NOT part of a LaTeX command name) and render those in upright text.
 * Numbers, operators, symbols, and single-letter variable names stay in KaTeX.
 */
function MixedLabel({ math, color }: { math: string; color: string }) {
  type Seg = { type: "math" | "text"; value: string };
  const segments: Seg[] = [];

  // Pass 1: split on explicit \text{...} blocks.
  const textSpans: Array<{ start: number; end: number; value: string }> = [];
  const re = /\\text\{([^{}]*)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(math)) !== null) {
    textSpans.push({ start: m.index, end: m.index + m[0].length, value: m[1] });
  }

  // Walk the string, alternating math chunks (with auto-text detection) and explicit \text{} runs.
  let cursor = 0;
  const pushAutoSplit = (chunk: string) => {
    if (!chunk) return;
    // Auto-detect English word runs (2+ letters not preceded by a backslash and
    // not a known LaTeX command name).
    const wordRe = /[a-zA-Z]{2,}/g;
    let last = 0;
    let wm: RegExpExecArray | null;
    while ((wm = wordRe.exec(chunk)) !== null) {
      const before = chunk[wm.index - 1];
      const word = wm[0];
      const isCommand = before === "\\" || MATH_KEYWORDS.has(word.toLowerCase());
      if (isCommand) continue;
      // Math run before the word
      if (wm.index > last) {
        segments.push({ type: "math", value: chunk.slice(last, wm.index) });
      }
      segments.push({ type: "text", value: word });
      last = wm.index + word.length;
    }
    if (last < chunk.length) {
      segments.push({ type: "math", value: chunk.slice(last) });
    }
  };

  for (const span of textSpans) {
    if (span.start > cursor) pushAutoSplit(math.slice(cursor, span.start));
    segments.push({ type: "text", value: span.value });
    cursor = span.end;
  }
  if (cursor < math.length) pushAutoSplit(math.slice(cursor));

  // Drop empty/whitespace-only math segments; collapse adjacent text runs.
  const cleaned: Seg[] = [];
  for (const s of segments) {
    if (s.type === "math" && s.value.trim().length === 0) continue;
    const prev = cleaned[cleaned.length - 1];
    if (prev && prev.type === s.type && s.type === "text") {
      prev.value += s.value;
    } else {
      cleaned.push({ ...s });
    }
  }

  // Auto-wrap bare math operator names so KaTeX renders them upright with
  // proper spacing, instead of as the italic product of single letters.
  // (`max` → `\mathrm{max}`; `sin` → `\sin` because the latter is the proper
  // KaTeX command with built-in operator spacing.)
  const prepMath = (s: string) =>
    s
      .replace(/(?<!\\)\b(max|min|lim|sup|inf|gcd|lcm|deg)\b/g, "\\mathrm{$1}")
      .replace(/(?<!\\)\b(sin|cos|tan|sec|csc|cosec|cot|arcsin|arccos|arctan|log|ln|exp)\b/g, "\\$1");
  const textFont = '"Times New Roman", "Times", serif';

  if (cleaned.length === 0) return null;
  if (cleaned.length === 1 && cleaned[0].type === "math") {
    return (
      <span style={{ color }}>
        <InlineMath math={prepMath(cleaned[0].value)} />
      </span>
    );
  }
  if (cleaned.length === 1 && cleaned[0].type === "text") {
    return <span style={{ color, fontFamily: textFont }}>{cleaned[0].value}</span>;
  }
  return (
    <span style={{ color, display: "inline-flex", alignItems: "baseline", gap: "0.15em" }}>
      {cleaned.map((seg, i) => (
        seg.type === "text"
          ? <span key={i} style={{ fontFamily: textFont }}>{seg.value}</span>
          : <InlineMath key={i} math={prepMath(seg.value)} />
      ))}
    </span>
  );
}

function LabelOverlay({ labels }: { labels: OverlayLabel[] }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ overflow: "visible" }}
    >
      {labels.map((l, i) => {
        const off = ANCHOR_TRANSLATE[l.anchor];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(${(l.x / WIDTH) * 100}% + ${off.px}px)`,
              top: `calc(${(l.y / HEIGHT) * 100}% + ${off.py}px)`,
              transform: `translate(${off.tx}, ${off.ty})`,
              whiteSpace: "nowrap",
              color: l.color,
              fontSize: `${l.fontSize}px`,
              lineHeight: 1,
              padding: "2px 5px",
              borderRadius: "4px",
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            <MixedLabel math={l.math} color={l.color} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Greedy de-overlapper: nudges label boxes apart so they don't visually collide.
 * Works in viewBox coordinates (the same space the labels are positioned in).
 * Each label is approximated as a bounding box around (x, y) based on its anchor
 * and an estimated character width. After resolution the consumer reads back the
 * adjusted x/y coordinates.
 */
function estimateLabelSize(math: string, fontSize: number): { w: number; h: number } {
  // KaTeX glyphs average ~0.55em wide; subscripts/fractions count roughly the same.
  // Strip the most common LaTeX commands to estimate visible char count.
  const visible = math
    .replace(/\\[a-zA-Z]+/g, "x")
    .replace(/[{}^_]/g, "")
    .replace(/\s+/g, "");
  const charCount = Math.max(1, visible.length);
  return {
    w: charCount * fontSize * 0.6 + 10, // include padding
    h: fontSize + 6,
  };
}

function anchorBox(l: OverlayLabel, size: { w: number; h: number }) {
  const a = ANCHOR_TRANSLATE[l.anchor];
  // Convert anchor translate (% of own width/height) into actual top-left in viewBox.
  const fracX = a.tx === "-50%" ? -0.5 : a.tx === "-100%" ? -1 : 0;
  const fracY = a.ty === "-50%" ? -0.5 : a.ty === "-100%" ? -1 : 0;
  return {
    x: l.x + a.px + fracX * size.w,
    y: l.y + a.py + fracY * size.h,
    w: size.w,
    h: size.h,
  };
}

function resolveLabelOverlaps(labels: OverlayLabel[]): OverlayLabel[] {
  if (labels.length < 2) return labels;
  const sizes = labels.map((l) => estimateLabelSize(l.math, l.fontSize));
  const boxes = labels.map((l, i) => ({ ...anchorBox(l, sizes[i]), idx: i }));
  const dy = new Array(labels.length).fill(0);

  // Multi-pass nudging — push the lower box further down until no pair overlaps.
  for (let pass = 0; pass < 6; pass++) {
    let moved = false;
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i];
        const b = boxes[j];
        const ax2 = a.x + a.w;
        const ay2 = a.y + a.h;
        const bx2 = b.x + b.w;
        const by2 = b.y + b.h;
        const overlapX = a.x < bx2 && b.x < ax2;
        const overlapY = a.y < by2 && b.y < ay2;
        if (overlapX && overlapY) {
          // Push whichever is lower further down by the overlap amount + 2px gap.
          const overlap = Math.min(ay2 - b.y, by2 - a.y) + 2;
          if ((a.y + ay2) / 2 > (b.y + by2) / 2) {
            a.y += overlap;
            dy[i] += overlap;
          } else {
            b.y += overlap;
            dy[j] += overlap;
          }
          moved = true;
        }
      }
    }
    if (!moved) break;
  }

  return labels.map((l, i) => (dy[i] === 0 ? l : { ...l, y: l.y + dy[i] }));
}

export function CurveDiagram({ config }: { config: CurveDiagramConfig }) {
  const plotW = WIDTH - PAD_L - PAD_R;
  const plotH = HEIGHT - PAD_T - PAD_B;

  const { xMin, xMax, yMin, yMax } = config;
  const sx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = (y: number) => PAD_T + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  const originVisible = xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0;
  const xAxisY = originVisible ? sy(0) : sy(yMin);
  const yAxisX = originVisible ? sx(0) : sx(xMin);

  const labels: OverlayLabel[] = [];

  // Axis labels
  if (!config.hideAxes) {
    labels.push({
      x: sx(xMax) + 16,
      y: xAxisY,
      math: config.xLabel ?? "x",
      anchor: "e",
      color: "#111",
      fontSize: 14,
    });
    labels.push({
      x: yAxisX,
      y: sy(yMax) - 14,
      math: config.yLabel ?? "y",
      anchor: "w",
      color: "#111",
      fontSize: 14,
    });

    // Tick labels — prefer custom LaTeX labels when supplied, fall back to numeric.
    (config.xTicks ?? []).forEach((t, i) => {
      labels.push({
        x: sx(t),
        y: xAxisY + 6,
        math: config.xTickLabels?.[i] ?? String(t),
        anchor: "s",
        color: "#444",
        fontSize: 12,
      });
    });
    (config.yTicks ?? []).forEach((t, i) => {
      labels.push({
        x: yAxisX - 6,
        y: sy(t),
        math: config.yTickLabels?.[i] ?? String(t),
        anchor: "w",
        color: "#444",
        fontSize: 12,
      });
    });
  }

  // Curve labels
  (config.curves ?? []).forEach((curve) => {
    if (curve.label && curve.labelAt) {
      labels.push({
        x: sx(curve.labelAt[0]),
        y: sy(curve.labelAt[1]),
        math: curve.label,
        anchor: "ne",
        color: curve.color ?? "#1d4ed8",
        fontSize: 14,
      });
    }
  });

  // Line labels
  (config.lines ?? []).forEach((line) => {
    if (line.label && line.labelAt) {
      labels.push({
        x: sx(line.labelAt[0]),
        y: sy(line.labelAt[1]),
        math: line.label,
        anchor: "ne",
        color: line.color ?? "#dc2626",
        fontSize: 13,
      });
    }
  });

  // Point labels
  (config.points ?? []).forEach((p) => {
    if (p.label) {
      labels.push({
        x: sx(p.at[0]),
        y: sy(p.at[1]),
        math: p.label,
        anchor: p.labelAnchor ?? "ne",
        color: "#111",
        fontSize: 13,
      });
    }
  });

  return (
    <div className="my-4 flex justify-center">
      <div
        className="relative w-full"
        style={{ maxWidth: 600, aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L6,4 L0,8 z" fill="#111" />
            </marker>
            {(config.lines ?? []).filter(l => l.arrow).map((line, i) => {
              const c = line.color ?? "#dc2626";
              return (
                <marker
                  key={`am${i}`}
                  id={`line-arrow-${i}`}
                  markerWidth="10"
                  markerHeight="8"
                  refX="9"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0.5 L8,4 L0,7.5 z" fill={c} />
                </marker>
              );
            })}
          </defs>

          {/* x-axis */}
          {!config.hideAxes && <line
            x1={sx(xMin)}
            y1={xAxisY}
            x2={sx(xMax) + 6}
            y2={xAxisY}
            stroke="#111"
            strokeWidth="1.3"
            markerEnd="url(#arrow)"
          />}

          {/* y-axis */}
          {!config.hideAxes && <line
            x1={yAxisX}
            y1={sy(yMin)}
            x2={yAxisX}
            y2={sy(yMax) - 6}
            stroke="#111"
            strokeWidth="1.3"
            markerEnd="url(#arrow)"
          />}

          {/* x ticks */}
          {!config.hideAxes && (config.xTicks ?? []).map((t, i) => (
            <line
              key={`xt${i}`}
              x1={sx(t)}
              y1={xAxisY - 4}
              x2={sx(t)}
              y2={xAxisY + 4}
              stroke="#111"
              strokeWidth="1"
            />
          ))}

          {/* y ticks */}
          {!config.hideAxes && (config.yTicks ?? []).map((t, i) => (
            <line
              key={`yt${i}`}
              x1={yAxisX - 4}
              y1={sy(t)}
              x2={yAxisX + 4}
              y2={sy(t)}
              stroke="#111"
              strokeWidth="1"
            />
          ))}

          {/* curves */}
          {(config.curves ?? []).map((curve, i) => {
            const d = curve.points
              .map(([x, y], j) => `${j === 0 ? "M" : "L"} ${sx(x)} ${sy(y)}`)
              .join(" ");
            return (
              <path
                key={`c${i}`}
                d={d}
                fill="none"
                stroke={curve.color ?? "#1d4ed8"}
                strokeWidth={curve.width ?? 2.4}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            );
          })}

          {/* lines */}
          {(() => {
            let arrowIdx = 0;
            return (config.lines ?? []).map((line, i) => {
              const myArrowIdx = line.arrow ? arrowIdx++ : -1;
              return (
                <line
                  key={`l${i}`}
                  x1={sx(line.from[0])}
                  y1={sy(line.from[1])}
                  x2={sx(line.to[0])}
                  y2={sy(line.to[1])}
                  stroke={line.color ?? "#dc2626"}
                  strokeWidth="1.9"
                  strokeDasharray={line.dashed ? "6 4" : undefined}
                  markerEnd={line.arrow ? `url(#line-arrow-${myArrowIdx})` : undefined}
                />
              );
            });
          })()}

          {/* drop-lines from each labelled point down to the x-axis */}
          {config.dropLinesForPoints && (config.points ?? []).map((p, i) => {
            if (Math.abs(p.at[1]) < 1e-9) return null;
            return (
              <line
                key={`dp${i}`}
                x1={sx(p.at[0])}
                y1={sy(p.at[1])}
                x2={sx(p.at[0])}
                y2={xAxisY}
                stroke="#888"
                strokeWidth="1.1"
                strokeDasharray="5 3"
              />
            );
          })}

          {/* points */}
          {(config.points ?? []).map((p, i) => (
            <circle
              key={`p${i}`}
              cx={sx(p.at[0])}
              cy={sy(p.at[1])}
              r={p.r ?? 4.5}
              fill={p.color ?? "#111"}
            />
          ))}
        </svg>

        {/* HTML label overlay with KaTeX math */}
        <LabelOverlay labels={resolveLabelOverlaps(labels)} />
      </div>
    </div>
  );
}
