/* Generates Second_Order_Derivatives.tex from d3_second_order_derivatives.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Differentiation/d3_second_order_derivatives.ts");
const OUT = path.join(__dirname, "..", "Second_Order_Derivatives.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const CURVE = "blue!70!black", D2 = "teal!70!black", PT = "red!75!black";
const C = (fn, color, label, dom) => ({ fn, color: color || CURVE, label, dom });
const fd2 = (f, f2, win, dom, pts) => ({ cs: [C(f, CURVE, "f", dom), C(f2, D2, "f''", dom)], win, pts });
const stat = (f, win, pts, lab) => ({ cs: [C(f)], win, pts, xlabel: lab && lab[0], ylabel: lab && lab[1] });
const cb = Math.cbrt, R = Math.sqrt, PIc = Math.PI;

const D = {
  // function + second derivative (pure computation / concavity / f''=0 / evaluate)
  "d3-001": fd2((x) => x ** 4, (x) => 12 * x * x, [-2, 2, -8, 16]),
  "d3-002": fd2((x) => 5 * x ** 3 - 2 * x, (x) => 30 * x, [-2, 2, -30, 30]),
  "d3-003": fd2((x) => 3 * x ** 4 - 6 * x * x + 1, (x) => 36 * x * x - 12, [-2, 2, -15, 30]),
  "d3-004": fd2((x) => 4 * x ** 5 - 3 * x ** 3 + 7 * x - 2, (x) => 80 * x ** 3 - 18 * x, [-2, 2, -45, 45]),
  "d3-005": fd2((x) => 1 / (x * x), (x) => 6 / x ** 4, [0, 3, -2, 12], [0.42, 3]),
  "d3-006": fd2((x) => R(x), (x) => -1 / (4 * x ** 1.5), [0, 5, -1.5, 3], [0.05, 5]),
  "d3-007": fd2((x) => 6 * x * x - 1 / x, (x) => 12 - 2 / x ** 3, [0, 3, -6, 22], [0.3, 3]),
  "d3-009": fd2((x) => (x + 2) * (x - 3), (x) => 2 + 0 * x, [-3, 4, -8, 8]),
  "d3-010": fd2((x) => x ** 3 - 2 * x, (x) => 6 * x, [-3, 3, -20, 20]),
  "d3-020": fd2((x) => 3 * cb(x), (x) => -2 / (3 * cb(x ** 5)), [0, 5, -1, 6], [0.06, 5]),
  "d3-021": fd2((x) => x ** 3 - 5 * x, (x) => 6 * x, [-3, 3, -20, 20]),
  "d3-022": fd2((x) => x ** 3 + 3 * x, (x) => 6 * x, [-3, 3, -25, 25]),
  "d3-036": fd2((x) => 3 / (x * x), (x) => 18 / x ** 4, [0, 3, -2, 15], [0.42, 3]),
  "d3-037": fd2((x) => 4 / R(x), (x) => 3 / (x * x * R(x)), [0, 4, -1, 8], [0.3, 4]),
  "d3-038": fd2((x) => 2 * x ** 3 + 5 / x, (x) => 12 * x + 10 / x ** 3, [0, 3, -5, 45], [0.3, 3]),
  "d3-039": fd2((x) => x ** 1.5 + 4 * R(x), (x) => 3 / (4 * R(x)) - 1 / (x * R(x)), [0, 5, -3, 4], [0.06, 5]),
  "d3-040": fd2((x) => x - 2 / x, (x) => -4 / x ** 3, [0, 4, -8, 8], [0.3, 4]),
  "d3-041": fd2((x) => (x + 3) ** 2, (x) => 2 + 0 * x, [-6, 1, -2, 12]),
  "d3-042": fd2((x) => x ** 1.5 - 3 * R(x), (x) => 3 / (4 * R(x)) + 3 / (4 * x * R(x)), [0, 5, -3, 6], [0.06, 5]),
  "d3-008": fd2((x) => 2 * x ** 3 - 9 * x * x + 12 * x - 5, (x) => 12 * x - 18, [-1, 4, -16, 22], null, [[1.5, 0, "$f''{=}0$", "above right"]]),
  "d3-011": fd2((x) => x ** 3 - 5 * x, (x) => 6 * x, [-3, 3, -20, 20], null, [[2, 12, "$f''(2){=}12$", "above left"]]),
  "d3-012": fd2((x) => x ** 4 - 8 * x * x, (x) => 12 * x * x - 16, [-3.4, 3.4, -20, 100], null, [[3, 92, "$f''(3){=}92$", "above left"]]),
  "d3-013": fd2((x) => 2 * x ** 4 - x ** 3 + 5, (x) => 24 * x * x - 6 * x, [-2, 2, -10, 100], null, [[-1, 30, "$f''(-1){=}30$", "above right"]]),
  "d3-024": fd2((x) => x ** 3 - 6 * x * x, (x) => 6 * x - 12, [-1, 5, -30, 20], null, [[2, 0, "$f''{=}0$", "above right"]]),
  "d3-028": fd2((x) => 2 * x ** 3 - 3 * x * x - 36 * x + 10, (x) => 12 * x - 6, [-2, 3, -55, 35], null, [[0.5, 0, "$f''{=}0$", "above right"]]),
  "d3-030": fd2((x) => 5 * x * x - x ** 3, (x) => 10 - 6 * x, [-1, 5, -20, 32], null, [[5 / 3, 0, "$f''{=}0$", "above right"]]),
  "d3-043": fd2((x) => x ** 4 - 2 * x ** 3 + 5 * x, (x) => 12 * x * x - 12 * x, [-1, 3, -10, 30], null, [[1, 0, "$f''(1){=}0$", "above right"]]),
  "d3-044": fd2((x) => 3 * x * x - 2 * R(x), (x) => 6 + 1 / (2 * x ** 1.5), [0, 5, 0, 12], [0.3, 5]),
  "d3-045": fd2((x) => 2 * x ** 3 - 2 * x * x, (x) => 12 * x - 4, [-1, 3, -8, 20]),
  "d3-046": fd2((x) => x ** 3 - 6 * x * x + 3 * x, (x) => 6 * x - 12, [-1, 5, -30, 20], null, [[2, 0, "$f''{=}0$", "above right"]]),
  "d3-047": fd2((x) => 2 * x ** 3 + 5 * x * x - 4 * x, (x) => 12 * x + 10, [-3, 2, -20, 20], null, [[-5 / 6, 0, "$f''{=}0$", "below right"]]),
  "d3-048": fd2((x) => x ** 4 - 4 * x ** 3, (x) => 12 * x * x - 24 * x, [-1, 4, -18, 18], null, [[0, 0, "", "below left"], [2, 0, "$f''{=}0$", "above right"]]),
  "d3-055": fd2((x) => x ** 3 - 6 * x * x + 5, (x) => 6 * x - 12, [-1, 6, -40, 20], null, [[2, 0, "concave up $\\rightarrow$", "above right"]]),
  "d3-057": fd2((x) => x ** 4 - 6 * x * x, (x) => 12 * x * x - 12, [-3, 3, -12, 18], null, [[-1, 0, "", "below"], [1, 0, "", "below"]]),
  "d3-060": fd2((x) => x ** 4 + 2, (x) => 12 * x * x, [-2, 2, -1, 18]),
  // curve + labelled stationary / inflection points
  "d3-014": stat((x) => x ** 3 - 6 * x * x + 9 * x + 1, [-1, 5, -2, 8], [[1, 5, "max $(1,5)$", "above"], [3, 1, "min $(3,1)$", "below right"]]),
  "d3-015": stat((x) => x * x - 8 * x + 3, [-1, 9, -16, 8], [[4, -13, "min $(4,-13)$", "below"]]),
  "d3-016": stat((x) => 2 * x ** 3 - 3 * x * x - 12 * x + 5, [-3, 4, -20, 20], [[2, -15, "min $(2,-15)$", "below"], [-1, 12, "max $(-1,12)$", "above"]]),
  "d3-017": stat((x) => x ** 3, [-2, 2, -8, 8], [[0, 0, "stationary inflection", "above left"]]),
  "d3-018": stat((x) => -x * x + 6 * x - 4, [-1, 7, -6, 8], [[3, 5, "max $(3,5)$", "above"]]),
  "d3-019": stat((x) => x ** 4 - 4 * x * x, [-2.5, 2.5, -6, 8], [[0, 0, "max $(0,0)$", "above"], [R(2), -4, "min", "below"], [-R(2), -4, "min", "below"]]),
  "d3-023": stat((x) => x ** 3 - 12 * x, [-4, 4, -25, 25], [[2, -16, "min $(2,-16)$", "below"], [-2, 16, "max $(-2,16)$", "above"]]),
  "d3-025": stat((x) => -(x ** 3) + 3 * x, [-3, 3, -6, 6], [[1, 2, "max $(1,2)$", "above"], [-1, -2, "min $(-1,-2)$", "below"]]),
  "d3-026": stat((x) => x ** 4 - 2 * x ** 3, [-1, 2.5, -3, 4], [[0, 0, "inflection", "above left"], [1.5, -27 / 16, "min", "below"]]),
  "d3-027": stat((x) => 4 * x ** 3 - 3 * x ** 4, [-0.5, 1.7, -2, 2], [[1, 1, "max $(1,1)$", "above"], [0, 0, "infl", "below left"]]),
  "d3-029": stat((x) => x * x + 4 * x - 7, [-6, 3, -14, 8], [[-2, -11, "min $(-2,-11)$", "below"]]),
  "d3-031": stat((x) => x ** 3 - 3 * x * x - 9 * x + 5, [-4, 5, -30, 15], [[3, -22, "min $(3,-22)$", "below"], [-1, 10, "max $(-1,10)$", "above"]]),
  "d3-032": stat((x) => x ** 4 - 8 * x * x + 3, [-3, 3, -16, 8], [[0, 3, "max $(0,3)$", "above"], [2, -13, "min", "below"], [-2, -13, "min", "below"]]),
  "d3-033": stat((x) => 16 / (x * x) + 4 * x, [0, 6, 0, 30], [[2, 12, "min $(2,12)$", "above right"]]),
  "d3-034": stat((x) => 2 * x ** 3 + 3 * x * x - 12 * x + 1, [-4, 3, -12, 28], [[1, -6, "min $(1,-6)$", "below"], [-2, 21, "max $(-2,21)$", "above"]]),
  "d3-035": stat((x) => -(x ** 3) + 6 * x * x + 15 * x, [0, 8, 0, 120], [[5, 100, "max $(5,100)$", "above"]], ["x", "P"]),
  "d3-049": stat((x) => x ** 3 - 12 * x + 5, [-4, 4, -25, 25], [[2, -11, "min $(2,-11)$", "below"], [-2, 21, "max $(-2,21)$", "above"]]),
  "d3-050": stat((x) => 2 * x ** 3 + 3 * x * x - 36 * x + 1, [-5, 4, -60, 100], [[-3, 82, "max $(-3,82)$", "above"], [2, -43, "min $(2,-43)$", "below"]]),
  "d3-051": stat((x) => x ** 3 - 6 * x * x + 9 * x - 2, [-1, 5, -5, 5], [[1, 2, "max $(1,2)$", "above"], [3, -2, "min $(3,-2)$", "below"]]),
  "d3-052": stat((x) => x ** 4 - 4 * x ** 3 + 4 * x * x + 1, [-1, 3, -1, 5], [[0, 1, "min", "below right"], [2, 1, "min", "below"], [1, 2, "max $(1,2)$", "above"]]),
  "d3-053": stat((x) => x + 9 / x, [0, 10, 0, 16], [[3, 6, "min $(3,6)$", "above right"]]),
  "d3-054": stat((x) => x ** 3 - 3 * x, [-3, 3, -6, 6], [[1, -2, "min $(1,-2)$", "below"], [-1, 2, "max $(-1,2)$", "above"]]),
  "d3-056": stat((x) => x ** 3 - 9 * x * x + 24 * x - 15, [-1, 6, -25, 25], [[3, 3, "inflection $x{=}3$", "above left"]]),
  "d3-058": stat((x) => 2 * x ** 3 - 9 * x * x + 12 * x, [-1, 4, -5, 12], [[1.5, 4.5, "inflection $(\\tfrac32,\\tfrac92)$", "above left"]]),
  "d3-059": stat((x) => x ** 3 - 3 * x * x, [-1, 3, -6, 4], [[0, 0, "max", "above left"], [2, -4, "min", "below"], [1, -2, "infl", "right"]]),
  "d3-061": stat((x) => x * (10 - x), [0, 10, 0, 30], [[5, 25, "max $(5,25)$", "above"]], ["x", "A"]),
  "d3-062": stat((x) => 25 * x - 5 * x * x, [0, 5, 0, 35], [[2.5, 31.25, "max $(2.5,31.25)$", "above"]], ["t", "h"]),
  "d3-063": stat((x) => x * (12 - 2 * x) ** 2, [0, 6, 0, 140], [[2, 128, "max $(2,128)$", "above"]], ["x", "V"]),
  "d3-064": stat((x) => 20 + 6 * x - x * x, [0, 8, 0, 35], [[3, 29, "max $(3,29)$", "above"]], ["t", "P"]),
  "d3-065": stat((x) => 2 * PIc * x * x + 200 / x, [0, 6, 0, 300], [[2.515, 119.3, "min", "above right"]], ["r", "S"]),
  "d3-066": stat((x) => x ** 3 - 3 * x * x + 3 * x, [-0.5, 3, -2, 6], [[1, 1, "stationary inflection $(a,a^3)$", "above left"]]),
  "d3-067": stat((x) => x ** 3 - 3 * x * x + 1, [-1, 4, -5, 5], [[2, -3, "min $(2,-3)$", "below"], [0, 1, "max $(0,1)$", "above left"]]),
  "d3-068": stat((x) => x ** 4 - 4 * x ** 3 + 4 * x * x, [-1, 3, -1, 4], [[0, 0, "min", "below right"], [2, 0, "min", "below"], [1, 1, "max", "above"]]),
  "d3-069": stat((x) => x * x + 128 / x, [0, 9, 0, 120], [[4, 48, "min $(4,48)$", "above right"]], ["x", "S"]),
  "d3-070": stat((x) => 2 * x ** 3 - 15 * x * x + 24 * x + 7, [-1, 6, -15, 25], [[1, 18, "max $(1,18)$", "above"], [4, -9, "min $(4,-9)$", "below"]]),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/°/g, "\\textdegree{}").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/£/g, "\\pounds ").replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°²³—✓]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/—/g, "---").replace(/✓/g, "$\\checkmark$");
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
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  spec.cs.forEach((c) => {
    const dom = c.dom || [Xa, Xb], N = 280, pp = [];
    for (let i = 0; i <= N; i++) { const x = dom[0] + (dom[1] - dom[0]) * (i / N); let y = c.fn(x); if (!isFinite(y)) continue; pp.push(`(${f(px(x))},${f(py(cl(y)))})`); }
    if (pp.length > 1) t += `\\draw[${c.color},thick] ${pp.join(" -- ")};\n`;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)});\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))});\n`; }
  spec.cs.forEach((c) => { if (!c.label) return; const dom = c.dom || [Xa, Xb]; let xe = Math.min(Xb, dom[1]) - (Xb - Xa) * 0.04, ye = cl(c.fn(xe)); t += `\\node[${c.color},scale=0.85,anchor=west] at (${f(px(xe) + 0.05)},${f(py(ye))}) {$${c.label}$};\n`; });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PT}] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.8] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Second Order Derivatives}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Differentiation (ref \\texttt{d3})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Second Order Derivatives} questions, each with a fully
worked solution and a TikZ diagram: the curve in blue with its \\textbf{second derivative} $f''(x)$ in teal
for the pure-computation and concavity questions (showing where the curve is concave up/down), and the
curve with its \\textbf{stationary points} marked and classified (max / min / point of inflection) for the
second-derivative-test and optimisation questions.
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
    L += `\\small Curve (blue); second derivative $f''$ (teal) or classified stationary points as relevant.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
