/* Generates Equations_of_Straight_Lines.tex from cg1_equations_of_straight_line.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(
  __dirname,
  "..",
  "lib/data/questions/Year_1_A_Level_Maths/Coordinate_Geometry/cg1_equations_of_straight_line.ts"
);
const OUT = path.join(__dirname, "..", "Equations_of_Straight_Lines.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- per-question graph specs ----------
// line: {m,c} | {pts:[[x,y],[x,y]]} | {vert:x}, optional color/dash/label
// pts: [x,y,"label",anchor]; segs:[{p:[[..],[..]],dash}]; poly:{pts,fill}; circle:{c,r}; win:[Xa,Xb,Ya,Yb]; equal:bool; xlabel,ylabel
const REF = "gray";          // reference / given line
const L1 = "blue!70!black";  // main line
const L2 = "teal!70!black";  // second line
const PB = "orange!80!black"; // perpendicular / bisector
const D = {
  "cg1-001": { lines: [{ m: 3, c: -7 }], pts: [[0, -7, "$(0,-7)$", "left"]] },
  "cg1-002": { lines: [{ m: -2, c: 5 }], pts: [[0, 5, "$(0,5)$", "left"]] },
  "cg1-003": { lines: [{ m: 1 / 3, c: 4 }], pts: [[0, 4, "$(0,4)$", "left"]] },
  "cg1-004": { lines: [{ m: 4, c: -1 }], pts: [[0, -1, "$(0,-1)$", "left"]] },
  "cg1-005": { lines: [{ m: -2 / 3, c: 6 }], pts: [[0, 6, "$(0,6)$", "left"]] },
  "cg1-006": { lines: [{ m: 0.5, c: -3 }], pts: [[0, -3, "$(0,-3)$", "left"]] },
  "cg1-007": { lines: [{ pts: [[2, 5], [6, 13]] }], pts: [[2, 5, "$A$"], [6, 13, "$B$"]] },
  "cg1-008": { lines: [{ pts: [[1, 7], [4, 1]] }], pts: [[1, 7, "$A$"], [4, 1, "$B$"]] },
  "cg1-009": { lines: [{ m: 2, c: 7 }], pts: [[-2, 3, "$A$"], [4, 15, "$B$"]] },
  "cg1-010": { lines: [{ m: 2, c: -4 }], pts: [[0, -4, "$A$"], [5, 6, "$B$"]] },
  "cg1-011": { lines: [{ m: 1, c: 2 }], pts: [[-3, -1, "$A$"], [6, 8, "$B$"]] },
  "cg1-012": { lines: [{ m: -2, c: 1 }], pts: [[-5, 11, "$A$"], [3, -5, "$B$"]] },
  "cg1-013": { lines: [{ m: 3, c: -4 }] },
  "cg1-014": { lines: [{ m: 0.5, c: 3 }] },
  "cg1-015": { lines: [{ m: -2.5, c: -0.5 }], pts: [[3, -8, "$(3,-8)$", "below right"]] },
  "cg1-016": { lines: [{ m: 0.5, c: -2 }], pts: [[0, -2, "$(0,-2)$", "left"]] },
  "cg1-017": { lines: [{ m: -0.5, c: 2 }], pts: [[0, 2, "$(0,2)$", "left"]] },
  "cg1-018": { lines: [{ m: 2, c: -7 }], pts: [[5, 3, "$(5,3)$"]] },
  "cg1-019": { lines: [{ m: -3, c: 10 }], pts: [[2, 4, "$(2,4)$"]] },
  "cg1-020": { lines: [{ m: 0.75, c: 4 }], pts: [[-4, 1, "$(-4,1)$", "below right"]] },
  "cg1-021": { lines: [{ m: 5, c: -3 }], pts: [[2, 7, "$(2,7)$"]] },
  "cg1-022": { lines: [{ m: 2, c: 1 }], pts: [[1, 3, "$A$"], [4, 9, "$B$"], [10, 21, "$C$"]] },
  "cg1-023": { lines: [{ m: -4, c: 9 }], pts: [[1, 5, "", "above"], [2, 1, "$(2,1)$"], [0, 9, "$(0,9)$", "left"], [-1, 9, "$(-1,9)$", "above", "purple"], [3, -3, "$(3,-3)$", "below right"]] },
  "cg1-024": { segs: [{ p: [[2, 6], [8, 14]] }], pts: [[2, 6, "$A$"], [8, 14, "$B$"], [5, 10, "$M$", "below right", "orange!80!black"]] },
  "cg1-025": { segs: [{ p: [[-3, 7], [5, -1]] }], pts: [[-3, 7, "$P$"], [5, -1, "$Q$"], [1, 3, "$M$", "above right", "orange!80!black"]] },
  "cg1-026": { segs: [{ p: [[1, 3], [7, -5]] }], pts: [[1, 3, "$A$"], [4, -1, "$M$", "above right", "orange!80!black"], [7, -5, "$B$"]] },
  "cg1-027": { lines: [{ m: 2, c: 1 }], pts: [[2, 5, "$C$"], [6, 13, "$D$"], [4, 9, "$M$", "below right", "orange!80!black"]] },
  "cg1-028": { lines: [{ m: 1.5, c: 2 }], pts: [[0, 2, "", "left"], [12, 20, "$(12,20)$", "below right"]], xlabel: "k", ylabel: "C", equal: false, win: [0, 14, 0, 24] },
  "cg1-029": { lines: [{ m: -2, c: 20 }], pts: [[0, 20, "", "left"], [4, 12, "$(4,12)$", "above right"], [10, 0, "$(10,0)$", "above right"]], xlabel: "t", ylabel: "h", equal: false, win: [0, 12, 0, 22] },
  "cg1-030": { lines: [{ m: 0.05, c: 10, color: L1 }, { m: 0, c: 25, color: L2 }], pts: [[300, 25, "$(300,25)$", "above left"]], xlabel: "m", ylabel: "C", equal: false, win: [0, 420, 0, 30] },
  "cg1-031": { lines: [{ m: 3, c: -5, color: REF }, { m: 3, c: 1, color: L1 }], pts: [[2, 7, "$(2,7)$"]] },
  "cg1-032": { lines: [{ m: 2, c: 1, color: REF }, { m: -0.5, c: 5, color: L1 }], pts: [[4, 3, "$(4,3)$"]] },
  "cg1-033": { lines: [{ m: 2, c: 4, color: REF }, { m: -0.5, c: 4, color: L1 }], pts: [[0, 4, "$L_1$", "left", REF], [6, 1, "$(6,1)$", "below right"]] },
  "cg1-034": { lines: [{ pts: [[1, 5], [7, 2]] }], pts: [[1, 5, "$A$"], [7, 2, "$B$"], [13, -1, "$C$"], [4, 3.5, "$M$", "above right", "orange!80!black"]] },
  "cg1-035": { lines: [{ pts: [[2, 1], [6, 1]], color: REF }, { vert: 4, color: PB }], pts: [[2, 1, "$P$", "above left"], [6, 1, "$Q$", "above right"], [4, 1, "$M$", "below"]] },
  "cg1-036": { lines: [{ m: 3, c: 2 }], pts: [[1, 5, "$(1,5)$"]] },
  "cg1-037": { lines: [{ m: -1, c: 9 }], pts: [[2, 7, "$A$"], [6, 3, "$B$"]] },
  "cg1-038": { lines: [{ m: -2.5, c: 4 }] },
  "cg1-039": { lines: [{ m: 2 / 3, c: 3 }], pts: [[-3, 1, "$(-3,1)$", "below right"], [0, 3, "$(0,3)$", "left"]] },
  "cg1-040": { lines: [{ m: 2, c: -2 }], pts: [[0, -2, "$(0,-2)$", "left"], [4, 6, "$(4,6)$"]] },
  "cg1-041": { segs: [{ p: [[3, -1], [7, 5]] }], pts: [[3, -1, "$A$"], [7, 5, "$B$"], [5, 2, "$M$", "above left", "orange!80!black"]] },
  "cg1-042": { segs: [{ p: [[1, 3], [4, 7]] }], pts: [[1, 3, "$P$"], [4, 7, "$Q$"]] },
  "cg1-043": { lines: [{ m: 2, c: -3, color: REF }, { m: 2, c: 2, color: L1 }], pts: [[1, 4, "$(1,4)$"]] },
  "cg1-044": { lines: [{ m: 0.5, c: 5, color: REF }, { m: -2, c: 7, color: L1 }], pts: [[3, 1, "$(3,1)$"]] },
  "cg1-045": { lines: [{ m: 3, c: -1, color: L1 }, { m: -1, c: 7, color: L2 }], pts: [[2, 5, "$(2,5)$"]] },
  "cg1-046": { lines: [{ m: 2, c: 0 }], pts: [[1, 2, "$A$"], [3, 6, "$B$"], [5, 10, "$C$"]] },
  "cg1-047": { segs: [{ p: [[2, 4], [6, 0]], color: REF }], lines: [{ m: 1, c: -2, color: PB }], pts: [[2, 4, "$A$"], [6, 0, "$B$"], [4, 2, "$M$", "above right", "orange!80!black"]] },
  "cg1-048": { lines: [{ m: -4, c: 1 }], pts: [[-1, 5, "$(-1,5)$", "above right"], [0.25, 0, "$(\\tfrac14,0)$", "below right"]] },
  "cg1-049": { lines: [{ m: 4 / 3, c: 1 / 3 }], pts: [[2, 3, "$(2,3)$"], [5, 7, "$(5,7)$"]] },
  "cg1-050": { lines: [{ m: 1.5, c: 3 }], poly: { pts: [[0, 0], [-2, 0], [0, 3]], fill: "blue!8" }, pts: [[0, 0, "$O$", "below right"], [-2, 0, "$A$", "below"], [0, 3, "$B$", "above right"]] },
  "cg1-051": { lines: [{ m: -1, c: 3 }], pts: [[-2, 5, "$A$"], [4, -1, "$B$"]] },
  "cg1-052": { lines: [{ m: 4 / 3, c: 4 }] },
  "cg1-053": { poly: { pts: [[0, 0], [6, 0], [3, 4]] }, lines: [{ vert: 3, color: PB }], pts: [[0, 0, "$A$", "below left"], [6, 0, "$B$", "below right"], [3, 4, "$C$", "above"], [3, 0, "$M$", "below"]] },
  "cg1-054": { circle: { c: [0, 0], r: Math.sqrt(5) }, lines: [{ m: 2, c: 5, color: L1 }, { m: 2, c: -5, color: L2 }], win: [-6, 6, -7, 7] },
  "cg1-055": { lines: [{ m: -0.75, c: 2.5 }], segs: [{ p: [[0, 0], [1.2, 1.6]], dash: true, color: PB }], pts: [[0, 0, "$O$", "below left"], [1.2, 1.6, "$F$", "above right", "orange!80!black"]] },
  "cg1-056": { lines: [{ m: 0.75, c: -3 }], pts: [[4, 0, "$(4,0)$", "above right"], [0, -3, "$(0,-3)$", "left"]] },
  "cg1-057": { lines: [{ m: -2 / 3, c: 2, color: L1 }, { m: -2 / 3, c: 5 / 6, color: L2 }] },
  "cg1-058": { lines: [{ m: 3, c: -2, color: L1 }, { m: -1 / 3, c: 3, color: L2 }], pts: [[6, 1, "$(6,1)$", "below right"], [1.5, 2.5, "$(\\tfrac32,\\tfrac52)$", "above left"]] },
  "cg1-059": { lines: [{ m: 1.5, c: 0.5 }], pts: [[1, 2, "$(a,2a)$", "above left"], [3, 5, "$(3a,5a)$", "below right"]] },
  "cg1-060": { lines: [{ m: 1, c: -7 }], pts: [[5, -2, "$(5,-2)$", "above left"]] },
  "cg1-061": { poly: { pts: [[0, 0], [4, 0], [5, 3], [1, 3]], fill: "blue!7" }, pts: [[0, 0, "$A$", "below left"], [4, 0, "$B$", "below right"], [5, 3, "$C$", "above right"], [1, 3, "$D$", "above left"]] },
  "cg1-062": { lines: [{ m: 1, c: 0, color: REF }], pts: [[3, 7, "$(3,7)$", "above left"], [7, 3, "$(7,3)$", "below right"]] },
  "cg1-063": { lines: [{ m: 3, c: 4 }], pts: [[2, 10, "$(2,10)$"], [0, 4, "$(0,4)$", "left"]] },
  "cg1-064": { segs: [{ p: [[1, 3], [5, 7]], color: REF }], lines: [{ m: -1, c: 8, color: PB }], pts: [[1, 3, "$A$"], [5, 7, "$B$"], [3, 5, "$M$", "above left", "orange!80!black"]] },
  "cg1-065": { poly: { pts: [[0, 0], [5, 0], [2, 6]], fill: "blue!8" }, pts: [[0, 0, "$O$", "below left"], [5, 0, "", "below right"], [2, 6, "", "above"]] },
  "cg1-066": { lines: [{ m: 3, c: 5 }], pts: [[-4, -7, "$(-4,-7)$", "below right"]] },
  "cg1-067": { lines: [{ m: 2, c: 1, color: L1 }, { m: -0.5, c: 6, color: L2 }], pts: [[2, 5, "$(2,5)$"]] },
  "cg1-068": { lines: [{ m: -5 / 3, c: 5 }], pts: [[3, 0, "$(3,0)$", "above right"], [0, 5, "$(0,5)$", "left"]] },
  "cg1-069": { lines: [{ m: 2, c: 3 }], segs: [{ p: [[4, 1], [0, 3]], dash: true, color: PB }], pts: [[4, 1, "$P$", "below right"], [0, 3, "$F$", "above left", "orange!80!black"]] },
  "cg1-070": { lines: [{ pts: [[1, -3], [5, 5]], color: L1 }, { m: -0.5, c: 2.5, color: PB }], pts: [[1, -3, "$A$"], [5, 5, "$B$"], [3, 1, "$M$", "above left", "orange!80!black"]] },
};

// ---------- text helpers (hardened) ----------
const ctl = (s) => s.replace(/°/g, "^{\\circ}").replace(/—/g, "-").replace(/£/g, "").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t
    .replace(/[^\x09\x0a\x0d\x20-\x7e£°—]/g, "")
    .replace(/\\/g, "\\textbackslash ")
    .replace(/([&%$#_{}])/g, "\\$1")
    .replace(/\^/g, "\\textasciicircum ")
    .replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/—/g, "---");
}
function prose(s) {
  let o = "", last = 0, m;
  const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += escTxt(s.slice(last));
  return o;
}
function ans(s) {
  if (s.includes("\\(")) {
    let o = "", last = 0, m;
    const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += escTxt(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += escTxt(s.slice(last));
    return o;
  }
  // bare: render as maths only if it looks mathematical, else as prose (preserve spaces)
  return /[\\^_=]/.test(s) ? "\\(\\displaystyle " + ctl(s) + "\\)" : escTxt(s);
}
const wrap = (tikz) => `\\resizebox{\\ifdim\\width>\\linewidth \\linewidth\\else \\width\\fi}{!}{%\n${tikz}\n}`;
const f = (n) => Number(n.toFixed(3)).toString();
const trim = (x) => { const v = Math.round(x * 1000) / 1000; return v.toString(); };
function niceStep(r) { const t = r / 8; for (const c of [1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000]) if (c >= t) return c; return 2000; }

// ---------- the plotting engine ----------
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
  // grid + features clipped to window
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
  // axes
  t += `\\draw[->] (${f(px(Xa))},${f(py(ay0))}) -- (${f(px(Xb) + 0.2)},${f(py(ay0))}) node[right]{$${spec.xlabel || "x"}$};\n`;
  t += `\\draw[->] (${f(px(ax0))},${f(py(Ya))}) -- (${f(px(ax0))},${f(py(Yb) + 0.2)}) node[above]{$${spec.ylabel || "y"}$};\n`;
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=2pt,scale=0.8]{$${trim(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=2pt,scale=0.8]{$${trim(y)}$};\n`; }
  // points
  (spec.pts || []).forEach((p) => { const col = p[4] || "red!80!black", anc = p[3] || "above right"; t += `\\fill[${col}] (${f(px(p[0]))},${f(py(p[1]))}) circle (2.3pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.9] at (${f(px(p[0]))},${f(py(p[1]))}) {${p[2]}};\n`; });
  t += "\\end{tikzpicture}";
  return wrap(t);
}

// ---------- document ----------
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

\\title{\\textbf{Equations of Straight Lines}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Coordinate Geometry (ref \\texttt{cg1})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Equations of Straight Lines} questions, each with a
fully worked solution and a TikZ diagram drawn on the coordinate plane: the line(s) are plotted from their
equations, together with the given points, intercepts, midpoints, intersections, and (where relevant)
triangles, a circle, or a perpendicular foot.
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
