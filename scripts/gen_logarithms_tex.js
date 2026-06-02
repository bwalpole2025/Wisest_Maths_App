/* Generates Logarithms.tex from el2_logarithms.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Exponentials_and_Logarithms/el2_logarithms.ts");
const OUT = path.join(__dirname, "..", "Logarithms.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const E = Math.E, exp = Math.exp, pow = Math.pow, log = Math.log;
const lg = (b) => (x) => x > 0 ? log(x) / log(b) : NaN;     // log_b x
const LN = (x) => x > 0 ? log(x) : NaN;                       // ln x
const ex = (k, A = 1) => (x) => A * exp(k * x);               // A e^{kx}
const po = (b) => (x) => pow(b, x);                           // b^x
const c = (fn, label, lp) => ({ fn, label, lp });             // curve (+ optional label point)
const H = (y, label) => ({ y, label });                       // horizontal line
const V = (x, label) => ({ x, label });                       // vertical line / asymptote
// G(cs, win, {pts, hlines, vlines, tangents, xlabel, ylabel, equal})
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], hlines: o.hlines, vlines: o.vlines, tangents: o.tangents, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y", equal: o.equal });

const D = {
  "el2-001": G([c(lg(3), "y=\\log_3 x")], [0, 90, -1, 5], { pts: [[81, 4, "$(81,4)$", "above left"], [1, 0, "$(1,0)$", "below right"]], hlines: [H(4, "")] }),
  "el2-002": G([c(lg(5), "y=\\log_5 x")], [0, 140, -1, 4], { pts: [[125, 3, "$(125,3)$", "above left"], [1, 0, "$(1,0)$", "below right"]], hlines: [H(3, "")] }),
  "el2-003": G([c(lg(7), "y=\\log_7 x")], [0, 55, -3, 3], { pts: [[49, 2, "$\\log_7 49=2$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-004": G([c(po(4), "y=4^x")], [0, 3.5, 0, 80], { pts: [[3, 64, "$4^3=m=64$", "above left"]] }),
  "el2-005": G([c(lg(2), "y=\\log_a x")], [0, 16, -2, 5], { pts: [[1, 0, "$(1,0)$", "below right"]] }),
  "el2-006": G([c(lg(2), "y=\\log_2 x")], [0, 36, -1, 6], { pts: [[32, 5, "$\\log_2 32=5$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-007": G([c(lg(4), "y=\\log_4 x")], [0, 70, -4, 4], { pts: [[64, 3, "$\\log_4 64=3$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-008": G([c(lg(9), "y=\\log_9 x")], [0, 12, -1, 2], { pts: [[3, 0.5, "$\\log_9 3=\\frac12$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-009": G([c(lg(10), "\\log x"), c(LN, "\\ln x")], [0, 105, -1, 5], { pts: [[50, 1.699, "$\\log 50$", "above left"], [100, 4.605, "$\\ln 100$", "left"], [5, 1.609, "$\\ln 5$", "above left"]] }),
  "el2-010": G([c(lg(4), "y=\\log_4 x")], [0, 70, -1, 4], { pts: [[64, 3, "$(64,3)\\Rightarrow x{=}4$", "above left"]], hlines: [H(3, "")] }),
  "el2-011": G([c(lg(3), "y=\\log_3 x")], [0, 90, -2, 5], { pts: [[81, 4, "$(81,4)$", "above left"], [1, 0, "$(1,0)$", "below right"]], hlines: [H(4, "")] }),
  "el2-012": G([c(lg(5), "y=\\log_5 x")], [0, 8, -1, 2], { pts: [[1, 0, "$\\log_5 1=0$", "above left"], [5, 1, "$\\log_5 5=1$", "above left"]] }),
  "el2-013": G([c(LN, "y=\\ln x")], [0, 160, -1, 6], { pts: [[1, 0, "$\\ln 1=0$", "above left"], [E, 1, "$\\ln e=1$", "above left"], [exp(5), 5, "$\\ln e^5=5$", "left"]] }),
  "el2-014": G([c(ex(1), "y=e^x")], [-1, 2.5, -1, 12], { pts: [[log(7), 7, "$(\\ln 7,7)$", "above left"]], hlines: [H(7, "$y=7$")] }),
  "el2-015": G([c(ex(1), "y=e^x")], [-2, 3, -1, 18], { pts: [[log(15), 15, "$x=\\ln 15$", "above left"], [log(8), 8, "$x=\\ln 8$", "left"], [log(0.3), 0.3, "$x=\\ln 0.3$", "above left"]] }),
  "el2-016": G([c(ex(1), "y=e^x")], [-4, 3, -1, 12], { pts: [[log(9), 9, "$x=\\ln 9$", "above left"], [log(0.05), 0.05, "$x=\\ln 0.05$", "above right"]] }),
  "el2-017": G([c(LN, "y=\\ln x")], [0, 70, -1, 5], { pts: [[exp(4), 4, "$(e^4,4)$", "above left"]], hlines: [H(4, "$y=4$")] }),
  "el2-018": G([c(LN, "y=\\ln x")], [0, 160, -1, 6], { pts: [[exp(5), 5, "$x=e^5$", "left"], [exp(0.8), 0.8, "$x=e^{0.8}$", "above left"]] }),
  "el2-019": G([c(LN, "y=\\ln x")], [0, 160, -3, 6], { pts: [[exp(-2), -2, "$\\ln x=-2$", "above right"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-020": G([c((x) => LN(x - 1), "y=\\ln(x-1)")], [0, 30, -2, 5], { pts: [[exp(3) + 1, 3, "$(e^3{+}1,3)$", "above left"]], hlines: [H(3, "$y=3$")], vlines: [V(1, "asymptote $x=1$")] }),
  "el2-021": G([c(ex(1), "e^x", [1.3, 5.2]), c(LN, "\\ln x", [6, 1.9]), c((x) => x, "y=x", [4.4, 4.0])], [-2, 6, -2, 6], { pts: [[0, 1, "$(0,1)$", "above left"], [1, 0, "$(1,0)$", "below right"]], equal: true }),
  "el2-022": G([c(LN, "y=\\ln x")], [-0.5, 8, -3, 3], { pts: [[1, 0, "$(1,0)$", "above right"]], vlines: [V(0, "asymptote $x=0$")] }),
  "el2-023": G([c(lg(3), "y=\\log_3 x")], [0, 760, -1, 7], { pts: [[9, 2, "$(9,2)$", "above left"], [729, 6, "$(729,6)$", "left"]] }),
  "el2-024": G([c(lg(2), "y=\\log_2 x")], [0, 4300, -1, 14], { pts: [[16, 4, "$(16,4)$", "above left"], [4096, 12, "$(4096,12)$", "left"]] }),
  "el2-025": G([c(LN, "y=\\ln x")], [0, 160, -1, 6], { pts: [[exp(3), 3, "$(e^3,3)$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-026": G([c(LN, "y=\\ln x")], [0, 70, -1, 5], { pts: [[exp(4), 4, "$(e^4,4)$", "above left"], [exp(2), 2, "$(e^2,2)$", "above left"]] }),
  "el2-027": G([c(ex(1), "y=e^x")], [-1, 2.2, -1, 10], { pts: [[log(5), 5, "$(\\ln 5,5)$", "above left"]], hlines: [H(5, "$y=5$")] }),
  "el2-028": G([c(LN, "y=\\ln x")], [0, 1200, -1, 8], { pts: [[exp(7), 7, "$(e^7,7)$", "left"]], hlines: [H(7, "$y=7$")] }),
  "el2-029": G([c((x) => LN(5 * x), "y=\\ln(5x)")], [0, 8, -2, 5], { pts: [[exp(3) / 5, 3, "$x=\\frac{e^3}{5}$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el2-030": G([c((x) => 2 * exp(x + 1), "y=2e^{x+1}")], [-3, 1.5, -1, 20], { pts: [[log(7) - 1, 14, "$x=\\ln 7-1$", "above left"]], hlines: [H(14, "$y=14$")] }),
  "el2-031": G([c(LN, "\\ln x"), c((x) => LN(x - 2), "\\ln(x-2)")], [-0.5, 8, -3, 3], { pts: [[1, 0, "$(1,0)$", "above"], [3, 0, "$(3,0)$", "below right"]], vlines: [V(2, "$x=2$")] }),
  "el2-032": G([c(ex(0.3, 200), "N=200e^{0.3t}")], [0, 10, 0, 2300], { pts: [[0, 200, "$(0,200)$", "above right"], [log(10) / 0.3, 2000, "$(7.68,2000)$", "above left"]], hlines: [H(2000, "$N=2000$")], xlabel: "t", ylabel: "N" }),
  "el2-033": G([c(ex(-0.04, 500), "M=500e^{-0.04t}")], [0, 40, 0, 560], { pts: [[0, 500, "$(0,500)$", "above right"], [log(2) / 0.04, 250, "$(17.3,250)$", "above right"]], hlines: [H(250, "half mass $250$")], xlabel: "t", ylabel: "M" }),
  "el2-034": G([c((x) => exp(2 * x), "y=e^{2x}")], [-1, 2.5, -1, 80], { pts: [[log(50) / 2, 50, "$x=\\frac{\\ln 50}{2}$", "above left"]], hlines: [H(50, "$y=50$")] }),
  "el2-035": G([c((x) => exp(3 * x - 1), "y=e^{3x-1}")], [-1, 1.8, -1, 15], { pts: [[(log(8) + 1) / 3, 8, "$x=\\frac{\\ln 8+1}{3}$", "above left"]], hlines: [H(8, "$y=8$")] }),
  "el2-036": G([c(lg(2), "y=\\log_2 x")], [0, 36, -1, 6], { pts: [[32, 5, "$(32,5)$", "above left"], [1, 0, "$(1,0)$", "below right"]], hlines: [H(5, "")] }),
  "el2-037": G([c(lg(3), "y=\\log_3 x")], [0, 90, -1, 5], { pts: [[81, 4, "$(81,4)$", "above left"], [1, 0, "$(1,0)$", "below right"]], hlines: [H(4, "")] }),
  "el2-038": G([c(lg(10), "y=\\log_{10} x")], [0, 2, -4, 1], { pts: [[0.001, -3, "$(0.001,-3)$", "above right"], [1, 0, "$(1,0)$", "above left"]] }),
  "el2-039": G([c(lg(5), "y=\\log_5 x")], [0, 6, -3, 2], { pts: [[0.04, -2, "$\\log_5\\frac{1}{25}=-2$", "above right"], [1, 0, "$(1,0)$", "above left"]] }),
  "el2-040": G([c(lg(3), "y=\\log_3 x")], [0, 90, -1, 5], { pts: [[81, 4, "$\\log_3 81=4$", "above left"]] }),
  "el2-041": G([c(po(2), "y=2^x")], [0, 7, 0, 70], { pts: [[6, 64, "$2^6=64$", "above left"]] }),
  "el2-042": G([c(lg(4), "y=\\log_4 x")], [0, 6, -2, 2], { pts: [[1, 0, "$\\log_4 1=0$", "above left"]] }),
  "el2-043": G([c(lg(7), "y=\\log_7 x")], [0, 10, -1, 2], { pts: [[7, 1, "$\\log_7 7=1$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-044": G([c(lg(2), "y=\\log_2 x")], [0, 36, -1, 6], { pts: [[32, 5, "$(32,5)$", "above left"]], hlines: [H(5, "$y=5$")] }),
  "el2-045": G([c(lg(3), "y=\\log_3 x")], [0, 4, -3, 1], { pts: [[1 / 9, -2, "$(\\frac19,-2)$", "above right"], [1, 0, "$(1,0)$", "above left"]], hlines: [H(-2, "$y=-2$")] }),
  "el2-046": G([c(lg(7), "y=\\log_7 x")], [0, 55, -1, 3], { pts: [[49, 2, "$(49,2)\\Rightarrow x{=}7$", "above left"]], hlines: [H(2, "")] }),
  "el2-047": G([c(LN, "y=\\ln x")], [0, 70, -1, 5], { pts: [[exp(4), 4, "$\\ln e^4=4$", "above left"], [E, 1, "$(e,1)$", "above left"]] }),
  "el2-048": G([c(ex(1), "e^x", [1.3, 5.2]), c(LN, "\\ln x", [6, 1.9]), c((x) => x, "y=x", [4.4, 4.0])], [-2, 6, -2, 6], { pts: [[0, 1, "$(0,1)$", "above left"], [1, 0, "$(1,0)$", "below right"]], equal: true }),
  "el2-049": G([c(LN, "y=\\ln x")], [0, 10, -1, 4], { pts: [[exp(2), 2, "$(e^2,2)$", "above left"]], hlines: [H(2, "$y=2$")] }),
  "el2-050": G([c(po(2), "y=2^x")], [0, 4.5, 0, 18], { pts: [[log(10) / log(2), 10, "$(3.32,10)$", "above left"]], hlines: [H(10, "$y=10$")] }),
  "el2-051": G([c(po(5), "y=5^x")], [0, 2.5, 0, 30], { pts: [[log(20) / log(5), 20, "$(1.86,20)$", "above left"]], hlines: [H(20, "$y=20$")] }),
  "el2-052": G([c((x) => pow(3, 2 * x - 1), "y=3^{2x-1}")], [0, 2.5, 0, 25], { pts: [[(log(15) / log(3) + 1) / 2, 15, "$(1.73,15)$", "above left"]], hlines: [H(15, "$y=15$")] }),
  "el2-053": G([c(lg(8), "y=\\log_8 x")], [0, 10, -1, 2], { pts: [[2, 1 / 3, "$\\log_8 2=\\frac13$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-054": G([c(lg(9), "y=\\log_9 x")], [0, 12, -1, 2], { pts: [[3, 0.5, "$\\log_9 3=\\frac12$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-055": G([c(LN, "y=\\ln x")], [-0.5, 8, -3, 3], { pts: [[1, 0, "$(1,0)$", "above right"]], vlines: [V(0, "asymptote $x=0$")] }),
  "el2-056": G([c(po(10), "10^x", [0.7, 6.2]), c(lg(10), "\\log x", [6.4, 1.0]), c((x) => x, "y=x", [5.4, 5.0])], [-1, 8, -1, 8], { pts: [[0, 1, "$(0,1)$", "left"], [1, 0, "$(1,0)$", "below right"]], equal: true }),
  "el2-057": G([c((x) => exp(2 * x), "y=e^{2x}")], [-1, 1.8, -1, 15], { pts: [[3 * log(2) / 2, 8, "$x=\\frac{3\\ln 2}{2}$", "above left"]], hlines: [H(8, "$y=8$")] }),
  "el2-058": G([c((x) => LN(2 * x + 1), "y=\\ln(2x+1)")], [-0.4, 14, -2, 5], { pts: [[(exp(3) - 1) / 2, 3, "$x=\\frac{e^3-1}{2}$", "above left"]], hlines: [H(3, "$y=3$")], vlines: [V(-0.5, "$x=-\\frac12$")] }),
  "el2-059": G([c((x) => lg(2)((x + 3) * (x - 1)), "y=\\log_2[(x+3)(x-1)]")], [1, 6, -2, 6], { pts: [[-1 + 2 * Math.sqrt(3), 3, "$x=-1+2\\sqrt3$", "above left"]], hlines: [H(3, "$y=3$")], vlines: [V(1, "$x=1$")] }),
  "el2-060": G([c(lg(2), "y=\\log_a x")], [0, 36, -1, 6], { pts: [[32, 5, "$\\log_a a^5=5$", "above left"]] }),
  "el2-061": G([c(lg(3), "y=\\log_3 x")], [0, 760, -1, 7], { pts: [[9, 2, "$(9,2)$", "above left"], [81, 4, "$(81,4)$", "above left"], [729, 6, "$(729,6)$", "left"]] }),
  "el2-062": G([c((x) => pow(10, x - 1), "y=10^{x-1}")], [0, 4.5, 0, 700], { pts: [[log(500) / log(10) + 1, 500, "$(3.70,500)$", "above left"]], hlines: [H(500, "$y=500$")] }),
  "el2-063": G([c(lg(10), "y=\\log x")], [0, 110, -1, 3], { pts: [[10, 1, "$(10,1)$", "above left"], [100, 2, "$(100,2)$", "above left"]] }),
  "el2-064": G([c(lg(10), "y=\\log x")], [0, 15, -0.5, 1.5], { pts: [[9, log(9) / log(10), "$\\log 9$", "above left"], [12, log(12) / log(10), "$\\log 12$", "above left"], [3, log(3) / log(10), "$\\log 3$", "below right"]] }),
  "el2-065": G([c((x) => lg(5)(4 * x), "y=\\log_5(4x)")], [0, 9, -1, 4], { pts: [[25 / 4, 2, "$(\\frac{25}{4},2)$", "above left"]], hlines: [H(2, "$y=2$")] }),
  "el2-066": G([c(lg(2), "y=\\log_2 x")], [0, 16, -1, 5], { pts: [[3, 1.585, "$\\log_2 3$", "above left"], [12, 3.585, "$\\log_2 12$", "above left"]] }),
  "el2-067": G([c((x) => exp(x) + exp(-x), "y=e^x+e^{-x}")], [-2, 2, 0, 6], { pts: [[log((3 + Math.sqrt(5)) / 2), 3, "$x\\approx0.96$", "above left"], [log((3 - Math.sqrt(5)) / 2), 3, "$x\\approx-0.96$", "above right"]], hlines: [H(3, "$y=3$")] }),
  "el2-068": G([c((x) => 1.5 * x + 4.8, "L=1.5M+4.8")], [0, 8, 0, 16], { pts: [[4.8, 12, "$(4.8,12)$", "above left"]], hlines: [H(12, "$\\log_{10}E=12$")], xlabel: "M", ylabel: "\\log_{10}E" }),
  "el2-069": G([c(lg(3), "y=\\log_3 x")], [0, 24, -1, 4], { pts: [[20, log(20) / log(3), "$\\log_3 20\\approx2.73$", "above left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el2-070": G([c(lg(2), "\\log_2 x"), c(lg(4), "\\log_4 x")], [0, 20, -1, 5], { pts: [[16, 4, "$(16,4)$", "above left"], [16, 2, "$(16,2)$", "below right"]], vlines: [V(16, "$x=16$")] }),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—→×✓]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/–/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/✓/g, "$\\checkmark$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@").replace(/\\,/g, "@TS@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ").replace(/@TS@/g, "\\,");
function prose(s0) {
  const s = protect(s0);
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last)); return restore(o);
}
function ans(s0) {
  const s = protect(s0);
  if (s.includes("\\(")) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += escTxt(s.slice(last)); return restore(o);
  }
  if (/\\/.test(s0)) return "\\(\\displaystyle " + ctl(s0) + "\\)";
  if (/[A-Za-z]{4,}/.test(s0)) return restore(escTxt(s));
  if (/[\^_=]/.test(s0)) return "\\(\\displaystyle " + ctl(s0) + "\\)";
  return restore(escTxt(s));
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const t = r / 8; for (const v of [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500]) if (v >= t) return v; return 5000; }
const PAL = ["blue!70!black", "red!70!black", "green!50!black", "violet!70!black"];
const TANC = "orange!85!black", PTC = "red!75!black";

function graph(spec) {
  const CW = 8.6;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const CH = spec.equal ? CW * (Yb - Ya) / (Xb - Xa) : 5.8;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span, cl = (y) => Math.max(ylo, Math.min(yhi, y));
  const num = (v) => Number((Math.round(v * 1000) / 1000).toFixed(3)).toString();
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  (spec.hlines || []).forEach((h) => { if (Math.abs(h.y) > 1e-9 && h.y >= Ya && h.y <= Yb) t += `\\draw[gray!55,dashed] (${f(px(Xa))},${f(py(h.y))}) -- (${f(px(Xb))},${f(py(h.y))});\n`; });
  (spec.vlines || []).forEach((vl) => { if (Math.abs(vl.x) > 1e-9 && vl.x >= Xa && vl.x <= Xb) t += `\\draw[gray!55,dashed] (${f(px(vl.x))},${f(py(Ya))}) -- (${f(px(vl.x))},${f(py(Yb))});\n`; });
  (spec.tangents || []).forEach((tg) => { const m = tg.m, [x0, y0] = tg.p, fn = (x) => y0 + m * (x - x0); t += `\\draw[${TANC},thick,dashed] (${f(px(Xa))},${f(py(cl(fn(Xa))))}) -- (${f(px(Xb))},${f(py(cl(fn(Xb))))});\n`; });
  spec.cs.forEach((cv, ci) => {
    const col = PAL[ci % PAL.length], N = 360, segs = [[]]; let best = null;
    for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = cv.fn(x); if (!isFinite(y)) { if (segs[segs.length - 1].length) segs.push([]); continue; } segs[segs.length - 1].push(`(${f(px(x))},${f(py(cl(y)))})`); if (y >= Ya && y <= Yb && (!best || y > best[1])) best = [x, y]; }
    segs.forEach((sg) => { if (sg.length > 1) t += `\\draw[${col},thick] ${sg.join(" -- ")};\n`; });
    cv._col = col; cv._lv = best;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.66]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.66]{$${num(y)}$};\n`; }
  (spec.hlines || []).forEach((h) => { if (h.label && h.y >= Ya && h.y <= Yb) t += `\\node[right,scale=0.68,gray!55!black,fill=white,inner sep=1pt] at (${f(px(Xa) + 0.08)},${f(py(h.y) + 0.2)}) {${h.label}};\n`; });
  (spec.vlines || []).forEach((vl) => { if (vl.label && vl.x >= Xa && vl.x <= Xb) t += `\\node[above,scale=0.68,gray!55!black,fill=white,inner sep=1pt,rotate=90,anchor=south] at (${f(px(vl.x) + 0.16)},${f(py(Ya) + 0.4)}) {${vl.label}};\n`; });
  spec.cs.forEach((cv) => { const lp = cv.lp ? [px(cv.lp[0]), py(cv.lp[1])] : (cv._lv ? [px(cv._lv[0]), py(cv._lv[1])] : null); if (cv.label && lp) { const right = lp[0] > CW * 0.55; const anc = cv.lp ? "center" : (right ? "east" : "west"); const dx = cv.lp ? 0 : (right ? -0.08 : 0.08); t += `\\node[${cv._col},scale=0.72,anchor=${anc},inner sep=1pt] at (${f(lp[0] + dx)},${f(lp[1] - (cv.lp ? 0 : 0.18))}) {$${cv.label}$};\n`; } });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2.1pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.72] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Logarithms}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Exponentials and Logarithms (ref \\texttt{el2})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Logarithms} questions, each with a fully worked
solution and a TikZ graph. Each diagram plots the relevant logarithmic curve \\(y=\\log_b x\\) (or its inverse
exponential): the \\(x\\)-intercept \\((1,0)\\) and key points are marked, the vertical asymptote \\(x=0\\) is shown,
a dashed reference line passes through the solution for equation questions, and the line \\(y=x\\) is added for
inverse-function pairs.
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
    L += `\\small The logarithmic curve plotted with key points marked${D[q.id].hlines ? ", and the dashed line through the solution" : ""}.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
