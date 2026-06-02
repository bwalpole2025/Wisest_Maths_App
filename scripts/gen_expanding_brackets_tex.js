/* Generates Expanding_Brackets.tex from a1_expanding_brackets_.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Algebra/a1_expanding_brackets_.ts"
);
const OUT = path.join(__dirname, "..", "Expanding_Brackets.tex");

// ---- load questions ----
const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, {
  compilerOptions: { module: "esnext", target: "es2020" },
});
const js = out.outputText
  .replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "")
  .replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---- area-model grids: id -> {rows, cols, cells, note} ----
// cells[r][c] is the partial product of rows[r] * cols[c].
const grids = {
  "a1-001": { rows: ["x", "4"], cols: ["x", "-1"], cells: [["x^2", "-x"], ["4x", "-4"]] },
  "a1-002": { rows: ["2x", "1"], cols: ["x", "-3"], cells: [["2x^2", "-6x"], ["x", "-3"]] },
  "a1-003": { rows: ["x", "1"], cols: ["x^2", "x", "-6"], cells: [["x^3", "x^2", "-6x"], ["x^2", "x", "-6"]], note: "After expanding the last two brackets to $x^2+x-6$, multiply by $(x+1)$." },
  "a1-004": { rows: ["x", "y"], cols: ["x^2", "2xy", "-3y^2"], cells: [["x^3", "2x^2y", "-3xy^2"], ["x^2y", "2xy^2", "-3y^3"]], note: "Grid for $(x+y)(x^2+2xy-3y^2)$; every term is then multiplied by the outer factor $xy^3$." },
  "a1-005": { rows: ["x", "xy", "\\frac{x^2}{y}"], cols: ["x^2", "-\\frac{y}{x^2}", "y^2"], cells: [["x^3", "-\\frac{y}{x}", "xy^2"], ["x^3y", "-\\frac{y^2}{x}", "xy^3"], ["\\frac{x^4}{y}", "-1", "x^2y"]] },
  "a1-006": { rows: ["-4"], cols: ["5x", "-9"], cells: [["-20x", "36"]], note: "Key step: distributing $-4$ over the simplified inner bracket $(5x-9)$." },
  "a1-007": { rows: ["a", "b", "-c"], cols: ["a", "-b", "c"], cells: [["a^2", "-ab", "ac"], ["ab", "-b^2", "bc"], ["-ac", "bc", "-c^2"]], note: "Grid for the first product $(a+b-c)(a-b+c)$; the second product is handled the same way." },
  "a1-008": { rows: ["2x", "-3y^2"], cols: ["2x", "-3y^2"], cells: [["4x^2", "-6xy^2"], ["-6xy^2", "9y^4"]], note: "Grid for $(2x-3y^2)^2$; the result $(4x^2-12xy^2+9y^4)$ is then multiplied by $(2x-3y^2)$ again." },
  "a1-009": { rows: ["m", "n"], cols: ["m^3", "-mn^2", "n^3"], cells: [["m^4", "-m^2n^2", "mn^3"], ["m^3n", "-mn^3", "n^4"]] },
  "a1-010": { rows: ["pq"], cols: ["q^2", "-2p", "3q"], cells: [["pq^3", "-2p^2q", "3pq^2"]], note: "Grid for $pq(q^2-2p+3q)$; the term $rs(r^2-2s+3r)$ expands identically." },
  "a1-011": { rows: ["x", "y", "z"], cols: ["x", "-y", "-z"], cells: [["x^2", "-xy", "-xz"], ["xy", "-y^2", "-yz"], ["xz", "-yz", "-z^2"]] },
  "a1-012": { rows: ["2x", "-1"], cols: ["2x", "-1"], cells: [["4x^2", "-2x"], ["-2x", "1"]], note: "Grid for $(2x-1)^2$; expand $(3x-2)^2$ the same way, then multiply each by its linear factor." },
  "a1-013": { rows: ["3x", "1"], cols: ["3x", "1"], cells: [["9x^2", "3x"], ["3x", "1"]], note: "Grid for $(3x+1)^2$; treat $(2x+3)^2$ the same way." },
  "a1-014": { rows: ["3a", "2b"], cols: ["3a", "2b"], cells: [["9a^2", "6ab"], ["6ab", "4b^2"]], note: "Grid for $(3a+2b)^2$; subtract the analogous grid for $(3a-2b)^2$." },
  "a1-015": { rows: ["x^2", "2"], cols: ["x^2", "-5x", "3"], cells: [["x^4", "-5x^3", "3x^2"], ["2x^2", "-10x", "6"]] },
  "a1-016": { rows: ["a^2", "-b^2"], cols: ["a^2", "b^2"], cells: [["a^4", "a^2b^2"], ["-a^2b^2", "-b^4"]], note: "After $(a-b)(a+b)=a^2-b^2$, this grid multiplies it by $(a^2+b^2)$." },
  "a1-017": { rows: ["x", "-3"], cols: ["x", "-3"], cells: [["x^2", "-3x"], ["-3x", "9"]], note: "Grid for $(x-3)^2$; the result is then multiplied by $2x$." },
  "a1-018": { rows: ["x", "2"], cols: ["x^2", "x", "-12"], cells: [["x^3", "x^2", "-12x"], ["2x^2", "2x", "-24"]], note: "After $(x-3)(x+4)=x^2+x-12$, this grid multiplies it by $(x+2)$." },
  "a1-019": { rows: ["2x", "5"], cols: ["x", "-3"], cells: [["2x^2", "-6x"], ["5x", "-15"]], note: "This is literally the rectangle: length $2x+5$ down the side, width $x-3$ along the top." },
  "a1-020": { rows: ["\\tfrac{1}{4}"], cols: ["12x", "-8"], cells: [["3x", "-2"]], note: "Grid for $\\tfrac14(12x-8)$; subtract the analogous grid for $\\tfrac15(10x+5)=2x+1$." },
  "a1-021": { rows: ["x", "1"], cols: ["x", "2"], cells: [["x^2", "2x"], ["x", "2"]], note: "Grid for $(x+1)(x+2)$; this product is subtracted from $2x(x+3)=2x^2+6x$." },
  "a1-022": { rows: ["a", "b"], cols: ["a", "b"], cells: [["a^2", "ab"], ["ab", "b^2"]], note: "Grid for $(a+b)^2$; subtract the analogous grid for $(a-b)^2$." },
  "a1-023": { rows: ["x"], cols: ["3x", "2"], cells: [["3x^2", "2x"]], note: "After simplifying the inside to $(3x+2)$, this grid multiplies by $x$." },
  "a1-024": { rows: ["x", "\\frac{1}{x^2}"], cols: ["y", "-\\frac{1}{z^2}"], cells: [["xy", "-\\frac{x}{z^2}"], ["\\frac{y}{x^2}", "-\\frac{1}{x^2z^2}"]] },
  "a1-025": { rows: ["a", "b"], cols: ["a^2", "-b^2"], cells: [["a^3", "-ab^2"], ["a^2b", "-b^3"]] },
  "a1-026": { rows: ["p"], cols: ["p", "q"], cells: [["p^2", "pq"]], note: "Grid for $p(p+q)$; from this subtract $pq(p^2-pq)=p^3q-p^2q^2$." },
  "a1-027": { rows: ["\\frac{3}{x}", "-\\frac{4}{x^2}"], cols: ["x^2", "3x"], cells: [["3x", "9"], ["-4", "-\\frac{12}{x}"]] },
  "a1-028": { rows: ["x^2", "-1"], cols: ["1", "\\frac{1}{x}"], cells: [["x^2", "x"], ["-1", "-\\frac{1}{x}"]] },
  "a1-029": { rows: ["y^2", "\\frac{1}{y}"], cols: ["y^3", "-2"], cells: [["y^5", "-2y^2"], ["y^2", "-\\frac{2}{y}"]] },
  "a1-030": { rows: ["2ab"], cols: ["a", "-b"], cells: [["2a^2b", "-2ab^2"]], note: "Grid for $2ab(a-b)$; from this subtract $a^2(2b-1)=2a^2b-a^2$." },
  "a1-031": { rows: ["\\frac{x}{2}", "4"], cols: ["\\frac{4}{x}", "-2"], cells: [["2", "-x"], ["\\frac{16}{x}", "-8"]] },
  "a1-032": { rows: ["m^2n"], cols: ["m", "n"], cells: [["m^3n", "m^2n^2"]], note: "Grid for $m^2n(m+n)$; from this subtract $n^2m(n+m)=mn^3+m^2n^2$." },
  "a1-033": { rows: ["1", "-\\frac{2}{x}"], cols: ["x^2", "2x"], cells: [["x^2", "2x"], ["-2x", "-4"]] },
  "a1-034": { rows: ["xyz", "-\\frac{y^2}{xz}"], cols: ["x^2z^2", "\\frac{x}{yz}"], cells: [["x^3yz^3", "x^2"], ["-xy^2z", "-\\frac{y}{z^2}"]] },
  "a1-035": { rows: ["x", "-\\frac{1}{x}"], cols: ["x^2", "1", "\\frac{1}{x^2}"], cells: [["x^3", "x", "\\frac{1}{x}"], ["-x", "-\\frac{1}{x}", "-\\frac{1}{x^3}"]], note: "Grid for the first two brackets; the middle terms cancel to give $x^3-\\tfrac{1}{x^3}$, which is then multiplied by the third bracket." },
  "a1-036": { rows: ["\\frac{2}{y}", "-3"], cols: ["\\frac{y}{2}", "1"], cells: [["1", "\\frac{2}{y}"], ["-\\frac{3y}{2}", "-3"]] },
  "a1-037": { rows: ["a^2b"], cols: ["a", "-b"], cells: [["a^3b", "-a^2b^2"]], note: "Grid for $a^2b(a-b)$; add the analogous grid for $ab^2(a+b)=a^2b^2+ab^3$." },
  "a1-038": { rows: ["2x", "\\frac{3}{x}"], cols: ["2x", "-\\frac{3}{x}"], cells: [["4x^2", "-6"], ["6", "-\\frac{9}{x^2}"]], note: "The off-diagonal terms $-6$ and $+6$ cancel: a difference of two squares." },
  "a1-039": { rows: ["x", "\\frac{2}{x}"], cols: ["x", "\\frac{2}{x}"], cells: [["x^2", "2"], ["2", "\\frac{4}{x^2}"]], note: "Grid for the perfect square $\\left(x+\\tfrac{2}{x}\\right)^2$." },
  "a1-040": { rows: ["\\frac{1}{x^2}", "-x"], cols: ["x^3", "-x"], cells: [["x", "-\\frac{1}{x}"], ["-x^4", "x^2"]] },
  "a1-041": { rows: ["p", "-\\frac{1}{p}"], cols: ["p", "\\frac{1}{p}"], cells: [["p^2", "1"], ["-1", "-\\frac{1}{p^2}"]], note: "Grid for the first two brackets giving $p^2-\\tfrac{1}{p^2}$; multiplying by $(p^2+\\tfrac{1}{p^2})$ repeats the difference-of-squares pattern." },
  "a1-042": { rows: ["p", "-q"], cols: ["p", "q"], cells: [["p^2", "pq"], ["-pq", "-q^2"]], note: "Grid for $(p-q)(p+q)=p^2-q^2$; this is subtracted from $p(p+q)=p^2+pq$." },
  "a1-043": { rows: ["x", "y"], cols: ["x", "y"], cells: [["x^2", "xy"], ["xy", "y^2"]], note: "Grid for $(x+y)^2$; the result $x^2+2xy+y^2$ is then multiplied by $(x+y)$." },
  "a1-044": { rows: ["ab", "cd"], cols: ["ac", "-bd"], cells: [["a^2bc", "-ab^2d"], ["ac^2d", "-bcd^2"]] },
  "a1-045": { rows: ["2x", "-1"], cols: ["2x", "-1"], cells: [["4x^2", "-2x"], ["-2x", "1"]], note: "Grid for $(2x-1)^2$; the result $4x^2-4x+1$ is then multiplied by $(x+3)$." },
};

// common-mistake strings with raw maths fixed up
const cmOverride = {
  "a1-001": "A common mistake is to forget to multiply the \\(4\\) by the \\(-1\\), which gives the incorrect answer \\(x^2+3x+4\\).",
  "a1-002": "A common mistake is to forget to multiply the \\(-3\\) by the \\(1\\), which gives the incorrect answer \\(2x^2-6x-3\\).",
};

// ---- helpers ----
function escTxt(t) {
  return t
    .replace(/\\/g, "") // no stray backslashes expected in plain segments
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_");
}
// emit prose, keeping \( ... \) maths intact
function prose(s) {
  let outp = "";
  const re = /\\\((.*?)\\\)/g;
  let m, last = 0;
  while ((m = re.exec(s))) {
    outp += escTxt(s.slice(last, m.index));
    outp += "\\(" + m[1] + "\\)";
    last = re.lastIndex;
  }
  outp += escTxt(s.slice(last));
  return outp;
}
const f = (n) => Number(n.toFixed(3)).toString();

function areaGrid(g) {
  const W = 2.7,
    H = 1.25;
  const R = g.rows.length,
    C = g.cols.length;
  if (g.cells.length !== R || g.cells.some((row) => row.length !== C)) {
    throw new Error("grid dim mismatch");
  }
  let s = "\\begin{tikzpicture}[x=1cm,y=1cm]\n";
  for (let i = 0; i <= R; i++) {
    for (let j = 0; j <= C; j++) {
      const x = j * W,
        y = -i * H;
      const header = i === 0 || j === 0;
      const fill = i === 0 && j === 0 ? "gray!30" : header ? "blue!8" : "white";
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
  }
  s += "\\end{tikzpicture}";
  return s;
}

// ---- build document ----
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

\\title{\\textbf{Expanding Brackets}\\\\[0.3em]\\large Worked Solutions with Area-Model Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Algebra (ref \\texttt{a1})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Expanding Brackets} questions, each with a fully worked
solution and a TikZ \\emph{area-model} (box-method) diagram. In an area model the terms of one
bracket label the rows, the terms of the other label the columns, and each interior cell holds the
product of its row and column headings; summing the cells (and collecting like terms) gives the
expansion.
\\tableofcontents
\\bigskip
\\hrule
`;

questions.forEach((q, idx) => {
  L += `\n\\section*{${q.topicTitle}\\quad\\small\\texttt{(${q.id})}}\n`;
  L += `\\addcontentsline{toc}{section}{${q.topicTitle} (${q.id})}\n`;
  L += `\\textit{Difficulty: ${q.difficulty} \\quad\\textbar\\quad Marks: ${q.marks}}\n\n`;
  L += `\\question{${prose(q.questionText)}}\n\n`;

  // worked solution
  L += `\\textbf{Worked solution.}\n\n`;
  q.workedSolution.steps.forEach((st) => {
    const n = q.workedSolution.steps.length > 1 ? `Step ${st.stepNumber}: ` : "";
    if (st.description)
      L += `\\textit{${n}${prose(st.description)}}\n`;
    if (st.workingLatex)
      L += `\\[\\begin{gathered}\n${st.workingLatex}\n\\end{gathered}\\]\n`;
    if (st.explanation) L += `${prose(st.explanation)}\n\n`;
  });

  // final answer
  const fa = q.workedSolution.finalAnswer.replace(/^\\\(/, "").replace(/\\\)$/, "");
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad \\(\\displaystyle ${fa}\\)\n\\end{answerbox}\n`;

  // common mistakes
  const cm = cmOverride[q.id]
    ? [cmOverride[q.id]]
    : q.workedSolution.commonMistakes;
  if (cm && cm.length) {
    L += `\\textbf{Common mistake.} ` + cm.map(prose).join(" ") + `\n\n`;
  }

  // diagram
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
