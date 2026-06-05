/*
 * Generates a thorough LaTeX worksheet (questions + full worked solutions + TikZ
 * diagrams) for every question in the Factorising Quadratics bank (qc1).
 *
 * Run:  node scripts/gen_factorising_quadratics_latex.js
 * Out:  worksheets/Factorising_Quadratics_Worked_Solutions.tex
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(
  ROOT,
  'lib/data/questions/Year_1_A_Level_Maths/Quadratic_and_Cubics/qc1_factorising_quadratic.ts'
);
const OUT_DIR = path.join(ROOT, 'worksheets');
const OUT = path.join(OUT_DIR, 'Factorising_Quadratics_Worked_Solutions.tex');

// ---------------------------------------------------------------------------
// 1. Parse the TypeScript question bank
// ---------------------------------------------------------------------------
const raw = fs.readFileSync(SRC, 'utf8');

// Normalise stray Unicode punctuation that pdflatex (T1) can't typeset
const sanitizeUnicode = (s) =>
  s
    .replace(/−/g, '-')   // minus sign
    .replace(/[‐-―]/g, '-') // various hyphens/dashes
    .replace(/×/g, '\\times ') // ×
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/…/g, '\\ldots ');

// Turn a TS single-quoted string literal body into real LaTeX (\\( -> \()
const unescape = (s) => sanitizeUnicode(s.replace(/\\(.)/g, '$1'));

// regex for a single-quoted JS string value
const STR = `'((?:\\\\.|[^'\\\\])*)'`;

function field(chunk, name) {
  const m = chunk.match(new RegExp(`${name}:\\s*${STR}`));
  return m ? unescape(m[1]) : null;
}

const chunks = raw.split(/\n\s*id:\s*'/).slice(1); // first piece is the header
const questions = chunks.map((chunkRaw) => {
  const id = chunkRaw.match(/^(qc1-\d+)'/)[1];
  const chunk = chunkRaw;
  const q = {
    id,
    questionText: field(chunk, 'questionText'),
    difficulty: field(chunk, 'difficulty'),
    marks: (chunk.match(/marks:\s*(\d+)/) || [])[1],
    finalAnswer: field(chunk, 'finalAnswer'),
    tags: [],
    steps: [],
  };
  const tagsM = chunk.match(/tags:\s*\[([^\]]*)\]/);
  if (tagsM) {
    q.tags = [...tagsM[1].matchAll(new RegExp(STR, 'g'))].map((m) => unescape(m[1]));
  }
  // steps: collect description / workingLatex / explanation in document order
  const descs = [...chunk.matchAll(new RegExp(`description:\\s*${STR}`, 'g'))].map((m) => unescape(m[1]));
  const works = [...chunk.matchAll(new RegExp(`workingLatex:\\s*${STR}`, 'g'))].map((m) => unescape(m[1]));
  const exps = [...chunk.matchAll(new RegExp(`explanation:\\s*${STR}`, 'g'))].map((m) => unescape(m[1]));
  for (let i = 0; i < descs.length; i++) {
    q.steps.push({ description: descs[i], workingLatex: works[i] || '', explanation: exps[i] || '' });
  }
  return q;
});

console.log(`Parsed ${questions.length} questions.`);

// ---------------------------------------------------------------------------
// 2. Monomial algebra helpers (for the area / box model + expansion)
// ---------------------------------------------------------------------------
// monomial: { c: coefficient, xp: power of x, yp: power of y }
const mul = (a, b) => ({ c: a.c * b.c, xp: a.xp + b.xp, yp: a.yp + b.yp });

function monoStr(m) {
  if (m.c === 0) return '0';
  const sign = m.c < 0 ? '-' : '';
  const a = Math.abs(m.c);
  const pow = (v, p) => (p ? v + (p > 1 ? `^{${p}}` : '') : '');
  const varPart = pow('x', m.xp) + pow('y', m.yp);
  if (varPart === '') return sign + a;
  return sign + (a === 1 ? '' : a) + varPart;
}

// signed header label (segment length on the box)
function headerStr(m, isFirst) {
  const s = monoStr(m);
  if (isFirst) return s;
  return s[0] === '-' ? s : '+' + s;
}

// Parse "2x + 1", "x - 5", "x + 2y", "x", "y" -> array of monomials
function parseFactor(str) {
  const tokens = str.trim().match(/[+-]?\s*[^+-]+/g) || [];
  return tokens.map((tok) => {
    tok = tok.replace(/\s+/g, '');
    let sign = 1;
    if (tok[0] === '+') tok = tok.slice(1);
    else if (tok[0] === '-') { sign = -1; tok = tok.slice(1); }
    const mm = tok.match(/^(\d+)?(x)?(y)?$/);
    const c = (mm && mm[1] ? parseInt(mm[1], 10) : 1) * sign;
    return { c, xp: mm && mm[2] ? 1 : 0, yp: mm && mm[3] ? 1 : 0 };
  });
}

// Parse a factorised expression like "(x + 2)(x + 3)", "(x + 4)^2",
// "x(x - 8)", "2(x - 3)(x + 3)" -> { k, factors:[[mono],[mono]] }
function parseFactorised(coreIn) {
  let core = coreIn.replace(/\\[()]/g, '').replace(/[()]/g, (c) => c).trim();
  // strip inline-math delimiters that survive
  core = coreIn.replace(/\\\(|\\\)/g, '').trim();
  let k = 1;
  const factors = [];
  let cm = core.match(/^(\d+)\(/);
  if (cm) { k = parseInt(cm[1], 10); core = core.slice(cm[1].length); }
  else {
    const mm = core.match(/^([a-z])\(/);
    if (mm) { factors.push([{ c: 1, xp: mm[1] === 'x' ? 1 : 0, yp: mm[1] === 'y' ? 1 : 0 }]); core = core.slice(1); }
  }
  const re = /\(([^()]*)\)(\^\{?2\}?)?/g;
  let mt;
  while ((mt = re.exec(core))) {
    factors.push(parseFactor(mt[1]));
    if (mt[2]) factors.push(parseFactor(mt[1])); // squared -> repeat
  }
  return { k, factors };
}

// Extract a factorised "(...)(...)" string from a solving question's steps
function factorisedFromSteps(q) {
  for (const s of q.steps) {
    if (/\)\s*\(/.test(s.workingLatex) || /\([^()]*\)\^/.test(s.workingLatex)) {
      let w = s.workingLatex;
      w = w.split(/:|\\Rightarrow|=\s*0/)[0]; // drop ": ...", "=> ...", "= 0"
      return w.trim();
    }
  }
  return null;
}

// numeric polynomial coefficients [c, b, a] from {k, factors}; null if a y appears
function polyCoeffs({ k, factors }) {
  let coeffs = [k];
  for (const f of factors) {
    const fp = [];
    for (const t of f) {
      if (t.yp > 0) return null; // two-variable -> no numeric parabola
      fp[t.xp] = (fp[t.xp] || 0) + t.c;
    }
    for (let i = 0; i < fp.length; i++) if (fp[i] === undefined) fp[i] = 0;
    const next = [];
    for (let i = 0; i < coeffs.length; i++)
      for (let j = 0; j < fp.length; j++)
        next[i + j] = (next[i + j] || 0) + coeffs[i] * fp[j];
    coeffs = next;
  }
  return coeffs;
}

// roots {value, label} for each linear factor; null if any y
function rootsOf({ factors }) {
  const out = [];
  for (const f of factors) {
    if (f.some((t) => t.yp > 0)) return null;
    if (f.length === 1) {
      // monomial factor like x  -> root 0
      if (f[0].xp === 1) out.push({ value: 0, label: '0' });
      continue;
    }
    const lin = f.find((t) => t.xp === 1) || { c: 1 };
    const con = f.find((t) => t.xp === 0) || { c: 0 };
    const m = lin.c, n = con.c;
    const value = -n / m;
    let label;
    if (m === 1) label = String(-n);
    else if ((-n) % m === 0) label = String((-n) / m);
    else {
      const sign = value < 0 ? '-' : '';
      label = `${sign}\\tfrac{${Math.abs(n)}}{${Math.abs(m)}}`;
    }
    out.push({ value, label });
  }
  return out;
}

const fmtNum = (v) => {
  if (Math.abs(v - Math.round(v)) < 1e-9) return String(Math.round(v));
  return v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
};

// ---------------------------------------------------------------------------
// 3. TikZ generators
// ---------------------------------------------------------------------------
function boxModel({ k, factors }) {
  if (factors.length < 2) return '';
  const A = factors[0]; // rows
  const B = factors[1]; // cols
  const w = 2.5, h = 1.5;
  const L = [];
  L.push('\\begin{tikzpicture}[font=\\small]');
  // cells
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const x0 = j * w, y0 = -i * h;
      const prod = monoStr(mul(A[i], B[j]));
      L.push(`  \\fill[blue!6] (${x0},${y0}) rectangle (${x0 + w},${y0 - h});`);
      L.push(`  \\draw[blue!40] (${x0},${y0}) rectangle (${x0 + w},${y0 - h});`);
      L.push(`  \\node at (${x0 + w / 2},${y0 - h / 2}) {$${prod}$};`);
    }
  }
  // column headers (B terms)
  for (let j = 0; j < B.length; j++)
    L.push(`  \\node[blue!60!black] at (${j * w + w / 2},0.45) {$${headerStr(B[j], j === 0)}$};`);
  // row headers (A terms)
  for (let i = 0; i < A.length; i++)
    L.push(`  \\node[blue!60!black] at (-0.75,${-i * h - h / 2}) {$${headerStr(A[i], i === 0)}$};`);
  if (k !== 1)
    L.push(`  \\node[red!60!black] at (${-1.9},${-(A.length * h) / 2}) {$${k}\\,\\times$};`);
  L.push('\\end{tikzpicture}');
  return L.join('\n');
}

function parabola(coeffs, roots) {
  if (!coeffs || coeffs.length < 3) return '';
  const a = coeffs[2], b = coeffs[1] || 0, c = coeffs[0] || 0;
  if (!a) return '';
  const rs = (roots || []).map((r) => r.value);
  let lo, hi;
  if (rs.length) {
    lo = Math.min(...rs); hi = Math.max(...rs);
  } else {
    const vx = -b / (2 * a); lo = vx - 2; hi = vx + 2;
  }
  const pad = Math.max(1.2, (hi - lo) * 0.45);
  const dlo = lo - pad, dhi = hi + pad;
  const vx = -b / (2 * a), vy = c - (b * b) / (4 * a);
  const L = [];
  L.push('\\begin{tikzpicture}');
  L.push('\\begin{axis}[');
  L.push('  axis lines=middle, xlabel={$x$}, ylabel={$y$},');
  L.push('  width=8.4cm, height=6.4cm, grid=both, grid style={gray!18},');
  L.push('  enlargelimits=true, samples=120,');
  L.push(`  domain=${fmtNum(dlo)}:${fmtNum(dhi)}, every axis x label/.style={at={(ticklabel* cs:1)},anchor=west},`);
  L.push('  every axis y label/.style={at={(ticklabel* cs:1)},anchor=south}]');
  const expr = `${a}*x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}*x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}`;
  L.push(`  \\addplot[blue, thick]{${expr}};`);
  // roots
  const seen = new Set();
  for (const r of roots || []) {
    const key = fmtNum(r.value);
    if (seen.has(key)) continue; seen.add(key);
    L.push(`  \\addplot[only marks, mark=*, red] coordinates {(${fmtNum(r.value)},0)};`);
    L.push(`  \\node[red!70!black, anchor=north] at (axis cs:${fmtNum(r.value)},0) {$${r.label}$};`);
  }
  // vertex
  L.push(`  \\addplot[only marks, mark=*, black] coordinates {(${fmtNum(vx)},${fmtNum(vy)})};`);
  L.push(`  \\node[anchor=${vy < 0 ? 'north' : 'south'}] at (axis cs:${fmtNum(vx)},${fmtNum(vy)}) {\\scriptsize $(${fmtNum(vx)},\\,${fmtNum(vy)})$};`);
  L.push('\\end{axis}');
  L.push('\\end{tikzpicture}');
  return L.join('\n');
}

// ---------------------------------------------------------------------------
// 4. Per-question section
// ---------------------------------------------------------------------------
function categoryLabel(tags) {
  if (tags.includes('difference of two squares')) return 'Difference of two squares';
  if (tags.includes('perfect square')) return 'Perfect square';
  if (tags.includes('two variables')) return 'Two variables';
  if (tags.includes('common factor')) return 'Common factor';
  if (tags.includes('non-monic')) return 'Non-monic ($a\\neq1$)';
  if (tags.includes('solving')) return 'Solving by factorising';
  return 'Monic ($a=1$)';
}

function expansionLine({ k, factors }) {
  if (factors.length < 2) return '';
  const A = factors[0], B = factors[1];
  const cells = [];
  for (let i = 0; i < A.length; i++)
    for (let j = 0; j < B.length; j++) cells.push(monoStr(mul(A[i], B[j])));
  // join with explicit + signs
  let s = cells
    .map((t, i) => (i === 0 ? t : t[0] === '-' ? t : '+' + t))
    .join(' ');
  return (k !== 1 ? `${k}\\big(${s}\\big)` : s);
}

function section(q, idx) {
  const num = idx + 1;
  const cat = categoryLabel(q.tags);
  const out = [];
  out.push(`\\section*{Question ${num} \\quad {\\normalfont\\small\\ttfamily ${q.id}}}`);
  out.push(`\\addcontentsline{toc}{section}{Q${num}. ${cat}}`);
  out.push('\\nopagebreak');
  out.push('\\begin{qbox}');
  out.push(`${q.questionText}`);
  out.push('\\end{qbox}');
  out.push(
    `\\smallskip\\noindent\\textit{Type:} ${cat} \\hfill \\textit{Marks:} ${q.marks || '--'} \\quad \\textit{Difficulty:} ${q.difficulty || '--'}\\\\[2pt]`
  );

  // worked solution
  out.push('\\subsection*{Worked solution}');
  out.push('\\begin{enumerate}[leftmargin=1.6em,label=\\textbf{Step \\arabic*.}]');
  for (const s of q.steps) {
    out.push('  \\item ' + s.description);
    if (s.workingLatex && s.workingLatex.trim())
      out.push(`  \\[ ${s.workingLatex} \\]`);
    if (s.explanation && s.explanation.trim())
      out.push(`  \\par\\smallskip{\\small\\itshape ${s.explanation}}`);
  }
  out.push('\\end{enumerate}');

  if (q.finalAnswer)
    out.push(`\\begin{ansbox}\\textbf{Final answer:}\\quad ${q.finalAnswer}\\end{ansbox}`);

  // diagrams
  const isSolving = q.tags.includes('solving');
  let parsed = null;
  if (isSolving) {
    const fs2 = factorisedFromSteps(q);
    if (fs2) parsed = parseFactorised(fs2);
  } else if (q.finalAnswer) {
    parsed = parseFactorised(q.finalAnswer);
  }

  if (parsed && parsed.factors.length >= 2) {
    const box = boxModel(parsed);
    const coeffs = polyCoeffs(parsed);
    const roots = rootsOf(parsed);
    const par = coeffs ? parabola(coeffs, roots) : '';

    // verification by expansion
    const exp = expansionLine(parsed);
    if (exp) {
      out.push('\\subsection*{Check by expanding}');
      out.push(`Multiplying the brackets back out reproduces the original expression:`);
      out.push(`\\[ ${exp} \\]`);
    }

    out.push('\\subsection*{Visualising the factorisation}');
    if (par) {
      out.push('\\begin{center}');
      out.push('\\begin{tabular}{cc}');
      out.push(box + ' &');
      out.push(par);
      out.push('\\\\[4pt]');
      out.push('{\\small (a) Area / box model} & {\\small (b) Graph $y=f(x)$ with its roots} \\\\');
      out.push('\\end{tabular}');
      out.push('\\end{center}');
    } else {
      out.push('\\begin{center}');
      out.push(box);
      out.push('\\\\[3pt]{\\small Area / box model: each cell is the product of its row and column term.}');
      out.push('\\end{center}');
    }
  }

  out.push('\\vspace{2pt}\\hrule\\vspace{6pt}');
  return out.join('\n');
}

// ---------------------------------------------------------------------------
// 5. Assemble document
// ---------------------------------------------------------------------------
const preamble = String.raw`\documentclass[11pt]{article}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[a4paper,margin=2.2cm]{geometry}
\usepackage{amsmath,amssymb}
\DeclareUnicodeCharacter{2212}{-}
\usepackage{enumitem}
\usepackage{xcolor}
\usepackage{tikz}
\usepackage{pgfplots}
\pgfplotsset{compat=1.17}
\usetikzlibrary{calc}
\usepackage[colorlinks=true,linkcolor=blue!60!black,urlcolor=blue]{hyperref}

% ---- question / answer boxes (no external dependency) -------------------
\newenvironment{qbox}{%
  \par\smallskip\noindent
  \begin{tikzpicture}\node[draw=blue!55!black,fill=blue!4,rounded corners=3pt,
    inner sep=8pt,text width=\dimexpr\linewidth-20pt\relax]\bgroup}%
  {\egroup;\end{tikzpicture}\par\smallskip}
\newenvironment{ansbox}{%
  \par\smallskip\noindent
  \begin{tikzpicture}\node[draw=green!45!black,fill=green!6,rounded corners=3pt,
    inner sep=7pt,text width=\dimexpr\linewidth-20pt\relax]\bgroup}%
  {\egroup;\end{tikzpicture}\par\smallskip}

\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}

\title{\textbf{Factorising Quadratics}\\[4pt]\large Complete Worked Solutions with Diagrams}
\author{Wisest Maths --- Year 1 A-Level (topic ref: \texttt{qc1})}
\date{Generated automatically from the question bank}
`;

const intro = String.raw`\maketitle
\thispagestyle{empty}

\section*{About this document}
This booklet contains every question from the \textbf{Factorising Quadratics} bank
(\texttt{qc1-001} to \texttt{qc1-070}), each presented with a full step-by-step worked
solution, a check by expansion, and supporting diagrams drawn in Ti\emph{k}Z:
\begin{itemize}[leftmargin=1.4em]
  \item an \textbf{area / box model}, where every cell is the product of its row and
        column term --- the four (or more) cells sum to the original quadratic; and
  \item for numeric examples, a \textbf{graph} $y=f(x)$ showing the parabola together
        with its roots (where it crosses the $x$-axis) and its vertex.
\end{itemize}
The box model makes the link between \emph{factorising} (splitting a rectangle into pieces)
and \emph{expanding} (recombining them) explicit, while the graph connects the algebra to
the geometry of the curve.

\vspace{6pt}\hrule
\tableofcontents
\newpage
`;

let doc = preamble + '\\begin{document}\n' + intro;
questions.forEach((q, i) => { doc += '\n' + section(q, i) + '\n'; });
doc += '\n\\end{document}\n';

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, doc, 'utf8');
console.log(`Wrote ${OUT} (${doc.length} bytes).`);
