// Assemble the gn28/gn29/gn30 question banks from the generator JSON chunks in
// /tmp/wisest-approx-gen (files named <ref>__<Band>__<idx>.json). Deterministic:
// groups by ref, orders Foundation → Standard → Challenge, stamps id / topicRef /
// topicTitle / yearCreated / stepNumber, and writes the TS bank files. The band
// label is taken from the FILENAME (authoritative), overriding any per-question value.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const SRC = "/tmp/wisest-approx-gen";
const OUTDIR = "lib/data/questions/GCSE_Maths/Number";

const META = {
  gn28: { title: "Estimation and approximation", slug: "gn28_estimation_and_approximation", dfe: "N14" },
  gn29: { title: "Rounding to decimal places and significant figures", slug: "gn29_rounding_to_decimal_places_and_significant_figures", dfe: "N15" },
  gn30: { title: "Error intervals and truncation", slug: "gn30_error_intervals_and_truncation", dfe: "N15/N16" },
};
const BAND_ORDER = { Foundation: 0, Standard: 1, Challenge: 2 };

// Collect chunk files → { ref: [ {band, idx, questions:[...]} ] }
const byRef = {};
for (const file of readdirSync(SRC).filter((f) => f.endsWith(".json")).sort()) {
  const m = file.match(/^(gn\d+)__(Foundation|Standard|Challenge)__(\d+)\.json$/);
  if (!m) { console.warn(`skip (bad name): ${file}`); continue; }
  const [, ref, band, idx] = m;
  let arr;
  try {
    arr = JSON.parse(readFileSync(path.join(SRC, file), "utf8"));
  } catch (e) {
    console.warn(`skip (bad JSON): ${file} — ${e.message}`);
    continue;
  }
  if (!Array.isArray(arr)) { console.warn(`skip (not array): ${file}`); continue; }
  (byRef[ref] ??= []).push({ band, idx: Number(idx), questions: arr });
}

function buildQuestion(ref, band, q, seq) {
  const ws = q.workedSolution ?? {};
  const steps = (ws.steps ?? []).map((s, i) => ({
    stepNumber: i + 1,
    description: String(s.description ?? ""),
    workingLatex: String(s.workingLatex ?? ""),
    explanation: String(s.explanation ?? ""),
  }));
  const workedSolution = { steps, finalAnswer: String(ws.finalAnswer ?? "") };
  if (ws.canonicalAnswer != null && String(ws.canonicalAnswer).trim() !== "") {
    workedSolution.canonicalAnswer = String(ws.canonicalAnswer);
  }
  const tags = Array.isArray(q.tags) ? q.tags.map(String) : [];
  // answerType: same two-way default the codemod uses (form-sensitive → exactValue).
  const isExact = tags.some((t) => FORM_SENSITIVE.has(t.toLowerCase()));
  const out = {
    id: `${ref}-${String(seq).padStart(3, "0")}`,
    topicRef: ref,
    topicTitle: META[ref].title,
    difficulty: band, // authoritative from filename
    questionText: String(q.questionText ?? ""),
    marks: Number.isFinite(q.marks) ? q.marks : 1,
    examStyle: q.examStyle !== false,
    yearCreated: 2026,
    tags,
    answerType: isExact ? "exactValue" : "expression",
    workedSolution,
  };
  if (isExact) out.answerMeta = { exactForm: true };
  return out;
}

// Mirror lib/services/symbolicGrading.ts FORM_SENSITIVE_TAGS.
const FORM_SENSITIVE = new Set([
  "simplify", "simplification", "surd form", "single fraction", "partial fractions",
  "index form", "lowest terms", "rationalise", "rationalising",
  "fully factorise", "fully factorize", "factorise", "factorize",
]);

let grandTotal = 0;
for (const ref of Object.keys(META)) {
  const chunks = (byRef[ref] ?? []).sort(
    (a, b) => BAND_ORDER[a.band] - BAND_ORDER[b.band] || a.idx - b.idx,
  );
  const seen = new Set();
  const questions = [];
  const bandCounts = { Foundation: 0, Standard: 0, Challenge: 0 };
  for (const c of chunks) {
    for (const q of c.questions) {
      const key = (q.questionText ?? "").replace(/\s+/g, " ").trim().toLowerCase();
      if (!key || seen.has(key)) continue; // drop blanks + exact dupes
      seen.add(key);
      questions.push(buildQuestion(ref, c.band, q, questions.length + 1));
      bandCounts[c.band]++;
    }
  }
  if (questions.length === 0) { console.warn(`!! ${ref}: no questions — skipping write`); continue; }

  const header = `import { Question } from "@/lib/types";

/*
 * GCSE Mathematics — Number strand
 * Topic ${ref}: ${META[ref].title} (DfE ref ${META[ref].dfe})
 *
 * ${questions.length} questions — ${bandCounts.Foundation} Foundation, ${bandCounts.Standard} Standard, ${bandCounts.Challenge} Challenge.
 */

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;
  writeFileSync(path.join(OUTDIR, `${META[ref].slug}.ts`), header);
  grandTotal += questions.length;
  console.log(
    `${ref}: ${questions.length} (F${bandCounts.Foundation}/S${bandCounts.Standard}/C${bandCounts.Challenge}) → ${META[ref].slug}.ts`,
  );
}
console.log(`TOTAL: ${grandTotal} questions across ${Object.keys(META).length} banks`);
