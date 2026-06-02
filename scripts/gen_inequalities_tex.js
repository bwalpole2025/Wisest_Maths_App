/* Generates Inequalities.tex from ise1_Inequalities.ts (number-line diagrams) */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise1_Inequalities.ts");
const OUT = path.join(__dirname, "..", "Inequalities.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- number-line spec helpers ----------
const NI = Infinity;
// region: {lo, hi, lc, rc, lab:[loLab,hiLab], name}
const r = (lo, hi, lc, rc, o = {}) => ({ lo, hi, lc: !!lc, rc: !!rc, loLab: o.loLab, hiLab: o.hiLab, name: o.name });
// NL(sol, extras?) — sol region (blue, on axis); extras drawn above for "satisfy both"
const NL = (sol, extras) => ({ sol, extras: extras || null });

const D = {
  "ise1-001": NL(r(-NI, 5, 0, 0)),
  "ise1-002": NL(r(4, NI, 1, 0)),
  "ise1-003": NL(r(3, NI, 0, 0)),
  "ise1-004": NL(r(-NI, -1, 0, 1)),
  "ise1-005": NL(r(3, NI, 0, 0)),
  "ise1-006": NL(r(-NI, 3, 0, 1)),
  "ise1-007": NL(r(-NI, 3, 0, 0)),
  "ise1-008": NL(r(3, NI, 1, 0)),
  "ise1-009": NL(r(4, NI, 0, 0)),
  "ise1-010": NL(r(-NI, 5, 0, 1)),
  "ise1-011": NL(r(-NI, -3, 0, 0)),
  "ise1-012": NL(r(-NI, 1, 0, 1)),
  "ise1-013": NL(r(3, NI, 0, 0)),
  "ise1-014": NL(r(4, NI, 1, 0)),
  "ise1-015": NL(r(-NI, -1, 0, 0)),
  "ise1-016": NL(r(-NI, 10, 0, 0)),
  "ise1-017": NL(r(4, NI, 0, 0)),
  "ise1-018": NL(r(4, NI, 1, 0)),
  "ise1-019": NL(r(-NI, 2, 0, 1)),
  "ise1-020": NL(r(3, NI, 0, 0)),
  "ise1-021": NL(r(-NI, 2, 0, 0)),
  "ise1-022": NL(r(-NI, 2, 0, 0)),
  "ise1-023": NL(r(-NI, -3, 0, 1)),
  "ise1-024": NL(r(-NI, 2.5, 0, 1, { hiLab: "\\frac{5}{2}" })),
  "ise1-025": NL(r(-5 / 7, NI, 0, 0, { loLab: "-\\frac{5}{7}" })),
  "ise1-026": NL(r(2, NI, 0, 0)),
  "ise1-027": NL(r(-NI, 10, 0, 1)),
  "ise1-028": NL(r(-NI, 18, 0, 0)),
  "ise1-029": NL(r(-NI, 13 / 5, 0, 1, { hiLab: "\\frac{13}{5}" })),
  "ise1-030": NL(r(4, NI, 0, 0)),
  "ise1-031": NL(r(-NI, 8, 0, 1)),
  "ise1-032": NL(r(0, NI, 0, 0)),
  "ise1-033": NL(r(5, NI, 1, 0)),
  "ise1-034": NL(r(7, NI, 0, 0)),
  "ise1-035": NL(r(3, NI, 0, 0)),
  "ise1-036": NL(r(-NI, 9, 0, 0)),
  "ise1-037": NL(r(13 / 2, NI, 1, 0, { loLab: "\\frac{13}{2}" })),
  "ise1-038": NL(r(-NI, 3, 0, 0)),
  "ise1-039": NL(r(-NI, -1, 0, 0)),
  "ise1-040": NL(r(2, NI, 1, 0)),
  "ise1-041": NL(r(-11, NI, 0, 0)),
  "ise1-042": NL(r(-NI, 10, 0, 1)),
  "ise1-043": NL(r(-NI, -10, 0, 0)),
  "ise1-044": NL(r(-NI, -1 / 5, 0, 1, { hiLab: "-\\frac{1}{5}" })),
  "ise1-045": NL(r(-54, NI, 0, 0)),
  "ise1-046": NL(r(-2, 4, 0, 1)),
  "ise1-047": NL(r(2, 5, 1, 0)),
  "ise1-048": NL(r(-2, 3, 0, 1)),
  "ise1-049": NL(r(-1, 3, 0, 0)),
  "ise1-050": NL(r(3, 6, 1, 0)),
  "ise1-051": NL(r(-4, 3, 1, 0)),
  "ise1-052": NL(r(-1 / 3, 2 / 3, 1, 1, { loLab: "-\\frac{1}{3}", hiLab: "\\frac{2}{3}" })),
  "ise1-053": NL(r(-1, 6, 0, 1)),
  "ise1-054": NL(r(-1, 9, 0, 0)),
  "ise1-055": NL(r(-9, 5, 0, 1)),
  "ise1-056": NL(r(2, 6, 1, 0)),
  "ise1-057": NL(r(-2, 7 / 4, 0, 1, { hiLab: "\\frac{7}{4}" })),
  "ise1-058": NL(r(-11 / 2, 3, 0, 1, { loLab: "-\\frac{11}{2}" })),
  "ise1-059": NL(r(-4, 5, 1, 1)),
  "ise1-060": NL(r(-5, 3, 0, 1)),
  "ise1-061": NL(r(-2, 4, 0, 0), [r(-NI, 4, 0, 0, { name: "x<4" }), r(-2, NI, 0, 0, { name: "x>-2" })]),
  "ise1-062": NL(r(2, 5, 0, 1), [r(-NI, 5, 0, 1, { name: "x\\le 5" }), r(2, NI, 0, 0, { name: "x>2" })]),
  "ise1-063": NL(r(-2, 5, 1, 1), [r(-NI, 5, 0, 1, { name: "x\\le 5" }), r(-2, NI, 1, 0, { name: "x\\ge -2" })]),
  "ise1-064": NL(r(-3, 4, 0, 0), [r(-3, NI, 0, 0, { name: "x>-3" }), r(-NI, 4, 0, 0, { name: "x<4" })]),
  "ise1-065": NL(r(1, 2, 0, 1), [r(-NI, 2, 0, 1, { name: "x\\le 2" }), r(1, NI, 0, 0, { name: "x>1" })]),
  "ise1-066": NL(r(7, NI, 0, 0), [r(4, NI, 1, 0, { name: "x\\ge 4" }), r(7, NI, 0, 0, { name: "x>7" })]),
  "ise1-067": NL(null, [r(-NI, -2, 0, 0, { name: "x<-2" }), r(2, NI, 1, 0, { name: "x\\ge 2" })]),
  "ise1-068": NL(r(3, 5, 1, 1), [r(3, NI, 1, 0, { name: "x\\ge 3" }), r(-NI, 5, 0, 1, { name: "x\\le 5" })]),
  "ise1-069": NL(r(2, 11, 0, 1), [r(2, NI, 0, 0, { name: "x>2" }), r(-NI, 11, 0, 1, { name: "x\\le 11" })]),
  "ise1-070": NL(r(-10, 7, 0, 1), [r(-10, NI, 0, 0, { name: "x>-10" }), r(-NI, 7, 0, 1, { name: "x\\le 7" })]),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/✓/g, "\\checkmark ").replace(/−/g, "-").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/(?<!\\)%/g, "\\%").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—→×÷✓−⟹]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/[–]/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/÷/g, "$\\div$").replace(/−/g, "-").replace(/⟹/g, "$\\Rightarrow$").replace(/✓/g, "$\\checkmark$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@").replace(/\\,/g, "@TS@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ").replace(/@TS@/g, "\\,");
function textMath(x) {
  const isl = [];
  let y = x.replace(/\\text\{([^}]*)\}/g, "$1").replace(/\\mathrm\{([^}]*)\}/g, "$1").replace(/\\pounds\s*/g, "£");
  y = y.replace(/\\[tdc]?frac\{[^{}]*\}\{[^{}]*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\sqrt\{[^{}]*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\(approx|times|div|to|Rightarrow|leq|geq|le|ge|cdot|pm|infty|ne|propto|ln|log)\b/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/[A-Za-z0-9.]+(?:\^|_)(?:\{[^{}]*\}|[A-Za-z0-9.]+)/g, (m) => `@I${isl.push(m) - 1}@`);
  y = escTxt(y);
  y = y.replace(/@I(\d+)@/g, (_, i) => "$" + ctl(isl[+i]) + "$");
  return y;
}
function prose(s0) {
  const s = protect(s0);
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/gs;
  while ((m = re.exec(s))) { o += textMath(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += textMath(s.slice(last)); return restore(o);
}
function ans(s0) {
  const s = protect(s0);
  if (s.includes("\\(")) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/gs;
    while ((m = re.exec(s))) { o += textMath(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += textMath(s.slice(last)); return restore(o);
  }
  const bare = s0.replace(/\\[a-zA-Z]+/g, "");
  if (/[A-Za-z]{4,}/.test(bare) || /\b(or|and|vs)\b/i.test(bare)) return restore(textMath(s));
  return "\\(\\displaystyle " + ctl(s0) + "\\)";   // pure math (inequalities, set/interval notation)
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
const SOLC = "blue!72!black", C1 = "red!70!black", C2 = "green!50!black";

function numline(spec) {
  const all = [];
  const collect = (rg) => { if (rg && isFinite(rg.lo)) all.push(rg.lo); if (rg && isFinite(rg.hi)) all.push(rg.hi); };
  collect(spec.sol); (spec.extras || []).forEach(collect);
  let minV = Math.min(...all), maxV = Math.max(...all);
  if (!isFinite(minV)) { minV = 0; maxV = 0; }
  let Lo = Math.floor(minV - 2), Hi = Math.ceil(maxV + 2);
  if (Hi - Lo < 6) { const pad = (6 - (Hi - Lo)) / 2; Lo = Math.floor(Lo - pad); Hi = Math.ceil(Hi + pad); }
  const W = 12, span = Hi - Lo, px = (x) => (x - Lo) / span * W;
  const xstep = span > 26 ? 5 : span > 13 ? 2 : 1;
  let t = "\\begin{tikzpicture}[>={Stealth[length=2.4mm]},font=\\footnotesize,line cap=round]\n";
  const axisY = 0;
  // axis
  t += `\\draw[<->,gray!75!black] (${f(px(Lo) - 0.2)},${axisY}) -- (${f(px(Hi) + 0.2)},${axisY});\n`;
  for (let v = Math.ceil(Lo / xstep) * xstep; v <= Hi + 1e-9; v += xstep) {
    t += `\\draw[gray!70] (${f(px(v))},${axisY - 0.1}) -- (${f(px(v))},${axisY + 0.1});\n`;
    t += `\\node[below,gray!55!black,scale=0.8] at (${f(px(v))},${axisY - 0.12}) {$${v}$};\n`;
  }
  const circ = (x, y, closed, color) => closed
    ? `\\fill[${color}] (${f(px(x))},${f(y)}) circle (2.6pt);\n`
    : `\\draw[${color},line width=1pt,fill=white] (${f(px(x))},${f(y)}) circle (2.6pt);\n`;
  const region = (rg, y, color, lw) => {
    let s = "";
    const xL = isFinite(rg.lo) ? px(rg.lo) : px(Lo), xR = isFinite(rg.hi) ? px(rg.hi) : px(Hi);
    if (!isFinite(rg.lo) && isFinite(rg.hi)) s += `\\draw[${color},line width=${lw},->] (${f(xR)},${f(y)}) -- (${f(px(Lo) - 0.15)},${f(y)});\n`;
    else if (isFinite(rg.lo) && !isFinite(rg.hi)) s += `\\draw[${color},line width=${lw},->] (${f(xL)},${f(y)}) -- (${f(px(Hi) + 0.15)},${f(y)});\n`;
    else if (isFinite(rg.lo) && isFinite(rg.hi)) s += `\\draw[${color},line width=${lw}] (${f(xL)},${f(y)}) -- (${f(xR)},${f(y)});\n`;
    if (isFinite(rg.lo)) s += circ(rg.lo, y, rg.lc, color);
    if (isFinite(rg.hi)) s += circ(rg.hi, y, rg.rc, color);
    return s;
  };
  const lab = (rg) => {
    let s = "";
    if (isFinite(rg.lo) && (rg.loLab || !Number.isInteger(rg.lo))) { s += `\\draw[${SOLC}] (${f(px(rg.lo))},${axisY - 0.1}) -- (${f(px(rg.lo))},${axisY + 0.1});\n`; s += `\\node[above,${SOLC},scale=0.82] at (${f(px(rg.lo))},${axisY + 0.16}) {$${rg.loLab || rg.lo}$};\n`; }
    if (isFinite(rg.hi) && (rg.hiLab || !Number.isInteger(rg.hi))) { s += `\\draw[${SOLC}] (${f(px(rg.hi))},${axisY - 0.1}) -- (${f(px(rg.hi))},${axisY + 0.1});\n`; s += `\\node[above,${SOLC},scale=0.82] at (${f(px(rg.hi))},${axisY + 0.16}) {$${rg.hiLab || rg.hi}$};\n`; }
    return s;
  };
  // extras (the two contributing inequalities) drawn above
  if (spec.extras) {
    const cols = [C1, C2];
    spec.extras.forEach((rg, i) => {
      const y = 0.7 + i * 0.55;
      t += region(rg, y, cols[i], "1.1pt");
      if (rg.name) t += `\\node[right,${cols[i]},scale=0.82] at (${f(px(Hi) + 0.25)},${f(y)}) {$${rg.name}$};\n`;
    });
  }
  if (spec.sol) { t += region(spec.sol, axisY, SOLC, "1.8pt"); t += lab(spec.sol); }
  else {
    t += `\\node[${C1},scale=0.85] at (${f(px((Lo + Hi) / 2))},${f(0.1)}) {no common region $\\Rightarrow$ no solution};\n`;
  }
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

\\title{\\textbf{Inequalities}\\\\[0.3em]\\large Worked Solutions with TikZ Number-Line Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Solving Linear Inequalities (ref \\texttt{ise1})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Solving Linear Inequalities} questions, each with a
fully worked solution and a TikZ number-line diagram of the solution set. Open circles denote strict
\\(<\\)/\\(>\\) and filled circles denote \\(\\le\\)/\\(\\ge\\); the shaded ray or segment is the solution. For the
\\emph{satisfy both} questions the two contributing inequalities are drawn above the axis and their intersection
is shown on the axis.
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
    L += `\\textbf{Solution on a number line.}\n\n\\begin{center}\n${numline(D[q.id])}\n\\end{center}\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
