/* Regenerate lib/data/summaries.generated.json from the in-memory question bank.
 * Run after adding/removing questions:  node scripts/gen-summaries.js
 *
 * These are slim, workedSolution-free question summaries, grouped by topicRef —
 * the exact payload the /api/questions browse/list path serves. Precomputing
 * them lets that path answer WITHOUT importing the ~24MB question bank (which
 * costs ~14s on a cold server / dev recompile), so browsing loads fast.
 *
 * Uses an on-the-fly TS transpile loader (no ts-node needed). */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

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

const { questions } = load("@/lib/data/questions", process.cwd());
const { toSummary } = load("@/lib/data/questionSummary", process.cwd());

// Group slim summaries by topicRef, preserving the bank's (sorted) order.
const byRef = {};
for (const q of questions) {
  (byRef[q.topicRef] ??= []).push(toSummary(q));
}

fs.writeFileSync("lib/data/summaries.generated.json", JSON.stringify(byRef));
const topics = Object.keys(byRef).length;
const total = questions.length;
console.log(`wrote lib/data/summaries.generated.json — ${total} summaries across ${topics} topicRefs`);
