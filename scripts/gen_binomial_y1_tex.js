/* Generates Binomial_Expansions_Y1.tex from be1_binomial_expansions.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Binomial_Expansions/be1_binomial_expansions.ts"
);
const OUT = path.join(__dirname, "..", "Binomial_Expansions_Y1.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, {
  compilerOptions: { module: "esnext", target: "es2020" },
});
const js = out.outputText
  .replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "")
  .replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// types: pascal {n} | term {n,a,b} | ncr {n,r} | flow {stages,labels}
const D = {
  "be-001": { type: "pascal", n: 5 }, "be-002": { type: "pascal", n: 4 },
  "be-003": { type: "pascal", n: 4 }, "be-004": { type: "pascal", n: 5 },
  "be-005": { type: "pascal", n: 4 }, "be-006": { type: "pascal", n: 3 },
  "be-007": { type: "pascal", n: 6 },
  "be-008": { type: "ncr", n: 7, r: 3 }, "be-009": { type: "ncr", n: 9, r: 2 },
  "be-010": { type: "ncr", n: 10, r: 4 }, "be-011": { type: "ncr", n: 8, r: 5 },
  "be-012": { type: "ncr", n: 12, r: 3 }, "be-013": { type: "ncr", n: 6, r: 2 },
  "be-014": { type: "ncr", n: 11, r: 4 },
  "be-015": { type: "term", n: 8, a: "1", b: "x" }, "be-016": { type: "term", n: 10, a: "1", b: "-x" },
  "be-017": { type: "term", n: 11, a: "1", b: "3x" }, "be-018": { type: "term", n: 9, a: "1", b: "-2x" },
  "be-019": { type: "term", n: 6, a: "2", b: "x" }, "be-020": { type: "term", n: 5, a: "3", b: "2x" },
  "be-021": { type: "term", n: 7, a: "1", b: "x" },
  "be-022": { type: "flow", stages: ["\\binom{6}{2}a^{2}=60", "15a^{2}=60\\Rightarrow a^{2}=4", "a=\\pm2"], labels: ["coeff of $x^{2}$", "solve"] },
  "be-023": { type: "term", n: 6, a: "x", b: "-\\frac{1}{x}" }, "be-024": { type: "term", n: 4, a: "x", b: "\\frac{2}{x}" },
  "be-025": { type: "term", n: 6, a: "2x", b: "-\\frac{1}{x^{2}}" }, "be-026": { type: "term", n: 6, a: "x^{2}", b: "\\frac{1}{x}" },
  "be-027": { type: "term", n: 8, a: "x", b: "-\\frac{3}{x}" }, "be-028": { type: "term", n: 9, a: "3x", b: "\\frac{1}{x^{2}}" },
  "be-029": { type: "flow", stages: ["1+10x+45x^{2}", "x=0.01:\\ 1+0.1+0.0045", "\\approx 1.1045"], labels: ["first 3 terms", "substitute"] },
  "be-030": { type: "pascal", n: 5 }, "be-031": { type: "pascal", n: 7 }, "be-032": { type: "pascal", n: 5 },
  "be-033": { type: "flow", stages: ["(1+x)^{12}=1+12x+66x^{2}+220x^{3}", "\\times(1+x+x^{2})", "1+13x+79x^{2}+298x^{3}"], labels: ["expand", "multiply \\& collect"] },
  "be-034": { type: "pascal", n: 6 },
  "be-035": { type: "flow", stages: ["(1-x)^{8}=1-8x+28x^{2}-56x^{3}", "\\times(3+x)", "3-23x+76x^{2}-140x^{3}"], labels: ["expand", "multiply"] },
  "be-036": { type: "pascal", n: 4 }, "be-037": { type: "pascal", n: 5 }, "be-038": { type: "pascal", n: 6 },
  "be-039": { type: "term", n: 5, a: "1", b: "4x" }, "be-040": { type: "term", n: 6, a: "3", b: "-x" },
  "be-041": { type: "pascal", n: 8 }, "be-042": { type: "pascal", n: 6 }, "be-043": { type: "pascal", n: 5 },
  "be-044": { type: "term", n: 10, a: "1", b: "x" }, "be-045": { type: "term", n: 4, a: "1", b: "-5x" },
  "be-046": { type: "pascal", n: 5 }, "be-047": { type: "term", n: 6, a: "x", b: "\\frac{2}{x}" },
  "be-048": { type: "flow", stages: ["\\binom{6}{2}k^{2}=60", "15k^{2}=60", "k=2"], labels: ["coeff of $x^{2}$", "solve ($k>0$)"] },
  "be-049": { type: "term", n: 10, a: "1", b: "3x" }, "be-050": { type: "pascal", n: 4 },
  "be-051": { type: "term", n: 7, a: "2", b: "-x" }, "be-052": { type: "pascal", n: 7 },
  "be-053": { type: "term", n: 12, a: "1", b: "-x" },
  "be-054": { type: "flow", stages: ["\\binom{8}{3}a^{3}=1512", "56a^{3}=1512\\Rightarrow a^{3}=27", "a=3"], labels: ["coeff of $x^{3}$", "solve"] },
  "be-055": { type: "term", n: 9, a: "1", b: "x" }, "be-056": { type: "pascal", n: 4 },
  "be-057": { type: "flow", stages: ["1+10(0.02)+45(0.02)^{2}", "1+0.2+0.018", "\\approx 1.218"], labels: ["first 3 terms", "evaluate"] },
  "be-058": { type: "flow", stages: ["1-8(0.02)+28(0.02)^{2}", "1-0.16+0.0112", "\\approx 0.8512"], labels: ["first 3 terms", "evaluate"] },
  "be-059": { type: "term", n: 5, a: "3", b: "2x" }, "be-060": { type: "pascal", n: 6 },
  "be-061": { type: "flow", stages: ["\\binom{5}{2}2^{3}k^{2}=80", "80k^{2}=80", "k=1"], labels: ["coeff of $x^{2}$", "solve"] },
  "be-062": { type: "pascal", n: 8 }, "be-063": { type: "term", n: 8, a: "1", b: "-2x" },
  "be-064": { type: "flow", stages: ["1+5(0.1)+10(0.1)^{2}+10(0.1)^{3}+\\ldots", "1+0.5+0.1+0.01+\\ldots", "\\approx 1.611"], labels: ["expand $(1+0.1)^{5}$", "evaluate"] },
  "be-065": { type: "pascal", n: 4 }, "be-066": { type: "term", n: 9, a: "1", b: "\\frac{x}{3}" }, "be-067": { type: "pascal", n: 5 },
  "be-068": { type: "flow", stages: ["np=12,\\ \\binom{n}{2}p^{2}=54", "\\frac{n(n-1)}{2}p^{2}=54", "n=4,\\ p=3"], labels: ["match coefficients", "solve"] },
  "be-069": { type: "pascal", n: 5 },
  "be-070": { type: "flow", stages: ["(1+x)^{4}(1+x)^{5}=(1+x)^{9}", "\\binom{9}{6}=\\binom{9}{3}", "84"], labels: ["add the indices", "evaluate"] },
  "be-071": { type: "flow", stages: ["\\binom{10}{2}a^{2}=2\\binom{10}{1}a", "45a^{2}=20a", "a=\\frac{4}{9}"], labels: ["set up the condition", "solve ($a\\neq0$)"] },
  "be-072": { type: "flow", stages: ["(1+x)^{5}(1-x)^{5}=(1-x^{2})^{5}", "x^{4}\\text{ term}:\\ \\binom{5}{2}(-1)^{2}", "10"], labels: ["difference of squares", "term in $x^{4}$"] },
  "be-073": { type: "flow", stages: ["np=20,\\ \\binom{n}{2}p^{2}=160", "\\frac{n(n-1)}{2}p^{2}=160", "n=5,\\ p=4"], labels: ["match coefficients", "solve"] },
  "be-074": { type: "term", n: 6, a: "2x^{2}", b: "\\frac{3}{x}" },
  "be-075": { type: "flow", stages: ["8k=12\\Rightarrow k=\\tfrac{3}{2}", "a=\\binom{8}{2}k^{2}=63", "b=\\binom{8}{3}k^{3}=189"], labels: ["find $k$", "find $a,b$"] },
  "be-076": { type: "flow", stages: ["(1+\\sqrt2)^{4}=17+12\\sqrt2", "(1-\\sqrt2)^{4}=17-12\\sqrt2", "\\text{sum}=34"], labels: ["expand each", "add (surds cancel)"] },
  "be-077": { type: "flow", stages: ["(2+x)^{5}=32+80x+80x^{2}+40x^{3}+\\ldots", "(1-x)^{3}=1-3x+3x^{2}-x^{3}", "\\text{coeff of }x^{3}=8"], labels: ["expand each", "collect $x^{3}$"] },
  "be-078": { type: "flow", stages: ["\\sum_{r=0}^{6}\\binom{6}{r}", "=(1+1)^{6}", "=2^{6}=64"], labels: ["put $x=1$ in $(1+x)^{6}$", "evaluate"] },
  "be-079": { type: "flow", stages: ["\\binom{n}{4}=\\binom{n}{5}", "4+5=n", "n=9"], labels: ["equal coefficients", "symmetry of $\\binom{n}{r}$"] },
  "be-080": { type: "flow", stages: ["(1+2x)^{5}-(1-2x)^{5}", "\\text{even-power terms cancel}", "x^{2}\\text{ coeff}=0"], labels: ["subtract", "$x^{2}$ is an even power"] },
  "be-081": { type: "flow", stages: ["T_{r+1}=\\binom{9}{r}(x^{2})^{9-r}\\!\\left(-\\tfrac{k}{x}\\right)^{r}", "18-3r=0\\Rightarrow r=6", "\\binom{9}{6}k^{6}=672\\Rightarrow k=\\pm\\sqrt2"], labels: ["general term", "constant term"] },
  "be-082": { type: "flow", stages: ["(1+x)^{n}=\\sum\\binom{n}{r}x^{r}", "(1-x)^{n}=\\sum\\binom{n}{r}(-x)^{r}", "2\\!\\left[1+\\binom{n}{2}x^{2}+\\ldots\\right]"], labels: ["expand both", "add: odd powers cancel"] },
  "be-083": { type: "flow", stages: ["(1+x+x^{2})^{5}", "\\text{count ways to make }x^{6}", "45"], labels: ["multinomial", "coefficient"] },
  "be-084": { type: "flow", stages: ["\\frac{\\binom{n}{3}2^{3}}{\\binom{n}{4}2^{4}}=\\frac{2}{3}", "\\frac{4}{2(n-3)}=\\frac{2}{3}", "n=6"], labels: ["ratio of coefficients", "solve"] },
  "be-085": { type: "flow", stages: ["\\sum_{r=0}^{10}(-1)^{r}\\binom{10}{r}3^{r}", "=(1-3)^{10}", "=(-2)^{10}=1024"], labels: ["put $x=-3$ in $(1+x)^{10}$", "evaluate"] },
};

// ---- helpers ----
// strip non-printable control chars + any non-ASCII (math spans / workingLatex are pure ASCII LaTeX)
const ctl = (s) => s.replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
// Robust LaTeX text-mode escaper: keeps any (possibly malformed) source text compiling.
function escTxt(t) {
  let s = t
    .replace(/[^\x09\x0a\x0d\x20-\x7e—✓]/g, "") // drop control/non-ASCII except the two we map below
    .replace(/\\/g, "\\textbackslash ")
    .replace(/([&%$#_{}])/g, "\\$1")
    .replace(/\^/g, "\\textasciicircum ")
    .replace(/~/g, "\\textasciitilde ");
  return s.replace(/—/g, "---").replace(/✓/g, "$\\checkmark$");
}
function prose(s) {
  let o = "", last = 0, m;
  const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last));
  return o;
}
// finalAnswer: delimited -> split; bare math -> wrap whole in inline display math
function ans(s) {
  if (s.includes("\\(")) {
    let o = "", last = 0, m;
    const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += escTxt(s.slice(last));
    return o;
  }
  return "\\(\\displaystyle " + ctl(s) + "\\)";
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function binom(n, r) { let v = 1; for (let j = 0; j < r; j++) v = (v * (n - j)) / (j + 1); return Math.round(v); }

function diagPascal(n) {
  const dx = 1.0, dy = 0.85;
  let s = "\\begin{tikzpicture}[font=\\small]\n";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      const v = binom(i, j), x = (j - i / 2) * dx, y = -i * dy;
      if (i === n)
        s += `\\node[circle,draw=red!70,fill=red!10,inner sep=1pt,minimum size=5mm] at (${f(x)},${f(y)}) {$\\mathbf{${v}}$};\n`;
      else
        s += `\\node[gray] at (${f(x)},${f(y)}) {$${v}$};\n`;
    }
  }
  s += "\\end{tikzpicture}";
  return wrap(s);
}
function diagTerm(d) {
  const t = `\\begin{tikzpicture}
\\node (T) {$\\displaystyle T_{r+1} = {\\color{teal!60!black}\\binom{${d.n}}{r}}\\,{\\color{blue!70!black}\\left(${d.a}\\right)^{${d.n}-r}}\\,{\\color{red!70!black}\\left(${d.b}\\right)^{r}}$};
\\node[below=4pt of T,font=\\footnotesize] {{\\color{teal!60!black}choose $r$}\\quad{\\color{blue!70!black}power of 1st term}\\quad{\\color{red!70!black}power of 2nd term}};
\\end{tikzpicture}`;
  return wrap(t);
}
function diagNcr(d) {
  const v = binom(d.n, d.r);
  const t = `\\begin{tikzpicture}
\\node[draw=teal!55,rounded corners,fill=teal!8,inner sep=5pt] {$\\displaystyle \\binom{${d.n}}{${d.r}} = \\frac{${d.n}!}{${d.r}!\\,(${d.n}-${d.r})!} = ${v}$};
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
function diagram(id) {
  const d = D[id];
  if (!d) return null;
  if (d.type === "pascal") return diagPascal(d.n);
  if (d.type === "term") return diagTerm(d);
  if (d.type === "ncr") return diagNcr(d);
  if (d.type === "flow") return diagFlow(d);
  return null;
}
function cap(id) {
  const d = D[id];
  if (d.type === "pascal") return `Row $${d.n}$ of Pascal's triangle (red) gives the binomial coefficients $\\binom{${d.n}}{r}$; multiply each by the matching powers $a^{\\,${d.n}-r}b^{\\,r}$.`;
  if (d.type === "term") return `General term of $\\left(${d.a}+${d.b}\\right)^{${d.n}}$. Set the power of $x$ to the required value to find $r$, then evaluate.`;
  if (d.type === "ncr") return `The binomial coefficient counts the ways to choose $r$ objects from $${d.n}$; large factorials cancel.`;
  return "Solution flow: each arrow applies one step.";
}

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

\\title{\\textbf{Binomial Expansions}\\\\[0.3em]\\large Worked Solutions with TikZ Diagrams}
\\author{Wisest Maths --- Year 1 A-Level, Binomial Expansions (ref \\texttt{be})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Binomial Expansions} questions, each with a fully
worked solution and a TikZ diagram matched to the method:
\\begin{itemize}\\setlength{\\itemsep}{1pt}
  \\item \\textbf{Pascal's triangle} (row $n$ highlighted) for expanding $(a+b)^{n}$;
  \\item the \\textbf{general-term card} $T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}$ for finding a coefficient or the term independent of $x$;
  \\item a \\textbf{factorial card} for evaluating $\\binom{n}{r}$;
  \\item \\textbf{solution-flow} diagrams for approximations, products, finding unknowns, and identities.
\\end{itemize}
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

  const dg = diagram(q.id);
  if (dg) {
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${dg}\n\\end{center}\n`;
    L += `\\small ${cap(q.id)}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions)");
