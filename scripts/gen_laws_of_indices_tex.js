/* Generates Laws_of_Indices.tex from a4_laws_of_indices.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Algebra/a4_laws_of_indices.ts"
);
const OUT = path.join(__dirname, "..", "Laws_of_Indices.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, {
  compilerOptions: { module: "esnext", target: "es2020" },
});
const js = out.outputText
  .replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "")
  .replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---- per-question diagrams ----
// core: {type, law, expr, rule, result}            law-card
// frac: {type, aFrac, mid, result, p, q}           power/root split
// flow: {type, stages:[...], labels:[...]}         operation chain
const D = {
  "a4-001": { type: "core", law: "a^{m}\\times a^{n}=a^{m+n}", expr: "5^{3}\\times 5^{4}", rule: "same base: add the powers, $3+4=7$", result: "5^{7}" },
  "a4-002": { type: "core", law: "a^{m}\\div a^{n}=a^{m-n}", expr: "8^{5}\\div 8^{2}", rule: "same base: subtract the powers, $5-2=3$", result: "8^{3}" },
  "a4-003": { type: "core", law: "(a^{m})^{n}=a^{mn}", expr: "(6^{3})^{2}", rule: "power of a power: multiply, $3\\times 2=6$", result: "6^{6}" },
  "a4-004": { type: "core", law: "a^{m}\\times a^{n}=a^{m+n}", expr: "y^{-1}\\times y^{2}\\times y^{3}", rule: "add the powers: $-1+2+3=4$", result: "y^{4}" },
  "a4-005": { type: "core", law: "\\dfrac{a^{m}}{a^{n}}=a^{m-n}", expr: "\\dfrac{6^{11}}{6^{6}}", rule: "subtract the powers: $11-6=5$", result: "6^{5}" },
  "a4-006": { type: "core", law: "\\dfrac{a^{m}}{a^{n}}=a^{m-n}", expr: "\\dfrac{r^{2}}{r^{6}}", rule: "subtract: $2-6=-4$", result: "r^{-4}" },
  "a4-007": { type: "core", law: "(a^{m})^{n}=a^{mn}", expr: "(k^{-2})^{5}", rule: "multiply: $-2\\times 5=-10$", result: "k^{-10}" },
  "a4-008": { type: "core", law: "a^{m}\\times a^{n}=a^{m+n}", expr: "4^{\\frac{1}{2}}\\times 4^{\\frac{1}{2}}", rule: "add: $\\tfrac12+\\tfrac12=1$, so $4^{1}=4$", result: "4" },
  "a4-009": { type: "core", law: "a^{m}\\div a^{n}=a^{m-n}", expr: "3^{4}\\div 3^{1}", rule: "subtract: $4-1=3$, so $3^{3}=27$", result: "27" },
  "a4-010": { type: "flow", stages: ["(2^{3})^{2}\\div 2^{4}", "2^{6}\\div 2^{4}", "2^{2}=4"], labels: ["power of a power", "subtract powers"] },
  "a4-011": { type: "core", law: "a^{0}=1", expr: "7^{0}", rule: "any non-zero base to the power $0$ equals $1$", result: "1" },
  "a4-012": { type: "core", law: "a^{0}=1", expr: "\\left(\\dfrac{3}{5}\\right)^{0}", rule: "any non-zero base to the power $0$ equals $1$", result: "1" },
  "a4-013": { type: "frac", aFrac: "9^{\\frac{1}{2}}", mid: "\\sqrt{9}", result: "3", p: "1", q: "2" },
  "a4-014": { type: "frac", aFrac: "8^{\\frac{1}{3}}", mid: "\\sqrt[3]{8}", result: "2", p: "1", q: "3" },
  "a4-015": { type: "frac", aFrac: "27^{\\frac{1}{3}}", mid: "\\sqrt[3]{27}", result: "3", p: "1", q: "3" },
  "a4-016": { type: "frac", aFrac: "16^{\\frac{3}{4}}", mid: "\\big(\\sqrt[4]{16}\\big)^{3}=2^{3}", result: "8", p: "3", q: "4" },
  "a4-017": { type: "frac", aFrac: "25^{\\frac{3}{2}}", mid: "\\big(\\sqrt{25}\\big)^{3}=5^{3}", result: "125", p: "3", q: "2" },
  "a4-018": { type: "frac", aFrac: "32^{\\frac{2}{5}}", mid: "\\big(\\sqrt[5]{32}\\big)^{2}=2^{2}", result: "4", p: "2", q: "5" },
  "a4-019": { type: "core", law: "a^{-n}=\\dfrac{1}{a^{n}}", expr: "4^{-\\frac{1}{2}}", rule: "negative power $\\Rightarrow$ reciprocal: $\\dfrac{1}{4^{1/2}}=\\dfrac{1}{2}$", result: "\\dfrac{1}{2}" },
  "a4-020": { type: "core", law: "a^{-\\frac{p}{q}}=\\dfrac{1}{(\\sqrt[q]{a})^{p}}", expr: "27^{-\\frac{2}{3}}", rule: "reciprocal of $27^{2/3}=(\\sqrt[3]{27})^{2}=9$", result: "\\dfrac{1}{9}" },
  "a4-021": { type: "core", law: "\\dfrac{1}{a^{n}}=a^{-n}", expr: "\\dfrac{1}{m}", rule: "a denominator becomes a negative power", result: "m^{-1}" },
  "a4-022": { type: "frac", aFrac: "\\sqrt[3]{n}", mid: "n^{\\frac{1}{3}}", result: "n^{\\frac{1}{3}}", p: "1", q: "3" },
  "a4-023": { type: "core", law: "\\dfrac{1}{\\sqrt[q]{a}}=a^{-\\frac{1}{q}}", expr: "\\dfrac{1}{\\sqrt{t}}", rule: "$\\sqrt{t}=t^{1/2}$, then reciprocal gives $t^{-1/2}$", result: "t^{-\\frac{1}{2}}" },
  "a4-024": { type: "flow", stages: ["\\Big(\\dfrac{1}{\\sqrt[3]{x}}\\Big)^{2}", "\\big(x^{-\\frac{1}{3}}\\big)^{2}", "x^{-\\frac{2}{3}}"], labels: ["rewrite as a power", "multiply powers"] },
  "a4-025": { type: "core", law: "(a^{m})^{n}=a^{mn}", expr: "(z^{4})^{\\frac{1}{2}}", rule: "multiply: $4\\times\\tfrac12=2$", result: "z^{2}" },
  "a4-026": { type: "core", law: "(a^{m})^{n}=a^{mn}", expr: "(8^{4})^{-\\frac{1}{2}}", rule: "multiply: $4\\times(-\\tfrac12)=-2$, so $8^{-2}=\\tfrac{1}{64}$", result: "\\dfrac{1}{64}" },
  "a4-027": { type: "flow", stages: ["\\dfrac{2^{3}\\times 2}{2^{5}}", "\\dfrac{2^{4}}{2^{5}}", "2^{-1}=\\dfrac{1}{2}"], labels: ["add (top)", "subtract"] },
  "a4-028": { type: "flow", stages: ["\\dfrac{7^{3}\\times 7^{4}}{7^{6}}", "\\dfrac{7^{7}}{7^{6}}", "7^{1}=7"], labels: ["add (top)", "subtract"] },
  "a4-029": { type: "flow", stages: ["(3^{2})^{3}\\div(3^{1})^{4}", "3^{6}\\div 3^{4}", "3^{2}=9"], labels: ["powers of powers", "subtract"] },
  "a4-030": { type: "flow", stages: ["\\dfrac{(2^{\\frac12})^{6}\\times(2^{-1})^{4}}{(2^{-4})^{-2}}", "\\dfrac{2^{3}\\times 2^{-4}}{2^{8}}", "\\dfrac{2^{-1}}{2^{8}}=2^{-9}", "\\dfrac{1}{512}"], labels: ["powers of powers", "add (top)", "subtract"] },
  "a4-031": { type: "flow", stages: ["\\dfrac{a^{5}\\times a^{3}}{a^{2}}", "\\dfrac{a^{8}}{a^{2}}", "a^{6}"], labels: ["add (top)", "subtract"] },
  "a4-032": { type: "flow", stages: ["\\dfrac{c^{4}d^{\\frac12}}{c^{-1}d^{3}}", "c^{\\,4-(-1)}\\,d^{\\,\\frac12-3}", "c^{5}d^{-\\frac{5}{2}}"], labels: ["subtract powers per base", "simplify"] },
  "a4-033": { type: "flow", stages: ["\\dfrac{12yz^{\\frac13}}{4yz^{\\frac12}}", "3\\,z^{\\frac13-\\frac12}", "3z^{-\\frac{1}{6}}"], labels: ["divide coeffs, subtract powers", "simplify"] },
  "a4-034": { type: "core", law: "(ab)^{n}=a^{n}b^{n}", expr: "(ab^{2})^{3}", rule: "raise each factor: $a^{3}(b^{2})^{3}=a^{3}b^{6}$", result: "a^{3}b^{6}" },
  "a4-035": { type: "core", law: "(ab)^{n}=a^{n}b^{n}", expr: "(mn^{\\frac{1}{2}})^{4}", rule: "raise each factor: $m^{4}(n^{\\frac12})^{4}=m^{4}n^{2}$", result: "m^{4}n^{2}" },
  "a4-036": { type: "flow", stages: ["\\dfrac{p^{3}q^{4}}{p^{5}q}", "p^{\\,3-5}\\,q^{\\,4-1}", "p^{-2}q^{3}"], labels: ["subtract powers per base", "simplify"] },
  "a4-037": { type: "flow", stages: ["(4^{-\\frac12})^{2}\\times(4^{-1})^{\\frac12}", "4^{-1}\\times 4^{-\\frac12}", "4^{-\\frac{3}{2}}=\\dfrac{1}{8}"], labels: ["powers of powers", "add powers"] },
  "a4-038": { type: "flow", stages: ["4^{x}=\\sqrt{4}", "4^{x}=4^{\\frac{1}{2}}", "x=\\dfrac{1}{2}"], labels: ["same base", "equate powers"] },
  "a4-039": { type: "flow", stages: ["9^{x}=\\dfrac{1}{3}", "3^{2x}=3^{-1}", "2x=-1\\Rightarrow x=-\\dfrac{1}{2}"], labels: ["same base $3$", "equate powers"] },
  "a4-040": { type: "flow", stages: ["\\sqrt{5}\\times 5^{3}=5^{x}", "5^{\\frac{1}{2}+3}=5^{x}", "x=\\dfrac{7}{2}"], labels: ["add powers", "equate powers"] },
  "a4-041": { type: "core", law: "a^{m}\\times a^{n}=a^{m+n}", expr: "10^{6}\\times 10^{-2}", rule: "add: $6+(-2)=4$", result: "10^{4}" },
  "a4-042": { type: "frac", aFrac: "64^{\\frac{1}{3}}", mid: "\\sqrt[3]{64}", result: "4", p: "1", q: "3" },
  "a4-043": { type: "core", law: "a^{m}\\div a^{n}=a^{m-n}", expr: "w^{7}\\div w^{-3}", rule: "subtract: $7-(-3)=10$", result: "w^{10}" },
  "a4-044": { type: "frac", aFrac: "100^{\\frac{3}{2}}", mid: "\\big(\\sqrt{100}\\big)^{3}=10^{3}", result: "1000", p: "3", q: "2" },
  "a4-045": { type: "flow", stages: ["\\dfrac{(3^{2})^{4}}{3^{5}}", "\\dfrac{3^{8}}{3^{5}}", "3^{3}=27"], labels: ["power of a power", "subtract"] },
  "a4-046": { type: "core", law: "a^{-n}=\\dfrac{1}{a^{n}}", expr: "2^{-3}", rule: "negative power $\\Rightarrow$ reciprocal: $\\dfrac{1}{2^{3}}=\\dfrac18$", result: "\\dfrac{1}{8}" },
  "a4-047": { type: "core", law: "a^{m}\\times a^{n}=a^{m+n}", expr: "d^{\\frac{1}{2}}\\times d^{\\frac{3}{2}}", rule: "add: $\\tfrac12+\\tfrac32=2$", result: "d^{2}" },
  "a4-048": { type: "flow", stages: ["2^{x}=16", "2^{x}=2^{4}", "x=4"], labels: ["same base $2$", "equate powers"] },
  "a4-049": { type: "flow", stages: ["\\dfrac{5^{4}\\times 5^{-2}}{5^{3}}", "\\dfrac{5^{2}}{5^{3}}", "5^{-1}=\\dfrac{1}{5}"], labels: ["add (top)", "subtract"] },
  "a4-050": { type: "frac", aFrac: "8^{\\frac{2}{3}}", mid: "\\big(\\sqrt[3]{8}\\big)^{2}=2^{2}", result: "4", p: "2", q: "3" },
};

function escTxt(t) {
  return t.replace(/\\/g, "").replace(/&/g, "\\&").replace(/%/g, "\\%").replace(/#/g, "\\#").replace(/_/g, "\\_");
}
function prose(s) {
  let o = "", last = 0, m;
  const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + m[1] + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last));
  return o;
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;

function diagCore(d) {
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]}]
\\node[draw=teal!55,rounded corners,fill=teal!8,inner sep=4pt] (rule) at (3.2,1.25) {$\\displaystyle ${d.law}$};
\\node (L) at (0,0) {$\\displaystyle ${d.expr}$};
\\node (R) at (6.4,0) {$\\displaystyle =\\ ${d.result}$};
\\draw[->,thick] (L) -- (R) node[midway,below=3pt,font=\\small,align=center]{${d.rule}};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagFrac(d) {
  const t = `\\begin{tikzpicture}[node distance=5mm and 7mm]
\\node (e) {$\\displaystyle ${d.aFrac}$};
\\node (eq) [right=of e] {$=$};
\\node (mid) [right=of eq] {$\\displaystyle ${d.mid}$};
\\node (res) [right=of mid] {$\\displaystyle =\\ ${d.result}$};
\\node[red!70!black,font=\\footnotesize,above=2pt of e] {numerator $=${d.p}$ (power)};
\\node[blue!70!black,font=\\footnotesize,below=2pt of e] {denominator $=${d.q}$ (root)};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagFlow(d) {
  let t = `\\begin{tikzpicture}[>={Stealth[length=2mm]},node distance=1.5cm and 3.4cm]\n`;
  d.stages.forEach((s, i) => {
    if (i === 0) t += `\\node (s0) {$\\displaystyle ${s}$};\n`;
    else t += `\\node (s${i}) [right=of s${i - 1}] {$\\displaystyle ${s}$};\n`;
  });
  for (let i = 1; i < d.stages.length; i++)
    t += `\\draw[->,thick] (s${i - 1}) -- (s${i}) node[midway,above,font=\\small]{${d.labels[i - 1]}};\n`;
  t += `\\end{tikzpicture}`;
  return wrap(t);
}
function diagram(id) {
  const d = D[id];
  if (!d) return null;
  if (d.type === "core") return diagCore(d);
  if (d.type === "frac") return diagFrac(d);
  if (d.type === "flow") return diagFlow(d);
  return null;
}
const cap = {
  core: "Index-law card: the boxed general rule (teal) is applied to the expression.",
  frac: "Fractional index: the \\emph{denominator} gives the root, the \\emph{numerator} gives the power.",
  flow: "Solution flow: each arrow applies one index law.",
};

let L = `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{textcomp}
\\usepackage[a4paper,margin=2.1cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{graphicx}
\\usepackage{tikz}
\\usetikzlibrary{positioning,arrows.meta}
\\usepackage{xcolor}
\\usepackage{mdframed}
\\usepackage[colorlinks=true,linkcolor=blue!60!black]{hyperref}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{6pt}

\\newcommand{\\question}[1]{\\par\\medskip\\noindent\\textbf{#1}\\par}
\\newmdenv[linecolor=green!45!black,linewidth=0.8pt,backgroundcolor=green!4,
  innertopmargin=4pt,innerbottommargin=4pt,skipabove=6pt,skipbelow=6pt]{answerbox}

\\title{\\textbf{Laws of Indices}\\\\[0.3em]\\large Worked Solutions with TikZ Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Algebra (ref \\texttt{a4})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Laws of Indices} questions, each with a fully
worked solution and a TikZ diagram matched to the law in play:
\\begin{itemize}\\setlength{\\itemsep}{1pt}
  \\item \\textbf{Law cards} --- the boxed general rule with the exponent arithmetic --- for the multiplication, division, power-of-a-power, power-of-a-product, negative-power and zero-power laws;
  \\item \\textbf{Power/root split} diagrams for fractional indices (denominator $=$ root, numerator $=$ power);
  \\item \\textbf{Solution-flow} diagrams (one law per arrow) for multi-step numeric chains and for solving $a^{x}=k$.
\\end{itemize}
\\tableofcontents
\\bigskip
\\hrule
`;

questions.forEach((q) => {
  L += `\n\\section*{${q.topicTitle}\\quad\\small\\texttt{(${q.id})}}\n`;
  L += `\\addcontentsline{toc}{section}{${q.topicTitle} (${q.id})}\n`;
  L += `\\textit{Difficulty: ${q.difficulty} \\quad\\textbar\\quad Marks: ${q.marks}}\n\n`;
  L += `\\question{${prose(q.questionText.trim())}}\n\n`;

  L += `\\textbf{Worked solution.}\n\n`;
  q.workedSolution.steps.forEach((st) => {
    const n = q.workedSolution.steps.length > 1 ? `Step ${st.stepNumber}: ` : "";
    if (st.description) L += `\\textit{${n}${prose(st.description)}}\n`;
    if (st.workingLatex) L += `\\[\\begin{gathered}\n${st.workingLatex}\n\\end{gathered}\\]\n`;
    if (st.explanation) L += `${prose(st.explanation)}\n\n`;
  });

  const fa = q.workedSolution.finalAnswer.replace(/^\\\(/, "").replace(/\\\)$/, "");
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad \\(\\displaystyle ${fa}\\)\n\\end{answerbox}\n`;

  const dg = diagram(q.id);
  if (dg) {
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${dg}\n\\end{center}\n`;
    L += `\\small ${cap[D[q.id].type]}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions)");
