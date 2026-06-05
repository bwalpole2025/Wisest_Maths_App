/* Generic bank assembler for the applied build.
 *   node scripts/assemble_bank.js <code>
 * Reads /tmp/<code>_gen_*.json (arrays of generated questions) + the manifest
 * entry, renders any diagramSpec into Mafs via the kind registry, and writes the
 * Question[] TS bank to the manifest targetPath. */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const diagrams = require("./diagram_templates");

const code = process.argv[2];
if (!code) throw new Error("usage: node assemble_bank.js <code>");
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "applied-build-manifest.json"), "utf8"));
const sub = manifest.subtopics.find((s) => s.code === code);
if (!sub) throw new Error(`unknown code ${code}`);
const OUT = path.join(ROOT, sub.targetPath);
const TITLE = sub.title.replace(/\s*\(Y2\)\s*$/, "");

// ---- load gen files --------------------------------------------------------
let all = [];
for (let i = 0; ; i++) {
  const p = `/tmp/${code}_gen_${i}.json`;
  if (!fs.existsSync(p)) break;
  all = all.concat(JSON.parse(fs.readFileSync(p, "utf8")));
}
all.sort((a, b) => a.index - b.index);
const seen = new Set();
for (const q of all) {
  if (seen.has(q.index)) throw new Error(`dup index ${q.index}`);
  seen.add(q.index);
}

// ---- serialisation helpers -------------------------------------------------
function unstyle(s) {
  let prev;
  do { prev = s; s = s.replace(/\\(?:textit|emph|textbf|textrm|textsf|texttt|textsl|mathit)\{([^{}]*)\}/g, "$1"); } while (s !== prev);
  return s;
}
const q = (s) => '"' + unstyle(String(s)).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
const tick = (s) => "`" + String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";

function renderDiagram(spec) {
  if (!spec) return null;
  const fn = diagrams[spec.kind];
  if (!fn) throw new Error(`no diagram template for kind="${spec.kind}" (code ${code})`);
  return fn(spec);
}

function emitStep(s, n) {
  const parts = [
    `        { stepNumber: ${n}`,
    `description: ${q(s.description || "")}`,
    `workingLatex: ${q(s.workingLatex || "")}`,
    `explanation: ${q(s.explanation || "")}`,
  ];
  const d = renderDiagram(s.diagramSpec);
  if (d) parts.push(`mafs: ${tick(d)}`);
  return parts.join(", ") + " }";
}

function emitQuestion(item) {
  const idx = item.index;
  const id = `${code}-${String(idx).padStart(3, "0")}`;
  const title = `${TITLE} ${String(idx).padStart(2, "0")}`;
  const steps = item.steps.map((s, i) => emitStep(s, i + 1)).join(",\n");
  const tags = "[" + (item.tags || []).map(q).join(", ") + "]";
  const qd = renderDiagram(item.diagramSpec);
  const L = [];
  L.push("  {");
  L.push(`    id: ${q(id)},`);
  L.push(`    topicRef: ${q(code)},`);
  L.push(`    topicTitle: ${q(title)},`);
  L.push(`    difficulty: ${q(item.difficulty)},`);
  L.push(`    questionText: ${q(item.questionText)},`);
  if (qd) L.push(`    questionMafs: ${tick(qd)},`);
  L.push(`    marks: ${item.marks},`);
  L.push(`    examStyle: ${item.examStyle ? "true" : "false"},`);
  L.push(`    yearCreated: 2026,`);
  L.push(`    tags: ${tags},`);
  L.push(`    workedSolution: {`);
  L.push(`      steps: [`);
  L.push(steps);
  L.push(`      ],`);
  L.push(`      finalAnswer: ${q(item.finalAnswer)},`);
  if (item.canonicalAnswer) L.push(`      canonicalAnswer: ${q(item.canonicalAnswer)},`);
  L.push(`    },`);
  L.push("  }");
  return L.join("\n");
}

const header = `import { Question } from "@/lib/types";

/**
 * Year 2 — ${sub.module === "mechanics" ? "Mechanics" : "Statistics"} § ${TITLE}
 * Ref: ${code}
 * ${all.length} questions. ${sub.useDiagrams ? "Diagrams: Mafs figures (questionMafs / step.mafs)." : "No diagrams."}
 */
export const questions: Question[] = [
`;
fs.writeFileSync(OUT, header + all.map(emitQuestion).join(",\n") + ",\n];\n");
const bands = all.reduce((o, x) => ((o[x.difficulty] = (o[x.difficulty] || 0) + 1), o), {});
console.log(`Wrote ${OUT}`);
console.log(`questions: ${all.length} | bands: ${JSON.stringify(bands)} | diagrams: ${all.filter((x) => x.diagramSpec).length + all.reduce((n, x) => n + x.steps.filter((s) => s.diagramSpec).length, 0)}`);
