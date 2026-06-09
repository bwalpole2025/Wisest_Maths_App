/* Regenerate lib/data/poolSizes.generated.ts from the in-memory question bank.
 * Run after adding/removing questions:  node scripts/gen-pool-sizes.js
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
  // `server-only`/`client-only` are Next.js build-time markers with no runtime
  // module; stub them so this plain-Node loader can traverse server modules.
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

const { poolSizes } = load("@/lib/services/quizGenerator", process.cwd());
const data = {};
for (const c of ["a-level-maths", "a-level-further-maths", "gcse-maths", "undergrad-maths"]) data[c] = poolSizes(c);

const header =
  "// AUTO-GENERATED — do not edit by hand.\n" +
  "// Per-course question counts by topicRef and difficulty, precomputed from the\n" +
  "// in-memory bank so the Quiz Builder shows availability synchronously without\n" +
  "// importing the whole bank into the client or making an API call.\n" +
  "// Regenerate with: node scripts/gen-pool-sizes.js  (after adding questions)\n\n" +
  'import type { QuestionDifficulty } from "@/lib/types";\n\n' +
  "export const POOL_SIZES: Record<string, Record<string, Record<QuestionDifficulty, number>>> =\n";

fs.writeFileSync("lib/data/poolSizes.generated.ts", header + JSON.stringify(data, null, 2) + ";\n");
console.log(
  "wrote lib/data/poolSizes.generated.ts —",
  Object.keys(data["a-level-maths"]).length,
  "maths refs,",
  Object.keys(data["a-level-further-maths"]).length,
  "further-maths refs,",
  Object.keys(data["gcse-maths"]).length,
  "gcse refs",
);
