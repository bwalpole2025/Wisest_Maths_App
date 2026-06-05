/* Assemble the y2nm (Normal distribution) bank from the 6 generation JSON files,
 * rendering each diagramSpec into a Mafs normal-curve figure. */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "lib/data/questions/Year_2_A_Level_Maths/Statistics/y2nm_normal_distribution.ts");

// ---- load + order ----------------------------------------------------------
let all = [];
for (let i = 0; i < 6; i++) all = all.concat(JSON.parse(fs.readFileSync(`/tmp/y2nm_gen_${i}.json`, "utf8")));
all.sort((a, b) => a.index - b.index);
const seen = new Set();
for (const q of all) {
  if (q.index < 1 || q.index > 71) throw new Error(`bad index ${q.index}`);
  if (seen.has(q.index)) throw new Error(`dup index ${q.index}`);
  seen.add(q.index);
}
if (seen.size !== 71) throw new Error(`expected 71, got ${seen.size}`);

// ---- Mafs normal-curve template -------------------------------------------
const f = (v) => {
  const r = Math.round(v * 1e4) / 1e4;
  return Number.isInteger(r) ? String(r) : String(parseFloat(r.toFixed(4)));
};
function normalMafs(spec) {
  const { mu, sigma } = spec;
  const lo = spec.lo, hi = spec.hi;
  const peak = 1 / (sigma * Math.sqrt(2 * Math.PI));
  const xMin = mu - 4 * sigma, xMax = mu + 4 * sigma;
  const yMax = peak * 1.18, yMin = -peak * 0.16;
  const pdf = (x) => Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));
  const sLo = lo == null ? xMin : Math.max(xMin, lo);
  const sHi = hi == null ? xMax : Math.min(xMax, hi);
  // shaded polygon: along the curve sLo..sHi then back along the baseline
  const N = 48;
  const pts = [];
  for (let k = 0; k <= N; k++) { const x = sLo + ((sHi - sLo) * k) / N; pts.push([f(x), f(pdf(x))]); }
  pts.push([f(sHi), 0], [f(sLo), 0]);
  const polyPoints = "[" + pts.map((p) => `[${p[0]},${p[1]}]`).join(",") + "]";
  const yFn = `(x) => Math.exp(-((x-${f(mu)})**2)/(2*${f(sigma)}*${f(sigma)}))/(${f(sigma)}*Math.sqrt(2*Math.PI))`;
  const lines = [];
  // mean line
  lines.push(`  <Line.Segment point1={[${f(mu)}, 0]} point2={[${f(mu)}, ${f(pdf(mu))}]} color="var(--mafs-fg-accent)" opacity={0.35} />`);
  const labels = [];
  if (spec.boundaryLabels !== false) labels.push(`  <Text x={${f(mu)}} y={${f(yMax * 0.93)}} attach="n">μ = ${f(mu)}</Text>`);
  for (const [name, b] of [["lo", lo], ["hi", hi]]) {
    if (b == null) continue;
    if (b < xMin || b > xMax) continue;
    lines.push(`  <Line.Segment point1={[${f(b)}, 0]} point2={[${f(b)}, ${f(pdf(b))}]} color="var(--mafs-fg-orange)" />`);
    if (spec.boundaryLabels !== false) labels.push(`  <Text x={${f(b)}} y={${f(yMin * 0.5)}} attach="s">${f(b)}</Text>`);
  }
  const step = sigma; // axis gridline spacing
  return `<Mafs viewBox={{ x: [${f(xMin)}, ${f(xMax)}], y: [${f(yMin)}, ${f(yMax)}] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: ${f(step)} }} yAxis={{ lines: false }} />
  <Polygon points={${polyPoints}} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={${yFn}} color="var(--mafs-fg-accent)" />
${lines.join("\n")}
${labels.join("\n")}
</Mafs>`;
}

// ---- TS serialisation ------------------------------------------------------
// Unwrap text-styling commands the prose renderer (MathText) can't display
// (keep \text{} which KaTeX uses for units/words inside math).
function unstyle(s) {
  let prev;
  do { prev = s; s = s.replace(/\\(?:textit|emph|textbf|textrm|textsf|texttt|textsl|mathit)\{([^{}]*)\}/g, "$1"); } while (s !== prev);
  return s;
}
const q = (s) => '"' + unstyle(String(s)).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
const tick = (s) => "`" + String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";

function emitStep(s, n) {
  const parts = [
    `        { stepNumber: ${n}`,
    `description: ${q(s.description || "")}`,
    `workingLatex: ${q(s.workingLatex || "")}`,
    `explanation: ${q(s.explanation || "")}`,
  ];
  if (s.diagramSpec) parts.push(`mafs: ${tick(normalMafs(s.diagramSpec))}`);
  return parts.join(", ") + " }";
}

function emitQuestion(item) {
  const idx = item.index;
  const id = `y2nm-${String(idx).padStart(3, "0")}`;
  const title = `The Normal Distribution ${String(idx).padStart(2, "0")}`;
  const steps = item.steps.map((s, i) => emitStep(s, i + 1)).join(",\n");
  const tags = "[" + (item.tags || []).map(q).join(", ") + "]";
  const lines = [];
  lines.push("  {");
  lines.push(`    id: ${q(id)},`);
  lines.push(`    topicRef: "y2nm",`);
  lines.push(`    topicTitle: ${q(title)},`);
  lines.push(`    difficulty: ${q(item.difficulty)},`);
  lines.push(`    questionText: ${q(item.questionText)},`);
  if (item.diagramSpec) lines.push(`    questionMafs: ${tick(normalMafs(item.diagramSpec))},`);
  lines.push(`    marks: ${item.marks},`);
  lines.push(`    examStyle: ${item.examStyle ? "true" : "false"},`);
  lines.push(`    yearCreated: 2026,`);
  lines.push(`    tags: ${tags},`);
  lines.push(`    workedSolution: {`);
  lines.push(`      steps: [`);
  lines.push(steps);
  lines.push(`      ],`);
  lines.push(`      finalAnswer: ${q(item.finalAnswer)},`);
  if (item.canonicalAnswer) lines.push(`      canonicalAnswer: ${q(item.canonicalAnswer)},`);
  lines.push(`    },`);
  lines.push("  }");
  return lines.join("\n");
}

const header = `import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § The Normal Distribution
 * Ref: y2nm
 * 71 questions: standardisation, P(X<a)/P(X>a)/P(a<X<b), inverse Normal,
 * finding unknown mu/sigma, simultaneous parameters from two probabilities,
 * conditional probability, Normal+binomial, modelling and suitability critique.
 * Diagrams: Mafs normal-curve figures (questionMafs / step.mafs).
 */
export const questions: Question[] = [
`;

const body = all.map(emitQuestion).join(",\n");
fs.writeFileSync(OUT, header + body + ",\n];\n");
console.log(`Wrote ${OUT}`);
console.log(`Questions: ${all.length} | with diagrams: ${all.filter((x) => x.diagramSpec).length}`);
const bands = all.reduce((o, x) => ((o[x.difficulty] = (o[x.difficulty] || 0) + 1), o), {});
console.log("bands:", JSON.stringify(bands));
