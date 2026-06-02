/* Generates Algebraic_Fractions.tex from a3_algebraic_fractions.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Algebra/a3_algebraic_fractions.ts"
);
const OUT = path.join(__dirname, "..", "Algebraic_Fractions.tex");

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
// cancel: {type, top, bot, result, factor}  (top/bot contain \cancel{} on the common factor)
// cross:  {type, a, b, c, d, op}             (a/b op c/d -> (a.d op c.b)/(b.d))
// flow:   {type, stages:[...], labels:[...]} (horizontal chain; labels.length = stages.length-1)
const D = {
  "a3-001": { type: "cancel", top: "\\cancel{2}\\,(x+5)", bot: "\\cancel{2}\\cdot 3", result: "\\frac{x+5}{3}", factor: "2" },
  "a3-002": { type: "cancel", top: "\\cancel{np}\\,(p-2n)", bot: "\\cancel{np}", result: "p-2n", factor: "np" },
  "a3-003": { type: "cross", a: "x", b: "3", c: "x", d: "4", op: "+" },
  "a3-004": { type: "cross", a: "1", b: "2p", c: "1", d: "5q", op: "-" },
  "a3-005": { type: "cross", a: "5", b: "(y-1)", c: "3", d: "(y-2)", op: "+" },
  "a3-006": { type: "cross", a: "7", b: "(r-5)", c: "4", d: "(r+3)", op: "-" },
  "a3-007": { type: "cancel", top: "4(g-h)\\,\\cancel{(g+h)}", bot: "g\\,\\cancel{(g+h)}", result: "\\frac{4(g-h)}{g}", factor: "(g+h)" },
  "a3-008": { type: "cancel", top: "\\cancel{5}\\,(3m-2)", bot: "\\cancel{5}", result: "3m-2", factor: "5" },
  "a3-009": { type: "cancel", top: "\\cancel{(x+5)}\\,(x+2)", bot: "\\cancel{(x+5)}", result: "x+2", factor: "(x+5)" },
  "a3-010": { type: "cancel", top: "(y-3)\\,\\cancel{(y+3)}", bot: "\\cancel{(y+3)}", result: "y-3", factor: "(y+3)" },
  "a3-011": { type: "cancel", top: "\\cancel{2pq}\\cdot 4p^2", bot: "\\cancel{2pq}\\cdot q", result: "\\frac{4p^2}{q}", factor: "2pq" },
  "a3-012": { type: "flow", stages: ["\\frac{3x}{4}+\\frac{x}{4}", "\\frac{3x+x}{4}=\\frac{4x}{4}", "x"], labels: ["same denominator", "cancel $4$"] },
  "a3-013": { type: "cross", a: "x", b: "2", c: "x", d: "3", op: "+" },
  "a3-014": { type: "cancel", top: "2\\,\\cancel{x(x+3)}", bot: "\\cancel{x(x+3)}", result: "2", factor: "x(x+3)" },
  "a3-015": { type: "flow", stages: ["\\frac{2x}{3}\\times\\frac{5}{4x}", "\\frac{2x\\cdot 5}{3\\cdot 4x}=\\frac{10x}{12x}", "\\frac{5}{6}"], labels: ["multiply across", "cancel $2x$"] },
  "a3-016": { type: "flow", stages: ["\\frac{3a}{b}\\div\\frac{6a^2}{b^2}", "\\frac{3a}{b}\\times\\frac{b^2}{6a^2}", "\\frac{3a\\,b^2}{6a^2 b}", "\\frac{b}{2a}"], labels: ["keep--change--flip", "multiply across", "cancel $3ab$"] },
  "a3-017": { type: "cross", a: "5", b: "(x+1)", c: "2", d: "(x-2)", op: "-" },
  "a3-018": { type: "cancel", top: "\\cancel{(x-4)}\\,(x+3)", bot: "\\cancel{(x-4)}\\,(x+4)", result: "\\frac{x+3}{x+4}", factor: "(x-4)" },
  "a3-019": { type: "flow", stages: ["\\frac{2}{x}+\\frac{3}{2x}", "\\frac{4}{2x}+\\frac{3}{2x}", "\\frac{7}{2x}"], labels: ["common denominator $2x$", "add numerators"] },
  "a3-020": { type: "flow", stages: ["\\frac{x+2}{3}\\times\\frac{9}{x^2-4}", "\\frac{x+2}{3}\\times\\frac{9}{(x-2)(x+2)}", "\\frac{3}{x-2}"], labels: ["factorise $x^2-4$", "cancel $(x+2)$ and $9/3$"] },
  "a3-021": { type: "cancel", top: "-\\,\\cancel{(x-5)}", bot: "\\cancel{(x-5)}\\,(x+5)", result: "-\\frac{1}{x+5}", factor: "(x-5)" },
  "a3-022": { type: "cross", a: "(2x-1)", b: "3", c: "(x+4)", d: "5", op: "+" },
  "a3-023": { type: "cancel", top: "\\cancel{2}\\,(x+5)", bot: "\\cancel{2}\\cdot 3", result: "\\frac{x+5}{3}", factor: "2" },
  "a3-024": { type: "cancel", top: "\\cancel{3}\\,(2a-4b-5c)", bot: "\\cancel{3}", result: "2a-4b-5c", factor: "3" },
  "a3-025": { type: "cancel", top: "\\cancel{np}\\,(p-2n)", bot: "\\cancel{np}", result: "p-2n", factor: "np" },
  "a3-026": { type: "cross", a: "5", b: "(y-1)", c: "3", d: "(y-2)", op: "+" },
  "a3-027": { type: "cross", a: "7", b: "(r-5)", c: "4", d: "(r+3)", op: "-" },
  "a3-028": { type: "cross", a: "(z+1)", b: "(z+2)", c: "(z+3)", d: "(z+4)", op: "-" },
  "a3-029": { type: "cross", a: "2", b: "t", c: "13", d: "r^2", op: "+" },
  "a3-030": { type: "cross", a: "8", b: "p", c: "1", d: "(p-3)", op: "-" },
  "a3-031": { type: "cancel", top: "\\cancel{10z}\\cdot y(1-4y^2+6yz^2)", bot: "\\cancel{10z}\\cdot z", result: "\\frac{y(1-4y^2+6yz^2)}{z}", factor: "10z" },
  "a3-032": { type: "cancel", top: "\\cancel{t}\\,(4s+6s^2+9s^3)", bot: "\\cancel{t}\\cdot 2", result: "\\frac{4s+6s^2+9s^3}{2}", factor: "t" },
  "a3-033": { type: "cross", a: "1", b: "(q+1)", c: "3", d: "(q-2)", op: "+" },
  "a3-034": { type: "cross", a: "x", b: "(x+z)", c: "2z", d: "(x-z)", op: "+" },
  "a3-035": { type: "cross", a: "1", b: "2p", c: "1", d: "5q", op: "-" },
  "a3-036": { type: "flow", stages: ["\\frac{2}{ab^3}-\\frac{9}{a^3b}", "\\frac{2a^2-9b^2}{a^3b^3}"], labels: ["common denominator $a^3b^3$"] },
  "a3-037": { type: "cross", a: "w", b: "2(w-2)", c: "3w", d: "(w-7)", op: "+" },
  "a3-038": { type: "cancel", top: "\\cancel{3cd}\\,(4-2c+c^2d)", bot: "\\cancel{3cd}\\cdot 4ce", result: "\\frac{4-2c+c^2d}{4ce}", factor: "3cd" },
  "a3-039": { type: "flow", stages: ["\\frac{2}{mn}-\\frac{3m}{n}+\\frac{n^2}{m}", "\\frac{2-3m^2+n^3}{mn}"], labels: ["common denominator $mn$"] },
  "a3-040": { type: "cross", a: "y", b: "(2x+3)", c: "2y", d: "(3-x)", op: "-" },
  "a3-041": { type: "flow", stages: ["\\frac{1}{x}+\\frac{2x}{y}+\\frac{4}{x^2}", "\\frac{xy+2x^3+4y}{x^2y}"], labels: ["common denominator $x^2y$"] },
  "a3-042": { type: "flow", stages: ["\\frac{ab}{c}+\\frac{bc}{a}+\\frac{ca}{b}", "\\frac{a^2b^2+b^2c^2+c^2a^2}{abc}"], labels: ["common denominator $abc$"] },
  "a3-043": { type: "flow", stages: ["2+\\frac{a^2}{b}-\\frac{2b}{a^3}", "\\frac{2a^3b+a^5-2b^2}{a^3b}"], labels: ["common denominator $a^3b$"] },
  "a3-044": { type: "cancel", top: "\\cancel{x}\\,(2+xy-x)", bot: "\\cancel{x}\\,(x+3)", result: "\\frac{2+xy-x}{x+3}", factor: "x" },
  "a3-045": { type: "cancel", top: "\\cancel{3cd}\\,(4-2c+c^2d)", bot: "\\cancel{3cd}\\cdot 4ce", result: "\\frac{4-2c+c^2d}{4ce}", factor: "3cd" },
  "a3-046": { type: "cancel", top: "(x-3)\\,\\cancel{(x+3)}", bot: "(x+2)\\,\\cancel{(x+3)}", result: "\\frac{x-3}{x+2}", factor: "(x+3)" },
  "a3-047": { type: "cancel", top: "\\cancel{a}\\,(x+y)", bot: "\\cancel{a}\\,z", result: "\\frac{x+y}{z}", factor: "a" },
  "a3-048": { type: "cross", a: "x", b: "3", c: "x", d: "4", op: "+" },
  "a3-049": { type: "cancel", top: "\\cancel{5x}\\,(x+2y)", bot: "\\cancel{5x}", result: "x+2y", factor: "5x" },
  "a3-050": { type: "cross", a: "2", b: "(x+3)", c: "1", d: "(x-1)", op: "-" },
  "a3-051": { type: "flow", stages: ["3+\\frac{2}{x-2}", "\\frac{3(x-2)+2}{x-2}", "\\frac{3x-4}{x-2}"], labels: ["write $3=\\tfrac{3(x-2)}{x-2}$", "simplify"] },
  "a3-052": { type: "cancel", top: "(x-4)\\,\\cancel{(x+4)}", bot: "4\\,\\cancel{(x+4)}", result: "\\frac{x-4}{4}", factor: "(x+4)" },
};

// ---- text helpers ----
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
// keep size unless wider than the line, then shrink to fit
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;

function diagCancel(d) {
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]}]
\\node (f) {$\\displaystyle \\frac{${d.top}}{${d.bot}}$};
\\node (r) at (5.2,0) {$\\displaystyle =\\ ${d.result}$};
\\draw[->,red,thick] (f.east) -- (r.west) node[midway,above,font=\\small]{cancel $${d.factor}$};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagCross(d) {
  const opc = d.op === "-" ? "-" : "+";
  const num = `${d.a}\\cdot ${d.d} ${opc} ${d.c}\\cdot ${d.b}`;
  const den = `${d.b}\\cdot ${d.d}`;
  const t = `\\begin{tikzpicture}[>={Stealth[length=2mm]}]
\\node (a) at (0,0.6) {$${d.a}$};
\\draw (-0.95,0) -- (0.95,0);
\\node (b) at (0,-0.6) {$${d.b}$};
\\node at (1.7,0) {$${opc}$};
\\node (c) at (3.4,0.6) {$${d.c}$};
\\draw (2.45,0) -- (4.35,0);
\\node (d) at (3.4,-0.6) {$${d.d}$};
\\node at (5.2,0) {$=$};
\\node at (8.4,0) {$\\displaystyle \\frac{${num}}{${den}}$};
\\draw[->,red,thick] (b) to[bend right=18] (c);
\\draw[->,blue,thick] (d) to[bend left=18] (a);
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
  if (d.type === "cancel") return diagCancel(d);
  if (d.type === "cross") return diagCross(d);
  if (d.type === "flow") return diagFlow(d);
  return null;
}
const diagCaption = {
  cancel: "Cancellation diagram: factorise top and bottom, then strike the common factor.",
  cross: "Cross-multiplication: each numerator multiplies the \\emph{other} denominator (curved arrows); the denominators multiply to give the common denominator.",
  flow: "Solution flow: each arrow shows one operation taking the expression to the next form.",
};

// ---- document ----
let L = `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{textcomp}
\\usepackage[a4paper,margin=2.1cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{cancel}
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

\\title{\\textbf{Algebraic Fractions}\\\\[0.3em]\\large Worked Solutions with TikZ Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Algebra (ref \\texttt{a3})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Algebraic Fractions} questions, each with a fully
worked solution and a TikZ diagram chosen to match the operation:
\\begin{itemize}\\setlength{\\itemsep}{1pt}
  \\item \\textbf{Cancellation} diagrams (factorise, then strike the common factor) for \\emph{simplifying} a single fraction;
  \\item \\textbf{Cross-multiplication} (butterfly) diagrams for \\emph{adding or subtracting} two fractions;
  \\item \\textbf{Solution-flow} diagrams (one operation per arrow) for \\emph{multiplying/dividing} and for common-denominator work with three or more terms.
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
    L += `\\small ${diagCaption[D[q.id].type]}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions)");
