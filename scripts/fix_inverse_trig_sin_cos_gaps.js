/*
 * Second smoothness pass for the Inverse Trigonometric Functions bank (y2tf9).
 *
 * Some diagrams draw a faint full "y = sin x" / "y = cos x" curve with its
 * principal branch highlighted as a SEPARATE curve. To avoid double-drawing,
 * the full curve was generated with the principal interval omitted — but it is
 * a single polyline, so CurveDiagram joins the two ends with a straight chord
 * that slashes across the middle of the graph.
 *
 * Fix: any numeric curve whose samples all lie on sin (or cos) AND that contains
 * an interior x-gap is rebuilt as the full, densely-sampled continuous curve over
 * its own [x0, xL]. The highlighted principal-branch curves have NO gap, so they
 * are left exactly as they are (and still overlay on top).
 *
 * Run:  node scripts/fix_inverse_trig_sin_cos_gaps.js [--dry]
 */
const fs = require('fs');
const path = require('path');

const FILE = path.resolve(
  __dirname,
  '../lib/data/questions/Year_2_A_Level_Maths/Trigonometric_Functions/y2tf9_inverse_trig_functions.ts'
);
const DRY = process.argv.includes('--dry');
const src = fs.readFileSync(FILE, 'utf8');

const fmt = (v) => {
  const r = Math.round(v * 1e4) / 1e4;
  return Number.isInteger(r) ? String(r) : String(parseFloat(r.toFixed(4)));
};
const fmtPts = (pts) => '[ ' + pts.map(([x, y]) => `[ ${fmt(x)}, ${fmt(y)} ]`).join(', ') + ' ]';

function fits(pts, fn) {
  return pts.every(([x, y]) => Math.abs(y - fn(x)) < 0.03);
}
function hasInteriorGap(pts) {
  const dxs = [];
  for (let i = 1; i < pts.length; i++) dxs.push(Math.abs(pts[i][0] - pts[i - 1][0]));
  const sorted = [...dxs].sort((a, b) => a - b);
  const median = sorted[sorted.length >> 1] || 0;
  return median > 0 && Math.max(...dxs) > 5 * median;
}
function rebuild(pts, fn) {
  const x0 = pts[0][0];
  const xL = pts[pts.length - 1][0];
  const n = Math.max(pts.length, Math.ceil(Math.abs(xL - x0) / 0.06) + 1);
  const out = [];
  for (let i = 0; i < n; i++) {
    const x = x0 + ((xL - x0) * i) / (n - 1);
    out.push([x, fn(x)]);
  }
  return out;
}

const edits = [];
let from = 0;
while (true) {
  const i = src.indexOf('points: [', from);
  if (i < 0) break;
  const open = src.indexOf('[', i + 8);
  let depth = 0, j = open;
  for (; j < src.length; j++) {
    if (src[j] === '[') depth++;
    else if (src[j] === ']') { depth--; if (depth === 0) break; }
  }
  from = j + 1;
  let pts;
  try { pts = JSON.parse(src.slice(open, j + 1)); } catch { continue; }
  if (!Array.isArray(pts) || !Array.isArray(pts[0]) || pts.length < 6) continue;
  if (!hasInteriorGap(pts)) continue;
  let fn = null, name = null;
  if (fits(pts, Math.sin)) { fn = Math.sin; name = 'sin'; }
  else if (fits(pts, Math.cos)) { fn = Math.cos; name = 'cos'; }
  if (!fn) continue;
  const replacement = fmtPts(rebuild(pts, fn));
  edits.push({ open, end: j + 1, name, before: pts.length, replacement });
}

console.log(`Found ${edits.length} gapped sin/cos curve(s):`);
for (const e of edits) console.log(`  ${e.name}: ${e.before} pts (gapped) -> rebuilt continuous`);

if (DRY) { console.log('(dry run — no changes written)'); process.exit(0); }
if (!edits.length) { console.log('Nothing to do.'); process.exit(0); }

let out = src;
for (const e of edits.sort((a, b) => b.open - a.open)) {
  out = out.slice(0, e.open) + e.replacement + out.slice(e.end);
}
fs.writeFileSync(FILE, out, 'utf8');
console.log(`Wrote ${FILE}`);
