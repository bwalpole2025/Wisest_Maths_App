/* Generates Exponentials.tex from el1_expontentials.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Exponentials_and_Logarithms/el1_expontentials.ts");
const OUT = path.join(__dirname, "..", "Exponentials.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const E = Math.E, exp = Math.exp, ln = Math.log, pow = Math.pow;
const ex = (k, A = 1) => (x) => A * exp(k * x);   // A e^{kx}
const po = (b) => (x) => pow(b, x);                // b^x
const c = (fn, label) => ({ fn, label });
const H = (y, label) => ({ y, label });
const TG = (p, m) => ({ p, m });
// G(cs, win, {pts, tangents, hlines, xlabel, ylabel})
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], tangents: o.tangents, hlines: o.hlines, xlabel: o.xlabel || "x", ylabel: o.ylabel || "y" });

const D = {
  "el1-001": G([c(po(2), "y=a^x")], [-3, 3, -1, 9], { pts: [[0, 1, "$(0,1)$", "above left"]], hlines: [H(0, "asymptote $y=0$")] }),
  "el1-002": G([c(po(4), "y=4^x"), c(po(2), "y=2^x")], [-2, 2, -1, 12], { pts: [[0, 1, "$(0,1)$", "below right"]] }),
  "el1-003": G([c(po(1 / 3), "y=(1/3)^x")], [-3, 3, -1, 9], { pts: [[0, 1, "$(0,1)$", "above right"]], hlines: [H(0, "$y=0$")] }),
  "el1-004": G([c(po(1 / 5), "y=5^{-x}")], [-1.5, 3, -1, 12], { pts: [[0, 1, "$(0,1)$", "above right"]], hlines: [H(0, "$y=0$")] }),
  "el1-005": G([c(po(3), "y=3^x"), c(po(1 / 3), "y=3^{-x}")], [-3, 3, -1, 12], { pts: [[0, 1, "$(0,1)$", "above"]] }),
  "el1-006": G([c(po(2), "y=2^x")], [-3, 3.5, -1, 10], { pts: [[0, 1, "$f(0){=}1$", "above left"], [3, 8, "$f(3){=}8$", "left"], [-2, 0.25, "$f(-2){=}\\frac14$", "above right"], [0.5, Math.SQRT2, "$f(\\frac12){=}\\sqrt2$", "below right"]] }),
  "el1-007": G([c(po(5), "y=5^x"), c(po(1 / 5), "y=5^{-x}")], [-3, 3, -1, 12], { pts: [[0, 1, "$(0,1)$", "above"]], hlines: [H(0, "$y=0$")] }),
  "el1-008": G([c(po(1.8), "y=1.8^x")], [-3, 4, -1, 10], { pts: [[0, 1, "$(0,1)$", "above left"]], hlines: [H(0, "$y=0$")] }),
  "el1-009": G([c(ex(1), "y=e^x")], [-3, 2.5, -1, 12], { pts: [[1, E, "slope $=e$", "above left"]], tangents: [TG([1, E], E)] }),
  "el1-010": G([c(ex(3), "y=e^{3x}")], [-1.5, 0.8, -1, 12], { pts: [[0, 1, "$(0,1)$", "above left"]], tangents: [TG([0, 1], 3)] }),
  "el1-011": G([c(ex(2, 4), "y=4e^{2x}")], [-2, 1.2, -2, 50], { pts: [[0, 4, "$(0,4)$", "left"]], tangents: [TG([0, 4], 8)] }),
  "el1-012": G([c(ex(5, 7), "y=7e^{5x}")], [-1, 0.6, -5, 150], { pts: [[0, 7, "$(0,7)$", "left"]], tangents: [TG([0, 7], 35)] }),
  "el1-013": G([c(ex(-2, 3), "y=3e^{-2x}")], [-1.5, 2, -5, 60], { pts: [[0, 3, "$(0,3)$", "above right"], [1, 3 / E ** 2, "$x=1$", "above right"]] }),
  "el1-014": G([c(ex(4, 6), "y=6e^{4x}")], [-1.5, 0.7, -2, 90], { pts: [[0, 6, "$(0,6)$", "left"], [0.5, 6 * E ** 2, "$x=0.5$", "left"]] }),
  "el1-015": G([c(ex(3, 2.5), "y=2.5e^{3t}")], [-1, 0.8, -2, 30], { pts: [[0, 2.5, "$(0,2.5)$", "left"]], tangents: [TG([0, 2.5], 7.5)], xlabel: "t" }),
  "el1-016": G([c(ex(1), "e^x"), c(ex(1, 2), "2e^x"), c(ex(2), "e^{2x}")], [-2, 1.4, -1, 12], { pts: [[0, 1, "$(0,1)$", "below right"], [0, 2, "$(0,2)$", "left"]] }),
  "el1-017": G([c((x) => exp(x) + 3, "y=e^x+3")], [-3, 2, -1, 12], { pts: [[0, 4, "$(0,4)$", "left"]], hlines: [H(3, "asymptote $y=3$")] }),
  "el1-018": G([c((x) => exp(x - 2), "y=e^{x-2}")], [-2, 4, -1, 10], { pts: [[0, exp(-2), "$(0,\\frac{1}{e^2})$", "above left"]], hlines: [H(0, "$y=0$")] }),
  "el1-019": G([c(ex(1, 3), "y=3e^x")], [-3, 1.5, -1, 15], { pts: [[0, 3, "$(0,3)$", "left"]], tangents: [TG([0, 3], 3)] }),
  "el1-020": G([c(ex(1), "e^x"), c((x) => exp(x) - 1, "e^x-1"), c((x) => -exp(x), "-e^x")], [-3, 2, -8, 12], { pts: [[0, 1, "$(0,1)$", "above left"], [0, 0, "$(0,0)$", "below right"], [0, -1, "$(0,-1)$", "below right"]], hlines: [H(-1, "$y=-1$")] }),
  "el1-021": G([c(ex(3, 2), "y=2e^{3x}")], [-1.5, 0.8, -1, 25], { pts: [[0, 2, "$(0,2)$", "left"]] }),
  "el1-022": G([c(ex(4, 5), "y=5e^{4x}")], [-1, 0.6, -5, 60], { pts: [[0, 5, "$(0,5)$", "left"]], tangents: [TG([0, 5], 20)] }),
  "el1-023": G([c(ex(3, 4), "y=4e^{3x}")], [-1.5, 0.8, -2, 50], { pts: [[0, 4, "$(0,4)$", "left"]], tangents: [TG([0, 4], 12)] }),
  "el1-024": G([c(ex(-3, 6), "y=6e^{-3x}")], [-0.8, 2, -5, 70], { pts: [[0, 6, "$(0,6)$", "above right"]], tangents: [TG([0, 6], -18)] }),
  "el1-025": G([c(ex(5, 3), "y=3e^{5x}")], [-1, 0.6, -5, 65], { pts: [[0, 3, "$(0,3)$", "left"]] }),
  "el1-026": G([c(ex(-1, 2), "y=2e^{-x}")], [-2, 3, -1, 15], { pts: [[0, 2, "$(0,2)$", "above right"]], hlines: [H(0, "$y=0$")] }),
  "el1-027": G([c((x) => 5 * exp(2 * x) - 3, "y=5e^{2x}-3")], [-2, 1, -5, 35], { pts: [[0, 2, "$(0,2)$", "left"]], hlines: [H(-3, "asymptote $y=-3$")] }),
  "el1-028": G([c(ex(-0.1, 80), "80e^{-0.1x}")], [0, 40, 0, 90], { pts: [[0, 80, "$(0,80)$", "above right"]], hlines: [H(0, "$y=0$")], xlabel: "x", ylabel: "T" }),
  "el1-029": G([c(ex(0.04, 500), "500e^{0.04t}")], [0, 40, 0, 2700], { pts: [[0, 500, "$(0,500)$", "above left"]], xlabel: "t", ylabel: "P" }),
  "el1-030": G([c(ex(-3, 8), "y=8e^{-3x}")], [-0.7, 2, -5, 70], { pts: [[0, 8, "$(0,8)$", "above right"], [0.5, 8 * exp(-1.5), "$x=0.5$", "above right"]] }),
  "el1-031": G([c(ex(3, 3), "y=3e^{3x}")], [-1.5, 0.8, -1, 30], { pts: [[0, 3, "$(0,3)$", "left"]], tangents: [TG([0, 3], 9)] }),
  "el1-032": G([c(ex(1), "y=e^x"), c((x) => 4 - exp(x), "y=4-e^x")], [-2, 2, -4, 8], { pts: [[ln(2), 2, "$(\\ln 2,2)$", "above right"]] }),
  "el1-033": G([c(ex(-0.05, 120), "120e^{-0.05t}")], [0, 40, 0, 140], { pts: [[0, 120, "$(0,120)$", "above right"]], xlabel: "t", ylabel: "M" }),
  "el1-034": G([c(ex(2, 6), "y=6e^{2x}")], [-1.5, 1.2, -5, 70], { pts: [[0, 6, "$(0,6)$", "left"]] }),
  "el1-035": G([c((x) => 3 * exp(2 * x) - 6, "y=3e^{2x}-6")], [-2, 1.2, -7, 30], { pts: [[0, -3, "$(0,-3)$", "left"], [ln(2) / 2, 0, "$x$-int", "above right"]], hlines: [H(-6, "asymptote $y=-6$")] }),
  "el1-036": G([c(po(2), "y=2^x")], [0, 5, 0, 36], { pts: [[5, 32, "$2^5{=}32$", "left"]] }),
  "el1-037": G([c(po(3), "y=3^x")], [0, 6, 0, 800], { pts: [[2, 9, "$3^2$", "above left"], [6, 729, "$3^6{=}729$", "left"]] }),
  "el1-038": G([c(po(5), "y=5^x")], [0, 5, 0, 700], { pts: [[4, 625, "$5^4{=}625$", "left"]] }),
  "el1-039": G([c(po(4), "y=4^x")], [-2.5, 1, -0.5, 5], { pts: [[-2, 1 / 16, "$4^{-2}{=}\\frac{1}{16}$", "above right"]], hlines: [H(0, "$y=0$")] }),
  "el1-040": G([c(po(8), "y=8^x")], [0, 1, 0, 9], { pts: [[2 / 3, 4, "$8^{2/3}{=}4$", "above left"]] }),
  "el1-041": G([c(po(2), "y=2^x")], [-3, 3, -1, 9], { pts: [[0, 1, "$(0,1)$", "above left"]], hlines: [H(0, "$y=0$")] }),
  "el1-042": G([c(po(1 / 3), "y=3^{-x}")], [-3, 3, -1, 9], { pts: [[0, 1, "$(0,1)$", "above right"]], hlines: [H(0, "$y=0$")] }),
  "el1-043": G([c(po(2), "y=2^x")], [0, 5, 0, 18], { pts: [[4, 16, "$(4,16)$", "above left"]], hlines: [H(16, "$y=16$")] }),
  "el1-044": G([c(po(3), "y=3^x")], [-4, 1, -0.5, 4], { pts: [[-3, 1 / 27, "$x=-3$", "above right"]], hlines: [H(0, "$y=0$")] }),
  "el1-045": G([c((x) => pow(5, 2 * x), "y=5^{2x}")], [0, 2, 0, 140], { pts: [[1.5, 125, "$(\\frac32,125)$", "above left"]], hlines: [H(125, "$y=125$")] }),
  "el1-046": G([c((x) => 1000 * pow(1.05, x), "V=1000(1.05)^t")], [0, 20, 0, 2800], { pts: [[10, 1628.89, "$(10,1628.89)$", "above left"]], xlabel: "t", ylabel: "V" }),
  "el1-047": G([c(ex(1), "y=e^x")], [0, 3.5, 0, 35], { pts: [[3, exp(3), "$(3,20.1)$", "above left"]] }),
  "el1-048": G([c(ex(1), "e^x"), c(ex(-1), "e^{-x}")], [-3, 3, -1, 12], { pts: [[0, 1, "$(0,1)$", "above"]] }),
  "el1-049": G([c(ex(5), "y=e^{5x}")], [-0.5, 0.5, -1, 12], { pts: [[0, 1, "$(0,1)$", "above left"]] }),
  "el1-050": G([c(ex(3), "y=e^{3x}")], [-0.8, 0.8, -1, 12], { pts: [[0, 1, "$(0,1)$", "above left"]] }),
  "el1-051": G([c((x) => 500 * pow(2, x / 3), "P=500(2^{t/3})")], [0, 12, 0, 9000], { pts: [[12, 8000, "$(12,8000)$", "above left"]], xlabel: "t", ylabel: "P" }),
  "el1-052": G([c(po(4), "y=4^x")], [0, 2, 0, 18], { pts: [[1.5, 8, "$(\\frac32,8)$", "above left"]], hlines: [H(8, "$y=8$")] }),
  "el1-053": G([c(po(9), "y=9^x")], [0, 2, 0, 90], { pts: [[1.5, 27, "$(\\frac32,27)$", "above left"]], hlines: [H(27, "$y=27$")] }),
  "el1-054": G([c((x) => exp(x) + 3, "y=e^x+3")], [-3, 2, -1, 12], { pts: [[0, 4, "$(0,4)$", "left"]], hlines: [H(3, "asymptote $y=3$")] }),
  "el1-055": G([c((x) => exp(x - 2), "y=e^{x-2}")], [-2, 4, -1, 10], { pts: [[0, exp(-2), "$(0,\\frac{1}{e^2})$", "above left"]], hlines: [H(0, "$y=0$")] }),
  "el1-056": G([c(ex(1, 2), "y=2e^x")], [-3, 1.5, -1, 15], { pts: [[0, 2, "$(0,2)$", "left"]] }),
  "el1-057": G([c(ex(-0.1, 200), "200e^{-0.1t}")], [0, 40, 0, 220], { pts: [[0, 200, "$(0,200)$", "above right"], [5, 200 * exp(-0.5), "$(5,121.3)$", "above right"]], xlabel: "t", ylabel: "m" }),
  "el1-058": G([c(ex(1), "y=e^x")], [0, 2.5, 0, 14], { pts: [[ln(5), 5, "$(\\ln 5,5)$", "above left"]], hlines: [H(5, "$y=5$")] }),
  "el1-059": G([c(ex(2), "y=e^{2x}")], [0, 1.5, 0, 22], { pts: [[ln(7) / 2, 7, "$x=\\frac{\\ln 7}{2}$", "above left"]], hlines: [H(7, "$y=7$")] }),
  "el1-060": G([c((x) => 3 * exp(x) - 6, "y=3e^x-6")], [-2, 1.5, -7, 10], { pts: [[ln(2), 0, "$(\\ln 2,0)$", "above left"]], hlines: [H(-6, "asymptote $y=-6$")] }),
  "el1-061": G([c(po(27), "y=27^x"), c(po(16), "y=16^x")], [0, 0.5, 0, 6], { pts: [[1 / 3, 3, "$27^{1/3}{=}3$", "above left"], [0.25, 2, "$16^{1/4}{=}2$", "below right"]] }),
  "el1-062": G([c(po(2), "y=2^x")], [0, 12, 0, 4500], { pts: [[3, 8, "$2^3$", "above left"], [12, 4096, "$2^{12}{=}4096$", "left"]] }),
  "el1-063": G([c((x) => 3 * pow(4, x), "y=3\\cdot4^x")], [-1, 2.3, -2, 55], { pts: [[0, 3, "$(0,3)$", "above left"], [2, 48, "$(2,48)$", "left"]] }),
  "el1-064": G([c((x) => pow(2, x + 1), "y=2^{x+1}")], [0, 5, 0, 70], { pts: [[4, 32, "$(4,32)$", "above left"]], hlines: [H(32, "$y=32$")] }),
  "el1-065": G([c((x) => 20 + 80 * exp(-0.05 * x), "T=20+80e^{-0.05t}")], [0, 80, 0, 110], { pts: [[0, 100, "$(0,100)$", "above right"], [20, 20 + 80 * exp(-1), "$(20,49.4)$", "above right"]], hlines: [H(20, "long-term $y=20$")], xlabel: "t", ylabel: "T" }),
  "el1-066": G([c(ex(1), "y=e^x")], [-2, 2.4, -1, 12], { pts: [[0, 1, "$(0,1)$", "above left"]] }),
  "el1-067": G([c((x) => exp(2 * x) - 5 * exp(x) + 6, "y=e^{2x}-5e^x+6")], [-0.5, 1.6, -2, 8], { pts: [[ln(2), 0, "$\\ln 2$", "below left"], [ln(3), 0, "$\\ln 3$", "below right"]], hlines: [H(0, "")] }),
  "el1-068": G([c((x) => exp(2 * x) - 7 * exp(x) + 10, "y=e^{2x}-7e^x+10")], [-0.5, 2, -4, 15], { pts: [[ln(2), 0, "$\\ln 2$", "below left"], [ln(5), 0, "$\\ln 5$", "below right"]], hlines: [H(0, "")] }),
  "el1-069": G([c((x) => 3 * pow(2, x), "y=3\\cdot2^x")], [-2, 3, -1, 28], { pts: [[0, 3, "$(0,3)$", "left"]] }),
  "el1-070": G([c((x) => 15000 * pow(0.85, x), "V=15000(0.85)^t")], [0, 15, 0, 16000], { pts: [[3, 9211, "$(3,9211)$", "above right"], [6.76, 5000, "$(6.76,5000)$", "above right"]], hlines: [H(5000, "$y=5000$")], xlabel: "t", ylabel: "V" }),
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
  if (/\\/.test(s0)) return "\\(\\displaystyle " + ctl(s0) + "\\)";        // pure LaTeX (\frac, \ln ...)
  if (/[A-Za-z]{4,}/.test(s0)) return restore(escTxt(s));                  // prose words -> text
  if (/[\^_=]/.test(s0)) return "\\(\\displaystyle " + ctl(s0) + "\\)";    // short mathy answer
  return restore(escTxt(s));
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
function niceStep(r) { const t = r / 8; for (const v of [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500]) if (v >= t) return v; return 5000; }
const PAL = ["blue!70!black", "red!70!black", "green!50!black", "violet!70!black"];
const TANC = "orange!85!black", PTC = "red!75!black";

function graph(spec) {
  const CW = 8.6, CH = 5.8;
  const [Xa, Xb, Ya, Yb] = spec.win;
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
  // horizontal asymptote / reference lines
  (spec.hlines || []).forEach((h) => {
    if (Math.abs(h.y) > 1e-9 && h.y >= Ya && h.y <= Yb) t += `\\draw[gray!55,dashed] (${f(px(Xa))},${f(py(h.y))}) -- (${f(px(Xb))},${f(py(h.y))});\n`;
  });
  // tangents
  (spec.tangents || []).forEach((tg) => { const m = tg.m, [x0, y0] = tg.p, fn = (x) => y0 + m * (x - x0); t += `\\draw[${TANC},thick,dashed] (${f(px(Xa))},${f(py(cl(fn(Xa))))}) -- (${f(px(Xb))},${f(py(cl(fn(Xb))))});\n`; });
  // curves
  spec.cs.forEach((cv, ci) => {
    const col = PAL[ci % PAL.length], N = 320, pp = []; let best = null;  // highest visible sample -> label anchor (keeps labels off the x-axis)
    for (let i = 0; i <= N; i++) { const x = Xa + (Xb - Xa) * (i / N); let y = cv.fn(x); if (!isFinite(y)) { continue; } pp.push(`(${f(px(x))},${f(py(cl(y)))})`); if (y >= Ya && y <= Yb && (!best || y > best[1])) best = [x, y]; }
    if (pp.length > 1) t += `\\draw[${col},thick] ${pp.join(" -- ")};\n`;
    cv._col = col; cv._lv = best;
  });
  t += "\\end{scope}\n";
  // axes
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.68]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.68]{$${num(y)}$};\n`; }
  // hline labels (at right edge, just inside)
  (spec.hlines || []).forEach((h) => { if (h.label && h.y >= Ya && h.y <= Yb) t += `\\node[left,scale=0.7,gray!55!black,fill=white,inner sep=1pt] at (${f(px(Xb) - 0.05)},${f(py(h.y) + 0.18)}) {${h.label}};\n`; });
  // curve labels at last visible sample
  spec.cs.forEach((cv) => { if (cv.label && cv._lv) { const [lx, ly] = cv._lv; const right = px(lx) > CW * 0.55; const anc = right ? "east" : "west"; const dx = right ? -0.08 : 0.08; t += `\\node[${cv._col},scale=0.72,anchor=${anc},inner sep=1pt] at (${f(px(lx) + dx)},${f(py(ly) - 0.18)}) {$${cv.label}$};\n`; } });
  // marked points
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2.1pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.74] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Exponentials}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Exponentials and Logarithms (ref \\texttt{el1})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Exponentials} questions, each with a fully worked
solution and a TikZ graph of the relevant exponential function: the curve(s) plotted with the
\\(y\\)-intercept and key points marked, the horizontal asymptote shown dashed, a dashed
\\textbf{tangent} for the gradient questions, and a dashed reference line through the solution for
the equation-solving questions.
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
    L += `\\small The exponential function plotted with key points marked${D[q.id].tangents ? " and the tangent (dashed) showing the gradient" : ""}.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
