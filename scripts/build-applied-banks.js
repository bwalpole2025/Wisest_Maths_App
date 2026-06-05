#!/usr/bin/env node
/*
 * Resumable orchestration harness for the Year 2 Applied (Statistics + Mechanics)
 * question-bank build.
 *
 * The content stages (generate / check / expand) are performed by Claude via
 * subagents — the checker/expander are Claude skills (SymPy-backed), not headless
 * CLIs — so this driver owns ORDERING, RESUMABILITY, MECHANICAL VERIFICATION and
 * the STATUS TABLE. Claude advances status after each stage with `--set`.
 *
 * Status lifecycle:  pending -> generated -> checked -> expanded -> done
 * Next stage:        pending=generate, generated=check, checked=expand,
 *                    expanded=recheck(->done)
 *
 * Usage:
 *   node scripts/build-applied-banks.js --status
 *   node scripts/build-applied-banks.js --next [--include-board-specific]
 *   node scripts/build-applied-banks.js --verify <code>
 *   node scripts/build-applied-banks.js --set <code> <status>
 *   node scripts/build-applied-banks.js --wire <code>        (add import+spread to questions/index.ts)
 * Filters (apply to --status/--next): --only <code> | --from <code> | --count <n> | --include-board-specific
 */
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const MANIFEST = path.join(__dirname, "applied-build-manifest.json");
const INDEX = path.join(ROOT, "lib/data/questions/index.ts");
const TIER_ORDER = { core: 0, emphasis: 1, "board-specific": 2 };
const NEXT_STAGE = { pending: "generate", generated: "check", checked: "expand", expanded: "recheck", done: null };

function loadManifest() {
  return JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
}
function saveManifest(m) {
  fs.writeFileSync(MANIFEST, JSON.stringify(m, null, 2) + "\n");
}

function parseArgs(argv) {
  const a = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    if (t === "--include-board-specific") a.includeBoardSpecific = true;
    else if (t === "--status") a.status = true;
    else if (t === "--next") a.next = true;
    else if (t === "--only") a.only = argv[++i];
    else if (t === "--from") a.from = argv[++i];
    else if (t === "--count") a.count = parseInt(argv[++i], 10);
    else if (t === "--verify") a.verify = argv[++i];
    else if (t === "--set") { a.set = argv[++i]; a.setStatus = argv[++i]; }
    else if (t === "--wire") a.wire = argv[++i];
    else a._.push(t);
  }
  return a;
}

function ordered(m, a) {
  let subs = [...m.subtopics].sort((x, y) => TIER_ORDER[x.tier] - TIER_ORDER[y.tier]);
  if (!a.includeBoardSpecific) subs = subs.filter((s) => s.tier !== "board-specific");
  if (a.only) subs = subs.filter((s) => s.code === a.only);
  if (a.from) {
    const i = subs.findIndex((s) => s.code === a.from);
    if (i >= 0) subs = subs.slice(i);
  }
  if (a.count) subs = subs.slice(0, a.count);
  return subs;
}

// ---- mechanical verification of a generated bank file ----------------------
function countBank(file, code) {
  if (!fs.existsSync(file)) return null;
  const t = fs.readFileSync(file, "utf8");
  const ids = [...t.matchAll(new RegExp(`["']?id["']?:\\s*["']${code}-\\d+["']`, "g"))].length;
  const bands = { Foundation: 0, Standard: 0, Challenge: 0 };
  for (const b of Object.keys(bands))
    bands[b] = [...t.matchAll(new RegExp(`["']?difficulty["']?:\\s*["']${b}["']`, "g"))].length;
  const mafs = [...t.matchAll(/:\s*`<Mafs/g)].length;
  return { ids, bands, mafs };
}
function isImported(code, file) {
  if (!fs.existsSync(INDEX)) return false;
  const t = fs.readFileSync(INDEX, "utf8");
  const rel = path.relative(path.dirname(INDEX), file).replace(/\.ts$/, "");
  return t.includes(`from "./${rel}"`) && new RegExp(`\\.\\.\\.${code}\\b`).test(t);
}
function tscFile(file) {
  try {
    cp.execSync(
      `npx --no-install tsc --noEmit --skipLibCheck --esModuleInterop --moduleResolution bundler --module esnext --target es2020 "${file}"`,
      { cwd: ROOT, stdio: "pipe" }
    );
    return { ok: true, out: "" };
  } catch (e) {
    const out = String(e.stdout || "") + String(e.stderr || "");
    const real = out.split("\n").filter((l) => /error TS/.test(l) && !/Cannot find module '@\/|Cannot use import/.test(l));
    return { ok: real.length === 0, out: real.slice(0, 8).join("\n") };
  }
}
function verify(sub) {
  const file = path.join(ROOT, sub.targetPath);
  const c = countBank(file, sub.code);
  const checks = [];
  checks.push(["file exists", !!c]);
  if (c) {
    const want = 71;
    checks.push([`question count = ${want}`, c.ids === want, `${c.ids}`]);
    const banded = c.bands.Foundation + c.bands.Standard + c.bands.Challenge;
    checks.push(["all three bands present", c.bands.Foundation > 0 && c.bands.Standard > 0 && c.bands.Challenge > 0,
      `F${c.bands.Foundation}/S${c.bands.Standard}/C${c.bands.Challenge}`]);
    checks.push(["bands cover every question", banded === c.ids, `${banded}/${c.ids}`]);
    if (sub.useDiagrams) checks.push(["has Mafs diagrams", c.mafs > 0, `${c.mafs} mafs fields`]);
    checks.push(["imported in questions/index.ts", isImported(sub.code, file)]);
    const ts = tscFile(file);
    checks.push(["tsc clean", ts.ok, ts.ok ? "" : ts.out]);
  }
  return checks;
}

// ---- auto-wire a finished bank into questions/index.ts ---------------------
function wire(sub) {
  const file = path.join(ROOT, sub.targetPath);
  if (!fs.existsSync(file)) throw new Error(`bank file missing: ${sub.targetPath}`);
  let t = fs.readFileSync(INDEX, "utf8");
  const rel = path.relative(path.dirname(INDEX), file).replace(/\.ts$/, "");
  const importLine = `import { questions as ${sub.code} } from "./${rel}";`;
  if (!t.includes(importLine)) {
    // insert after the last existing import line
    const lastImport = t.lastIndexOf("\nimport ");
    const eol = t.indexOf("\n", lastImport + 1);
    t = t.slice(0, eol + 1) + importLine + "\n" + t.slice(eol + 1);
  }
  if (!new RegExp(`\\.\\.\\.${sub.code}\\b`).test(t)) {
    // append spread on its own line before the closing of the questions array literal
    t = t.replace(/(\n\];\s*\n\s*\/\* Sort by topicRef)/, `\n  ...${sub.code},$1`);
  }
  fs.writeFileSync(INDEX, t);
  return importLine;
}

// ---- commands --------------------------------------------------------------
function printStatus(m, a) {
  const subs = ordered(m, a.only || a.from || a.count ? a : { includeBoardSpecific: true });
  const icon = { pending: "·", generated: "◐", checked: "◑", expanded: "◕", done: "✓" };
  console.log("\ncode   module      tier            boards          dia  status");
  console.log("──────────────────────────────────────────────────────────────────");
  for (const s of subs) {
    console.log(
      `${s.code.padEnd(6)} ${s.module.padEnd(11)} ${s.tier.padEnd(15)} ${String(s.boards).padEnd(15)} ` +
      `${(s.useDiagrams ? "yes" : "no").padEnd(4)} ${icon[s.status] || "?"} ${s.status}`
    );
  }
  const counts = subs.reduce((o, s) => ((o[s.status] = (o[s.status] || 0) + 1), o), {});
  console.log("──────────────────────────────────────────────────────────────────");
  console.log("totals:", JSON.stringify(counts), `(${subs.length} subtopics)`);
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  const m = loadManifest();

  if (a.set) {
    const sub = m.subtopics.find((s) => s.code === a.set);
    if (!sub) throw new Error(`unknown code: ${a.set}`);
    if (!(a.setStatus in NEXT_STAGE)) throw new Error(`invalid status: ${a.setStatus}`);
    sub.status = a.setStatus;
    saveManifest(m);
    console.log(`${a.set} -> ${a.setStatus}`);
    return;
  }
  if (a.wire) {
    const sub = m.subtopics.find((s) => s.code === a.wire);
    if (!sub) throw new Error(`unknown code: ${a.wire}`);
    console.log("wired:", wire(sub));
    return;
  }
  if (a.verify) {
    const sub = m.subtopics.find((s) => s.code === a.verify);
    if (!sub) throw new Error(`unknown code: ${a.verify}`);
    console.log(`\nVerify ${sub.code} (${sub.title}) — ${sub.targetPath}`);
    let allOk = true;
    for (const [name, ok, detail] of verify(sub)) {
      allOk = allOk && ok;
      console.log(`  ${ok ? "✓" : "✗"} ${name}${detail ? `  (${detail})` : ""}`);
    }
    console.log(allOk ? "\nVERIFY: PASS" : "\nVERIFY: FAIL");
    process.exitCode = allOk ? 0 : 1;
    return;
  }
  if (a.next) {
    const subs = ordered(m, a);
    const nextSub = subs.find((s) => s.status !== "done");
    if (!nextSub) { console.log("All selected subtopics are done. ✓"); return; }
    console.log(`next: ${nextSub.code} (${nextSub.module}, ${nextSub.tier}, boards=${nextSub.boards}, diagrams=${nextSub.useDiagrams})`);
    console.log(`stage: ${NEXT_STAGE[nextSub.status]}   (current status: ${nextSub.status})`);
    console.log(`title: ${nextSub.title}`);
    console.log(`path:  ${nextSub.targetPath}`);
    return;
  }
  // default: status table
  printStatus(m, a);
}

main();
