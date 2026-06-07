// Blank procedural-narration `explanation` fields to "" per .claude/style.md rule 9.
// Usage: node scripts/trim-explanations.mjs <file> <keepLinesCsv>
// `keepLinesCsv` = 1-based line numbers of genuinely-subtle explanations to KEEP.
// Only single-line `explanation: '...'`/"..." entries are touched; multi-line or
// unmatched explanation lines are reported and left for manual review.
import { readFileSync, writeFileSync } from "node:fs";

const [file, keepCsv = ""] = process.argv.slice(2);
if (!file) {
  console.error("usage: trim-explanations.mjs <file> <keepLinesCsv>");
  process.exit(1);
}
const keep = new Set(keepCsv.split(",").map((s) => parseInt(s.trim(), 10)).filter(Boolean));

const lines = readFileSync(file, "utf8").split("\n");
const single = /^(\s*)explanation:\s*(["']).*\2(,?)\s*$/;
const looksLikeExplanation = /^\s*explanation:/;

let blanked = 0;
const skipped = [];
const kept = [];

const out = lines.map((line, i) => {
  const lineNo = i + 1;
  if (!looksLikeExplanation.test(line)) return line;
  if (keep.has(lineNo)) {
    kept.push(lineNo);
    return line;
  }
  const m = line.match(single);
  if (!m) {
    skipped.push(lineNo); // multi-line / unusual — leave for manual review
    return line;
  }
  if (/explanation:\s*(["'])\1/.test(line)) return line; // already empty
  blanked += 1;
  return `${m[1]}explanation: ""${m[3]}`;
});

writeFileSync(file, out.join("\n"));
console.log(`${file}: blanked=${blanked} kept=[${kept.join(",")}] skipped(multiline)=[${skipped.join(",")}]`);
