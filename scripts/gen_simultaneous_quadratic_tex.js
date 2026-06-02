/* Generates Simultaneous_Equations_Quadratic.tex from ise5_Simultaneous_Equations_Quadratic.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise5_Simultaneous_Equations_Quadratic.ts");
const OUT = path.join(__dirname, "..", "Simultaneous_Equations_Quadratic.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const sqrt = Math.sqrt, S2 = sqrt(2), S3 = sqrt(3), S5 = sqrt(5), S6 = sqrt(6), S7 = sqrt(7), S13 = sqrt(13), S21 = sqrt(21), S31 = sqrt(31), S37 = sqrt(37);
const ln = (m, b) => (x) => m * x + b;
const lc = (a, b, k) => (x) => (k - a * x) / b;
const hyp = (k) => (x) => k / x;
const c = (fn, label, lp) => ({ fn, label, lp });
const cir = (cx, cy, r, label, lp) => ({ cx, cy, r, label, lp });
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], circles: o.circles, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y", equal: o.equal });

const D = {
  "ise5-001": G([c(ln(1, 1), "y=x+1"), c((x) => x * x - 1, "y=x^2-1")], [-3, 4, -3, 9], { pts: [[2, 3, "$(2,3)$", "above left"], [-1, 0, "$(-1,0)$", "below right"]] }),
  "ise5-002": G([c(ln(2, 3), "y=2x+3"), c((x) => x * x, "y=x^2")], [-3, 5, -2, 12], { pts: [[3, 9, "$(3,9)$", "above left"], [-1, 1, "$(-1,1)$", "above right"]] }),
  "ise5-003": G([c(ln(1, -3), "y=x-3"), c((x) => x * x - 5 * x + 3, "y=x^2-5x+3")], [-1, 6, -4, 8], { pts: [[3 + S3, S3, "$(3{+}\\sqrt3,\\sqrt3)$", "above left"], [3 - S3, -S3, "$(3{-}\\sqrt3,-\\sqrt3)$", "below right"]] }),
  "ise5-004": G([c(ln(3, -2), "y=3x-2"), c((x) => x * x, "y=x^2")], [-1, 4, -3, 10], { pts: [[1, 1, "$(1,1)$", "above left"], [2, 4, "$(2,4)$", "above left"]] }),
  "ise5-005": G([c(ln(4, 0), "y=4x"), c((x) => x * x + 3, "y=x^2+3")], [-1, 5, -1, 16], { pts: [[1, 4, "$(1,4)$", "above left"], [3, 12, "$(3,12)$", "above left"]] }),
  "ise5-006": G([c(ln(2, -1), "y=2x-1"), c((x) => x * x - 4, "y=x^2-4")], [-3, 5, -6, 9], { pts: [[3, 5, "$(3,5)$", "above left"], [-1, -3, "$(-1,-3)$", "below right"]] }),
  "ise5-007": G([c(ln(-1, 5), "x+y=5"), c((x) => x * x - 1, "y=x^2-1")], [-5, 4, -3, 10], { pts: [[-3, 8, "$(-3,8)$", "above right"], [2, 3, "$(2,3)$", "above left"]] }),
  "ise5-008": G([c(ln(-2, 7), "2x+y=7"), c((x) => x * x + 2, "y=x^2+2")], [-5, 4, -1, 16], { pts: [[-1 + S6, 9 - 2 * S6, "", "above left"], [-1 - S6, 9 + 2 * S6, "", "above right"]] }),
  "ise5-009": G([c(ln(-1, 6), "x+y=6"), c((x) => x * x, "y=x^2")], [-5, 4, -2, 12], { pts: [[-3, 9, "$(-3,9)$", "above right"], [2, 4, "$(2,4)$", "above left"]] }),
  "ise5-010": G([c(ln(-3, 1), "3x+y=1"), c((x) => 2 * x * x - x - 3, "y=2x^2-x-3")], [-4, 3, -6, 10], { pts: [[-2, 7, "$(-2,7)$", "above right"], [1, -2, "$(1,-2)$", "below right"]] }),
  "ise5-011": G([c(ln(1, 1), "y=x+1")], [-6, 6, -6, 6], { circles: [cir(0, 0, 5, "x^2+y^2=25", [3.7, 3.7])], pts: [[-4, -3, "$(-4,-3)$", "below right"], [3, 4, "$(3,4)$", "above left"]], equal: 1 }),
  "ise5-012": G([c(ln(2, 0), "y=2x")], [-6, 6, -6, 6], { circles: [cir(0, 0, sqrt(20), "x^2+y^2=20", [3.5, 3.5])], pts: [[2, 4, "$(2,4)$", "above left"], [-2, -4, "$(-2,-4)$", "below right"]], equal: 1 }),
  "ise5-013": G([c(ln(-1, 7), "x+y=7")], [-6, 8, -6, 8], { circles: [cir(0, 0, 5, "x^2+y^2=25", [3.7, 3.7])], pts: [[3, 4, "$(3,4)$", "above right"], [4, 3, "$(4,3)$", "above right"]], equal: 1 }),
  "ise5-014": G([c(ln(1, -1), "y=x-1")], [-5, 5, -5, 5], { circles: [cir(0, 0, sqrt(13), "x^2+y^2=13", [2.6, 2.6])], pts: [[3, 2, "$(3,2)$", "above left"], [-2, -3, "$(-2,-3)$", "below right"]], equal: 1 }),
  "ise5-015": G([c(ln(1, 2), "y=x+2"), c((x) => (x - 1) * (x + 3), "y=(x-1)(x+3)")], [-5, 4, -4, 8], { pts: [[(-1 + S21) / 2, (3 + S21) / 2, "", "above left"], [(-1 - S21) / 2, (3 - S21) / 2, "", "below right"]] }),
  "ise5-016": G([c(ln(2, 1), "y=2x+1"), c((x) => (x + 1) * (x - 2), "y=(x+1)(x-2)")], [-3, 5, -4, 12], { pts: [[(3 + S21) / 2, 4 + S21, "", "above left"], [(3 - S21) / 2, 4 - S21, "", "below right"]] }),
  "ise5-017": G([c(ln(-1, 5), "y=5-x"), c((x) => (x - 1) * (x - 2), "y=(x-1)(x-2)")], [-3, 5, -2, 10], { pts: [[3, 2, "$(3,2)$", "above right"], [-1, 6, "$(-1,6)$", "above right"]] }),
  "ise5-018": G([c(ln(-1, 4), "y=4-x"), c((x) => (x + 2) * (x - 1), "y=(x+2)(x-1)")], [-5, 4, -4, 10], { pts: [[-1 + S7, 5 - S7, "", "above right"], [-1 - S7, 5 + S7, "", "above right"]] }),
  "ise5-019": G([c(ln(1, 4), "y=x+4"), c((x) => x * x + 2 * x - 1, "y=x^2+2x-1")], [-5, 4, -4, 10], { pts: [[(-1 + S21) / 2, (7 + S21) / 2, "", "above left"], [(-1 - S21) / 2, (7 - S21) / 2, "", "above right"]] }),
  "ise5-020": G([c(ln(1, -2), "y=x-2"), c((x) => x * x - 5, "y=x^2-5")], [-4, 4, -6, 8], { pts: [[(1 + S13) / 2, (-3 + S13) / 2, "", "above left"], [(1 - S13) / 2, (-3 - S13) / 2, "", "below right"]] }),
  "ise5-021": G([c(ln(2, 0), "y=2x"), c((x) => x * x - 3, "y=x^2-3")], [-3, 5, -4, 10], { pts: [[3, 6, "$(3,6)$", "above left"], [-1, -2, "$(-1,-2)$", "below right"]] }),
  "ise5-022": G([c(ln(-2, 3), "y=3-2x"), c((x) => x * x + x - 4, "y=x^2+x-4")], [-6, 4, -8, 12], { pts: [[(-3 + S37) / 2, 6 - S37, "", "above left"], [(-3 - S37) / 2, 6 + S37, "", "above right"]] }),
  "ise5-023": G([c(ln(2, -1), "y=2x-1"), c((x) => x * x, "y=x^2")], [-2, 4, -2, 8], { pts: [[1, 1, "tangent $(1,1)$", "above left"]] }),
  "ise5-024": G([c(ln(4, -4), "y=4x-4"), c((x) => x * x, "y=x^2")], [-1, 5, -2, 10], { pts: [[2, 4, "tangent $(2,4)$", "above left"]] }),
  "ise5-025": G([c(ln(-2, 1), "y=-2x+1"), c((x) => -x * x, "y=-x^2")], [-3, 3, -9, 3], { pts: [[1, -1, "tangent $(1,-1)$", "below right"]] }),
  "ise5-026": G([c(ln(6, -9), "y=6x-9"), c((x) => x * x, "y=x^2")], [-1, 6, -2, 16], { pts: [[3, 9, "tangent $(3,9)$", "above left"]] }),
  "ise5-027": G([c(ln(1, -3), "y=x-3"), c((x) => x * x + 1, "y=x^2+1")], [-3, 5, -4, 12], { pts: [] }),
  "ise5-028": G([c(ln(2, 5), "y=2x+5")], [-5, 3, -5, 7], { circles: [cir(0, 0, 1, "x^2+y^2=1", [1.3, 1.3])], pts: [], equal: 1 }),
  "ise5-029": G([c(ln(-1, -5), "y=-x-5"), c((x) => x * x - 3 * x + 2, "y=x^2-3x+2")], [-4, 6, -8, 12], { pts: [] }),
  "ise5-030": G([c(ln(3, 4), "y=3x+4"), c((x) => x * x + x + 6, "y=x^2+x+6")], [-4, 4, 0, 16], { pts: [] }),
  "ise5-031": G([c(ln(-1, 5), "x+y=5"), c(hyp(6), "xy=6")], [0, 7, 0, 7], { pts: [[2, 3, "$(2,3)$", "above right"], [3, 2, "$(3,2)$", "above right"]] }),
  "ise5-032": G([c(ln(-2, 7), "2x+y=7"), c(hyp(6), "xy=6")], [0, 6, 0, 8], { pts: [[1.5, 4, "$(\\frac32,4)$", "above right"], [2, 3, "$(2,3)$", "above right"]] }),
  "ise5-033": G([c(ln(1, -1), "x-y=1"), c(hyp(12), "xy=12")], [-8, 8, -8, 8], { pts: [[-3, -4, "$(-3,-4)$", "below right"], [4, 3, "$(4,3)$", "above left"]], equal: 1 }),
  "ise5-034": G([c(lc(3, 2, 12), "3x+2y=12"), c(hyp(6), "xy=6")], [0, 8, 0, 8], { pts: [[2, 3, "tangent $(2,3)$", "above right"]] }),
  "ise5-035": G([c(ln(2, -1), "y=2x-1")], [-6, 6, -6, 6], { circles: [cir(0, 0, 5, "x^2+y^2=25", [3.7, 3.7])], pts: [[(2 + 2 * S31) / 5, (-1 + 4 * S31) / 5, "", "above left"], [(2 - 2 * S31) / 5, (-1 - 4 * S31) / 5, "", "below right"]], equal: 1 }),
  "ise5-036": G([c(lc(1, 2, 5), "x+2y=5")], [-5, 5, -5, 5], { circles: [cir(0, 0, sqrt(10), "x^2+y^2=10", [2.5, 2.5])], pts: [[3, 1, "$(3,1)$", "above right"], [-1, 3, "$(-1,3)$", "above right"]], equal: 1 }),
  "ise5-037": G([c(ln(1, 0), "y=x")], [-2, 6, -2, 6], { circles: [cir(2, 1, sqrt(5), "(x-2)^2+(y-1)^2=5", [4.5, 0.3])], pts: [[0, 0, "$(0,0)$", "above left"], [3, 3, "$(3,3)$", "above left"]], equal: 1 }),
  "ise5-038": G([c(ln(-1, 4), "y=-x+4")], [-4, 5, -4, 5], { circles: [cir(0, 0, sqrt(8), "x^2+y^2=8", [-2.2, 2.2])], pts: [[2, 2, "tangent $(2,2)$", "above right"]], equal: 1 }),
  "ise5-039": G([c((x) => x * x, "y=x^2"), c(ln(2, -1), "y=2x-1", [3.2, 8])], [-2, 4, -2, 8], { pts: [[1, 1, "tangent $(1,1)$", "above left"]] }),
  "ise5-040": G([c(ln(1, 4), "y=x+4", [-3.6, 0.6]), c(ln(1, -4), "y=x-4", [3.6, -0.6])], [-5, 5, -5, 5], { circles: [cir(0, 0, sqrt(8), "x^2+y^2=8", [2, 2])], pts: [[-2, 2, "$(-2,2)$", "above right"], [2, -2, "$(2,-2)$", "below left"]], equal: 1 }),
  "ise5-041": G([c((x) => x * x + 2, "y=x^2+2"), c(ln(2, 1), "y=2x+1", [2.3, 8]), c(ln(-2, 1), "y=-2x+1", [-2.3, 8])], [-4, 4, -1, 10], { pts: [[1, 3, "$(1,3)$", "above left"], [-1, 3, "$(-1,3)$", "above right"]] }),
  "ise5-042": G([c((x) => x * x + 1, "y=x^2+1"), c(ln(2, 0), "k=0:\\,y=2x", [3.4, 9]), c(ln(2, 2), "k=2:\\,y=2x+2", [2.4, 9])], [-3, 5, -1, 10], { pts: [[1, 2, "tangent $(1,2)$", "below right"]] }),
  "ise5-043": G([c((x) => x * x, "y=x^2"), c((x) => 4 - x * x, "y=4-x^2")], [-3, 3, -1, 6], { pts: [[S2, 2, "$(\\sqrt2,2)$", "above left"], [-S2, 2, "$(-\\sqrt2,2)$", "above right"]] }),
  "ise5-044": G([c((x) => x * x - 2 * x, "y=x^2-2x"), c((x) => -x * x + 4 * x - 2, "y=-x^2+4x-2")], [-2, 5, -3, 6], { pts: [[(3 + S5) / 2, (1 + S5) / 2, "", "above left"], [(3 - S5) / 2, (1 - S5) / 2, "", "below right"]] }),
  "ise5-045": G([c((x) => x * x - 3, "y=x^2-3")], [-4, 4, -4, 5], { circles: [cir(0, 0, 3, "x^2+y^2=9", [2.4, 2.4])], pts: [[0, -3, "$(0,-3)$", "below right"], [S5, 2, "$(\\sqrt5,2)$", "above left"], [-S5, 2, "$(-\\sqrt5,2)$", "above right"]], equal: 1 }),
  "ise5-046": G([c(ln(-1, 11), "x+y=11"), c(hyp(28), "xy=28")], [0, 12, 0, 12], { pts: [[4, 7, "$(4,7)$", "above right"], [7, 4, "$(7,4)$", "above right"]] }),
  "ise5-047": G([c(ln(-1, 12), "x+y=12")], [-1, 13, -1, 13], { circles: [cir(0, 0, sqrt(80), "x^2+y^2=80", [6, 6])], pts: [[4, 8, "$(4,8)$", "above right"], [8, 4, "$(8,4)$", "above right"]], equal: 1 }),
  "ise5-048": G([c(ln(-1, 17), "a+b=17")], [0, 18, 0, 18], { circles: [cir(0, 0, 13, "a^2+b^2=169", [9, 9])], pts: [[5, 12, "$(5,12)$", "above right"], [12, 5, "$(12,5)$", "above right"]], equal: 1, xlabel: "a", ylabel: "b" }),
  "ise5-049": G([c(ln(1, 2), "y=x+2"), c((x) => x * x - 4 * x + 8, "y=x^2-4x+8")], [0, 6, 0, 12], { pts: [[2, 4, "$A(2,4)$", "above left"], [3, 5, "$B(3,5)$", "above left"]] }),
  "ise5-050": G([c(ln(2, 1), "y=2x+1")], [-5, 5, -5, 5], { circles: [cir(0, 0, sqrt(10), "x^2+y^2=10", [2.5, 2.5])], pts: [[1, 3, "$P(1,3)$", "above left"], [-1.8, -2.6, "$Q$", "below right"], [-0.4, 0.2, "$M$", "above left"]], equal: 1 }),
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
  let y = x.replace(/@QQ@|@QD@|@NL@|@TS@/g, " ").replace(/\\[,;:!>\s]/g, " ").replace(/\\left\s*/g, "").replace(/\\right\s*/g, "");
  y = y.replace(/\\(textbf|textit|textrm|emph)\{[^{}]*\}/g, (m) => `@T${txt.push(m) - 1}@`);
  y = y.replace(/\\(?:text|mathrm)\{([^}]*)\}/g, "$1").replace(/\\pounds\s*/g, "£");
  y = y.replace(/\\[tdc]?frac\{(?:[^{}]|\{[^{}]*\})*\}\{(?:[^{}]|\{[^{}]*\})*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\sqrt\{(?:[^{}]|\{[^{}]*\})*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\(approx|times|div|to|Rightarrow|leq|geq|le|ge|cdot|pm|mp|infty|ne|propto|ln|log|Delta|square|perp|pi|theta|alpha|beta)\b/g, (m) => `@I${isl.push(m) - 1}@`);
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
  if (/[A-Za-z]{4,}/.test(bareNoConn)) return restore(textMath(s));   // genuine prose
  // math expression, possibly joined by "and"/"or" connectors
  return s0.split(/\b(and|or)\b/i).map((p) => /^(and|or)$/i.test(p.trim()) ? " " + p.trim() + " " : (p.trim() ? "\\(\\displaystyle " + ctl(p) + "\\)" : "")).join("");
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const raw = r / 8; const p = Math.pow(10, Math.floor(Math.log10(raw))); for (const k of [1, 2, 2.5, 5]) if (p * k >= raw) return p * k; return p * 10; }
const PAL = ["blue!70!black", "red!70!black", "violet!65!black", "orange!80!black"];
const CIRC = "green!50!black", PTC = "red!75!black";

function graph(spec) {
  const CW = 8.4;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const CH = spec.equal ? CW * (Yb - Ya) / (Xb - Xa) : 5.8;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span, cl = (y) => Math.max(ylo, Math.min(yhi, y));
  const num = (v) => Number((Math.round(v * 1000) / 1000).toFixed(3)).toString();
  let t = "\\begin{tikzpicture}[>={Stealth[length=2.2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  (spec.circles || []).forEach((cc) => { t += `\\draw[${CIRC},thick] (${f(px(cc.cx))},${f(py(cc.cy))}) circle (${f(cc.r * sx)});\n`; });
  spec.cs.forEach((cv, ci) => {
    const col = PAL[ci % PAL.length], N = 360, segs = [[]]; let best = null;
    for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = cv.fn(x); if (!isFinite(y)) { if (segs[segs.length - 1].length) segs.push([]); continue; } segs[segs.length - 1].push(`(${f(px(x))},${f(py(cl(y)))})`); if (y >= Ya && y <= Yb && (!best || y > best[1])) best = [x, y]; }
    segs.forEach((sg) => { if (sg.length > 1) t += `\\draw[${col},thick] ${sg.join(" -- ")};\n`; });
    cv._col = col; cv._lv = best;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.62]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.62]{$${num(y)}$};\n`; }
  (spec.circles || []).forEach((cc) => { if (cc.label && cc.lp) t += `\\node[${CIRC},scale=0.72] at (${f(px(cc.lp[0]))},${f(py(cc.lp[1]))}) {$${cc.label}$};\n`; });
  spec.cs.forEach((cv) => { const lp = cv.lp ? [px(cv.lp[0]), py(cv.lp[1])] : (cv._lv ? [px(cv._lv[0]), py(cv._lv[1])] : null); if (cv.label && lp) { const right = lp[0] > CW * 0.55; const anc = cv.lp ? "center" : (right ? "east" : "west"); const dx = cv.lp ? 0 : (right ? -0.08 : 0.08); t += `\\node[${cv._col},scale=0.7,anchor=${anc},inner sep=1pt] at (${f(lp[0] + dx)},${f(lp[1] - (cv.lp ? 0 : 0.18))}) {$${cv.label}$};\n`; } });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.7] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Simultaneous Equations (Quadratic)}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Simultaneous Equations --- Quadratic (ref \\texttt{ise5})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Simultaneous Equations} questions, each with a
fully worked solution and a TikZ graph showing the two equations and their point(s) of intersection --- the
geometric meaning of the solution. Lines, parabolas, circles (drawn to scale) and hyperbolas are plotted, with
tangency, parallel and coincident cases shown where relevant.
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
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${graph(D[q.id])}\n\\end{center}\n`;
    L += `\\small The two equations plotted, with the solution shown at the point(s) of intersection.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
