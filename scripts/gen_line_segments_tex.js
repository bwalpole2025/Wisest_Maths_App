/* Generates Line_Segments.tex from cg2_Line_Segments.ts (reuses the coordinate-plane plotting engine) */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Coordinate_Geometry/cg2_Line_Segments.ts");
const OUT = path.join(__dirname, "..", "Line_Segments.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const REF = "gray", L1 = "blue!70!black", L2 = "teal!70!black", PB = "orange!80!black", MID = "orange!80!black", DIV = "purple!70!black";
const seg = (a, b, o = {}) => Object.assign({ p: [a, b] }, o);

// per-question specs (coordinate-plane graphs)
const D = {
  "cg2-001": { segs: [seg([-2, 4], [4, 12])], pts: [[-2, 4, "$A$"], [4, 12, "$B$"], [1, 8, "$M$", "below right", MID]] },
  "cg2-002": { segs: [seg([3, -5], [-3, 3])], pts: [[3, -5, "$A$"], [-3, 3, "$B$"], [0, -1, "$M$", "above right", MID]] },
  "cg2-003": { lines: [{ m: 3, c: 1, color: REF }], segs: [seg([2, 7], [5, 16])], pts: [[2, 7, "$(2,7)$"], [5, 16, "$(5,16)$"]] },
  "cg2-004": { lines: [{ m: -2, c: 7, color: REF }], segs: [seg([1, 5], [4, -1])], pts: [[1, 5, "$(1,5)$"], [4, -1, "$(4,-1)$"]] },
  "cg2-005": { lines: [{ m: 0.5, c: -3, color: REF }], segs: [seg([2, -2], [10, 2])], pts: [[2, -2, "$(2,-2)$"], [10, 2, "$(10,2)$"], [6, 0, "$M$", "above left", MID]] },
  "cg2-006": { lines: [{ m: -2, c: 4, color: REF }], segs: [seg([0, 4], [3, -2])], pts: [[0, 4, "$(0,4)$", "left"], [3, -2, "$(3,-2)$"]] },
  "cg2-007": { lines: [{ m: -0.5, c: 4, color: REF }], segs: [seg([2, 3], [6, 1])], pts: [[2, 3, "$(2,3)$"], [6, 1, "$(6,1)$"], [4, 2, "$M$", "above right", MID]] },
  "cg2-008": { lines: [{ m: 4, c: -3, color: REF }], segs: [seg([-1, -7], [2, 5])], pts: [[-1, -7, "$(-1,-7)$"], [2, 5, "$(2,5)$"], [0.5, -1, "$M$", "right", MID]] },
  "cg2-009": { segs: [seg([1, 2], [5, 10])], pts: [[1, 2, "$A$"], [3, 6, "$M$", "below right", MID], [5, 10, "$B$"]] },
  "cg2-010": { segs: [seg([3, 2], [-5, 6])], pts: [[3, 2, "$P$"], [-1, 4, "$M$", "below", MID], [-5, 6, "$Q$"]] },
  "cg2-011": { lines: [{ m: 1, c: -2, color: REF }], segs: [seg([3, 1], [7, 5])], pts: [[3, 1, "$A$"], [7, 5, "$B$"], [5, 3, "$M$", "above left", MID]] },
  "cg2-012": { lines: [{ m: 3, c: -5, color: REF }], segs: [seg([2, 1], [4, 7])], pts: [[2, 1, "$A$"], [4, 7, "$B$"], [3, 4, "$M$", "left", MID]] },
  "cg2-013": { lines: [{ m: 2, c: -7, color: REF }], segs: [seg([2, -3], [4, 1])], pts: [[2, -3, "$C$"], [4, 1, "$D$"], [3, -1, "$M$", "right", MID]] },
  "cg2-014": { lines: [{ m: 1.5, c: -0.5, color: REF }], segs: [seg([3.667, 5], [7, 10])], pts: [[3.667, 5, "$P$"], [7, 10, "$Q$"], [5.333, 7.5, "$M$", "above left", MID]] },
  "cg2-015": { segs: [seg([-2, -4], [6, 2])], pts: [[-2, -4, "$C$"], [6, 2, "$D$"], [2, -1, "$M$", "above left", MID]] },
  "cg2-016": { segs: [seg([-3, 8], [5, -2])], pts: [[-3, 8, "$A$"], [5, -2, "$B$"], [1, 3, "$M$", "above right", MID]] },
  "cg2-017": { segs: [seg([-1, 4], [5, -4])], pts: [[-1, 4, "$P$"], [5, -4, "$Q$"]] },
  "cg2-018": { segs: [seg([2, 11], [8, 3])], pts: [[2, 11, "$A$"], [8, 3, "$B$"], [5, 7, "$M$", "above right", MID]] },
  "cg2-019": { segs: [seg([0, 0], [7, 24])], pts: [[0, 0, "$O$", "left"], [7, 24, "$(7,24)$"]] },
  "cg2-020": { segs: [seg([7, 5], [-1, -7])], pts: [[7, 5, "$P$"], [-1, -7, "$Q$"], [3, -1, "$M$", "above left", MID]] },
  "cg2-021": { poly: { pts: [[1, 1], [5, 1], [3, 5]], fill: "blue!7" }, pts: [[1, 1, "$A$", "below left"], [5, 1, "$B$", "below right"], [3, 5, "$C$", "above"]] },
  "cg2-022": { segs: [seg([1, 2], [7, 8])], pts: [[1, 2, "$A$"], [7, 8, "$B$"], [3, 4, "$P$", "below right", DIV]] },
  "cg2-023": { segs: [seg([-3, -5], [9, 11])], pts: [[-3, -5, "$A$"], [9, 11, "$B$"]] },
  "cg2-024": { lines: [{ vert: 5, color: REF }, { m: 0, c: 3, color: L2 }], pts: [[5, 3, "$(5,3)$", "above right"]] },
  "cg2-025": { segs: [seg([2, 3], [6, -1])], pts: [[2, 3, "$(2a,3b)$", "above left"], [6, -1, "$(6a,-b)$", "below right"], [4, 1, "$M$", "above right", MID]] },
  "cg2-026": { poly: { pts: [[0, 0], [3, 4], [8, 4], [5, 0]], fill: "blue!6" }, segs: [seg([0, 0], [8, 4], { dash: true, color: DIV }), seg([3, 4], [5, 0], { dash: true, color: DIV })], pts: [[0, 0, "$A$", "below left"], [3, 4, "$B$", "above"], [8, 4, "$C$", "above right"], [5, 0, "$D$", "below right"], [4, 2, "$M$", "below right", MID]] },
  "cg2-027": { poly: { pts: [[0, 0], [4, 0], [0, 3]], fill: "blue!7" }, pts: [[0, 0, "$A$", "below left"], [4, 0, "$B$", "below right"], [0, 3, "$C$", "above left"]] },
  "cg2-028": { segs: [seg([2, -1], [10, 7])], pts: [[2, -1, "$A$"], [10, 7, "$B$"], [8, 5, "$P$", "above left", DIV]] },
  "cg2-029": { segs: [seg([0, 0], [5, -12])], pts: [[0, 0, "$O$", "above left"], [5, -12, "$(5,-12)$"]] },
  "cg2-030": { circle: { c: [2, 1], r: Math.sqrt(20) }, segs: [seg([-2, 3], [6, -1], { color: L1 })], pts: [[-2, 3, "$A$"], [6, -1, "$B$"], [2, 1, "$C$", "above right", MID]] },
  "cg2-031": { poly: { pts: [[1, 1], [4, 5], [7, 1] ], fill: "blue!7" }, pts: [[1, 1, "$A$", "below left"], [4, 5, "$B$", "above"], [7, 1, "$C$", "below right"]] },
  "cg2-032": { segs: [seg([1, 3], [7, -7])], pts: [[1, 3, "$A$"], [7, -7, "$B$"], [4, -2, "$M$", "right", MID]] },
  "cg2-033": { segs: [seg([0, 0], [12, 8])], pts: [[0, 0, "$A$", "above left"], [12, 8, "$B$"], [8, 16 / 3, "$P$", "below right", DIV]] },
  "cg2-034": { poly: { pts: [[2, 3], [5, 7], [9, 4]], fill: "blue!7" }, pts: [[2, 3, "$A$", "above left"], [5, 7, "$B$", "above"], [9, 4, "$C$", "right"]] },
  "cg2-035": { segs: [seg([1, -2], [-3, 1])], pts: [[1, -2, "$A$"], [-3, 1, "$B$"]] },
  "cg2-036": { segs: [seg([-4, 6], [2, -8], { color: REF })], lines: [{ m: 3 / 7, c: -4 / 7, color: PB }], pts: [[-4, 6, "$A$"], [2, -8, "$B$"], [-1, -1, "$M$", "right", MID]] },
  "cg2-037": { poly: { pts: [[0, 0], [8, 0], [4, 6]] }, segs: [seg([0, 0], [6, 3], { dash: true, color: DIV }), seg([8, 0], [2, 3], { dash: true, color: DIV }), seg([4, 6], [4, 0], { dash: true, color: DIV })], pts: [[0, 0, "$A$", "below left"], [8, 0, "$B$", "below right"], [4, 6, "$C$", "above"]] },
  "cg2-038": { segs: [seg([1, 5], [9, 1])], pts: [[1, 5, "", "above"], [9, 1, "", "right"], [7, 2, "$P$", "above right", DIV]] },
  "cg2-039": { circle: { c: [3, 1], r: Math.sqrt(13) }, lines: [{ m: 2, c: 0, color: L2 }], pts: [[3, 1, "$(3,1)$", "above right"]] },
  "cg2-040": { poly: { pts: [[2, 1], [8, 3], [5, 8]], fill: "blue!6" }, pts: [[2, 1, "", "below"], [8, 3, "", "right"], [5, 8, "", "above"], [5, 4, "$G$", "below right", DIV]] },
  "cg2-041": { circle: { c: [4, 6], r: 5 }, segs: [seg([1, 2], [7, 10], { color: L1 })], pts: [[1, 2, "$A$"], [7, 10, "$B$"], [4, 6, "$C$", "right", MID]] },
  "cg2-042": { lines: [{ m: 2, c: 1, color: L1 }, { m: 2, c: 6, color: L2 }] },
  "cg2-043": { poly: { pts: [[0, 0], [5, 0], [7, 4], [2, 4]], fill: "blue!6" }, segs: [seg([0, 0], [7, 4], { dash: true, color: DIV }), seg([5, 0], [2, 4], { dash: true, color: DIV })], pts: [[0, 0, "$A$", "below left"], [5, 0, "$B$", "below right"], [7, 4, "$C$", "above right"], [2, 4, "$D$", "above left"]] },
  "cg2-044": { segs: [seg([2, 4], [6, 8]), seg([6, 8], [8, 10], { dash: true, color: DIV })], pts: [[2, 4, "$A$"], [6, 8, "$B$"], [8, 10, "$P$", "above left", DIV]] },
  "cg2-045": { segs: [seg([3, -2], [-3, 2])], pts: [[3, -2, "$A$"], [-3, 2, "$B$"], [0, 0, "$M$", "above right", MID]] },
  "cg2-046": { poly: { pts: [[0, 0], [6, 0], [3, 8]], fill: "blue!8" }, pts: [[0, 0, "", "below left"], [6, 0, "", "below right"], [3, 8, "", "above"]] },
  "cg2-047": { poly: { pts: [[-1, 2], [3, 0], [5, 4], [1, 6]], fill: "blue!7" }, pts: [[-1, 2, "$A$", "left"], [3, 0, "$B$", "below"], [5, 4, "$C$", "right"], [1, 6, "$D$", "above"]] },
  "cg2-048": { circle: { c: [0, 0], r: 1 }, segs: [seg([0.6, 0.8], [-0.6, -0.8], { color: L1 })], pts: [[0.6, 0.8, "$(\\cos\\theta,\\sin\\theta)$", "above right"], [-0.6, -0.8, "", "below left"]] },
  "cg2-049": { circle: { c: [1, 2], r: 10 }, lines: [{ m: 0, c: 0, color: REF }], pts: [[1, 2, "$A$", "above right"]] },
  "cg2-050": { poly: { pts: [[2, 1], [8, 1], [5, 7]], fill: "blue!7" }, pts: [[2, 1, "$P$", "below left"], [8, 1, "$Q$", "below right"], [5, 7, "$R$", "above"], [5, 3, "$G$", "right", DIV]] },
  "cg2-051": { circle: { c: [2, 5], r: Math.sqrt(52) }, lines: [{ m: 0, c: 9, color: L2 }], pts: [[2, 5, "$A$", "left"], [8, 1, "$B$", "below right"], [8, 9, "$C_1$", "above"], [-4, 9, "$C_2$", "above"]] },
  "cg2-052": { segs: [seg([-1, 2], [7, 12])], pts: [[-1, 2, "$A$"], [7, 12, "$B$"], [3, 7, "$M$", "right", MID], [1, 4.5, "$C$", "above left", DIV]] },
  "cg2-053": { poly: { pts: [[1, 1], [4, 5], [7, 1]], fill: "blue!7" }, pts: [[1, 1, "$A$", "below left"], [4, 5, "$B$", "above"], [7, 1, "$C$", "below right"]] },
  "cg2-054": { circle: { c: [3, -1], r: Math.sqrt(50) }, lines: [{ m: 2, c: 0, color: L2 }], pts: [[3, -1, "$(3,-1)$", "below right"]] },
  "cg2-055": { poly: { pts: [[0, 3], [4, 0], [0, -5]], fill: "blue!7" }, segs: [seg([4, 0], [0, -1], { dash: true, color: DIV })], pts: [[0, 3, "$P$", "above left"], [4, 0, "$Q$", "right"], [0, -5, "$R$", "below left"], [0, -1, "$M$", "left", MID]] },
  "cg2-056": { circle: { c: [4, 7], r: 5 }, segs: [seg([1, 3], [7, 11], { color: L1 })], pts: [[1, 3, "$A$"], [7, 11, "$B$"], [4, 7, "$C$", "right", MID]] },
  "cg2-057": { segs: [seg([-3, 4], [11, -10])], pts: [[-3, 4, "$A$"], [11, -10, "$B$"], [1, 0, "$P$", "above right", DIV]] },
  "cg2-058": { poly: { pts: [[0, 0], [5, 0], [7, 4], [2, 4]], fill: "blue!6" }, segs: [seg([0, 0], [7, 4], { dash: true, color: DIV }), seg([5, 0], [2, 4], { dash: true, color: DIV })], pts: [[0, 0, "$A$", "below left"], [5, 0, "$B$", "below right"], [7, 4, "$C$", "above right"], [2, 4, "$D$", "above left"]] },
  "cg2-059": { segs: [seg([3, 1], [9, 9])], pts: [[3, 1, "$A$"], [9, 9, "$B$"], [5, 11 / 3, "$C$", "above left", DIV], [7, 19 / 3, "$D$", "above left", DIV]] },
  "cg2-060": { poly: { pts: [[-2, 6], [4, 2], [0, -4]], fill: "blue!7" }, pts: [[-2, 6, "$P$", "above left"], [4, 2, "$Q$", "right"], [0, -4, "$R$", "below"], [2 / 3, 4 / 3, "$G$", "right", DIV]] },
  "cg2-061": { circle: { c: [3, 4], r: 5 }, pts: [[3, 4, "$C$", "above left", MID], [0, 0, "$A$", "below left"], [6, 8, "$B$", "above right"]] },
  "cg2-062": { poly: { pts: [[2, -1], [6, 3], [10, -1]] }, lines: [{ vert: 6, color: PB }], pts: [[2, -1, "$A$", "below left"], [6, 3, "$B$", "above"], [10, -1, "$C$", "below right"], [6, -1, "", "below"]] },
  "cg2-063": { segs: [seg([1, 4], [7, -2])], pts: [[1, 4, "$A$"], [7, -2, "$B$"], [2.414, 2.586, "$P$", "above right", DIV]] },
  "cg2-064": { lines: [{ m: 0.5, c: 0.5, color: REF }], pts: [[1, 1, "$A$"], [5, 3, "$B$"], [-3, -1, "$C$"]] },
  "cg2-065": { circle: { c: [4, 3], r: 5 }, lines: [{ vert: 3, color: L2 }], pts: [[0, 6, "$A$", "above left"], [8, 0, "$B$", "below right"]] },
  "cg2-066": { poly: { pts: [[0, 0], [8, 0], [4, 6]] }, segs: [seg([4, 0], [6, 3], { color: DIV }), seg([6, 3], [2, 3], { color: DIV }), seg([2, 3], [4, 0], { color: DIV })], pts: [[0, 0, "$A$", "below left"], [8, 0, "$B$", "below right"], [4, 6, "$C$", "above"]] },
  "cg2-067": { segs: [seg([2, 3], [10, 7]), seg([10, 7], [14, 9], { dash: true, color: DIV })], pts: [[2, 3, "$A$"], [10, 7, "$B$"], [14, 9, "$C$", "above left", DIV]] },
  "cg2-068": { poly: { pts: [[1, 0], [9.333, 0], [7, 8], [-1.333, 8]], fill: "blue!6" }, pts: [[1, 0, "$A$", "below left"], [9.333, 0, "$B$", "below right"], [7, 8, "$C$", "above right"], [-1.333, 8, "$D$", "above left"]] },
  "cg2-069": { poly: { pts: [[0, 0], [12, 0], [4, 8]] }, segs: [seg([0, 0], [8, 4], { dash: true, color: DIV })], pts: [[0, 0, "$A$", "below left"], [12, 0, "$B$", "below right"], [4, 8, "$C$", "above"], [16 / 3, 8 / 3, "$G$", "right", MID]] },
  "cg2-070": { circle: { c: [0, 0], r: 1 }, segs: [seg([0.6, 0.8], [-0.6, -0.8], { color: L1 })], pts: [[0.6, 0.8, "", "above right"], [-0.6, -0.8, "", "below left"]] },
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/°/g, "^{\\circ}").replace(/√/g, "\\sqrt").replace(/×/g, "\\times ").replace(/²/g, "^{2}").replace(/₁/g, "_{1}").replace(/₂/g, "_{2}").replace(/—/g, "-").replace(/£/g, "").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e—]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/—/g, "---");
}
function prose(s) {
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last)); return o;
}
function ans(s) {
  if (s.includes("\\(")) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += escTxt(s.slice(last)); return o;
  }
  return /[\\^_=]/.test(s) ? "\\(\\displaystyle " + ctl(s) + "\\)" : escTxt(s);
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
const trim = (x) => (Math.round(x * 1000) / 1000).toString();
function niceStep(r) { const t = r / 8; for (const c of [1, 2, 5, 10, 20, 25, 50, 100]) if (c >= t) return c; return 200; }

function graph(spec) {
  const CW = 9.2, CH = 6.4;
  let xs = [0], ys = [0];
  const add = (x, y) => { xs.push(x); ys.push(y); };
  (spec.pts || []).forEach((p) => add(p[0], p[1]));
  (spec.segs || []).forEach((s) => { add(s.p[0][0], s.p[0][1]); add(s.p[1][0], s.p[1][1]); });
  if (spec.poly) spec.poly.pts.forEach((p) => add(p[0], p[1]));
  if (spec.circle) { const [cx, cy] = spec.circle.c, r = spec.circle.r; add(cx - r, cy - r); add(cx + r, cy + r); }
  (spec.lines || []).forEach((l) => { if (l.pts) { add(l.pts[0][0], l.pts[0][1]); add(l.pts[1][0], l.pts[1][1]); } if (l.vert !== undefined) add(l.vert, 0); });
  let xmin = Math.min(...xs), xmax = Math.max(...xs);
  if (xmax - xmin < 3) { xmin -= 4; xmax += 4; }
  (spec.lines || []).forEach((l) => { if (l.m !== undefined) { ys.push(l.m * xmin + l.c); ys.push(l.m * xmax + l.c); } });
  let ymin = Math.min(...ys), ymax = Math.max(...ys);
  if (ymax - ymin < 3) { ymin -= 4; ymax += 4; }
  let [Xa, Xb, Ya, Yb] = spec.win || [Math.floor(xmin - 1), Math.ceil(xmax + 1), Math.floor(ymin - 1), Math.ceil(ymax + 1)];
  const equal = spec.equal !== false;
  let sx, sy;
  if (equal) { const s = Math.min(CW / (Xb - Xa), CH / (Yb - Ya)); sx = sy = s; } else { sx = CW / (Xb - Xa); sy = CH / (Yb - Ya); }
  const px = (x) => (x - Xa) * sx, py = (y) => (y - Ya) * sy;
  const xstep = niceStep(Xb - Xa), ystep = niceStep(Yb - Ya);
  const ax0 = 0 >= Xa && 0 <= Xb ? 0 : Math.abs(Xa) < Math.abs(Xb) ? Xa : Xb;
  const ay0 = 0 >= Ya && 0 <= Yb ? 0 : Math.abs(Ya) < Math.abs(Yb) ? Ya : Yb;
  let t = "\\begin{tikzpicture}[>={Stealth[length=2mm]},font=\\footnotesize,line cap=round]\n";
  t += `\\begin{scope}\n\\clip (${f(px(Xa))},${f(py(Ya))}) rectangle (${f(px(Xb))},${f(py(Yb))});\n`;
  const gx = Math.floor(Xa / xstep) * xstep, gy = Math.floor(Ya / ystep) * ystep;
  t += `\\draw[gray!18] (${f(px(gx))},${f(py(gy))}) grid[xstep=${f(xstep * sx)},ystep=${f(ystep * sy)}] (${f(px(Xb))},${f(py(Yb))});\n`;
  if (spec.poly) { const pp = spec.poly.pts.map((p) => `(${f(px(p[0]))},${f(py(p[1]))})`).join(" -- "); if (spec.poly.fill) t += `\\fill[${spec.poly.fill}] ${pp} -- cycle;\n`; t += `\\draw[purple!70!black,thick] ${pp} -- cycle;\n`; }
  if (spec.circle) { const [cx, cy] = spec.circle.c; t += `\\draw[teal!70!black,thick] (${f(px(cx))},${f(py(cy))}) circle (${f(spec.circle.r * sx)});\n`; }
  (spec.lines || []).forEach((l) => {
    const col = l.color || L1, dash = l.dash ? "dashed," : "";
    if (l.vert !== undefined) t += `\\draw[${dash}${col},thick] (${f(px(l.vert))},${f(py(Ya))}) -- (${f(px(l.vert))},${f(py(Yb))});\n`;
    else { let m, c; if (l.m !== undefined) { m = l.m; c = l.c; } else { const [[x1, y1], [x2, y2]] = l.pts; m = (y2 - y1) / (x2 - x1); c = y1 - m * x1; } t += `\\draw[${dash}${col},thick] (${f(px(Xa))},${f(py(m * Xa + c))}) -- (${f(px(Xb))},${f(py(m * Xb + c))});\n`; }
  });
  (spec.segs || []).forEach((s) => { const col = s.color || L1, dash = s.dash ? "dashed," : ""; t += `\\draw[${dash}${col},very thick] (${f(px(s.p[0][0]))},${f(py(s.p[0][1]))}) -- (${f(px(s.p[1][0]))},${f(py(s.p[1][1]))});\n`; });
  t += "\\end{scope}\n";
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$x$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$y$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=2pt,scale=0.8]{$${trim(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=2pt,scale=0.8]{$${trim(y)}$};\n`; }
  (spec.pts || []).forEach((p) => { const col = p[4] || "red!80!black", anc = p[3] || "above right"; t += `\\fill[${col}] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.3pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.9] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Line Segments}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Coordinate Geometry (ref \\texttt{cg2})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Line Segments} questions, each with a fully worked
solution and a TikZ diagram on the coordinate plane: endpoints, segments, midpoints, points of division,
triangles, quadrilaterals and circles are all plotted. Several \\emph{find the unknown coordinate} questions
are shown as \\emph{locus} diagrams --- a fixed point with a line and a circle whose intersections are the
solutions.
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
    if (st.description) L += `\\textit{${n}${prose(st.description)}}\n`;
    if (st.workingLatex) L += `\\[\\begin{gathered}\n${ctl(st.workingLatex)}\n\\end{gathered}\\]\n`;
    if (st.explanation) L += `${prose(st.explanation)}\n\n`;
  });
  L += `\\begin{answerbox}\n\\textbf{Final answer:}\\quad ${ans(q.workedSolution.finalAnswer)}\n\\end{answerbox}\n`;
  if (q.workedSolution.commonMistakes && q.workedSolution.commonMistakes.length)
    L += `\\textbf{Common mistake.} ` + q.workedSolution.commonMistakes.map(prose).join(" ") + `\n\n`;
  if (D[q.id]) {
    L += `\\textbf{Diagram.}\n\n\\begin{center}\n${graph(D[q.id])}\n\\end{center}\n`;
    L += `\\small The points and segments shown on the coordinate plane.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " graphs)");
