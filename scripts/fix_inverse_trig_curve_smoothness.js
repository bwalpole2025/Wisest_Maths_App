/*
 * Re-samples arcsin / arccos curves in the Inverse Trigonometric Functions bank
 * (y2tf9) so the steep, near-vertical-tangent regions at x = ±1 render smoothly.
 *
 * Why: the original point arrays are sampled uniformly in x. arcsin/arccos have
 * a vertical tangent at x = ±1, so uniform-x sampling leaves big gaps there; the
 * Catmull-Rom spline in CurveDiagram then overshoots into a small hook at the
 * tips. Sampling uniformly in the ANGLE (the output variable, since y = theta)
 * places points densely exactly where the curve is steep, giving a clean curve.
 *
 * Safe by construction: a curve is only rewritten if EVERY sample lies on
 * arcsin (or arccos) AND it actually reaches |x| >= 0.85. A straight y = x guide
 * line matches arcsin only near the origin, so it is never touched.
 *
 * Run:  node scripts/fix_inverse_trig_curve_smoothness.js          (apply)
 *       node scripts/fix_inverse_trig_curve_smoothness.js --dry    (report only)
 */
const fs = require('path') && require('fs');
const path = require('path');

const FILE = path.resolve(
  __dirname,
  '../lib/data/questions/Year_2_A_Level_Maths/Trigonometric_Functions/y2tf9_inverse_trig_functions.ts'
);
const DRY = process.argv.includes('--dry');

const src = fs.readFileSync(FILE, 'utf8');

// ---- helpers ---------------------------------------------------------------
const clamp1 = (x) => Math.max(-1, Math.min(1, x));
const TOL = 0.02;
const STEEP = 0.85; // must reach this |x| to count as the steep branch

// format a number the way the source file does: integers bare, else <=4 dp
const fmt = (v) => {
  const r = Math.round(v * 1e4) / 1e4;
  return Number.isInteger(r) ? String(r) : String(parseFloat(r.toFixed(4)));
};
const fmtPts = (pts) => '[ ' + pts.map(([x, y]) => `[ ${fmt(x)}, ${fmt(y)} ]`).join(', ') + ' ]';

function classify(pts) {
  if (pts.length < 8) return null;
  let okAsin = true, okAcos = true, reachAsin = false, reachAcos = false;
  for (const [x, y] of pts) {
    if (x < -1.001 || x > 1.001) { okAsin = okAcos = false; break; }
    const xc = clamp1(x);
    if (Math.abs(y - Math.asin(xc)) > TOL) okAsin = false;
    else if (Math.abs(x) >= STEEP) reachAsin = true;
    if (Math.abs(y - Math.acos(xc)) > TOL) okAcos = false;
    else if (Math.abs(x) >= STEEP) reachAcos = true;
  }
  if (okAsin && reachAsin) return 'arcsin';
  if (okAcos && reachAcos) return 'arccos';
  return null;
}

// resample uniformly in theta (= y) between the curve's existing endpoints
function resample(pts, kind) {
  const t0 = pts[0][1];
  const t1 = pts[pts.length - 1][1];
  const span = Math.abs(t1 - t0);
  const n = Math.max(pts.length, Math.ceil((span / Math.PI) * 120) + 1);
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = t0 + ((t1 - t0) * i) / (n - 1);
    const x = kind === 'arcsin' ? Math.sin(t) : Math.cos(t);
    out.push([x, t]);
  }
  return out;
}

// ---- walk every `points: [ ... ]` block, rewrite the matching ones ---------
const NEEDLE = 'points: [';
const edits = [];
let from = 0;
while (true) {
  const i = src.indexOf(NEEDLE, from);
  if (i < 0) break;
  const open = src.indexOf('[', i + NEEDLE.length - 1);
  let depth = 0, j = open;
  for (; j < src.length; j++) {
    if (src[j] === '[') depth++;
    else if (src[j] === ']') { depth--; if (depth === 0) break; }
  }
  const block = src.slice(open, j + 1);
  from = j + 1;
  let pts;
  try { pts = JSON.parse(block); } catch { continue; }
  if (!Array.isArray(pts) || !Array.isArray(pts[0])) continue;
  const kind = classify(pts);
  if (!kind) continue;
  const replacement = fmtPts(resample(pts, kind));
  edits.push({ open, end: j + 1, kind, before: pts.length, after: JSON.parse(replacement.replace(/\[ /g, '[').replace(/ \]/g, ']').replace(/ , /g, ',')).length, replacement });
}

console.log(`Found ${edits.length} arcsin/arccos curve(s) to resample:`);
for (const e of edits) console.log(`  ${e.kind}: ${e.before} -> ${e.after} pts`);

if (DRY) { console.log('(dry run — no changes written)'); process.exit(0); }
if (!edits.length) { console.log('Nothing to do.'); process.exit(0); }

// apply from the end so earlier offsets stay valid
let out = src;
for (const e of edits.sort((a, b) => b.open - a.open)) {
  out = out.slice(0, e.open) + e.replacement + out.slice(e.end);
}
fs.writeFileSync(FILE, out, 'utf8');
console.log(`Wrote ${FILE}`);
