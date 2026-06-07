// One-off codemod: stamp `answerType` (+ answerMeta for exactValue) onto every
// question object in the static banks. AST-driven (TypeScript compiler API) so it
// is format-preserving and works on both the single-quote A-Level style and the
// JSON-stringified GCSE style. Idempotent: re-running is a no-op.
//
//   Default rule: a form-sensitive tag → "exactValue" (+ answerMeta.exactForm:true);
//   everything else → "expression".
//
// Usage: node scripts/codemod-answer-type.mjs
import ts from "typescript";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = "lib/data/questions";

// Mirror lib/services/symbolicGrading.ts FORM_SENSITIVE_TAGS.
const FORM_SENSITIVE = new Set([
  "simplify", "simplification", "surd form", "single fraction", "partial fractions",
  "index form", "lowest terms", "rationalise", "rationalising",
  "fully factorise", "fully factorize", "factorise", "factorize",
]);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".ts") && name !== "index.ts" && !name.endsWith(".test.ts")) out.push(full);
  }
  return out;
}

function findQuestionsArray(sf) {
  let arr = null;
  sf.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const decl of node.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && decl.name.text === "questions" &&
          decl.initializer && ts.isArrayLiteralExpression(decl.initializer)) {
        arr = decl.initializer;
      }
    }
  });
  return arr;
}

function prop(obj, name) {
  return obj.properties.find(
    (p) => ts.isPropertyAssignment(p) &&
      ((ts.isIdentifier(p.name) && p.name.text === name) ||
       (ts.isStringLiteral(p.name) && p.name.text === name)),
  );
}

function tagsOf(obj) {
  const t = prop(obj, "tags");
  if (!t || !ts.isArrayLiteralExpression(t.initializer)) return [];
  return t.initializer.elements
    .filter(ts.isStringLiteralLike)
    .map((e) => e.text.toLowerCase());
}

let totalFiles = 0, changedFiles = 0, expr = 0, exact = 0, skipped = 0;

for (const file of walk(ROOT)) {
  const src = readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const arr = findQuestionsArray(sf);
  if (!arr) continue;
  totalFiles++;

  const edits = [];
  for (const el of arr.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    if (prop(el, "answerType")) { skipped++; continue; } // idempotent
    const diff = prop(el, "difficulty");
    if (!diff) { console.warn(`  ! no difficulty in an object in ${file}`); continue; }

    const jsonStyle = ts.isStringLiteral(diff.name);
    const valText = diff.initializer.getText(sf);
    const quote = valText[0] === '"' ? '"' : "'";
    const k = (n) => (jsonStyle ? `"${n}"` : n);
    const v = (val) => `${quote}${val}${quote}`;

    const isExact = tagsOf(el).some((tag) => FORM_SENSITIVE.has(tag));
    const answerType = isExact ? "exactValue" : "expression";
    if (isExact) exact++; else expr++;

    // Leading whitespace of difficulty's line. If `difficulty` is the first token
    // on its line the object is multi-line → put the new prop on its own line;
    // otherwise (single-line object) keep it inline with a single space.
    const start = diff.getStart(sf);
    const lineStart = src.lastIndexOf("\n", start - 1) + 1;
    const indent = (src.slice(lineStart, start).match(/^[ \t]*/) || [""])[0];
    const firstOnLine = start === lineStart + indent.length;
    const sep = firstOnLine ? `\n${indent}` : " ";

    // insert after the comma that follows the difficulty property
    let p = diff.end;
    while (p < src.length && /[ \t]/.test(src[p])) p++;
    const hasComma = src[p] === ",";
    const at = hasComma ? p + 1 : diff.end;

    let ins = `${hasComma ? "" : ","}${sep}${k("answerType")}: ${v(answerType)},`;
    if (isExact) ins += `${sep}${k("answerMeta")}: { ${k("exactForm")}: true },`;
    edits.push({ at, ins });
  }

  if (edits.length === 0) continue;
  edits.sort((a, b) => b.at - a.at); // apply back-to-front
  let out = src;
  for (const e of edits) out = out.slice(0, e.at) + e.ins + out.slice(e.at);
  writeFileSync(file, out);
  changedFiles++;
}

console.log(
  `codemod: scanned ${totalFiles} bank files, changed ${changedFiles}; ` +
  `stamped expression=${expr}, exactValue=${exact}, already-had=${skipped}`,
);
