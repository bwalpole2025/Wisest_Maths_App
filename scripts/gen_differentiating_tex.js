/* Generates Differentiating_y_equals_fx.tex from d2_differentiating_curves.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Differentiation/d2_differentiating_curves.ts");
const OUT = path.join(__dirname, "..", "Differentiating_y_equals_fx.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const CURVE = "blue!70!black", DERIV = "teal!70!black", TAN = "orange!85!black", NORM = "purple!75!black", PT = "red!75!black";
const C = (fn, color, label, dom) => ({ fn, color: color || CURVE, label, dom });
const T = (p, m) => ({ p, m });
const cb = Math.cbrt;

// spec: {cs:[{fn,color,label,dom}], tangents:[{p,m}], normals:[{p,m}|{p,vertical}], pts:[[x,y,label,anchor]], win, xlabel,ylabel}
const D = {
  // function + derivative (pure differentiation)
  "d2-001": { cs: [C((x) => x ** 5, CURVE, "f"), C((x) => 5 * x ** 4, DERIV, "f'")], win: [-2, 2, -14, 16] },
  "d2-002": { cs: [C((x) => x ** 7, CURVE, "f"), C((x) => 7 * x ** 6, DERIV, "f'")], win: [-1.5, 1.5, -8, 9] },
  "d2-003": { cs: [C((x) => 6 * x ** 4, CURVE, "f"), C((x) => 24 * x ** 3, DERIV, "f'")], win: [-2, 2, -12, 40] },
  "d2-004": { cs: [C((x) => Math.sqrt(x), CURVE, "f", [0, 5]), C((x) => 1 / (2 * Math.sqrt(x)), DERIV, "f'", [0.04, 5])], win: [0, 5, 0, 3.2] },
  "d2-005": { cs: [C((x) => 1 / x ** 3, CURVE, "f", [0.45, 3]), C((x) => -3 / x ** 4, DERIV, "f'", [0.45, 3])], win: [0, 3, -4, 10] },
  "d2-006": { cs: [C((x) => 5 * x ** 3 - 4 * x * x + 7 * x - 2, CURVE, "f"), C((x) => 15 * x * x - 8 * x + 7, DERIV, "f'")], win: [-2, 3, -30, 45] },
  "d2-007": { cs: [C((x) => 2 * x ** 4 - 9 * x * x + 1, CURVE, "f"), C((x) => 8 * x ** 3 - 18 * x, DERIV, "f'")], win: [-2.5, 2.5, -16, 16] },
  "d2-008": { cs: [C((x) => 3 / (x * x) + 5 * x, CURVE, "f", [0.3, 4]), C((x) => -6 / x ** 3 + 5, DERIV, "f'", [0.3, 4])], win: [0, 4, -5, 25] },
  "d2-009": { cs: [C((x) => x * (x - 3) ** 2, CURVE, "f"), C((x) => 3 * x * x - 12 * x + 9, DERIV, "f'")], win: [-1, 5, -10, 15] },
  "d2-010": { cs: [C((x) => (2 * x + 1) * (x - 4), CURVE, "f"), C((x) => 4 * x - 7, DERIV, "f'")], win: [-2, 5, -12, 10] },
  "d2-011": { cs: [C((x) => x * x + 4, CURVE, "f"), C((x) => 2 * x, DERIV, "f'")], win: [-3, 3, -3, 14] },
  "d2-012": { cs: [C((x) => x * x - 3, CURVE, "f"), C((x) => 2 * x, DERIV, "f'")], win: [-3, 3, -5, 8] },
  "d2-013": { cs: [C((x) => 4 * Math.sqrt(x) - 2 / x, CURVE, "f", [0.3, 5]), C((x) => 2 / Math.sqrt(x) + 2 / (x * x), DERIV, "f'", [0.3, 5])], win: [0, 5, -4, 11] },
  "d2-025": { cs: [C((x) => x * x - 5 * x + 2, CURVE, "f"), C((x) => 2 * x - 5, DERIV, "f'")], win: [-1, 6, -6, 8] },
  "d2-026": { cs: [C((x) => 3 * x ** 2.5 + Math.sqrt(x), CURVE, "f", [0, 3]), C((x) => 7.5 * x ** 1.5 + 1 / (2 * Math.sqrt(x)), DERIV, "f'", [0.04, 3])], win: [0, 3, 0, 45] },
  "d2-027": { cs: [C((x) => (3 * x - 1) ** 2, CURVE, "f"), C((x) => 18 * x - 6, DERIV, "f'")], win: [-1, 2, -4, 30] },
  "d2-029": { cs: [C((x) => Math.sqrt(x) * (x - 4), CURVE, "f", [0, 6]), C((x) => 1.5 * Math.sqrt(x) - 2 / Math.sqrt(x), DERIV, "f'", [0.06, 6])], win: [0, 6, -6, 12] },
  "d2-036": { cs: [C((x) => 5 / (x * x), CURVE, "f", [0.45, 4]), C((x) => -10 / x ** 3, DERIV, "f'", [0.45, 4])], win: [0, 4, -3, 22] },
  "d2-037": { cs: [C((x) => 2 / Math.sqrt(x), CURVE, "f", [0.2, 4]), C((x) => -1 / (x * Math.sqrt(x)), DERIV, "f'", [0.2, 4])], win: [0, 4, -4, 6] },
  "d2-038": { cs: [C((x) => 3 * cb(x), CURVE, "f", [0, 5]), C((x) => 1 / cb(x * x), DERIV, "f'", [0.05, 5])], win: [0, 5, 0, 6] },
  "d2-039": { cs: [C((x) => 6 * x ** (2 / 3) - 4 / x, CURVE, "f", [0.2, 4]), C((x) => 4 / cb(x) + 4 / (x * x), DERIV, "f'", [0.2, 4])], win: [0, 4, -8, 20] },
  "d2-040": { cs: [C((x) => (x * x + 1) / x ** 3, CURVE, "f", [0.35, 4]), C((x) => -1 / (x * x) - 3 / x ** 4, DERIV, "f'", [0.35, 4])], win: [0, 4, -8, 8] },
  "d2-042": { cs: [C((x) => (x * x - 3) * (x + 1), CURVE, "f"), C((x) => 3 * x * x + 2 * x - 3, DERIV, "f'")], win: [-3, 3, -8, 12] },
  "d2-043": { cs: [C((x) => (2 * x - 1) ** 2 * (x + 3), CURVE, "f"), C((x) => 12 * x * x + 16 * x - 11, DERIV, "f'")], win: [-4, 3, -20, 45] },
  "d2-044": { cs: [C((x) => Math.sqrt(x) * (x * x - 4), CURVE, "f", [0, 4]), C((x) => 2.5 * x * Math.sqrt(x) - 2 / Math.sqrt(x), DERIV, "f'", [0.06, 4])], win: [0, 4, -8, 16] },
  "d2-045": { cs: [C((x) => (x + 2) * (x - 1) / (x * x), CURVE, "f", [0.35, 5]), C((x) => -1 / (x * x) + 4 / x ** 3, DERIV, "f'", [0.35, 5])], win: [0, 5, -4, 6] },
  "d2-046": { cs: [C((x) => (x + 1 / x) ** 2, CURVE, "f", [0.4, 3]), C((x) => 2 * x - 2 / x ** 3, DERIV, "f'", [0.4, 3])], win: [0, 3, -8, 12] },
  "d2-047": { cs: [C((x) => (Math.sqrt(x) + 1) ** 2 / x, CURVE, "f", [0.3, 5]), C((x) => -1 / (x * Math.sqrt(x)) - 1 / (x * x), DERIV, "f'", [0.3, 5])], win: [0, 5, -4, 6] },
  "d2-048": { cs: [C((x) => (x * x + 2 * x) * (x - 3), CURVE, "f"), C((x) => 3 * x * x - 2 * x - 6, DERIV, "f'")], win: [-3, 4, -14, 14] },
  // curve + tangent
  "d2-014": { cs: [C((x) => 3 * x * x - 5 * x + 1)], tangents: [T([2, 3], 7)], pts: [[2, 3, "$(2,3)$", "above left"]], win: [-1, 4, -4, 14] },
  "d2-015": { cs: [C((x) => 2 * x ** 3 - x)], tangents: [T([1, 1], 5)], pts: [[1, 1, "$(1,1)$", "above left"]], win: [-2, 2, -8, 8] },
  "d2-016": { cs: [C((x) => 2 * Math.sqrt(x), CURVE, null, [0, 12])], tangents: [T([9, 6], 1 / 3)], pts: [[9, 6, "$(9,6)$", "above left"]], win: [0, 12, 0, 8] },
  "d2-017": { cs: [C((x) => x ** 4 - 3 * x * x + 2)], tangents: [T([-1, 0], 2)], pts: [[-1, 0, "$x{=}-1$", "above left"]], win: [-2, 2, -3, 6] },
  "d2-018": { cs: [C((x) => x * x - 6 * x + 5)], tangents: [T([3, -4], 0)], pts: [[3, -4, "$(3,-4)$", "below"]], win: [-1, 7, -6, 8] },
  "d2-019": { cs: [C((x) => x ** 3 - 3 * x)], tangents: [T([1, -2], 0), T([-1, 2], 0)], pts: [[1, -2, "$(1,-2)$", "below"], [-1, 2, "$(-1,2)$", "above"]], win: [-3, 3, -6, 6] },
  "d2-020": { cs: [C((x) => x * x + 3 * x)], tangents: [T([1, 4], 5)], pts: [[1, 4, "$(1,4)$", "above left"]], win: [-5, 3, -6, 12] },
  "d2-021": { cs: [C((x) => 2 * x ** 3 - 5)], tangents: [T([1, -3], 6)], pts: [[1, -3, "$(1,-3)$", "below right"]], win: [-2, 2.5, -12, 12] },
  "d2-024": { cs: [C((x) => (x + 2) * (x - 5))], tangents: [T([3, -10], 3)], pts: [[3, -10, "$x{=}3$", "below right"]], win: [-3, 6, -14, 12] },
  "d2-028": { cs: [C((x) => x - 4 / x, CURVE, null, [-6, -0.25])], tangents: [T([-2, 0], 2)], pts: [[-2, 0, "$(-2,0)$", "above right"]], win: [-6, 0, -8, 8] },
  "d2-030": { cs: [C((x) => (x - 1) * (x + 3))], tangents: [T([2, 5], 6)], pts: [[2, 5, "$(2,5)$", "above left"]], win: [-5, 4, -6, 12] },
  "d2-032": { cs: [C((x) => x ** 3 - 4 * x + 3)], tangents: [T([2, 3], 8)], pts: [[2, 3, "$P(2,3)$", "above left"]], win: [-3, 3, -6, 10] },
  "d2-034": { cs: [C((x) => x ** 3 - 6 * x * x + 9 * x + 2)], tangents: [T([4, 6], 9)], pts: [[1, 6, "$(1,6)$", "above"], [3, 2, "$(3,2)$", "below"], [4, 6, "$x{=}4$", "right"]], win: [-1, 5, -2, 10] },
  "d2-035": { cs: [C((x) => x ** 2.5 - 4 * Math.sqrt(x), CURVE, null, [0, 6])], tangents: [T([4, 24], 19)], pts: [[4, 24, "$x{=}4$", "above left"]], win: [0, 6, -6, 40] },
  "d2-049": { cs: [C((x) => x ** 3 - 2 * x * x + 5)], tangents: [T([-1, 2], 7)], pts: [[-1, 2, "$x{=}-1$", "above left"]], win: [-2, 3, -4, 12] },
  "d2-050": { cs: [C((x) => 4 / x + x * x, CURVE, null, [0.4, 4])], tangents: [T([2, 6], 3)], pts: [[2, 6, "$x{=}2$", "above left"]], win: [0, 4, -2, 16] },
  "d2-051": { cs: [C((x) => Math.sqrt(x) * (x + 2), CURVE, null, [0, 6])], tangents: [T([4, 12], 3.5)], pts: [[4, 12, "$x{=}4$", "above left"]], win: [0, 6, 0, 16] },
  "d2-052": { cs: [C((x) => x ** 3 - 4 * x)], tangents: [T([2, 0], 8), T([-2, 0], 8)], pts: [[2, 0, "$x{=}2$", "below right"], [-2, 0, "$x{=}-2$", "above left"]], win: [-3, 3, -8, 8] },
  "d2-053": { cs: [C((x) => 2 * x * x - 3 * x + 1)], tangents: [T([2, 3], 5)], pts: [[2, 3, "$(2,3)$", "above left"]], win: [-2, 4, -4, 14] },
  "d2-054": { cs: [C((x) => x ** 3 - 2 * x)], tangents: [T([2, 4], 10)], pts: [[2, 4, "$(2,4)$", "above left"]], win: [-2, 3, -8, 12] },
  "d2-055": { cs: [C((x) => 6 / x, CURVE, null, [0.6, 7])], tangents: [T([3, 2], -2 / 3)], pts: [[3, 2, "$x{=}3$", "above right"]], win: [0, 7, 0, 10] },
  "d2-059": { cs: [C((x) => x * x - 8 * x + 5)], tangents: [T([4, -11], 0)], pts: [[4, -11, "$(4,-11)$", "below"]], win: [-1, 9, -14, 8] },
  "d2-060": { cs: [C((x) => x ** 3 - 3 * x * x - 9 * x + 1)], tangents: [T([3, -26], 0), T([-1, 6], 0)], pts: [[3, -26, "$(3,-26)$", "below"], [-1, 6, "$(-1,6)$", "above"]], win: [-4, 5, -30, 12] },
  "d2-061": { cs: [C((x) => 2 * x ** 3 + 3 * x * x - 12 * x + 5)], tangents: [T([-2, 25], 0), T([1, -2], 0)], pts: [[-2, 25, "$x{=}-2$", "above"], [1, -2, "$x{=}1$", "below"]], win: [-4, 3, -10, 30] },
  "d2-062": { cs: [C((x) => 4 * x ** 3 - 12 * x + 7)], tangents: [T([1, -1], 0), T([-1, 15], 0)], pts: [[1, -1, "$(1,-1)$", "below"], [-1, 15, "$(-1,15)$", "above"]], win: [-2.5, 2.5, -5, 20] },
  "d2-063": { cs: [C((x) => x ** 3 - 3 * x * x + 4)], tangents: [T([3, 4], 9), T([-1, 0], 9)], pts: [[3, 4, "$x{=}3$", "above left"], [-1, 0, "$x{=}-1$", "below left"]], win: [-3, 4, -8, 12] },
  "d2-064": { cs: [C((x) => x ** 3, CURVE, null, [0, 6])], tangents: [T([5, 125], 75)], pts: [[5, 125, "$x{=}5$", "above left"]], win: [0, 6, 0, 140], xlabel: "x", ylabel: "V" },
  "d2-065": { cs: [C((x) => x ** 3 - 6 * x * x + 9 * x)], tangents: [T([2, 2], -3)], pts: [[2, 2, "$t{=}2$", "above right"]], win: [0, 4.5, -2, 6], xlabel: "t", ylabel: "s" },
  "d2-066": { cs: [C((x) => 200 + 5 * x + 0.01 * x * x)], tangents: [T([100, 800], 7)], pts: [[100, 800, "$x{=}100$", "above left"]], win: [0, 200, 0, 1100], xlabel: "x", ylabel: "C" },
  "d2-067": { cs: [C((x) => (4 / 3) * Math.PI * x ** 3, CURVE, null, [0, 12])], tangents: [T([10, 4188.79], 1256.64)], pts: [[10, 4188.79, "$r{=}10$", "above left"]], win: [0, 12, 0, 5200], xlabel: "r", ylabel: "V" },
  "d2-068": { cs: [C((x) => x ** 3 - 6 * x * x + 11 * x - 4)], tangents: [T([1, 2], 2), T([3, 2], 2)], pts: [[1, 2, "$x{=}1$", "above left"], [3, 2, "$x{=}3$", "below right"]], win: [-1, 5, -4, 8] },
  "d2-069": { cs: [C((x) => 2 * Math.sqrt(x) + 8 / Math.sqrt(x), CURVE, null, [0.3, 12])], tangents: [T([4, 8], 0)], pts: [[4, 8, "$(4,8)$", "above"]], win: [0, 12, 0, 16] },
  "d2-070": { cs: [C((x) => x ** 3 - 3 * x * x - 24 * x + 1)], tangents: [T([0, 1], -24)], pts: [[-2, 29, "$(-2,29)$", "above"], [4, -79, "$(4,-79)$", "below"], [0, 1, "$x{=}0$", "above right"]], win: [-5, 7, -90, 40] },
  // curve + tangent + normal
  "d2-022": { cs: [C((x) => x * x - 4 * x + 3)], tangents: [T([3, 0], 2)], normals: [{ p: [3, 0], m: -0.5 }], pts: [[3, 0, "$(3,0)$", "above left"]], win: [-1, 6, -3, 8] },
  "d2-023": { cs: [C((x) => x ** 3 - 2 * x + 1)], tangents: [T([2, 5], 10)], normals: [{ p: [2, 5], m: -0.1 }], pts: [[2, 5, "$(2,5)$", "above left"]], win: [-1, 3, -4, 10] },
  "d2-031": { cs: [C((x) => 4 * Math.sqrt(x), CURVE, null, [0, 9])], tangents: [T([4, 8], 1)], normals: [{ p: [4, 8], m: -1 }], pts: [[4, 8, "$(4,8)$", "above left"]], win: [0, 9, 0, 12] },
  "d2-033": { cs: [C((x) => 2 * x * x - 7 * x + 4)], tangents: [T([3, 1], 5)], normals: [{ p: [3, 1], m: -0.2 }], pts: [[3, 1, "$A(3,1)$", "above left"]], win: [-1, 5, -6, 10] },
  "d2-056": { cs: [C((x) => x * x + 2 * x - 3)], tangents: [T([1, 0], 4)], normals: [{ p: [1, 0], m: -0.25 }], pts: [[1, 0, "$(1,0)$", "above left"]], win: [-5, 4, -6, 10] },
  "d2-058": { cs: [C((x) => 2 * x ** 3 - 3 * x * x + 1)], tangents: [T([1, 0], 0)], normals: [{ p: [1, 0], vertical: true }], pts: [[1, 0, "$x{=}1$", "above right"]], win: [-1, 2, -3, 4] },
  "d2-057": { cs: [C((x) => Math.sqrt(x), CURVE, null, [0, 14])], tangents: [T([9, 3], 1 / 6)], pts: [[9, 3, "$x{=}9$", "above left"]], win: [0, 14, 0, 5] },
  "d2-041": { cs: [C((x) => 2 * x + 5 / Math.sqrt(x) * 0 + (2 * x ** 1.5 - 5) / Math.sqrt(x) - (2 * x ** 1.5 - 5) / Math.sqrt(x) + 2 * x - 5 / x ** 0.5 * 0, CURVE, "f", [0.3, 4]), C((x) => 2 + 5 / (2 * x * Math.sqrt(x)), DERIV, "f'", [0.3, 4])], win: [0, 4, -2, 10] },
};
// d2-041 simplify: y = 2x - 5x^{-1/2}; fix fn cleanly:
D["d2-041"].cs[0].fn = (x) => 2 * x - 5 / Math.sqrt(x);

// ---------- text helpers ----------
const ctl = (s) => s.replace(/°/g, "\\textdegree{}").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/£/g, "\\pounds ").replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°²³—✓]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/—/g, "---").replace(/✓/g, "$\\checkmark$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ");
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
  return /[\\^_=]/.test(s0) ? "\\(\\displaystyle " + ctl(s0) + "\\)" : restore(escTxt(s));
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const t = r / 8; for (const c of [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000]) if (c >= t) return c; return 2000; }

function graph(spec) {
  const CW = 8.6, CH = 5.8;
  const [Xa, Xb, Ya, Yb] = spec.win;
  const sx = CW / (Xb - Xa), sy = CH / (Yb - Ya);
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Xa, ay0 = 0 >= Ya && 0 <= Yb ? 0 : Ya;
  const span = Yb - Ya, ylo = Ya - span, yhi = Yb + span, cl = (y) => Math.max(ylo, Math.min(yhi, y));
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round,line join=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!16] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  (spec.tangents || []).forEach((tg) => { const m = tg.m, [x0, y0] = tg.p, fn = (x) => y0 + m * (x - x0); t += `\\draw[${TAN},thick,dashed] (${f(px(Xa))},${f(py(cl(fn(Xa))))}) -- (${f(px(Xb))},${f(py(cl(fn(Xb))))});\n`; });
  (spec.normals || []).forEach((nm) => { const [x0, y0] = nm.p; if (nm.vertical) { t += `\\draw[${NORM},thick,dashdotted] (${f(px(x0))},${f(py(Ya))}) -- (${f(px(x0))},${f(py(Yb))});\n`; } else { const m = nm.m, fn = (x) => y0 + m * (x - x0); t += `\\draw[${NORM},thick,dashdotted] (${f(px(Xa))},${f(py(cl(fn(Xa))))}) -- (${f(px(Xb))},${f(py(cl(fn(Xb))))});\n`; } });
  spec.cs.forEach((c) => {
    const dom = c.dom || [Xa, Xb], N = 280, pp = [];
    for (let i = 0; i <= N; i++) { const x = dom[0] + (dom[1] - dom[0]) * (i / N); let y = c.fn(x); if (!isFinite(y)) continue; pp.push(`(${f(px(x))},${f(py(cl(y)))})`); }
    if (pp.length > 1) t += `\\draw[${c.color},thick] ${pp.join(" -- ")};\n`;
  });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)});\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))});\n`; }
  spec.cs.forEach((c) => { if (!c.label) return; const dom = c.dom || [Xa, Xb]; let xe = Math.min(Xb, dom[1]) - (Xb - Xa) * 0.04, ye = cl(c.fn(xe)); t += `\\node[${c.color},scale=0.85,anchor=west] at (${f(px(xe) + 0.05)},${f(py(ye))}) {$${c.label}$};\n`; });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PT}] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.2pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.82] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Differentiating} $y=f(x)$\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Differentiation (ref \\texttt{d2})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} questions on \\emph{differentiating} $y=f(x)$, each with a fully
worked solution and a TikZ diagram: the curve in blue with its \\textbf{derivative} $f'(x)$ in teal for the
pure differentiation questions; the curve with the \\textbf{tangent} (dashed orange) at the relevant point
for gradient, tangent, and stationary-point questions; and additionally the \\textbf{normal} (dash-dotted
purple) for the normal questions.
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
    L += `\\small Curve (blue); tangent (dashed orange); normal (dash-dotted purple) / derivative (teal) as relevant.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
