/* Generates Rationalising_the_Denominator.tex from a6_rationalising_the_denominator.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Algebra/a6_rationalising_the_denominator.ts"
);
const OUT = path.join(__dirname, "..", "Rationalising_the_Denominator.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, {
  compilerOptions: { module: "esnext", target: "es2020" },
});
const js = out.outputText
  .replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "")
  .replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// types: mult1 | conj | flow | rect
const D = {
  "a6-001": { type: "mult1", frac: "\\frac{1}{\\sqrt2}", mult: "\\sqrt2", denVal: "\\sqrt2\\times\\sqrt2=2", result: "\\frac{\\sqrt2}{2}" },
  "a6-002": { type: "mult1", frac: "\\frac{1}{\\sqrt5}", mult: "\\sqrt5", denVal: "\\sqrt5\\times\\sqrt5=5", result: "\\frac{\\sqrt5}{5}" },
  "a6-003": { type: "mult1", frac: "\\frac{8}{\\sqrt2}", mult: "\\sqrt2", denVal: "\\sqrt2\\times\\sqrt2=2", result: "4\\sqrt2", note: "Then $\\frac{8\\sqrt2}{2}=4\\sqrt2$." },
  "a6-004": { type: "mult1", frac: "\\frac{6}{\\sqrt3}", mult: "\\sqrt3", denVal: "\\sqrt3\\times\\sqrt3=3", result: "2\\sqrt3", note: "Then $\\frac{6\\sqrt3}{3}=2\\sqrt3$." },
  "a6-005": { type: "mult1", frac: "\\frac{14}{\\sqrt7}", mult: "\\sqrt7", denVal: "\\sqrt7\\times\\sqrt7=7", result: "2\\sqrt7", note: "Then $\\frac{14\\sqrt7}{7}=2\\sqrt7$." },
  "a6-006": { type: "mult1", frac: "\\frac{20}{\\sqrt5}", mult: "\\sqrt5", denVal: "\\sqrt5\\times\\sqrt5=5", result: "4\\sqrt5", note: "Then $\\frac{20\\sqrt5}{5}=4\\sqrt5$." },
  "a6-007": { type: "mult1", frac: "\\frac{9}{\\sqrt3}", mult: "\\sqrt3", denVal: "\\sqrt3\\times\\sqrt3=3", result: "3\\sqrt3", note: "Then $\\frac{9\\sqrt3}{3}=3\\sqrt3$." },
  "a6-008": { type: "mult1", frac: "\\frac{10}{\\sqrt2}", mult: "\\sqrt2", denVal: "\\sqrt2\\times\\sqrt2=2", result: "5\\sqrt2", note: "Then $\\frac{10\\sqrt2}{2}=5\\sqrt2$." },
  "a6-009": { type: "mult1", frac: "\\frac{24}{\\sqrt6}", mult: "\\sqrt6", denVal: "\\sqrt6\\times\\sqrt6=6", result: "4\\sqrt6", note: "Then $\\frac{24\\sqrt6}{6}=4\\sqrt6$." },
  "a6-010": { type: "mult1", frac: "\\frac{15}{\\sqrt5}", mult: "\\sqrt5", denVal: "\\sqrt5\\times\\sqrt5=5", result: "3\\sqrt5", note: "Then $\\frac{15\\sqrt5}{5}=3\\sqrt5$." },
  "a6-011": { type: "flow", stages: ["\\sqrt{32}+\\frac{10}{\\sqrt2}", "4\\sqrt2+5\\sqrt2", "9\\sqrt2"], labels: ["simplify and rationalise", "collect like surds"] },
  "a6-012": { type: "flow", stages: ["\\sqrt{75}-\\frac{6}{\\sqrt3}", "5\\sqrt3-2\\sqrt3", "3\\sqrt3"], labels: ["simplify and rationalise", "collect like surds"] },
  "a6-013": { type: "mult1", frac: "\\frac{3}{\\sqrt6}", mult: "\\sqrt6", denVal: "\\sqrt6\\times\\sqrt6=6", result: "\\frac{\\sqrt6}{2}", note: "Then $\\frac{3\\sqrt6}{6}=\\frac{\\sqrt6}{2}$." },
  "a6-014": { type: "mult1", frac: "\\frac{4}{\\sqrt{10}}", mult: "\\sqrt{10}", denVal: "\\sqrt{10}\\times\\sqrt{10}=10", result: "\\frac{2\\sqrt{10}}{5}", note: "Then $\\frac{4\\sqrt{10}}{10}=\\frac{2\\sqrt{10}}{5}$." },
  "a6-015": { type: "flow", stages: ["\\frac{\\sqrt3}{\\sqrt8}", "\\frac{\\sqrt3}{2\\sqrt2}", "\\frac{\\sqrt6}{4}"], labels: ["$\\sqrt8=2\\sqrt2$", "$\\times\\tfrac{\\sqrt2}{\\sqrt2}$"] },
  "a6-016": { type: "mult1", frac: "\\frac{5}{2\\sqrt3}", mult: "\\sqrt3", denVal: "2\\sqrt3\\times\\sqrt3=6", result: "\\frac{5\\sqrt3}{6}" },
  "a6-017": { type: "flow", stages: ["\\frac{\\sqrt{18}}{\\sqrt2}", "\\sqrt{\\tfrac{18}{2}}=\\sqrt9", "3"], labels: ["one root", "evaluate"] },
  "a6-018": { type: "conj", frac: "\\frac{2}{1+\\sqrt3}", conj: "1-\\sqrt3", denExpand: "(1+\\sqrt3)(1-\\sqrt3)=1-3=-2", result: "-1+\\sqrt3" },
  "a6-019": { type: "conj", frac: "\\frac{8}{\\sqrt5-1}", conj: "\\sqrt5+1", denExpand: "(\\sqrt5-1)(\\sqrt5+1)=5-1=4", result: "2+2\\sqrt5" },
  "a6-020": { type: "conj", frac: "\\frac{7}{3-\\sqrt2}", conj: "3+\\sqrt2", denExpand: "(3-\\sqrt2)(3+\\sqrt2)=9-2=7", result: "3+\\sqrt2" },
  "a6-021": { type: "conj", frac: "\\frac{4}{\\sqrt6-2}", conj: "\\sqrt6+2", denExpand: "(\\sqrt6-2)(\\sqrt6+2)=6-4=2", result: "4+2\\sqrt6" },
  "a6-022": { type: "conj", frac: "\\frac{14}{4+\\sqrt2}", conj: "4-\\sqrt2", denExpand: "(4+\\sqrt2)(4-\\sqrt2)=16-2=14", result: "4-\\sqrt2" },
  "a6-023": { type: "conj", frac: "\\frac{12}{5-\\sqrt{13}}", conj: "5+\\sqrt{13}", denExpand: "(5-\\sqrt{13})(5+\\sqrt{13})=25-13=12", result: "5+\\sqrt{13}" },
  "a6-024": { type: "conj", frac: "\\frac{8}{3+\\sqrt5}", conj: "3-\\sqrt5", denExpand: "(3+\\sqrt5)(3-\\sqrt5)=9-5=4", result: "6-2\\sqrt5" },
  "a6-025": { type: "conj", frac: "\\frac{25}{6-\\sqrt{11}}", conj: "6+\\sqrt{11}", denExpand: "(6-\\sqrt{11})(6+\\sqrt{11})=36-11=25", result: "6+\\sqrt{11}" },
  "a6-026": { type: "conj", frac: "\\frac{\\sqrt3+1}{\\sqrt3-1}", conj: "\\sqrt3+1", denExpand: "(\\sqrt3-1)(\\sqrt3+1)=3-1=2", result: "2+\\sqrt3" },
  "a6-027": { type: "conj", frac: "\\frac{\\sqrt7+2}{\\sqrt7-3}", conj: "\\sqrt7+3", denExpand: "(\\sqrt7-3)(\\sqrt7+3)=7-9=-2", result: "-\\frac{13}{2}-\\frac{5}{2}\\sqrt7" },
  "a6-028": { type: "conj", frac: "\\frac{5-\\sqrt2}{3+\\sqrt2}", conj: "3-\\sqrt2", denExpand: "(3+\\sqrt2)(3-\\sqrt2)=9-2=7", result: "\\frac{17}{7}-\\frac{8}{7}\\sqrt2" },
  "a6-029": { type: "conj", frac: "\\frac{2\\sqrt5+1}{3\\sqrt5-2}", conj: "3\\sqrt5+2", denExpand: "(3\\sqrt5-2)(3\\sqrt5+2)=45-4=41", result: "\\frac{32}{41}+\\frac{7}{41}\\sqrt5" },
  "a6-030": { type: "conj", frac: "\\frac{\\sqrt2+3}{2\\sqrt2-1}", conj: "2\\sqrt2+1", denExpand: "(2\\sqrt2-1)(2\\sqrt2+1)=8-1=7", result: "1+\\sqrt2" },
  "a6-031": { type: "conj", frac: "\\frac{4-\\sqrt3}{2+\\sqrt3}", conj: "2-\\sqrt3", denExpand: "(2+\\sqrt3)(2-\\sqrt3)=4-3=1", result: "11-6\\sqrt3" },
  "a6-032": { type: "conj", frac: "\\frac{6}{\\sqrt5-\\sqrt2}", conj: "\\sqrt5+\\sqrt2", denExpand: "(\\sqrt5-\\sqrt2)(\\sqrt5+\\sqrt2)=5-2=3", result: "2(\\sqrt5+\\sqrt2)" },
  "a6-033": { type: "conj", frac: "\\frac{10}{\\sqrt7+\\sqrt2}", conj: "\\sqrt7-\\sqrt2", denExpand: "(\\sqrt7+\\sqrt2)(\\sqrt7-\\sqrt2)=7-2=5", result: "2(\\sqrt7-\\sqrt2)" },
  "a6-034": { type: "conj", frac: "\\frac{3}{\\sqrt{10}-\\sqrt7}", conj: "\\sqrt{10}+\\sqrt7", denExpand: "(\\sqrt{10}-\\sqrt7)(\\sqrt{10}+\\sqrt7)=10-7=3", result: "\\sqrt{10}+\\sqrt7" },
  "a6-035": { type: "conj", frac: "\\frac{8}{\\sqrt{11}+\\sqrt3}", conj: "\\sqrt{11}-\\sqrt3", denExpand: "(\\sqrt{11}+\\sqrt3)(\\sqrt{11}-\\sqrt3)=11-3=8", result: "\\sqrt{11}-\\sqrt3" },
  "a6-036": { type: "mult1", frac: "\\frac{7}{\\sqrt{11}}", mult: "\\sqrt{11}", denVal: "\\sqrt{11}\\times\\sqrt{11}=11", result: "\\frac{7\\sqrt{11}}{11}" },
  "a6-037": { type: "flow", stages: ["\\frac{\\sqrt5}{\\sqrt{12}}", "\\frac{\\sqrt5}{2\\sqrt3}", "\\frac{\\sqrt{15}}{6}"], labels: ["$\\sqrt{12}=2\\sqrt3$", "$\\times\\tfrac{\\sqrt3}{\\sqrt3}$"] },
  "a6-038": { type: "flow", stages: ["\\frac{\\sqrt{200}}{5}+\\frac{30}{\\sqrt{50}}", "2\\sqrt2+3\\sqrt2", "5\\sqrt2"], labels: ["simplify and rationalise", "collect"] },
  "a6-039": { type: "mult1", frac: "\\frac{2}{3\\sqrt5}", mult: "\\sqrt5", denVal: "3\\sqrt5\\times\\sqrt5=15", result: "\\frac{2\\sqrt5}{15}" },
  "a6-040": { type: "flow", stages: ["\\frac{\\sqrt{45}}{\\sqrt5}", "\\sqrt{\\tfrac{45}{5}}=\\sqrt9", "3"], labels: ["one root", "evaluate"] },
  "a6-041": { type: "conj", frac: "\\frac{6}{4-\\sqrt{10}}", conj: "4+\\sqrt{10}", denExpand: "(4-\\sqrt{10})(4+\\sqrt{10})=16-10=6", result: "4+\\sqrt{10}" },
  "a6-042": { type: "conj", frac: "\\frac{32}{7-\\sqrt{17}}", conj: "7+\\sqrt{17}", denExpand: "(7-\\sqrt{17})(7+\\sqrt{17})=49-17=32", result: "7+\\sqrt{17}" },
  "a6-043": { type: "flow", stages: ["\\frac{12}{\\sqrt8}", "\\frac{12}{2\\sqrt2}=\\frac{6}{\\sqrt2}", "\\frac{6\\sqrt2}{2}=3\\sqrt2"], labels: ["$\\sqrt8=2\\sqrt2$", "rationalise"] },
  "a6-044": { type: "flow", stages: ["x=\\frac{10}{\\sqrt3-1}", "\\frac{10(\\sqrt3+1)}{(\\sqrt3-1)(\\sqrt3+1)}=\\frac{10(\\sqrt3+1)}{2}", "5+5\\sqrt3"], labels: ["$\\times$ conjugate", "simplify"] },
  "a6-045": { type: "flow", stages: ["y=\\frac{4+\\sqrt5}{2-\\sqrt5}", "\\frac{(4+\\sqrt5)(2+\\sqrt5)}{4-5}", "\\frac{13+6\\sqrt5}{-1}=-13-6\\sqrt5"], labels: ["$\\times$ conjugate", "simplify"] },
  "a6-046": { type: "rect" },
  "a6-047": { type: "conj", frac: "\\frac{1}{\\sqrt2+\\sqrt3}", conj: "\\sqrt2-\\sqrt3", denExpand: "(\\sqrt2+\\sqrt3)(\\sqrt2-\\sqrt3)=2-3=-1", result: "\\sqrt3-\\sqrt2" },
  "a6-048": { type: "conj", frac: "\\frac{\\sqrt6+\\sqrt2}{\\sqrt6-\\sqrt2}", conj: "\\sqrt6+\\sqrt2", denExpand: "(\\sqrt6-\\sqrt2)(\\sqrt6+\\sqrt2)=6-2=4", result: "2+\\sqrt3" },
  "a6-049": { type: "conj", frac: "\\frac{\\sqrt2}{3\\sqrt2+1}", conj: "3\\sqrt2-1", denExpand: "(3\\sqrt2+1)(3\\sqrt2-1)=18-1=17", result: "\\frac{6-\\sqrt2}{17}" },
  "a6-050": { type: "flow", stages: ["\\frac{12}{\\sqrt3}", "\\frac{12\\sqrt3}{3}", "4\\sqrt3"], labels: ["$\\times\\tfrac{\\sqrt3}{\\sqrt3}$", "simplify"] },
  "a6-051": { type: "flow", stages: ["\\frac{\\sqrt{27}}{\\sqrt3}", "\\sqrt{\\tfrac{27}{3}}=\\sqrt9", "3"], labels: ["one root", "evaluate"] },
  "a6-052": { type: "conj", frac: "\\frac{11}{2\\sqrt3-1}", conj: "2\\sqrt3+1", denExpand: "(2\\sqrt3-1)(2\\sqrt3+1)=12-1=11", result: "1+2\\sqrt3" },
  "a6-053": { type: "conj", frac: "\\frac{11}{2\\sqrt5+3}", conj: "2\\sqrt5-3", denExpand: "(2\\sqrt5+3)(2\\sqrt5-3)=20-9=11", result: "-3+2\\sqrt5" },
  "a6-054": { type: "mult1", frac: "\\frac{25}{\\sqrt5}", mult: "\\sqrt5", denVal: "\\sqrt5\\times\\sqrt5=5", result: "5\\sqrt5", note: "Then $\\frac{25\\sqrt5}{5}=5\\sqrt5$." },
  "a6-055": { type: "mult1", frac: "\\frac{18}{\\sqrt6}", mult: "\\sqrt6", denVal: "\\sqrt6\\times\\sqrt6=6", result: "3\\sqrt6", note: "Then $\\frac{18\\sqrt6}{6}=3\\sqrt6$." },
  "a6-056": { type: "flow", stages: ["\\frac{\\sqrt{48}}{\\sqrt6}", "\\sqrt{\\tfrac{48}{6}}=\\sqrt8", "2\\sqrt2"], labels: ["one root", "simplify"] },
  "a6-057": { type: "conj", frac: "\\frac{2}{3-\\sqrt7}", conj: "3+\\sqrt7", denExpand: "(3-\\sqrt7)(3+\\sqrt7)=9-7=2", result: "3+\\sqrt7" },
  "a6-058": { type: "conj", frac: "\\frac{15}{\\sqrt6+\\sqrt3}", conj: "\\sqrt6-\\sqrt3", denExpand: "(\\sqrt6+\\sqrt3)(\\sqrt6-\\sqrt3)=6-3=3", result: "5(\\sqrt6-\\sqrt3)" },
  "a6-059": { type: "conj", frac: "\\frac{\\sqrt3}{\\sqrt{15}-\\sqrt6}", conj: "\\sqrt{15}+\\sqrt6", denExpand: "(\\sqrt{15}-\\sqrt6)(\\sqrt{15}+\\sqrt6)=15-6=9", result: "\\frac{\\sqrt5+\\sqrt2}{3}" },
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

function diagMult1(d) {
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]}]
\\node[draw=teal!55,rounded corners,fill=teal!8,inner sep=4pt] (rule) at (3.4,1.3) {$\\displaystyle \\frac{${d.mult}}{${d.mult}}=1$};
\\node (L) at (0,0) {$\\displaystyle ${d.frac}$};
\\node (R) at (6.8,0) {$\\displaystyle =\\ ${d.result}$};
\\draw[->,thick] (L) -- (R) node[midway,below=3pt,font=\\small,align=center]{multiply top and bottom by $${d.mult}$\\\\[1pt]\\footnotesize denominator: $${d.denVal}$};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagConj(d) {
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]}]
\\node[draw=teal!55,rounded corners,fill=teal!8,inner sep=4pt] (rule) at (3.4,1.35) {$\\displaystyle \\frac{${d.conj}}{${d.conj}}=1$ \\ (conjugate)};
\\node (L) at (0,0) {$\\displaystyle ${d.frac}$};
\\node (R) at (6.8,0) {$\\displaystyle =\\ ${d.result}$};
\\draw[->,thick] (L) -- (R) node[midway,below=3pt,font=\\small,align=center]{multiply by the conjugate $${d.conj}$\\\\[1pt]\\footnotesize difference of two squares: $${d.denExpand}$};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagFlow(d) {
  let t = `\\begin{tikzpicture}[>={Stealth[length=2mm]},node distance=1.5cm and 3.2cm]\n`;
  d.stages.forEach((s, i) => {
    if (i === 0) t += `\\node (s0) {$\\displaystyle ${s}$};\n`;
    else t += `\\node (s${i}) [right=of s${i - 1}] {$\\displaystyle ${s}$};\n`;
  });
  for (let i = 1; i < d.stages.length; i++)
    t += `\\draw[->,thick] (s${i - 1}) -- (s${i}) node[midway,above,font=\\small]{${d.labels[i - 1]}};\n`;
  t += `\\end{tikzpicture}`;
  return wrap(t);
}
function diagRect() {
  const t = `\\begin{tikzpicture}[font=\\small]
\\draw[thick,fill=blue!4] (0,0) rectangle (5.4,2.2);
\\node[above] at (2.7,2.2) {length $=\\ ?$};
\\node[left] at (0,1.1) {$\\sqrt5-1$};
\\node at (2.7,1.1) {area $=3+\\sqrt5$};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagram(id) {
  const d = D[id];
  if (!d) return null;
  if (d.type === "mult1") return diagMult1(d);
  if (d.type === "conj") return diagConj(d);
  if (d.type === "flow") return diagFlow(d);
  if (d.type === "rect") return diagRect();
  return null;
}
const cap = {
  mult1: "Multiply by $\\frac{\\sqrt{a}}{\\sqrt{a}}=1$: this leaves the value unchanged but clears the surd from the denominator.",
  conj: "Multiply by the conjugate over itself. The denominator is then a difference of two squares, $(A+B)(A-B)=A^{2}-B^{2}$, so every surd cancels and the denominator becomes rational.",
  flow: "Solution flow: each arrow applies one step.",
  rect: "length $=$ area $\\div$ width $=\\dfrac{3+\\sqrt5}{\\sqrt5-1}$; multiplying by the conjugate $\\dfrac{\\sqrt5+1}{\\sqrt5+1}$ gives $\\dfrac{(3+\\sqrt5)(\\sqrt5+1)}{4}=\\dfrac{8+4\\sqrt5}{4}=2+\\sqrt5$ cm.",
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

\\title{\\textbf{Rationalising the Denominator}\\\\[0.3em]\\large Worked Solutions with TikZ Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Algebra (ref \\texttt{a6})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Rationalising the Denominator} questions, each with a
fully worked solution and a TikZ diagram. The whole topic rests on one idea: \\textbf{multiply by a cleverly
chosen form of~$1$}, so the diagrams reflect that:
\\begin{itemize}\\setlength{\\itemsep}{1pt}
  \\item \\textbf{$\\frac{\\sqrt a}{\\sqrt a}$ cards} for a single-surd denominator;
  \\item \\textbf{conjugate cards} for a two-term denominator (the difference of two squares clears the surd);
  \\item \\textbf{solution-flow} diagrams for simplifying, combining, and solving equations;
  \\item a \\textbf{rectangle} diagram for the area problem.
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

  const fa = q.workedSolution.finalAnswer.replace(/\\\(/g, "\\(\\displaystyle ");
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad ${fa}\n\\end{answerbox}\n`;

  const dg = diagram(q.id);
  if (dg) {
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${dg}\n\\end{center}\n`;
    const note = D[q.id].note ? D[q.id].note + " " : "";
    L += `\\small ${note}${cap[D[q.id].type]}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions)");
