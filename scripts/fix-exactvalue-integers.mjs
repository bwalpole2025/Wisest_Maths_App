// One-off fix for the bank audit's 25 `notExactForm` findings: questions whose
// answer is a plain integer were mistyped as `exactValue` (the form-sensitive
// codemod heuristic over-applied it). Retype ONLY those ids to `numeric` and
// drop the now-meaningless `answerMeta: { exactForm: true }`.
//
// Surgical: edits only the listed ids, leaving genuinely form-sensitive
// exactValue questions in the same files untouched.
//
// Usage: node scripts/fix-exactvalue-integers.mjs
import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";

const FILES = [
  "lib/data/questions/GCSE_Maths/Number/gn06_prime_factorisation_in_index_form.ts",
  "lib/data/questions/GCSE_Maths/Number/gn12_equivalent_fractions_and_simplifying.ts",
  "lib/data/questions/Year_2_A_Level_Maths/Algebraic_Methods/y2am2_algebraic_fractions.ts",
];

const TARGETS = new Set([
  "gn06-019", "gn06-020", "gn06-034", "gn06-035", "gn06-040", "gn06-041", "gn06-042",
  "gn06-043", "gn06-044", "gn06-050", "gn06-051", "gn06-052", "gn06-057", "gn06-058",
  "gn06-059", "gn06-060", "gn06-061", "gn06-062", "gn06-063", "gn06-066", "gn06-067",
  "gn06-068", "gn12-049", "y2am2-001", "y2am2-025",
]);

function prop(obj, name) {
  return obj.properties.find(
    (p) =>
      ts.isPropertyAssignment(p) &&
      ((ts.isIdentifier(p.name) && p.name.text === name) ||
        (ts.isStringLiteral(p.name) && p.name.text === name)),
  );
}

let changed = 0;

for (const file of FILES) {
  const src = readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

  // collect the questions array
  let arr = null;
  sf.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const d of node.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.name.text === "questions" && d.initializer &&
          ts.isArrayLiteralExpression(d.initializer)) {
        arr = d.initializer;
      }
    }
  });
  if (!arr) continue;

  const edits = []; // { start, end, text }
  for (const el of arr.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    const idProp = prop(el, "id");
    if (!idProp || !ts.isStringLiteralLike(idProp.initializer)) continue;
    if (!TARGETS.has(idProp.initializer.text)) continue;

    // 1. answerType: "exactValue" -> "numeric" (preserve quote style)
    const at = prop(el, "answerType");
    if (at && ts.isStringLiteralLike(at.initializer)) {
      const q = at.initializer.getText(sf)[0]; // ' or "
      edits.push({ start: at.initializer.getStart(sf), end: at.initializer.end, text: `${q}numeric${q}` });
    }
    // 2. remove the whole `answerMeta: { exactForm: true },` line
    const am = prop(el, "answerMeta");
    if (am) {
      let start = am.getFullStart(); // includes leading newline + indent
      let end = am.end;
      if (src[end] === ",") end++; // consume trailing comma
      edits.push({ start, end, text: "" });
    }
    changed++;
  }

  if (edits.length === 0) continue;
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of edits) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  writeFileSync(file, out);
  console.log(`${file}: edited`);
}

console.log(`fixed ${changed} questions (expected 25)`);
