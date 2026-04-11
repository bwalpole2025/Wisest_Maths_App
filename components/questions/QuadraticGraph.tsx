"use client";

import type { QuadraticGraphData } from "@/lib/types";

const WIDTH = 380;
const HEIGHT = 300;
const PADDING = 45;

function mapX(x: number, xMin: number, xMax: number) {
  return PADDING + ((x - xMin) / (xMax - xMin)) * (WIDTH - 2 * PADDING);
}

function mapY(y: number, yMin: number, yMax: number) {
  return HEIGHT - PADDING - ((y - yMin) / (yMax - yMin)) * (HEIGHT - 2 * PADDING);
}

function fmt(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

interface LabelPos {
  x: number;
  y: number;
  text: string;
  color: string;
  anchor?: "middle" | "start" | "end";
}

function resolveOverlaps(labels: LabelPos[]): LabelPos[] {
  const MIN_DIST = 14;
  const resolved = [...labels];
  for (let pass = 0; pass < 5; pass++) {
    for (let i = 0; i < resolved.length; i++) {
      for (let j = i + 1; j < resolved.length; j++) {
        const dx = resolved[i].x - resolved[j].x;
        const dy = resolved[i].y - resolved[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MIN_DIST) {
          const shift = (MIN_DIST - dist) / 2 + 1;
          resolved[i].y -= shift;
          resolved[j].y += shift;
        }
      }
    }
  }
  return resolved;
}

export function QuadraticGraph({ data }: { data: QuadraticGraphData }) {
  const { a, b, c } = data;

  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;
  const yInt = c;

  const disc = b * b - 4 * a * c;
  const roots: number[] = [];
  if (disc >= 0) {
    const r1 = (-b - Math.sqrt(disc)) / (2 * a);
    const r2 = (-b + Math.sqrt(disc)) / (2 * a);
    if (Math.abs(disc) < 0.0001) {
      roots.push(r1);
    } else {
      roots.push(Math.min(r1, r2), Math.max(r1, r2));
    }
  }

  const xMin = data.xMin ?? Math.min(vertexX - 4, ...roots.map((r) => r - 2), -2);
  const xMax = data.xMax ?? Math.max(vertexX + 4, ...roots.map((r) => r + 2), 2);

  const numPoints = 120;
  const yValues: number[] = [];
  for (let i = 0; i <= numPoints; i++) {
    const x = xMin + (i / numPoints) * (xMax - xMin);
    yValues.push(a * x * x + b * x + c);
  }
  const yDataMin = Math.min(...yValues);
  const yDataMax = Math.max(...yValues);
  const yPad = Math.max((yDataMax - yDataMin) * 0.18, 2);
  const yMin = Math.min(yDataMin - yPad, -1);
  const yMax = Math.max(yDataMax + yPad, 1);

  const pathPoints: string[] = [];
  for (let i = 0; i <= numPoints; i++) {
    const x = xMin + (i / numPoints) * (xMax - xMin);
    const y = a * x * x + b * x + c;
    const px = mapX(x, xMin, xMax);
    const py = mapY(y, yMin, yMax);
    pathPoints.push(`${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`);
  }

  const axisY = yMin <= 0 && yMax >= 0 ? mapY(0, yMin, yMax) : HEIGHT - PADDING;
  const axisX = xMin <= 0 && xMax >= 0 ? mapX(0, xMin, xMax) : PADDING;

  const xStep = Math.max(1, Math.ceil((xMax - xMin) / 10));
  const yStep = Math.max(1, Math.ceil((yMax - yMin) / 8));
  const xTicks: number[] = [];
  for (let v = Math.ceil(xMin); v <= Math.floor(xMax); v += xStep) {
    if (v !== 0) xTicks.push(v);
  }
  const yTicks: number[] = [];
  for (let v = Math.ceil(yMin); v <= Math.floor(yMax); v += yStep) {
    if (v !== 0) yTicks.push(v);
  }

  // Collect all labels and resolve overlaps
  const labels: LabelPos[] = [];

  // Root labels
  const isRepeatedRoot = roots.length === 1 && Math.abs(disc) < 0.0001;
  roots.forEach((r) => {
    const px = mapX(r, xMin, xMax);
    const py = mapY(0, yMin, yMax);
    const labelText = isRepeatedRoot
      ? `(${fmt(r)}, 0) rep.`
      : `${fmt(r)}`;
    labels.push({
      x: px,
      y: a > 0 ? py + 16 : py - 10,
      text: labelText,
      color: "#ef4444",
      anchor: "middle",
    });
  });

  // Vertex label — position away from curve
  const vpx = mapX(vertexX, xMin, xMax);
  const vpy = mapY(vertexY, yMin, yMax);
  const vertexBelow = a > 0;
  // If vertex is at a root, offset label further
  const vertexAtRoot = roots.some(
    (r) => Math.abs(r - vertexX) < 0.01 && Math.abs(vertexY) < 0.01
  );
  const vLabelOffset = vertexAtRoot ? (vertexBelow ? 28 : -22) : vertexBelow ? 18 : -12;
  labels.push({
    x: vpx,
    y: vpy + vLabelOffset,
    text: `(${fmt(vertexX)}, ${fmt(vertexY)})`,
    color: "#10b981",
    anchor: "middle",
  });

  // y-intercept label
  const showYInt = Math.abs(yInt - vertexY) > 0.01 || Math.abs(vertexX) > 0.01;
  if (showYInt) {
    const yipx = mapX(0, xMin, xMax);
    const yipy = mapY(yInt, yMin, yMax);
    labels.push({
      x: yipx + 12,
      y: yipy + 4,
      text: `(0, ${fmt(yInt)})`,
      color: "#f59e0b",
      anchor: "start",
    });
  }

  const resolvedLabels = resolveOverlaps(labels);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="mx-auto rounded-lg border border-border bg-white"
      style={{ width: "100%", maxWidth: "420px", height: "auto" }}
    >
      {/* Grid */}
      {xTicks.map((v) => (
        <line
          key={`gx${v}`}
          x1={mapX(v, xMin, xMax)}
          y1={PADDING}
          x2={mapX(v, xMin, xMax)}
          y2={HEIGHT - PADDING}
          stroke="#f3f4f6"
          strokeWidth={0.5}
        />
      ))}
      {yTicks.map((v) => (
        <line
          key={`gy${v}`}
          x1={PADDING}
          y1={mapY(v, yMin, yMax)}
          x2={WIDTH - PADDING}
          y2={mapY(v, yMin, yMax)}
          stroke="#f3f4f6"
          strokeWidth={0.5}
        />
      ))}

      {/* Axes */}
      <line x1={PADDING} y1={axisY} x2={WIDTH - PADDING} y2={axisY} stroke="#374151" strokeWidth={1.5} />
      <line x1={axisX} y1={HEIGHT - PADDING} x2={axisX} y2={PADDING} stroke="#374151" strokeWidth={1.5} />

      {/* Axis labels */}
      <text x={WIDTH - PADDING + 6} y={axisY + 4} fontSize={13} fill="#374151" fontStyle="italic">x</text>
      <text x={axisX + 6} y={PADDING - 6} fontSize={13} fill="#374151" fontStyle="italic">y</text>

      {/* Tick marks & labels */}
      {xTicks.map((v) => (
        <g key={`tx${v}`}>
          <line x1={mapX(v, xMin, xMax)} y1={axisY - 3} x2={mapX(v, xMin, xMax)} y2={axisY + 3} stroke="#374151" strokeWidth={1} />
          <text x={mapX(v, xMin, xMax)} y={axisY + 14} fontSize={9} fill="#9ca3af" textAnchor="middle">{v}</text>
        </g>
      ))}
      {yTicks.map((v) => (
        <g key={`ty${v}`}>
          <line x1={axisX - 3} y1={mapY(v, yMin, yMax)} x2={axisX + 3} y2={mapY(v, yMin, yMax)} stroke="#374151" strokeWidth={1} />
          <text x={axisX - 7} y={mapY(v, yMin, yMax) + 3} fontSize={9} fill="#9ca3af" textAnchor="end">{v}</text>
        </g>
      ))}

      {/* Parabola */}
      <path d={pathPoints.join(" ")} fill="none" stroke="#6366f1" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

      {/* Root dots */}
      {roots.map((r, i) => (
        <circle key={`rd${i}`} cx={mapX(r, xMin, xMax)} cy={mapY(0, yMin, yMax)} r={4.5} fill="#ef4444" stroke="white" strokeWidth={2} />
      ))}

      {/* Vertex dot */}
      <circle cx={vpx} cy={vpy} r={4.5} fill="#10b981" stroke="white" strokeWidth={2} />

      {/* Dashed lines from vertex to axes */}
      <line x1={vpx} y1={vpy} x2={vpx} y2={axisY} stroke="#10b981" strokeWidth={0.8} strokeDasharray="4 3" opacity={0.5} />
      <line x1={vpx} y1={vpy} x2={axisX} y2={vpy} stroke="#10b981" strokeWidth={0.8} strokeDasharray="4 3" opacity={0.5} />

      {/* y-intercept dot */}
      {showYInt && (
        <circle cx={mapX(0, xMin, xMax)} cy={mapY(yInt, yMin, yMax)} r={3.5} fill="#f59e0b" stroke="white" strokeWidth={1.5} />
      )}

      {/* Labels with background for readability */}
      {resolvedLabels.map((lbl, i) => (
        <g key={`lbl${i}`}>
          <text
            x={lbl.x}
            y={lbl.y}
            fontSize={10}
            fill="white"
            textAnchor={lbl.anchor ?? "middle"}
            fontWeight="bold"
            stroke="white"
            strokeWidth={3}
            paintOrder="stroke"
          >
            {lbl.text}
          </text>
          <text
            x={lbl.x}
            y={lbl.y}
            fontSize={10}
            fill={lbl.color}
            textAnchor={lbl.anchor ?? "middle"}
            fontWeight="bold"
          >
            {lbl.text}
          </text>
        </g>
      ))}

      {/* Legend */}
      <g transform={`translate(${PADDING + 5}, ${PADDING + 5})`}>
        <rect x={-4} y={-8} width={82} height={42} rx={4} fill="white" fillOpacity={0.85} stroke="#e5e7eb" strokeWidth={0.5} />
        <circle cx={0} cy={0} r={3} fill="#ef4444" />
        <text x={8} y={3} fontSize={8} fill="#6b7280">Roots</text>
        <circle cx={0} cy={12} r={3} fill="#10b981" />
        <text x={8} y={15} fontSize={8} fill="#6b7280">Vertex</text>
        <circle cx={0} cy={24} r={3} fill="#f59e0b" />
        <text x={8} y={27} fontSize={8} fill="#6b7280">y-intercept</text>
      </g>
    </svg>
  );
}
