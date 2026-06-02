/* Generates Modelling_Exponential_Growth_and_Decay.tex from el5_modelling_exponential_growth_and_decay.ts */
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "lib/data/questions/Year_1_A_Level_Maths/Exponentials_and_Logarithms/el5_modelling_exponential_growth_and_decay.ts");
const OUT = path.join(__dirname, "..", "Modelling_Exponential_Growth_and_Decay.tex");

const src = fs.readFileSync(SRC, "utf8");
const out = ts.transpileModule(src, { compilerOptions: { module: "esnext", target: "es2020" } });
const js = out.outputText.replace(/import\s+\{[^}]*\}\s+from[^;]*;/, "").replace(/export const questions\b/, "globalThis.Q");
eval(js);
const questions = globalThis.Q;

// ---------- diagram spec helpers ----------
const exp = Math.exp, pow = Math.pow, log = Math.log;
const ex = (k, A = 1) => (x) => A * exp(k * x);
const po = (b, A = 1) => (x) => A * pow(b, x);
const c = (fn, label, lp) => ({ fn, label, lp });
const H = (y, label) => ({ y, label });
const V = (x, label) => ({ x, label });
const TG = (p, m) => ({ p, m });
const G = (cs, win, o = {}) => ({ cs, win, pts: o.pts || [], hlines: o.hlines, vlines: o.vlines, tangents: o.tangents, xlabel: o.xlabel || "t", ylabel: o.ylabel || "y", equal: o.equal });

const D = {
  "el5-001": G([c(ex(0.05, 200), "B=200e^{0.05t}")], [0, 15, 0, 440], { pts: [[0, 200, "$(0,200)$", "above left"], [10, 200 * exp(0.5), "$(10,330)$", "above left"]], ylabel: "B" }),
  "el5-002": G([c(ex(-0.03, 500), "M=500e^{-0.03t}")], [0, 40, 0, 560], { pts: [[0, 500, "$(0,500)$", "above right"], [20, 500 * exp(-0.6), "$(20,274)$", "above right"]], ylabel: "M" }),
  "el5-003": G([c((t) => 220 - 200 * exp(-0.1 * t), "T=220-200e^{-0.1t}")], [0, 40, 0, 240], { pts: [[0, 20, "$(0,20)$", "below right"], [8, 220 - 200 * exp(-0.8), "$(8,130)$", "above left"]], hlines: [H(220, "limit $220$")], ylabel: "T" }),
  "el5-004": G([c(ex(-0.15, 8000), "V=8000e^{-0.15t}")], [0, 20, 0, 9000], { pts: [[0, 8000, "$(0,8000)$", "above right"], [4, 8000 * exp(-0.6), "$(4,4390)$", "above right"]], ylabel: "V" }),
  "el5-005": G([c(po(1.04, 2500), "A=2500(1.04^t)")], [0, 15, 0, 4500], { pts: [[0, 2500, "$(0,2500)$", "above left"], [6, 2500 * pow(1.04, 6), "$(6,3163.30)$", "above left"]], ylabel: "A" }),
  "el5-006": G([c(ex(-0.2, 4), "C=4e^{-0.2t}")], [0, 20, 0, 4.5], { pts: [[0, 4, "$(0,4)$", "above right"], [3, 4 * exp(-0.6), "$(3,2.20)$", "above right"]], ylabel: "C" }),
  "el5-007": G([c(ex(0.06, 150), "P=150e^{0.06t}")], [0, 30, 0, 950], { pts: [[0, 150, "$(0,150)$", "above left"], [log(500 / 150) / 0.06, 500, "$(20.1,500)$", "above left"]], hlines: [H(500, "$P=500$")], ylabel: "P" }),
  "el5-008": G([c(ex(-0.04, 800), "M=800e^{-0.04t}")], [0, 50, 0, 900], { pts: [[0, 800, "$(0,800)$", "above right"], [log(800 / 200) / 0.04, 200, "$(34.7,200)$", "above right"]], hlines: [H(200, "$M=200$")], ylabel: "M" }),
  "el5-009": G([c(po(1.025, 1000), "A=1000(1.025^t)")], [0, 25, 0, 1900], { pts: [[0, 1000, "$(0,1000)$", "above left"], [log(1.5) / log(1.025), 1500, "$(16.4,1500)$", "above left"]], hlines: [H(1500, "$A=1500$")], ylabel: "A" }),
  "el5-010": G([c(po(0.88, 12000), "V=12000(0.88^t)")], [0, 20, 0, 13000], { pts: [[0, 12000, "$(0,12000)$", "above right"], [log(5000 / 12000) / log(0.88), 5000, "$(6.85,5000)$", "above right"]], hlines: [H(5000, "$V=5000$")], ylabel: "V" }),
  "el5-011": G([c(ex(-0.35, 8), "C=8e^{-0.35t}")], [0, 12, 0, 9], { pts: [[0, 8, "$(0,8)$", "above right"], [log(8) / 0.35, 1, "$(5.94,1)$", "above right"]], hlines: [H(1, "$C=1$")], ylabel: "C" }),
  "el5-012": G([c((t) => 180 * exp(-0.08 * t) + 20, "T=180e^{-0.08t}+20")], [0, 50, 0, 210], { pts: [[0, 200, "$(0,200)$", "above right"], [log(180 / 40) / 0.08, 60, "$(18.8,60)$", "above right"]], hlines: [H(60, "$T=60$"), H(20, "limit $20$")], ylabel: "T" }),
  "el5-013": G([c(po(3, 500), "V=500(3^t)")], [0, 8, 0, 1200000], { pts: [[0, 500, "$(0,500)$", "above left"], [log(2000) / log(3), 1000000, "$(6.9,10^6)$", "above left"]], hlines: [H(1000000, "$10^6$")], ylabel: "V" }),
  "el5-014": G([c(ex(log(2.5) / 5, 80), "P=80e^{0.183t}")], [0, 8, 0, 260], { pts: [[0, 80, "$(0,80)$", "above left"], [5, 200, "$(5,200)$", "above left"]], ylabel: "P" }),
  "el5-015": G([c(ex(log(350 / 600) / 10, 600), "M=600e^{-0.0539t}")], [0, 30, 0, 680], { pts: [[0, 600, "$(0,600)$", "above right"], [10, 350, "$(10,350)$", "above right"]], ylabel: "M" }),
  "el5-016": G([c(ex(log(6) / 8, 3), "F=3e^{0.224t}")], [0, 18, 0, 100], { pts: [[0, 3, "$(0,3)$", "above left"], [8, 18, "$(8,18)$", "above left"], [15, 3 * exp(log(6) / 8 * 15), "$(15,86.4)$", "left"]], ylabel: "F" }),
  "el5-017": G([c(ex(log(5) / 4, 5000 / exp(log(5) / 4 * 2)), "N=N_0e^{0.402t}")], [0, 8, 0, 30000], { pts: [[2, 5000, "$(2,5000)$", "above left"], [6, 25000, "$(6,25000)$", "left"]], ylabel: "N" }),
  "el5-018": G([c(ex(-log(2) / 15, 1), "A=A_0e^{kt}")], [0, 45, 0, 1.1], { pts: [[0, 1, "$(0,A_0)$", "above right"], [15, 0.5, "half-life $(15,\\tfrac12)$", "above right"]], hlines: [H(0.5, "half")], ylabel: "A/A_0" }),
  "el5-019": G([c(ex(-log(2) / 20, 640), "A=640e^{-0.0347t}")], [0, 90, 0, 700], { pts: [[20, 320, "half $(20,320)$", "above right"], [30, 640 * exp(-log(2) / 20 * 30), "$(30,226)$", "above right"], [log(640 / 50) / (log(2) / 20), 50, "$(73.5,50)$", "above right"]], hlines: [H(50, "$A=50$")], ylabel: "A" }),
  "el5-020": G([c(ex(-log(2) / 8, 1000), "A=1000e^{kt}")], [0, 30, 0, 1100], { pts: [[8, 500, "half $(8,500)$", "above right"], [16, 250, "quarter $(16,250)$", "above right"]], hlines: [H(250, "quarter")], ylabel: "A" }),
  "el5-021": G([c((t) => 22 - 16 * exp(-0.05 * t), "T=22-16e^{-0.05t}")], [0, 80, 0, 26], { pts: [[0, 6, "$(0,6)$", "below right"]], hlines: [H(22, "limit $22$")], ylabel: "T" }),
  "el5-022": G([c(ex(0.02, 3000), "P=3000e^{0.02t}")], [0, 50, 0, 9000], { pts: [[0, 3000, "$(0,3000)$", "above left"]], ylabel: "P" }),
  "el5-023": G([c((t) => 2000 + 11000 * exp(-0.2 * t), "V=2000+11000e^{-0.2t}")], [0, 25, 0, 14000], { pts: [[0, 13000, "$(0,13000)$", "above right"], [log(11000 / 2000) / 0.2, 4000, "$(8.55,4000)$", "above right"]], hlines: [H(4000, "$V=4000$"), H(2000, "limit $2000$")], ylabel: "V" }),
  "el5-024": G([c(ex(log(2) / 2, 10), "H=10e^{0.693t}")], [0, 6, 0, 360], { pts: [[0, 10, "$(0,10)$", "above left"], [2, 40, "$(2,40)$", "above left"], [5, 320, "$(5,320)$", "left"]], ylabel: "H" }),
  "el5-025": G([c(ex(0.693, 10), "H=10e^{0.693t}")], [0, 8, 0, 2600], { pts: [[0, 10, "$(0,10)$", "above left"]], ylabel: "H" }),
  "el5-026": G([c(ex(0.03, 400), "B_1=400e^{0.03t}", [9, 540]), c(ex(0.08, 100), "B_2=100e^{0.08t}", [33, 1100])], [0, 40, 0, 1400], { pts: [[log(4) / 0.05, 400 * exp(0.03 * log(4) / 0.05), "$(27.7,\\,918)$", "above left"]], ylabel: "B" }),
  "el5-027": G([c(ex(-0.1, 20000), "V_A=20000e^{-0.1t}", [4, 14000]), c(ex(-0.06, 15000), "V_B=15000e^{-0.06t}", [15, 6200])], [0, 20, 0, 22000], { pts: [[log(20000 / 15000) / 0.04, 20000 * exp(-0.1 * log(4 / 3) / 0.04), "$(7.19,\\,9740)$", "above right"]], ylabel: "V" }),
  "el5-028": G([c(ex(0.04, 600), "P=600e^{0.04t}")], [0, 20, 0, 1400], { pts: [[5, 600 * exp(0.2), "$t=5$", "above left"]], tangents: [TG([5, 600 * exp(0.2)], 24 * exp(0.2))], ylabel: "P" }),
  "el5-029": G([c(ex(-0.05, 250), "M=250e^{-0.05t}")], [0, 40, 0, 280], { pts: [[10, 250 * exp(-0.5), "$t=10$", "above right"]], tangents: [TG([10, 250 * exp(-0.5)], -12.5 * exp(-0.5))], ylabel: "M" }),
  "el5-030": G([c(po(1.025, 500), "A=500(1.025^t)")], [0, 25, 0, 950], { pts: [[0, 500, "$(0,500)$", "above left"], [10, 500 * pow(1.025, 10), "$(10,640.04)$", "above left"], [log(1.6) / log(1.025), 800, "$(19,800)$", "above left"]], hlines: [H(800, "$A=800$")], ylabel: "A" }),
  "el5-031": G([c(ex(log(2 / 5) / 4, 5), "C=5e^{-0.229t}")], [0, 14, 0, 5.5], { pts: [[0, 5, "$(0,5)$", "above right"], [4, 2, "$(4,2)$", "above right"], [6, 5 * exp(log(2 / 5) / 4 * 6), "$(6,1.26)$", "above right"], [log(10) / (-log(2 / 5) / 4), 0.5, "$(10.1,0.5)$", "above right"]], hlines: [H(0.5, "effective $0.5$")], ylabel: "C" }),
  "el5-032": G([c(ex(-log(2) / 25, 480), "A=480e^{kt}")], [0, 80, 0, 540], { pts: [[0, 480, "$(0,480)$", "above right"], [25, 240, "half $(25,240)$", "above right"], [50, 120, "$(50,120)$", "above right"]], ylabel: "A" }),
  "el5-033": G([c(ex(0.012, 45000), "P=45000e^{0.012t}")], [0, 40, 0, 75000], { pts: [[0, 45000, "$(0,45000)$", "above left"], [10, 45000 * exp(0.12), "$2030$", "above left"], [log(60000 / 45000) / 0.012, 60000, "$2044$", "above left"]], hlines: [H(60000, "$P=60000$")], ylabel: "P" }),
  "el5-034": G([c(ex(log(50000 / 8000) / 6, 8000 / exp(log(50000 / 8000) / 6 * 3)), "S=S_0e^{0.305t}")], [0, 16, 0, 350000], { pts: [[3, 8000, "$(3,8000)$", "above left"], [9, 50000, "$(9,50000)$", "above left"], [15, 311000, "$(15,311000)$", "left"]], ylabel: "S" }),
  "el5-035": G([c((t) => 65 * exp(-0.04 * t) + 20, "T=65e^{-0.04t}+20")], [0, 60, 0, 95], { pts: [[0, 85, "$(0,85)$", "above right"], [10, 65 * exp(-0.4) + 20, "$(10,63.6)$", "above right"], [log(65 / 15) / 0.04, 35, "$(36.7,35)$", "above right"]], hlines: [H(35, "$T=35$"), H(20, "room $20$")], ylabel: "T" }),
  "el5-036": G([c(po(2, 200), "N=200(2^{t/4})")], [0, 20, 0, 7000], { pts: [[0, 200, "$(0,200)$", "above left"], [20, 6400, "$(20,6400)$", "left"]], ylabel: "N", cs0: 1 }),
  "el5-037": G([c((t) => 80 * pow(0.5, t / 5), "M=80(0.5^{t/5})")], [0, 20, 0, 90], { pts: [[0, 80, "$(0,80)$", "above right"], [5, 40, "$(5,40)$", "above right"], [15, 10, "$(15,10)$", "above right"]], ylabel: "M" }),
  "el5-038": G([c(ex(0.05, 1000), "P=1000e^{0.05t}")], [0, 15, 0, 2200], { pts: [[0, 1000, "$(0,1000)$", "above left"], [10, 1000 * exp(0.5), "$(10,1649)$", "above left"]], ylabel: "P" }),
  "el5-039": G([c(ex(-0.1, 50), "m=50e^{-0.1t}")], [0, 30, 0, 56], { pts: [[0, 50, "$(0,50)$", "above right"], [log(2) / 0.1, 25, "$(6.93,25)$", "above right"]], hlines: [H(25, "$m=25$")], ylabel: "m" }),
  "el5-040": G([c(po(0.85, 20000), "V=20000(0.85^t)")], [0, 15, 0, 22000], { pts: [[0, 20000, "$(0,20000)$", "above right"], [5, 20000 * pow(0.85, 5), "$(5,8874)$", "above right"]], ylabel: "V" }),
  "el5-041": G([c(po(1.03, 1), "A=A_0(1.03^t)")], [0, 30, 0, 2.6], { pts: [[0, 1, "$(0,1)$", "above left"], [log(2) / log(1.03), 2, "$(23.4,2)$", "above left"]], hlines: [H(2, "double")], ylabel: "A/A_0" }),
  "el5-042": G([c((t) => 15 + 70 * exp(-0.03 * t), "T=15+70e^{-0.03t}")], [0, 80, 0, 95], { pts: [[0, 85, "$(0,85)$", "above right"], [30, 15 + 70 * exp(-0.9), "$(30,43.5)$", "above right"]], hlines: [H(15, "limit $15$")], ylabel: "T" }),
  "el5-043": G([c(po(1.02, 5000), "P=5000(1.02^t)")], [0, 30, 0, 9000], { pts: [[0, 5000, "$(0,5000)$", "above left"], [20, 5000 * pow(1.02, 20), "$(20,7430)$", "above left"]], ylabel: "P" }),
  "el5-044": G([c(ex(log(0.75) / 8, 1), "m=m_0e^{-kt}")], [0, 40, 0, 1.1], { pts: [[0, 1, "$(0,m_0)$", "above right"], [8, 0.75, "$(8,0.75)$", "above right"]], hlines: [H(0.75, "$75\\%$")], ylabel: "m/m_0" }),
  "el5-045": G([c((t) => 2000 / (1 + 9 * exp(-0.5 * t)), "N=\\frac{2000}{1+9e^{-0.5t}}")], [0, 20, 0, 2200], { pts: [[0, 200, "$(0,200)$", "above left"]], hlines: [H(2000, "capacity $2000$")], ylabel: "N" }),
  "el5-046": G([c((t) => pow(0.5, t / 5730), "\\frac{M}{M_0}=0.5^{t/5730}")], [0, 12000, 0, 1.1], { pts: [[5730, 0.5, "half $(5730,\\tfrac12)$", "above right"], [-5730 * log(0.4) / log(2), 0.4, "$(7573,0.4)$", "above right"]], hlines: [H(0.4, "$40\\%$")], ylabel: "M/M_0" }),
  "el5-047": G([c(ex(-0.2, 400), "A=400e^{-0.2t}")], [0, 20, 0, 450], { pts: [[0, 400, "$(0,400)$", "above right"], [log(8) / 0.2, 50, "$(10.4,50)$", "above right"]], hlines: [H(50, "$A=50$")], ylabel: "A" }),
  "el5-048": G([c(ex(0.08, 500), "V=500e^{0.08t}")], [0, 25, 0, 2400], { pts: [[0, 500, "$(0,500)$", "above left"], [10, 500 * exp(0.8), "$(10,1113)$", "above left"], [log(4) / 0.08, 2000, "$(17.3,2000)$", "above left"]], hlines: [H(2000, "$V=2000$")], ylabel: "V" }),
  "el5-049": G([c((t) => 20 + 70 * exp(-log(70 / 50) / 5 * t), "T=20+70e^{-0.0673t}")], [0, 40, 0, 95], { pts: [[0, 90, "$(0,90)$", "above right"], [5, 70, "$(5,70)$", "above right"]], hlines: [H(20, "room $20$")], ylabel: "T" }),
  "el5-050": G([c((t) => 500 * (1 - exp(-0.1 * t)), "N=500(1-e^{-0.1t})")], [0, 40, 0, 560], { pts: [[5, 500 * (1 - exp(-0.5)), "$(5,197)$", "below right"], [-log(0.2) / 0.1, 400, "$(16.1,400)$", "above right"]], hlines: [H(500, "limit $500$")], ylabel: "N" }),
  "el5-051": G([c(po(0.88, 1), "V=V_0(0.88^t)")], [0, 20, 0, 1.1], { pts: [[0, 1, "$(0,1)$", "above right"], [log(0.25) / log(0.88), 0.25, "$(10.9,\\tfrac14)$", "above right"]], hlines: [H(0.25, "quarter")], ylabel: "V/V_0" }),
  "el5-052": G([c(ex(-0.12, 101), "P=101e^{-0.12h}")], [0, 30, 0, 110], { pts: [[0, 101, "$(0,101)$", "above right"], [10, 101 * exp(-1.2), "$(10,30.4)$", "above right"]], xlabel: "h", ylabel: "P" }),
  "el5-053": G([c(ex(0.15, 50), "N=50e^{0.15t}")], [0, 25, 0, 650], { pts: [[0, 50, "$(0,50)$", "above left"], [log(10) / 0.15, 500, "$(15.4,500)$", "above left"]], hlines: [H(500, "$N=500$")], ylabel: "N" }),
  "el5-054": G([c((t) => 0.3 * t + log(2), "\\ln y=kt+\\ln A")], [0, 10, 0, 4], { pts: [[0, log(2), "$(0,\\ln A)$", "above left"]], ylabel: "\\ln y" }),
  "el5-055": G([c(ex(-1, 12), "V=12e^{-t/RC}")], [0, 6, 0, 13], { pts: [[0, 12, "$(0,12)$", "above right"], [2, 12 * exp(-2), "$(2,1.62)$", "above right"]], ylabel: "V" }),
  "el5-056": G([c(po(1.015, 8000), "P=8000(1.015^t)")], [0, 25, 0, 12000], { pts: [[0, 8000, "$(0,8000)$", "above left"], [log(1.25) / log(1.015), 10000, "$(15,10000)$", "above left"]], hlines: [H(10000, "$P=10000$")], ylabel: "P" }),
  "el5-057": G([c(ex(0.02, 3000), "P_1=3000e^{0.02t}", [30, 5200]), c(ex(-0.01, 5000), "P_2=5000e^{-0.01t}", [33, 3600])], [0, 40, 0, 6000], { pts: [[log(5 / 3) / 0.03, 3000 * exp(0.02 * log(5 / 3) / 0.03), "$(17.0,\\,4214)$", "above left"]], ylabel: "P" }),
  "el5-058": G([c(po(0.8, 100), "m=100(0.8^t)")], [0, 25, 0, 110], { pts: [[0, 100, "$(0,100)$", "above right"], [log(0.1) / log(0.8), 10, "$(10.3,10)$", "above right"]], hlines: [H(10, "$m=10$")], ylabel: "m" }),
  "el5-059": G([c((t) => 22 - 40 * exp(-0.05 * t), "T=22-40e^{-0.05t}")], [0, 60, -20, 26], { pts: [[0, -18, "$(0,-18)$", "above right"], [-log((22 - 10) / 40) / 0.05, 10, "$(24.1,10)$", "above right"]], hlines: [H(22, "limit $22$")], ylabel: "T" }),
  "el5-060": G([c(po(1.05, 1), "A=A_0(1.05^t)")], [0, 20, 0, 3], { pts: [[0, 1, "$(0,1)$", "above left"], [1, 1.05, "$(1,1.05)$", "above left"]], ylabel: "A/A_0" }),
  "el5-061": G([c((t) => 1 - exp(-0.3 * t), "f=1-e^{-0.3t}")], [0, 20, 0, 1.1], { pts: [[-log(0.1) / 0.3, 0.9, "$(7.68,0.9)$", "below right"]], hlines: [H(1, "limit $1$"), H(0.9, "$90\\%$")], ylabel: "f" }),
  "el5-062": G([c(ex(-0.4, 1), "I=I_0e^{-0.4d}")], [0, 16, 0, 1.1], { pts: [[0, 1, "$(0,1)$", "above right"], [-log(0.01) / 0.4, 0.01, "$(11.5,0.01)$", "above right"]], hlines: [H(0.01, "$1\\%$")], xlabel: "d", ylabel: "I/I_0" }),
  "el5-063": G([c(ex(-0.1, 1), "m=m_0e^{-kt}")], [0, 30, 0, 1.1], { pts: [[0, 1, "$(0,m_0)$", "above right"]], ylabel: "m/m_0" }),
  "el5-064": G([c(po(1.06, 200000), "V=200000(1.06^t)")], [0, 12, 0, 360000], { pts: [[0, 200000, "$(0,200000)$", "above left"], [8, 200000 * pow(1.06, 8), "$(8,318770)$", "above left"]], ylabel: "V" }),
  "el5-065": G([c((t) => 100 * (1 - exp(-t / 5)), "Q=100(1-e^{-t/5})")], [0, 30, 0, 110], { pts: [[0, 0, "$(0,0)$", "below right"], [10, 100 * (1 - exp(-2)), "$(10,86.5)$", "above right"]], hlines: [H(100, "limit $100$")], ylabel: "Q" }),
  "el5-066": G([c(po(2, 3), "y=3(2^x)")], [-1, 5, 0, 55], { pts: [[0, 3, "$(0,3)$", "above left"], [4, 48, "$(4,48)$", "left"]], xlabel: "x", ylabel: "y" }),
  "el5-067": G([c(po(0.8, 2), "h=2(0.8^n)")], [0, 12, 0, 2.2], { pts: [[0, 2, "$(0,2)$", "above right"], [log(0.25) / log(0.8), 0.5, "$(6.2,0.5)$", "above right"]], hlines: [H(0.5, "$h=0.5$")], xlabel: "n", ylabel: "h" }),
  "el5-068": G([c(ex(log(1.05), 1), "Q=Q_0e^{kt}")], [0, 20, 0, 3], { pts: [[0, 1, "$(0,Q_0)$", "above left"]], ylabel: "Q/Q_0" }),
  "el5-069": G([c(ex(log(3) / 6, 100), "N=100e^{0.183t}")], [0, 14, 0, 700], { pts: [[0, 100, "$(0,100)$", "above left"], [6, 300, "$(6,300)$", "above left"], [10, 100 * exp(log(3) / 6 * 10), "$(10,623)$", "left"]], ylabel: "N" }),
  "el5-070": G([c(ex(-0.005, 1), "\\frac{M}{M_0}=e^{-0.005t}")], [0, 600, 0, 1.1], { pts: [[log(2) / 0.005, 0.5, "half $(138.6,\\tfrac12)$", "above right"], [log(10) / 0.005, 0.1, "$(460.5,0.1)$", "above right"], [100, exp(-0.5), "$(100,0.607)$", "above right"]], hlines: [H(0.5, "half"), H(0.1, "$10\\%$")], ylabel: "M/M_0" }),
};

// ---------- text helpers ----------
const ctl = (s) => s.replace(/⟹/g, "\\Rightarrow ").replace(/→/g, "\\to ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/✓/g, "\\checkmark ").replace(/−/g, "-").replace(/⁴/g, "^{4}").replace(/²/g, "^{2}").replace(/³/g, "^{3}").replace(/½/g, "\\frac{1}{2}").replace(/¼/g, "\\frac{1}{4}").replace(/¾/g, "\\frac{3}{4}").replace(/°/g, "\\textdegree{}").replace(/£/g, "\\pounds ").replace(/(?<!\\)%/g, "\\%").replace(/[–—]/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
function escTxt(t) {
  let s = t.replace(/[^\x09\x0a\x0d\x20-\x7e£°–—→×÷✓²³⁴½¼¾−⟹]/g, "").replace(/\\/g, "\\textbackslash ").replace(/([&%$#_{}])/g, "\\$1").replace(/\^/g, "\\textasciicircum ").replace(/~/g, "\\textasciitilde ");
  return s.replace(/£/g, "\\pounds ").replace(/°/g, "\\textdegree ").replace(/[–]/g, "--").replace(/—/g, "---").replace(/→/g, "$\\to$").replace(/×/g, "$\\times$").replace(/÷/g, "$\\div$").replace(/−/g, "-").replace(/⟹/g, "$\\Rightarrow$").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/⁴/g, "\\textsuperscript{4}").replace(/½/g, "$\\frac{1}{2}$").replace(/¼/g, "$\\frac{1}{4}$").replace(/¾/g, "$\\frac{3}{4}$").replace(/✓/g, "$\\checkmark$");
}
const protect = (s) => s.replace(/\\qquad/g, "@QQ@").replace(/\\quad/g, "@QD@").replace(/\\newline/g, "@NL@").replace(/\\,/g, "@TS@");
const restore = (s) => s.replace(/@QQ@/g, "\\qquad ").replace(/@QD@/g, "\\quad ").replace(/@NL@/g, "\\\\[3pt] ").replace(/@TS@/g, "\\,");
const hasLatex = (x) => /\\[a-zA-Z]|[\^_]/.test(x.replace(/@QQ@|@QD@|@NL@|@TS@/g, ""));
const seg = (x) => hasLatex(x) ? "\\(\\displaystyle " + ctl(x) + "\\)" : escTxt(x);  // wrap stray LaTeX in text segments
function prose(s0) {
  const s = protect(s0);
  let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
  while ((m = re.exec(s))) { o += seg(s.slice(last, m.index)); o += "\\(" + ctl(m[1]) + "\\)"; last = re.lastIndex; }
  o += seg(s.slice(last)); return restore(o);
}
function ans(s0) {
  const s = protect(s0);
  if (s.includes("\\(") || hasLatex(s)) {
    let o = "", last = 0, m; const re = /\\\((.*?)\\\)/g;
    while ((m = re.exec(s))) { o += segD(s.slice(last, m.index)); o += "\\(\\displaystyle " + ctl(m[1]) + "\\)"; last = re.lastIndex; }
    o += segD(s.slice(last)); return restore(o);
  }
  if (/[A-Za-z]{4,}/.test(s0) || /\b(or|and)\b/i.test(s0)) return restore(escTxt(s));
  if (/[\^_=]/.test(s0)) return "\\(\\displaystyle " + ctl(s0) + "\\)";
  return restore(escTxt(s));
}
const segD = (x) => hasLatex(x) ? "\\(\\displaystyle " + ctl(x) + "\\)" : escTxt(x);
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
  for (let x = Math.ceil(Xa / xstep) * xstep; x <= Xb + 1e-9; x += xstep) { if (Math.abs(x) < 1e-9) continue; t += `\\draw (${f(px(x))},${f(py(ay0) - 0.06)}) -- (${f(px(x))},${f(py(ay0) + 0.06)}) node[below=1pt,scale=0.64]{$${num(x)}$};\n`; }
  for (let y = Math.ceil(Ya / ystep) * ystep; y <= Yb + 1e-9; y += ystep) { if (Math.abs(y) < 1e-9) continue; t += `\\draw (${f(px(ax0) - 0.06)},${f(py(y))}) -- (${f(px(ax0) + 0.06)},${f(py(y))}) node[left=1pt,scale=0.64]{$${num(y)}$};\n`; }
  (spec.hlines || []).forEach((h) => { if (h.label && h.y >= Ya && h.y <= Yb) t += `\\node[right,scale=0.66,gray!55!black,fill=white,inner sep=1pt] at (${f(px(Xa) + 0.08)},${f(py(h.y) + 0.2)}) {${h.label}};\n`; });
  (spec.vlines || []).forEach((vl) => { if (vl.label && vl.x >= Xa && vl.x <= Xb) t += `\\node[scale=0.66,gray!55!black,fill=white,inner sep=1pt,rotate=90,anchor=south] at (${f(px(vl.x) + 0.16)},${f(py(Ya) + 0.4)}) {${vl.label}};\n`; });
  spec.cs.forEach((cv) => { const lp = cv.lp ? [px(cv.lp[0]), py(cv.lp[1])] : (cv._lv ? [px(cv._lv[0]), py(cv._lv[1])] : null); if (cv.label && lp) { const right = lp[0] > CW * 0.55; const anc = cv.lp ? "center" : (right ? "east" : "west"); const dx = cv.lp ? 0 : (right ? -0.08 : 0.08); t += `\\node[${cv._col},scale=0.7,anchor=${anc},inner sep=1pt] at (${f(lp[0] + dx)},${f(lp[1] - (cv.lp ? 0 : 0.18))}) {$${cv.label}$};\n`; } });
  (spec.pts || []).forEach((p) => { const anc = p[3] || "above right"; t += `\\fill[${PTC}] (${f(px(p[0]))},${f(py(cl(p[1])))}) circle (2.1pt);\n`; if (p[2]) t += `\\node[${anc},scale=0.7] at (${f(px(p[0]))},${f(py(cl(p[1])))}) {${p[2]}};\n`; });
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

\\title{\\textbf{Modelling Exponential Growth and Decay}\\\\[0.3em]\\large Worked Solutions with TikZ Graphs}
\\author{Wisest Maths --- Year 1 A-Level, Exponentials and Logarithms (ref \\texttt{el5})}
\\date{}

\\begin{document}
\\maketitle
\\noindent This document contains all ${questions.length} \\emph{Modelling Exponential Growth and Decay} questions,
each with a fully worked solution and a TikZ graph of the model. Each diagram plots the model against time with
the initial value and any evaluated/target points marked, the long-term asymptote shown dashed for bounded
(cooling, logistic, capped-growth) models, both curves with their crossover for comparison questions, and a
tangent for the rate-of-change questions.
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
    L += `\\small The model plotted against time, with the key value(s) marked.\\normalsize\n\n`;
  }
  L += `\\medskip\\hrule\n`;
});

L += `\n\\end{document}\n`;
fs.writeFileSync(OUT, L);
console.log("Wrote " + OUT + " (" + L.length + " bytes, " + questions.length + " questions, " + Object.keys(D).length + " diagrams)");
