/* Generates Laws_of_Surds.tex from a5_laws_of_surds.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Algebra/a5_laws_of_surds.ts"
);
const OUT = path.join(__dirname, "..", "Laws_of_Surds.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, {
  compilerOptions: { module: "esnext", target: "es2020" },
});
const js = out.outputText
  .replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "")
  .replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// types: tree | law | grid | flow | triangle
const D = {
  "a5-001": { type: "tree", n: "12", sq: "4", s: "2", rem: "3", result: "2\\sqrt{3}" },
  "a5-002": { type: "tree", n: "18", sq: "9", s: "3", rem: "2", result: "3\\sqrt{2}" },
  "a5-003": { type: "tree", n: "45", sq: "9", s: "3", rem: "5", result: "3\\sqrt{5}" },
  "a5-004": { type: "tree", n: "75", sq: "25", s: "5", rem: "3", result: "5\\sqrt{3}" },
  "a5-005": { type: "tree", n: "98", sq: "49", s: "7", rem: "2", result: "7\\sqrt{2}" },
  "a5-006": { type: "law", law: "\\sqrt{\\tfrac{a}{b}}=\\dfrac{\\sqrt{a}}{\\sqrt{b}}", expr: "\\sqrt{\\tfrac{7}{4}}", rule: "$\\sqrt{4}=2$ in the denominator", result: "\\dfrac{\\sqrt{7}}{2}" },
  "a5-007": { type: "law", law: "\\sqrt{\\tfrac{a}{b}}=\\dfrac{\\sqrt{a}}{\\sqrt{b}}", expr: "\\sqrt{\\tfrac{9}{25}}", rule: "$\\sqrt{9}=3$, $\\sqrt{25}=5$", result: "\\dfrac{3}{5}" },
  "a5-008": { type: "law", law: "\\sqrt{\\tfrac{a}{b}}=\\dfrac{\\sqrt{a}}{\\sqrt{b}}", expr: "\\sqrt{\\tfrac{11}{16}}", rule: "$\\sqrt{16}=4$", result: "\\dfrac{\\sqrt{11}}{4}" },
  "a5-009": { type: "law", law: "m\\sqrt{a}\\times n\\sqrt{a}=mn\\,a", expr: "3\\sqrt{2}\\times 5\\sqrt{2}", rule: "$3\\times5=15$, $\\sqrt2\\times\\sqrt2=2$, so $15\\times2$", result: "30" },
  "a5-010": { type: "law", law: "\\sqrt{a}\\times\\sqrt{a}=a", expr: "\\sqrt{6}\\times\\sqrt{6}", rule: "a root times itself removes the root", result: "6" },
  "a5-011": { type: "law", law: "\\sqrt{a}\\times m\\sqrt{a}=m\\,a", expr: "\\sqrt{3}\\times 4\\sqrt{3}", rule: "$4\\times(\\sqrt3)^2=4\\times3$", result: "12" },
  "a5-012": { type: "law", law: "m\\sqrt{a}\\times n\\sqrt{b}=mn\\sqrt{ab}", expr: "2\\sqrt{3}\\times 4\\sqrt{7}", rule: "$2\\times4=8$, $\\sqrt3\\times\\sqrt7=\\sqrt{21}$", result: "8\\sqrt{21}" },
  "a5-013": { type: "law", law: "(\\sqrt{a})^{2}=a", expr: "(\\sqrt{5})^{2}", rule: "squaring undoes the square root", result: "5" },
  "a5-014": { type: "law", law: "(m\\sqrt{a})^{2}=m^{2}a", expr: "(3\\sqrt{7})^{2}", rule: "$3^{2}\\times7=9\\times7$", result: "63" },
  "a5-015": { type: "law", law: "(m\\sqrt{a})^{2}=m^{2}a", expr: "(2\\sqrt{13})^{2}", rule: "$2^{2}\\times13=4\\times13$", result: "52" },
  "a5-016": { type: "law", law: "m\\sqrt{a}\\times n\\sqrt{a}=mn\\,a", expr: "3\\sqrt{6}\\times 2\\sqrt{6}", rule: "$3\\times2\\times6$", result: "36" },
  "a5-017": { type: "law", law: "m\\sqrt{a}\\times n\\sqrt{b}=mn\\sqrt{ab}", expr: "2\\sqrt{3}\\times 5\\sqrt{27}", rule: "$10\\sqrt{81}=10\\times9$", result: "90" },
  "a5-018": { type: "law", law: "m\\sqrt{a}\\times n\\sqrt{b}=mn\\sqrt{ab}", expr: "3\\sqrt{5}\\times 2\\sqrt{45}", rule: "$6\\sqrt{225}=6\\times15$", result: "90" },
  "a5-019": { type: "flow", stages: ["\\frac{\\sqrt{10}}{6}\\times\\frac{12}{\\sqrt{5}}", "\\frac{12\\sqrt{10}}{6\\sqrt{5}}", "2\\sqrt{\\tfrac{10}{5}}=2\\sqrt{2}"], labels: ["multiply across", "simplify"] },
  "a5-020": { type: "flow", stages: ["\\frac{\\sqrt{12}}{3}\\times\\frac{2}{\\sqrt{27}}", "\\frac{2\\sqrt{12}}{3\\sqrt{27}}=\\frac{4\\sqrt{3}}{9\\sqrt{3}}", "\\frac{4}{9}"], labels: ["multiply across", "simplify"] },
  "a5-021": { type: "flow", stages: ["\\sqrt{48}+\\sqrt{27}", "4\\sqrt{3}+3\\sqrt{3}", "7\\sqrt{3}"], labels: ["simplify each surd", "collect like surds"] },
  "a5-022": { type: "flow", stages: ["\\sqrt{50}-\\sqrt{8}", "5\\sqrt{2}-2\\sqrt{2}", "3\\sqrt{2}"], labels: ["simplify each surd", "collect like surds"] },
  "a5-023": { type: "flow", stages: ["3\\sqrt{12}-2\\sqrt{75}", "6\\sqrt{3}-10\\sqrt{3}", "-4\\sqrt{3}"], labels: ["simplify each surd", "collect like surds"] },
  "a5-024": { type: "flow", stages: ["2\\sqrt{18}+3\\sqrt{50}", "6\\sqrt{2}+15\\sqrt{2}", "21\\sqrt{2}"], labels: ["simplify each surd", "collect like surds"] },
  "a5-025": { type: "flow", stages: ["5\\sqrt{28}+3\\sqrt{63}-2\\sqrt{7}", "10\\sqrt{7}+9\\sqrt{7}-2\\sqrt{7}", "17\\sqrt{7}"], labels: ["simplify each surd", "collect"] },
  "a5-026": { type: "flow", stages: ["2\\sqrt{20}+3\\sqrt{45}+\\sqrt{80}", "4\\sqrt{5}+9\\sqrt{5}+4\\sqrt{5}", "17\\sqrt{5}"], labels: ["simplify each surd", "collect"] },
  "a5-027": { type: "grid", rows: ["2", "\\sqrt{3}"], cols: ["4", "\\sqrt{3}"], cells: [["8", "2\\sqrt{3}"], ["4\\sqrt{3}", "3"]], note: "Collect: rational $8+3=11$; surd $2\\sqrt3+4\\sqrt3=6\\sqrt3$." },
  "a5-028": { type: "grid", rows: ["5", "2\\sqrt{7}"], cols: ["3", "-\\sqrt{7}"], cells: [["15", "-5\\sqrt{7}"], ["6\\sqrt{7}", "-14"]], note: "Collect: $15-14=1$; $-5\\sqrt7+6\\sqrt7=\\sqrt7$. Note $2\\sqrt7\\times(-\\sqrt7)=-2\\times7=-14$." },
  "a5-029": { type: "grid", rows: ["\\sqrt{5}", "3"], cols: ["\\sqrt{5}", "-1"], cells: [["5", "-\\sqrt{5}"], ["3\\sqrt{5}", "-3"]], note: "Collect: $5-3=2$; $-\\sqrt5+3\\sqrt5=2\\sqrt5$." },
  "a5-030": { type: "grid", rows: ["\\sqrt{11}", "3"], cols: ["\\sqrt{11}", "-3"], cells: [["11", "-3\\sqrt{11}"], ["3\\sqrt{11}", "-9"]], note: "Difference of two squares: the surd cross-terms cancel, leaving $11-9=2$." },
  "a5-031": { type: "grid", rows: ["7", "-2\\sqrt{3}"], cols: ["7", "2\\sqrt{3}"], cells: [["49", "14\\sqrt{3}"], ["-14\\sqrt{3}", "-12"]], note: "DOTS: cross-terms cancel; $(2\\sqrt3)^2=4\\times3=12$, so $49-12=37$." },
  "a5-032": { type: "grid", rows: ["\\sqrt{3}", "2"], cols: ["\\sqrt{3}", "2"], cells: [["3", "2\\sqrt{3}"], ["2\\sqrt{3}", "4"]], note: "Perfect square: $3+4=7$ and $2\\sqrt3+2\\sqrt3=4\\sqrt3$." },
  "a5-033": { type: "grid", rows: ["2\\sqrt{5}", "-3"], cols: ["2\\sqrt{5}", "-3"], cells: [["20", "-6\\sqrt{5}"], ["-6\\sqrt{5}", "9"]], note: "Perfect square: $(2\\sqrt5)^2=4\\times5=20$; $20+9=29$, $-6\\sqrt5-6\\sqrt5=-12\\sqrt5$." },
  "a5-034": { type: "grid", rows: ["4", "3\\sqrt{2}"], cols: ["1", "-2\\sqrt{2}"], cells: [["4", "-8\\sqrt{2}"], ["3\\sqrt{2}", "-12"]], note: "Collect: $4-12=-8$; $-8\\sqrt2+3\\sqrt2=-5\\sqrt2$. Note $3\\sqrt2\\times(-2\\sqrt2)=-6\\times2=-12$." },
  "a5-035": { type: "grid", rows: ["3\\sqrt{2}", "\\sqrt{5}"], cols: ["3\\sqrt{2}", "-\\sqrt{5}"], cells: [["18", "-3\\sqrt{10}"], ["3\\sqrt{10}", "-5"]], note: "DOTS: $(3\\sqrt2)^2=18$, $(\\sqrt5)^2=5$; cross-terms cancel, $18-5=13$." },
  "a5-036": { type: "tree", n: "200", sq: "100", s: "10", rem: "2", result: "10\\sqrt{2}" },
  "a5-037": { type: "tree", n: "147", sq: "49", s: "7", rem: "3", result: "7\\sqrt{3}" },
  "a5-038": { type: "law", law: "m\\sqrt{a}\\times n\\sqrt{b}=mn\\sqrt{ab}", expr: "4\\sqrt{3}\\times 2\\sqrt{27}", rule: "$8\\sqrt{81}=8\\times9$", result: "72" },
  "a5-039": { type: "grid", rows: ["1", "\\sqrt{6}"], cols: ["3", "2\\sqrt{6}"], cells: [["3", "2\\sqrt{6}"], ["3\\sqrt{6}", "12"]], note: "Collect: $3+12=15$; $2\\sqrt6+3\\sqrt6=5\\sqrt6$. Note $\\sqrt6\\times2\\sqrt6=2\\times6=12$." },
  "a5-040": { type: "triangle" },
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
const f = (n) => Number(n.toFixed(3)).toString();

function diagTree(d) {
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]},every node/.style={font=\\small}]
\\node (n) at (0,1.5) {$${d.n}=${d.sq}\\times ${d.rem}$};
\\node (sq) at (-1.8,0) {$${d.sq}=${d.s}^{2}$};
\\node (rem) at (1.8,0) {$${d.rem}$};
\\draw[gray!70] (n.south) -- (sq.north);
\\draw[gray!70] (n.south) -- (rem.north);
\\node (outc) at (0,-1.4) {$\\displaystyle \\sqrt{${d.n}}=\\sqrt{${d.sq}}\\times\\sqrt{${d.rem}}=${d.result}$};
\\draw[->,teal!60!black,thick] (sq.south) to[bend right=20] node[left,font=\\footnotesize,align=center]{$\\sqrt{${d.sq}}=${d.s}$\\\\comes out} (outc.west);
\\draw[->,gray] (rem.south) to[bend left=20] (outc.east);
\\end{tikzpicture}`;
  return wrap(t);
}
function diagLaw(d) {
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]}]
\\node[draw=teal!55,rounded corners,fill=teal!8,inner sep=4pt] (rule) at (3.2,1.25) {$\\displaystyle ${d.law}$};
\\node (L) at (0,0) {$\\displaystyle ${d.expr}$};
\\node (R) at (6.4,0) {$\\displaystyle =\\ ${d.result}$};
\\draw[->,thick] (L) -- (R) node[midway,below=3pt,font=\\small,align=center]{${d.rule}};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagGrid(d) {
  const W = 2.7, H = 1.2, R = d.rows.length, C = d.cols.length;
  let s = "\\begin{tikzpicture}[x=1cm,y=1cm,every node/.style={font=\\small}]\n";
  for (let i = 0; i <= R; i++)
    for (let j = 0; j <= C; j++) {
      const x = j * W, y = -i * H;
      const header = i === 0 || j === 0;
      const fill = i === 0 && j === 0 ? "gray!30" : header ? "violet!10" : "white";
      s += `\\fill[${fill}] (${f(x)},${f(y)}) rectangle (${f(x + W)},${f(y - H)});\n`;
      s += `\\draw[gray!60] (${f(x)},${f(y)}) rectangle (${f(x + W)},${f(y - H)});\n`;
      let c = "";
      if (i === 0 && j === 0) c = "\\times";
      else if (i === 0) c = d.cols[j - 1];
      else if (j === 0) c = d.rows[i - 1];
      else c = d.cells[i - 1][j - 1];
      if (c !== "") s += `\\node at (${f(x + W / 2)},${f(y - H / 2)}) {$\\displaystyle ${c}$};\n`;
    }
  s += "\\end{tikzpicture}";
  return wrap(s);
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
function diagTriangle() {
  const t = `\\begin{tikzpicture}[font=\\small,>={Stealth[length=2mm]}]
\\coordinate (Q) at (0,0);
\\coordinate (R) at (4.4,0);
\\coordinate (P) at (0,2.0);
\\draw[thick] (Q)--(R)--(P)--cycle;
\\draw (0.35,0) |- (0,0.35);
\\node[below left] at (Q) {$Q$};
\\node[below right] at (R) {$R$};
\\node[above left] at (P) {$P$};
\\node[left] at ($(Q)!0.5!(P)$) {$\\sqrt{2}$};
\\node[below] at ($(Q)!0.5!(R)$) {$QR=?$};
\\node[above right] at ($(P)!0.5!(R)$) {$7\\sqrt{2}$};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagram(id) {
  const d = D[id];
  if (!d) return null;
  if (d.type === "tree") return diagTree(d);
  if (d.type === "law") return diagLaw(d);
  if (d.type === "grid") return diagGrid(d);
  if (d.type === "flow") return diagFlow(d);
  if (d.type === "triangle") return diagTriangle();
  return null;
}
const cap = {
  tree: "Factor tree: split the number into its largest perfect-square factor, then the square root of that factor comes out.",
  law: "Surd-law card: the boxed general rule (teal) is applied to the expression.",
  grid: "Area model (box method): the two binomial terms label the rows and columns; sum the cells, then collect the rational and surd parts.",
  flow: "Solution flow: each arrow applies one surd law.",
  triangle: "By Pythagoras, $QR^{2}=PR^{2}-PQ^{2}=(7\\sqrt2)^2-(\\sqrt2)^2=98-2=96$, so $QR=\\sqrt{96}=4\\sqrt6$ cm.",
};

let L = `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{textcomp}
\\usepackage[a4paper,margin=2.1cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{graphicx}
\\usepackage{tikz}
\\usetikzlibrary{positioning,arrows.meta,calc}
\\usepackage{xcolor}
\\usepackage{mdframed}
\\usepackage[colorlinks=true,linkcolor=blue!60!black]{hyperref}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{6pt}

\\newcommand{\\question}[1]{\\par\\medskip\\noindent\\textbf{#1}\\par}
\\newmdenv[linecolor=green!45!black,linewidth=0.8pt,backgroundcolor=green!4,
  innertopmargin=4pt,innerbottommargin=4pt,skipabove=6pt,skipbelow=6pt]{answerbox}

\\title{\\textbf{Laws of Surds}\\\\[0.3em]\\large Worked Solutions with TikZ Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Algebra (ref \\texttt{a5})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Laws of Surds} questions, each with a fully worked
solution and a TikZ diagram matched to the task:
\\begin{itemize}\\setlength{\\itemsep}{1pt}
  \\item \\textbf{Factor trees} for simplifying $\\sqrt{n}$ (split off the largest perfect square);
  \\item \\textbf{Surd-law cards} for multiplying, squaring and fraction surds;
  \\item \\textbf{Area-model (box) grids} for expanding brackets, difference of two squares and perfect squares;
  \\item \\textbf{Solution-flow} diagrams for adding/subtracting surds and fraction products;
  \\item a \\textbf{right-triangle} diagram for the Pythagoras problem.
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
