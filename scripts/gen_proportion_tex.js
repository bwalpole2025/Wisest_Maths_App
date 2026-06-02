/* Generates Proportion.tex from cg4_proportion.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Coordinate_Geometry/cg4_proportion.ts");
const OUT = path.join(__dirname, "..", "Proportion.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const L1 = "blue!70!black", L2 = "teal!70!black", DIV = "purple!70!black", PI = Math.PI;
const fns = {
  lin: (k) => (x) => k * x,
  sq: (k) => (x) => k * x * x,
  cube: (k) => (x) => k * x * x * x,
  sqrt: (k) => (x) => k * Math.sqrt(x),
  inv: (k) => (x) => k / x,
  invsq: (k) => (x) => k / (x * x),
  invsqrt: (k) => (x) => k / Math.sqrt(x),
  shift: (k) => (x) => k * (x + 1) * (x + 1),
};
const INVERSE = new Set(["inv", "invsq", "invsqrt"]);

// per-question specs: {curves:[{kind,k,color}], lines:[{m,c,color}], pts:[[x,y,label,anchor]], xlabel,ylabel}
const D = {
  "cg4-001": { curves: [{ kind: "lin", k: 5 }], pts: [[9, 45, "$(9,45)$"], [5, 25, "$(5,25)$"]] },
  "cg4-002": { curves: [{ kind: "lin", k: 9 }], pts: [[4, 36, "$(4,36)$"], [7, 63, "$(7,63)$"]] },
  "cg4-003": { curves: [{ kind: "lin", k: 0.125 }], pts: [[48, 6, "$(48,6)$"], [200, 25, "$(200,25)$"]], xlabel: "\\text{km}", ylabel: "\\text{litres}" },
  "cg4-004": { curves: [{ kind: "lin", k: 0.5 }], pts: [[30, 15, "$(30,15)$"], [60, 30, "$(60,30)$"]] },
  "cg4-005": { curves: [{ kind: "lin", k: 28 }], pts: [[3, 84, "$(3,84)$"], [7, 196, "$(7,196)$"]], xlabel: "\\text{hours}", ylabel: "\\pounds" },
  "cg4-006": { curves: [{ kind: "lin", k: 2.5 }], pts: [[12, 30, "$(12,30)$"], [30, 75, "$(30,75)$"]] },
  "cg4-007": { curves: [{ kind: "lin", k: 0.15 }], pts: [[80, 12, "$(80,12)$"], [350, 52.5, "$(350,52.5)$"]], xlabel: "n", ylabel: "\\pounds" },
  "cg4-008": { curves: [{ kind: "lin", k: 0.4 }], pts: [[15, 6, "$(15,6)$"], [40, 16, "$(40,16)$"], [22.5, 9, "$(22.5,9)$"]], xlabel: "F", ylabel: "e" },
  "cg4-009": { curves: [{ kind: "inv", k: 40 }], pts: [[5, 8, "$(5,8)$"], [20, 2, "$(20,2)$"]] },
  "cg4-010": { curves: [{ kind: "inv", k: 60 }], pts: [[15, 4, "$(15,4)$"], [3, 20, "$(3,20)$"]] },
  "cg4-011": { curves: [{ kind: "inv", k: 240 }], pts: [[80, 3, "$(80,3)$"], [60, 4, "$(60,4)$"]], xlabel: "v", ylabel: "t" },
  "cg4-012": { curves: [{ kind: "inv", k: 36 }], pts: [[4, 9, "$(4,9)$"], [1, 36, "$(1,36)$"]] },
  "cg4-013": { curves: [{ kind: "inv", k: 60 }], pts: [[6, 10, "$(6,10)$"], [4, 15, "$(4,15)$"], [12, 5, "$(12,5)$"]], xlabel: "w", ylabel: "d" },
  "cg4-014": { curves: [{ kind: "inv", k: 144 }], pts: [[6, 24, "$(6,24)$"], [24, 6, "$(24,6)$"]] },
  "cg4-015": { curves: [{ kind: "inv", k: 1000 }], pts: [[250, 4, "$(250,4)$"], [400, 2.5, "$(400,2.5)$"]], xlabel: "P", ylabel: "V" },
  "cg4-016": { curves: [{ kind: "sq", k: 3 }], pts: [[5, 75, "$(5,75)$"], [4, 48, "$(4,48)$"]] },
  "cg4-017": { curves: [{ kind: "sq", k: 4 * PI }], pts: [[3, 113.1, "$(3,36\\pi)$"], [5, 314.2, "$(5,100\\pi)$"]], xlabel: "r", ylabel: "A" },
  "cg4-018": { curves: [{ kind: "sq", k: 5 }], pts: [[2, 20, "$(2,20)$"], [5, 125, "$(5,125)$"]] },
  "cg4-019": { curves: [{ kind: "sq", k: 0.01 }], pts: [[30, 9, "$(30,9)$"], [50, 25, "$(50,25)$"], [60, 36, "$(60,36)$"]], xlabel: "v", ylabel: "d" },
  "cg4-020": { curves: [{ kind: "sq", k: 3 }], pts: [[2, 12, "$(2,12)$"], [3, 27, "$(3,27)$"]] },
  "cg4-021": { curves: [{ kind: "sq", k: 5 }], pts: [[3, 45, "$(3,45)$"], [5, 125, "$(5,125)$"]], xlabel: "I", ylabel: "P" },
  "cg4-022": { curves: [{ kind: "invsq", k: 144 }], pts: [[3, 16, "$(3,16)$"], [6, 4, "$(6,4)$"]] },
  "cg4-023": { curves: [{ kind: "invsq", k: 200 }], pts: [[2, 50, "$(2,50)$"], [5, 8, "$(5,8)$"]], xlabel: "d", ylabel: "I" },
  "cg4-024": { curves: [{ kind: "invsq", k: 100 }], pts: [[2, 25, "$(2,25)$"], [10, 1, "$(10,1)$"]] },
  "cg4-025": { curves: [{ kind: "invsq", k: 180 }], pts: [[3, 20, "$(3,20)$"], [6, 5, "$(6,5)$"]], xlabel: "r", ylabel: "F" },
  "cg4-026": { curves: [{ kind: "invsq", k: 144 }], pts: [[4, 9, "$(4,9)$"], [12, 1, "$(12,1)$"]] },
  "cg4-027": { curves: [{ kind: "sqrt", k: 3 }], pts: [[25, 15, "$(25,15)$"], [64, 24, "$(64,24)$"]] },
  "cg4-028": { curves: [{ kind: "sqrt", k: 2 }], pts: [[9, 6, "$(9,6)$"], [25, 10, "$(25,10)$"]] },
  "cg4-031": { curves: [{ kind: "sqrt", k: 0.2 }], pts: [[100, 2, "$(100,2)$"], [225, 3, "$(225,3)$"]], xlabel: "L", ylabel: "T" },
  "cg4-033": { curves: [{ kind: "sq", k: 7 }], pts: [[2, 28, "$(2,28)$"], [5, 175, "$(5,175)$"], [3, 63, "$(3,63)$"]] },
  "cg4-034": { curves: [{ kind: "inv", k: 60, color: L1 }, { kind: "sq", k: 5, color: L2 }], pts: [[2.289, 26.2, "$P=R$", "above left", DIV]], xlabel: "Q", ylabel: "P,\\,R" },
  "cg4-035": { curves: [{ kind: "invsq", k: 200 }], pts: [[2, 50, "$(2,50)$"], [5, 8, "$(5,8)$"], [10, 2, "$(10,2)$"]] },
  "cg4-036": { curves: [{ kind: "lin", k: 3 }], pts: [[5, 15, "$(5,15)$"], [8, 24, "$(8,24)$"]] },
  "cg4-037": { curves: [{ kind: "inv", k: 24 }], pts: [[4, 6, "$(4,6)$"], [12, 2, "$(12,2)$"]] },
  "cg4-038": { curves: [{ kind: "sq", k: 4 }], pts: [[3, 36, "$(3,36)$"], [5, 100, "$(5,100)$"]] },
  "cg4-039": { curves: [{ kind: "invsqrt", k: 12 }], pts: [[9, 4, "$(9,4)$"], [16, 3, "$(16,3)$"]] },
  "cg4-040": { curves: [{ kind: "lin", k: 1.5 }], pts: [[25, 37.5, "$(25,37.5)$"], [40, 60, "$(40,60)$"]], xlabel: "V", ylabel: "\\pounds" },
  "cg4-041": { curves: [{ kind: "cube", k: 5 }], pts: [[2, 40, "$(2,40)$"], [3, 135, "$(3,135)$"]] },
  "cg4-042": { curves: [{ kind: "inv", k: 120 }], pts: [[60, 2, "$(60,2)$"], [80, 1.5, "$(80,1.5)$"]], xlabel: "s", ylabel: "T" },
  "cg4-043": { curves: [{ kind: "sqrt", k: 2 }], pts: [[25, 10, "$(25,10)$"], [49, 14, "$(49,14)$"]], xlabel: "Q", ylabel: "P" },
  "cg4-044": { curves: [{ kind: "invsq", k: 20 }], pts: [[2, 5, "$(2,5)$"], [10, 0.2, "$(10,0.2)$"]] },
  "cg4-045": { curves: [{ kind: "lin", k: 1, color: L1 }, { kind: "sq", k: 1, color: L2 }, { kind: "inv", k: 1, color: DIV }] },
  "cg4-046": { curves: [{ kind: "cube", k: 4 }], pts: [[3, 108, "$(3,108)$"], [5, 500, "$(5,500)$"]], xlabel: "r", ylabel: "W" },
  "cg4-047": { curves: [{ kind: "shift", k: 3 }], pts: [[2, 27, "$(2,27)$"], [4, 75, "$(4,75)$"]] },
  "cg4-048": { curves: [{ kind: "invsq", k: 400 }], pts: [[2, 100, "$(2,100)$"], [5, 16, "$(5,16)$"]], xlabel: "d", ylabel: "I" },
  "cg4-049": { curves: [{ kind: "inv", k: 24, color: L1 }], lines: [{ m: 1, c: 0, color: L2 }], pts: [[4.899, 4.899, "$y=x$", "above left", DIV]] },
  "cg4-050": { curves: [{ kind: "sq", k: 1 }], pts: [[2, 4, "$(2,4)$"], [6, 36, "$(6,36)$"]] },
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/Ω/g, "\\Omega ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/³/g, "^{3}").replace(/²/g, "^{2}").replace(/√/g, "\\sqrt").replace(/—/g, "-").replace(/£/g, "\\pounds ").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£²³Ω→×—]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/Ω/g, "$\\Omega$").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/—/g, "---");
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
const trim = (x) => (Math.round(x * 1000) / 1000).toString();
function niceStep(r) { const t = r / 8; for (const c of [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500]) if (c >= t) return c; return 1000; }

function graph(spec) {
  const CW = 9.2, CH = 6.0;
  let xs = [0], ys = [0];
  const add = (x, y) => { xs.push(x); ys.push(y); };
  (spec.pts || []).forEach((p) => add(p[0], p[1]));
  let xmin = Math.min(...xs), xmax = Math.max(...xs);
  if (xmax - xmin < 1e-6) { xmin -= 4; xmax += 4; }
  // lines contribute y at window ends
  (spec.lines || []).forEach((l) => { if (l.m !== undefined) { ys.push(l.m * xmin + l.c); ys.push(l.m * xmax + l.c); } });
  let ymin = Math.min(...ys), ymax = Math.max(...ys);
  if (ymax - ymin < 1e-6) { ymin -= 4; ymax += 4; }
  let Xa = spec.win ? spec.win[0] : Math.min(0, Math.floor(xmin)), Xb = spec.win ? spec.win[1] : Math.ceil(xmax * 1.12 + 0.5);
  let Ya = spec.win ? spec.win[2] : Math.min(0, Math.floor(ymin)), Yb = spec.win ? spec.win[3] : Math.ceil(ymax * 1.12 + 0.5);
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!18] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  (spec.lines || []).forEach((l) => { const col = l.color || L2; t += `\\draw[${col},thick] (${f(px(Xa))},${f(py(l.m * Xa + l.c))}) -- (${f(px(Xb))},${f(py(l.m * Xb + l.c))});\n`; });
  (spec.curves || []).forEach((c) => {
    const fn = fns[c.kind](c.k), col = c.color || L1;
    const d0 = INVERSE.has(c.kind) ? Math.max(Xa, 0) + (Xb - Xa) / 400 : Math.max(Xa, 0);
    const N = 200, pts = [], span = Yb - Ya, lo = Ya - span, hi = Yb + span;
    for (let i = 0; i <= N; i++) { const x = d0 + (Xb - d0) * (i / N); let y = fn(x); if (!isFinite(y)) continue; y = Math.max(lo, Math.min(hi, y)); pts.push(`(${f(px(x))},${f(py(y))})`); }
    t += `\\draw[${col},thick] ${pts.join(" -- ")};\n`;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=2pt,scale=0.8]{$${trim(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=2pt,scale=0.8]{$${trim(y)}$};\n`; }
  (spec.pts || []).forEach((p) => { const col = p[4] || "red!80!black", anc = p[3] || "above left"; t += `\\fill[${col}] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.3pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.85] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Proportion}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Coordinate Geometry (ref \\texttt{cg4})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Proportion} questions, each with a fully worked
solution and a TikZ graph of the relationship: a straight line through the origin for direct proportion,
a parabola for $y \\propto x^{2}$, a cube curve for $y \\propto x^{3}$, a square-root curve for
$y \\propto \\sqrt{x}$, and a hyperbola for inverse proportion. The given and required data points are marked
on each curve. (The two pure algebraic-proof questions have no graph.)
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
    if (st.workingLatex) L += `\\[\\begin{gathered}\n${ctl(st.workingLatex)}\n\\end{gathered}\\]\n`;
    if (st.explanation) L += `${prose(st.explanation)}\n\n`;
  });
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad ${ans(q.workedSolution.finalAnswer)}\n\\end{answerbox}\n`;
  if (q.workedSolution.commonMistakes && q.workedSolution.commonMistakes.length)
    L += `\\textbf{Common mistake.} ` + q.workedSolution.commonMistakes.map(prose).join(" ") + `\n\n`;
  if (D[q.id]) {
    L += `\\textbf{Graph.}\n\n\\begin{center}\n${graph(D[q.id])}\n\\end{center}\n`;
    L += `\\small The relationship plotted, with the data points marked.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " graphs)");
