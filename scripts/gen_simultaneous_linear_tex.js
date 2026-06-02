/* Generates Simultaneous_Equations_Linear.tex from ise2_Simultaneous_Equations_Linear.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise2_Simultaneous_Equations_Linear.ts");
const OUT = path.join(__dirname, "..", "Simultaneous_Equations_Linear.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const sqrt = Math.sqrt, S2 = sqrt(2), S6 = sqrt(6), S3 = sqrt(3), S13 = sqrt(13), S17 = sqrt(17), S41 = sqrt(41), S73 = sqrt(73);
const ln = (m, b) => (x) => m * x + b;                       // y = mx + b
const lc = (a, b, k) => (x) => (k - a * x) / b;              // ax + by = k
const hyp = (k) => (x) => k / x;                              // xy = k
const c = (fn, label, lp) => ({ fn, label, lp });
const cir = (cx, cy, r, label, lp) => ({ cx, cy, r, label, lp });
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], circles: o.circles, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y", equal: o.equal });

const D = {
  "ise2-001": G([c(lc(5, 2, 16), "5x+2y=16"), c(ln(1.5, 0), "3x-2y=0")], [-1, 5, -1, 6], { pts: [[2, 3, "$(2,3)$", "above left"]] }),
  "ise2-002": G([c(ln(-4, 14), "4x+y=14"), c(lc(2, -3, -8), "2x-3y=-8")], [-1, 5, -1, 7], { pts: [[17 / 7, 30 / 7, "$(\\frac{17}{7},\\frac{30}{7})$", "above left"]] }),
  "ise2-003": G([c(lc(3, 4, 10), "3x+4y=10"), c(lc(5, -2, 8), "5x-2y=8")], [-1, 5, -3, 5], { pts: [[2, 1, "$(2,1)$", "above left"]] }),
  "ise2-004": G([c(lc(7, -3, 11), "7x-3y=11"), c(lc(4, 5, 33), "4x+5y=33")], [-1, 6, -2, 7], { pts: [[154 / 47, 187 / 47, "$(3.28,3.98)$", "above left"]] }),
  "ise2-005": G([c(lc(2, 5, 19), "2x+5y=19"), c(ln(6, -1), "6x-y=1")], [-1, 3, -2, 8], { pts: [[0.75, 3.5, "$(\\frac34,\\frac72)$", "above left"]] }),
  "ise2-006": G([c(lc(5, 3, 7), "5x+3y=7"), c(ln(2, 8), "2x-y=-8")], [-4, 3, -2, 8], { pts: [[-17 / 11, 54 / 11, "$(-1.55,4.91)$", "above right"]] }),
  "ise2-007": G([c(lc(3, 2, 12), "3x+2y=12"), c(lc(1, -4, -4), "x-4y=-4")], [-1, 6, -1, 7], { pts: [[20 / 7, 12 / 7, "$(2.86,1.71)$", "above left"]] }),
  "ise2-008": G([c(lc(4, -3, -1), "4x-3y=-1"), c(ln(-3, 9), "3x+y=9")], [-1, 5, -2, 11], { pts: [[2, 3, "$(2,3)$", "above left"]] }),
  "ise2-009": G([c(ln(3, -1), "y=3x-1"), c(ln(-1, 7), "y=-x+7")], [-1, 5, -3, 9], { pts: [[2, 5, "$(2,5)$", "above left"]] }),
  "ise2-010": G([c(ln(-2, 10), "y=-2x+10"), c(ln(4, -2), "y=4x-2")], [-1, 5, -3, 13], { pts: [[2, 6, "$(2,6)$", "above left"]] }),
  "ise2-011": G([c(lc(3, -4, -1), "3x-4y+1=0"), c(lc(5, 2, 11), "5x+2y-11=0")], [-1, 4, -3, 6], { pts: [[21 / 13, 19 / 13, "$(1.62,1.46)$", "above left"]] }),
  "ise2-012": G([c(lc(2, 1, 8), "A", [0.3, 7]), c(ln(1, -1), "B", [4.5, 3.2]), c(lc(1, 3, 12), "C", [5, 2.0])], [0, 6, -1, 9], { pts: [[3, 2, "$(3,2)$", "below right"], [2.4, 3.2, "$(\\frac{12}{5},\\frac{16}{5})$", "above left"], [3.75, 2.75, "$(\\frac{15}{4},\\frac{11}{4})$", "above right"]] }),
  "ise2-013": G([c(ln(1, 3), "y=x+3"), c((x) => x * x - 3, "y=x^2-3")], [-4, 5, -4, 10], { pts: [[3, 6, "$(3,6)$", "above left"], [-2, 1, "$(-2,1)$", "above right"]] }),
  "ise2-014": G([c(ln(2, -1), "y=2x-1"), c((x) => x * x - 2 * x + 3, "y=x^2-2x+3")], [-1, 5, -2, 8], { pts: [[2, 3, "tangent $(2,3)$", "above left"]] }),
  "ise2-015": G([c(ln(-1, 5), "x+y=5")], [-5, 5, -5, 5], { circles: [cir(0, 0, sqrt(17), "x^2+y^2=17", [3.4, 3.4])], pts: [[1, 4, "$(1,4)$", "above right"], [4, 1, "$(4,1)$", "above right"]], equal: 1 }),
  "ise2-016": G([c(ln(3, -5), "y=3x-5")], [-6, 6, -6, 6], { circles: [cir(0, 0, 5, "x^2+y^2=25", [3.7, 3.7])], pts: [[0, -5, "$(0,-5)$", "below right"], [3, 4, "$(3,4)$", "above left"]], equal: 1 }),
  "ise2-017": G([c(ln(2, -1), "2x-y=1")], [-4, 4, -4, 4], { circles: [cir(0, 0, sqrt(10), "x^2+y^2=10", [2.4, 2.4])], pts: [[1.8, 2.6, "$(\\frac95,\\frac{13}{5})$", "above left"], [-1, -3, "$(-1,-3)$", "below right"]], equal: 1 }),
  "ise2-018": G([c((x) => x * x + 3 * x - 4, "y=x^2+3x-4"), c(ln(2, 2), "y=2x+2")], [-6, 4, -7, 10], { pts: [[-3, -4, "$(-3,-4)$", "below left"], [2, 6, "$(2,6)$", "above left"]] }),
  "ise2-019": G([c(ln(-0.5, 0), "x+2y=0")], [-8, 8, -8, 8], { circles: [cir(0, 0, sqrt(45), "x^2+y^2=45", [5, 5])], pts: [[-6, 3, "$(-6,3)$", "above left"], [6, -3, "$(6,-3)$", "below right"]], equal: 1 }),
  "ise2-020": G([c((x) => x * x - 5 * x + 4, "y=x^2-5x+4"), c(ln(1, -1), "y=x-1")], [-1, 7, -3, 8], { pts: [[1, 0, "$(1,0)$", "below left"], [5, 4, "$(5,4)$", "above left"]] }),
  "ise2-021": G([c(hyp(8), "xy=8"), c(ln(1, 2), "y-x=2")], [-8, 8, -8, 10], { pts: [[-4, -2, "$(-4,-2)$", "below right"], [2, 4, "$(2,4)$", "above left"]] }),
  "ise2-022": G([c((x) => 2 * x * x - x - 3, "y=2x^2-x-3"), c(ln(3, -1), "y=3x-1")], [-3, 4, -5, 12], { pts: [[1 + S2, 2 + 3 * S2, "$(1+\\sqrt2,\\dots)$", "above left"], [1 - S2, 2 - 3 * S2, "$(1-\\sqrt2,\\dots)$", "below right"]] }),
  "ise2-023": G([c(ln(3, 2), "3x-y+2=0"), c((x) => x * x + 2 * x - 1, "y=x^2+2x-1")], [-4, 4, -4, 12], { pts: [[(1 + S13) / 2, 3 * (1 + S13) / 2 + 2, "", "above left"], [(1 - S13) / 2, 3 * (1 - S13) / 2 + 2, "", "below right"]] }),
  "ise2-024": G([c(ln(2, -10), "y=2x-10")], [-6, 6, -6, 6], { circles: [cir(0, 0, sqrt(20), "x^2+y^2=20", [-3.2, 3.2])], pts: [[4, -2, "tangent $(4,-2)$", "above right"]], equal: 1 }),
  "ise2-025": G([c(ln(2, 5), "y=2x+5"), c((x) => x * x - x + 2, "y=x^2-x+2")], [-3, 5, -2, 16], { pts: [[(3 + sqrt(21)) / 2, 2 * (3 + sqrt(21)) / 2 + 5, "", "above left"], [(3 - sqrt(21)) / 2, 2 * (3 - sqrt(21)) / 2 + 5, "", "below right"]] }),
  "ise2-026": G([c(ln(4, -5), "y=4x-5"), c((x) => x * x + 2 * x + 3, "y=x^2+2x+3")], [-4, 5, -3, 18], { pts: [] }),
  "ise2-027": G([c(ln(6, -9), "y=6x-9"), c((x) => x * x + 3, "y=x^2+3")], [-2, 7, -2, 22], { pts: [] }),
  "ise2-028": G([c(ln(5, -4), "y=5x-4"), c((x) => x * x + 2 * x + 1, "y=(x+1)^2")], [-4, 4, -3, 16], { pts: [] }),
  "ise2-029": G([c((x) => x * x - 4 * x + 6, "y=x^2-4x+6"), c(ln(0, 2), "y=2", [4.5, 2]), c(ln(-8, 2), "y=-8x+2", [-1.5, 14])], [-5, 6, -2, 22], { pts: [[2, 2, "$(2,2)$", "below right"], [-2, 18, "$(-2,18)$", "above right"]] }),
  "ise2-030": G([c(ln(-1, 10), "x+y=10"), c(hyp(24), "xy=24")], [0, 12, 0, 12], { pts: [[4, 6, "$(4,6)$", "above right"], [6, 4, "$(6,4)$", "above right"]] }),
  "ise2-031": G([c(ln(-3, 7), "3x+y=7"), c((x) => x * x - 1, "x^2-y=1")], [-7, 4, -5, 12], { pts: [[(-3 + S41) / 2, 7 - 3 * (-3 + S41) / 2, "", "above left"], [(-3 - S41) / 2, 7 - 3 * (-3 - S41) / 2, "", "above right"]] }),
  "ise2-032": G([c(ln(-1, 13), "x+y=13"), c(hyp(42), "xy=42")], [0, 14, 0, 14], { pts: [[7, 6, "$(7,6)$", "above right"], [6, 7, "$(6,7)$", "above right"]] }),
  "ise2-033": G([c(ln(1, 2), "x-y=-2")], [-7, 7, -7, 7], { circles: [cir(0, 0, sqrt(34), "x^2+y^2=34", [4, 4])], pts: [[3, 5, "$(3,5)$", "above left"], [-5, -3, "$(-5,-3)$", "below right"]], equal: 1 }),
  "ise2-034": G([c((x) => x * x + 2 * x - 8, "y=x^2+2x-8"), c(ln(-3, 4), "y=4-3x")], [-9, 4, -12, 22], { pts: [[(-5 + S73) / 2, 4 - 3 * (-5 + S73) / 2, "", "below right"], [(-5 - S73) / 2, 4 - 3 * (-5 - S73) / 2, "", "above right"]] }),
  "ise2-035": G([c(ln(1, 2), "y=x+2")], [-9, 9, -9, 9], { circles: [cir(0, 0, sqrt(50), "x^2+y^2=50", [5, 5])], pts: [[-1 + 2 * S6, 1 + 2 * S6, "$(3.9,5.9)$", "above left"], [-1 - 2 * S6, 1 - 2 * S6, "$(-5.9,-3.9)$", "below right"], [-1, 1, "midpt $(-1,1)$", "above right"]], equal: 1 }),
  "ise2-036": G([c(lc(2, 1, 7), "2x+y=7"), c(ln(1, -2), "x-y=2")], [-1, 6, -3, 8], { pts: [[3, 1, "$(3,1)$", "above left"]] }),
  "ise2-037": G([c(lc(3, 2, 12), "3x+2y=12"), c(lc(1, 2, 8), "x+2y=8")], [-1, 6, -1, 7], { pts: [[2, 3, "$(2,3)$", "above left"]] }),
  "ise2-038": G([c(lc(4, -3, 5), "4x-3y=5"), c(lc(2, 3, 13), "2x+3y=13")], [-1, 6, -2, 6], { pts: [[3, 7 / 3, "$(3,\\frac73)$", "above left"]] }),
  "ise2-039": G([c(lc(5, 4, 22), "5x+4y=22"), c(lc(3, -4, 2), "3x-4y=2")], [-1, 6, -2, 6], { pts: [[3, 7 / 4, "$(3,\\frac74)$", "above left"]] }),
  "ise2-040": G([c(lc(1, 3, 10), "x+3y=10"), c(ln(2, -6), "2x-y=6")], [-1, 7, -3, 7], { pts: [[4, 2, "$(4,2)$", "above left"]] }),
  "ise2-041": G([c(ln(-0.5, 5), "\\frac{x}{2}+y=5"), c(ln(0.5, -2), "x-2y=4")], [-1, 10, -3, 7], { pts: [[7, 1.5, "$(7,\\frac32)$", "above left"]] }),
  "ise2-042": G([c(ln(-1, 20), "x+y=20"), c(ln(1, -6), "x-y=6")], [0, 22, 0, 22], { pts: [[13, 7, "$(13,7)$", "above right"]] }),
  "ise2-043": G([c(lc(3, 5, 21), "3x+5y=21"), c(lc(2, 3, 13), "2x+3y=13")], [-1, 8, -1, 6], { pts: [[2, 3, "$(2,3)$", "above left"]] }),
  "ise2-044": G([c(ln(-1, 50), "a+c=50"), c(lc(8, 5, 310), "8a+5c=310")], [0, 55, 0, 70], { pts: [[20, 30, "$(20,30)$", "above right"]], xlabel: "a", ylabel: "c" }),
  "ise2-045": G([c((x) => x * x, "y=x^2"), c(ln(2, 3), "y=2x+3")], [-3, 5, -2, 12], { pts: [[3, 9, "$(3,9)$", "above left"], [-1, 1, "$(-1,1)$", "above right"]] }),
  "ise2-046": G([c((x) => x * x - 4, "y=x^2-4"), c(ln(3, 0), "y=3x")], [-3, 6, -6, 14], { pts: [[4, 12, "$(4,12)$", "above left"], [-1, -3, "$(-1,-3)$", "below right"]] }),
  "ise2-047": G([c(ln(-1, 5), "x+y=5")], [-4, 5, -4, 5], { circles: [cir(0, 0, sqrt(13), "x^2+y^2=13", [2.6, 2.6])], pts: [[2, 3, "$(2,3)$", "above right"], [3, 2, "$(3,2)$", "above right"]], equal: 1 }),
  "ise2-048": G([c(lc(2, -3, 1), "2x-3y=1"), c(ln(-4, 15), "4x+y=15")], [-1, 5, -3, 8], { pts: [[23 / 7, 13 / 7, "$(3.29,1.86)$", "above left"]] }),
  "ise2-049": G([c((x) => x * x + 1, "y=x^2+1"), c(ln(-1, 5), "y=5-x")], [-4, 4, -1, 10], { pts: [[(-1 + S17) / 2, 5 - (-1 + S17) / 2, "", "above left"], [(-1 - S17) / 2, 5 - (-1 - S17) / 2, "", "above right"]] }),
  "ise2-050": G([c(ln(-1, 15), "x+y=15"), c(hyp(54), "xy=54")], [0, 16, 0, 16], { pts: [[6, 9, "$(6,9)$", "above right"], [9, 6, "$(9,6)$", "above right"]] }),
  "ise2-051": G([c(ln(1.5, -2), "3x-2y=4 \\;(=6x-4y=8)")], [-2, 6, -4, 6], { pts: [] }),
  "ise2-052": G([c(lc(2, 3, 7), "2x+3y=7", [4.5, -0.5]), c(lc(4, 6, 10), "4x+6y=10", [4.7, 0.6])], [-2, 6, -2, 5], { pts: [] }),
  "ise2-053": G([c((x) => 2 * x * x - 3, "y=2x^2-3"), c(ln(5, 0), "y=5x")], [-3, 5, -6, 18], { pts: [[-0.5, -2.5, "$(-\\frac12,-\\frac52)$", "below right"], [3, 15, "$(3,15)$", "above left"]] }),
  "ise2-054": G([c((x) => x * x, "y=x^2"), c(ln(2 * S3, -3), "y=2\\sqrt3 x-3", [2.4, 9]), c(ln(-2 * S3, -3), "y=-2\\sqrt3 x-3", [-2.4, 9])], [-4, 4, -2, 12], { pts: [[S3, 3, "$(\\sqrt3,3)$", "above left"], [-S3, 3, "$(-\\sqrt3,3)$", "above right"]] }),
  "ise2-055": G([c(ln(-0.5, 4), "x+2y=8"), c(hyp(6), "xy=6")], [0, 10, 0, 7], { pts: [[6, 1, "$(6,1)$", "above right"], [2, 3, "$(2,3)$", "above right"]] }),
  "ise2-056": G([c(lc(7, 2, 20), "7x+2y=20"), c(lc(3, 5, 21), "3x+5y=21")], [-1, 5, -2, 8], { pts: [[2, 3, "$(2,3)$", "above left"]] }),
  "ise2-057": G([c(ln(-1, 14), "W+L=14"), c(ln(1, 4), "L=W+4")], [0, 16, 0, 16], { pts: [[5, 9, "$(5,9)$", "above left"]], xlabel: "W", ylabel: "L" }),
  "ise2-058": G([c((x) => x * x - 2 * x, "y=x^2-2x"), c(ln(-1, 4), "y=4-x")], [-4, 5, -3, 10], { pts: [[(1 + S17) / 2, 4 - (1 + S17) / 2, "", "below right"], [(1 - S17) / 2, 4 - (1 - S17) / 2, "", "above right"]] }),
  "ise2-059": G([c(ln(-4 / 3, 4), "\\frac{x}{3}+\\frac{y}{4}=1"), c(ln(1.5, -3), "\\frac{x}{2}-\\frac{y}{3}=1")], [-1, 6, -4, 6], { pts: [[42 / 17, 12 / 17, "$(2.47,0.71)$", "above right"]] }),
  "ise2-060": G([c((x) => x * x + 2 * x - 5, "y=x^2+2x-5"), c(ln(2, 3), "y=2x+3")], [-5, 5, -7, 12], { pts: [[2 * S2, 4 * S2 + 3, "", "above left"], [-2 * S2, 3 - 4 * S2, "", "below right"]] }),
  "ise2-061": G([c(lc(5, -2, 11), "5x-2y=11"), c(lc(3, 4, 1), "3x+4y=1")], [-2, 5, -4, 4], { pts: [[23 / 13, -14 / 13, "$(1.77,-1.08)$", "above right"]] }),
  "ise2-062": G([c((x) => x * x + 2, "y=x^2+2"), c(ln(2, 1), "y=2x+1", [2.3, 8]), c(ln(-2, 1), "y=-2x+1", [-2.3, 8])], [-4, 4, -1, 10], { pts: [[1, 3, "$(1,3)$", "above left"], [-1, 3, "$(-1,3)$", "above right"]] }),
  "ise2-063": G([c(ln(1, 1), "y=x+1")], [-6, 6, -6, 6], { circles: [cir(0, 0, 5, "x^2+y^2=25", [3.7, 3.7])], pts: [[-4, -3, "$(-4,-3)$", "below right"], [3, 4, "$(3,4)$", "above left"]], equal: 1 }),
  "ise2-064": G([c(lc(3, 2, 9.5), "3c+2t=9.5"), c(lc(2, 3, 8.5), "2c+3t=8.5")], [0, 5, 0, 5], { pts: [[2.3, 1.3, "$(2.30,1.30)$", "above right"]], xlabel: "c", ylabel: "t" }),
  "ise2-065": G([c((x) => x * x - 3 * x + 2, "y=x^2-3x+2"), c(ln(1, -1), "y=x-1")], [-1, 5, -2, 6], { pts: [[1, 0, "$(1,0)$", "below left"], [3, 2, "$(3,2)$", "above left"]] }),
  "ise2-066": G([c(ln(1, -2), "x-y=2"), c((x) => sqrt(x * x - 12), "x^2-y^2=12"), c((x) => -sqrt(x * x - 12), "")], [-8, 8, -8, 8], { pts: [[4, 2, "$(4,2)$", "above left"]], equal: 1 }),
  "ise2-067": G([c((x) => 4 - x * x, "y=4-x^2"), c(ln(-2, 4), "y=4-2x")], [-3, 4, -4, 6], { pts: [[0, 4, "$(0,4)$", "above right"], [2, 0, "$(2,0)$", "below right"]] }),
  "ise2-069": G([c((x) => x * x, "y=x^2"), c(ln(-1, 6), "x+y=6")], [-5, 4, -2, 12], { pts: [[2, 4, "$(2,4)$", "above left"], [-3, 9, "$(-3,9)$", "above right"]] }),
  "ise2-070": G([c((x) => x * x + 3, "y=x^2+3"), c(ln(2, 2), "y=2x+2", [3.2, 9])], [-3, 5, -1, 15], { pts: [[1, 4, "tangent $(1,4)$", "above left"]] }),
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

\\title{\\textbf{Simultaneous Equations (Linear)}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Simultaneous Equations (ref \\texttt{ise2})}
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
