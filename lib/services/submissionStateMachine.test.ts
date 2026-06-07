import { describe, it, expect } from "vitest";
import { canTransition } from "./submissionStateMachine";

describe("canTransition", () => {
  it("allows the legal happy path step by step", () => {
    expect(canTransition("UPLOADED", "RECOGNISING")).toBe(true);
    expect(canTransition("RECOGNISING", "AWAITING_CONFIRMATION")).toBe(true);
    expect(canTransition("AWAITING_CONFIRMATION", "CONFIRMED")).toBe(true);
    expect(canTransition("CONFIRMED", "MARKING")).toBe(true);
    expect(canTransition("MARKING", "MARKED")).toBe(true);
  });

  it("rejects skips and backward moves", () => {
    expect(canTransition("UPLOADED", "CONFIRMED")).toBe(false);
    expect(canTransition("AWAITING_CONFIRMATION", "MARKING")).toBe(false); // confirm before marking
    expect(canTransition("CONFIRMED", "RECOGNISING")).toBe(false);
    expect(canTransition("MARKED", "MARKING")).toBe(false); // terminal
  });

  it("allows FAILED from any non-terminal state, but not from terminal states", () => {
    expect(canTransition("UPLOADED", "FAILED")).toBe(true);
    expect(canTransition("RECOGNISING", "FAILED")).toBe(true);
    expect(canTransition("MARKING", "FAILED")).toBe(true);
    expect(canTransition("FAILED", "FAILED")).toBe(false);
    expect(canTransition("MARKED", "FAILED")).toBe(false);
  });
});
