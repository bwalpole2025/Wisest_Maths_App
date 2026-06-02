/* Generates Curve_Sketching.tex from cg5_curve_sketching.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Coordinate_Geometry/cg5_curve_sketching.ts");
const OUT = path.join(__dirname, "..", "Curve_Sketching.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const L1 = "blue!70!black", L2 = "teal!70!black", R = Math.sqrt;
const C = (fn, color) => ({ fn, color });

// spec: {cs:[{fn,color,dom}], win:[Xa,Xb,Ya,Yb], vasym:[...], hasym:[...], pts:[[x,y,label,anchor]], xlabel,ylabel}
const D = {
  "cg5-003": { cs: [C((x) => x * (x - 2) * (x + 3))], win: [-4, 3, -14, 14], pts: [[-3, 0, "$-3$", "below"], [0, 0, "", "below"], [2, 0, "$2$", "below"]] },
  "cg5-004": { cs: [C((x) => (x + 1) * (x - 3) * (x - 5))], win: [-2, 6, -25, 25], pts: [[-1, 0, "$-1$", "above left"], [3, 0, "$3$", "below"], [5, 0, "$5$", "below"], [0, 15, "$(0,15)$", "above right"]] },
  "cg5-005": { cs: [C((x) => -x * (x + 2) * (x - 4))], win: [-3, 5, -25, 25], pts: [[-2, 0, "$-2$", "below"], [0, 0, "", "above left"], [4, 0, "$4$", "above"]] },
  "cg5-006": { cs: [C((x) => x * (x + 3) * (x - 2))], win: [-4, 3, -14, 14], pts: [[-3, 0, "$-3$", "below"], [0, 0, "", "above right"], [2, 0, "$2$", "below"]] },
  "cg5-007": { cs: [C((x) => (2 * x + 1) * (x - 2) * (x - 4))], win: [-1.5, 5, -12, 18], pts: [[-0.5, 0, "$-\\tfrac12$", "above left"], [2, 0, "$2$", "below"], [4, 0, "$4$", "below"], [0, 8, "$(0,8)$", "right"]] },
  "cg5-008": { cs: [C((x) => 2 * x * (x - 2) * (x + 2))], win: [-3, 3, -14, 14], pts: [[-2, 0, "$-2$", "below"], [0, 0, "", "above right"], [2, 0, "$2$", "below"]] },
  "cg5-009": { cs: [C((x) => x * x * (x - 3))], win: [-1.5, 4, -12, 8], pts: [[0, 0, "$0$ (touch)", "above left"], [3, 0, "$3$", "below"]] },
  "cg5-010": { cs: [C((x) => (x + 2) * (x + 2) * (x - 1))], win: [-4, 2, -10, 12], pts: [[-2, 0, "$-2$ (touch)", "above left"], [1, 0, "$1$", "below"], [0, -4, "$(0,-4)$", "below right"]] },
  "cg5-011": { cs: [C((x) => (3 - x) ** 3)], win: [0, 5, -25, 35], pts: [[3, 0, "$3$ (triple)", "above right"], [0, 27, "$(0,27)$", "right"]] },
  "cg5-012": { cs: [C((x) => -x * x * (x + 4))], win: [-5, 2, -12, 25], pts: [[-4, 0, "$-4$", "below"], [0, 0, "$0$ (touch)", "above right"]] },
  "cg5-013": { cs: [C((x) => x * (x - 5) ** 2)], win: [-2, 6, -25, 25], pts: [[0, 0, "$0$", "above left"], [5, 0, "$5$ (touch)", "above"]] },
  "cg5-014": { cs: [C((x) => 2 * x * (x - 3) ** 2)], win: [-1, 4, -8, 30], pts: [[0, 0, "$0$", "below right"], [3, 0, "$3$ (touch)", "below"]] },
  "cg5-015": { cs: [C((x) => x * (x - 1) * (x + 1) * (x - 3))], win: [-2, 4, -10, 18], pts: [[-1, 0, "$-1$", "above left"], [0, 0, "", "below"], [1, 0, "$1$", "below"], [3, 0, "$3$", "below"]] },
  "cg5-016": { cs: [C((x) => -2 * x * (x + 3) * (x - 1) * (x - 4))], win: [-4, 5, -90, 90], pts: [[-3, 0, "$-3$", "above left"], [0, 0, "", "below"], [1, 0, "$1$", "below"], [4, 0, "$4$", "above"]] },
  "cg5-017": { cs: [C((x) => x * x * (x + 2) * (x - 3))], win: [-3, 4, -30, 30], pts: [[-2, 0, "$-2$", "above left"], [0, 0, "$0$ (touch)", "above"], [3, 0, "$3$", "below"]] },
  "cg5-018": { cs: [C((x) => (x - 2) ** 2 * (x + 1) ** 2)], win: [-3, 4, -4, 28], pts: [[-1, 0, "$-1$ (touch)", "above left"], [2, 0, "$2$ (touch)", "above"], [0, 4, "$(0,4)$", "right"]] },
  "cg5-019": { cs: [C((x) => (x * x - 9) * (x * x - 4))], win: [-4, 4, -20, 45], pts: [[-3, 0, "$-3$", "above left"], [-2, 0, "", "below"], [2, 0, "", "below"], [3, 0, "$3$", "above right"], [0, 36, "$(0,36)$", "above"]] },
  "cg5-020": { cs: [C((x) => 3 * x * (x - 2) ** 2 * (x + 1))], win: [-2, 3, -25, 35], pts: [[-1, 0, "$-1$", "above left"], [0, 0, "", "below"], [2, 0, "$2$ (touch)", "above"]] },
  "cg5-021": { cs: [C((x) => -x * x * (x - 4) ** 2)], win: [-2, 6, -60, 8], pts: [[0, 0, "$0$ (touch)", "above left"], [4, 0, "$4$ (touch)", "above"]] },
  "cg5-022": { cs: [C((x) => (x - 1) * (x + 1) * (x - 2) * (x + 2))], win: [-3, 3, -4, 14], pts: [[-2, 0, "$-2$", "above left"], [-1, 0, "", "below"], [1, 0, "", "below"], [2, 0, "$2$", "above right"], [0, 4, "$(0,4)$", "above"]] },
  "cg5-023": { cs: [C((x) => 4 / x)], win: [-6, 6, -12, 12], vasym: [0], hasym: [0], pts: [[1, 4, "$(1,4)$", "above right"], [-1, -4, "$(-1,-4)$", "below left"]] },
  "cg5-024": { cs: [C((x) => -5 / x)], win: [-6, 6, -12, 12], vasym: [0], hasym: [0], pts: [[1, -5, "$(1,-5)$", "below right"], [-1, 5, "$(-1,5)$", "above left"]] },
  "cg5-025": { cs: [C((x) => 3 / (x * x))], win: [-5, 5, -1, 15], vasym: [0], hasym: [0], pts: [[1, 3, "$(1,3)$", "above right"], [-1, 3, "$(-1,3)$", "above left"]] },
  "cg5-026": { cs: [C((x) => -2 / x ** 4)], win: [-3, 3, -15, 1], vasym: [0], hasym: [0], pts: [[1, -2, "$(1,-2)$", "below right"], [-1, -2, "$(-1,-2)$", "below left"]] },
  "cg5-027": { cs: [C((x) => 6 / x, L1), C((x) => 6 / (x * x), L2)], win: [0, 6, 0, 15], vasym: [0], hasym: [0], pts: [[1, 6, "$(1,6)$", "above right"]] },
  "cg5-029": { cs: [C((x) => 2 / (x * x), L1), C((x) => -x * x + 3, L2)], win: [-3, 3, -4, 8], vasym: [0], pts: [[1, 1, "", "above right"], [R(2), 1, "", "below"]] },
  "cg5-030": { cs: [C((x) => (4 - x) * (x + 1) ** 2)], win: [-3, 5, -20, 30], pts: [[-1, 0, "$-1$ (touch)", "below left"], [4, 0, "$4$", "below"], [0, 4, "$(0,4)$", "right"]] },
  "cg5-031": { cs: [C((x) => x ** 4 - 16)], win: [-3, 3, -20, 30], pts: [[-2, 0, "$-2$", "above left"], [2, 0, "$2$", "above right"], [0, -16, "$(0,-16)$", "below right"]] },
  "cg5-032": { cs: [C((x) => x * (x - 2) ** 2)], win: [-1, 4, -5, 10], pts: [[0, 0, "$0$", "below left"], [2, 0, "$2$ (touch)", "above"]] },
  "cg5-033": { cs: [C((x) => (x + 2) * (x - 1) ** 2 * (x - 4))], win: [-3, 5, -30, 30], pts: [[-2, 0, "$-2$", "above left"], [1, 0, "$1$ (touch)", "above"], [4, 0, "$4$", "below"], [0, -8, "$(0,-8)$", "below right"]] },
  "cg5-034": { cs: [C((x) => 1 / x ** 3, L1), C((x) => x ** 3, L2)], win: [-2.5, 2.5, -8, 8], vasym: [0], pts: [[1, 1, "$(1,1)$", "above left"], [-1, -1, "$(-1,-1)$", "below right"]] },
  "cg5-035": { cs: [C((x) => (x - 1) * (x - 2) * (x - 3) * (x - 4))], win: [0, 5, -4, 28], pts: [[1, 0, "$1$", "below"], [2, 0, "", "above"], [3, 0, "", "below"], [4, 0, "$4$", "below"], [0, 24, "$(0,24)$", "above right"]] },
  "cg5-036": { cs: [C((x) => x * x - 4)], win: [-4, 4, -6, 12], pts: [[-2, 0, "$-2$", "above left"], [2, 0, "$2$", "above right"], [0, -4, "$(0,-4)$", "below right"]] },
  "cg5-037": { cs: [C((x) => (x - 1) * (x + 3))], win: [-5, 3, -6, 12], pts: [[1, 0, "$1$", "above right"], [-3, 0, "$-3$", "above left"], [-1, -4, "$(-1,-4)$", "below"], [0, -3, "$(0,-3)$", "right"]] },
  "cg5-038": { cs: [C((x) => -x * x + 6 * x - 5)], win: [-1, 7, -8, 6], pts: [[1, 0, "$1$", "below left"], [5, 0, "$5$", "below right"], [3, 4, "$(3,4)$", "above"], [0, -5, "$(0,-5)$", "below"]] },
  "cg5-039": { cs: [C((x) => 1 / x)], win: [-5, 5, -8, 8], vasym: [0], hasym: [0] },
  "cg5-040": { cs: [C((x) => x ** 3)], win: [-3, 3, -16, 16], pts: [[0, 0, "", "above left"]] },
  "cg5-041": { cs: [C((x) => x ** 3 - 3 * x)], win: [-3, 3, -6, 6], pts: [[-R(3), 0, "", "below"], [0, 0, "", "below right"], [R(3), 0, "", "below"], [-1, 2, "$(-1,2)$", "above"], [1, -2, "$(1,-2)$", "below"]] },
  "cg5-042": { cs: [C((x) => 1 / (x - 2))], win: [-3, 7, -8, 8], vasym: [2], hasym: [0], pts: [[0, -0.5, "$(0,-\\tfrac12)$", "left"]] },
  "cg5-043": { cs: [C((x) => (x - 2) ** 2 * (x + 1))], win: [-3, 4, -10, 16], pts: [[2, 0, "$2$ (touch)", "above"], [-1, 0, "$-1$", "below left"], [0, 4, "$(0,4)$", "right"]] },
  "cg5-044": { cs: [C((x) => R(x), L1, [0, 9])], win: [-0.5, 9, -1, 4], pts: [[0, 0, "", "below left"]] },
  "cg5-045": { cs: [C((x) => 2 ** x)], win: [-3, 4, -1, 16], hasym: [0], pts: [[0, 1, "$(0,1)$", "above left"]] },
  "cg5-046": { cs: [C((x) => x * x + 2 * x + 5)], win: [-5, 3, -1, 15], pts: [[-1, 4, "$(-1,4)$", "below"], [0, 5, "$(0,5)$", "right"]] },
  "cg5-047": { cs: [C((x) => Math.abs(x - 3))], win: [-1, 7, -1, 8], pts: [[3, 0, "$(3,0)$", "below"], [0, 3, "$(0,3)$", "left"]] },
  "cg5-048": { cs: [C((x) => x ** 4 - 4 * x * x)], win: [-3, 3, -6, 12], pts: [[-2, 0, "$-2$", "above left"], [0, 0, "$(0,0)$", "above"], [2, 0, "$2$", "above right"], [-R(2), -4, "", "below"], [R(2), -4, "", "below"]] },
  "cg5-049": { cs: [C((x) => (2 * x) / (x + 1))], win: [-8, 6, -8, 12], vasym: [-1], hasym: [2], pts: [[0, 0, "$O$", "below right"]] },
  "cg5-050": { cs: [C((x) => -x * x + 4 * x + 5)], win: [-3, 6, -5, 12], pts: [[2, 9, "$(2,9)$", "above"], [0, 5, "$(0,5)$", "left"]] },
  "cg5-051": { cs: [C((x) => (x + 2) ** 3)], win: [-5, 1, -18, 25], pts: [[-2, 0, "$(-2,0)$", "below right"], [0, 8, "$(0,8)$", "right"]] },
  "cg5-052": { cs: [C((x) => -1 / x)], win: [-5, 5, -8, 8], vasym: [0], hasym: [0] },
  "cg5-053": { cs: [C((x) => (x - 3) ** 2)], win: [-1, 7, -2, 15], pts: [[3, 0, "$(3,0)$", "below"], [0, 9, "$(0,9)$", "right"]] },
  "cg5-054": { cs: [C((x) => 1 / (x * x))], win: [-4, 4, -1, 12], vasym: [0], hasym: [0] },
  "cg5-055": { cs: [C((x) => (x + 2) * (x - 1) * (x - 4))], win: [-3, 5, -18, 18], pts: [[-2, 0, "$-2$", "above left"], [1, 0, "$1$", "below"], [4, 0, "$4$", "below"]] },
  "cg5-056": { cs: [C((x) => 3 - x * x)], win: [-3, 3, -6, 5], pts: [[-R(3), 0, "", "below left"], [R(3), 0, "", "below right"], [0, 3, "$(0,3)$", "above"]] },
  "cg5-057": { cs: [C((x) => x * (x - 2) * (x + 3))], win: [-4, 3, -14, 14], pts: [[-3, 0, "$-3$", "below"], [0, 0, "", "above right"], [2, 0, "$2$", "below"]] },
  "cg5-058": { cs: [C((x) => (x + 1) / (x - 1))], win: [-5, 7, -8, 10], vasym: [1], hasym: [1], pts: [[-1, 0, "$(-1,0)$", "below left"], [0, -1, "$(0,-1)$", "below right"]] },
  "cg5-059": { cs: [C((x) => -3 * x * x + 6 * x)], win: [-2, 4, -8, 6], pts: [[1, 3, "$(1,3)$", "above"], [0, 0, "$O$", "below right"]] },
  "cg5-060": { cs: [C((x) => Math.exp(-x))], win: [-2, 4, -1, 8], hasym: [0], pts: [[0, 1, "$(0,1)$", "above right"]] },
  "cg5-061": { cs: [C((x) => x * x * (x - 3))], win: [-1.5, 4, -12, 8], pts: [[0, 0, "$0$ (touch)", "above left"], [3, 0, "$3$", "below"]] },
  "cg5-062": { cs: [C((x) => 4 / (x + 2) + 1)], win: [-9, 5, -6, 10], vasym: [-2], hasym: [1], pts: [[-6, 0, "$(-6,0)$", "below left"], [0, 3, "$(0,3)$", "right"]] },
  "cg5-063": { cs: [C((x) => 5 - (2 * x - 3) ** 2)], win: [-1, 4, -8, 6], pts: [[1.5, 5, "$(\\tfrac32,5)$", "above"]] },
  "cg5-064": { cs: [C((x) => Math.abs(2 * x - 4))], win: [-2, 6, -1, 10], pts: [[2, 0, "$(2,0)$", "below"], [0, 4, "$(0,4)$", "left"]] },
  "cg5-065": { cs: [C((x) => -(x ** 3) + 3 * x)], win: [-3, 3, -6, 6], pts: [[-R(3), 0, "", "above"], [0, 0, "", "above right"], [R(3), 0, "", "below"], [1, 2, "$(1,2)$", "above"], [-1, -2, "$(-1,-2)$", "below"]] },
  "cg5-066": { cs: [C((x) => Math.log(x), L1, [0.04, 8])], win: [-0.5, 8, -4, 3], vasym: [0], pts: [[1, 0, "$(1,0)$", "below right"]] },
  "cg5-067": { cs: [C((x) => (x - 1) ** 2 * (x + 2))], win: [-3, 3, -8, 12], pts: [[1, 0, "$1$ (touch)", "above"], [-2, 0, "$-2$", "below left"], [0, 2, "$(0,2)$", "right"]] },
  "cg5-068": { cs: [C((x) => Math.sin(x), L1, [0, 2 * Math.PI])], win: [0, 6.4, -1.5, 1.5], pts: [[Math.PI / 2, 1, "", "above"], [3 * Math.PI / 2, -1, "", "below"]] },
  "cg5-069": { cs: [C((x) => (-4 / 3) * (x + 1) * (x - 3))], win: [-3, 5, -8, 12], pts: [[-1, 0, "$-1$", "below left"], [3, 0, "$3$", "below right"], [0, 4, "$(0,4)$", "right"]] },
  "cg5-070": { cs: [C((x) => x * (x - 3) ** 2)], win: [-1, 5, -5, 10], pts: [[0, 0, "$0$", "below left"], [3, 0, "$3$ (touch)", "below"], [1, 4, "$(1,4)$", "above"], [2, 2, "$(2,2)$", "right"]] },
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e—]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/—/g, "---");
}
function prose(s) {
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last)); return o;
}
function ans(s) {
  if (s.includes("\\(")) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += escTxt(s.slice(last)); return o;
  }
  return /[\\^_=]/.test(s) ? "\\(\\displaystyle " + ctl(s) + "\\)" : escTxt(s);
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
const trim = (x) => (Math.round(x * 100) / 100).toString();
function niceStep(r) { const t = r / 8; for (const c of [0.5, 1, 2, 5, 10, 20, 25, 50]) if (c >= t) return c; return 100; }

function sketch(spec) {
  const CW = 8.6, CH = 5.8;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  (spec.vasym || []).forEach((v) => { t += `\\draw[gray,dashed] (${f(px(v))},${f(py(Ya))}) -- (${f(px(v))},${f(py(Yb))});\n`; });
  (spec.hasym || []).forEach((h) => { t += `\\draw[gray,dashed] (${f(px(Xa))},${f(py(h))}) -- (${f(px(Xb))},${f(py(h))});\n`; });
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span;
  spec.cs.forEach((c) => {
    const dom = c.dom || [Xa, Xb], col = c.color || L1;
    const bs = (spec.vasym || []).filter((v) => v > dom[0] && v < dom[1]).sort((a, b) => a - b);
    const eps = (dom[1] - dom[0]) / 4000; let lo = dom[0]; const segs = [];
    for (const b of bs) { segs.push([lo, b - eps]); lo = b + eps; } segs.push([lo, dom[1]]);
    segs.forEach(([a, b]) => {
      const N = 260, pp = [];
      for (let i = 0; i <= N; i++) { const x = a + (b - a) * (i / N); let y = c.fn(x); if (!isFinite(y)) continue; y = Math.max(ylo, Math.min(yhi, y)); pp.push(`(${f(px(x))},${f(py(y))})`); }
      if (pp.length > 1) t += `\\draw[${col},thick] ${pp.join(" -- ")};\n`;
    });
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)});\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))});\n`; }
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[red!80!black] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.82] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Curve Sketching}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Coordinate Geometry (ref \\texttt{cg5})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Curve Sketching} questions, each with a fully worked
solution and a TikZ sketch of the curve, plotted from its equation. Roots, intercepts, turning points and
points of inflection are marked, and asymptotes are drawn as dashed grey lines. (The few questions that
only ask you to \\emph{describe} or \\emph{match} shapes, with several functions at once, have no single plot.)
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
    if (st.description) L += `\\textit{${n}${prose(st.description)}}\n`;
    if (st.workingLatex && typeof st.workingLatex === "string") L += `\\[\\begin{gathered}\n${ctl(st.workingLatex)}\n\\end{gathered}\\]\n`;
    if (st.explanation && typeof st.explanation === "string") L += `${prose(st.explanation)}\n\n`;
  });
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad ${ans(q.workedSolution.finalAnswer)}\n\\end{answerbox}\n`;
  if (q.workedSolution.commonMistakes && q.workedSolution.commonMistakes.length)
    L += `\\textbf{Common mistake.} ` + q.workedSolution.commonMistakes.map(prose).join(" ") + `\n\n`;
  if (D[q.id]) {
    L += `\\textbf{Sketch.}\n\n\\begin{center}\n${sketch(D[q.id])}\n\\end{center}\n`;
    L += `\\small The curve plotted from its equation, with key features marked.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " sketches)");
