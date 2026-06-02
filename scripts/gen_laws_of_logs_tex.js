/* Generates Laws_of_Logarithms.tex from el3_laws_of_logarithms.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Exponentials_and_Logarithms/el3_laws_of_logarithms.ts");
const OUT = path.join(__dirname, "..", "Laws_of_Logarithms.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const E = Math.E, exp = Math.exp, pow = Math.pow, log = Math.log, sqrt = Math.sqrt;
const lg = (b) => (x) => x > 0 ? log(x) / log(b) : NaN;     // log_b x
const LN = (x) => x > 0 ? log(x) : NaN;                       // ln x
const ex = (k, A = 1) => (x) => A * exp(k * x);               // A e^{kx}
const po = (b) => (x) => pow(b, x);                           // b^x
const Lb = (x, b) => log(x) / log(b);                         // numeric log_b x
const c = (fn, label, lp) => ({ fn, label, lp });
const H = (y, label) => ({ y, label });
const V = (x, label) => ({ x, label });
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], hlines: o.hlines, vlines: o.vlines, tangents: o.tangents, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y", equal: o.equal });

const D = {
  "el3-001": G([c(lg(3), "y=\\log_3 x")], [0, 22, -1, 4], { pts: [[5, Lb(5, 3), "$\\log_3 5$", "above left"], [4, Lb(4, 3), "$\\log_3 4$", "below right"], [20, Lb(20, 3), "$\\log_3 20$", "above left"]] }),
  "el3-002": G([c(lg(2), "y=\\log_2 x")], [0, 20, -1, 5], { pts: [[6, Lb(6, 2), "$\\log_2 6$", "above left"], [3, Lb(3, 2), "$\\log_2 3$", "below right"], [18, Lb(18, 2), "$\\log_2 18$", "above left"]] }),
  "el3-003": G([c(LN, "y=\\ln x")], [0, 30, -1, 4], { pts: [[7, log(7), "$\\ln 7$", "above left"], [4, log(4), "$\\ln 4$", "below right"], [28, log(28), "$\\ln 28$", "above left"]] }),
  "el3-004": G([c(lg(5), "y=\\log_5 x")], [0, 44, -1, 3], { pts: [[40, Lb(40, 5), "$\\log_5 40$", "above left"], [8, Lb(8, 5), "$\\log_5 8$", "below right"], [5, 1, "$\\log_5 5=1$", "above left"]], hlines: [H(1, "$y=1$")] }),
  "el3-005": G([c(lg(3), "y=\\log_3 x")], [0, 58, -1, 4], { pts: [[54, Lb(54, 3), "$\\log_3 54$", "above left"], [6, Lb(6, 3), "$\\log_3 6$", "below right"], [9, 2, "$\\log_3 9=2$", "above left"]], hlines: [H(2, "$y=2$")] }),
  "el3-006": G([c(LN, "y=\\ln x")], [0, 33, -1, 4], { pts: [[30, log(30), "$\\ln 30$", "above left"], [5, log(5), "$\\ln 5$", "below right"], [6, log(6), "$\\ln 6$", "above left"]] }),
  "el3-007": G([c(lg(2), "y=\\log_2 x")], [0, 90, -1, 7], { pts: [[3, Lb(3, 2), "$\\log_2 3$", "above left"], [81, Lb(81, 2), "$\\log_2 81$", "left"]] }),
  "el3-008": G([c(lg(10), "y=\\log_{10} x")], [0, 55, -1, 2], { pts: [[49, Lb(49, 10), "$\\log 49$", "above left"], [7, Lb(7, 10), "$\\log 7$", "above left"]] }),
  "el3-009": G([c(LN, "y=\\ln x")], [0, 10, -1, 3], { pts: [[2, log(2), "$\\ln 2$", "above left"], [8, log(8), "$\\ln 8$", "above left"]] }),
  "el3-010": G([c(lg(5), "y=\\log_5 x")], [0, 5, -2, 1], { pts: [[3, Lb(3, 5), "$\\log_5 3$", "above left"], [1 / 9, Lb(1 / 9, 5), "$\\log_5\\frac19$", "above right"]] }),
  "el3-011": G([c(lg(4), "y=\\log_4 x")], [0, 17, -1, 3], { pts: [[3, Lb(3, 4), "$\\log_4 3$", "above left"], [5, Lb(5, 4), "$\\log_4 5$", "above left"], [15, Lb(15, 4), "$\\log_4 15$", "left"], [1, 0, "$=\\log_4 1=0$", "below right"]] }),
  "el3-012": G([c(lg(10), "y=\\log_{10} x")], [0, 110, -1, 3], { pts: [[5, Lb(5, 10), "$\\log 5$", "above left"], [4, Lb(4, 10), "$\\log 4$", "below right"], [100, 2, "$\\log 100=2$", "left"]], hlines: [H(2, "$y=2$")] }),
  "el3-013": G([c(lg(2), "y=\\log_2 x")], [0, 14, -1, 5], { pts: [[8, 3, "$\\log_2 8=3$", "above left"], [12, Lb(12, 2), "$\\log_2 12$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el3-014": G([c(LN, "y=\\ln x")], [0, 10, -1, 3], { pts: [[8, log(8), "$3\\ln 2=\\ln 8$", "above left"], [4, log(4), "$\\ln 4$", "below right"], [2, log(2), "$\\ln 2$", "above left"]] }),
  "el3-015": G([c(lg(2), "y=\\log_a x")], [0, 16, -1, 5], { pts: [[1, 0, "$(1,0)$", "above left"], [8, 3, "$\\log_a 8$", "above left"]] }),
  "el3-016": G([c(LN, "y=\\log_a x")], [0, 16, -1, 4], { pts: [[1, 0, "$(1,0)$", "above left"]] }),
  "el3-017": G([c(lg(10), "y=\\log_{10} x")], [0, 110, -1, 3], { pts: [[100, 2, "$\\log 100=2$", "left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el3-018": G([c(LN, "y=\\ln x")], [0, 60, -3, 5], { pts: [[1, 0, "$(1,0)$", "above left"], [exp(2), 2, "$(e^2,2)$", "above left"]] }),
  "el3-019": G([c((x) => lg(3)(4 * x), "y=\\log_3(4x)")], [0, 10, -1, 4], { pts: [[7, Lb(28, 3), "$x=7$", "above left"]], hlines: [H(Lb(28, 3), "$\\log_3 28$")] }),
  "el3-020": G([c((x) => lg(2)(x / 5), "y=\\log_2(x/5)")], [0, 40, -2, 4], { pts: [[30, Lb(6, 2), "$x=30$", "above left"]], hlines: [H(Lb(6, 2), "$\\log_2 6$")] }),
  "el3-021": G([c((x) => 2 * lg(5)(x), "y=2\\log_5 x")], [0, 10, -1, 5], { pts: [[6, Lb(36, 5), "$x=6$", "above left"]], hlines: [H(Lb(36, 5), "$\\log_5 36$")] }),
  "el3-022": G([c((x) => lg(4)(x * (x - 3)), "y=\\log_4 x(x{-}3)")], [3, 8, -2, 3], { pts: [[4, 1, "$x=4$", "above left"]], hlines: [H(1, "$y=1$")], vlines: [V(3, "$x=3$")] }),
  "el3-023": G([c(po(3), "y=3^x")], [0, 4.5, 0, 70], { pts: [[Lb(50, 3), 50, "$(3.56,50)$", "above left"]], hlines: [H(50, "$y=50$")] }),
  "el3-024": G([c((x) => pow(5, 2 * x), "y=5^{2x}")], [0, 2, 0, 110], { pts: [[Lb(80, 5) / 2, 80, "$(1.36,80)$", "above left"]], hlines: [H(80, "$y=80$")] }),
  "el3-025": G([c(po(4), "4^x"), c((x) => pow(7, x - 1), "7^{x-1}")], [0, 5, 0, 150], { pts: [[3.48, pow(4, 3.48), "$x\\approx3.48$", "above left"]] }),
  "el3-026": G([c((x) => pow(2, x + 3), "2^{x+3}"), c(po(5), "5^x")], [0, 4, 0, 80], { pts: [[2.27, pow(5, 2.27), "$x\\approx2.27$", "above left"]] }),
  "el3-027": G([c(lg(4), "y=\\log_4 x")], [0, 24, -1, 4], { pts: [[20, Lb(20, 4), "$\\log_4 20\\approx2.16$", "above left"]] }),
  "el3-028": G([c(lg(6), "y=\\log_6 x")], [0, 110, -1, 4], { pts: [[100, Lb(100, 6), "$\\log_6 100\\approx2.57$", "left"]] }),
  "el3-029": G([c(lg(4), "y=\\log_4 x")], [0, 70, -1, 4], { pts: [[64, 3, "$(64,3)\\Rightarrow x{=}4$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el3-030": G([c(lg(25), "y=\\log_{25} x")], [0, 140, -1, 3], { pts: [[125, 1.5, "$(125,\\tfrac32)\\Rightarrow x{=}25$", "left"]], hlines: [H(1.5, "$y=\\frac32$")] }),
  "el3-031": G([c(lg(3), "y=\\log_3 x")], [0, 16, -1, 3], { pts: [[3, 1, "$\\log_3 3=1$", "above left"], [6, Lb(6, 3), "$\\log_3 6$", "below right"], [7, Lb(7, 3), "$\\log_3 7$", "above left"]], hlines: [H(1, "$y=1$")] }),
  "el3-032": G([c(lg(5), "y=\\log_5 x")], [0, 140, -1, 4], { pts: [[25, 2, "$\\log_5 x=2$", "above left"], [125, 3, "$\\log_5 y=3$", "left"]] }),
  "el3-033": G([c((x) => lg(2)((3 * x + 5) / (x - 1)), "y=\\log_2\\frac{3x+5}{x-1}")], [1, 6, -1, 6], { pts: [[13 / 5, 3, "$x=\\frac{13}{5}$", "above left"]], hlines: [H(3, "$y=3$")], vlines: [V(1, "$x=1$")] }),
  "el3-034": G([c((x) => 500000 * pow(1.03, x), "P=500000(1.03^t)")], [0, 20, 0, 800000], { pts: [[0, 500000, "$(0,500000)$", "above right"], [log(1.4) / log(1.03), 700000, "$(11.4,700000)$", "above left"]], hlines: [H(700000, "$P=700000$")], xlabel: "t", ylabel: "P" }),
  "el3-035": G([c((x) => lg(3)(x + 5), "y=\\log_3(x+5)")], [0, 12, -1, 4], { pts: [[4, 2, "$x=4$", "above left"]], hlines: [H(2, "$y=2$")] }),
  "el3-036": G([c(lg(10), "y=\\log x")], [0, 33, -1, 2], { pts: [[6, Lb(6, 10), "$\\log 6$", "above left"], [5, Lb(5, 10), "$\\log 5$", "below right"], [30, Lb(30, 10), "$\\log 30$", "above left"]] }),
  "el3-037": G([c(lg(10), "y=\\log x")], [0, 52, -1, 2], { pts: [[48, Lb(48, 10), "$\\log 48$", "above left"], [6, Lb(6, 10), "$\\log 6$", "below right"], [8, Lb(8, 10), "$\\log 8$", "above left"]] }),
  "el3-038": G([c(lg(10), "y=\\log x")], [0, 10, -1, 1.5], { pts: [[2, Lb(2, 10), "$\\log 2$", "above left"], [8, Lb(8, 10), "$3\\log 2=\\log 8$", "above left"]] }),
  "el3-039": G([c(lg(10), "y=\\log x")], [0, 33, -1, 2], { pts: [[30, Lb(30, 10), "$\\log 30$", "above left"], [2, Lb(2, 10), "$\\log 2$", "below right"], [3, Lb(3, 10), "$\\log 3$", "below right"], [5, Lb(5, 10), "$\\log 5$", "above left"]] }),
  "el3-040": G([c(lg(10), "y=\\log x")], [0, 40, -1, 2], { pts: [[3, Lb(3, 10), "$\\log 3$", "below right"], [4, Lb(4, 10), "$\\log 4$", "above left"], [36, Lb(36, 10), "$\\log 36$", "above left"]] }),
  "el3-041": G([c(lg(10), "y=\\log x")], [0, 55, -1, 2], { pts: [[50, Lb(50, 10), "$\\log 50$", "above left"], [5, Lb(5, 10), "$\\log 5$", "below right"], [2, Lb(2, 10), "$\\log 2$", "above left"]] }),
  "el3-042": G([c(lg(10), "y=\\log x")], [0, 16, -1, 2], { pts: [[1, 0, "$(1,0)$", "above left"]] }),
  "el3-043": G([c(lg(10), "y=\\log x")], [0, 16, -1, 2], { pts: [[1, 0, "$(1,0)$", "above left"], [4, Lb(4, 10), "$\\log 4$", "above left"]] }),
  "el3-044": G([c(lg(10), "y=\\log x")], [0, 16, -1, 2], { pts: [[12, Lb(12, 10), "$\\log 12\\approx1.079$", "above left"]] }),
  "el3-045": G([c(lg(10), "y=\\log x")], [0, 16, -1, 2], { pts: [[1.5, Lb(1.5, 10), "$\\log 1.5\\approx0.176$", "above left"]] }),
  "el3-046": G([c((x) => lg(10)(x * (x + 3)), "y=\\log x(x{+}3)")], [0, 6, -1, 3], { pts: [[2, 1, "$x=2$", "above left"]], hlines: [H(1, "$y=1$")] }),
  "el3-047": G([c((x) => lg(2)(x / (x - 3)), "y=\\log_2\\frac{x}{x-3}")], [3, 9, 0, 6], { pts: [[4, 2, "$x=4$", "above left"]], hlines: [H(2, "$y=2$")], vlines: [V(3, "$x=3$")] }),
  "el3-048": G([c(LN, "y=\\ln x")], [0, 16, -1, 4], { pts: [[1, 0, "$(1,0)$", "above left"]] }),
  "el3-049": G([c(lg(2), "y=\\log_2 x")], [0, 10, -1, 4], { pts: [[2, 1, "$(2,1)$", "above left"], [4, 2, "$(4,2)$", "above left"], [8, 3, "$(8,3)$", "above left"]] }),
  "el3-050": G([c((x) => 2 * LN(x), "y=2\\ln x"), c((x) => LN(x + 6), "y=\\ln(x+6)")], [0, 8, -2, 5], { pts: [[3, 2 * log(3), "$x=3$", "above left"]] }),
  "el3-051": G([c(lg(2), "y=\\log_2 x")], [0, 10, -1, 4], { pts: [[8, 3, "$\\frac{\\log 8}{\\log 2}=\\log_2 8=3$", "above left"]] }),
  "el3-052": G([c(lg(2), "y=\\log_2 x")], [0, 18, -1, 5], { pts: [[8, 3, "$\\log_2 8$", "above left"], [4, 2, "$\\log_2 4$", "above left"], [16, 4, "$\\log_2 16$", "left"], [2, 1, "$=\\log_2 2=1$", "below right"]] }),
  "el3-053": G([c(lg(10), "y=\\log x")], [0, 16, -1, 2], { pts: [[1, 0, "$(1,0)$", "above left"]] }),
  "el3-054": G([c((x) => lg(3)(2 * x + 1), "y=\\log_3(2x+1)")], [0, 16, -1, 4], { pts: [[13, 3, "$x=13$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el3-055": G([c((x) => lg(5)(x * x), "y=\\log_5(x^2)")], [-30, 30, -1, 5], { pts: [[25, 4, "$x=25$", "above left"], [-25, 4, "$x=-25$", "above right"]], hlines: [H(4, "$y=4$")] }),
  "el3-056": G([c(lg(2), "y=\\log_2 x")], [0, 18, -1, 5], { pts: [[2, 1, "$(2,1)$", "above left"], [4, 2, "$(4,2)$", "above left"], [8, 3, "$(8,3)$", "above left"], [16, 4, "$(16,4)$", "left"]] }),
  "el3-057": G([c((x) => lg(2)(x * (x + 2)), "y=\\log_2 x(x{+}2)")], [0, 6, -1, 5], { pts: [[2, 3, "$x=2$", "above left"]], hlines: [H(3, "$y=3$")] }),
  "el3-058": G([c(lg(10), "y=\\log_a x")], [0, 24, -1, 2], { pts: [[2, Lb(2, 10), "$\\log_a 2=p$", "above left"], [5, Lb(5, 10), "$\\log_a 5=q$", "below right"], [20, Lb(20, 10), "$\\log_a 20$", "above left"]] }),
  "el3-059": G([c((x) => lg(10)((x + 1) / x), "y=\\log\\frac{x+1}{x}")], [0, 3, -0.5, 2], { pts: [[0.5, Lb(3, 10), "$x=\\frac12$", "above right"]], hlines: [H(Lb(3, 10), "$\\log 3$")] }),
  "el3-060": G([c(lg(3), "y=\\log_3 x")], [0, 30, -1, 5], { pts: [[27, 3, "$\\log_3 27$", "above left"], [9, 2, "$\\log_3 9$", "above left"], [3, 1, "$\\log_3 3$", "below right"]] }),
  "el3-061": G([c(LN, "y=\\ln x")], [0, 160, -1, 6], { pts: [[exp(2), 2, "$\\ln a=2$", "above left"], [exp(5), 5, "$\\ln b=5$", "left"]] }),
  "el3-062": G([c((x) => pow(2, x + 3), "2^{x+3}"), c((x) => pow(5, x - 1), "5^{x-1}")], [0, 6, 0, 180], { pts: [[4.03, pow(2, 7.03), "$x\\approx4.03$", "above left"]] }),
  "el3-063": G([c(lg(2), "y=\\log_2 x")], [0, 10, -1, 4], { pts: [[8, 3, "$(8,3)$", "above left"]] }),
  "el3-064": G([c(lg(10), "y=\\log x")], [0, 110, -1, 3], { pts: [[100, 2, "$\\log 100=2$", "left"], [1, 0, "$(1,0)$", "below right"]] }),
  "el3-065": G([c((x) => lg(4)(x * (x - 6)), "y=\\log_4 x(x{-}6)")], [6, 12, -1, 4], { pts: [[8, 2, "$x=8$", "above left"]], hlines: [H(2, "$y=2$")], vlines: [V(6, "$x=6$")] }),
  "el3-066": G([c(lg(10), "y=\\log x")], [0, 10, -1, 1.5], { pts: [[9, Lb(9, 10), "$\\frac12\\log 9$", "above left"], [8, Lb(8, 10), "$\\frac13\\log 8$", "below right"], [6, Lb(6, 10), "$=\\log 6$", "above left"]] }),
  "el3-067": G([c(lg(10), "y=\\log_a x")], [0, 36, -1, 2], { pts: [[2, Lb(2, 10), "$\\log_a 2=x$", "above left"], [32, Lb(32, 10), "$\\log_a 32$", "above left"]] }),
  "el3-068": G([c((x) => LN(3 * x / (x - 1)), "y=\\ln\\frac{3x}{x-1}")], [1, 6, 0, 4], { pts: [[2.5, log(5), "$x=2.5$", "above left"]], hlines: [H(log(5), "$\\ln 5$")], vlines: [V(1, "$x=1$")] }),
  "el3-069": G([c(lg(2), "y=\\log_2 x")], [0, 10, -1, 4], { pts: [[8, 3, "$\\log_2 8=3$", "above left"]] }),
  "el3-070": G([c(lg(10), "y=\\log x")], [0, 1100, -1, 4], { pts: [[100, 2, "$\\log x=2$", "above left"], [1000, 3, "$\\log x=3$", "left"]], hlines: [H(2, "$y=2$"), H(3, "$y=3$")] }),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/−/g, "-").replace(/⁴/g, "^{4}").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
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

\\title{\\textbf{Laws of Logarithms}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Exponentials and Logarithms (ref \\texttt{el3})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Laws of Logarithms} questions, each with a fully
worked solution and a TikZ graph. For the combine/split-law questions the argument points and the result are
marked on \\(y=\\log_b x\\) (so the heights visibly add or subtract); equation questions show a dashed reference
line through the solution; exponential equations show the two curves and their point of intersection.
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
    L += `\\small The logarithmic law shown on \\(y=\\log_b x\\), with the key points marked${D[q.id].hlines ? " and the dashed line through the solution" : ""}.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
