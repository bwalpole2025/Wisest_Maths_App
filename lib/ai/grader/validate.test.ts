import { describe, it, expect } from "vitest";
import { parseMarkBreakdown } from "./validate";
import { FIXTURE_SCHEME, VALID_BREAKDOWN } from "./__fixtures__/markScheme";

const clone = <T>(x: T): T => JSON.parse(JSON.stringify(x));

describe("parseMarkBreakdown", () => {
  it("parses a conforming breakdown", () => {
    const out = parseMarkBreakdown(JSON.stringify(VALID_BREAKDOWN), FIXTURE_SCHEME);
    expect(out.marks).toHaveLength(3);
    expect(out.marks.find((m) => m.markId === "M1")?.awarded).toBe(true);
  });

  it("strips markdown code fences", () => {
    const fenced = "```json\n" + JSON.stringify(VALID_BREAKDOWN) + "\n```";
    expect(parseMarkBreakdown(fenced, FIXTURE_SCHEME).marks).toHaveLength(3);
  });

  it("rejects an invented mark id (never invent marks)", () => {
    const bad = clone(VALID_BREAKDOWN);
    bad.marks[0].markId = "ZZ9";
    expect(() => parseMarkBreakdown(JSON.stringify(bad), FIXTURE_SCHEME)).toThrowError(/invented/i);
  });

  it("rejects a missing mark (must address every scheme mark)", () => {
    const bad = clone(VALID_BREAKDOWN);
    bad.marks = bad.marks.slice(0, 2);
    expect(() => parseMarkBreakdown(JSON.stringify(bad), FIXTURE_SCHEME)).toThrow();
  });

  it("rejects a changed mark type", () => {
    const bad = clone(VALID_BREAKDOWN);
    bad.marks[0].type = "B";
    expect(() => parseMarkBreakdown(JSON.stringify(bad), FIXTURE_SCHEME)).toThrowError(/type/i);
  });

  it("rejects non-JSON", () => {
    expect(() => parseMarkBreakdown("not json at all", FIXTURE_SCHEME)).toThrow();
  });
});
