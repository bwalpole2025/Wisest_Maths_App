/* Generates Parallel_and_Perpendicular_Lines.tex from cg3_Parallel_and_Perpendicular_Lines.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Coordinate_Geometry/cg3_Parallel_and_Perpendicular_Lines.ts");
const OUT = path.join(__dirname, "..", "Parallel_and_Perpendicular_Lines.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

const REF = "gray", L1 = "blue!70!black", L2 = "teal!70!black", PB = "orange!80!black", MID = "orange!80!black", DIV = "purple!70!black";
const seg = (a, b, o = {}) => Object.assign({ p: [a, b] }, o);

const D = {
  "cg3-001": { lines: [{ m: 4, c: -3, color: REF }, { m: 4, c: -1, color: L1 }, { m: -4, c: 0.125, color: L2 }, { m: 0.25, c: 0, color: DIV }] },
  "cg3-004": { lines: [{ m: 4, c: -2, color: REF }, { m: 4, c: 5 / 3, color: L1 }] },
  "cg3-005": { lines: [{ m: 3, c: -1, color: REF }, { m: 3, c: 2, color: L1 }], pts: [[2, 8, "$(2,8)$"]] },
  "cg3-006": { lines: [{ m: -2, c: 5, color: REF }, { m: -2, c: 7, color: L1 }], pts: [[3, 1, "$(3,1)$"]] },
  "cg3-007": { lines: [{ m: 0.5, c: 2 / 3, color: REF }, { m: 0.5, c: 5, color: L1 }], pts: [[0, 5, "$(0,5)$", "left"]] },
  "cg3-008": { lines: [{ m: -2.5, c: 3, color: REF }, { m: -2.5, c: 7, color: L1 }], pts: [[4, -3, "$(4,-3)$", "below right"]] },
  "cg3-009": { lines: [{ m: 4 / 3, c: 3, color: REF }, { m: 4 / 3, c: 6, color: L1 }], pts: [[-3, 2, "$(-3,2)$", "above left"]] },
  "cg3-010": { lines: [{ m: 2, c: 3, color: REF }, { m: 2, c: -13, color: L1 }], pts: [[0, 3, "$(0,3)$", "left"], [4, 11, "$(4,11)$"], [6, -13, "$(6,-1)$"]] },
  "cg3-011": { lines: [{ m: -2 / 3, c: 2, color: REF }, { m: -2 / 3, c: 9, color: L1 }], pts: [[6, 5, "$(6,5)$"]] },
  "cg3-012": { lines: [{ m: 1.5, c: 1, color: L1 }, { m: 1.5, c: -6, color: L2 }], pts: [[2, 4, "$(2,4)$"], [6, 3, "$(6,3)$"]] },
  "cg3-013": { lines: [{ m: 2, c: -1, color: REF }, { m: -0.5, c: 5, color: L1 }], pts: [[4, 3, "$(4,3)$"]] },
  "cg3-014": { lines: [{ m: -1 / 3, c: 4, color: REF }, { m: 3, c: -5, color: L1 }], pts: [[1, -2, "$(1,-2)$", "below right"]] },
  "cg3-015": { lines: [{ m: 4, c: 3, color: REF }, { m: -0.25, c: 3, color: L1 }], pts: [[8, 1, "$(8,1)$"]] },
  "cg3-016": { lines: [{ m: -3 / 5, c: 2 / 5, color: REF }, { m: 5 / 3, c: 37 / 3, color: L1 }], pts: [[-5, 4, "$(-5,4)$", "above left"]] },
  "cg3-017": { lines: [{ m: -1 / 3, c: 0.5, color: REF }, { m: 3, c: -13, color: L1 }], pts: [[3, -4, "$(3,-4)$", "below right"]] },
  "cg3-018": { segs: [seg([1, 5], [4, 11], { color: REF })], lines: [{ m: -0.5, c: 9.25, color: PB }], pts: [[1, 5, "$A$"], [4, 11, "$B$"], [2.5, 8, "$M$", "right", MID]] },
  "cg3-019": { lines: [{ m: 4, c: -1, color: REF }, { m: -0.25, c: 2.5, color: L1 }] },
  "cg3-020": { lines: [{ m: 1.5, c: 0.25, color: REF }, { m: -2 / 3, c: 9, color: L1 }], pts: [[3, 7, "$(3,7)$"]] },
  "cg3-021": { lines: [{ m: 2.5, c: -5, color: REF }, { m: -0.4, c: 3.8, color: L1 }], pts: [[2, 3, "$(a,b)$"]] },
  "cg3-022": { lines: [{ m: 2 / 3, c: 1, color: REF }, { m: -1.5, c: 9, color: L1 }], pts: [[6, 0, "$(6,0)$", "below right"]] },
  "cg3-023": { segs: [seg([2, 6], [8, 2], { color: REF })], lines: [{ m: 1.5, c: -3.5, color: PB }], pts: [[2, 6, "$A$"], [8, 2, "$B$"], [5, 4, "$M$", "below left", MID]] },
  "cg3-024": { segs: [seg([-2, 1], [4, 7], { color: REF })], lines: [{ m: -1, c: 5, color: PB }], pts: [[-2, 1, "$P$"], [4, 7, "$Q$"], [1, 4, "$M$", "below right", MID]] },
  "cg3-025": { lines: [{ m: 2, c: -3, color: PB }], segs: [seg([1, 4], [5, 2], { color: L1 })], pts: [[1, 4, "$C$"], [5, 2, "$D$"], [3, 1, "$M$", "below right", MID]] },
  "cg3-026": { segs: [seg([0, -3], [6, 5], { color: REF })], lines: [{ m: -0.75, c: 3.25, color: PB }], pts: [[0, -3, "$A$", "below right"], [6, 5, "$B$"], [3, 1, "$M$", "right", MID]] },
  "cg3-027": { poly: { pts: [[0, 4], [4, 0], [6, 2]], fill: "blue!7" }, pts: [[0, 4, "$P$", "above left"], [4, 0, "$Q$", "below"], [6, 2, "$R$", "right"]] },
  "cg3-028": { poly: { pts: [[0, 0], [4, 2], [2, 6]], fill: "blue!7" }, pts: [[0, 0, "$A$", "below left"], [4, 2, "$B$", "right"], [2, 6, "$C$", "above"]] },
  "cg3-029": { lines: [{ m: 3, c: -4, color: REF }, { m: -1 / 3, c: 17 / 3, color: L1 }], pts: [[2, 5, "$A$", "above left"], [2.9, 4.7, "", "below right", DIV]] },
  "cg3-030": { lines: [{ m: 2, c: 4, color: L1 }, { m: -0.5, c: 1.5, color: L2 }], pts: [[-1, 2, "$(-1,2)$", "below left", DIV]] },
  "cg3-031": { lines: [{ m: 2, c: 1, color: REF }, { m: 2, c: -8, color: L1 }, { m: -0.5, c: 13.5, color: PB }], pts: [[1, 3, "$A$"], [5, 11, "$B$"], [3, -2, "$C$", "below right"]] },
  "cg3-032": { lines: [{ m: -0.75, c: 6, color: REF }, { m: -0.75, c: 2, color: L1 }, { m: 4 / 3, c: 0, color: PB }], pts: [[8, 0, "$(8,0)$", "below right"], [0, 6, "$(0,6)$", "left"], [4, -1, "$(4,-1)$", "below right"]] },
  "cg3-033": { poly: { pts: [[0, 2], [4, 4], [6, 0], [2, -2]], fill: "blue!6" }, pts: [[0, 2, "$A$", "left"], [4, 4, "$B$", "above"], [6, 0, "$C$", "right"], [2, -2, "$D$", "below"]] },
  "cg3-034": { lines: [{ m: 0.5, c: 3, color: REF }, { m: -2, c: 9, color: L1 }], pts: [[4, 1, "$(4,1)$", "below right"], [2.4, 4.2, "", "above right", DIV]] },
  "cg3-035": { segs: [seg([2, 7], [8, 5], { color: REF })], lines: [{ m: 3, c: -9, color: PB }], pts: [[2, 7, "$A$"], [8, 5, "$B$"], [5, 6, "$M$", "above right", MID], [10 / 3, 1, "$C$", "below right", DIV]] },
  "cg3-036": { lines: [{ m: 4, c: -1, color: REF }, { m: 4, c: -5, color: L1 }], pts: [[2, 3, "$(2,3)$"]] },
  "cg3-037": { lines: [{ m: 3, c: 2, color: REF }, { m: -1 / 3, c: 3, color: L1 }], pts: [[6, 1, "$(6,1)$"]] },
  "cg3-038": { lines: [{ m: 0.4, c: 1, color: L1 }, { m: 0.4, c: 2, color: L2 }] },
  "cg3-039": { lines: [{ m: -2, c: 5, color: REF }, { m: 0.5, c: 3, color: L1 }] },
  "cg3-040": { lines: [{ m: -0.75, c: 3, color: REF }, { m: -0.75, c: 0, color: L1 }] },
  "cg3-041": { lines: [{ m: 0.4, c: 2, color: REF }, { m: -2.5, c: 9, color: L1 }], pts: [[4, -1, "$(4,-1)$", "below right"]] },
  "cg3-042": { lines: [{ m: 5, c: -3, color: L1 }, { m: -0.2, c: 4, color: L2 }] },
  "cg3-043": { lines: [{ m: 2, c: -4, color: REF }, { m: 2, c: 2, color: L1 }] },
  "cg3-044": { segs: [seg([1, 5], [3, -1], { color: REF })], lines: [{ m: 1 / 3, c: 2 / 3, color: L1 }], pts: [[1, 5, "$A$"], [3, -1, "$B$"], [4, 2, "$(4,2)$"]] },
  "cg3-045": { lines: [{ m: 2, c: 1, color: REF }], pts: [[3, 7, "$P$"]] },
  "cg3-046": { lines: [{ m: 1, c: 1, color: REF }], pts: [[4, 5, "$P$"]] },
  "cg3-047": { lines: [{ m: 3, c: -2, color: REF }], segs: [seg([1, 6], [2.5, 5.5], { dash: true, color: PB })], pts: [[1, 6, "$P$", "above left"], [2.5, 5.5, "$F$", "above right", MID]] },
  "cg3-048": { lines: [{ m: -0.75, c: 6, color: REF }, { m: 4 / 3, c: -32 / 3, color: L1 }], pts: [[8, 0, "$A$", "above right"]] },
  "cg3-049": { lines: [{ m: 0.75, c: -0.25, color: REF }, { m: -4 / 3, c: 2.5, color: L1 }] },
  "cg3-050": { poly: { pts: [[0, 0], [6, 0], [2, 4]], fill: "blue!7" }, lines: [{ vert: 2, color: PB }], pts: [[0, 0, "$A$", "below left"], [6, 0, "$B$", "below right"], [2, 4, "$C$", "above"], [2, 0, "", "below"]] },
  "cg3-051": { poly: { pts: [[0, 0], [6, 0], [2, 4]], fill: "blue!7" }, lines: [{ m: 1, c: 0, color: PB }], pts: [[0, 0, "$A$", "below left"], [6, 0, "$B$", "below right"], [2, 4, "$C$", "above"]] },
  "cg3-052": { lines: [{ m: -4 / 3, c: 7 / 3, color: REF }], segs: [seg([2, -1], [2.32, -0.76], { dash: true, color: PB })], pts: [[2, -1, "$(2,-1)$", "below right"], [2.32, -0.76, "$F$", "above right", MID]] },
  "cg3-053": { lines: [{ m: 2, c: 0, color: L1 }, { m: 2, c: 6.7, color: L2 }] },
  "cg3-054": { lines: [{ m: -2 / 7, c: 2, color: REF }, { m: -2 / 7, c: -11 / 7, color: L1 }], pts: [[5, -3, "$(5,-3)$", "below right"]] },
  "cg3-055": { lines: [{ m: 2, c: -2, color: L1 }, { m: -0.5, c: 5.5, color: L2 }], pts: [[3, 4, "$(3,4)$"]] },
  "cg3-056": { poly: { pts: [[0, 1], [4, 3], [3, 5], [-1, 3]], fill: "blue!6" }, pts: [[0, 1, "$A$", "below"], [4, 3, "$B$", "right"], [3, 5, "$C$", "above"], [-1, 3, "$D$", "left"]] },
  "cg3-057": { lines: [{ m: -2 / 3, c: 4, color: REF }, { m: 1.5, c: 5, color: L1 }], pts: [[0, 5, "$(0,5)$", "left"], [-10 / 3, 0, "$(-\\tfrac{10}{3},0)$", "below left"]] },
  "cg3-058": { segs: [seg([1, -3], [5, 1], { color: REF })], lines: [{ m: -1, c: 2, color: PB }], pts: [[1, -3, "", "below"], [5, 1, "", "right"], [3, -1, "$M$", "below right", MID]] },
  "cg3-059": { lines: [{ m: 2, c: 0, color: REF }, { m: 2, c: 3, color: L1 }], pts: [[1, 2, "$(1,2)$"], [4, 8, "$(4,8)$"]] },
  "cg3-060": { lines: [{ m: 3, c: 0, color: L1 }, { m: -1 / 3, c: 4, color: L2 }, { m: 3, c: -5, color: REF }] },
  "cg3-061": { lines: [{ m: 1, c: 0, color: REF }], pts: [[5, 2, "$(5,2)$", "below right"], [2, 5, "$(2,5)$", "above left"]] },
  "cg3-062": { lines: [{ m: -2 / 3, c: 3, color: REF }, { m: 1.5, c: 2, color: L1 }] },
  "cg3-063": { poly: { pts: [[0, 3], [4, 0], [0, -3], [-4, 0]], fill: "blue!6" }, segs: [seg([0, 3], [0, -3], { dash: true, color: DIV }), seg([-4, 0], [4, 0], { dash: true, color: DIV })] },
  "cg3-064": { lines: [{ m: 2, c: 0, color: L1 }, { m: -0.5, c: 5, color: L2 }], poly: { pts: [[0, 0], [10, 0], [2, 4]], fill: "blue!7" }, pts: [[0, 0, "$O$", "below left"], [10, 0, "", "below right"], [2, 4, "", "above"]] },
  "cg3-065": { lines: [{ m: 2, c: -3, color: REF }], segs: [seg([0, 4], [2.8, 2.6], { dash: true, color: PB })], pts: [[0, 4, "$A$", "above left"], [2.8, 2.6, "$B$", "below right", MID]] },
  "cg3-066": { lines: [{ m: 5, c: -10, color: REF }, { m: 5, c: 8, color: L1 }], pts: [[-1, 3, "$(-1,3)$", "left"], [0, 8, "$(0,8)$", "left"]] },
  "cg3-067": { lines: [{ m: -1, c: 3, color: L1 }, { m: -1, c: -5, color: L2 }] },
  "cg3-068": { lines: [{ m: 1, c: 2, color: REF }, { m: 3, c: -4, color: L2 }, { m: -1, c: 8, color: L1 }], pts: [[3, 5, "$(3,5)$", "above right", DIV]] },
  "cg3-069": { segs: [seg([-1, 4], [3, -2], { color: REF })], lines: [{ m: 2 / 3, c: -1 / 3, color: L1 }], pts: [[-1, 4, ""], [3, -2, ""], [2, 1, "$(2,1)$"], [0, -1 / 3, "", "left"]] },
  "cg3-070": { poly: { pts: [[1, 1], [5, 3], [3, 7]], fill: "blue!6" }, lines: [{ m: -2, c: 13, color: PB }, { m: 0.5, c: 0.5, color: L1 }], pts: [[1, 1, "$P$", "below left"], [5, 3, "$Q$", "below right"], [3, 7, "$R$", "above"], [5, 3, "$H$", "above right", DIV]] },
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/✓/g, "\\checkmark ").replace(/°/g, "^{\\circ}").replace(/√/g, "\\sqrt").replace(/×/g, "\\times ").replace(/²/g, "^{2}").replace(/—/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e—⟹✓]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/—/g, "---").replace(/⟹/g, "$\\Rightarrow$").replace(/✓/g, "$\\checkmark$");
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

\\title{\\textbf{Parallel and Perpendicular Lines}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Coordinate Geometry (ref \\texttt{cg3})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Parallel and Perpendicular Lines} questions, each with
a fully worked solution and (where a single plot is meaningful) a TikZ diagram on the coordinate plane:
the given line is drawn in grey and the answer line in blue, with parallel lines sharing a gradient and
perpendicular lines meeting at a right angle (the axes use equal scaling so right angles look right).
Perpendicular bisectors, altitudes, feet of perpendiculars, triangles and quadrilaterals are shown too.
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
    L += `\\small The line(s) and key points shown on the coordinate plane.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " graphs)");
