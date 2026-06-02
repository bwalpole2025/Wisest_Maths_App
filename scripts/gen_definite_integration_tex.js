/* Generates Definite_Integration.tex from i2_definite_integration.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Integration/i2_definite_integration.ts");
const OUT = path.join(__dirname, "..", "Definite_Integration.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const sqrt = Math.sqrt, cbrt = Math.cbrt, S37 = sqrt(37);
const c = (fn, label, lp) => ({ fn, label, lp });
const R = (fn, a, b, col, lo) => ({ fn, a, b, col, lo: lo || null });   // shaded region (col: pos|neg|btw); lo=lower curve (default x-axis)
const V = (x, label) => ({ x, label });
const G = (cs, win, o = {}) => ({ cs, win, shade: o.shade || [], lims: o.lims || [], pts: o.pts || [], xlabel: o.xlabel || "x", ylabel: o.ylabel || "y" });

const D = {
  "i2-001": G([c((x) => 2 * x + 5, "y=2x+5")], [-0.5, 4, -1, 14], { shade: [R((x) => 2 * x + 5, 1, 3, "pos")], lims: [V(1, "1"), V(3, "3")] }),
  "i2-002": G([c((x) => 3 * x * x - 4 * x + 1, "y=3x^2-4x+1")], [-0.5, 2.5, -1.5, 6], { shade: [R((x) => 3 * x * x - 4 * x + 1, 0, 1 / 3, "pos"), R((x) => 3 * x * x - 4 * x + 1, 1 / 3, 1, "neg"), R((x) => 3 * x * x - 4 * x + 1, 1, 2, "pos")], lims: [V(0, "0"), V(2, "2")] }),
  "i2-003": G([c((x) => sqrt(x), "y=\\sqrt x")], [0, 5, 0, 3], { shade: [R((x) => sqrt(x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-004": G([c((x) => 4 / (x * x), "y=\\frac{4}{x^2}")], [0, 3, 0, 5], { shade: [R((x) => 4 / (x * x), 1, 2, "pos")], lims: [V(1, "1"), V(2, "2")] }),
  "i2-005": G([c((x) => x * x + 3, "y=x^2+3")], [-2, 3, 0, 8], { shade: [R((x) => x * x + 3, -1, 2, "pos")], lims: [V(-1, "-1"), V(2, "2")] }),
  "i2-006": G([c((x) => 4 * x ** 3 - 6 * x, "y=4x^3-6x")], [-0.3, 3.2, -6, 95], { shade: [R((x) => 4 * x ** 3 - 6 * x, 0, sqrt(1.5), "neg"), R((x) => 4 * x ** 3 - 6 * x, sqrt(1.5), 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-007": G([c((x) => x + 1 / sqrt(x), "y=x+\\frac{1}{\\sqrt x}")], [0, 5, 0, 6], { shade: [R((x) => x + 1 / sqrt(x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-008": G([c((x) => (x + 2) * (x - 1), "y=(x+2)(x-1)")], [-0.5, 3.5, -3, 10], { shade: [R((x) => (x + 2) * (x - 1), 0, 1, "neg"), R((x) => (x + 2) * (x - 1), 1, 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-009": G([c((x) => 2 * x ** 3 - 3 * x * x, "y=2x^3-3x^2")], [0.5, 2.5, -2, 5], { shade: [R((x) => 2 * x ** 3 - 3 * x * x, 1, 1.5, "neg"), R((x) => 2 * x ** 3 - 3 * x * x, 1.5, 2, "pos")], lims: [V(1, "1"), V(2, "2")] }),
  "i2-010": G([c((x) => (2 * x + 1) ** 2, "y=(2x+1)^2")], [0, 3.5, 0, 52], { shade: [R((x) => (2 * x + 1) ** 2, 1, 3, "pos")], lims: [V(1, "1"), V(3, "3")] }),
  "i2-011": G([c((x) => 6 * x * x + 2, "y=6x^2+2")], [-0.3, 2.8, 0, 28], { shade: [R((x) => 6 * x * x + 2, 0, 2, "pos")], lims: [V(0, "0"), V(2, "a=2")] }),
  "i2-012": G([c((x) => 4 * x + 3, "y=4x+3")], [-0.3, 3, 0, 14], { shade: [R((x) => 4 * x + 3, 0, 2, "pos")], lims: [V(0, "0"), V(2, "a=2")] }),
  "i2-013": G([c((x) => 2 * x + 2, "y=2x+2")], [-0.3, 4, 0, 10], { shade: [R((x) => 2 * x + 2, 1, 3, "pos")], lims: [V(1, "1"), V(3, "3")] }),
  "i2-014": G([c((x) => x * x + (5 / 3) * x, "y=x^2+\\frac53x")], [-0.3, 2.5, 0, 9], { shade: [R((x) => x * x + (5 / 3) * x, 0, 2, "pos")], lims: [V(0, "0"), V(2, "2")] }),
  "i2-015": G([c((x) => (x + (-3 + S37) / 2) ** 2, "y=(x+A)^2")], [-0.3, 3.3, 0, 24], { shade: [R((x) => (x + (-3 + S37) / 2) ** 2, 0, 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-016": G([c((x) => x * x, "y=x^2")], [-0.3, 3.3, 0, 10], { shade: [R((x) => x * x, 0, 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-017": G([c((x) => 3 * x * x + 1, "y=3x^2+1")], [0, 4.5, 0, 50], { shade: [R((x) => 3 * x * x + 1, 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-018": G([c((x) => sqrt(x), "y=\\sqrt x")], [0, 10, 0, 3.5], { shade: [R((x) => sqrt(x), 1, 9, "pos")], lims: [V(1, "1"), V(9, "9")] }),
  "i2-019": G([c((x) => x * x - 4, "y=x^2-4")], [-3, 3, -5, 3], { shade: [R((x) => x * x - 4, -2, 2, "neg")], lims: [V(-2, "-2"), V(2, "2")], pts: [[-2, 0, "", "above"], [2, 0, "", "above"]] }),
  "i2-020": G([c((x) => (x - 1) * (x - 3), "y=(x-1)(x-3)")], [0, 4, -2, 4], { shade: [R((x) => (x - 1) * (x - 3), 1, 3, "neg")], lims: [V(1, "1"), V(3, "3")] }),
  "i2-021": G([c((x) => x * (x - 2) * (x + 1), "y=x(x-2)(x+1)")], [-0.5, 2.5, -3, 3], { shade: [R((x) => x * (x - 2) * (x + 1), 0, 2, "neg")], lims: [V(0, "0"), V(2, "2")] }),
  "i2-022": G([c((x) => x ** 3 - x, "y=x^3-x")], [-1.3, 1.3, -1, 1], { shade: [R((x) => x ** 3 - x, -1, 0, "pos"), R((x) => x ** 3 - x, 0, 1, "neg")], lims: [V(-1, "-1"), V(0, "0"), V(1, "1")] }),
  "i2-023": G([c((x) => x * x - 1, "y=x^2-1")], [-2.5, 2.5, -2, 4], { shade: [R((x) => x * x - 1, -2, -1, "pos"), R((x) => x * x - 1, -1, 1, "neg"), R((x) => x * x - 1, 1, 2, "pos")], lims: [V(-2, "-2"), V(2, "2")] }),
  "i2-024": G([c((x) => 4 - x * x, "y=4-x^2")], [-3, 3, -1, 5], { shade: [R((x) => 4 - x * x, -2, 2, "pos")], lims: [V(-2, "-2"), V(2, "2")] }),
  "i2-025": G([c((x) => (x + 1) * (3 - x), "y=(x+1)(3-x)")], [-2, 4, -1, 5], { shade: [R((x) => (x + 1) * (3 - x), -1, 3, "pos")], lims: [V(-1, "-1"), V(3, "3")] }),
  "i2-026": G([c((x) => x ** 3 - 4 * x, "y=x^3-4x")], [-2.5, 2.5, -4, 4], { shade: [R((x) => x ** 3 - 4 * x, -2, 0, "pos"), R((x) => x ** 3 - 4 * x, 0, 2, "neg")], lims: [V(-2, "-2"), V(0, "0"), V(2, "2")] }),
  "i2-027": G([c((x) => 1 / (x * x), "y=\\frac{1}{x^2}")], [0, 3.5, 0, 1.3], { shade: [R((x) => 1 / (x * x), 1, 3, "pos")], lims: [V(1, "1"), V(3, "3")] }),
  "i2-028": G([c((x) => 2 * x - x * x, "y=2x-x^2")], [-0.3, 2.3, -0.3, 1.3], { shade: [R((x) => 2 * x - x * x, 0, 1, "pos")], lims: [V(0, "0"), V(1, "1")] }),
  "i2-029": G([c((x) => 6 * x - x * x, "v=6t-t^2")], [-0.3, 6.5, -0.5, 11], { shade: [R((x) => 6 * x - x * x, 0, 6, "pos")], lims: [V(0, "0"), V(3, "3"), V(6, "6")], xlabel: "t", ylabel: "v" }),
  "i2-030": G([c((x) => x * x - 5 * x + 4, "v=t^2-5t+4")], [-0.3, 4.5, -3, 5], { shade: [R((x) => x * x - 5 * x + 4, 0, 1, "pos"), R((x) => x * x - 5 * x + 4, 1, 4, "neg")], lims: [V(0, "0"), V(1, "1"), V(4, "4")], xlabel: "t", ylabel: "v" }),
  "i2-031": G([c((x) => sqrt(x) - 1, "y=\\sqrt x-1")], [0, 10, -1, 3], { shade: [R((x) => sqrt(x) - 1, 4, 9, "pos")], lims: [V(4, "4"), V(9, "9")] }),
  "i2-032": G([c((x) => (3 * x * x + 2) / sqrt(x), "y=\\frac{3x^2+2}{\\sqrt x}")], [0, 4.5, 0, 28], { shade: [R((x) => (3 * x * x + 2) / sqrt(x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-033": G([c((x) => x * x - 2 * x, "y=x^2-2x")], [-0.5, 2.5, -2, 3], { shade: [R((x) => x * x - 2 * x, 0, 2, "neg")], lims: [V(0, "0"), V(2, "2")], pts: [[0, 0, "$(0,0)$", "above left"], [2, 0, "$(2,0)$", "above right"]] }),
  "i2-034": G([c((x) => 3 * x * x - 12 * x, "y=3x^2-12x")], [-0.5, 4.5, -14, 4], { shade: [R((x) => 3 * x * x - 12 * x, 0, 4, "neg")], lims: [V(0, "0"), V(4, "a=4")] }),
  "i2-035": G([c((x) => x ** 3 - 6 * x * x + 9 * x, "y=x^3-6x^2+9x")], [-0.3, 3.5, 0, 5], { shade: [R((x) => x ** 3 - 6 * x * x + 9 * x, 0, 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-036": G([c((x) => 3 * x * x, "y=3x^2")], [0, 4.5, 0, 50], { shade: [R((x) => 3 * x * x, 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-037": G([c((x) => 4 * x - 1, "y=4x-1")], [-0.3, 3.3, -2, 12], { shade: [R((x) => 4 * x - 1, 0, 0.25, "neg"), R((x) => 4 * x - 1, 0.25, 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-038": G([c((x) => 6 * x, "y=6x")], [0, 5.5, 0, 32], { shade: [R((x) => 6 * x, 2, 5, "pos")], lims: [V(2, "2"), V(5, "5")] }),
  "i2-039": G([c((x) => x * x + 3, "y=x^2+3")], [-2, 3, 0, 8], { shade: [R((x) => x * x + 3, -1, 2, "pos")], lims: [V(-1, "-1"), V(2, "2")] }),
  "i2-040": G([c((x) => 5 * x ** 4 + 2 * x, "y=5x^4+2x")], [-0.2, 1.3, 0, 8], { shade: [R((x) => 5 * x ** 4 + 2 * x, 0, 1, "pos")], lims: [V(0, "0"), V(1, "1")] }),
  "i2-041": G([c((x) => 2 * sqrt(x), "y=2\\sqrt x")], [0, 4.5, 0, 5], { shade: [R((x) => 2 * sqrt(x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-042": G([c((x) => 4 / (x * x), "y=\\frac{4}{x^2}")], [0, 3.5, 0, 5], { shade: [R((x) => 4 / (x * x), 1, 3, "pos")], lims: [V(1, "1"), V(3, "3")] }),
  "i2-043": G([c((x) => x * x + 1, "y=x^2+1")], [-0.3, 3.3, 0, 11], { shade: [R((x) => x * x + 1, 0, 3, "pos")], lims: [V(0, "0"), V(3, "3")] }),
  "i2-044": G([c((x) => 6 * x - x * x, "y=6x-x^2")], [-0.5, 6.5, -0.5, 11], { shade: [R((x) => 6 * x - x * x, 0, 6, "pos")], lims: [V(0, "0"), V(6, "6")] }),
  "i2-045": G([c((x) => 3 * x * x - 2 * x, "y=3x^2-2x")], [-2.5, 1.5, -3, 16], { shade: [R((x) => 3 * x * x - 2 * x, -2, 0, "pos"), R((x) => 3 * x * x - 2 * x, 0, 2 / 3, "neg"), R((x) => 3 * x * x - 2 * x, 2 / 3, 1, "pos")], lims: [V(-2, "-2"), V(1, "1")] }),
  "i2-046": G([c((x) => 3 / sqrt(x), "y=\\frac{3}{\\sqrt x}")], [0, 10, 0, 3.5], { shade: [R((x) => 3 / sqrt(x), 1, 9, "pos")], lims: [V(1, "1"), V(9, "9")] }),
  "i2-047": G([c((x) => 4 - x * x, "y=4-x^2")], [-3, 3, -1, 5], { shade: [R((x) => 4 - x * x, -2, 2, "pos")], lims: [V(-2, "-2"), V(2, "2")] }),
  "i2-048": G([c((x) => x * (x + 3), "y=x(x+3)")], [-0.3, 2.5, 0, 11], { shade: [R((x) => x * (x + 3), 0, 2, "pos")], lims: [V(0, "0"), V(2, "2")] }),
  "i2-049": G([c((x) => x + 1 / (x * x), "y=x+\\frac{1}{x^2}")], [0, 4.5, 0, 6], { shade: [R((x) => x + 1 / (x * x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-050": G([c((x) => (2 * x + 1) ** 2, "y=(2x+1)^2")], [-0.3, 1.3, 0, 10], { shade: [R((x) => (2 * x + 1) ** 2, 0, 1, "pos")], lims: [V(0, "0"), V(1, "1")] }),
  "i2-051": G([c((x) => x * x - 4 * x, "y=x^2-4x")], [-0.5, 4.5, -5, 4], { shade: [R((x) => x * x - 4 * x, 0, 4, "neg")], lims: [V(0, "0"), V(4, "4")] }),
  "i2-052": G([c((x) => 2 / cbrt(x), "y=\\frac{2}{\\sqrt[3]{x}}")], [0, 9, 0, 2.5], { shade: [R((x) => 2 / cbrt(x), 1, 8, "pos")], lims: [V(1, "1"), V(8, "8")] }),
  "i2-053": G([c((x) => sqrt(x), "y=\\sqrt x")], [0, 10, 0, 3.5], { shade: [R((x) => sqrt(x), 0, 9, "pos")], lims: [V(9, "9")] }),
  "i2-054": G([c((x) => (x - 1) * (x + 2), "y=(x-1)(x+2)")], [-2, 4, -3, 10], { shade: [R((x) => (x - 1) * (x + 2), -1, 1, "neg"), R((x) => (x - 1) * (x + 2), 1, 3, "pos")], lims: [V(-1, "-1"), V(3, "3")] }),
  "i2-055": G([c((x) => (x * x + 1) / sqrt(x), "y=\\frac{x^2+1}{\\sqrt x}")], [0, 4.5, 0, 9], { shade: [R((x) => (x * x + 1) / sqrt(x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-056": G([c((x) => 2 * x, "y=2x")], [-0.3, 5, 0, 10], { shade: [R((x) => 2 * x, 0, 3 * sqrt(2), "pos")], lims: [V(0, "0"), V(3 * sqrt(2), "k")] }),
  "i2-057": G([c((x) => 3 * x * x, "y=3x^2")], [0, 3.5, 0, 30], { shade: [R((x) => 3 * x * x, 1, 3, "pos")], lims: [V(1, "1"), V(3, "k=3")] }),
  "i2-058": G([c((x) => x * x, "y=x^2"), c(() => 4, "y=4", [-2.4, 4])], [-3, 3, -1, 5], { shade: [R(() => 4, -2, 2, "btw", (x) => x * x)], lims: [V(-2, "-2"), V(2, "2")], pts: [[-2, 4, "", "above"], [2, 4, "", "above"]] }),
  "i2-059": G([c((x) => x * x, "y=x^2"), c((x) => x, "y=x", [1.2, 1.2])], [-0.5, 1.5, -0.3, 1.3], { shade: [R((x) => x, 0, 1, "btw", (x) => x * x)], lims: [V(0, "0"), V(1, "1")], pts: [[1, 1, "", "above"]] }),
  "i2-060": G([c((x) => sqrt(x) - 1 / sqrt(x), "y=\\sqrt x-\\frac{1}{\\sqrt x}")], [0, 4.5, -1, 2], { shade: [R((x) => sqrt(x) - 1 / sqrt(x), 1, 4, "pos")], lims: [V(1, "1"), V(4, "4")] }),
  "i2-061": G([c((x) => 3 * x * x + 2 * x + 1, "y=3x^2+2x+1")], [-0.3, 2.5, 0, 18], { shade: [R((x) => 3 * x * x + 2 * x + 1, 0, 2, "pos")], lims: [V(0, "0"), V(2, "2")] }),
  "i2-062": G([c((x) => x ** 3 - 4 * x, "y=x^3-4x")], [-0.3, 2.5, -4, 2], { shade: [R((x) => x ** 3 - 4 * x, 0, 2, "neg")], lims: [V(0, "0"), V(2, "2")] }),
  "i2-063": G([c((x) => x * x + 1, "y=x^2+1")], [0, 2.5, 0, 6], { shade: [R((x) => x * x + 1, 1, 2, "pos")], lims: [V(1, "1"), V(2, "2")] }),
  "i2-064": G([c((x) => 6 - x * x, "y=6-x^2"), c(() => 2, "y=2", [-2.4, 2])], [-3, 3, 0, 7], { shade: [R((x) => 6 - x * x, -2, 2, "btw", () => 2)], lims: [V(-2, "-2"), V(2, "2")], pts: [[-2, 2, "", "below"], [2, 2, "", "below"]] }),
  "i2-065": G([c((x) => 3 * x * x, "y=3x^2")], [-0.3, 2.5, 0, 14], { shade: [R((x) => 3 * x * x, 0, 2, "pos")], lims: [V(0, "0"), V(2, "a=2")] }),
  "i2-066": G([c((x) => x * x, "y=x^2"), c((x) => 2 * x, "y=2x", [2.2, 4.4])], [-0.5, 2.5, -0.3, 5], { shade: [R((x) => 2 * x, 0, 2, "btw", (x) => x * x)], lims: [V(0, "0"), V(2, "2")], pts: [[2, 4, "", "above"]] }),
  "i2-067": G([c((x) => 3 * sqrt(x) - 2, "y=3\\sqrt x-2")], [-0.3, 4.5, -2.5, 5], { shade: [R((x) => 3 * sqrt(x) - 2, 0, 4 / 9, "neg"), R((x) => 3 * sqrt(x) - 2, 4 / 9, 4, "pos")], lims: [V(0, "0"), V(4, "4")] }),
  "i2-068": G([c((x) => (x + 1) * (x - 2), "y=(x+1)(x-2)")], [-2, 3, -3, 3], { shade: [R((x) => (x + 1) * (x - 2), -1, 2, "neg")], lims: [V(-1, "-1"), V(2, "2")] }),
  "i2-069": G([c((x) => x * x - 1, "y=x^2-1"), c(() => 3, "y=3", [-2.4, 3])], [-3, 3, -2, 4], { shade: [R(() => 3, -2, 2, "btw", (x) => x * x - 1)], lims: [V(-2, "-2"), V(2, "2")], pts: [[-2, 3, "", "above"], [2, 3, "", "above"]] }),
  "i2-070": G([c((x) => x * x + 2, "y=x^2+2")], [0, 3.5, 0, 12], { shade: [R((x) => x * x + 2, 1, 3, "pos")], lims: [V(1, "1"), V(3, "3")] }),
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
  y = y.replace(/\\sqrt(\[[^\]]*\])?\{(?:[^{}]|\{[^{}]*\})*\}/g, (m) => `@I${isl.push(m) - 1}@`);
  y = y.replace(/\\(approx|times|div|to|Rightarrow|leq|geq|le|ge|cdot|pm|mp|infty|ne|neq|in|cup|cap|propto|ln|log|int)\b/g, (m) => `@I${isl.push(m) - 1}@`);
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
const PAL = ["blue!72!black", "red!70!black"];
const FILL = { pos: "green!22", neg: "orange!32", btw: "blue!15" };
const PTC = "red!75!black";

function defgraph(spec) {
  const CW = 8.2;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const CH = 5.8;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span, cl = (y) => Math.max(ylo, Math.min(yhi, y));
  const num = (v) => Number((Math.round(v * 100) / 100).toFixed(2)).toString();
  let t = "\\begin{tikzpicture}[>={Stealth[length=2.2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!14] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  // shaded regions
  (spec.shade || []).forEach((rg) => {
    const M = 140, top = [], bot = [];
    for (let i = 0; i <= M; i++) { const x = rg.a + (rg.b - rg.a) * (i / M); top.push(`(${f(px(x))},${f(py(cl(rg.fn(x))))})`); }
    if (rg.lo) { for (let i = M; i >= 0; i--) { const x = rg.a + (rg.b - rg.a) * (i / M); bot.push(`(${f(px(x))},${f(py(cl(rg.lo(x))))})`); } }
    else { bot.push(`(${f(px(rg.b))},${f(py(0))})`, `(${f(px(rg.a))},${f(py(0))})`); }
    t += `\\fill[${FILL[rg.col]}] ${top.concat(bot).join(" -- ")} -- cycle;\n`;
  });
  // limit lines (dashed verticals)
  (spec.lims || []).forEach((vl) => { t += `\\draw[gray!60,dashed] (${f(px(vl.x))},${f(py(Ya))}) -- (${f(px(vl.x))},${f(py(Yb))});\n`; });
  // curves
  spec.cs.forEach((cv, ci) => {
    const col = PAL[ci % PAL.length], N = 360, segs = [[]]; let best = null;
    for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = cv.fn(x); if (!isFinite(y)) { if (segs[segs.length - 1].length) segs.push([]); continue; } segs[segs.length - 1].push(`(${f(px(x))},${f(py(cl(y)))})`); if (y >= Ya && y <= Yb && (!best || y > best[1])) best = [x, y]; }
    segs.forEach((sg) => { if (sg.length > 1) t += `\\draw[${col},thick] ${sg.join(" -- ")};\n`; });
    cv._col = col; cv._lv = best;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.58]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.58]{$${num(y)}$};\n`; }
  // limit labels (below axis, coloured)
  (spec.lims || []).forEach((vl) => { if (vl.label) t += `\\node[below,scale=0.66,orange!60!black,fill=white,inner sep=0.5pt] at (${f(px(vl.x))},${f(py(ay0) - 0.18)}) {$${vl.label}$};\n`; });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.66] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
  spec.cs.forEach((cv) => { const lp = cv.lp ? [px(cv.lp[0]), py(cv.lp[1])] : (cv._lv ? [px(cv._lv[0]), py(cv._lv[1])] : null); if (cv.label && lp) { const right = lp[0] > CW * 0.55; const anc = cv.lp ? "center" : (right ? "east" : "west"); const dx = cv.lp ? 0 : (right ? -0.08 : 0.08); t += `\\node[${cv._col},scale=0.68,anchor=${anc},inner sep=1pt] at (${f(lp[0] + dx)},${f(lp[1] - (cv.lp ? 0 : 0.2))}) {$${cv.label}$};\n`; } });
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

\\title{\\textbf{Definite Integration}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Integration (ref \\texttt{i2})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Definite Integration} questions, each with a
fully worked solution and a TikZ graph. A definite integral measures the signed area between the curve and the
\\(x\\)-axis over the given limits, so each diagram shades that region: \\textcolor{green!55!black}{green} where the
curve is above the axis and \\textcolor{orange!80!black}{orange} where it is below (illustrating signed vs total
area), with \\textcolor{blue!60!black}{blue} for the area trapped between two curves. The integration limits are
shown as dashed lines.
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
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${defgraph(D[q.id])}\n\\end{center}\n`;
    L += `\\small The integral as the shaded (signed) area between the curve and the \\(x\\)-axis over the limits.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
