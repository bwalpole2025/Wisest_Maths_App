import { describe, it, expect } from "vitest";
import { normalizeMath, checkEquivalence } from "./symbolicGrading";

describe("normalizeMath — Unicode glyph pre-pass (MathSymbolField palette)", () => {
  it("maps π and √ to mathjs forms", () => {
    expect(normalizeMath("π")).toContain("pi");
    expect(normalizeMath("√16")).toContain("sqrt(16)");
    expect(normalizeMath("√(x+1)")).toContain("sqrt(x+1)");
  });
  it("maps operators and comparisons", () => {
    expect(normalizeMath("2×3")).toContain("2*3");
    expect(normalizeMath("6÷2")).toContain("6/2");
    expect(normalizeMath("3·4")).toContain("3*4");
    expect(normalizeMath("x ≤ 5")).toContain("<=");
    expect(normalizeMath("x ≥ 5")).toContain(">=");
  });
});

describe("checkEquivalence — typed Unicode answers grade correctly", () => {
  it("treats glyphs as their maths meaning", () => {
    expect(checkEquivalence("π", "pi").equivalent).toBe(true);
    expect(checkEquivalence("√16", "4").equivalent).toBe(true);
    expect(checkEquivalence("2×3", "6").equivalent).toBe(true);
    expect(checkEquivalence("6÷2", "3").equivalent).toBe(true);
    expect(checkEquivalence("x²", "x^2").equivalent).toBe(true);
  });
});
