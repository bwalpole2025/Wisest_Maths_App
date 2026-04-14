"use client";

import type { CurveDiagramConfig } from "@/lib/types";

const WIDTH = 520;
const HEIGHT = 360;
const PAD_L = 44;
const PAD_R = 24;
const PAD_T = 24;
const PAD_B = 36;

export function CurveDiagram({ config }: { config: CurveDiagramConfig }) {
  const plotW = WIDTH - PAD_L - PAD_R;
  const plotH = HEIGHT - PAD_T - PAD_B;

  const { xMin, xMax, yMin, yMax } = config;
  const sx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = (y: number) => PAD_T + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  const originVisible = xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0;
  const xAxisY = originVisible ? sy(0) : sy(yMin);
  const yAxisX = originVisible ? sx(0) : sx(xMin);

  const anchorOffset = (anchor?: string): { dx: number; dy: number; textAnchor: string; dominantBaseline: string } => {
    switch (anchor) {
      case "n":  return { dx: 0,  dy: -10, textAnchor: "middle", dominantBaseline: "auto" };
      case "s":  return { dx: 0,  dy: 18,  textAnchor: "middle", dominantBaseline: "hanging" };
      case "e":  return { dx: 10, dy: 4,   textAnchor: "start",  dominantBaseline: "middle" };
      case "w":  return { dx: -10, dy: 4,  textAnchor: "end",    dominantBaseline: "middle" };
      case "ne": return { dx: 8,  dy: -6,  textAnchor: "start",  dominantBaseline: "auto" };
      case "nw": return { dx: -8, dy: -6,  textAnchor: "end",    dominantBaseline: "auto" };
      case "se": return { dx: 8,  dy: 14,  textAnchor: "start",  dominantBaseline: "hanging" };
      case "sw": return { dx: -8, dy: 14,  textAnchor: "end",    dominantBaseline: "hanging" };
      default:   return { dx: 8,  dy: -6,  textAnchor: "start",  dominantBaseline: "auto" };
    }
  };

  return (
    <div className="my-4 flex justify-center">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full max-w-[560px]"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 13 }}
      >
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L6,4 L0,8 z" fill="#111" />
          </marker>
        </defs>

        {/* x-axis */}
        <line x1={sx(xMin)} y1={xAxisY} x2={sx(xMax) + 6} y2={xAxisY} stroke="#111" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <text x={sx(xMax) + 14} y={xAxisY + 4} fill="#111">{config.xLabel ?? "x"}</text>

        {/* y-axis */}
        <line x1={yAxisX} y1={sy(yMin)} x2={yAxisX} y2={sy(yMax) - 6} stroke="#111" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <text x={yAxisX - 6} y={sy(yMax) - 10} fill="#111" textAnchor="end">{config.yLabel ?? "y"}</text>

        {/* x ticks */}
        {(config.xTicks ?? []).map((t, i) => (
          <g key={`xt${i}`}>
            <line x1={sx(t)} y1={xAxisY - 4} x2={sx(t)} y2={xAxisY + 4} stroke="#111" strokeWidth="1" />
            <text x={sx(t)} y={xAxisY + 18} textAnchor="middle" fill="#333">{t}</text>
          </g>
        ))}

        {/* y ticks */}
        {(config.yTicks ?? []).map((t, i) => (
          <g key={`yt${i}`}>
            <line x1={yAxisX - 4} y1={sy(t)} x2={yAxisX + 4} y2={sy(t)} stroke="#111" strokeWidth="1" />
            <text x={yAxisX - 8} y={sy(t) + 4} textAnchor="end" fill="#333">{t}</text>
          </g>
        ))}

        {/* curves */}
        {(config.curves ?? []).map((curve, i) => {
          const d = curve.points
            .map(([x, y], j) => `${j === 0 ? "M" : "L"} ${sx(x)} ${sy(y)}`)
            .join(" ");
          return (
            <g key={`c${i}`}>
              <path d={d} fill="none" stroke={curve.color ?? "#1d4ed8"} strokeWidth={curve.width ?? 2.2} strokeLinejoin="round" strokeLinecap="round" />
              {curve.label && curve.labelAt && (
                <text x={sx(curve.labelAt[0])} y={sy(curve.labelAt[1])} fill={curve.color ?? "#1d4ed8"} fontWeight="600">
                  {curve.label}
                </text>
              )}
            </g>
          );
        })}

        {/* lines */}
        {(config.lines ?? []).map((line, i) => (
          <g key={`l${i}`}>
            <line
              x1={sx(line.from[0])}
              y1={sy(line.from[1])}
              x2={sx(line.to[0])}
              y2={sy(line.to[1])}
              stroke={line.color ?? "#dc2626"}
              strokeWidth="1.8"
              strokeDasharray={line.dashed ? "6 4" : undefined}
            />
            {line.label && line.labelAt && (
              <text x={sx(line.labelAt[0])} y={sy(line.labelAt[1])} fill={line.color ?? "#dc2626"} fontSize="12">
                {line.label}
              </text>
            )}
          </g>
        ))}

        {/* points */}
        {(config.points ?? []).map((p, i) => {
          const off = anchorOffset(p.labelAnchor);
          return (
            <g key={`p${i}`}>
              <circle cx={sx(p.at[0])} cy={sy(p.at[1])} r={p.r ?? 4} fill={p.color ?? "#111"} />
              {p.label && (
                <text
                  x={sx(p.at[0]) + off.dx}
                  y={sy(p.at[1]) + off.dy}
                  textAnchor={off.textAnchor}
                  dominantBaseline={off.dominantBaseline}
                  fill="#111"
                  fontSize="12"
                  fontWeight="500"
                >
                  {p.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
