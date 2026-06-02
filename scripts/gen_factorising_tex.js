/* Generates Factorising.tex from a2_factorising.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Algebra/a2_factorising.ts"
);
const OUT = path.join(__dirname, "..", "Factorising.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, {
  compilerOptions: { module: "esnext", target: "es2020" },
});
const js = out.outputText
  .replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "")
  .replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// area-model grids (read in reverse): cells = terms of the expression, edges = the factors.
const grids = {
  "a2-001": { rows: ["7"], cols: ["2m", "3n"], cells: [["14m", "21n"]], note: "HCF $7$ down the side; read the other factor $(2m+3n)$ across the top." },
  "a2-002": { rows: ["5x^2y^2"], cols: ["x", "-3y"], cells: [["5x^3y^2", "-15x^2y^3"]], note: "HCF is $5x^2y^2$ (lowest power of each variable)." },
  "a2-003": { rows: ["4abc"], cols: ["a", "3b", "-2c"], cells: [["4a^2bc", "12ab^2c", "-8abc^2"]], note: "HCF $4abc$; the bracket has three terms." },
  "a2-004": { rows: ["p", "4q"], cols: ["p", "-4q"], cells: [["p^2", "-4pq"], ["4pq", "-16q^2"]], note: "Difference of two squares: the off-diagonal terms $-4pq$ and $+4pq$ cancel." },
  "a2-005": { rows: ["5x", "3y"], cols: ["5x", "-3y"], cells: [["25x^2", "-15xy"], ["15xy", "-9y^2"]], note: "Take out the common factor $2$ first, then this grid factorises $25x^2-9y^2$ (DOTS)." },
  "a2-006": { rows: ["m", "\\sqrt{7}"], cols: ["m", "-\\sqrt{7}"], cells: [["m^2", "-\\sqrt{7}\\,m"], ["\\sqrt{7}\\,m", "-7"]], note: "Treat $7$ as $(\\sqrt{7})^2$; the cross terms cancel." },
  "a2-007": { rows: ["(x+y)"], cols: ["(x+y)", "5"], cells: [["(x+y)^2", "5(x+y)"]], note: "The whole bracket $(x+y)$ is the common factor." },
  "a2-008": { rows: ["(b-3c)"], cols: ["a^2", "-4d"], cells: [["a^2(b-3c)", "-4d(b-3c)"]], note: "Rewrite $4d(3c-b)=-4d(b-3c)$ so both terms share $(b-3c)$." },
  "a2-009": { rows: ["3(m-n)"], cols: ["(m-n)", "-2m"], cells: [["3(m-n)^2", "-6m(m-n)"]], note: "Common factor $3(m-n)$; then $(m-n)-2m=-(m+n)$ gives $-3(m-n)(m+n)$." },
  "a2-010": { rows: ["(p+2q)"], cols: ["(p+2q)", "1"], cells: [["(p+2q)^2", "(p+2q)"]], note: "Common bracket $(p+2q)$; the second term contributes a $+1$." },
  "a2-011": { rows: ["(x+3)", "5"], cols: ["(x+3)", "-5"], cells: [["(x+3)^2", "-5(x+3)"], ["5(x+3)", "-25"]], note: "DOTS with $a=(x+3),\\ b=5$: $(x+3-5)(x+3+5)=(x-2)(x+8)$." },
  "a2-012": { rows: ["a", "b"], cols: ["c", "d"], cells: [["ac", "ad"], ["bc", "bd"]], note: "Grouping: the four given terms are exactly the four cells; read $(a+b)(c+d)$ off the edges." },
  "a2-013": { rows: ["(l+w+h)"], cols: ["(l+w+h)", "-l"], cells: [["(l+w+h)^2", "-l(l+w+h)"]], note: "Common bracket $(l+w+h)$; then $(l+w+h)-l=(w+h)$." },
  "a2-014": { rows: ["-4xy"], cols: ["x", "2y"], cells: [["-4x^2y", "-8xy^2"]], note: "Take out $-4xy$ (negative HCF) so the bracket starts with $+x$." },
  "a2-015": { rows: ["4a^2", "b^2"], cols: ["4a^2", "-b^2"], cells: [["16a^4", "-4a^2b^2"], ["4a^2b^2", "-b^4"]], note: "First DOTS gives $(4a^2-b^2)(4a^2+b^2)$; then $4a^2-b^2=(2a-b)(2a+b)$ is another DOTS." },
  "a2-016": { rows: ["x(1-y)"], cols: ["x(1-y)", "2"], cells: [["x^2(1-y)^2", "2x(1-y)"]], note: "Since $2-2y=2(1-y)$, the common factor is $x(1-y)$; then $x(1-y)+2=x-xy+2$." },
  "a2-017": { rows: ["5"], cols: ["3x", "4y"], cells: [["15x", "20y"]], note: "HCF $5$." },
  "a2-018": { rows: ["3ab"], cols: ["2a", "-3b"], cells: [["6a^2b", "-9ab^2"]], note: "HCF $3ab$." },
  "a2-019": { rows: ["y", "9"], cols: ["y", "-9"], cells: [["y^2", "-9y"], ["9y", "-81"]], note: "DOTS: $81=9^2$, cross terms cancel." },
  "a2-020": { rows: ["x", "5"], cols: ["x", "-5"], cells: [["x^2", "-5x"], ["5x", "-25"]], note: "Take out $3$ first: $3(x^2-25)$, then DOTS on $x^2-25$." },
  "a2-021": { rows: ["x", "3"], cols: ["y", "2"], cells: [["xy", "2x"], ["3y", "6"]], note: "Grouping: $x(y+2)+3(y+2)=(x+3)(y+2)$." },
  "a2-022": { rows: ["(a-b)"], cols: ["(a-b)", "2"], cells: [["(a-b)^2", "2(a-b)"]], note: "Common bracket $(a-b)$." },
  "a2-023": { rows: ["x", "2y"], cols: ["x", "-2y"], cells: [["x^2", "-2xy"], ["2xy", "-4y^2"]], note: "Take out $4xy$ first: $4xy(x^2-4y^2)$, then DOTS." },
  "a2-024": { rows: ["10", "z"], cols: ["10", "-z"], cells: [["100", "-10z"], ["10z", "-z^2"]], note: "DOTS: $100=10^2$." },
  "a2-025": { rows: ["7m^2n^2"], cols: ["2n", "3m"], cells: [["14m^2n^3", "21m^3n^2"]], note: "HCF $7m^2n^2$." },
  "a2-026": { rows: ["(x-4)"], cols: ["x", "-3"], cells: [["x(x-4)", "-3(x-4)"]], note: "Common bracket $(x-4)$; remaining factor $(x-3)$." },
  "a2-027": { rows: ["x", "2y"], cols: ["x", "-2y"], cells: [["x^2", "-2xy"], ["2xy", "-4y^2"]], note: "Take out $8$ first: $8(x^2-4y^2)$, then DOTS." },
  "a2-028": { rows: ["x", "y"], cols: ["a", "-b"], cells: [["ax", "-bx"], ["ay", "-by"]], note: "Grouping: $x(a-b)+y(a-b)=(x+y)(a-b)$." },
  "a2-029": { rows: ["(v-w)"], cols: ["2u", "-5"], cells: [["2u(v-w)", "-5(v-w)"]], note: "Rewrite $5(w-v)=-5(v-w)$ to expose the common bracket $(v-w)$." },
  "a2-030": { rows: ["(p+q)"], cols: ["(p+q)", "-3"], cells: [["(p+q)^2", "-3(p+q)"]], note: "Common bracket $(p+q)$." },
  "a2-031": { rows: ["9"], cols: ["2p", "-3q"], cells: [["18p", "-27q"]], note: "HCF $9$." },
  "a2-032": { rows: ["2c", "d"], cols: ["2c", "-d"], cells: [["4c^2", "-2cd"], ["2cd", "-d^2"]], note: "DOTS: $4c^2=(2c)^2$." },
  "a2-033": { rows: ["5xy"], cols: ["x", "3y", "-2"], cells: [["5x^2y", "15xy^2", "-10xy"]], note: "HCF $5xy$; three-term bracket." },
  "a2-034": { rows: ["(n-2)"], cols: ["m", "4"], cells: [["m(n-2)", "4(n-2)"]], note: "Common bracket $(n-2)$." },
  "a2-035": { rows: ["2a", "5b"], cols: ["2a", "-5b"], cells: [["4a^2", "-10ab"], ["10ab", "-25b^2"]], note: "Take out $3$ first: $3(4a^2-25b^2)$, then DOTS." },
  "a2-036": { rows: ["p", "q"], cols: ["r", "s"], cells: [["pr", "ps"], ["qr", "qs"]], note: "Grouping: $p(r+s)+q(r+s)=(p+q)(r+s)$." },
  "a2-037": { rows: ["(2x-y)"], cols: ["(2x-y)", "-x"], cells: [["(2x-y)^2", "-x(2x-y)"]], note: "Common bracket $(2x-y)$; then $(2x-y)-x=(x-y)$." },
  "a2-038": { rows: ["12"], cols: ["2u", "3v"], cells: [["24u", "36v"]], note: "HCF $12$." },
  "a2-039": { rows: ["7x", "y"], cols: ["7x", "-y"], cells: [["49x^2", "-7xy"], ["7xy", "-y^2"]], note: "DOTS: $49x^2=(7x)^2$." },
  "a2-040": { rows: ["8a^2b^2"], cols: ["2a", "-3b"], cells: [["16a^3b^2", "-24a^2b^3"]], note: "HCF $8a^2b^2$." },
  "a2-041": { rows: ["(y+5)"], cols: ["x", "-2"], cells: [["x(y+5)", "-2(y+5)"]], note: "Common bracket $(y+5)$." },
  "a2-042": { rows: ["m", "3"], cols: ["m", "-3"], cells: [["m^2", "-3m"], ["3m", "-9"]], note: "Take out $5m$ first: $5m(m^2-9)$, then DOTS." },
  "a2-043": { rows: ["x", "-y"], cols: ["c", "d"], cells: [["cx", "dx"], ["-cy", "-dy"]], note: "Grouping: $x(c+d)-y(c+d)=(x-y)(c+d)$." },
  "a2-044": { rows: ["(2x+3)"], cols: ["(2x+3)", "-(x-1)"], cells: [["(2x+3)^2", "-(2x+3)(x-1)"]], note: "Common bracket $(2x+3)$; then $(2x+3)-(x-1)=(x+4)$." },
  "a2-045": { rows: ["6"], cols: ["2x", "-3"], cells: [["12x", "-18"]], note: "HCF $6$." },
  "a2-046": { rows: ["5ab"], cols: ["a", "2b"], cells: [["5a^2b", "10ab^2"]], note: "HCF $5ab$." },
  "a2-047": { rows: ["9p", "4q"], cols: ["9p", "-4q"], cells: [["81p^2", "-36pq"], ["36pq", "-16q^2"]], note: "DOTS: $81p^2=(9p)^2,\\ 16q^2=(4q)^2$." },
  "a2-048": { rows: ["(y-1)"], cols: ["2x", "3"], cells: [["2x(y-1)", "3(y-1)"]], note: "Common bracket $(y-1)$." },
  "a2-049": { rows: ["(n-3)"], cols: ["m", "2"], cells: [["m(n-3)", "2(n-3)"]], note: "Rewrite $-2(3-n)=+2(n-3)$ to expose the common bracket $(n-3)$." },
  "a2-050": { rows: ["3x", "5"], cols: ["3x", "-5"], cells: [["9x^2", "-15x"], ["15x", "-25"]], note: "Take out $2$ first: $2(9x^2-25)$, then DOTS." },
};

function escTxt(t) {
  return t
    .replace(/\\/g, "")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_");
}
function prose(s) {
  let o = "";
  const re = /\\\((.*?)\\\)/g;
  let m, last = 0;
  while ((m = re.exec(s))) {
    o += escTxt(s.slice(last, m.index));
    o += "\\(" + m[1] + "\\)";
    last = re.lastIndex;
  }
  o += escTxt(s.slice(last));
  return o;
}
const f = (n) => Number(n.toFixed(3)).toString();

function areaGrid(g) {
  const W = 3.4, H = 1.15;
  const R = g.rows.length, C = g.cols.length;
  if (g.cells.length !== R || g.cells.some((r) => r.length !== C))
    throw new Error("grid dim mismatch " + JSON.stringify(g));
  let s = "\\begin{tikzpicture}[x=1cm,y=1cm,every node/.style={font=\\small}]\n";
  for (let i = 0; i <= R; i++)
    for (let j = 0; j <= C; j++) {
      const x = j * W, y = -i * H;
      const header = i === 0 || j === 0;
      const fill = i === 0 && j === 0 ? "gray!30" : header ? "orange!12" : "white";
      s += `\\fill[${fill}] (${f(x)},${f(y)}) rectangle (${f(x + W)},${f(y - H)});\n`;
      s += `\\draw[gray!60] (${f(x)},${f(y)}) rectangle (${f(x + W)},${f(y - H)});\n`;
      let c = "";
      if (i === 0 && j === 0) c = "\\times";
      else if (i === 0) c = g.cols[j - 1];
      else if (j === 0) c = g.rows[i - 1];
      else c = g.cells[i - 1][j - 1];
      if (c !== "")
        s += `\\node at (${f(x + W / 2)},${f(y - H / 2)}) {$\\displaystyle ${c}$};\n`;
    }
  s += "\\end{tikzpicture}";
  return s;
}

let L = "";
L += `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{textcomp}
\\usepackage[a4paper,margin=2.1cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{tikz}
\\usepackage{xcolor}
\\usepackage{mdframed}
\\usepackage{enumitem}
\\usepackage[colorlinks=true,linkcolor=blue!60!black]{hyperref}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{6pt}

\\newcommand{\\question}[1]{\\par\\medskip\\noindent\\textbf{#1}\\par}
\\newmdenv[linecolor=green!45!black,linewidth=0.8pt,backgroundcolor=green!4,
  innertopmargin=4pt,innerbottommargin=4pt,skipabove=6pt,skipbelow=6pt]{answerbox}

\\title{\\textbf{Factorising}\\\\[0.3em]\\large Worked Solutions with Area-Model Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Algebra (ref \\texttt{a2})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Factorising} questions, each with a fully worked
solution and a TikZ \\emph{area-model} (box-method) diagram. Factorising is expanding run \\emph{in reverse}:
the terms of the expression are placed \\emph{inside} the grid, and the factors are read off the
\\emph{edges}. For a common factor the grid is a single row (the factor down the side, the bracket along
the top); for a difference of two squares it is a $2\\times2$ grid in which the two off-diagonal terms
cancel; for grouping the four given terms are exactly the four interior cells.
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
    if (st.workingLatex)
      L += `\\[\\begin{gathered}\n${st.workingLatex}\n\\end{gathered}\\]\n`;
    if (st.explanation) L += `${prose(st.explanation)}\n\n`;
  });

  const fa = q.workedSolution.finalAnswer.replace(/^\\\(/, "").replace(/\\\)$/, "");
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad \\(\\displaystyle ${fa}\\)\n\\end{answerbox}\n`;

  const g = grids[q.id];
  if (g) {
    L += `\\textbf{Area-model diagram.}\n\n\\begin{center}\n${areaGrid(g)}\n\\end{center}\n`;
    if (g.note) L += `\\small ${g.note}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions)");
