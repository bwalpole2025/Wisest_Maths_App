/* Generates Real_Life_Problems.tex from d5_real_life_problems.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Differentiation/d5_real_life_problems.ts");
const OUT = path.join(__dirname, "..", "Real_Life_Problems.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const CURVE = "blue!70!black", TAN = "orange!85!black", PT = "red!75!black", PIc = Math.PI;
const T = (p, m) => ({ p, m });
// P(f, win, pts, [xlabel,ylabel], tangents)
const P = (f, win, pts, lab, tangents) => ({ cs: [{ fn: f }], win, pts: pts || [], xlabel: lab && lab[0], ylabel: lab && lab[1], tangents });

const D = {
  "d5-001": P((t) => 4 * t * t - 3 * t, [0, 6, 0, 120], [[5, 85, "$t{=}5$", "above left"]], ["t", "s"], [T([5, 85], 37)]),
  "d5-002": P((t) => t ** 3 - 6 * t * t + 5, [0, 6, -30, 30], [[0, 5, "rest", "above right"], [4, -27, "rest", "below"]], ["t", "s"]),
  "d5-003": P((t) => 20 * t - 5 * t * t, [0, 4.5, 0, 25], [[2, 20, "max height $(2,20)$", "above"]], ["t", "h"]),
  "d5-004": P((t) => t ** 3 - 9 * t * t + 24 * t, [0, 6, 0, 30], [[2, 20, "rest $(2,20)$", "above"], [4, 16, "rest $(4,16)$", "below right"]], ["t", "s"]),
  "d5-005": P((t) => 3 * t * t, [0, 6, 0, 120], [[6, 108, "$t{=}6$", "above left"]], ["t", "s"], [T([6, 108], 36)]),
  "d5-006": P((t) => 2 * t ** 3 - 15 * t * t + 36 * t, [0, 4, 0, 40], [[2, 28, "rest", "above"], [3, 27, "rest", "below right"], [2.5, 27.5, "$a{=}0$", "above"]], ["t", "s"]),
  "d5-007": P((t) => 5 * t - t * t, [0, 5, 0, 8], [[2.5, 6.25, "max $(2.5,6.25)$", "above"]], ["t", "s"]),
  "d5-008": P((t) => 10 * t, [0, 4, 0, 42], [[3.5, 35, "$(3.5,35)$", "above left"]], ["t", "v"]),
  "d5-009": P((t) => t ** 3 - 4 * t * t + 4 * t, [0, 3, -1, 4], [[2 / 3, 32 / 27, "rest", "above"], [2, 0, "rest", "below right"]], ["t", "s"]),
  "d5-010": P((x) => 30 * x - x * x, [0, 30, 0, 250], [[15, 225, "max $(15,225)$", "above"]], ["x", "A"]),
  "d5-011": P((x) => x * (80 - 2 * x), [0, 40, 0, 900], [[20, 800, "max $(20,800)$", "above"]], ["x", "A"]),
  "d5-012": P((t) => 25 * t - 5 * t * t, [0, 5, 0, 35], [[2.5, 31.25, "max $(2.5,31.25)$", "above"]], ["t", "h"]),
  "d5-013": P((x) => x * (60 - x), [0, 60, 0, 1000], [[30, 900, "max $(30,900)$", "above"]], ["x", "A"]),
  "d5-014": P((x) => x * (30 - 2 * x) ** 2, [0, 15, 0, 2200], [[5, 2000, "max $(5,2000)$", "above"]], ["x", "V"]),
  "d5-015": P((r) => 2 * PIc * r * r + 500 * PIc / r, [0, 12, 0, 1500], [[5, 471, "min $r{=}5$", "above right"]], ["r", "A"]),
  "d5-016": P((t) => 3 * t * t - 12 * t + 9, [0, 4, -5, 12], [[2, -3, "min $v{=}-3$", "below"], [1, 0, "", "above"], [3, 0, "", "above"]], ["t", "v"]),
  "d5-017": P((x) => x * (24 - 2 * x) ** 2, [0, 12, 0, 1200], [[4, 1024, "max $(4,1024)$", "above"]], ["x", "V"]),
  "d5-018": P((x) => 4 * x ** 3 - 64 * x * x + 240 * x, [0, 6, 0, 300], [[2.43, 263, "max", "above"]], ["x", "V"]),
  "d5-019": P((r) => PIc * r * r + 32 * PIc / r, [0, 6, 0, 200], [[2.52, 59.8, "min $r{=}2.52$", "above right"]], ["r", "A"]),
  "d5-020": P((t) => t ** 4 - 8 * t * t, [0, 3, -20, 15], [[0, 0, "rest", "above right"], [2, -16, "rest $(2,-16)$", "below"]], ["t", "s"]),
  "d5-021": P((x) => x * (24 - x), [0, 24, 0, 160], [[12, 144, "max $(12,144)$", "above"]], ["x", "A"]),
  "d5-022": P((x) => 100 * x - 2 * x * x, [0, 50, 0, 1400], [[25, 1250, "max $(25,1250)$", "above"]], ["x", "A"]),
  "d5-023": P((t) => -2 * (t ** 3) + 18 * t * t + 5, [0, 10, 0, 250], [[6, 221, "max $(6,221)$", "above"]], ["t", "h"]),
  "d5-024": P((x) => -7 * x * x + 60 * x, [0, 8, 0, 140], [[30 / 7, 128.6, "stationary (max)", "above"]], ["x", "A"]),
  "d5-025": P((x) => (150 * x - 2 * x ** 3) / 4, [0, 9, 0, 140], [[5, 125, "max $(5,125)$", "above"]], ["x", "V"]),
  "d5-026": P((t) => 6 * t - t * t, [0, 8, -20, 12], [[3, 9, "rest $(3,9)$", "above"]], ["t", "s"]),
  "d5-027": P((r) => (PIc * r / 2) * (300 - r * r), [0, 18, 0, 3500], [[10, 3142, "max $r{=}10$", "above"]], ["r", "V"]),
  "d5-028": P((t) => t ** 3 - 6 * t * t + 12 * t - 3, [0, 5, -5, 30], [[2, 5, "infl, $a{=}0$", "above left"]], ["t", "s"]),
  "d5-029": P((x) => 2 * x + 400 / x, [0, 30, 0, 150], [[14.14, 56.6, "min", "above right"]], ["x", "P"]),
  "d5-030": P((t) => t ** 3 - 3 * t * t - 9 * t + 2, [0, 5, -30, 15], [[3, -25, "rest $(3,-25)$", "below"]], ["t", "s"]),
  "d5-031": P((r) => 2 * PIc * r * r + 660 / r, [0, 8, 0, 800], [[3.74, 264, "min $r{=}3.74$", "above right"]], ["r", "A"]),
  "d5-032": P((t) => 2 * t ** 3 - 5 * t * t + 4 * t, [0, 2, 0, 4], [[2 / 3, 1.04, "first rest", "above left"], [1, 1, "", "below"]], ["t", "s"]),
  "d5-033": P((r) => 6 * r - 2 * r * r - PIc * r * r / 2, [0, 1.5, 0, 3], [[0.84, 2.52, "max", "above"]], ["r", "A"]),
  "d5-034": P((t) => t ** 3 - 12 * t + 4, [0, 4, -15, 15], [[2, -12, "rest $(2,-12)$", "below"]], ["t", "x"]),
  "d5-035": P((x) => x * x + 16 / x, [0, 5, 0, 40], [[2, 12, "min $(2,12)$", "above right"]], ["x", "A"]),
  "d5-036": P((t) => 2 * t ** 3 - 9 * t * t + 12 * t, [0, 3, 0, 8], [[1, 5, "rest $(1,5)$", "above"], [2, 4, "rest $(2,4)$", "below right"]], ["t", "s"]),
  "d5-037": P((t) => 6 * t * t - 4 * t + 1, [0, 4, 0, 60], [[3, 43, "$t{=}3$", "above left"]], ["t", "v"], [T([3, 43], 32)]),
  "d5-038": P((x) => x * (12 - 2 * x) ** 2, [0, 6, 0, 140], [[2, 128, "max $(2,128)$", "above"]], ["x", "V"]),
  "d5-039": P((x) => -2 * x * x + 80 * x - 200, [0, 40, -250, 700], [[20, 600, "max $(20,600)$", "above"]], ["x", "P"]),
  "d5-040": P((x) => x * (20 - x), [0, 20, 0, 120], [[10, 100, "max $(10,100)$", "above"]], ["x", "A"]),
  "d5-041": P((r) => 2 * PIc * r * r + 32 * PIc / r, [0, 5, 0, 200], [[2, 75.4, "min $r{=}2$", "above right"]], ["r", "A"]),
  "d5-042": P((t) => 50 * t - t * t, [0, 50, 0, 700], [[25, 625, "max $(25,625)$", "above"]], ["t", "P"]),
  "d5-043": P((x) => x + 4 + 100 / x, [0, 30, 0, 80], [[10, 24, "min $(10,24)$", "above right"]], ["x", "C"]),
  "d5-044": P((x) => 0.03 * x ** 3 - x * x + 50 * x + 100, [0, 20, 0, 800], [[10, 530, "$x{=}10$", "above left"]], ["x", "C"], [T([10, 530], 39)]),
  "d5-045": P((t) => 20 * t - 0.5 * t * t, [0, 40, 0, 250], [[4, 72, "$t{=}4$", "above left"]], ["t", "V"], [T([4, 72], 16)]),
  "d5-046": P((t) => 12 * t - t ** 3, [0, 3, -5, 20], [[2, 16, "max $(2,16)$", "above"]], ["t", "s"]),
  "d5-047": P((x) => 200 * x - 0.5 * x * x, [0, 200, 0, 22000], [[20, 3800, "$x{=}20$", "above left"]], ["x", "R"], [T([20, 3800], 180)]),
  "d5-048": P((t) => 80 - 5 * t * t, [0, 4.5, 0, 90], [[4, 0, "ground $(4,0)$", "above right"]], ["t", "h"], [T([4, 0], -40)]),
  "d5-049": P((r) => PIc * r * r + 54 * PIc / r, [0, 6, 0, 200], [[3, 84.8, "min $r{=}3$", "above right"]], ["r", "A"]),
  "d5-050": P((x) => x * (60 - 2 * x), [0, 30, 0, 500], [[15, 450, "max $(15,450)$", "above"]], ["x", "A"]),
  "d5-051": P((a) => (a / 4) ** 2 + ((40 - a) / 4) ** 2, [0, 40, 0, 120], [[20, 50, "min $(20,50)$", "above"]], ["x", "A"]),
  "d5-052": P((t) => 120 * t - 3 * t * t, [0, 40, 0, 1400], [[20, 1200, "max $(20,1200)$", "above"]], ["t", "P"]),
  "d5-053": P((t) => 400 - 20 * t + t * t / 4, [0, 40, 0, 450], [[10, 225, "$t{=}10$", "above right"]], ["t", "V"], [T([10, 225], -15)]),
  "d5-054": P((x) => 2 * x * x + 108 / x, [0, 6, 0, 150], [[3, 54, "min $(3,54)$", "above right"]], ["x", "S"]),
  "d5-055": P((t) => t ** 3 - 12 * t * t + 36 * t, [0, 8, 0, 40], [[2, 32, "rest $(2,32)$", "above"], [6, 0, "rest $(6,0)$", "above right"]], ["t", "s"]),
  "d5-056": P((t) => 4.9 * t * t, [0, 6, 0, 180], [[5, 122.5, "$t{=}5$", "above left"]], ["t", "s"], [T([5, 122.5], 49)]),
  "d5-057": P((t) => t ** 3 - 3 * t * t - 9 * t + 5, [0, 5, -30, 15], [[3, -22, "rest $(3,-22)$", "below"]], ["t", "s"]),
  "d5-058": P((x) => x * (200 - 2 * x), [0, 100, 0, 5500], [[50, 5000, "max $(50,5000)$", "above"]], ["x", "A"]),
  "d5-059": P((x) => 60 * x - x * x - 200, [0, 60, -250, 800], [[30, 700, "max $(30,700)$", "above"]], ["x", "P"]),
  "d5-060": P((x) => 20 * x - 0.1 * x * x - 50, [0, 200, -100, 1000], [[40, 590, "$x{=}40$", "above left"]], ["x", "P"], [T([40, 590], 12)]),
  "d5-061": P((t) => t ** 3 - 6 * t * t + 9 * t + 2, [0, 5, 0, 8], [[1, 6, "rest $(1,6)$", "above"], [3, 2, "rest $(3,2)$", "below right"]], ["t", "s"]),
  "d5-062": P((r) => PIc * r * r + 16 * PIc / r, [0, 5, 0, 120], [[2, 37.7, "min $r{=}2$", "above right"]], ["r", "A"]),
  "d5-063": P((t) => 20 + 30 * t - t * t, [0, 30, 0, 260], [[15, 245, "max $(15,245)$", "above"]], ["t", "T"]),
  "d5-064": P((t) => 2 + 10 * t - 5 * t * t, [0, 2.5, 0, 8], [[1, 7, "max $(1,7)$", "above"]], ["t", "h"]),
  "d5-065": P((t) => 3 * t * t - 3, [0, 3, -4, 25], [[0, -3, "min $v{=}-3$", "above right"]], ["t", "v"]),
  "d5-066": P((N) => 2 * N + 10 + 800 / N, [0, 40, 0, 200], [[20, 90, "min $(20,90)$", "above right"]], ["N", "C"]),
  "d5-067": P((x) => 2 * x + 200 / x, [0, 30, 0, 100], [[10, 40, "min $(10,40)$", "above right"]], ["x", "P"]),
  "d5-068": P((t) => 2 * t * t + 3 * t, [0, 4, 0, 40], [[3, 27, "$t{=}3$", "above left"]], ["t", "s"], [T([3, 27], 15)]),
  "d5-069": P((t) => 4 * t - t * t, [0, 5, -6, 6], [[2, 4, "max $v{=}4$", "above"]], ["t", "v"]),
  "d5-070": P((w) => 2 * w * w + 108 / w, [0, 6, 0, 150], [[3, 54, "min $(3,54)$", "above right"]], ["w", "S"]),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°—→×✓]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/✓/g, "$\\checkmark$");
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
function niceStep(r) { const t = r / 8; for (const c of [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000, 2000, 5000]) if (c >= t) return c; return 10000; }

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
  (spec.tangents || []).forEach((tg) => { const m = tg.m, [x0, y0] = tg.p, fn = (x) => y0 + m * (x - x0); t += `\\draw[${TAN},thick,dashed] (${f(px(Xa))},${f(py(cl(fn(Xa))))}) -- (${f(px(Xb))},${f(py(cl(fn(Xb))))});\n`; });
  spec.cs.forEach((c) => { const N = 280, pp = []; for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = c.fn(x); if (!isFinite(y)) continue; pp.push(`(${f(px(x))},${f(py(cl(y)))})`); } if (pp.length > 1) t += `\\draw[${CURVE},thick] ${pp.join(" -- ")};\n`; });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.7]{$${Number((Math.round(x * 100) / 100).toFixed(2)).toString()}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.7]{$${Number((Math.round(y * 100) / 100).toFixed(2)).toString()}$};\n`; }
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PT}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.78] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Real-Life Problems}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Differentiation (ref \\texttt{d5})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Real-Life Problems} questions (kinematics,
optimisation, and rates of change), each with a fully worked solution and a TikZ graph of the model:
displacement/area/volume/cost/etc.\\ plotted against its variable, with the optimum or rest point marked,
and a dashed \\textbf{tangent} drawn for the instantaneous-rate questions (velocity, marginal cost/revenue,
flow rate).
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
    L += `\\small The model plotted against its variable, with the key point(s) marked${D[q.id].tangents ? " and the tangent (dashed) showing the instantaneous rate" : ""}.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
