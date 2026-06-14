/* Regenerate lib/data/questions-full.generated.json from the in-memory bank.
 * Run after adding/removing questions:  node scripts/gen-questions-full.js
 *
 * These are the FULL questions (with workedSolution), grouped by topicRef — the
 * exact payload /api/questions serves for tutor/attempt/assessment views.
 * Precomputing them lets that route answer by reading ONE JSON file via fs,
 * WITHOUT importing the ~27MB question bank into its module graph. Importing the
 * bank makes the route's first (cold) compile ~3.6s in dev (1316 modules); the
 * fs path compiles like any slim route and parses the cached JSON once, so the
 * first full-question load drops well under 2s and every later one is ~30ms.
 *
 * Kept in sync with the bank by `npm run gen:data`. Mirrors gen-summaries.js.
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

// Group full questions by topicRef, preserving the bank's (sorted) order.
const byRef = {};
for (const q of questions) {
  (byRef[q.topicRef] ??= []).push(q);
}

fs.writeFileSync("lib/data/questions-full.generated.json", JSON.stringify(byRef));
const topics = Object.keys(byRef).length;
const total = questions.length;
console.log(`wrote lib/data/questions-full.generated.json — ${total} full questions across ${topics} topicRefs`);
