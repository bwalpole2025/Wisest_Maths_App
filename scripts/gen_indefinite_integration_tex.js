/* Generates Indefinite_Integration.tex from i1_indefinite_integration.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Integration/i1_indefinite_integration.ts");
const OUT = path.join(__dirname, "..", "Indefinite_Integration.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const pw = (x, p) => x > 0 ? Math.pow(x, p) : (x === 0 ? 0 : NaN);   // power (real domain)
const ln = Math.log;
// I(A, [xa,xb], {pt, label}) — A is the (base) antiderivative; family = vertical translates
const I = (A, xr, o = {}) => ({ A, xr, pt: o.pt, label: o.label });

const D = {
  "i1-001": I((x) => x ** 7 / 7, [-1.5, 1.5], { label: "y=\\frac{x^7}{7}+C" }),
  "i1-002": I((x) => x ** 5, [-1.5, 1.6], { label: "y=x^5+C" }),
  "i1-003": I((x) => 4 * x * x, [-3, 3], { label: "y=4x^2+C" }),
  "i1-004": I((x) => 12 * x, [-3, 3], { label: "y=12x+C" }),
  "i1-005": I((x) => -(x ** 3), [-2.5, 2.5], { label: "y=-x^3+C" }),
  "i1-006": I((x) => -1 / (2 * x * x), [0.3, 4], { label: "y=-\\frac{1}{2x^2}+C" }),
  "i1-007": I((x) => (2 / 3) * pw(x, 1.5), [0, 4], { label: "y=\\frac23x^{3/2}+C" }),
  "i1-008": I((x) => -4 / x, [0.3, 4], { label: "y=-\\frac4x+C" }),
  "i1-009": I((x) => x ** 3 + 2.5 * x * x - 2 * x, [-3, 2.2], { label: "y=x^3+\\frac{5x^2}{2}-2x+C" }),
  "i1-010": I((x) => x ** 4 - 2 * x ** 3 + x, [-1.3, 2.4], { label: "y=x^4-2x^3+x+C" }),
  "i1-011": I((x) => x ** 3 / 3 + x * x / 2 - 6 * x, [-4, 4], { label: "y=\\frac{x^3}{3}+\\frac{x^2}{2}-6x+C" }),
  "i1-012": I((x) => 0.75 * x ** 4 - (5 / 3) * x ** 3, [-1.5, 2.6], { label: "y=\\frac{3x^4}{4}-\\frac{5x^3}{3}+C" }),
  "i1-013": I((x) => (4 / 3) * x ** 3 - 2 * x * x + x, [-1.2, 2.4], { label: "y=\\frac{4x^3}{3}-2x^2+x+C" }),
  "i1-014": I((x) => 0.75 * pw(x, 4 / 3) + x * x, [0, 4], { label: "y=\\frac34x^{4/3}+x^2+C" }),
  "i1-015": I((x) => x ** 3 / 3 - 4 * x, [-3.5, 3.5], { label: "y=\\frac{x^3}{3}-4x+C" }),
  "i1-016": I((x) => x ** 4 / 2 + x * x / 2, [-2.2, 2.2], { label: "y=\\frac{x^4}{2}+\\frac{x^2}{2}+C" }),
  "i1-017": I((x) => 2 * pw(x, 1.5) + 2 / x, [0.3, 4], { label: "y=2x^{3/2}+\\frac2x+C" }),
  "i1-018": I((x) => 0.4 * pw(x, 2.5) + (8 / 3) * pw(x, 1.5), [0, 4], { label: "y=\\frac25x^{5/2}+\\frac83x^{3/2}+C" }),
  "i1-019": I((x) => 0.4 * pw(x, 2.5) + (10 / 3) * pw(x, 1.5) + 12 * Math.sqrt(x), [0, 4], { label: "y=\\frac25x^{5/2}+\\frac{10}{3}x^{3/2}+12\\sqrt x+C" }),
  "i1-020": I((x) => 2 * x ** 3 - 2 * x * x + 3 * x, [-2.2, 2.6], { label: "y=2x^3-2x^2+3x+C" }),
  "i1-021": I((x) => 2 * x * x - x + 3, [-3, 3], { pt: [0, 3], label: "y=2x^2-x+3" }),
  "i1-022": I((x) => x ** 3 - 3 * x * x + x + 7, [-1.5, 4], { pt: [2, 5], label: "y=x^3-3x^2+x+7" }),
  "i1-023": I((x) => 2 * x ** 3 - 6 * x * x + 2, [-1.5, 3.5], { pt: [1, -2], label: "y=2x^3-6x^2+2" }),
  "i1-024": I((x) => 2 * Math.sqrt(x) + 6, [0, 8], { pt: [4, 10], label: "y=2\\sqrt x+6" }),
  "i1-025": I((x) => x * x + 5 / x - 20 / 3, [0.4, 6], { pt: [3, 4], label: "y=x^2+\\frac5x-\\frac{20}{3}" }),
  "i1-026": I((t) => (2 / 3) * pw(t, 1.5) - 3 * t + 47 / 3, [0, 8], { pt: [4, 9], label: "y=\\frac23t^{3/2}-3t+\\frac{47}{3}", x: "t" }),
  "i1-027": I((x) => (2 / 3) * x ** 3 - 2.5 * x * x - 3 * x + 47 / 6, [-2, 4], { pt: [1, 3], label: "y=\\frac{2x^3}{3}-\\frac{5x^2}{2}-3x+\\frac{47}{6}" }),
  "i1-028": I((x) => (2 / 3) * pw(x, 1.5) + 2 * Math.sqrt(x) - 1 / 3, [0, 7], { pt: [4, 9], label: "y=\\frac23x^{3/2}+2\\sqrt x-\\frac13" }),
  "i1-029": I((t) => 3 * t * t - 2 * t, [0, 4], { pt: [0, 0], label: "v=3t^2-2t", x: "t", y: "v" }),
  "i1-030": I((t) => 10 * t - 2 * t * t + 8, [0, 6], { pt: [0, 8], label: "v=10t-2t^2+8", x: "t", y: "v" }),
  "i1-031": I((x) => x * x / 2 + 2 * x - ln(x), [0.3, 4], { label: "y=\\frac{x^2}{2}+2x-\\ln|x|+C" }),
  "i1-032": I((x) => x ** 3 + x * x - 4 * x + 5, [-3.5, 2.5], { pt: [0, 5], label: "f(x)=x^3+x^2-4x+5" }),
  "i1-033": I((x) => (5 / 3) * x ** 3 + 4.5 * x * x - 2 * x - 31 / 6, [-3.5, 2], { pt: [1, -1], label: "f(x)=\\frac{5x^3}{3}+\\frac{9x^2}{2}-2x-\\frac{31}{6}" }),
  "i1-034": I((x) => x ** 3 / 3 + 4 / x - 5 / 3, [0.4, 4], { pt: [2, 3], label: "f(x)=\\frac{x^3}{3}+\\frac4x-\\frac53" }),
  "i1-035": I((x) => x ** 4 + 2 * x ** 3 + 2 * x + 1, [-2.2, 1.8], { pt: [1, 6], label: "f(x)=x^4+2x^3+2x+1" }),
  "i1-036": I((x) => (7 / 3) * x ** 3, [-2.2, 2.2], { label: "y=\\frac{7x^3}{3}+C" }),
  "i1-037": I((x) => x ** 3 + 2 * x * x - x, [-3, 2], { label: "y=x^3+2x^2-x+C" }),
  "i1-038": I((x) => 10 * x, [-3, 3], { label: "y=10x+C" }),
  "i1-039": I((x) => -1 / (2 * x * x), [0.3, 4], { label: "y=-\\frac{1}{2x^2}+C" }),
  "i1-040": I((x) => (2 / 3) * pw(x, 1.5), [0, 4], { label: "y=\\frac23x^{3/2}+C" }),
  "i1-041": I((x) => x ** 6 - x * x + 3 * x, [-1.5, 1.6], { label: "y=x^6-x^2+3x+C" }),
  "i1-042": I((x) => -1 / (x ** 3), [0.4, 4], { label: "y=-\\frac{1}{x^3}+C" }),
  "i1-043": I((x) => (8 / 3) * pw(x, 1.5), [0, 4], { label: "y=\\frac83x^{3/2}+C" }),
  "i1-044": I((x) => x ** 4 / 4 + 2 / x, [0.4, 3], { label: "y=\\frac{x^4}{4}+\\frac2x+C" }),
  "i1-045": I((x) => x ** 3 / 3 + 2 * x, [-3, 3], { label: "y=\\frac{x^3}{3}+2x+C" }),
  "i1-046": I((x) => 6 * x + 3 / x, [0.4, 5], { label: "y=6x+\\frac3x+C" }),
  "i1-047": I((x) => 2 * Math.sqrt(x), [0, 5], { label: "y=2\\sqrt x+C" }),
  "i1-048": I((x) => x * x + 2 * Math.sqrt(x), [0, 4], { label: "y=x^2+2\\sqrt x+C" }),
  "i1-049": I((x) => (4 / 3) * x ** 3 + 2 * x * x + x, [-2, 2], { label: "y=\\frac{4x^3}{3}+2x^2+x+C" }),
  "i1-050": I((x) => x ** 3 / 3 - 1.5 * x * x, [-2, 4], { label: "y=\\frac{x^3}{3}-\\frac{3x^2}{2}+C" }),
  "i1-051": I((x) => x * x / 2 + 3 * x, [-5, 3], { label: "y=\\frac{x^2}{2}+3x+C" }),
  "i1-052": I((x) => 0.4 * pw(x, 2.5) + (8 / 3) * pw(x, 1.5), [0, 4], { label: "y=\\frac25x^{5/2}+\\frac83x^{3/2}+C" }),
  "i1-053": I((x) => x ** 3 - 4 * x + 5, [-2.5, 3], { pt: [2, 5], label: "y=x^3-4x+5" }),
  "i1-054": I((x) => 3 * x * x - x + 2, [-2, 3], { pt: [1, 4], label: "y=3x^2-x+2" }),
  "i1-055": I((x) => x ** 5 - 3 / x - 7 * x, [0.4, 2], { label: "y=x^5-\\frac3x-7x+C" }),
  "i1-056": I((x) => (2 / 3) * x ** 3 - x - 4 / x, [0.4, 3], { label: "y=\\frac{2x^3}{3}-x-\\frac4x+C" }),
  "i1-057": I((x) => 0.6 * pw(x, 5 / 3), [0, 4], { label: "y=\\frac35x^{5/3}+C" }),
  "i1-058": I((x) => 10 * Math.sqrt(x), [0, 4], { label: "y=10\\sqrt x+C" }),
  "i1-059": I((x) => x ** 3 / 3 - 1.5 * x * x - 10 * x, [-4, 6], { label: "y=\\frac{x^3}{3}-\\frac{3x^2}{2}-10x+C" }),
  "i1-060": I((x) => x ** 4 + x * x - 2, [-2, 2], { pt: [1, 0], label: "y=x^4+x^2-2" }),
  "i1-061": I((x) => 2 * pw(x, 1.5) + 1 / (2 * x * x), [0.3, 4], { label: "y=2x^{3/2}+\\frac{1}{2x^2}+C" }),
  "i1-062": I((x) => 4 * x ** 3 - 3 * x * x + x + 3, [-2, 2.5], { pt: [0, 3], label: "f(x)=4x^3-3x^2+x+3" }),
  "i1-063": I((x) => x + 1 / x, [0.3, 5], { label: "y=x+\\frac1x+C" }),
  "i1-064": I((x) => x ** 5 / 5 + (2 / 3) * x ** 3 + x, [-2, 2], { label: "y=\\frac{x^5}{5}+\\frac{2x^3}{3}+x+C" }),
  "i1-065": I((x) => -3 / x + 2 * x + 5, [0.4, 6], { pt: [3, 10], label: "y=-\\frac3x+2x+5" }),
  "i1-066": I((x) => x ** 3 / 3 + 1 / x, [0.4, 4], { label: "y=\\frac{x^3}{3}+\\frac1x+C" }),
  "i1-067": I((x) => x * x / 2 + 2 * x + ln(x), [0.3, 4], { label: "y=\\frac{x^2}{2}+2x+\\ln|x|+C" }),
  "i1-068": I((x) => 2 * pw(x, 1.5) + 4, [0, 6], { pt: [4, 20], label: "y=2x^{3/2}+4" }),
  "i1-069": I((x) => x * x + 2 / (x * x), [0.4, 4], { pt: [1, 3], label: "f(x)=x^2+\\frac{2}{x^2}" }),
  "i1-070": I((x) => x ** 3 - 3 * x + 4, [-3, 3], { pt: [1, 2], label: "y=x^3-3x+4" }),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/✓/g, "\\checkmark ").replace(/−/g, "-").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/(?<!\\)%/g, "\\%").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—→×÷✓²³−⟹]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/[–]/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/÷/g, "$\\div$").replace(/−/g, "-").replace(/⟹/g, "$\\Rightarrow$").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/✓/g, "$\\checkmark$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@").replace(/\\,/g, "@TS@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ").replace(/@TS@/g, "\\,");
function textMath(x) {
  const isl = [], txt = [];
  let y = x.replace(/@QQ@|@QD@|@TS@/g, " ").replace(/@NL@/g, "\\\\ ").replace(/\\[,;:!>\s]/g, " ").replace(/\\left\s*/g, "").replace(/\\right\s*/g, "");
  y = y.replace(/\\(textbf|textit|textrm|emph)\{[^{}]*\}/g, (m) => `@T${txt.push(m) - 1}@`);
  y = y.replace(/\\(?:text|mathrm|mathbb)\{([^}]*)\}/g, "$1").replace(/\\pounds\s*/g, "£");
  y = y.replace(/\\[tdc]?frac\{(?:[^{}]|\{[^{}]*\})*\}\{(?:[^{}]|\{[^{}]*\})*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\sqrt\{(?:[^{}]|\{[^{}]*\})*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\(approx|times|div|to|Rightarrow|leq|geq|le|ge|cdot|pm|mp|infty|ne|neq|in|cup|cap|propto|ln|log|int|mathrm)\b/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/[A-Za-z0-9.]+(?:\^|_)(?:\{[^{}]*\}|[A-Za-z0-9.]+)/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/[<>]/g, (m) => `@I${isl.push(m) - 1}@`);
  y = escTxt(y);
  y = y.replace(/@I(\d+)@/g, (_, i) => "$" + ctl(isl[+i]) + "$");
  y = y.replace(/@T(\d+)@/g, (_, i) => txt[+i]);
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
  const bareNoConn = s0.replace(/\\[a-zA-Z]+/g, "").replace(/\b(and|or|vs)\b/gi, "");
  if (/[A-Za-z]{4,}/.test(bareNoConn)) return restore(textMath(s));
  return s0.split(/\b(and|or)\b/i).map((p) => /^(and|or)$/i.test(p.trim()) ? " " + p.trim() + " " : (p.trim() ? "\\(\\displaystyle " + ctl(p) + "\\)" : "")).join("");
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const raw = r / 8; const p = Math.pow(10, Math.floor(Math.log10(raw))); for (const k of [1, 2, 2.5, 5]) if (p * k >= raw) return p * k; return p * 10; }
const FAM = "gray!50", MAIN = "blue!72!black", PTC = "red!75!black";

function intgraph(spec) {
  const A = spec.A, [Xa, Xb] = spec.xr, xl = spec.x || "x", yl = spec.y || "y";
  // sample to find y-range of A on [Xa,Xb]
  let ylo = Infinity, yhi = -Infinity; const N = 240;
  for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); const y = A(x); if (isFinite(y)) { if (y < ylo) ylo = y; if (y > yhi) yhi = y; } }
  if (spec.pt) { ylo = Math.min(ylo, spec.pt[1]); yhi = Math.max(yhi, spec.pt[1]); }
  if (!isFinite(ylo)) { ylo = -1; yhi = 1; }
  let rng = yhi - ylo; if (rng < 1.5) { const m = (ylo + yhi) / 2; ylo = m - 0.75; yhi = m + 0.75; rng = 1.5; }
  const step = rng / 3.4;
  const Ya = ylo - 2.6 * step, Yb = yhi + 2.6 * step;
  const CW = 8.2, CH = 6.0;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo2 = Ya - span, yhi2 = Yb + span, cl = (y) => Math.max(ylo2, Math.min(yhi2, y));
  const num = (v) => Number((Math.round(v * 100) / 100).toFixed(2)).toString();
  const drawCurve = (shift, col, lw) => {
    const M = 360, segs = [[]];
    for (let i = 0; i <= M; i++) { const x = Xa + (Xb - Xa) * (i / M); const y = A(x); if (!isFinite(y)) { if (segs[segs.length - 1].length) segs.push([]); continue; } segs[segs.length - 1].push(`(${f(px(x))},${f(py(cl(y + shift)))})`); }
    let s = ""; segs.forEach((sg) => { if (sg.length > 1) s += `\\draw[${col},line width=${lw}] ${sg.join(" -- ")};\n`; });
    return s;
  };
  let t = "\\begin{tikzpicture}[>={Stealth[length=2.2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!14] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  // family of vertical translates (the +C family)
  [-2 * step, -step, step, 2 * step].forEach((d) => { t += drawCurve(d, FAM, "0.7pt"); });
  t += drawCurve(0, MAIN, "1.4pt");
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${xl}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${yl}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.6]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.6]{$${num(y)}$};\n`; }
  if (spec.pt) { t += `\\fill[${PTC}] (${f(px(spec.pt[0]))},${f(py(cl(spec.pt[1])))}) circle (2.2pt);\n`; t += `\\node[${PTC},scale=0.72,above right] at (${f(px(spec.pt[0]))},${f(py(cl(spec.pt[1])))}) {$(${num(spec.pt[0])},${num(spec.pt[1])})$};\n`; }
  if (spec.label) { const lx = Xa + (Xb - Xa) * 0.5; const lyv = cl(A(lx)) + 2 * step; t += `\\node[${MAIN},scale=0.72,fill=white,inner sep=1pt] at (${f(px(lx))},${f(py(lyv))}) {$${spec.label}$};\n`; }
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

\\title{\\textbf{Indefinite Integration}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Integration (ref \\texttt{i1})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Indefinite Integration} questions, each with a
fully worked solution and a TikZ graph. Because an indefinite integral is only determined up to a constant, each
diagram shows the \\emph{family of antiderivative curves} \\(y=F(x)+C\\) (grey, vertical translates of one another),
with one representative member drawn in blue. For the questions with a boundary condition, the particular curve is
highlighted and the given point is marked --- showing how the condition fixes the value of \\(C\\).
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
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${intgraph(D[q.id])}\n\\end{center}\n`;
    L += `\\small ${D[q.id].pt ? "The family of antiderivatives (grey) with the particular solution (blue) through the given point." : "The family of antiderivative curves \\(y=F(x)+C\\) --- vertical translates differing by the constant \\(C\\)."}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
