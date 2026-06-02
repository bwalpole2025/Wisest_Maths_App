/* Generates Derivatives_and_Graphs.tex from d4_derivatives_and_graphs.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Differentiation/d4_derivatives_and_graphs.ts");
const OUT = path.join(__dirname, "..", "Derivatives_and_Graphs.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const CURVE = "blue!70!black", INC = "green!55!black", DEC = "red!70!black", PT = "red!75!black";
const R = Math.sqrt, PIc = Math.PI;
const stat = (f, win, pts, lab) => ({ cs: [{ fn: f }], win, pts, xlabel: lab && lab[0], ylabel: lab && lab[1] });
const incdec = (f, fp, bounds, win, lab) => ({ cs: [{ fn: f }], mono: { fp, bounds }, win, pts: bounds.map((b) => [b, f(b), "", "above"]), xlabel: lab && lab[0], ylabel: lab && lab[1] });

const D = {
  // monotonicity-coloured (increasing/decreasing interval questions)
  "d4-007": incdec((x) => x ** 3 + 5 * x + 2, (x) => 3 * x * x + 5, [], [-2, 2, -15, 20]),
  "d4-008": incdec((x) => x ** 3 + x, (x) => 3 * x * x + 1, [], [-2, 2, -12, 12]),
  "d4-010": incdec((x) => x * x - 6 * x + 5, (x) => 2 * x - 6, [3], [-1, 7, -6, 8]),
  "d4-011": incdec((x) => x * x + 4 * x - 3, (x) => 2 * x + 4, [-2], [-6, 3, -8, 8]),
  "d4-012": incdec((x) => x ** 3 - 3 * x * x - 9 * x + 2, (x) => 3 * x * x - 6 * x - 9, [-1, 3], [-4, 5, -30, 15]),
  "d4-013": incdec((x) => 2 * x ** 3 - 3 * x * x - 36 * x + 5, (x) => 6 * x * x - 6 * x - 36, [-2, 3], [-4, 5, -70, 70]),
  "d4-014": incdec((x) => x ** 3 + 3 * x * x + 3 * x + 5, (x) => 3 * (x + 1) ** 2, [-1], [-4, 2, -5, 15]),
  "d4-015": incdec((x) => x ** 3 - 12 * x + 1, (x) => 3 * x * x - 12, [-2, 2], [-4, 4, -20, 20]),
  "d4-016": incdec((x) => 4 + 6 * x - x * x, (x) => 6 - 2 * x, [3], [-2, 8, -15, 15]),
  "d4-017": incdec((x) => x ** 3 - 6 * x * x + 15 * x - 7, (x) => 3 * x * x - 12 * x + 15, [], [-1, 5, -15, 20]),
  "d4-018": incdec((x) => 3 - 4 * x - 2 * x * x, (x) => -4 - 4 * x, [-1], [-4, 2, -20, 8]),
  "d4-022": incdec((x) => x ** 3 + 2 * x * x - 4 * x + 1, (x) => 3 * x * x + 4 * x - 4, [-2, 2 / 3], [-4, 3, -10, 15]),
  "d4-028": incdec((x) => x ** 3 - 6 * x * x + 9 * x + 4, (x) => 3 * x * x - 12 * x + 9, [1, 3], [-1, 5, -2, 12]),
  "d4-030": incdec((x) => 5 - 3 * x, () => -3, [], [-2, 4, -5, 12]),
  "d4-043": incdec((x) => x ** 4 - 2 * x * x, (x) => 4 * x ** 3 - 4 * x, [-1, 0, 1], [-2, 2, -2, 5]),
  "d4-044": incdec((x) => x ** 3 - 12 * x, (x) => 3 * x * x - 12, [-2, 2], [-4, 4, -20, 20]),
  "d4-045": incdec((x) => x ** 4 - 4 * x ** 3, (x) => 4 * x ** 3 - 12 * x * x, [0, 3], [-1, 4, -30, 15]),
  "d4-046": incdec((x) => x + 4 / x, (x) => 1 - 4 / (x * x), [2], [0, 8, 0, 12]),
  "d4-047": incdec((x) => x ** 3 / 3 - 2 * x * x + 5 * x + 1, (x) => x * x - 4 * x + 5, [], [-1, 6, -2, 20]),
  "d4-048": incdec((x) => x ** 3 - 3 * x * x - 24 * x, (x) => 3 * x * x - 6 * x - 24, [-2, 4], [-5, 7, -80, 60]),
  // curve + classified stationary points
  "d4-001": stat((x) => x * x - 10 * x + 3, [0, 10, -25, 10], [[5, -22, "min $(5,-22)$", "below"]]),
  "d4-002": stat((x) => x ** 3 - 3 * x * x - 24 * x + 1, [-5, 7, -90, 40], [[-2, 29, "max $(-2,29)$", "above"], [4, -79, "min $(4,-79)$", "below"]]),
  "d4-003": stat((x) => 2 * x ** 3 - 9 * x * x + 12 * x - 3, [-1, 4, -5, 8], [[1, 2, "max $(1,2)$", "above"], [2, 1, "min $(2,1)$", "below right"]]),
  "d4-004": stat((x) => -x * x + 8 * x - 10, [-1, 9, -6, 8], [[4, 6, "max $(4,6)$", "above"]]),
  "d4-005": stat((x) => x ** 3 + 3 * x * x - 45 * x + 7, [-9, 6, -100, 200], [[-5, 182, "max $(-5,182)$", "above"], [3, -74, "min $(3,-74)$", "below"]]),
  "d4-006": stat((x) => x * x + 4 * x + 9, [-7, 3, -2, 20], [[-2, 5, "min $(-2,5)$", "below"]]),
  "d4-009": stat((x) => x ** 4 - 8 * x * x + 5, [-3, 3, -15, 10], [[0, 5, "max $(0,5)$", "above"], [2, -11, "min", "below"], [-2, -11, "min", "below"]]),
  "d4-019": stat((x) => x ** 3 - 3 * x * x, [-1, 4, -6, 4], [[0, 0, "max $(0,0)$", "above left"], [2, -4, "min $(2,-4)$", "below"], [3, 0, "$(3,0)$", "above right"]]),
  "d4-020": stat((x) => x ** 3 - 4 * x, [-3, 3, -6, 6], [[1.155, -3.08, "min", "below"], [-1.155, 3.08, "max", "above"], [-2, 0, "$-2$", "below"], [2, 0, "$2$", "below"]]),
  "d4-021": stat((x) => x ** 3 + 3 * x * x, [-4, 2, -2, 6], [[-2, 4, "max $(-2,4)$", "above"], [0, 0, "min $(0,0)$", "below right"], [-3, 0, "$-3$", "below left"]]),
  "d4-023": stat((x) => 2.5 * (x - 2) ** 2 - 3, [-1, 5, -5, 8], [[2, -3, "min $(2,-3)$", "below"]]),
  "d4-024": stat((x) => x ** 3 - x * x - x + 5, [-2, 3, -2, 8], [[1, 4, "stationary $(1,4)$", "above right"]]),
  "d4-025": stat((x) => 3 * x * x - x ** 3, [-2, 4, -10, 12], [[0, 0, "min $(0,0)$", "below right"], [2, 4, "max $(2,4)$", "above"]]),
  "d4-026": stat((x) => x * x + 16 / x, [0, 6, 0, 30], [[2, 12, "min $(2,12)$", "above right"]]),
  "d4-027": stat((x) => 5 * x ** 4 - 4 * x ** 5, [-0.7, 1.7, -2, 2], [[0, 0, "min $(0,0)$", "below right"], [1, 1, "max $(1,1)$", "above"]]),
  "d4-029": stat((x) => x ** 3 - 3 * x + 2, [-3, 3, -2, 6], [[-1, 4, "max $(-1,4)$", "above"], [1, 0, "min $(1,0)$", "below right"], [-2, 0, "$-2$", "below left"]]),
  "d4-031": stat((x) => x ** 3 - 6 * x * x + 9 * x - 2, [-1, 5, -5, 5], [[1, 2, "max $(1,2)$", "above"], [3, -2, "min $(3,-2)$", "below"]]),
  "d4-032": stat((x) => x ** 3 + 6 * x * x + 9 * x, [-5, 1, -6, 4], [[-3, 0, "max $(-3,0)$", "above left"], [-1, -4, "min $(-1,-4)$", "below"]]),
  "d4-033": stat((x) => x ** 4 - 4 * x ** 3 + 4, [-1, 4, -30, 12], [[0, 4, "infl $(0,4)$", "above left"], [3, -23, "min $(3,-23)$", "below"]]),
  "d4-034": stat((x) => x ** 3 - 9 * x * x + 27 * x, [-1, 6, -5, 45], [[3, 27, "stationary inflection $(3,27)$", "above left"]]),
  "d4-035": stat((x) => x ** 3 - 9 * x * x + 24 * x + 10, [0, 6, 0, 40], [[2, 30, "max $(2,30)$", "above"], [4, 26, "min $(4,26)$", "below"]], ["x", "C"]),
  "d4-036": stat((x) => x ** 3 - 3 * x * x - 9 * x + 1, [-4, 5, -30, 15], [[-1, 6, "max $(-1,6)$", "above"], [3, -26, "min $(3,-26)$", "below"]]),
  "d4-037": stat((x) => x ** 3 + 3 * x * x - 24 * x + 5, [-6, 4, -30, 100], [[-4, 85, "max $(-4,85)$", "above"], [2, -23, "min $(2,-23)$", "below"]]),
  "d4-038": stat((x) => 2 * x ** 3 - 3 * x * x + 1, [-1, 2, -2, 4], [[0, 1, "max $(0,1)$", "above"], [1, 0, "min $(1,0)$", "below right"]]),
  "d4-039": stat((x) => 3 * x ** 4 - 8 * x ** 3 + 5, [-1, 3, -15, 12], [[0, 5, "infl $(0,5)$", "above left"], [2, -11, "min $(2,-11)$", "below"]]),
  "d4-040": stat((x) => x ** 3 - 6 * x * x + 12 * x - 3, [-1, 5, -5, 15], [[2, 5, "stationary inflection $(2,5)$", "above left"]]),
  "d4-041": stat((x) => x * (x - 4) ** 2, [-1, 5, -2, 12], [[4 / 3, 256 / 27, "max", "above"], [4, 0, "min $(4,0)$", "below right"]]),
  "d4-042": stat((x) => x ** 3 - 3 * x * x + 3 * x + 2, [-1, 4, -2, 8], [[1, 3, "stationary inflection $(1,3)$", "above left"]]),
  "d4-049": stat((x) => x ** 3 - 6 * x * x + 9 * x, [-1, 5, -2, 6], [[1, 4, "max $(1,4)$", "above"], [3, 0, "min $(3,0)$", "below right"]]),
  "d4-050": stat((x) => -(x ** 3) + 6 * x * x - 9 * x, [-1, 5, -6, 4], [[1, -4, "min $(1,-4)$", "below"], [3, 0, "max $(3,0)$", "above right"]]),
  "d4-051": stat((x) => x ** 4 - 4 * x * x + 3, [-2.5, 2.5, -2, 6], [[0, 3, "max $(0,3)$", "above"], [R(2), -1, "min", "below"], [-R(2), -1, "min", "below"]]),
  "d4-052": stat((x) => x ** 3 - 3 * x * x + 4, [-3, 4, -2, 8], [[0, 4, "max $(0,4)$", "above"], [2, 0, "min $(2,0)$", "below right"], [-1, 0, "$-1$", "below left"]]),
  "d4-053": stat((x) => x ** 4 - 2 * x * x, [-2, 2, -2, 4], [[0, 0, "max $(0,0)$", "above"], [1, -1, "min", "below"], [-1, -1, "min", "below"]]),
  "d4-054": stat((x) => x ** 3 - 12 * x + 16, [-4, 4, -5, 40], [[-2, 32, "max $(-2,32)$", "above"], [2, 0, "min $(2,0)$", "below right"], [0, 16, "$(0,16)$", "right"]]),
  "d4-055": stat((x) => x ** 3 + 0.5 * x * x - 2 * x, [-3, 3, -5, 5], [[-1, 1.5, "stationary $x{=}-1$", "above left"]]),
  "d4-056": stat((x) => 2 * x ** 3 - 6 * x, [-3, 3, -6, 6], [[-1, 4, "max $(-1,4)$", "above"], [1, -4, "min $(1,-4)$", "below"]]),
  "d4-057": stat((x) => x ** 3 - 6 * x * x + 9 * x + 5, [-1, 5, 0, 12], [[1, 9, "max $(1,9)$", "above"], [3, 5, "min $(3,5)$", "below"]]),
  "d4-058": stat((x) => x * x + 16 / x, [0, 6, 0, 30], [[2, 12, "min $(2,12)$", "above right"]]),
  "d4-059": stat((x) => x ** 3 - x * x - 8 * x + 3, [-4, 4, -15, 15], [[2, -9, "stationary $(2,-9)$", "below"]]),
  "d4-060": stat((x) => x ** 4 - 8 * x * x + 13, [-3, 3, -5, 15], [[0, 13, "max $(0,13)$", "above"], [2, -3, "min", "below"], [-2, -3, "min", "below"]]),
  "d4-061": stat((x) => 20 * x - x * x, [0, 20, 0, 120], [[10, 100, "max $(10,100)$", "above"]], ["x", "A"]),
  "d4-062": stat((x) => 2 * PIc * x * x + 1000 / x, [0, 9, 0, 800], [[4.301, 348.7, "min", "above right"]], ["r", "S"]),
  "d4-063": stat((x) => 120 * x - 2 * x * x, [0, 60, 0, 2000], [[30, 1800, "max $(30,1800)$", "above"]], ["x", "A"]),
  "d4-064": stat((x) => 40 * x - 5 * x * x, [0, 8, 0, 90], [[4, 80, "max $(4,80)$", "above"]], ["t", "h"]),
  "d4-065": stat((x) => x * (20 - 2 * x) * (12 - 2 * x), [0, 6, 0, 300], [[2.43, 262.7, "max", "above"]], ["x", "V"]),
  "d4-066": stat((x) => x ** 3 - 3 * x * x + 4, [-2, 4, -2, 8], [[0, 4, "max $(0,4)$", "above"], [2, 0, "min $(2,0)$", "below right"]]),
  "d4-067": stat((x) => x ** 3 / 3 - 1.5 * x * x + 2 * x + 1, [-1, 4, 0, 4], [[1, 11 / 6, "max", "above"], [2, 5 / 3, "min", "below"]]),
  "d4-068": stat((x) => x ** 4 - 8 * x * x + 16, [-3, 3, -2, 20], [[0, 16, "max $(0,16)$", "above"], [2, 0, "min $(2,0)$", "below right"], [-2, 0, "min $(-2,0)$", "below left"]]),
  "d4-069": stat((x) => 2 * x ** 3 - 9 * x * x + 12 * x - 4, [-1, 4, -6, 6], [[1, 1, "max $(1,1)$", "above"], [2, 0, "min $(2,0)$", "below right"], [0, -4, "$(0,-4)$", "left"]]),
  "d4-070": stat((x) => 0.5 * x ** 3 - 4.5 * x * x + 12 * x, [0, 8, 0, 70], [[2, 10, "local max", "above"], [4, 8, "local min", "above"], [8, 64, "$(8,64)$", "left"], [0, 0, "$O$", "below right"]], ["t", "v"]),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/→/g, "\\to ").replace(/−/g, "-").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/£/g, "\\pounds ").replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£²³—→−]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/−/g, "$-$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@").replace(/\\,/g, "@TS@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ").replace(/@TS@/g, "\\,");
function prose(s0) {
  const s = protect(s0);
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last)); return restore(o);
}
function ans(s0) {
  const s = protect(s0);
  if (s.includes("\\(")) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += escTxt(s.slice(last)); return restore(o);
  }
  return /[\\^_=]/.test(s0) ? "\\(\\displaystyle " + ctl(s0) + "\\)" : restore(escTxt(s));
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const t = r / 8; for (const c of [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000]) if (c >= t) return c; return 2000; }

function graph(spec) {
  const CW = 8.6, CH = 5.8;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span, cl = (y) => Math.max(ylo, Math.min(yhi, y));
  const sampleSeg = (fn, a, b, col) => {
    const N = Math.max(20, Math.round(180 * (b - a) / (Xb - Xa))), pp = [];
    for (let i = 0; i <= N; i++) { const x = a + (b - a) * (i / N); let y = fn(x); if (!isFinite(y)) continue; pp.push(`(${f(px(x))},${f(py(cl(y)))})`); }
    return pp.length > 1 ? `\\draw[${col},thick] ${pp.join(" -- ")};\n` : "";
  };
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  if (spec.mono) {
    const fn = spec.cs[0].fn, fp = spec.mono.fp;
    const bnds = spec.mono.bounds.filter((b) => b > Xa && b < Xb).sort((a, b) => a - b);
    let lo = Xa; const segs = [];
    for (const b of bnds) { segs.push([lo, b]); lo = b; } segs.push([lo, Xb]);
    segs.forEach(([a, b]) => { const mid = (a + b) / 2; const col = fp(mid) >= 0 ? INC : DEC; t += sampleSeg(fn, a, b, col); });
  } else {
    spec.cs.forEach((c) => { t += sampleSeg(c.fn, c.dom ? c.dom[0] : Xa, c.dom ? c.dom[1] : Xb, c.color || CURVE); });
  }
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)});\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))});\n`; }
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PT}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.8] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
  t += "\\end{tikzpicture}";
  return wrap(t);
}

let L = `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{textcomp}
\\usepackage[a4paper,margin=2.1cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{graphicx}
\\usepackage{tikz}
\\usetikzlibrary{arrows.meta}
\\usepackage{xcolor}
\\usepackage{mdframed}
\\usepackage[colorlinks=true,linkcolor=blue!60!black]{hyperref}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{6pt}

\\newcommand{\\question}[1]{\\par\\medskip\\noindent\\textbf{#1}\\par}
\\newmdenv[linecolor=green!45!black,linewidth=0.8pt,backgroundcolor=green!4,
  innertopmargin=4pt,innerbottommargin=4pt,skipabove=6pt,skipbelow=6pt]{answerbox}

\\title{\\textbf{Derivatives and Graphs}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Differentiation (ref \\texttt{d4})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Derivatives and Graphs} questions, each with a fully
worked solution and a TikZ sketch: the curve with its \\textbf{stationary points} marked and classified
(max / min / point of inflection) for the stationary-point, sketching, and optimisation questions; and the
curve drawn in \\textcolor{green!55!black}{\\textbf{green where it is increasing}} and
\\textcolor{red!70!black}{\\textbf{red where it is decreasing}} for the increasing/decreasing questions.
\\tableofcontents
\\bigskip
\\hrule
`;

questions.forEach((q) => {
  L += `\n\\section*{${q.topicTitle || q.id}\\quad\\small\\texttt{(${q.id})}}\n`;
  L += `\\addcontentsline{toc}{section}{${q.topicTitle || q.id} (${q.id})}\n`;
  L += `\\textit{Difficulty: ${q.difficulty} \\quad\\textbar\\quad Marks: ${q.marks}}\n\n`;
  let qt = prose(q.questionText.trim()).replace(/\r?\n[ \t]*\r?\n/g, " \\\\[3pt] ").replace(/\r?\n/g, " ");
  L += `\\question{${qt}}\n\n`;
  L += `\\textbf{Worked solution.}\n\n`;
  q.workedSolution.steps.forEach((st) => {
    const n = q.workedSolution.steps.length > 1 ? `Step ${st.stepNumber}: ` : "";
    if (st.description && typeof st.description === "string") L += `\\textit{${n}${prose(st.description)}}\n`;
    if (st.workingLatex && typeof st.workingLatex === "string") L += `\\[\\begin{gathered}\n${ctl(st.workingLatex)}\n\\end{gathered}\\]\n`;
    if (st.explanation && typeof st.explanation === "string") L += `${prose(st.explanation)}\n\n`;
  });
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad ${ans(q.workedSolution.finalAnswer)}\n\\end{answerbox}\n`;
  if (q.workedSolution.commonMistakes && q.workedSolution.commonMistakes.length)
    L += `\\textbf{Common mistake.} ` + q.workedSolution.commonMistakes.map(prose).join(" ") + `\n\n`;
  if (D[q.id]) {
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${graph(D[q.id])}\n\\end{center}\n`;
    const m = D[q.id].mono ? "Curve coloured green where increasing, red where decreasing." : "Curve with classified stationary points marked.";
    L += `\\small ${m}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
