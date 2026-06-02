/* Generates Gradient_of_a_Curve.tex from d1_the_gradient_of_a_curve.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Differentiation/d1_the_gradient_of_a_curve.ts");
const OUT = path.join(__dirname, "..", "Gradient_of_a_Curve.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const CURVE = "blue!70!black", DERIV = "teal!70!black", TAN = "orange!85!black", CHORD = "red!75!black";
const C = (fn, color, label) => ({ fn, color: color || CURVE, label });
const T = (p, m) => ({ p, m });

// spec: {cs:[{fn,color,label}], tangents:[{p,m}], chords:[[[x,y],[x,y]]], pts:[[x,y,label,anchor]], win, xlabel,ylabel}
const D = {
  // chord -> tangent (limiting process)
  "d1-001": { cs: [C((x) => x * x)], chords: [[[2, 4], [3, 9]]], tangents: [T([2, 4], 4)], pts: [[2, 4, "$P$", "above left"], [3, 9, "$Q$", "right"]], win: [0, 4, -2, 12] },
  "d1-002": { cs: [C((x) => x * x)], chords: [[[3, 9], [4, 16]]], tangents: [T([3, 9], 6)], pts: [[3, 9, "$P$", "above left"], [4, 16, "$Q$", "right"]], win: [0, 5, -2, 20] },
  "d1-003": { cs: [C((x) => x ** 3)], chords: [[[2, 8], [3, 27]]], tangents: [T([2, 8], 12)], pts: [[2, 8, "$P$", "above left"], [3, 27, "$Q$", "right"]], win: [0, 3.4, -2, 30] },
  "d1-004": { cs: [C((x) => x * x + 3 * x)], chords: [[[1, 4], [2, 10]]], tangents: [T([1, 4], 5)], pts: [[1, 4, "$P$", "above left"], [2, 10, "$Q$", "right"]], win: [-1, 3, -3, 14] },
  "d1-005": { cs: [C((x) => x * x)], chords: [[[4, 16], [5, 25]]], tangents: [T([4, 16], 8)], pts: [[4, 16, "$P$", "above left"], [5, 25, "$Q$", "right"]], win: [1, 6, -2, 30] },
  "d1-036": { cs: [C((x) => x * x + x)], chords: [[[1, 2], [2, 6]]], tangents: [T([1, 2], 3)], pts: [[1, 2, "$P$", "above left"], [2, 6, "$Q$", "right"]], win: [-1, 3, -3, 10] },
  "d1-037": { cs: [C((x) => x ** 3 - x)], chords: [[[1, 0], [1.5, 2.875]]], tangents: [T([1, 0], 2)], pts: [[1, 0, "$P$", "below right"], [1.5, 2.875, "$Q$", "above left"]], win: [-1, 2.5, -3, 5] },
  "d1-038": { cs: [C((x) => 2 * x * x)], chords: [[[-1, 2], [0, 0]]], tangents: [T([-1, 2], -4)], pts: [[-1, 2, "$P$", "above right"], [0, 0, "$Q$", "below right"]], win: [-3, 1, -2, 12] },
  "d1-039": { cs: [C((x) => x * x)], chords: [[[4, 16], [5, 25]]], tangents: [T([4, 16], 8)], pts: [[4, 16, "$P$", "above left"], [5, 25, "$Q$", "right"]], win: [1, 6, -2, 30] },
  "d1-040": { cs: [C((x) => 3 - x * x)], chords: [[[2, -1], [3, -6]]], tangents: [T([2, -1], -4)], pts: [[2, -1, "$P$", "above right"], [3, -6, "$Q$", "below"]], win: [0, 4, -8, 5] },
  "d1-027": { cs: [C((x) => x * x)], chords: [[[1, 1], [2, 4]]], tangents: [T([1, 1], 2)], pts: [[1, 1, "$P$", "above left"], [2, 4, "$Q$", "right"]], win: [-1, 3, -2, 6] },
  "d1-067": { cs: [C((x) => x * x)], chords: [[[1, 1], [4, 16]]], tangents: [T([2.5, 6.25], 5)], pts: [[1, 1, "$A$", "above left"], [4, 16, "$B$", "right"], [2.5, 6.25, "mid", "below right"]], win: [-1, 5, -3, 20] },
  "d1-069": { cs: [C((x) => x * x)], chords: [[[1, 1], [3, 9]]], tangents: [T([1, 1], 2)], pts: [[1, 1, "$P$", "above left"], [3, 9, "$Q$", "right"]], win: [-1, 4, -3, 12] },
  "d1-070": { cs: [C((x) => x ** 3)], chords: [[[1, 1], [2, 8]]], tangents: [T([1, 1], 3)], pts: [[1, 1, "$P$", "above left"], [2, 8, "$Q$", "right"]], win: [-2, 3, -10, 12] },
  // function and its derivative
  "d1-006": { cs: [C((x) => x * x, CURVE, "f"), C((x) => 2 * x, DERIV, "f'")], win: [-3, 3, -5, 9] },
  "d1-007": { cs: [C((x) => x ** 3, CURVE, "f"), C((x) => 3 * x * x, DERIV, "f'")], win: [-2.5, 2.5, -9, 13] },
  "d1-008": { cs: [C((x) => 3 * x * x, CURVE, "f"), C((x) => 6 * x, DERIV, "f'")], win: [-2, 2, -6, 13] },
  "d1-009": { cs: [C((x) => 2 * x * x + 5, CURVE, "f"), C((x) => 4 * x, DERIV, "f'")], win: [-2, 2, -6, 14] },
  "d1-010": { cs: [C((x) => 5 * x + 3, CURVE, "f"), C(() => 5, DERIV, "f'")], win: [-2, 3, -6, 18] },
  "d1-011": { cs: [C((x) => x * x - x, CURVE, "f"), C((x) => 2 * x - 1, DERIV, "f'")], win: [-2, 3, -3, 7] },
  "d1-012": { cs: [C((x) => 2 * x * x + 3 * x, CURVE, "f"), C((x) => 4 * x + 3, DERIV, "f'")], win: [-3, 2, -4, 14] },
  "d1-013": { cs: [C((x) => 3 * x * x - 4 * x + 1, CURVE, "f"), C((x) => 6 * x - 4, DERIV, "f'")], win: [-1, 3, -5, 16] },
  "d1-014": { cs: [C((x) => x * x + 4 * x - 7, CURVE, "f"), C((x) => 2 * x + 4, DERIV, "f'")], win: [-7, 3, -12, 14] },
  "d1-041": { cs: [C((x) => 3 * x * x, CURVE, "f"), C((x) => 6 * x, DERIV, "f'")], win: [-2, 2, -6, 13] },
  "d1-042": { cs: [C((x) => x * x - 4 * x, CURVE, "f"), C((x) => 2 * x - 4, DERIV, "f'")], win: [-1, 5, -6, 8] },
  "d1-043": { cs: [C((x) => x * x + 3 * x - 1, CURVE, "f"), C((x) => 2 * x + 3, DERIV, "f'")], win: [-5, 2, -5, 9] },
  "d1-044": { cs: [C((x) => 2 * x ** 3, CURVE, "f"), C((x) => 6 * x * x, DERIV, "f'")], win: [-2, 2, -13, 13] },
  "d1-045": { cs: [C((x) => x ** 3 + 2 * x, CURVE, "f"), C((x) => 3 * x * x + 2, DERIV, "f'")], win: [-2, 2, -9, 13] },
  "d1-046": { cs: [C((x) => 5 * x * x - 3, CURVE, "f"), C((x) => 10 * x, DERIV, "f'")], win: [-2, 2, -6, 18] },
  "d1-064": { cs: [C((x) => x ** 4, CURVE, "f"), C((x) => 4 * x ** 3, DERIV, "f'")], win: [-2, 2, -10, 16] },
  "d1-066": { cs: [C((x) => x * x + 2 * x - 3, CURVE, "f"), C((x) => 2 * x + 2, DERIV, "f'")], win: [-5, 3, -6, 10] },
  "d1-028": { cs: [C((x) => x * x, CURVE, "A"), C((x) => 2 * x, DERIV, "A'")], win: [0, 5, 0, 13], xlabel: "x", ylabel: "A" },
  "d1-029": { cs: [C(() => 3, CURVE, "f"), C(() => 0, DERIV, "f'")], win: [-3, 3, -2, 6] },
  "d1-030": { cs: [C((x) => x, CURVE, "f"), C(() => 1, DERIV, "f'")], win: [-3, 3, -3, 4] },
  // curve + tangent at point
  "d1-015": { cs: [C((x) => x * x)], tangents: [T([5, 25], 10)], pts: [[5, 25, "$(5,25)$", "above left"]], win: [-1, 7, -5, 40] },
  "d1-016": { cs: [C((x) => x ** 3)], tangents: [T([-2, -8], 12)], pts: [[-2, -8, "$(-2,-8)$", "below right"]], win: [-3, 2, -12, 8] },
  "d1-017": { cs: [C((x) => 2 * x * x)], tangents: [T([-3, 18], -12)], pts: [[-3, 18, "$(-3,18)$", "above right"]], win: [-5, 2, -5, 25] },
  "d1-018": { cs: [C((x) => x * x - 3 * x)], tangents: [T([4, 4], 5)], pts: [[4, 4, "$(4,4)$", "above left"]], win: [-1, 6, -6, 10] },
  "d1-019": { cs: [C((x) => 4 * x * x - 1)], tangents: [T([2, 15], 16)], pts: [[2, 15, "$(2,15)$", "above left"]], win: [-1, 3, -5, 22] },
  "d1-020": { cs: [C((x) => x * x + 6)], tangents: [T([4, 22], 8)], pts: [[4, 22, "$(4,22)$", "above left"]], win: [-1, 6, 0, 30] },
  "d1-021": { cs: [C((x) => 3 * x * x)], tangents: [T([-3, 27], -18)], pts: [[-3, 27, "$(-3,27)$", "above right"]], win: [-5, 2, -5, 35] },
  "d1-022": { cs: [C((x) => x * x - 5 * x)], tangents: [T([2.5, -6.25], 0)], pts: [[2.5, -6.25, "$(2.5,-6.25)$", "below"]], win: [-1, 6, -8, 6] },
  "d1-023": { cs: [C((x) => x ** 3)], tangents: [T([3, 27], 27), T([-3, -27], 27)], pts: [[3, 27, "$(3,27)$", "above left"], [-3, -27, "$(-3,-27)$", "below right"]], win: [-4, 4, -32, 32] },
  "d1-024": { cs: [C((x) => x * x + 3)], tangents: [T([5, 28], 10)], pts: [[5, 28, "$(5,28)$", "above left"]], win: [-1, 7, 0, 40] },
  "d1-025": { cs: [C((x) => x * x)], tangents: [T([1, 1], 2)], pts: [[1, 1, "$P$", "above left"]], win: [-3, 3, -2, 9] },
  "d1-026": { cs: [C((x) => x * x - 4 * x + 1)], tangents: [T([0, 1], -4), T([2, -3], 0), T([4, 1], 4)], pts: [[0, 1, "$x{=}0$", "above left"], [2, -3, "$x{=}2$", "below"], [4, 1, "$x{=}4$", "above right"]], win: [-1, 5, -5, 8] },
  "d1-031": { cs: [C((x) => x * x + 2 * x - 3)], tangents: [T([-1, -4], 0)], pts: [[-1, -4, "$(-1,-4)$", "below"]], win: [-5, 3, -6, 10] },
  "d1-032": { cs: [C((x) => x * x)], tangents: [T([-3, 9], -6)], pts: [[-3, 9, "$P(-3,9)$", "above right"]], win: [-5, 2, -2, 18] },
  "d1-033": { cs: [C((x) => 2 * x * x - x)], tangents: [T([2, 6], 7)], pts: [[2, 6, "$A(2,6)$", "above left"]], win: [-1, 4, -4, 16] },
  "d1-034": { cs: [C((x) => x ** 3 - 2)], tangents: [T([2, 6], 12), T([-2, -10], 12)], pts: [[2, 6, "$(2,6)$", "above left"], [-2, -10, "$(-2,-10)$", "below right"]], win: [-3, 3, -20, 16] },
  "d1-035": { cs: [C((x) => x * x)], tangents: [T([2, 4], 4)], pts: [[2, 4, "$P(a,a^2)$", "above left"]], win: [-1, 5, -3, 20] },
  "d1-047": { cs: [C((x) => x * x + 2 * x)], tangents: [T([3, 15], 8)], pts: [[3, 15, "$(3,15)$", "above left"]], win: [-4, 4, -5, 20] },
  "d1-048": { cs: [C((x) => x ** 3)], tangents: [T([-2, -8], 12)], pts: [[-2, -8, "$(-2,-8)$", "below right"]], win: [-3, 2, -12, 8] },
  "d1-049": { cs: [C((x) => 4 * x * x - x)], tangents: [T([1, 3], 7)], pts: [[1, 3, "$(1,3)$", "above left"]], win: [-2, 2, -3, 18] },
  "d1-050": { cs: [C((x) => x * x - 6 * x + 5)], tangents: [T([4, -3], 2)], pts: [[4, -3, "$(4,-3)$", "below"]], win: [-1, 7, -6, 8] },
  "d1-051": { cs: [C((x) => 2 * x * x + 5 * x)], tangents: [T([-1, -3], 1)], pts: [[-1, -3, "$(-1,-3)$", "below right"]], win: [-4, 2, -5, 12] },
  "d1-052": { cs: [C((x) => x ** 3 + x)], tangents: [T([2, 10], 13)], pts: [[2, 10, "$(2,10)$", "above left"]], win: [-2, 3, -12, 20] },
  "d1-053": { cs: [C((x) => x * x + 4 * x - 7)], tangents: [T([-3, -10], -2)], pts: [[-3, -10, "$(-3,-10)$", "below right"]], win: [-7, 2, -12, 8] },
  "d1-054": { cs: [C((x) => x * x - 5 * x)], tangents: [T([2.5, -6.25], 0)], pts: [[2.5, -6.25, "$(2.5,-6.25)$", "below"]], win: [-1, 6, -8, 6] },
  "d1-055": { cs: [C((x) => 3 * x * x - 12 * x + 5)], tangents: [T([2, -7], 0)], pts: [[2, -7, "$(2,-7)$", "below"]], win: [-1, 5, -10, 8] },
  "d1-056": { cs: [C((x) => x ** 3 - 3 * x)], tangents: [T([0, 0], -3), T([1, -2], 0)], pts: [[0, 0, "$x{=}0$", "above right"], [1, -2, "$x{=}1$", "below"]], win: [-3, 3, -6, 6] },
  "d1-057": { cs: [C((x) => x * x + 2 * x - 3)], tangents: [T([2, 5], 6)], pts: [[2, 5, "$(2,5)$", "above left"]], win: [-5, 4, -6, 12] },
  "d1-058": { cs: [C((x) => x * x - 4 * x + 1)], tangents: [T([1, -2], -2)], pts: [[1, -2, "$(1,-2)$", "below"]], win: [-1, 6, -6, 8] },
  "d1-059": { cs: [C((x) => x * x + 3 * x)], tangents: [T([4, 28], 11)], pts: [[4, 28, "$t{=}4$", "above left"]], win: [0, 6, 0, 40], xlabel: "t", ylabel: "s" },
  "d1-060": { cs: [C((x) => 20 * x - 5 * x * x)], tangents: [T([1, 15], 10)], pts: [[1, 15, "$t{=}1$", "above left"]], win: [0, 4.5, 0, 25], xlabel: "t", ylabel: "h" },
  "d1-061": { cs: [C((x) => 4 * x * x + x)], tangents: [T([3, 39], 25)], pts: [[3, 39, "$t{=}3$", "above left"]], win: [0, 5, 0, 60], xlabel: "t", ylabel: "V" },
  "d1-062": { cs: [C((x) => -x * x + 40 * x - 100)], tangents: [T([20, 300], 0)], pts: [[20, 300, "$x{=}20$", "above"]], win: [0, 40, -120, 340], xlabel: "x", ylabel: "P" },
  "d1-063": { cs: [C((x) => 90 - 2 * x * x)], tangents: [T([3, 72], -12)], pts: [[3, 72, "$t{=}3$", "above right"]], win: [0, 6.5, 0, 95], xlabel: "t", ylabel: "T" },
  "d1-065": { cs: [C((x) => x ** 3 - 2 * x * x + x)], tangents: [T([0, 0], 1), T([4 / 3, 0.148], 1)], pts: [[0, 0, "$x{=}0$", "above left"], [4 / 3, 0.148, "$x{=}\\tfrac43$", "below right"]], win: [-0.7, 2.2, -1.5, 4] },
  "d1-068": { cs: [C((x) => x * x - 2 * x + 4)], tangents: [T([3, 7], 4)], pts: [[3, 7, "$P(3,7)$", "above left"]], win: [-1, 5, 0, 15] },
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/°/g, "\\textdegree{}").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/£/g, "\\pounds ").replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°²³—]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/—/g, "---");
}
// protect a few LaTeX text commands the author embedded in plain prose so they survive escaping
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ");
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
function niceStep(r) { const t = r / 8; for (const c of [0.5, 1, 2, 5, 10, 20, 25, 50, 100]) if (c >= t) return c; return 200; }

function graph(spec) {
  const CW = 8.6, CH = 5.8;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span;
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  // tangents (dashed)
  (spec.tangents || []).forEach((tg) => { const m = tg.m, [x0, y0] = tg.p; const fn = (x) => y0 + m * (x - x0); t += `\\draw[${TAN},thick,dashed] (${f(px(Xa))},${f(py(Math.max(ylo, Math.min(yhi, fn(Xa)))))}) -- (${f(px(Xb))},${f(py(Math.max(ylo, Math.min(yhi, fn(Xb)))))});\n`; });
  // chords (solid red)
  (spec.chords || []).forEach((c) => { t += `\\draw[${CHORD},thick] (${f(px(c[0][0]))},${f(py(c[0][1]))}) -- (${f(px(c[1][0]))},${f(py(c[1][1]))});\n`; });
  // curves
  spec.cs.forEach((c) => {
    const N = 260, pp = [];
    for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = c.fn(x); if (!isFinite(y)) continue; y = Math.max(ylo, Math.min(yhi, y)); pp.push(`(${f(px(x))},${f(py(y))})`); }
    if (pp.length > 1) t += `\\draw[${c.color},thick] ${pp.join(" -- ")};\n`;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)});\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))});\n`; }
  // curve labels (function/derivative)
  spec.cs.forEach((c) => { if (!c.label) return; let xe = Xb - (Xb - Xa) * 0.04, ye = Math.max(ylo, Math.min(yhi, c.fn(xe))); t += `\\node[${c.color},scale=0.85,anchor=west] at (${f(px(xe) + 0.05)},${f(py(ye))}) {$${c.label}$};\n`; });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${CHORD}] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.82] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
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

\\title{\\textbf{The Gradient of a Curve}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Differentiation (ref \\texttt{d1})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Gradient of a Curve} questions, each with a fully worked
solution and a TikZ diagram: a red \\textbf{chord} with the limiting \\textbf{tangent} (dashed orange) for the
chord-gradient questions; the curve in blue with its \\textbf{derivative} $f'(x)$ in teal for the
first-principles results; and the curve with the \\textbf{tangent} at the relevant point for the
gradient/tangent questions.
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
    L += `\\small Curve (blue); tangent (dashed orange); chord/derivative as relevant.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
