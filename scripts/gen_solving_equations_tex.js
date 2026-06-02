/* Generates Solving_Exponential_and_Logarithmic_Equations.tex from el4_solving_equations.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Exponentials_and_Logarithms/el4_solving_equations.ts");
const OUT = path.join(__dirname, "..", "Solving_Exponential_and_Logarithmic_Equations.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const E = Math.E, exp = Math.exp, pow = Math.pow, log = Math.log, sqrt = Math.sqrt;
const lg = (b) => (x) => x > 0 ? log(x) / log(b) : NaN;
const LN = (x) => x > 0 ? log(x) : NaN;
const ex = (k, A = 1) => (x) => A * exp(k * x);
const po = (b) => (x) => pow(b, x);
const Lb = (x, b) => log(x) / log(b);
const c = (fn, label, lp) => ({ fn, label, lp });
const H = (y, label) => ({ y, label });
const V = (x, label) => ({ x, label });
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], hlines: o.hlines, vlines: o.vlines, tangents: o.tangents, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y", equal: o.equal });

const ln2 = log(2), ln3 = log(3), ln4 = log(4), ln5 = log(5);

const D = {
  "el4-001": G([c(po(5), "y=5^x")], [0, 3, 0, 60], { pts: [[Lb(40, 5), 40, "$(2.29,40)$", "above left"]], hlines: [H(40, "$y=40$")] }),
  "el4-002": G([c(po(3), "y=3^x")], [0, 4.5, 0, 90], { pts: [[Lb(70, 3), 70, "$(3.87,70)$", "above left"]], hlines: [H(70, "$y=70$")] }),
  "el4-003": G([c(po(0.6), "y=0.6^x")], [0, 6, 0, 1.1], { pts: [[Lb(0.1, 0.6), 0.1, "$(4.51,0.1)$", "above right"]], hlines: [H(0.1, "$y=0.1$")] }),
  "el4-004": G([c((x) => pow(2, 3 * x), "y=2^{3x}")], [0, 3, 0, 140], { pts: [[Lb(100, 2) / 3, 100, "$(2.21,100)$", "above left"]], hlines: [H(100, "$y=100$")] }),
  "el4-005": G([c((x) => pow(4, x - 1), "y=4^{x-1}")], [0, 4.5, 0, 60], { pts: [[Lb(30, 4) + 1, 30, "$(3.45,30)$", "above left"]], hlines: [H(30, "$y=30$")] }),
  "el4-006": G([c((x) => pow(6, 2 * x + 1), "y=6^{2x+1}")], [0, 1.5, 0, 300], { pts: [[(Lb(200, 6) - 1) / 2, 200, "$(0.979,200)$", "above left"]], hlines: [H(200, "$y=200$")] }),
  "el4-007": G([c(po(5), "5^x", [3.4, 70]), c((x) => pow(2, x + 3), "2^{x+3}", [3.7, 50])], [0, 4, 0, 80], { pts: [[2.27, pow(5, 2.27), "$x\\approx2.27$", "above left"]] }),
  "el4-008": G([c((x) => pow(3, x + 2), "3^{x+2}", [3.0, 175]), c(po(7), "7^x", [3.6, 140])], [0, 4, 0, 200], { pts: [[2.59, pow(7, 2.59), "$x\\approx2.59$", "above left"]] }),
  "el4-009": G([c((x) => lg(3)(4 * x), "y=\\log_3(4x)")], [0, 30, -1, 5], { pts: [[20.25, 4, "$x=20.25$", "above left"]], hlines: [H(4, "$y=4$")] }),
  "el4-010": G([c((x) => lg(5)(x + 2), "y=\\log_5(x+2)")], [0, 140, -1, 4], { pts: [[123, 3, "$x=123$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el4-011": G([c((x) => lg(4)(3 - x), "y=\\log_4(3-x)")], [-35, 3, -1, 4], { pts: [[-29, 2.5, "$x=-29$", "above right"]], hlines: [H(2.5, "$y=2.5$")], vlines: [V(3, "$x=3$")] }),
  "el4-012": G([c((x) => 5 * lg(10)(x), "y=5\\log_{10}x")], [0, 10, -2, 6], { pts: [[pow(10, 0.6), 3, "$x\\approx3.98$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el4-013": G([c((x) => 4 * exp(x), "y=4e^x")], [-1, 3, 0, 80], { pts: [[log(15), 60, "$x=\\ln 15$", "above left"]], hlines: [H(60, "$y=60$")] }),
  "el4-014": G([c((x) => exp(0.5 * x) + 3, "y=e^{0.5x}+3")], [-2, 5, 0, 12], { pts: [[2 * log(7), 10, "$x=2\\ln 7$", "above left"]], hlines: [H(10, "$y=10$")] }),
  "el4-015": G([c((x) => 8 - 2 * exp(x - 1), "y=8-2e^{x-1}")], [-1, 3, -4, 9], { pts: [[1 + ln4, 0, "$x=1+\\ln 4$", "above right"]] }),
  "el4-016": G([c((x) => LN(3 * x), "y=\\ln(3x)")], [0, 80, -1, 6], { pts: [[exp(5) / 3, 5, "$x=\\frac{e^5}{3}$", "above left"]], hlines: [H(5, "$y=5$")] }),
  "el4-017": G([c((x) => 4 * LN(2 * x - 1), "y=4\\ln(2x-1)")], [0, 16, -2, 16], { pts: [[(exp(3) + 1) / 2, 12, "$x=\\frac{e^3+1}{2}$", "above left"]], hlines: [H(12, "$y=12$")], vlines: [V(0.5, "$x=\\frac12$")] }),
  "el4-018": G([c((x) => exp(3 * x), "y=e^{3x}")], [-0.5, 1.5, 0, 40], { pts: [[ln3, 27, "$x=\\ln 3$", "above left"]], hlines: [H(27, "$y=27$")] }),
  "el4-019": G([c((x) => exp(2 * x - 1), "y=e^{2x-1}")], [-0.5, 2, 0, 30], { pts: [[(1 + 2 * ln3) / 2, 9, "$x=\\frac{1+2\\ln3}{2}$", "above left"]], hlines: [H(9, "$y=9$")] }),
  "el4-020": G([c((x) => LN(5 * x), "y=\\ln(5x)")], [0, 260, -1, 8], { pts: [[exp(7) / 5, 7, "$x=\\frac{e^7}{5}$", "above left"]], hlines: [H(7, "$y=7$")] }),
  "el4-021": G([c((x) => LN(12 * x * x), "y=\\ln(12x^2)")], [0, 60, -1, 12], { pts: [[exp(5) / (2 * sqrt(3)), 10, "$x=\\frac{e^5}{2\\sqrt3}$", "above left"]], hlines: [H(10, "$y=10$")] }),
  "el4-022": G([c((x) => LN((x - 3) / (2 * x)), "y=\\ln\\frac{x-3}{2x}")], [3, 20, -3, 1], { pts: [], hlines: [H(0, "$y=0$ (never met)")], vlines: [V(3, "$x=3$")] }),
  "el4-023": G([c((x) => 8 * LN(x), "y=8\\ln x")], [0, 4, -4, 6], { pts: [[exp(0.25), 2, "$x=e^{1/4}$", "above left"]], hlines: [H(2, "$y=2$")] }),
  "el4-024": G([c((x) => exp(2 * x) - 5 * exp(x) + 6, "y=e^{2x}-5e^x+6")], [-0.5, 1.6, -2, 8], { pts: [[ln2, 0, "$\\ln 2$", "below left"], [ln3, 0, "$\\ln 3$", "below right"]] }),
  "el4-025": G([c((x) => exp(2 * x) - 7 * exp(x) + 12, "y=e^{2x}-7e^x+12")], [-0.5, 2, -3, 12], { pts: [[ln3, 0, "$\\ln 3$", "below left"], [ln4, 0, "$\\ln 4$", "below right"]] }),
  "el4-026": G([c((x) => 2 * exp(2 * x) - 7 * exp(x) + 3, "y=2e^{2x}-7e^x+3")], [-1.5, 1.6, -3, 8], { pts: [[-ln2, 0, "$-\\ln 2$", "below left"], [ln3, 0, "$\\ln 3$", "below right"]] }),
  "el4-027": G([c((x) => 3 * exp(2 * x) + 10 * exp(x) + 3, "y=3e^{2x}+10e^x+3")], [-3, 1, 0, 40], { pts: [], hlines: [H(0, "curve stays $>0$: no real root")] }),
  "el4-028": G([c((x) => x / 2, "x=2y", [4.3, 2.15]), c((x) => 5 - 2 * x, "2x+y=5", [1.0, 3.0])], [0, 5, 0, 4], { pts: [[2, 1, "$(2,1)$", "above right"]] }),
  "el4-029": G([c((x) => x / 2, "x=2y", [10, 5]), c((x) => (x + 4) / 3, "x=3y-4", [9, 4.3])], [0, 12, 0, 6], { pts: [[8, 4, "$(8,4)$", "above left"]] }),
  "el4-030": G([c(ex(0.04, 120), "P=120e^{0.04t}")], [0, 30, 0, 360], { pts: [[0, 120, "$(0,120)$", "above right"], [log(2.5) / 0.04, 300, "$(22.9,300)$", "above left"]], hlines: [H(300, "$P=300$")], xlabel: "t", ylabel: "P" }),
  "el4-031": G([c((x) => 80 * exp(-0.05 * x) + 20, "T=80e^{-0.05t}+20")], [0, 60, 0, 110], { pts: [[0, 100, "$(0,100)$", "above right"], [log(4) / 0.05, 40, "$(27.7,40)$", "above right"]], hlines: [H(40, "$T=40$"), H(20, "long-term $20$")], xlabel: "t", ylabel: "T" }),
  "el4-032": G([c((x) => exp(2 * x) - 4 * exp(x) - 5, "y=e^{2x}-4e^x-5")], [-0.5, 2, -10, 15], { pts: [[ln5, 0, "$x=\\ln 5$", "above left"]] }),
  "el4-033": G([c((x) => lg(3)((x + 6) / x), "y=\\log_3\\frac{x+6}{x}")], [0, 4, -1, 5], { pts: [[0.75, 2, "$x=\\frac34$", "above right"]], hlines: [H(2, "$y=2$")] }),
  "el4-034": G([c((x) => 18000 * pow(0.85, x), "V=18000(0.85^t)")], [0, 15, 0, 20000], { pts: [[0, 18000, "$(0,18000)$", "above right"], [log(1 / 3) / log(0.85), 6000, "$(6.76,6000)$", "above right"]], hlines: [H(6000, "$V=6000$")], xlabel: "t", ylabel: "V" }),
  "el4-035": G([c((x) => x * x - 2 * x, "y=x^2-2x", [3.4, 4.8]), c((x) => 8 - x * x, "y=8-x^2", [-2.5, 1.0])], [-3, 4, -4, 10], { pts: [[(1 + sqrt(17)) / 2, ((1 + sqrt(17)) / 2) ** 2 - 2 * ((1 + sqrt(17)) / 2), "$x=\\frac{1+\\sqrt{17}}{2}$", "above left"], [(1 - sqrt(17)) / 2, ((1 - sqrt(17)) / 2) ** 2 - 2 * ((1 - sqrt(17)) / 2), "$x=\\frac{1-\\sqrt{17}}{2}$", "above right"]] }),
  "el4-036": G([c(po(2), "y=2^x")], [0, 7, 0, 80], { pts: [[6, 64, "$(6,64)$", "above left"]], hlines: [H(64, "$y=64$")] }),
  "el4-037": G([c(po(3), "y=3^x")], [0, 3, 0, 15], { pts: [[Lb(7, 3), 7, "$x\\approx1.77$", "above left"]], hlines: [H(7, "$y=7$")] }),
  "el4-038": G([c((x) => pow(5, x - 1), "y=5^{x-1}")], [0, 4, 0, 40], { pts: [[3, 25, "$(3,25)$", "above left"]], hlines: [H(25, "$y=25$")] }),
  "el4-039": G([c((x) => exp(3 * x), "y=e^{3x}")], [-0.5, 1.2, 0, 40], { pts: [[log(20) / 3, 20, "$x=\\frac{\\ln 20}{3}$", "above left"]], hlines: [H(20, "$y=20$")] }),
  "el4-040": G([c((x) => 4 * exp(x), "y=4e^x")], [-1, 2, 0, 40], { pts: [[ln3, 12, "$x=\\ln 3$", "above left"]], hlines: [H(12, "$y=12$")] }),
  "el4-041": G([c((x) => LN(2 * x - 1), "y=\\ln(2x-1)")], [0, 40, -2, 6], { pts: [[(exp(4) + 1) / 2, 4, "$x=\\frac{e^4+1}{2}$", "above left"]], hlines: [H(4, "$y=4$")], vlines: [V(0.5, "$x=\\frac12$")] }),
  "el4-042": G([c((x) => pow(4, x) - 5 * pow(2, x) + 4, "y=4^x-5(2^x)+4")], [-0.5, 3, -3, 6], { pts: [[0, 0, "$x=0$", "above left"], [2, 0, "$x=2$", "below right"]] }),
  "el4-043": G([c((x) => exp(2 * x) - 4 * exp(x) + 3, "y=e^{2x}-4e^x+3")], [-0.5, 1.8, -2, 6], { pts: [[0, 0, "$x=0$", "above left"], [ln3, 0, "$x=\\ln 3$", "below right"]] }),
  "el4-044": G([c((x) => lg(2)(x + 3), "y=\\log_2(x+3)")], [0, 18, -1, 5], { pts: [[13, 4, "$x=13$", "above left"]], hlines: [H(4, "$y=4$")] }),
  "el4-045": G([c((x) => lg(3)(x * (x + 6)), "y=\\log_3 x(x{+}6)")], [0, 6, -1, 5], { pts: [[3, 3, "$x=3$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el4-046": G([c(po(7), "7^x", [3.0, 175]), c((x) => pow(3, x + 2), "3^{x+2}", [3.6, 140])], [0, 4, 0, 200], { pts: [[2.59, pow(7, 2.59), "$x\\approx2.59$", "above left"]] }),
  "el4-047": G([c((x) => 2 * pow(3, x), "2(3^x)", [3.3, 55]), c((x) => 5 * pow(2, x), "5(2^x)", [3.7, 42])], [0, 4, 0, 60], { pts: [[2.26, 5 * pow(2, 2.26), "$x\\approx2.26$", "above left"]] }),
  "el4-048": G([c((x) => exp(x) - 6 * exp(-x) - 1, "y=e^x-6e^{-x}-1")], [-1, 2, -15, 10], { pts: [[ln3, 0, "$x=\\ln 3$", "above left"]] }),
  "el4-049": G([c((x) => lg(5)((2 * x - 1) / (x + 2)), "y=\\log_5\\frac{2x-1}{x+2}")], [0.5, 20, -1, 1.5], { pts: [], hlines: [H(1, "$y=1$ (never met)")], vlines: [V(0.5, "$x=\\frac12$")] }),
  "el4-050": G([c(ex(0.03, 500), "P=500e^{0.03t}")], [0, 30, 0, 1200], { pts: [[0, 500, "$(0,500)$", "above right"], [log(2) / 0.03, 1000, "$(23.1,1000)$", "above left"]], hlines: [H(1000, "$P=1000$")], xlabel: "t", ylabel: "P" }),
  "el4-051": G([c(po(4), "4^x", [3.4, 70]), c((x) => pow(2, x + 3), "2^{x+3}", [3.7, 52])], [0, 4, 0, 80], { pts: [[3, 64, "$(3,64)$", "above left"]] }),
  "el4-052": G([c(po(9), "9^x", [4.3, 6200]), c((x) => pow(3, x + 4), "3^{x+4}", [4.6, 4500])], [0, 5, 0, 7000], { pts: [[4, 6561, "$(4,6561)$", "above left"]] }),
  "el4-053": G([c((x) => 5 * exp(2 * x) - 3 * exp(x) - 2, "y=5e^{2x}-3e^x-2")], [-1.5, 1, -4, 10], { pts: [[0, 0, "$x=0$", "above right"]] }),
  "el4-054": G([c((x) => LN(x * (x - 2)), "y=\\ln x(x{-}2)")], [2, 8, -1, 4], { pts: [[5, log(15), "$x=5$", "above left"]], hlines: [H(log(15), "$\\ln 15$")], vlines: [V(2, "$x=2$")] }),
  "el4-055": G([c((x) => exp(-log(2) / 10 * x), "\\frac{m}{m_0}=e^{-kt}")], [0, 40, 0, 1.1], { pts: [[10, 0.5, "$(10,\\tfrac12)$", "above right"]], hlines: [H(0.5, "half $=\\frac12$")], xlabel: "t", ylabel: "m/m_0" }),
  "el4-056": G([c((x) => 2 * lg(3)(x), "2\\log_3 x", [8, 3.9]), c((x) => lg(3)(5 * x + 6), "\\log_3(5x+6)", [8.5, 3.0])], [0, 10, -1, 5], { pts: [[6, 2 * Lb(6, 3), "$x=6$", "above left"]] }),
  "el4-057": G([c((x) => pow(3, x + 1), "3^{x+1}", [9.5, 42000]), c((x) => pow(4, x - 1), "4^{x-1}", [10.5, 30000])], [0, 12, 0, 50000], { pts: [[8.64, pow(3, 9.64), "$x\\approx8.64$", "above left"]] }),
  "el4-058": G([c((x) => exp(x) + 2 * exp(-x) - 3, "y=e^x+2e^{-x}-3")], [-1.5, 1.5, -1, 5], { pts: [[0, 0, "$x=0$", "above left"], [ln2, 0, "$x=\\ln 2$", "below right"]] }),
  "el4-059": G([c((x) => lg(10)((x + 5) * (x - 2)), "y=\\log(x+5)(x{-}2)")], [2, 8, -1, 3], { pts: [[4, Lb(18, 10), "$x=4$", "above left"]], hlines: [H(Lb(18, 10), "$\\log 18$")], vlines: [V(2, "$x=2$")] }),
  "el4-060": G([c((x) => 5 * pow(2, x), "y=2^x+2^{x+2}=5(2^x)")], [0, 5, 0, 60], { pts: [[3, 40, "$x=3$", "above left"]], hlines: [H(40, "$y=40$")] }),
  "el4-061": G([c((x) => 2 * pow(3, x), "y=3^{x+1}-3^x=2(3^x)")], [0, 4, 0, 60], { pts: [[2, 18, "$x=2$", "above left"]], hlines: [H(18, "$y=18$")] }),
  "el4-062": G([c((x) => LN(x * x), "y=\\ln(x^2)")], [-30, 30, -1, 8], { pts: [[exp(3), 6, "$x=e^3$", "above left"], [-exp(3), 6, "$x=-e^3$", "above right"]], hlines: [H(6, "$y=6$")] }),
  "el4-063": G([c((x) => 2000 * pow(1.04, x), "V=2000(1.04^t)")], [0, 15, 0, 3600], { pts: [[0, 2000, "$(0,2000)$", "above right"], [log(1.5) / log(1.04), 3000, "$(10.3,3000)$", "above left"]], hlines: [H(3000, "$V=3000$")], xlabel: "t", ylabel: "V" }),
  "el4-064": G([c((x) => 32 / x, "xy=32", [13, 2.7]), c((x) => x / 2, "x=2y", [9.5, 4.8])], [0, 16, 0, 12], { pts: [[8, 4, "$(8,4)$", "above right"]] }),
  "el4-065": G([c((x) => exp(2 * x) + 3 * exp(x) - 10, "y=e^{2x}+3e^x-10")], [-1, 1.5, -12, 15], { pts: [[ln2, 0, "$x=\\ln 2$", "above left"]] }),
  "el4-066": G([c((x) => (lg(10)(x)) ** 2 - 4 * lg(10)(x), "y=(\\log x)^2-4\\log x")], [0, 11000, -5, 5], { pts: [[1, 0, "$x=1$", "above right"], [10000, 0, "$x=10000$", "above left"]] }),
  "el4-067": G([c((x) => 2 * LN(x + 1) - LN(x), "2\\ln(x+1)-\\ln x", [5, 2.6])], [0, 6, -1, 4], { pts: [[1, ln4, "tangent $x=1$", "above left"]], hlines: [H(ln4, "$\\ln 4$")] }),
  "el4-068": G([c((x) => 25 + 60 * exp(-0.04 * x), "T=25+60e^{-0.04t}")], [0, 80, 0, 95], { pts: [[0, 85, "$(0,85)$", "above right"], [log(4) / 0.04, 40, "$(34.7,40)$", "above right"]], hlines: [H(40, "$T=40$"), H(25, "long-term $25$")], xlabel: "t", ylabel: "T" }),
  "el4-069": G([c(po(0.6), "y=(0.6)^x")], [-4, 1, 0, 4], { pts: [[log(2) / (ln3 - ln5), 2, "$x\\approx-2.15$", "above right"]], hlines: [H(2, "$y=2$")] }),
  "el4-070": G([c((x) => exp(2 * x) - 5 * exp(x) + 6, "y=e^{2x}-5e^x+6")], [-0.5, 1.6, -2, 8], { pts: [[ln2, 0, "$\\ln 2$", "below left"], [ln3, 0, "$\\ln 3$", "below right"]] }),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/✓/g, "\\checkmark ").replace(/−/g, "-").replace(/⁴/g, "^{4}").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—→×÷✓²³⁴−⟹]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/[–]/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/÷/g, "$\\div$").replace(/−/g, "-").replace(/⟹/g, "$\\Rightarrow$").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/⁴/g, "\\textsuperscript{4}").replace(/✓/g, "$\\checkmark$");
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
  if (/[A-Za-z]{4,}/.test(s0) || /\b(or|and)\b/i.test(s0)) return restore(escTxt(s));
  if (/[\^_=]/.test(s0)) return "\\(\\displaystyle " + ctl(s0) + "\\)";
  return restore(escTxt(s));
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const raw = r / 8; const p = pow(10, Math.floor(Math.log10(raw))); for (const k of [1, 2, 2.5, 5]) if (p * k >= raw) return p * k; return p * 10; }
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
  (spec.vlines || []).forEach((vl) => { if (vl.label && vl.x >= Xa && vl.x <= Xb) t += `\\node[scale=0.68,gray!55!black,fill=white,inner sep=1pt,rotate=90,anchor=south] at (${f(px(vl.x) + 0.16)},${f(py(Ya) + 0.4)}) {${vl.label}};\n`; });
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

\\title{\\textbf{Solving Exponential and Logarithmic Equations}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Exponentials and Logarithms (ref \\texttt{el4})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Solving Exponential and Logarithmic Equations}
questions, each with a fully worked solution and a TikZ graph. Single-base and \\(\\ln\\) equations show a dashed
reference line through the solution; different-base equations show both curves and their intersection;
quadratics in \\(e^x\\) or \\(2^x\\) are plotted as a function with its roots (the solutions) marked on the
\\(x\\)-axis; simultaneous systems show the two relations meeting; and models show the curve reaching its target.
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
    L += `\\small The equation shown graphically, with the solution(s) marked.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
