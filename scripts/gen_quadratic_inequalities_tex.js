/* Generates Quadratic_Inequalities.tex from ise4_Quadratic_Inequalities.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise4_Quadratic_Inequalities.ts");
const OUT = path.join(__dirname, "..", "Quadratic_Inequalities.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const NI = Infinity, sqrt = Math.sqrt, S5 = sqrt(5), S6 = sqrt(6);
const ln = (m, b) => (x) => m * x + b;
const c = (fn, label, lp) => ({ fn, label, lp });
const H = (y, label) => ({ y, label });
const V = (x, label) => ({ x, label });
const SS = (...regs) => regs;                          // solution set on x-axis: [lo,hi,lc,rc]
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], hlines: o.hlines, vlines: o.vlines, solset: o.solset, note: o.note, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y" });

const D = {
  "ise4-001": G([c((x) => x * x - 5 * x + 6, "y=x^2-5x+6")], [-1, 6, -2, 4], { pts: [[2, 0, "$2$", "below"], [3, 0, "$3$", "below"]], solset: SS([-NI, 2, 0, 0], [3, NI, 0, 0]) }),
  "ise4-002": G([c((x) => x * x - 7 * x + 12, "y=x^2-7x+12")], [0, 7, -2, 6], { pts: [[3, 0, "$3$", "below"], [4, 0, "$4$", "below"]], solset: SS([3, 4, 0, 0]) }),
  "ise4-003": G([c((x) => x * x + 2 * x - 8, "y=x^2+2x-8")], [-6, 4, -10, 6], { pts: [[-4, 0, "$-4$", "below"], [2, 0, "$2$", "below"]], solset: SS([-NI, -4, 0, 0], [2, NI, 0, 0]) }),
  "ise4-004": G([c((x) => x * x - x - 12, "y=x^2-x-12")], [-5, 6, -14, 6], { pts: [[-3, 0, "$-3$", "below"], [4, 0, "$4$", "below"]], solset: SS([-3, 4, 0, 0]) }),
  "ise4-005": G([c((x) => x * x - 9, "y=x^2-9")], [-5, 5, -11, 8], { pts: [[-3, 0, "$-3$", "below"], [3, 0, "$3$", "below"]], solset: SS([-NI, -3, 0, 0], [3, NI, 0, 0]) }),
  "ise4-006": G([c((x) => x * x + 6 * x + 5, "y=x^2+6x+5")], [-7, 1, -5, 8], { pts: [[-5, 0, "$-5$", "below"], [-1, 0, "$-1$", "below"]], solset: SS([-5, -1, 0, 0]) }),
  "ise4-007": G([c((x) => -x * x + 4 * x + 5, "y=-x^2+4x+5")], [-3, 7, -8, 10], { pts: [[-1, 0, "$-1$", "below"], [5, 0, "$5$", "below"]], solset: SS([-1, 5, 0, 0]) }),
  "ise4-008": G([c((x) => -x * x + 2 * x + 3, "y=-x^2+2x+3")], [-3, 5, -6, 6], { pts: [[-1, 0, "$-1$", "below"], [3, 0, "$3$", "below"]], solset: SS([-NI, -1, 0, 0], [3, NI, 0, 0]) }),
  "ise4-009": G([c((x) => -x * x + x + 6, "y=6+x-x^2")], [-4, 5, -6, 8], { pts: [[-2, 0, "$-2$", "below"], [3, 0, "$3$", "below"]], solset: SS([-2, 3, 0, 0]) }),
  "ise4-010": G([c((x) => -x * x - 4 * x + 12, "y=12-4x-x^2")], [-8, 4, -10, 18], { pts: [[-6, 0, "$-6$", "below"], [2, 0, "$2$", "below"]], solset: SS([-NI, -6, 0, 0], [2, NI, 0, 0]) }),
  "ise4-011": G([c((x) => x * x - 6 * x + 8, "y=x^2-6x+8")], [0, 6, -2, 4], { pts: [[2, 0, "$2$", "below"], [4, 0, "$4$", "below"]], solset: SS([2, 4, 1, 1]) }),
  "ise4-012": G([c((x) => x * x + x - 6, "y=x^2+x-6")], [-5, 4, -8, 6], { pts: [[-3, 0, "$-3$", "below"], [2, 0, "$2$", "below"]], solset: SS([-NI, -3, 0, 1], [2, NI, 1, 0]) }),
  "ise4-013": G([c((x) => x * x - 4, "y=x^2-4")], [-4, 4, -5, 6], { pts: [[-2, 0, "$-2$", "below"], [2, 0, "$2$", "below"]], solset: SS([-2, 2, 1, 1]) }),
  "ise4-014": G([c((x) => x * x - 8 * x + 15, "y=x^2-8x+15")], [0, 8, -3, 8], { pts: [[3, 0, "$3$", "below"], [5, 0, "$5$", "below"]], solset: SS([-NI, 3, 0, 1], [5, NI, 1, 0]) }),
  "ise4-015": G([c((x) => x * x - 6 * x + 9, "y=(x-3)^2")], [0, 6, -1, 8], { pts: [[3, 0, "$3$", "below"]], solset: SS([-NI, NI, 1, 1]), note: "$(x-3)^2\\ge0$ for all $x$" }),
  "ise4-016": G([c((x) => x * x - 4 * x + 4, "y=(x-2)^2")], [-1, 5, -1, 8], { pts: [[2, 0, "$2$", "below"]], solset: SS([-NI, 2, 1, 0], [2, NI, 0, 1]), note: "all $x$ except $x=2$" }),
  "ise4-017": G([c((x) => x * x + 10 * x + 25, "y=(x+5)^2")], [-9, -1, -1, 9], { pts: [[-5, 0, "$-5$", "below"]], note: "$(x+5)^2$ is never $<0$: \\textbf{empty}" }),
  "ise4-018": G([c((x) => x * x + 4, "y=x^2+4")], [-4, 4, 0, 12], { solset: SS([-NI, NI, 0, 0]), note: "always above the axis: all real $x$" }),
  "ise4-019": G([c((x) => x * x - 2 * x + 5, "y=x^2-2x+5")], [-3, 5, 0, 14], { note: "always above the axis: \\textbf{empty}" }),
  "ise4-020": G([c((x) => -x * x + 2 * x - 5, "y=-x^2+2x-5")], [-3, 5, -14, 1], { solset: SS([-NI, NI, 0, 0]), note: "always below the axis: all real $x$" }),
  "ise4-021": G([c((x) => x * x + 3 * x - 10, "y=x^2+3x-10")], [-7, 4, -13, 8], { pts: [[-5, 0, "$-5$", "below"], [2, 0, "$2$", "below"]], solset: SS([-NI, -5, 0, 1], [2, NI, 1, 0]), note: "rearranged: $x^2+3x-10\\ge0$" }),
  "ise4-022": G([c((x) => x * x - 4 * x - 5, "y=x^2-4x-5")], [-3, 7, -10, 8], { pts: [[-1, 0, "$-1$", "below"], [5, 0, "$5$", "below"]], solset: SS([-1, 5, 0, 0]), note: "rearranged: $x^2-4x-5<0$" }),
  "ise4-023": G([c((x) => 2 * x * x - 11 * x + 5, "y=2x^2-11x+5")], [-1, 6, -12, 10], { pts: [[0.5, 0, "$\\frac12$", "below"], [5, 0, "$5$", "below"]], solset: SS([-NI, 0.5, 0, 1], [5, NI, 1, 0]), note: "rearranged: $2x^2-11x+5\\ge0$" }),
  "ise4-024": G([c((x) => x * x - x - 6, "y=x^2-x-6")], [-4, 5, -8, 6], { pts: [[-2, 0, "$-2$", "below"], [3, 0, "$3$", "below"]], solset: SS([-2, 3, 1, 1]), note: "rearranged: $x^2-x-6\\le0$" }),
  "ise4-025": G([c((x) => 2 * x * x + 5 * x - 3, "y=2x^2+5x-3")], [-5, 3, -8, 8], { pts: [[-3, 0, "$-3$", "below"], [0.5, 0, "$\\frac12$", "below"]], solset: SS([-3, 0.5, 0, 0]) }),
  "ise4-026": G([c((x) => 3 * x * x - 7 * x + 2, "y=3x^2-7x+2")], [-1, 4, -3, 8], { pts: [[1 / 3, 0, "$\\frac13$", "below"], [2, 0, "$2$", "below"]], solset: SS([-NI, 1 / 3, 0, 1], [2, NI, 1, 0]) }),
  "ise4-027": G([c((x) => 6 * x * x - x - 1, "y=6x^2-x-1")], [-1.5, 2, -3, 6], { pts: [[-1 / 3, 0, "$-\\frac13$", "below"], [0.5, 0, "$\\frac12$", "below"]], solset: SS([-1 / 3, 0.5, 1, 1]) }),
  "ise4-028": G([c((x) => 4 * x * x - 12 * x + 9, "y=(2x-3)^2")], [-1, 4, -1, 10], { pts: [[1.5, 0, "$\\frac32$", "below"]], solset: SS([-NI, 1.5, 0, 0], [1.5, NI, 0, 0]), note: "all $x$ except $x=\\frac32$" }),
  "ise4-029": G([c((x) => x * x + 4 * x - 1, "y=x^2+4x-1")], [-6, 2, -6, 6], { pts: [[-2 - S5, 0, "$-2-\\sqrt5$", "below"], [-2 + S5, 0, "$-2+\\sqrt5$", "below"]], solset: SS([-2 - S5, -2 + S5, 0, 0]) }),
  "ise4-030": G([c((x) => x * x - 6 * x + 4, "y=x^2-6x+4")], [-1, 7, -6, 8], { pts: [[3 - S5, 0, "$3-\\sqrt5$", "below"], [3 + S5, 0, "$3+\\sqrt5$", "below"]], solset: SS([-NI, 3 - S5, 0, 0], [3 + S5, NI, 0, 0]) }),
  "ise4-031": G([c((x) => 2 * x * x - 4 * x - 1, "y=2x^2-4x-1")], [-2, 4, -5, 8], { pts: [[(2 - S6) / 2, 0, "$\\frac{2-\\sqrt6}{2}$", "below"], [(2 + S6) / 2, 0, "$\\frac{2+\\sqrt6}{2}$", "below"]], solset: SS([(2 - S6) / 2, (2 + S6) / 2, 1, 1]) }),
  "ise4-032": G([c((x) => x * x + 2 * x - 4, "y=x^2+2x-4")], [-5, 4, -6, 8], { pts: [[-1 - S5, 0, "$-1-\\sqrt5$", "below"], [-1 + S5, 0, "$-1+\\sqrt5$", "below"]], solset: SS([-NI, -1 - S5, 1, 1], [-1 + S5, NI, 1, 1]) }),
  "ise4-033": G([c((x) => x * x - 3, "y=x^2-3")], [-4, 4, -4, 8], { hlines: [H(-2, "$y=-2$"), H(6, "$y=6$")], pts: [[-3, 6, "", "above"], [-1, -2, "", "below"], [1, -2, "", "below"], [3, 6, "", "above"]], solset: SS([-3, -1, 0, 0], [1, 3, 0, 0]) }),
  "ise4-034": G([c((x) => x * x - 4, "y=x^2-4")], [-4, 4, -5, 7], { hlines: [H(5, "$y=5$")], solset: SS([-3, -2, 1, 1], [2, 3, 1, 1]) }),
  "ise4-035": G([c((x) => x * x - 2 * x, "y=x^2-2x")], [-3, 5, -2, 10], { hlines: [H(-1, "$y=-1$"), H(8, "$y=8$")], solset: SS([-2, 1, 0, 0], [1, 4, 0, 0]), note: "also $x\\neq1$" }),
  "ise4-036": G([c((x) => x * x + 2 * x, "y=x^2+2x")], [-6, 4, -2, 10], { hlines: [H(3, "$y=3$"), H(8, "$y=8$")], solset: SS([-4, -3, 1, 1], [1, 2, 1, 1]) }),
  "ise4-037": G([c((x) => x * x - 4 * x + 3, "y=x^2-4x+3")], [-1, 5, -2, 4], { pts: [[1, 0, "$1$", "below"], [3, 0, "$3$", "below"]], vlines: [V(1, "$x=1$")], solset: SS([1, 3, 0, 1]) }),
  "ise4-038": G([c((x) => x * x - 9, "y=x^2-9")], [-5, 5, -11, 8], { pts: [[-3, 0, "$-3$", "below"], [3, 0, "$3$", "below"]], vlines: [V(4, "$x=4$")], solset: SS([-NI, -3, 0, 1], [3, 4, 1, 0]) }),
  "ise4-039": G([c((x) => 2 * x * x - 5 * x - 3, "y=2x^2-5x-3")], [-2, 4, -7, 6], { pts: [[-0.5, 0, "$-\\frac12$", "below"], [3, 0, "$3$", "below"]], vlines: [V(0, "$x=0$")], solset: SS([0, 3, 1, 0]) }),
  "ise4-040": G([c((x) => x * x + x - 6, "y=x^2+x-6")], [-5, 4, -8, 6], { pts: [[-3, 0, "$-3$", "below"], [2, 0, "$2$", "below"]], vlines: [V(3, "$x=3$")], solset: SS([-NI, -3, 0, 0], [2, 3, 0, 1]) }),
  "ise4-041": G([c((x) => x * x + 9, "k=0", [-0.6, 11]), c((x) => x * x + 6 * x + 9, "k=6", [-4.7, 6]), c((x) => x * x + 8 * x + 9, "k=8", [-5.6, 12])], [-8, 2, -2, 16], { pts: [[-3, 0, "tangent", "below right"]], note: "$\\Delta<0\\Rightarrow -6<k<6$" }),
  "ise4-042": G([c((x) => 2 * x * x + 8, "k=0", [-0.6, 10]), c((x) => 2 * x * x + 8 * x + 8, "k=8", [-3.4, 6]), c((x) => 2 * x * x + 10 * x + 8, "k=10", [-4.2, 14])], [-5, 2, -2, 20], { pts: [[-2, 0, "tangent", "below right"]], note: "no real roots $\\Rightarrow -8<k<8$" }),
  "ise4-043": G([c((x) => x * x + 4, "p=2", [-0.6, 6]), c((x) => x * x + 4 * x + 4, "p=6", [-3.4, 5]), c((x) => x * x + 6 * x + 4, "p=8", [-4.5, 11])], [-6, 2, -2, 16], { pts: [[-2, 0, "tangent", "below right"]], note: "two distinct roots $\\Rightarrow p<-2$ or $p>6$" }),
  "ise4-044": G([c((x) => (x - 1) * (x - 1) - 9, "y=(x-1)^2-9")], [-4, 6, -10, 8], { pts: [[-2, 0, "$-2$", "below"], [4, 0, "$4$", "below"]], solset: SS([-2, 4, 1, 1]) }),
  "ise4-045": G([c((x) => (2 * x + 3) * (2 * x + 3) - 25, "y=(2x+3)^2-25")], [-7, 4, -26, 28], { pts: [[-4, 0, "$-4$", "below"], [1, 0, "$1$", "below"]], solset: SS([-NI, -4, 0, 0], [1, NI, 0, 0]) }),
  "ise4-046": G([c((x) => x ** 4 - 5 * x * x + 4, "y=x^4-5x^2+4")], [-3, 3, -3, 6], { pts: [[-2, 0, "$-2$", "below"], [-1, 0, "$-1$", "below"], [1, 0, "$1$", "below"], [2, 0, "$2$", "below"]], solset: SS([-2, -1, 1, 1], [1, 2, 1, 1]) }),
  "ise4-047": G([c((x) => 20 * x - 5 * x * x, "h=20t-5t^2")], [0, 4.5, 0, 25], { hlines: [H(15, "$h=15$")], pts: [[1, 15, "", "above left"], [3, 15, "", "above right"]], solset: SS([1, 3, 0, 0]), xlabel: "t", ylabel: "h" }),
  "ise4-048": G([c((x) => -x * x + 80 * x - 700, "P=-n^2+80n-700")], [0, 80, 0, 1000], { hlines: [H(900, "$P=900$")], pts: [[40, 900, "$n=40$", "above"]], solset: SS([40, 40, 1, 1]), xlabel: "n", ylabel: "P" }),
  "ise4-049": G([c(ln(1, 1), "y=x+1"), c((x) => x * x - 5, "y=x^2-5")], [-4, 5, -7, 8], { pts: [[-2, -1, "$(-2,-1)$", "below right"], [3, 4, "$(3,4)$", "above left"]], solset: SS([-2, 3, 0, 0]), note: "line above curve" }),
  "ise4-050": G([c((x) => x * x - 6 * x + 11, "C:y=x^2-6x+11"), c(ln(2, -4), "\\ell:y=2x-4")], [0, 8, -1, 16], { pts: [[3, 2, "$(3,2)$", "below right"], [5, 6, "$(5,6)$", "above left"]], solset: SS([3, 5, 1, 1]), note: "curve on or below line" }),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/✓/g, "\\checkmark ").replace(/−/g, "-").replace(/[’‘]/g, "'").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/(?<!\\)%/g, "\\%").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—’‘→×÷✓²³−⟹]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/[’‘]/g, "'").replace(/[–]/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/÷/g, "$\\div$").replace(/−/g, "-").replace(/⟹/g, "$\\Rightarrow$").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/✓/g, "$\\checkmark$");
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
  y = y.replace(/\\mathbb\{[^{}]*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\(approx|times|div|to|Rightarrow|leq|geq|le|ge|cdot|pm|mp|infty|ne|neq|in|cup|cap|propto|ln|log|Delta|square|perp)\b/g, (m) => `@I${isl.push(m) - 1}@`);
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
const PAL = ["blue!70!black", "red!70!black", "violet!65!black"];
const SOLC = "orange!88!black", PTC = "red!75!black";

function graph(spec) {
  const CW = 8.4;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const CH = 5.8;
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
  (spec.hlines || []).forEach((h) => { if (h.y >= Ya && h.y <= Yb) t += `\\draw[gray!55,dashed] (${f(px(Xa))},${f(py(h.y))}) -- (${f(px(Xb))},${f(py(h.y))});\n`; });
  (spec.vlines || []).forEach((vl) => { if (Math.abs(vl.x) > 1e-9 && vl.x >= Xa && vl.x <= Xb) t += `\\draw[gray!55,dashed] (${f(px(vl.x))},${f(py(Ya))}) -- (${f(px(vl.x))},${f(py(Yb))});\n`; });
  spec.cs.forEach((cv, ci) => {
    const col = PAL[ci % PAL.length], N = 360, segs = [[]]; let best = null;
    for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = cv.fn(x); if (!isFinite(y)) { if (segs[segs.length - 1].length) segs.push([]); continue; } segs[segs.length - 1].push(`(${f(px(x))},${f(py(cl(y)))})`); if (y >= Ya && y <= Yb && (!best || y > best[1])) best = [x, y]; }
    segs.forEach((sg) => { if (sg.length > 1) t += `\\draw[${col},thick] ${sg.join(" -- ")};\n`; });
    cv._col = col; cv._lv = best;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.6]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.6]{$${num(y)}$};\n`; }
  (spec.hlines || []).forEach((h) => { if (h.label && h.y >= Ya && h.y <= Yb) t += `\\node[right,scale=0.66,gray!55!black,fill=white,inner sep=1pt] at (${f(px(Xa) + 0.08)},${f(py(h.y) + 0.2)}) {${h.label}};\n`; });
  (spec.vlines || []).forEach((vl) => { if (vl.label && vl.x >= Xa && vl.x <= Xb) t += `\\node[scale=0.66,gray!55!black,fill=white,inner sep=1pt,rotate=90,anchor=south] at (${f(px(vl.x) + 0.16)},${f(py(Ya) + 0.4)}) {${vl.label}};\n`; });
  // solution set on the x-axis (orange highlight)
  const yy = py(0 >= Ya && 0 <= Yb ? 0 : Ya);
  const circ = (x, closed) => closed ? `\\fill[${SOLC}] (${f(px(x))},${f(yy)}) circle (2.6pt);\n` : `\\draw[${SOLC},line width=1pt,fill=white] (${f(px(x))},${f(yy)}) circle (2.6pt);\n`;
  (spec.solset || []).forEach((rg) => {
    const [lo, hi, lc, rc] = rg;
    if (lo === hi) { t += circ(lo, lc); return; }
    const xL = isFinite(lo) ? px(lo) : px(Xa), xR = isFinite(hi) ? px(hi) : px(Xb);
    if (!isFinite(lo) && !isFinite(hi)) t += `\\draw[${SOLC},line width=2pt,<->] (${f(px(Xa) + 0.1)},${f(yy)}) -- (${f(px(Xb) - 0.1)},${f(yy)});\n`;
    else if (!isFinite(lo)) t += `\\draw[${SOLC},line width=2pt,->] (${f(xR)},${f(yy)}) -- (${f(px(Xa) + 0.1)},${f(yy)});\n`;
    else if (!isFinite(hi)) t += `\\draw[${SOLC},line width=2pt,->] (${f(xL)},${f(yy)}) -- (${f(px(Xb) - 0.1)},${f(yy)});\n`;
    else t += `\\draw[${SOLC},line width=2pt] (${f(xL)},${f(yy)}) -- (${f(xR)},${f(yy)});\n`;
    if (isFinite(lo)) t += circ(lo, lc);
    if (isFinite(hi)) t += circ(hi, rc);
  });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.66] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
  spec.cs.forEach((cv) => { const lp = cv.lp ? [px(cv.lp[0]), py(cv.lp[1])] : (cv._lv ? [px(cv._lv[0]), py(cv._lv[1])] : null); if (cv.label && lp) { const right = lp[0] > CW * 0.55; const anc = cv.lp ? "center" : (right ? "east" : "west"); const dx = cv.lp ? 0 : (right ? -0.08 : 0.08); t += `\\node[${cv._col},scale=0.66,anchor=${anc},inner sep=1pt] at (${f(lp[0] + dx)},${f(lp[1] - (cv.lp ? 0 : 0.18))}) {$${cv.label}$};\n`; } });
  if (spec.note) t += `\\node[orange!75!black,scale=0.78,anchor=south west] at (${f(px(Xa) + 0.1)},${f(py(Yb) - 0.5)}) {${spec.note}};\n`;
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

\\title{\\textbf{Quadratic Inequalities}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Quadratic Inequalities (ref \\texttt{ise4})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Quadratic Inequalities} questions, each with a
fully worked solution and a TikZ sketch of the parabola. The roots are marked on the \\(x\\)-axis and the
solution set is highlighted in orange (open circles for strict \\(<\\)/\\(>\\), filled for \\(\\le\\)/\\(\\ge\\)).
Threshold lines are drawn for the double-inequality and modelling questions, and a family of parabolas
illustrates the discriminant (\\(k\\)/\\(p\\)) questions.
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
    L += `\\small The parabola sketched, with the roots marked and the solution set highlighted on the \\(x\\)-axis.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
