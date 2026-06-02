/* Generates Using_Logarithmic_Graphs.tex from el6_using_logarithmic_graphs.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Exponentials_and_Logarithms/el6_using_logarithmic_graphs.ts");
const OUT = path.join(__dirname, "..", "Using_Logarithmic_Graphs.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const E = Math.E, exp = Math.exp, pow = Math.pow, log = Math.log;
const L10 = (x) => log(x) / log(10);
const lg = (b) => (x) => x > 0 ? log(x) / log(b) : NaN;
const LN = (x) => x > 0 ? log(x) : NaN;
const ex = (k, A = 1) => (x) => A * exp(k * x);
const po = (b, A = 1) => (x) => A * pow(b, x);
const line = (m, b) => (x) => m * x + b;
const c = (fn, label, lp) => ({ fn, label, lp });
const H = (y, label) => ({ y, label });
const V = (x, label) => ({ x, label });
const LX = "\\log x", LY = "\\log y";
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], hlines: o.hlines, vlines: o.vlines, tangents: o.tangents, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y", equal: o.equal });

const D = {
  // ---- linear (log-log / log-lin) graph methods ----
  "el6-001": G([c(line(1.5, 0.5), "\\log y=n\\log x+\\log a")], [0, 3, 0, 5], { pts: [[0, 0.5, "intercept $\\log a$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-002": G([c(line(3, 0.5), "\\log y=3\\log x+0.5")], [-1, 2, -3, 6], { pts: [[0, 0.5, "$(0,0.5)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-003": G([c(line(1, 1.2), "\\log y=\\log x+1.2")], [-0.5, 3, 0, 5], { pts: [[0, 1.2, "$(0,1.2)$", "above left"], [2, 3.2, "$(2,3.2)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-004": G([c(line(0.7, 1.9), "\\log y=0.7\\log x+1.9")], [0, 5, 0, 6], { pts: [[1, 2.6, "$(1,2.6)$", "above left"], [3, 4.0, "$(3,4.0)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-005": G([c(line(1.5, L10(3)), "\\log y=1.5\\log x+\\log 3")], [0, 1.6, 0, 3], { pts: [[L10(4), L10(24), "", "above left"], [L10(9), L10(81), "", "above left"], [L10(16), L10(192), "", "above left"], [L10(25), L10(375), "", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-006": G([c(line(-2, 3), "\\log h=-2\\log r+3")], [0, 4, -3, 4], { pts: [[0, 3, "$(0,3)$", "above right"]], xlabel: "\\log r", ylabel: "\\log h" }),
  "el6-007": G([c(line(0.3, 1.7), "\\log y=(\\log b)x+\\log k")], [0, 8, 0, 4], { pts: [[0, 1.7, "intercept $\\log k$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-008": G([c(line(0.3, 1.7), "\\log y=0.3x+1.7")], [0, 8, 0, 4], { pts: [[0, 1.7, "$(0,1.7)$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-009": G([c(line(0.3, 2), "\\log y=0.3x+2")], [-0.5, 8, 0, 5], { pts: [[0, 2, "$(0,2)$", "above left"], [5, 3.5, "$(5,3.5)$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-010": G([c(line(0.35, 0.7), "\\log y=0.35x+0.7")], [0, 8, 0, 4], { pts: [[2, 1.4, "$(2,1.4)$", "above left"], [6, 2.8, "$(6,2.8)$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-011": G([c(line(0.4, 3), "\\ln y=0.4x+3")], [0, 8, 0, 7], { pts: [[0, 3, "intercept $\\ln k$", "above right"]], xlabel: "x", ylabel: "\\ln y" }),
  "el6-012": G([c(line(0.6, 1.5), "\\ln y=0.6x+1.5")], [-0.5, 7, 0, 6], { pts: [[0, 1.5, "$(0,1.5)$", "above left"], [4, 3.9, "$(4,3.9)$", "above left"]], xlabel: "x", ylabel: "\\ln y" }),
  "el6-013": G([c(line(0.35, 0.428), "\\log y=0.35t+0.428")], [0, 8, 0, 3.2], { pts: [[1, L10(6), "", "above left"], [3, L10(30), "", "above left"], [5, L10(150), "", "above left"], [7, L10(750), "", "above left"]], xlabel: "t", ylabel: LY }),
  "el6-014": G([c(line(1.5, L10(4.24)), "\\log y=1.5\\log x+\\log a")], [0, 1.4, 0, 3], { pts: [[L10(2), L10(12), "", "above left"], [L10(4), L10(34), "", "above left"], [L10(8), L10(96), "", "above left"], [L10(16), L10(271), "", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-015": G([c(line(L10(0.951), L10(821)), "\\log x=(\\log b)t+\\log k")], [0, 90, 0, 3.2], { pts: [[10, L10(500), "", "above right"], [20, L10(250), "", "above right"], [40, L10(62.5), "", "above right"], [80, L10(15.6), "", "above right"]], xlabel: "t", ylabel: "\\log x" }),
  "el6-016": G([c(line(2, 0.6), "\\log y=2\\log x+0.6")], [0, 2, 0, 4], { pts: [[L10(5), L10(99.5), "$x=5$", "above left"], [L10(7.09), L10(200), "$y=200$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-017": G([c(line(0.2, 1.3), "\\log y=0.2x+1.3")], [0, 10, 0, 4], { pts: [[3, L10(79.4), "$x=3$", "above left"], [8.5, 3, "$y=1000$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-018": G([c(line(1.2, 1.5), "\\log S=1.2\\log t+1.5")], [0, 2, 0, 4], { pts: [[0.5, 2.1, "$(0.5,2.1)$", "above left"], [1.5, 3.3, "$(1.5,3.3)$", "above left"]], xlabel: "\\log t", ylabel: "\\log S" }),
  "el6-019": G([c(line(-0.12, 4.3), "\\log V=-0.12t+4.3")], [0, 15, 0, 5], { pts: [[0, 4.3, "$(0,4.3)$", "above right"], [10, 3.1, "$(10,3.1)$", "above right"]], xlabel: "t", ylabel: "\\log V" }),
  "el6-020": G([c(line(-1.4, 4.5), "\\log P=-1.4\\log V+c")], [-0.5, 1.5, 0, 6], { pts: [[0.5, 3.8, "$(0.5,3.8)$", "above right"]], xlabel: "\\log V", ylabel: "\\log P" }),
  "el6-021": G([c(line(L10(4), L10(5)), "\\log y=(\\log4)x+\\log5")], [0, 5, 0, 4], { pts: [[0, L10(5), "$\\log 5$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-022": G([c(line(0.4, L10(2)), "\\log h=0.4\\log m+\\log 2")], [0, 4, 0, 2.5], { pts: [[0, L10(2), "$\\log 2$", "above right"]], xlabel: "\\log m", ylabel: "\\log h" }),
  "el6-023": G([c(line(L10(2), L10(3)), "\\log h=(\\log2)s+\\log3")], [0, 8, 0, 3], { pts: [[0, L10(3), "$\\log 3$", "above right"]], xlabel: "s", ylabel: "\\log h" }),
  "el6-024": G([c(line(0.3, log(50)), "\\ln p=0.3t+\\ln 50")], [0, 15, 0, 9], { pts: [[0, log(50), "$\\ln 50$", "above right"]], xlabel: "t", ylabel: "\\ln p" }),
  "el6-025": G([c(line(0.2, 4), "A:\\ln P=0.2t+4", [4, 5.4]), c(line(-0.1, 7), "B:\\ln P=-0.1t+7", [14, 5.0])], [0, 20, 0, 9], { pts: [[10, 6, "$(10,6)$", "above left"]], xlabel: "t", ylabel: "\\ln P" }),
  "el6-026": G([c(line(0.08, 2), "A", [22, 3.5]), c(line(-0.04, 3.5), "B", [24, 2.3])], [0, 30, 0, 4], { pts: [[12.5, 3, "$(12.5,3)$", "above left"]], xlabel: "t", ylabel: "\\log S" }),
  "el6-027": G([c(line(0.15, 5), "Deer", [22, 7.8]), c(line(0.25, 3), "Wolves", [24, 8.8])], [0, 30, 0, 11], { pts: [[20, 8, "$(20,8)$", "above left"]], xlabel: "t", ylabel: "\\ln N" }),
  "el6-028": G([c(line(2, 0.2), "\\log y=2\\log x+0.2")], [0, 2, 0, 4], { pts: [[0.4, 1.0, "$(0.4,1.0)$", "above left"], [1.2, 2.6, "$(1.2,2.6)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-029": G([c(line(L10(3), 1), "\\log y=(\\log3)x+1")], [0, 6, 0, 4], { pts: [[0, 1, "$(0,1)$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-030": G([c(line(1.3, 0.6), "straight line")], [0, 2, 0, 4], { pts: [], xlabel: LX, ylabel: LY }),
  "el6-031": G([c(line(0.677, 0.972), "\\log p=0.677\\log t+\\log a")], [0, 1.8, 0, 2.5], { pts: [[L10(2), L10(15), "", "above left"], [L10(5), L10(28), "", "above left"], [L10(10), L10(45), "", "above left"], [L10(20), L10(72), "", "above left"], [L10(40), L10(114), "", "above left"]], xlabel: "\\log t", ylabel: "\\log p" }),
  "el6-032": G([c(line(-0.2, 4), "\\log V=-0.2t+4")], [0, 20, 0, 5], { pts: [[0, 4, "$(0,4)$", "above right"], [5, 3, "$(5,3)$", "above right"]], xlabel: "t", ylabel: "\\log V" }),
  "el6-033": G([c(line(1.72, L10(2)), "\\log p=1.72\\log t+\\log a")], [0, 1.1, 0, 2.2], { pts: [[L10(1), L10(2), "", "above left"], [L10(3), L10(14), "", "above left"], [L10(6), L10(44), "", "above left"], [L10(9), L10(88), "", "above left"]], xlabel: "\\log t", ylabel: "\\log p" }),
  "el6-034": G([c(line(2.5, -5.4), "\\log v=2.5\\log T-5.4")], [2, 3, -1, 3], { pts: [[L10(400), 2.5 * L10(400) - 5.4, "$T=400$", "above left"], [L10(834), L10(80), "$v=80$", "below right"]], xlabel: "\\log T", ylabel: "\\log v" }),
  "el6-035": G([c(line(-0.08, 8), "Rabbits", [22, 6.6]), c(line(0.12, 4), "Foxes", [24, 7.0])], [0, 30, 0, 9], { pts: [[20, 6.4, "$(20,6.4)$", "above left"]], xlabel: "t", ylabel: "\\ln N" }),
  "el6-036": G([c(line(2, 0.5), "\\log y=2\\log x+0.5")], [0, 2, 0, 4], { pts: [[0, 0.5, "$(0,0.5)$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-037": G([c(line(0.2, 1), "\\log y=0.2x+1")], [0, 8, 0, 3], { pts: [[0, 1, "$(0,1)$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-038": G([c(line(1.5, 0.6), "\\log y=n\\log x+\\log a")], [0, 2, 0, 4], { pts: [], xlabel: LX, ylabel: LY }),
  "el6-039": G([c(line(0.3, 0.7), "\\log y=(\\log b)x+\\log k")], [0, 8, 0, 3], { pts: [], xlabel: "x", ylabel: LY }),
  "el6-040": G([c(line(0.5, 2), "\\ln y=0.5x+2")], [0, 8, 0, 6], { pts: [[0, 2, "$(0,2)$", "above left"]], xlabel: "x", ylabel: "\\ln y" }),
  "el6-041": G([c(line(1.2, 0.6), "\\log y=1.2\\log x+0.6")], [0, 2.5, 0, 4], { pts: [[0.5, 1.2, "$(0.5,1.2)$", "above left"], [2.0, 3.0, "$(2.0,3.0)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-042": G([c(line(0.5, 1.5), "\\log y=0.5x+1.5")], [0, 6, 0, 5], { pts: [[0, 1.5, "$(0,1.5)$", "above left"], [4, 3.5, "$(4,3.5)$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-043": G([c(line(2, L10(5)), "\\log y=2\\log x+\\log 5")], [0, 1, 0, 2.5], { pts: [[L10(2), L10(20), "$(0.30,1.30)$", "above left"], [L10(5), L10(125), "$(0.70,2.10)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-044": G([c(line(L10(3), L10(2)), "\\log y=(\\log3)x+\\log2")], [0, 4, 0, 2.5], { pts: [[1, L10(6), "$(1,0.78)$", "above left"], [3, L10(54), "$(3,1.73)$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-045": G([c(line(0.3, 1.2), "\\log y=0.3x+1.2")], [0, 8, 0, 4], { pts: [[5, 2.7, "$x=5$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-046": G([c(line(1.5, 0.8), "\\log y=1.5\\log x+0.8")], [0, 2, 0, 3], { pts: [[L10(4), L10(50.4), "$x=4$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-047": G([c(line(2, 3), "\\ln y=2x+3")], [0, 4, 0, 11], { pts: [[0, 3, "$(0,3)$", "above left"]], xlabel: "x", ylabel: "\\ln y" }),
  "el6-048": G([c(line(-2, 3), "\\log y=-2\\log x+3")], [0, 3, -3, 4], { pts: [[0, 3, "$(0,3)$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-049": G([c(line(L10(2), L10(3)), "\\log y=(\\log2)x+\\log3")], [0, 5, 0, 3], { pts: [[0, L10(3), "$\\log 3$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-050": G([c(line(3, L10(5)), "\\log y=3\\log x+\\log 5")], [0, 2, 0, 4], { pts: [[0, L10(5), "$\\log 5$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-051": G([c(line(0.5, 1), "\\log y=0.5\\log x+1")], [0, 3, 0, 3], { pts: [[0, 1, "$(0,1)$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-052": G([c(line(0.25, 0.6), "\\log y\\ \\text{vs}\\ x:\\ \\text{straight}")], [0, 6, 0, 3], { pts: [], xlabel: "x", ylabel: LY }),
  "el6-053": G([c(line(-0.5, 2), "\\log y=-0.5\\log x+2")], [0, 2, 0, 3], { pts: [[L10(4), L10(50), "$y=50$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-054": G([c(line(0.4, 0.8), "\\log y=0.4x+0.8")], [0, 8, 0, 4], { pts: [[5.5, 3, "$y=1000$", "above left"]], xlabel: "x", ylabel: LY }),
  "el6-055": G([c(line(-0.5, 2.1), "\\log v=-0.5\\log d+2.1")], [0, 3, 0, 3], { pts: [[0, 2.1, "$(0,2.1)$", "above right"]], xlabel: "\\log d", ylabel: "\\log v" }),
  "el6-056": G([c(line(-0.3, log(4)), "\\ln y=-0.3x+\\ln 4")], [0, 8, -1, 2], { pts: [[0, log(4), "$\\ln 4$", "above right"]], xlabel: "x", ylabel: "\\ln y" }),
  "el6-057": G([c(line(0.5, 2.4), "\\ln y=0.5x+2.4")], [0, 10, 0, 8], { pts: [[2, 3.4, "$(2,3.4)$", "above left"], [8, 6.4, "$(8,6.4)$", "above left"]], xlabel: "x", ylabel: "\\ln y" }),
  "el6-058": G([c(line(-0.0994, log(100)), "\\ln y=-0.0994t+\\ln 100")], [0, 15, 0, 6], { pts: [[0, log(100), "$(0,4.61)$", "above right"], [10, log(37), "$(10,3.61)$", "above right"]], xlabel: "t", ylabel: "\\ln y" }),
  "el6-059": G([c(line(0.4, 0.7), "\\log y\\ \\text{vs}\\ x")], [0, 8, 0, 3.5], { pts: [], xlabel: "x", ylabel: LY }),
  "el6-060": G([c(line(3, -1), "\\log y=3\\log x-1")], [0, 2.5, -1, 6], { pts: [[1, 2, "$(1,2)$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-061": G([c(line(L10(5), L10(7)), "\\log y=(\\log5)x+\\log7")], [0, 5, 0, 4], { pts: [[0, L10(7), "$\\log 7$", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-062": G([c(line(2.5, L10(8)), "\\log y=2.5\\log x+\\log 8")], [0, 2, 0, 4], { pts: [[0, L10(8), "$\\log 8$", "above right"]], xlabel: LX, ylabel: LY }),
  "el6-063": G([c(line(2, 0.3), "\\log y=2\\log x+0.3")], [0, 2, 0, 4], { pts: [[L10(22.4), 3, "$x=22.4$", "above left"]], hlines: [H(3, "$\\log y=3$")], xlabel: LX, ylabel: LY }),
  "el6-064": G([c(line(-1.4, 2.5), "\\log P=-1.4\\log V+2.5")], [0, 2, 0, 3], { pts: [[1, L10(12.6), "$V=10$", "above right"]], xlabel: "\\log V", ylabel: "\\log P" }),
  "el6-065": G([c(line(-0.15, 4), "\\log y=-0.15x+4")], [0, 30, 0, 5], { pts: [[0, 4, "$(0,4)$", "above right"], [2.01, 4 - 0.15 * 2.01, "half-life", "above right"]], xlabel: "x", ylabel: LY }),
  "el6-066": G([c(line(3, L10(2)), "\\log y=3\\log x+\\log2", [1.2, 3.5]), c(line(1, L10(8)), "\\log y=\\log x+\\log8", [1.3, 1.6])], [0, 1.5, 0, 4], { pts: [[L10(2), L10(16), "$x=2$", "above left"]], xlabel: LX, ylabel: LY }),
  "el6-067": G([c(line(0.5, 0.3), "\\log t=0.5\\log l+0.3")], [0, 2, 0, 2], { pts: [[0, 0.3, "$(0,0.3)$", "above right"], [L10(4), L10(4), "$l=4$", "above left"]], xlabel: "\\log l", ylabel: "\\log t" }),
  "el6-068": G([c(line(0.2, 5), "\\ln N=0.2t+5")], [0, 20, 0, 10], { pts: [[0, 5, "$(0,5)$", "above left"]], xlabel: "t", ylabel: "\\ln N" }),
  "el6-069": G([c(line(0.3, 0.7), "\\log y\\ \\text{vs}\\ x:\\ \\text{straight}")], [0, 6, 0, 3], { pts: [], xlabel: "x", ylabel: LY }),
  "el6-070": G([c(line(1.5, 1.5), "\\log y=1.5\\log x+1.5")], [0, 3, 0, 6], { pts: [[0, 1.5, "$(0,1.5)$", "above left"], [2, 4.5, "$(2,4.5)$", "above left"]], xlabel: LX, ylabel: LY }),
  // ---- curve sketches ----
  "el6-071": G([c(ex(1), "y=e^x")], [-3, 2.5, -1, 9], { pts: [[0, 1, "$(0,1)$", "above left"], [1, E, "$(1,e)$", "above left"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-072": G([c(LN, "y=\\ln x")], [-0.5, 8, -3, 3], { pts: [[1, 0, "$(1,0)$", "above right"], [E, 1, "$(e,1)$", "above left"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
  "el6-073": G([c(ex(1), "e^x", [1.4, 5.5]), c(ex(-1), "e^{-x}", [-1.4, 5.5])], [-3, 3, -1, 10], { pts: [[0, 1, "$(0,1)$", "above"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-074": G([c((x) => exp(x) - 1, "y=e^x-1")], [-3, 2, -2, 8], { pts: [[0, 0, "$(0,0)$", "above left"]], hlines: [H(-1, "asymptote $y=-1$")], ylabel: "y" }),
  "el6-075": G([c((x) => LN(x + 2), "y=\\ln(x+2)")], [-2.5, 6, -3, 3], { pts: [[-1, 0, "$(-1,0)$", "above right"], [0, log(2), "$(0,\\ln2)$", "above left"]], vlines: [V(-2, "$x=-2$")], ylabel: "y" }),
  "el6-076": G([c(po(2), "y=2^x")], [-3, 4, -1, 9], { pts: [[0, 1, "$(0,1)$", "above left"], [1, 2, "$(1,2)$", "above left"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-077": G([c(lg(10), "y=\\log_{10}x")], [-0.5, 12, -2, 2], { pts: [[1, 0, "$(1,0)$", "above right"], [10, 1, "$(10,1)$", "above left"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
  "el6-078": G([c((x) => -exp(x), "y=-e^x")], [-3, 2, -9, 1], { pts: [[0, -1, "$(0,-1)$", "below right"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-079": G([c((x) => exp(2 * x), "e^{2x}", [0.9, 6]), c(ex(1), "e^x", [1.8, 6])], [-2, 1.2, -1, 12], { pts: [[0, 1, "$(0,1)$", "above left"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-080": G([c((x) => exp(x) + 2, "y=e^x+2")], [-3, 2, 0, 10], { pts: [[0, 3, "$(0,3)$", "above left"]], hlines: [H(2, "asymptote $y=2$")], ylabel: "y" }),
  "el6-081": G([c((x) => exp(-x) + 1, "y=e^{-x}+1")], [-2, 4, 0, 8], { pts: [[0, 2, "$(0,2)$", "above right"]], hlines: [H(1, "asymptote $y=1$")], ylabel: "y" }),
  "el6-082": G([c((x) => LN(2 * x), "y=\\ln(2x)")], [-0.3, 6, -3, 3], { pts: [[0.5, 0, "$(\\tfrac12,0)$", "below right"], [1, log(2), "$(1,\\ln2)$", "above left"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
  "el6-083": G([c((x) => LN(x) + 1, "y=\\ln x+1")], [-0.3, 8, -3, 4], { pts: [[1 / E, 0, "$(\\tfrac1e,0)$", "below right"], [1, 1, "$(1,1)$", "above left"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
  "el6-084": G([c((x) => LN(-x), "y=\\ln(-x)")], [-8, 0.5, -3, 3], { pts: [[-1, 0, "$(-1,0)$", "above left"], [-E, 1, "$(-e,1)$", "above left"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
  "el6-085": G([c((x) => 3 - exp(x), "y=3-e^x")], [-3, 2, -6, 4], { pts: [[0, 2, "$(0,2)$", "above right"], [log(3), 0, "$(\\ln3,0)$", "below right"]], hlines: [H(3, "asymptote $y=3$")], ylabel: "y" }),
  "el6-086": G([c((x) => exp(x - 1), "y=e^{x-1}")], [-3, 3, -1, 9], { pts: [[0, 1 / E, "$(0,\\tfrac1e)$", "above left"], [1, 1, "$(1,1)$", "above left"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-087": G([c((x) => LN(x - 1), "y=\\ln(x-1)")], [0.5, 8, -3, 3], { pts: [[2, 0, "$(2,0)$", "above right"], [1 + E, 1, "$(1+e,1)$", "above left"]], vlines: [V(1, "asymptote $x=1$")], ylabel: "y" }),
  "el6-088": G([c((x) => 2 * LN(x), "2\\ln x", [6, 3.8]), c(LN, "\\ln x", [6.5, 1.6])], [-0.3, 8, -3, 5], { pts: [[1, 0, "$(1,0)$", "below right"], [E, 2, "$(e,2)$", "above left"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
  "el6-089": G([c(po(2, 1), "y=2^{-x}").fn ? c((x) => pow(2, -x), "y=2^{-x}") : null], [-4, 3, -1, 9], { pts: [[0, 1, "$(0,1)$", "above right"], [1, 0.5, "$(1,\\tfrac12)$", "above right"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" }),
  "el6-090": G([c(LN, "\\ln x", [7.5, 2.2]), c(lg(10), "\\log_{10}x", [8, 1.0])], [-0.3, 10, -3, 3], { pts: [[1, 0, "$(1,0)$", "below right"]], vlines: [V(0, "asymptote $x=0$")], ylabel: "y" }),
};
// fix el6-089 (avoid the conditional artefact)
D["el6-089"] = G([c((x) => pow(2, -x), "y=2^{-x}")], [-4, 3, -1, 9], { pts: [[0, 1, "$(0,1)$", "above right"], [1, 0.5, "$(1,\\tfrac12)$", "above right"]], hlines: [H(0, "asymptote $y=0$")], ylabel: "y" });

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/✓/g, "\\checkmark ").replace(/−/g, "-").replace(/⁴/g, "^{4}").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/½/g, "\\frac{1}{2}").replace(/¼/g, "\\frac{1}{4}").replace(/¾/g, "\\frac{3}{4}").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/(?<!\\)%/g, "\\%").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—→×÷✓²³⁴½¼¾−⟹]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/[–]/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/÷/g, "$\\div$").replace(/−/g, "-").replace(/⟹/g, "$\\Rightarrow$").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/⁴/g, "\\textsuperscript{4}").replace(/½/g, "$\\frac{1}{2}$").replace(/¼/g, "$\\frac{1}{4}$").replace(/¾/g, "$\\frac{3}{4}$").replace(/✓/g, "$\\checkmark$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@").replace(/\\,/g, "@TS@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ").replace(/@TS@/g, "\\,");
const hasLatex = (x) => /\\[a-zA-Z]|[\^_]/.test(x.replace(/@QQ@|@QD@|@NL@|@TS@/g, ""));
// Render a text segment that may contain SPARSE LaTeX: words stay text, math tokens become inline $...$ islands.
function textMath(x) {
  const isl = [];
  let y = x.replace(/\\text\{([^}]*)\}/g, "$1").replace(/\\mathrm\{([^}]*)\}/g, "$1").replace(/\\pounds\s*/g, "£");
  y = y.replace(/\\frac\{[^{}]*\}\{[^{}]*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\sqrt\{[^{}]*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\(approx|times|div|to|Rightarrow|leq|geq|le|ge|cdot|pm|infty|ne|propto|ln|log|sin|cos|tan)\b/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/[A-Za-z0-9.]+(?:\^|_)(?:\{[^{}]*\}|[A-Za-z0-9.]+)/g, (m) => `@I${isl.push(m) - 1}@`);
  y = escTxt(y);
  y = y.replace(/@I(\d+)@/g, (_, i) => "$" + ctl(isl[+i]) + "$");
  return y;
}
const seg = (x) => textMath(x);
function prose(s0) {
  const s = protect(s0);
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/gs;
  while ((m = re.exec(s))) { o += seg(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += seg(s.slice(last)); return restore(o);
}
const segD = (x) => textMath(x);
function ans(s0) {
  const s = protect(s0);
  if (s.includes("\\(") || hasLatex(s)) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/gs;
    while ((m = re.exec(s))) { o += segD(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += segD(s.slice(last)); return restore(o);
  }
  if (/[A-Za-z]{4,}/.test(s0) || /\b(or|and|vs)\b/i.test(s0)) return restore(escTxt(s));
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
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.62]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.62]{$${num(y)}$};\n`; }
  (spec.hlines || []).forEach((h) => { if (h.label && h.y >= Ya && h.y <= Yb) t += `\\node[right,scale=0.64,gray!55!black,fill=white,inner sep=1pt] at (${f(px(Xa) + 0.08)},${f(py(h.y) + 0.2)}) {${h.label}};\n`; });
  (spec.vlines || []).forEach((vl) => { if (vl.label && vl.x >= Xa && vl.x <= Xb) t += `\\node[scale=0.64,gray!55!black,fill=white,inner sep=1pt,rotate=90,anchor=south] at (${f(px(vl.x) + 0.16)},${f(py(Ya) + 0.4)}) {${vl.label}};\n`; });
  spec.cs.forEach((cv) => { const lp = cv.lp ? [px(cv.lp[0]), py(cv.lp[1])] : (cv._lv ? [px(cv._lv[0]), py(cv._lv[1])] : null); if (cv.label && lp) { const right = lp[0] > CW * 0.55; const anc = cv.lp ? "center" : (right ? "east" : "west"); const dx = cv.lp ? 0 : (right ? -0.08 : 0.08); t += `\\node[${cv._col},scale=0.68,anchor=${anc},inner sep=1pt] at (${f(lp[0] + dx)},${f(lp[1] - (cv.lp ? 0 : 0.18))}) {$${cv.label}$};\n`; } });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.68] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Using Logarithmic Graphs}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Exponentials and Logarithms (ref \\texttt{el6})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Using Logarithmic Graphs} questions, each with a
fully worked solution and a TikZ graph. For the log-linear methods the diagram shows the \\emph{straight line in the
transformed axes} (\\(\\log y\\) vs \\(\\log x\\), or \\(\\log y\\)/\\(\\ln y\\) vs \\(x\\)) with the gradient, intercept
and any data points marked, and crossovers for the comparison questions. For the sketching questions the actual
curve is drawn with its intercepts and asymptotes labelled.
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
    L += `\\small ${q.id <= "el6-070" ? "The linearised straight-line graph, with gradient, intercept and key points marked." : "The curve sketched with its intercepts and asymptote labelled."}\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
