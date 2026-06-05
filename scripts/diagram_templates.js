/* Mafs diagram templates keyed by diagramSpec.kind. Each takes a spec object and
 * returns a single <Mafs>…</Mafs> JSX string. Used by assemble_bank.js. */
const f = (v) => {
  const r = Math.round(v * 1e4) / 1e4;
  return Number.isInteger(r) ? String(r) : String(parseFloat(r.toFixed(4)));
};

// Normal pdf with an optional shaded region [lo,hi] (null = ±infinity).
function normalShade(spec) {
  const { mu, sigma } = spec;
  const lo = spec.lo == null ? null : spec.lo;
  const hi = spec.hi == null ? null : spec.hi;
  const peak = 1 / (sigma * Math.sqrt(2 * Math.PI));
  const xMin = mu - 4 * sigma, xMax = mu + 4 * sigma;
  const yMax = peak * 1.18, yMin = -peak * 0.16;
  const pdf = (x) => Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));
  const sLo = lo == null ? xMin : Math.max(xMin, lo);
  const sHi = hi == null ? xMax : Math.min(xMax, hi);
  const N = 48, pts = [];
  for (let k = 0; k <= N; k++) { const x = sLo + ((sHi - sLo) * k) / N; pts.push([f(x), f(pdf(x))]); }
  pts.push([f(sHi), 0], [f(sLo), 0]);
  const poly = "[" + pts.map((p) => `[${p[0]},${p[1]}]`).join(",") + "]";
  const yFn = `(x) => Math.exp(-((x-${f(mu)})**2)/(2*${f(sigma)}*${f(sigma)}))/(${f(sigma)}*Math.sqrt(2*Math.PI))`;
  const lines = [`  <Line.Segment point1={[${f(mu)}, 0]} point2={[${f(mu)}, ${f(pdf(mu))}]} color="var(--mafs-fg-accent)" opacity={0.35} />`];
  const labels = [];
  if (spec.boundaryLabels !== false) labels.push(`  <Text x={${f(mu)}} y={${f(yMax * 0.93)}} attach="n">μ = ${f(mu)}</Text>`);
  for (const b of [lo, hi]) {
    if (b == null || b < xMin || b > xMax) continue;
    lines.push(`  <Line.Segment point1={[${f(b)}, 0]} point2={[${f(b)}, ${f(pdf(b))}]} color="var(--mafs-fg-orange)" />`);
    if (spec.boundaryLabels !== false) labels.push(`  <Text x={${f(b)}} y={${f(yMin * 0.5)}} attach="s">${f(b)}</Text>`);
  }
  return `<Mafs viewBox={{ x: [${f(xMin)}, ${f(xMax)}], y: [${f(yMin)}, ${f(yMax)}] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: ${f(sigma)} }} yAxis={{ lines: false }} />
  <Polygon points={${poly}} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={${yFn}} color="var(--mafs-fg-accent)" />
${lines.join("\n")}
${labels.join("\n")}
</Mafs>`;
}

// Continuous uniform U(a,b) pdf: rectangle of height 1/(b-a) on [a,b], with an
// optional shaded sub-interval [lo,hi].
function uniformPdf(spec) {
  const { a, b } = spec;
  const lo = spec.lo == null ? null : Math.max(a, spec.lo);
  const hi = spec.hi == null ? null : Math.min(b, spec.hi);
  const h = 1 / (b - a);
  const pad = 0.18 * (b - a);
  const xMin = a - pad, xMax = b + pad;
  const yMax = h * 1.35, yMin = -h * 0.18;
  const parts = [];
  // shaded sub-interval (drawn first, under the outline)
  if (lo != null && hi != null && hi > lo) {
    parts.push(`  <Polygon points={[[${f(lo)},0],[${f(lo)},${f(h)}],[${f(hi)},${f(h)}],[${f(hi)},0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />`);
  }
  // pdf outline: 0→up at a, across at height h, down at b
  parts.push(`  <Polyline points={[[${f(a)},0],[${f(a)},${f(h)}],[${f(b)},${f(h)}],[${f(b)},0]]} color="var(--mafs-fg-accent)" />`);
  // labels
  const labels = [
    `  <Text x={${f(a)}} y={${f(yMin * 0.55)}} attach="s">${f(a)}</Text>`,
    `  <Text x={${f(b)}} y={${f(yMin * 0.55)}} attach="s">${f(b)}</Text>`,
    `  <Text x={${f(a - pad * 0.45)}} y={${f(h)}} attach="w">1/(${f(b)}−${f(a)})</Text>`,
  ];
  if (lo != null) labels.push(`  <Text x={${f(lo)}} y={${f(yMin * 0.55)}} attach="s">${f(lo)}</Text>`);
  if (hi != null) labels.push(`  <Text x={${f(hi)}} y={${f(yMin * 0.55)}} attach="s">${f(hi)}</Text>`);
  return `<Mafs viewBox={{ x: [${f(xMin)}, ${f(xMax)}], y: [${f(yMin)}, ${f(yMax)}] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
${parts.join("\n")}
${labels.join("\n")}
</Mafs>`;
}

// A "nice" gridline step (1/2/5 × 10ⁿ) for ~`target` divisions over `range`,
// so axis labels never crowd (mirrors why normalShade sets xAxis lines = sigma).
function niceStep(range, target = 6) {
  const raw = (range || 1) / target;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  const m = n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10;
  return m * pow;
}

// Box-and-whisker plot. spec: { min, q1, median, q3, max }. Drawn on its own
// (no Cartesian grid) with the five values labelled directly below, which reads
// cleaner than a number-line axis whose tick labels collide with the values.
function boxPlot(spec) {
  const { min, q1, median, q3, max } = spec;
  const range = max - min || 1;
  const pad = 0.1 * range;
  const xMin = min - pad, xMax = max + pad;
  const seg = (x1, y1, x2, y2, color) =>
    `  <Line.Segment point1={[${f(x1)}, ${f(y1)}]} point2={[${f(x2)}, ${f(y2)}]} color="${color}" />`;
  const parts = [
    seg(min, 0.55, q1, 0.55, "var(--mafs-fg-accent)"),    // left whisker
    seg(q3, 0.55, max, 0.55, "var(--mafs-fg-accent)"),    // right whisker
    seg(min, 0.43, min, 0.67, "var(--mafs-fg-accent)"),   // left cap
    seg(max, 0.43, max, 0.67, "var(--mafs-fg-accent)"),   // right cap
    `  <Polygon points={[[${f(q1)},0.35],[${f(q3)},0.35],[${f(q3)},0.75],[${f(q1)},0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />`,
    seg(median, 0.35, median, 0.75, "var(--mafs-fg-orange)"), // median
  ];
  // Stagger the five labels onto two rows so close values don't overlap.
  const vals = [min, q1, median, q3, max];
  const labels = vals.map(
    (v, i) => `  <Text x={${f(v)}} y={${i % 2 ? 0.12 : 0.24}} attach="s">${f(v)}</Text>`,
  );
  return `<Mafs viewBox={{ x: [${f(xMin)}, ${f(xMax)}], y: [0, 1] }} height={150}>
${parts.join("\n")}
${labels.join("\n")}
</Mafs>`;
}

// Histogram. spec: { bars: [[x0, x1, height], …] }  (height = frequency density
// for unequal class widths, otherwise frequency). Drawn as filled rectangles.
function histogram(spec) {
  const bars = spec.bars || [];
  const xs = bars.flatMap((b) => [b[0], b[1]]);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const hMax = Math.max(...bars.map((b) => b[2]), 1);
  const padX = 0.04 * (xMax - xMin || 1);
  const yMax = hMax * 1.18, yMin = -hMax * 0.12;
  const xstep = niceStep(xMax + padX - (xMin - padX), 6);
  const ystep = niceStep(hMax, 5);
  const rects = bars.map(
    (b) =>
      `  <Polygon points={[[${f(b[0])},0],[${f(b[0])},${f(b[2])}],[${f(b[1])},${f(b[2])}],[${f(b[1])},0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />`,
  );
  return `<Mafs viewBox={{ x: [${f(xMin - padX)}, ${f(xMax + padX)}], y: [${f(yMin)}, ${f(yMax)}] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: ${f(xstep)} }} yAxis={{ lines: ${f(ystep)} }} />
${rects.join("\n")}
</Mafs>`;
}

// Two-set Venn diagram inside a universal-set rectangle. spec:
//   { a:"A", b:"B", onlyA, both, onlyB, outside }  (region contents to display —
//   numbers or probabilities as strings). Any region value may be omitted.
function venn(spec) {
  const a = spec.a ?? "A", b = spec.b ?? "B";
  const txt = (x, y, v, anchor) =>
    v == null || v === ""
      ? null
      : `  <Text x={${f(x)}} y={${f(y)}}${anchor ? ` attach="${anchor}"` : ""}>${v}</Text>`;
  const parts = [
    // universal-set rectangle (outline only)
    `  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />`,
    // the two sets
    `  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />`,
    `  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />`,
    // set name labels
    `  <Text x={1.7} y={5.9}>${a}</Text>`,
    `  <Text x={8.3} y={5.9}>${b}</Text>`,
    // region contents
    txt(2.7, 3.4, spec.onlyA),
    txt(5, 3.4, spec.both),
    txt(7.3, 3.4, spec.onlyB),
    txt(9.2, 0.7, spec.outside),
  ].filter(Boolean);
  return `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
${parts.join("\n")}
</Mafs>`;
}

// Probability tree, 2 stages. spec:
//   { stage1:[{label,p}], stage2:[ [{label,p},…] for each stage-1 node ] }
//   `p` strings are placed on each branch; `label` at each node/leaf.
function tree(spec) {
  const s1 = Array.isArray(spec.stage1) ? spec.stage1 : [];
  const rawS2 = Array.isArray(spec.stage2) ? spec.stage2 : [];
  // Defensive: each stage-2 entry must be an array of branch objects.
  const s2 = s1.map((_, i) => (Array.isArray(rawS2[i]) ? rawS2[i] : []));
  const leaves = [];
  s1.forEach((_, i) => s2[i].forEach((leaf, j) => leaves.push({ i, j, leaf })));
  const n = Math.max(leaves.length, 1);
  const yTop = 8.5, yBot = 1.5;
  const yOf = (k) => (n === 1 ? (yTop + yBot) / 2 : yTop - ((yTop - yBot) * k) / (n - 1));
  leaves.forEach((L, k) => (L.y = yOf(k)));
  const node1Y = s1.map((_, i) => {
    const ys = leaves.filter((L) => L.i === i).map((L) => L.y);
    return ys.reduce((s, v) => s + v, 0) / ys.length;
  });
  const rootY = node1Y.reduce((s, v) => s + v, 0) / (node1Y.length || 1);
  const X0 = 0, X1 = 4, X2 = 9;
  const seg = (x1, y1, x2, y2) =>
    `  <Line.Segment point1={[${f(x1)}, ${f(y1)}]} point2={[${f(x2)}, ${f(y2)}]} color="var(--mafs-fg)" />`;
  // Place the probability `frac` of the way along the branch (stage-2 labels are
  // pushed toward the leaf so they clear the stage-1 node labels).
  const pLab = (x1, y1, x2, y2, p, frac) =>
    p == null
      ? null
      : `  <Text x={${f(x1 + frac * (x2 - x1))}} y={${f(y1 + frac * (y2 - y1) + 0.4)}}>${p}</Text>`;
  const out = [];
  s1.forEach((node, i) => {
    out.push(seg(X0, rootY, X1, node1Y[i]));
    out.push(pLab(X0, rootY, X1, node1Y[i], node.p, 0.5));
    out.push(`  <Text x={${f(X1 + 0.3)}} y={${f(node1Y[i])}} attach="e">${node.label ?? ""}</Text>`);
    (s2[i] || []).forEach((leaf, j) => {
      const L = leaves.find((x) => x.i === i && x.j === j);
      out.push(seg(X1, node1Y[i], X2, L.y));
      out.push(pLab(X1, node1Y[i], X2, L.y, leaf.p, 0.62));
      out.push(`  <Text x={${f(X2 + 0.3)}} y={${f(L.y)}} attach="e">${leaf.label ?? ""}</Text>`);
    });
  });
  return `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
${out.filter(Boolean).join("\n")}
</Mafs>`;
}

// Scatter diagram with custom axes drawn at the data's bottom-left (so it works
// for data far from the origin, where Coordinates.Cartesian axes would be off
// screen). spec: { points:[[x,y],…], line?:{a,b} (y=a+b·x) or {m,c} }.
function scatter(spec) {
  const pts = spec.points || [];
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const line = spec.line || null;
  const a = line ? (line.a != null ? line.a : line.c) : 0;
  const b = line ? (line.b != null ? line.b : line.m) : 0;
  let xMin = Math.min(...xs), xMax = Math.max(...xs);
  let yMin = Math.min(...ys), yMax = Math.max(...ys);
  if (line) {
    yMin = Math.min(yMin, a + b * xMin, a + b * xMax);
    yMax = Math.max(yMax, a + b * xMin, a + b * xMax);
  }
  const xR = xMax - xMin || 1, yR = yMax - yMin || 1;
  // Axes sit just outside the data; the viewBox extends further left/below so the
  // tick labels (drawn outside the axes) have room and aren't clipped.
  const axisX = xMin - 0.06 * xR, axisY = yMin - 0.1 * yR;
  const vbX0 = axisX - 0.22 * xR, vbX1 = xMax + 0.06 * xR;
  const vbY0 = axisY - 0.14 * yR, vbY1 = yMax + 0.1 * yR;
  const xstep = niceStep(xR, 5), ystep = niceStep(yR, 5);
  const els = [
    `  <Line.Segment point1={[${f(axisX)}, ${f(axisY)}]} point2={[${f(vbX1)}, ${f(axisY)}]} color="var(--mafs-fg)" />`,
    `  <Line.Segment point1={[${f(axisX)}, ${f(axisY)}]} point2={[${f(axisX)}, ${f(vbY1)}]} color="var(--mafs-fg)" />`,
  ];
  for (let xv = Math.ceil(xMin / xstep) * xstep; xv <= xMax + 1e-9; xv += xstep)
    els.push(`  <Text x={${f(xv)}} y={${f(axisY)}} attach="s">${f(xv)}</Text>`);
  for (let yv = Math.ceil(yMin / ystep) * ystep; yv <= yMax + 1e-9; yv += ystep)
    els.push(`  <Text x={${f(axisX)}} y={${f(yv)}} attach="w">${f(yv)}</Text>`);
  if (line)
    els.push(
      `  <Line.Segment point1={[${f(xMin)}, ${f(a + b * xMin)}]} point2={[${f(xMax)}, ${f(a + b * xMax)}]} color="var(--mafs-fg-orange)" />`,
    );
  pts.forEach((p) => els.push(`  <Point x={${f(p[0])}} y={${f(p[1])}} color="var(--mafs-fg-blue)" />`));
  return `<Mafs viewBox={{ x: [${f(vbX0)}, ${f(vbX1)}], y: [${f(vbY0)}, ${f(vbY1)}] }} height={260} preserveAspectRatio={false}>
${els.join("\n")}
</Mafs>`;
}

module.exports = { normalShade, uniformPdf, boxPlot, histogram, venn, tree, scatter };
