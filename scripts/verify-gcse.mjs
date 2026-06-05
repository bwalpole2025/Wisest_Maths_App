/* Verify the GCSE Mathematics taxonomy (lib/data/gcse/*) is internally
 * consistent and complete. Run:  node scripts/verify-gcse.mjs
 *
 * Fails loudly (non-zero exit) on any structural drift: missing strands, count
 * drops, empty dfeRefs, mis-tagged Wales boards, duplicate refs, or empty tiers.
 * Uses an on-the-fly TS transpile loader (no ts-node needed), mirroring
 * scripts/gen-pool-sizes.js. */
import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const cache = new Map();
function resolveFile(b) {
  if (fs.existsSync(b) && fs.statSync(b).isFile()) return b;
  if (fs.existsSync(b + ".ts")) return b + ".ts";
  if (fs.existsSync(path.join(b, "index.ts"))) return path.join(b, "index.ts");
  throw new Error("cannot resolve " + b);
}
function load(spec, from) {
  if (spec === "server-only" || spec === "client-only") return {};
  if (!spec.startsWith("@/") && !spec.startsWith(".")) return require(spec);
  const f = resolveFile(spec.startsWith("@/") ? path.resolve(spec.slice(2)) : path.resolve(from, spec));
  if (cache.has(f)) return cache.get(f);
  const out = ts.transpileModule(fs.readFileSync(f, "utf8"), {
    compilerOptions: { module: "commonjs", target: "es2020", esModuleInterop: true },
  }).outputText;
  const mod = { exports: {} };
  cache.set(f, mod.exports);
  new Function("require", "module", "exports", out)((s) => load(s, path.dirname(f)), mod, mod.exports);
  cache.set(f, mod.exports);
  return mod.exports;
}

const cwd = process.cwd();
const { gcseManifest } = load("@/lib/data/gcse/manifest", cwd);
const { gcseTopics } = load("@/lib/data/gcse/topics", cwd);
const { topics } = load("@/lib/data/topics", cwd);

const STRANDS = [
  "Number",
  "Algebra",
  "Ratio, Proportion & Rates of Change",
  "Geometry & Measures",
  "Probability",
  "Statistics",
];
const ALL_BOARDS = ["AQA", "Edexcel", "OCR", "Eduqas", "WJEC"];

/* Baked expected counts — locked after transcription so an accidental future
 * subtopic drop/add fails this script (idempotency guard). */
const EXPECTED = {
  Number: { topics: 9, subtopics: 35 },
  Algebra: { topics: 13, subtopics: 55 },
  "Ratio, Proportion & Rates of Change": { topics: 8, subtopics: 34 },
  "Geometry & Measures": { topics: 11, subtopics: 49 },
  Probability: { topics: 3, subtopics: 11 },
  Statistics: { topics: 4, subtopics: 21 },
};

/* DfE Appendix-B ballparks — soft floor (0.7×) to catch gross drops only. */
const BALLPARK = {
  Number: 33,
  Algebra: 47,
  "Ratio, Proportion & Rates of Change": 30,
  "Geometry & Measures": 45,
  Probability: 11,
  Statistics: 18,
};

const errors = [];
const fail = (m) => errors.push(m);

/* 1 — exactly 6 strands present, all recognised. */
const manifestStrands = Array.from(new Set(gcseManifest.map((t) => t.strand)));
if (manifestStrands.length !== 6) fail(`Expected 6 strands, found ${manifestStrands.length}: ${manifestStrands.join(", ")}`);
for (const s of manifestStrands) if (!STRANDS.includes(s)) fail(`Unknown strand "${s}"`);
for (const s of STRANDS) if (!manifestStrands.includes(s)) fail(`Missing strand "${s}"`);

/* Per-strand counts from the manifest. */
const perStrand = {};
for (const s of STRANDS) perStrand[s] = { topics: 0, subtopics: 0, Foundation: 0, Higher: 0, Both: 0 };
for (const t of gcseManifest) {
  const row = perStrand[t.strand];
  if (!row) continue;
  row.topics += 1;
  for (const sub of t.subtopics) {
    row.subtopics += 1;
    if (sub.tier === "Foundation") row.Foundation += 1;
    else if (sub.tier === "Higher") row.Higher += 1;
    else if (sub.tier === "Both") row.Both += 1;

    /* 3 — non-empty dfeRef. */
    if (!Array.isArray(sub.dfeRef) || sub.dfeRef.length === 0 || sub.dfeRef.some((r) => !r))
      fail(`Subtopic "${sub.title}" has empty dfeRef`);

    /* 6 — tier must be a valid, non-empty value. */
    if (!["Foundation", "Higher", "Both"].includes(sub.tier))
      fail(`Subtopic "${sub.title}" has invalid/empty tier "${sub.tier}"`);
  }
}

/* 2 — per-strand counts match baked EXPECTED, manifest↔topics consistent, ballpark floor. */
const topicsPerStrand = {};
for (const s of STRANDS) topicsPerStrand[s] = 0;
for (const t of gcseTopics) topicsPerStrand[t.category] = (topicsPerStrand[t.category] ?? 0) + 1;

for (const s of STRANDS) {
  const got = perStrand[s];
  const exp = EXPECTED[s];
  if (got.topics !== exp.topics) fail(`${s}: expected ${exp.topics} topics, got ${got.topics}`);
  if (got.subtopics !== exp.subtopics) fail(`${s}: expected ${exp.subtopics} subtopics, got ${got.subtopics}`);
  if (topicsPerStrand[s] !== got.subtopics)
    fail(`${s}: manifest has ${got.subtopics} subtopics but gcseTopics has ${topicsPerStrand[s]} leaves`);
  const floor = Math.floor(BALLPARK[s] * 0.7);
  if (got.subtopics < floor)
    fail(`${s}: ${got.subtopics} subtopics is below the ballpark floor ${floor} (DfE ≈${BALLPARK[s]}) — gross drop?`);
}

/* 4 — Wales tagging: "(Wales)" ⟺ boards === ["WJEC"]; everything else all five. */
for (const t of gcseTopics) {
  const isWales = t.title.includes("(Wales)");
  const boards = t.boards ?? [];
  if (isWales) {
    if (boards.length !== 1 || boards[0] !== "WJEC")
      fail(`Wales subtopic "${t.title}" must have boards === ["WJEC"], got [${boards.join(", ")}]`);
  } else {
    const allFive = ALL_BOARDS.every((b) => boards.includes(b)) && boards.length === ALL_BOARDS.length;
    if (!allFive)
      fail(`Non-Wales subtopic "${t.title}" must default to all five boards, got [${boards.join(", ")}]`);
  }
}

/* 5 — GCSE refs are globally unique CODES: distinct among GCSE rows, and
 * disjoint from the A-Level ref namespace. (We don't assert global A-Level
 * uniqueness — the legacy A-Level data reuses short refs like "s3"/"s4" across
 * categories, which predates and is out of scope for this task.) */
const aLevelRefs = new Set(topics.filter((t) => t.course !== "gcse-maths").map((t) => t.ref));
const gcseSeen = new Map();
for (const t of gcseTopics) {
  if (gcseSeen.has(t.ref)) fail(`Duplicate GCSE ref "${t.ref}" (${gcseSeen.get(t.ref)} and ${t.title})`);
  else gcseSeen.set(t.ref, t.title);
  if (aLevelRefs.has(t.ref)) fail(`GCSE ref "${t.ref}" (${t.title}) collides with an A-Level ref`);
}

/* ── Summary table ─────────────────────────────────────── */
const pad = (s, n) => String(s).padEnd(n);
const padL = (s, n) => String(s).padStart(n);
console.log("\nGCSE Mathematics taxonomy — summary\n");
console.log(pad("Strand", 38) + padL("Topics", 8) + padL("Subs", 7) + padL("F", 5) + padL("H", 5) + padL("Both", 6));
console.log("─".repeat(69));
let tT = 0, tS = 0, tF = 0, tH = 0, tB = 0;
for (const s of STRANDS) {
  const r = perStrand[s];
  tT += r.topics; tS += r.subtopics; tF += r.Foundation; tH += r.Higher; tB += r.Both;
  console.log(pad(s, 38) + padL(r.topics, 8) + padL(r.subtopics, 7) + padL(r.Foundation, 5) + padL(r.Higher, 5) + padL(r.Both, 6));
}
console.log("─".repeat(69));
console.log(pad("TOTAL", 38) + padL(tT, 8) + padL(tS, 7) + padL(tF, 5) + padL(tH, 5) + padL(tB, 6));
console.log(`\nGCSE leaves merged into global topic list: ${gcseTopics.length}  (total topics: ${topics.length})`);

if (errors.length) {
  console.error(`\n✗ verify-gcse FAILED with ${errors.length} error(s):`);
  for (const e of errors) console.error("  • " + e);
  process.exit(1);
}
console.log("\n✓ verify-gcse passed — all assertions hold.\n");
