import { describe, it, expect, vi } from "vitest";
import {
  classify,
  diagnoseGeneric,
  diagnoseSpecific,
  classifyAsync,
  diagnoseGenericAsync,
  GENERIC_TRANSFORM_IDS,
} from "./diagnosis";
import type { SymbolicOracle } from "./symbolicClient";
import type { Question, AnswerType, ErrorTransform } from "@/lib/types";

function oracleStub(over: Partial<SymbolicOracle> = {}): SymbolicOracle {
  return { equivalent: async () => null, classifyForm: async () => null, ...over };
}

/** Build a minimal Question fixture with a given answerType + correct answer. */
function q(
  answerType: AnswerType,
  canonicalAnswer: string,
  extra: Partial<Question> = {},
): Question {
  return {
    id: "t",
    topicRef: "t",
    topicTitle: "t",
    difficulty: "Standard",
    questionText: "",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    answerType,
    workedSolution: { steps: [], finalAnswer: canonicalAnswer, canonicalAnswer },
    ...extra,
  };
}

describe("classify — expression (numeric sampling)", () => {
  it("1/2 ≡ 0.5 ≡ 0.5000", () => {
    expect(classify("1/2", q("expression", "0.5")).correct).toBe(true);
    expect(classify("0.5", q("expression", "1/2")).correct).toBe(true);
    expect(classify("0.5000", q("expression", "1/2")).correct).toBe(true);
  });
  it("(x+1)^2 ≡ x^2+2x+1", () => {
    expect(classify("(x+1)^2", q("expression", "x^2+2x+1")).correct).toBe(true);
    expect(classify("x^2+2x+1", q("expression", "(x+1)^2")).correct).toBe(true);
  });
  it("sin^2 + cos^2 ≡ 1", () => {
    expect(classify("sin(x)^2 + cos(x)^2", q("expression", "1")).correct).toBe(true);
  });
  it("rejects genuinely different expressions", () => {
    expect(classify("x^2", q("expression", "x^3")).correct).toBe(false);
    expect(classify("2x+1", q("expression", "2x-1")).correct).toBe(false);
  });
  it("returns the parsed tree on a parseable answer", () => {
    expect(classify("x+1", q("expression", "1+x")).parsed).toBeDefined();
  });
});

describe("classify — numeric", () => {
  it("compares within tolerance regardless of form", () => {
    expect(classify("0.5", q("numeric", "0.5")).correct).toBe(true);
    expect(classify("0.5000", q("numeric", "0.5")).correct).toBe(true);
    expect(classify("1/2", q("numeric", "0.5")).correct).toBe(true);
    expect(classify("0.6", q("numeric", "0.5")).correct).toBe(false);
  });
  it("enforces requiredDp when set", () => {
    const dp2 = q("numeric", "0.5", { answerMeta: { requiredDp: 2 } });
    expect(classify("0.5", dp2)).toMatchObject({ correct: false, reason: "precision" });
    expect(classify("0.50", dp2).correct).toBe(true);
  });
  it("enforces requiredSf when set", () => {
    const sf3 = q("numeric", "12.3", { answerMeta: { requiredSf: 3 } });
    expect(classify("12.3", sf3).correct).toBe(true);
    expect(classify("12.30", sf3)).toMatchObject({ correct: false, reason: "precision" });
  });
});

describe("classify — exactValue (value AND form)", () => {
  const sqrt2 = q("exactValue", "sqrt(2)", { answerMeta: { exactForm: true } });
  it("accepts the exact surd form", () => {
    expect(classify("√2", sqrt2).correct).toBe(true);
    expect(classify("sqrt(2)", sqrt2).correct).toBe(true);
  });
  it("rejects a decimal approximation as notExactForm", () => {
    expect(classify("1.41", sqrt2)).toMatchObject({ correct: false, reason: "notExactForm" });
    // even a high-precision decimal is the wrong FORM
    expect(classify("1.41421356", sqrt2)).toMatchObject({ correct: false, reason: "notExactForm" });
  });
});

describe("classify — set / equationRoots (unordered, cardinality matters)", () => {
  it("{2,-2} ≡ {-2,2}", () => {
    expect(classify("{2,-2}", q("set", "{-2,2}")).correct).toBe(true);
  });
  it("{2} ≠ {2,-2} (one root of two)", () => {
    expect(classify("{2}", q("set", "{2,-2}")).correct).toBe(false);
  });
  it("handles equationRoots written as 'x = a or x = b'", () => {
    expect(classify("x = 2 or x = -2", q("equationRoots", "{2,-2}")).correct).toBe(true);
  });
});

describe("classify — interval (endpoints + openness)", () => {
  it("(1,3] ≠ [1,3]", () => {
    expect(classify("(1,3]", q("interval", "[1,3]")).correct).toBe(false);
  });
  it("matches identical intervals", () => {
    expect(classify("(1,3]", q("interval", "(1,3]")).correct).toBe(true);
    expect(classify("[1,3]", q("interval", "[1,3]")).correct).toBe(true);
  });
});

describe("classify — never throws on bad input", () => {
  // Note: these reduce to nothing parseable. (Inputs like "\frac{" normalize to a
  // bare symbol "frac" — parseable, so they return correct:false WITHOUT a reason,
  // which is still the required never-throw + correct:false behavior.)
  const cases = [")(", "@@@", "", "   ", "sin(", "}{}{", "(("];
  for (const bad of cases) {
    it(`garbage ${JSON.stringify(bad)} → unparseable, no throw`, () => {
      let res!: ReturnType<typeof classify>;
      expect(() => {
        res = classify(bad, q("expression", "x+1"));
      }).not.toThrow();
      expect(res.correct).toBe(false);
      expect(res.reason).toBe("unparseable");
    });
  }
});

describe("classify — reproducibility", () => {
  it("gives an identical verdict across 100 runs (sampled, correct case)", () => {
    const question = q("expression", "1");
    const first = JSON.stringify(classify("sin(x)^2 + cos(x)^2", question).correct);
    for (let i = 0; i < 100; i++) {
      expect(JSON.stringify(classify("sin(x)^2 + cos(x)^2", question).correct)).toBe(first);
    }
    expect(first).toBe("true");
  });
  it("gives an identical verdict across 100 runs (sampled, incorrect case)", () => {
    const question = q("expression", "x^3");
    for (let i = 0; i < 100; i++) {
      expect(classify("x^2", question).correct).toBe(false);
    }
  });
});

describe("diagnoseGeneric — generic misconceptions (Layer 1)", () => {
  it("negate: S ≡ −C", () => {
    expect(diagnoseGeneric("-(x^2)", q("expression", "x^2"))?.transform).toBe("negate");
  });
  it("scaleByTwo", () => {
    expect(diagnoseGeneric("2*(x+1)", q("expression", "x+1"))?.transform).toBe("scaleByTwo");
  });
  it("scaleByHalf", () => {
    expect(diagnoseGeneric("(x^2)/2", q("expression", "x^2"))?.transform).toBe("scaleByHalf");
  });
  it("reciprocal", () => {
    expect(diagnoseGeneric("1/(x+2)", q("expression", "x+2"))?.transform).toBe("reciprocal");
  });
  it("degreesRadiansSwap (trig evaluated in the other mode)", () => {
    expect(diagnoseGeneric("sin(x*pi/180)", q("expression", "sin(x)"))?.transform).toBe(
      "degreesRadiansSwap",
    );
  });
  it("derivativeInsteadOfIntegral: integral answered with the integrand's derivative", () => {
    // correct ∫ answer x^3/3; student gave d/dx of it (x^2)
    expect(diagnoseGeneric("x^2", q("expression", "x^3/3"))?.transform).toBe(
      "derivativeInsteadOfIntegral",
    );
  });
  it("integralInsteadOfDerivative: d/dx(S) ≡ C", () => {
    // correct derivative 2x; student integrated to x^2
    expect(diagnoseGeneric("x^2", q("expression", "2*x"))?.transform).toBe(
      "integralInsteadOfDerivative",
    );
  });
  it("missingConstantOfIntegration: differs from C by a constant", () => {
    expect(diagnoseGeneric("x^2 + 5", q("expression", "x^2"))?.transform).toBe(
      "missingConstantOfIntegration",
    );
  });
  it("expandedSquareOfSum: a²+b² vs (a+b)²", () => {
    expect(diagnoseGeneric("x^2+9", q("expression", "(x+3)^2"))?.transform).toBe(
      "expandedSquareOfSum",
    );
  });
  it("missingChainFactor: dropped a non-constant inner-derivative factor", () => {
    expect(diagnoseGeneric("cos(x^2)", q("expression", "2*x*cos(x^2)"))?.transform).toBe(
      "missingChainFactor",
    );
  });
  it("singleRootOnly: a strict subset of the roots", () => {
    expect(diagnoseGeneric("{3}", q("equationRoots", "{3,5}"))?.transform).toBe("singleRootOnly");
  });
  it("droppedNegativeRoot: missing the negative counterpart", () => {
    expect(diagnoseGeneric("{2}", q("equationRoots", "{2,-2}"))?.transform).toBe(
      "droppedNegativeRoot",
    );
  });
  it("returns null (no false hint) when nothing matches", () => {
    expect(diagnoseGeneric("x+7", q("expression", "x^2"))).toBeNull();
  });
  it("never throws on garbage", () => {
    expect(() => diagnoseGeneric(")(", q("expression", "x^2"))).not.toThrow();
    expect(diagnoseGeneric(")(", q("expression", "x^2"))).toBeNull();
  });
});

describe("diagnoseGeneric — allow/deny + data-driven extensibility", () => {
  it("denyTransforms excludes a transform", () => {
    const denied = q("expression", "x^2", { answerMeta: { denyTransforms: ["negate"] } });
    expect(diagnoseGeneric("-(x^2)", denied)).toBeNull();
  });
  it("allowTransforms restricts to the listed transforms", () => {
    const onlyRecip = q("expression", "x^2", { answerMeta: { allowTransforms: ["reciprocal"] } });
    expect(diagnoseGeneric("-(x^2)", onlyRecip)).toBeNull(); // negate not in allow-list
    expect(diagnoseGeneric("1/(x^2)", onlyRecip)?.transform).toBe("reciprocal");
  });
  it("every ErrorTransform is wired into the transform array", () => {
    const expected: ErrorTransform[] = [
      "negate",
      "reciprocal",
      "scaleByTwo",
      "scaleByHalf",
      "derivativeInsteadOfIntegral",
      "integralInsteadOfDerivative",
      "missingConstantOfIntegration",
      "missingChainFactor",
      "expandedSquareOfSum",
      "degreesRadiansSwap",
      "singleRootOnly",
      "droppedNegativeRoot",
    ];
    expect(new Set(GENERIC_TRANSFORM_IDS)).toEqual(new Set(expected));
  });
});

describe("classifyAsync / diagnoseGenericAsync — optional symbolic sidecar", () => {
  it("with the sidecar OFF (oracle: null) matches the sync verdicts", async () => {
    expect(
      await classifyAsync("1.41", q("exactValue", "sqrt(2)", { answerMeta: { exactForm: true } }), {
        oracle: null,
      }),
    ).toMatchObject({ correct: false, reason: "notExactForm" });
    expect(
      (await diagnoseGenericAsync("-(x^2)", q("expression", "x^2"), { oracle: null }))?.transform,
    ).toBe("negate");
    expect(await diagnoseGenericAsync("x+7", q("expression", "x^2"), { oracle: null })).toBeNull();
  });

  it("ON: antiderivative-vs-integrand → missingConstantOfIntegration via the symbolic oracle", async () => {
    // Two free variables → math.js's single-variable derivative path can't engage,
    // so the SAMPLING-ONLY engine returns null for this differ-by-a-constant case:
    const S = "x^2 + y + 4";
    const C = "x^2 + y";
    expect(diagnoseGeneric(S, q("expression", C))).toBeNull();

    const equivalent = vi.fn(async (_a: string, _b: string, mode: string) =>
      mode === "antiderivative" ? true : false,
    );
    const m = await diagnoseGenericAsync(S, q("expression", C), { oracle: oracleStub({ equivalent }) });
    expect(m?.transform).toBe("missingConstantOfIntegration");
    expect(equivalent).toHaveBeenCalledWith(expect.any(String), expect.any(String), "antiderivative");
  });

  it("KILLED sidecar (oracle throws) → downgrades to sampling, not a request failure", async () => {
    const dead = oracleStub({
      equivalent: async () => {
        throw new Error("ECONNREFUSED");
      },
    });
    // sampling can still catch this differ-by-constant case (single variable):
    const m = await diagnoseGenericAsync("x^2 + 5", q("expression", "x^2"), { oracle: dead });
    expect(m?.transform).toBe("missingConstantOfIntegration");
  });

  it("classifyAsync prefers the sidecar form classification for exactValue", async () => {
    const classifyForm = vi.fn(async () => ({
      isExact: false,
      hasSurd: false,
      hasFraction: false,
      isBareDecimal: true,
    }));
    const r = await classifyAsync(
      "1.4142",
      q("exactValue", "sqrt(2)", { answerMeta: { exactForm: true } }),
      { oracle: oracleStub({ classifyForm }) },
    );
    expect(r).toMatchObject({ correct: false, reason: "notExactForm" });
    expect(classifyForm).toHaveBeenCalled();
  });
});

describe("diagnoseSpecific / diagnose — Layer 2 per-question feedbackRules", () => {
  // canonical 1/3 is a constant that shares no generic transform with 0.5, so
  // Layer 1 returns null and Layer 2 (the matchAnswer rule) is what fires.
  const ruleQ = q("expression", "1/3", {
    feedbackRules: [
      {
        matchAnswer: "1/2",
        misconception: "halved-it",
        hint: "Did you take half when you shouldn't?",
        revealStep: 2,
      },
    ],
  });

  it("matches a distractor by mathematical equivalence (1/2 ≡ 0.5) and returns its hint", () => {
    expect(diagnoseSpecific("0.5", ruleQ)).toMatchObject({
      misconception: "halved-it",
      hint: "Did you take half when you shouldn't?",
      revealStep: 2,
    });
  });

  it("returns null when no rule matches", () => {
    expect(diagnoseSpecific("99", ruleQ)).toBeNull();
  });

  it("skips rules that have no matchAnswer", () => {
    const q2 = q("expression", "x+1", { feedbackRules: [{ misconception: "m", hint: "h" }] });
    expect(diagnoseSpecific("anything", q2)).toBeNull();
  });
});
