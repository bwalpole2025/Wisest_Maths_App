import { Question } from "@/lib/types";

/**
 * Year 2 — Differentiation § 9.10 Rates of Change
 * Ref: y2df10
 * 71 questions. Use the chain rule to link rates via
 *   \( \\dfrac{dQ}{dt} = \\dfrac{dQ}{dx} \cdot \\dfrac{dx}{dt} \).
 */
export const questions: Question[] = [
  { id: "y2df10-001", topicRef: "y2df10", topicTitle: "Rates of Change 01", difficulty: "Challenge", questionText: "The side of a cube is increasing at a rate of \\(0.2\\) cm/s. Find the rate at which the volume is increasing when the side length is \\(5\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the geometric relationship between volume and side length.", workingLatex: "V = x^3", explanation: "For a cube of side length \\(x\\) the volume is \\(V = x^3\\). This is the formula that links the two quantities whose rates we need." },
    { stepNumber: 2, description: "Identify what is given and what is asked.", workingLatex: "\\text{Given: }\\dfrac{dx}{dt};\\; \\text{Find: }\\dfrac{dV}{dt}", explanation: "Establishing the two rates explicitly helps avoid using the wrong chain-rule form later." },
    { stepNumber: 3, description: "State the given rate, including units.", workingLatex: "\\dfrac{dx}{dt} = 0.2 \\text{ cm/s}", explanation: "The side length is increasing at \\(0.2\\) cm/s. Recording the units now will keep the final answer's units clean." },
    { stepNumber: 4, description: "Differentiate \\(V\\) with respect to \\(x\\).", workingLatex: "\\dfrac{dV}{dx} = 3x^2", explanation: "Direct differentiation gives \\(\\dfrac{dV}{dx} = 3x^2\\). This is the multiplier in the chain rule." },
    { stepNumber: 5, description: "Apply the chain rule with symbols first.", workingLatex: "\\dfrac{dV}{dt} = \\dfrac{dV}{dx}\\cdot \\dfrac{dx}{dt} = 3x^2 \\cdot \\dfrac{dx}{dt}", explanation: "Always substitute symbolic expressions before plugging in numbers — this avoids early-numerical errors." },
    { stepNumber: 6, description: "Substitute the given numerical rate.", workingLatex: "\\dfrac{dV}{dt} = 3x^2 \\cdot 0.2 = 0.6 x^2", explanation: "Insert \\(\\dfrac{dx}{dt} = 0.2\\) to get \\(\\dfrac{dV}{dt}\\) as a function of \\(x\\)." },
    { stepNumber: 7, description: "Substitute \\(x = 5\\).", workingLatex: "\\dfrac{dV}{dt} = 0.6 \\cdot 25", explanation: "Numerical evaluation at the moment of interest." },
    { stepNumber: 8, description: "Compute and state with units.", workingLatex: "\\dfrac{dV}{dt} = 15 \\text{ cm}^3/\\text{s}", explanation: "At \\(x = 5\\) cm the volume grows at \\(15\\) cm³/s." },
    { stepNumber: 9, description: "Check the answer is positive.", workingLatex: "\\dfrac{dV}{dt} > 0", explanation: "Side length and volume are both increasing — sign is consistent." }
  ], finalAnswer: "\\( 15 \\) cm³/s." } },
  // ── Circle (radius changing) ────
  { id: "y2df10-002", topicRef: "y2df10", topicTitle: "Rates of Change 02", difficulty: "Standard", questionText: "The radius of a circle is increasing at \\(2\\) cm/s. Find the rate at which its area is increasing when \\(r = 5\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the area formula.", workingLatex: "A = \\pi r^2", explanation: "Area of a circle in terms of radius — the relationship we will differentiate." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dr}{dt} = 2 \\text{ cm/s}", explanation: "Radius increases at \\(2\\) cm/s." },
    { stepNumber: 3, description: "Differentiate the area with respect to \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = 2\\pi r", explanation: "Straight power-rule differentiation." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = \\dfrac{dA}{dr}\\cdot \\dfrac{dr}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Chain rule links the unknown rate to the known one." },
    { stepNumber: 5, description: "Substitute the numerical rate.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot 2 = 4\\pi r", explanation: "Insert \\(\\dfrac{dr}{dt} = 2\\)." },
    { stepNumber: 6, description: "Substitute \\(r = 5\\).", workingLatex: "\\dfrac{dA}{dt} = 4\\pi \\cdot 5 = 20\\pi", explanation: "Plug in the radius at the moment of interest." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dA}{dt} = 20\\pi \\text{ cm}^2/\\text{s}", explanation: "Area increases at \\(20\\pi\\) cm²/s when the radius is \\(5\\) cm." }
  ], finalAnswer: "\\( 20\\pi \\) cm²/s." } },
  { id: "y2df10-003", topicRef: "y2df10", topicTitle: "Rates of Change 03", difficulty: "Foundation", questionText: "The radius of a circle is increasing at \\(3\\) cm/s. Find the rate at which its circumference is increasing.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the circumference formula.", workingLatex: "C = 2\\pi r", explanation: "The relationship between circumference and radius." },
    { stepNumber: 2, description: "State the given rate with units.", workingLatex: "\\dfrac{dr}{dt} = 3 \\text{ cm/s}", explanation: "Radius is increasing at \\(3\\) cm/s." },
    { stepNumber: 3, description: "Differentiate with respect to \\(r\\).", workingLatex: "\\dfrac{dC}{dr} = 2\\pi", explanation: "Constant multiplier, independent of \\(r\\)." },
    { stepNumber: 4, description: "Apply the chain rule.", workingLatex: "\\dfrac{dC}{dt} = \\dfrac{dC}{dr}\\cdot \\dfrac{dr}{dt} = 2\\pi \\cdot \\dfrac{dr}{dt}", explanation: "Chain rule links the rates." },
    { stepNumber: 5, description: "Substitute and state.", workingLatex: "\\dfrac{dC}{dt} = 2\\pi \\cdot 3 = 6\\pi \\text{ cm/s}", explanation: "Circumference grows at \\(6\\pi\\) cm/s for every radius value." }
  ], finalAnswer: "\\( 6\\pi \\) cm/s." } },
  { id: "y2df10-004", topicRef: "y2df10", topicTitle: "Rates of Change 04", difficulty: "Standard", questionText: "A circle's area is increasing at \\(50\\pi\\) cm²/s. Find the rate at which its radius is increasing when \\(r=5\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the area formula.", workingLatex: "A = \\pi r^2", explanation: "Standard formula linking area and radius." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dA}{dt} = 50\\pi \\text{ cm}^2/\\text{s}", explanation: "Here the area rate is given — we want the radius rate (inverse-rate problem)." },
    { stepNumber: 3, description: "Differentiate area with respect to \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = 2\\pi r", explanation: "We will rearrange to isolate \\(\\dfrac{dr}{dt}\\)." },
    { stepNumber: 4, description: "Set up the chain rule.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Symbolic chain rule before any numbers are inserted." },
    { stepNumber: 5, description: "Rearrange for \\(\\dfrac{dr}{dt}\\).", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{1}{2\\pi r}\\cdot \\dfrac{dA}{dt}", explanation: "Solve algebraically before plugging in numbers." },
    { stepNumber: 6, description: "Substitute the given values.", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{50\\pi}{2\\pi \\cdot 5} = \\dfrac{50\\pi}{10\\pi}", explanation: "Insert \\(r = 5\\) and \\(\\dfrac{dA}{dt} = 50\\pi\\)." },
    { stepNumber: 7, description: "Simplify and state with units.", workingLatex: "\\dfrac{dr}{dt} = 5 \\text{ cm/s}", explanation: "The radius is increasing at \\(5\\) cm/s." }
  ], finalAnswer: "\\( 5 \\) cm/s." } },
  { id: "y2df10-005", topicRef: "y2df10", topicTitle: "Rates of Change 05", difficulty: "Standard", questionText: "A circular pond is evaporating so that its radius decreases at \\(0.5\\) cm/s. Find the rate at which its area is decreasing when \\(r=10\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the area formula.", workingLatex: "A = \\pi r^2", explanation: "Area of a circular pond as a function of its radius." },
    { stepNumber: 2, description: "State the given rate — note the negative sign for a decreasing rate.", workingLatex: "\\dfrac{dr}{dt} = -0.5 \\text{ cm/s}", explanation: "Because the radius is decreasing, its derivative w.r.t. time is negative." },
    { stepNumber: 3, description: "Differentiate area with respect to \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = 2\\pi r", explanation: "Power rule." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = \\dfrac{dA}{dr}\\cdot \\dfrac{dr}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Keep symbols so the sign is propagated cleanly." },
    { stepNumber: 5, description: "Substitute the rate.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot (-0.5) = -\\pi r", explanation: "Numerical rate inserted, expression still in terms of \\(r\\)." },
    { stepNumber: 6, description: "Substitute \\(r = 10\\).", workingLatex: "\\dfrac{dA}{dt} = -\\pi \\cdot 10", explanation: "Evaluate at the radius of interest." },
    { stepNumber: 7, description: "Simplify and state with units.", workingLatex: "\\dfrac{dA}{dt} = -10\\pi \\text{ cm}^2/\\text{s}", explanation: "Area is decreasing at \\(10\\pi\\) cm²/s." }
  ], finalAnswer: "\\( 10\\pi \\) cm²/s (decreasing)." } },
  // ── Sphere ────
  { id: "y2df10-006", topicRef: "y2df10", topicTitle: "Rates of Change 06", difficulty: "Standard", questionText: "The radius of a sphere is increasing at \\(3\\) cm/s. Find the rate at which the volume is increasing when \\(r=4\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume formula for a sphere.", workingLatex: "V = \\tfrac{4}{3}\\pi r^3", explanation: "Standard volume formula." },
    { stepNumber: 2, description: "State the given radius rate.", workingLatex: "\\dfrac{dr}{dt} = 3 \\text{ cm/s}", explanation: "Radius increasing at \\(3\\) cm/s." },
    { stepNumber: 3, description: "Differentiate \\(V\\) with respect to \\(r\\).", workingLatex: "\\dfrac{dV}{dr} = 4\\pi r^2", explanation: "Differentiating gives the surface area-like multiplier." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 4\\pi r^2 \\cdot \\dfrac{dr}{dt}", explanation: "Substitute symbolic expression first." },
    { stepNumber: 5, description: "Substitute the rate.", workingLatex: "\\dfrac{dV}{dt} = 4\\pi r^2 \\cdot 3 = 12\\pi r^2", explanation: "Expression still in terms of \\(r\\)." },
    { stepNumber: 6, description: "Substitute \\(r = 4\\).", workingLatex: "\\dfrac{dV}{dt} = 12\\pi \\cdot 16 = 192\\pi", explanation: "Insert the value at the moment of interest." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dV}{dt} = 192\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume increases at \\(192\\pi\\) cm³/s." }
  ], finalAnswer: "\\( 192\\pi \\) cm³/s." } },
  { id: "y2df10-007", topicRef: "y2df10", topicTitle: "Rates of Change 07", difficulty: "Standard", questionText: "The radius of a sphere is increasing at \\(0.5\\) cm/s. Find the rate at which the surface area is increasing when \\(r=3\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the surface-area formula.", workingLatex: "S = 4\\pi r^2", explanation: "Surface area of a sphere as a function of its radius." },
    { stepNumber: 2, description: "State the given rate with units.", workingLatex: "\\dfrac{dr}{dt} = 0.5 \\text{ cm/s}", explanation: "Radius is increasing at \\(0.5\\) cm/s." },
    { stepNumber: 3, description: "Differentiate \\(S\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dS}{dr} = 8\\pi r", explanation: "Apply the power rule." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dS}{dt} = 8\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Chain rule before any numerical substitution." },
    { stepNumber: 5, description: "Substitute the radius rate.", workingLatex: "\\dfrac{dS}{dt} = 8\\pi r \\cdot 0.5 = 4\\pi r", explanation: "Numerical rate inserted." },
    { stepNumber: 6, description: "Substitute \\(r = 3\\).", workingLatex: "\\dfrac{dS}{dt} = 4\\pi \\cdot 3 = 12\\pi", explanation: "Evaluate at the radius of interest." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dS}{dt} = 12\\pi \\text{ cm}^2/\\text{s}", explanation: "Surface area grows at \\(12\\pi\\) cm²/s." }
  ], finalAnswer: "\\( 12\\pi \\) cm²/s." } },
  { id: "y2df10-008", topicRef: "y2df10", topicTitle: "Rates of Change 08", difficulty: "Standard", questionText: "A spherical balloon is inflated at \\(100\\pi\\) cm³/s. Find the rate of change of radius when \\(r=5\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the sphere-volume formula.", workingLatex: "V = \\tfrac{4}{3}\\pi r^3", explanation: "Standard formula." },
    { stepNumber: 2, description: "State the given rate (volume).", workingLatex: "\\dfrac{dV}{dt} = 100\\pi \\text{ cm}^3/\\text{s}", explanation: "The volume rate is given — we want the radius rate (inverse-rate problem)." },
    { stepNumber: 3, description: "Differentiate \\(V\\) with respect to \\(r\\).", workingLatex: "\\dfrac{dV}{dr} = 4\\pi r^2", explanation: "Derivative used in the chain rule." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 4\\pi r^2 \\cdot \\dfrac{dr}{dt}", explanation: "Set up the equation before any numbers are substituted." },
    { stepNumber: 5, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{1}{4\\pi r^2}\\cdot \\dfrac{dV}{dt}", explanation: "Solve algebraically for \\(\\dfrac{dr}{dt}\\)." },
    { stepNumber: 6, description: "Substitute \\(r = 5\\) and the volume rate.", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{100\\pi}{4\\pi \\cdot 25} = \\dfrac{100\\pi}{100\\pi}", explanation: "Insert the numeric values." },
    { stepNumber: 7, description: "Simplify with units.", workingLatex: "\\dfrac{dr}{dt} = 1 \\text{ cm/s}", explanation: "The radius is increasing at \\(1\\) cm/s." }
  ], finalAnswer: "\\( 1 \\) cm/s." } },
  { id: "y2df10-009", topicRef: "y2df10", topicTitle: "Rates of Change 09", difficulty: "Challenge", questionText: "A spherical balloon is inflated at \\(400\\pi\\) cm³/s. Find the rate at which its surface area is increasing when \\(r=10\\) cm.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the formulae linking volume and surface area to radius.", workingLatex: "V = \\tfrac{4}{3}\\pi r^3,\\; S = 4\\pi r^2", explanation: "Both depend on the radius — the radius is the bridge between the two given rates." },
    { stepNumber: 2, description: "State the given rate with units.", workingLatex: "\\dfrac{dV}{dt} = 400\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume is being added at this rate." },
    { stepNumber: 3, description: "Differentiate \\(V\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dV}{dr} = 4\\pi r^2", explanation: "Used to find \\(\\dfrac{dr}{dt}\\) first." },
    { stepNumber: 4, description: "Apply chain rule to find \\(\\dfrac{dr}{dt}\\).", workingLatex: "\\dfrac{dV}{dt} = 4\\pi r^2 \\cdot \\dfrac{dr}{dt}", explanation: "Symbolic relation." },
    { stepNumber: 5, description: "Substitute \\(r = 10\\) and solve for \\(\\dfrac{dr}{dt}\\).", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{400\\pi}{4\\pi \\cdot 100} = 1 \\text{ cm/s}", explanation: "Plug in numbers after the chain rule is set up." },
    { stepNumber: 6, description: "Differentiate \\(S\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dS}{dr} = 8\\pi r", explanation: "Now we connect \\(S\\) to \\(r\\) using the chain rule again." },
    { stepNumber: 7, description: "Apply chain rule to find \\(\\dfrac{dS}{dt}\\).", workingLatex: "\\dfrac{dS}{dt} = 8\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Same template as before — symbol substitution first." },
    { stepNumber: 8, description: "Substitute \\(r = 10\\) and \\(\\dfrac{dr}{dt} = 1\\).", workingLatex: "\\dfrac{dS}{dt} = 8\\pi \\cdot 10 \\cdot 1 = 80\\pi", explanation: "Insert the numeric values." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dS}{dt} = 80\\pi \\text{ cm}^2/\\text{s}", explanation: "Surface area grows at \\(80\\pi\\) cm²/s." }
  ], finalAnswer: "\\( 80\\pi \\) cm²/s." } },
  // ── Cube / square variants ────
  { id: "y2df10-010", topicRef: "y2df10", topicTitle: "Rates of Change 10", difficulty: "Standard", questionText: "The side of a cube is increasing at \\(0.4\\) cm/s. Find the rate at which the surface area is increasing when \\(x=6\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the surface-area formula for a cube.", workingLatex: "S = 6x^2", explanation: "Six faces of area \\(x^2\\) each." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dx}{dt} = 0.4 \\text{ cm/s}", explanation: "Side is increasing at \\(0.4\\) cm/s." },
    { stepNumber: 3, description: "Differentiate \\(S\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dS}{dx} = 12x", explanation: "Power-rule differentiation." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dS}{dt} = 12x \\cdot \\dfrac{dx}{dt}", explanation: "Symbolic form before numbers." },
    { stepNumber: 5, description: "Substitute the rate.", workingLatex: "\\dfrac{dS}{dt} = 12x \\cdot 0.4 = 4.8x", explanation: "Now in terms of \\(x\\) only." },
    { stepNumber: 6, description: "Substitute \\(x = 6\\).", workingLatex: "\\dfrac{dS}{dt} = 4.8 \\cdot 6 = 28.8", explanation: "Evaluate at the side of interest." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dS}{dt} = 28.8 \\text{ cm}^2/\\text{s}", explanation: "Surface area is increasing at \\(28.8\\) cm²/s." }
  ], finalAnswer: "\\( 28.8 \\) cm²/s." } },
  { id: "y2df10-011", topicRef: "y2df10", topicTitle: "Rates of Change 11", difficulty: "Foundation", questionText: "The side of a square is increasing at \\(2\\) cm/s. Find the rate of increase of the perimeter.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the perimeter formula.", workingLatex: "P = 4x", explanation: "Sum of four equal sides." },
    { stepNumber: 2, description: "State the given rate with units.", workingLatex: "\\dfrac{dx}{dt} = 2 \\text{ cm/s}", explanation: "Side length grows at \\(2\\) cm/s." },
    { stepNumber: 3, description: "Differentiate \\(P\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dP}{dx} = 4", explanation: "Constant slope (perimeter is linear in side)." },
    { stepNumber: 4, description: "Apply the chain rule.", workingLatex: "\\dfrac{dP}{dt} = 4 \\cdot \\dfrac{dx}{dt}", explanation: "Chain rule link." },
    { stepNumber: 5, description: "Substitute and state with units.", workingLatex: "\\dfrac{dP}{dt} = 4 \\cdot 2 = 8 \\text{ cm/s}", explanation: "Perimeter increases at \\(8\\) cm/s, regardless of side length." }
  ], finalAnswer: "\\( 8 \\) cm/s." } },
  { id: "y2df10-012", topicRef: "y2df10", topicTitle: "Rates of Change 12", difficulty: "Foundation", questionText: "The side of a square is increasing at \\(3\\) cm/s. Find the rate of increase of area when side is \\(4\\) cm.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the area formula.", workingLatex: "A = x^2", explanation: "Standard area of a square." },
    { stepNumber: 2, description: "State the given rate with units.", workingLatex: "\\dfrac{dx}{dt} = 3 \\text{ cm/s}", explanation: "Side increases at \\(3\\) cm/s." },
    { stepNumber: 3, description: "Differentiate \\(A\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dA}{dx} = 2x", explanation: "Power rule." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = 2x \\cdot \\dfrac{dx}{dt}", explanation: "Symbol form first." },
    { stepNumber: 5, description: "Substitute the rate and \\(x = 4\\).", workingLatex: "\\dfrac{dA}{dt} = 2 \\cdot 4 \\cdot 3 = 24 \\text{ cm}^2/\\text{s}", explanation: "Area grows at \\(24\\) cm²/s." }
  ], finalAnswer: "\\( 24 \\) cm²/s." } },
  { id: "y2df10-013", topicRef: "y2df10", topicTitle: "Rates of Change 13", difficulty: "Challenge", questionText: "A cube's volume is increasing at \\(48\\) cm³/s. Find the rate of change of the side length when \\(x = 4\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume formula.", workingLatex: "V = x^3", explanation: "Cube of side \\(x\\)." },
    { stepNumber: 2, description: "Identify what is given and what is asked.", workingLatex: "\\text{Given: }\\dfrac{dV}{dt};\\; \\text{Find: }\\dfrac{dx}{dt}", explanation: "Inverse-rate problem: we know the derived rate and want the underlying one." },
    { stepNumber: 3, description: "State the given rate.", workingLatex: "\\dfrac{dV}{dt} = 48 \\text{ cm}^3/\\text{s}", explanation: "Volume is growing at \\(48\\) cm³/s." },
    { stepNumber: 4, description: "Differentiate \\(V\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dV}{dx} = 3x^2", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 3x^2 \\cdot \\dfrac{dx}{dt}", explanation: "Chain-rule equation, symbols first." },
    { stepNumber: 6, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dx}{dt} = \\dfrac{1}{3x^2}\\cdot \\dfrac{dV}{dt}", explanation: "Solve algebraically before substituting." },
    { stepNumber: 7, description: "Substitute \\(x = 4\\) and the volume rate.", workingLatex: "\\dfrac{dx}{dt} = \\dfrac{48}{3 \\cdot 16}", explanation: "Insert numerical values." },
    { stepNumber: 8, description: "Compute the denominator.", workingLatex: "\\dfrac{dx}{dt} = \\dfrac{48}{48}", explanation: "Simplify the arithmetic." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{dx}{dt} = 1 \\text{ cm/s}", explanation: "The side length grows at \\(1\\) cm/s." }
  ], finalAnswer: "\\( 1 \\) cm/s." } },
  // ── Cylinder ────
  { id: "y2df10-014", topicRef: "y2df10", topicTitle: "Rates of Change 14", difficulty: "Challenge", questionText: "A cylinder with fixed height \\(10\\) cm has its radius increasing at \\(0.5\\) cm/s. Find the rate of change of volume when \\(r=3\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the cylinder volume formula.", workingLatex: "V = \\pi r^2 h", explanation: "Standard formula." },
    { stepNumber: 2, description: "Identify the constants and variables.", workingLatex: "h = 10 \\text{ (fixed)},\\; r \\text{ varies with time}", explanation: "Only one variable depends on time, so a single chain rule is needed." },
    { stepNumber: 3, description: "Substitute the fixed height.", workingLatex: "V = 10\\pi r^2", explanation: "With \\(h = 10\\) the only variable is \\(r\\)." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dr}{dt} = 0.5 \\text{ cm/s}", explanation: "Radius growth rate with units." },
    { stepNumber: 5, description: "Differentiate \\(V\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dV}{dr} = 20\\pi r", explanation: "Power rule." },
    { stepNumber: 6, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 20\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Symbol form first." },
    { stepNumber: 7, description: "Substitute the rate.", workingLatex: "\\dfrac{dV}{dt} = 20\\pi r \\cdot 0.5 = 10\\pi r", explanation: "Now a function of \\(r\\) only." },
    { stepNumber: 8, description: "Substitute \\(r = 3\\).", workingLatex: "\\dfrac{dV}{dt} = 10\\pi \\cdot 3", explanation: "Plug in the radius at the moment of interest." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{dV}{dt} = 30\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume grows at \\(30\\pi\\) cm³/s." }
  ], finalAnswer: "\\( 30\\pi \\) cm³/s." } },
  { id: "y2df10-015", topicRef: "y2df10", topicTitle: "Rates of Change 15", difficulty: "Standard", questionText: "A cylinder of fixed radius \\(4\\) cm has its height increasing at \\(2\\) cm/s. Find the rate of volume change.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the cylinder-volume formula.", workingLatex: "V = \\pi r^2 h", explanation: "Standard formula." },
    { stepNumber: 2, description: "Note the constants and variables.", workingLatex: "r = 4 \\text{ (fixed)},\\; h \\text{ varies with time}", explanation: "Only \\(h\\) depends on time, so a single chain rule application is required." },
    { stepNumber: 3, description: "Substitute the fixed radius.", workingLatex: "V = 16\\pi h", explanation: "With \\(r = 4\\), the only variable is \\(h\\)." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dh}{dt} = 2 \\text{ cm/s}", explanation: "Height grows at \\(2\\) cm/s." },
    { stepNumber: 5, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = 16\\pi", explanation: "Linear in \\(h\\)." },
    { stepNumber: 6, description: "Apply the chain rule.", workingLatex: "\\dfrac{dV}{dt} = 16\\pi \\cdot \\dfrac{dh}{dt}", explanation: "Chain rule link." },
    { stepNumber: 7, description: "Substitute and state with units.", workingLatex: "\\dfrac{dV}{dt} = 16\\pi \\cdot 2 = 32\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume increases at \\(32\\pi\\) cm³/s." }
  ], finalAnswer: "\\( 32\\pi \\) cm³/s." } },
  // ── Cone (water draining / filling) ────
  { id: "y2df10-016", topicRef: "y2df10", topicTitle: "Rates of Change 16", difficulty: "Challenge", questionText: "Water is poured into a cone (apex down) at \\(10\\) cm³/s. The cone has radius-to-height ratio \\(1:2\\). Find the rate at which the water level rises when \\(h = 4\\) cm.", marks: 6, examStyle: true, yearCreated: 2026, tags: ["rates", "cone"], workedSolution: { steps: [
    { stepNumber: 1, description: "Note the geometric constraint.", workingLatex: "r : h = 1 : 2 \\Rightarrow r = \\tfrac{h}{2}", explanation: "Similar-triangle constraint relates radius to height at all times." },
    { stepNumber: 2, description: "Use the cone-volume formula and eliminate \\(r\\).", workingLatex: "V = \\tfrac{1}{3}\\pi r^2 h = \\tfrac{1}{3}\\pi \\left(\\tfrac{h}{2}\\right)^2 h", explanation: "Substituting the constraint expresses \\(V\\) purely in terms of \\(h\\)." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "V = \\tfrac{\\pi h^3}{12}", explanation: "Single-variable expression ready for differentiation." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dV}{dt} = 10 \\text{ cm}^3/\\text{s}", explanation: "Volume of water added per second." },
    { stepNumber: 5, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = \\tfrac{\\pi h^2}{4}", explanation: "Power-rule differentiation." },
    { stepNumber: 6, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = \\tfrac{\\pi h^2}{4}\\cdot \\dfrac{dh}{dt}", explanation: "Symbol substitution first." },
    { stepNumber: 7, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{4}{\\pi h^2}\\cdot \\dfrac{dV}{dt}", explanation: "Solve algebraically." },
    { stepNumber: 8, description: "Substitute \\(h = 4\\) and the volume rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{4 \\cdot 10}{\\pi \\cdot 16} = \\dfrac{40}{16\\pi} = \\dfrac{5}{2\\pi}", explanation: "Insert the numbers." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dh}{dt} = \\tfrac{5}{2\\pi} \\approx 0.796 \\text{ cm/s}", explanation: "Water level rises at about \\(0.796\\) cm/s." }
  ], finalAnswer: "\\( \\tfrac{5}{2\\pi} \\approx 0.796 \\) cm/s." } },
  { id: "y2df10-017", topicRef: "y2df10", topicTitle: "Rates of Change 17", difficulty: "Challenge", questionText: "Water flows into a cone at \\(2\\) cm³/s. The cone has \\(r:h = 1:3\\). Find \\(dh/dt\\) when \\(h=6\\) cm.", marks: 6, examStyle: true, yearCreated: 2026, tags: ["rates", "cone"], workedSolution: { steps: [
    { stepNumber: 1, description: "Note the similar-triangle constraint.", workingLatex: "r = \\tfrac{h}{3}", explanation: "Radius-to-height ratio applies for the water surface at all heights." },
    { stepNumber: 2, description: "Substitute into the cone-volume formula.", workingLatex: "V = \\tfrac{1}{3}\\pi r^2 h = \\tfrac{1}{3}\\pi \\left(\\tfrac{h}{3}\\right)^2 h", explanation: "Eliminate \\(r\\) so \\(V\\) is a function of \\(h\\) only." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "V = \\tfrac{\\pi h^3}{27}", explanation: "Now ready for differentiation." },
    { stepNumber: 4, description: "State the given rate with units.", workingLatex: "\\dfrac{dV}{dt} = 2 \\text{ cm}^3/\\text{s}", explanation: "Inflow rate." },
    { stepNumber: 5, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = \\tfrac{\\pi h^2}{9}", explanation: "Power-rule." },
    { stepNumber: 6, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = \\tfrac{\\pi h^2}{9}\\cdot \\dfrac{dh}{dt}", explanation: "Symbols first." },
    { stepNumber: 7, description: "Rearrange for the unknown.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{9}{\\pi h^2}\\cdot \\dfrac{dV}{dt}", explanation: "Solve algebraically for \\(dh/dt\\)." },
    { stepNumber: 8, description: "Substitute \\(h = 6\\) and \\(\\dfrac{dV}{dt} = 2\\).", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{9 \\cdot 2}{\\pi \\cdot 36} = \\dfrac{18}{36\\pi} = \\dfrac{1}{2\\pi}", explanation: "Numerical evaluation." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dh}{dt} = \\tfrac{1}{2\\pi} \\text{ cm/s}", explanation: "Water level rises at \\(\\tfrac{1}{2\\pi}\\) cm/s." }
  ], finalAnswer: "\\( \\tfrac{1}{2\\pi} \\) cm/s." } },
  { id: "y2df10-018", topicRef: "y2df10", topicTitle: "Rates of Change 18", difficulty: "Standard", questionText: "Water drains from a cylinder of radius \\(10\\) cm at \\(5\\pi\\) cm³/s. Find the rate of decrease of water depth.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the cylinder-volume formula.", workingLatex: "V = \\pi r^2 h", explanation: "Standard formula." },
    { stepNumber: 2, description: "Substitute the fixed radius.", workingLatex: "V = 100\\pi h", explanation: "Only the depth \\(h\\) varies." },
    { stepNumber: 3, description: "State the given rate, including the negative sign.", workingLatex: "\\dfrac{dV}{dt} = -5\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume is decreasing — use a negative sign." },
    { stepNumber: 4, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = 100\\pi", explanation: "Linear coefficient." },
    { stepNumber: 5, description: "Apply chain rule.", workingLatex: "\\dfrac{dV}{dt} = 100\\pi \\cdot \\dfrac{dh}{dt}", explanation: "Symbolic link first." },
    { stepNumber: 6, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{1}{100\\pi}\\cdot \\dfrac{dV}{dt}", explanation: "Algebraic rearrangement." },
    { stepNumber: 7, description: "Substitute and state.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{-5\\pi}{100\\pi} = -0.05 \\text{ cm/s}", explanation: "Depth drops at \\(0.05\\) cm/s." }
  ], finalAnswer: "\\( 0.05 \\) cm/s (decreasing)." } },
  // ── Ladder problems ────
  { id: "y2df10-019", topicRef: "y2df10", topicTitle: "Rates of Change 19", difficulty: "Challenge", questionText: "A \\(10\\) m ladder leans against a wall. The top slides down at \\(0.2\\) m/s. Find the rate at which the foot moves away when the foot is \\(6\\) m from the wall.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates", "pythagoras"], workedSolution: { steps: [
    { stepNumber: 1, description: "Identify the constraint linking horizontal and vertical positions.", workingLatex: "x^2 + y^2 = 100", explanation: "By Pythagoras with \\(x\\) = foot distance, \\(y\\) = height of top, ladder length \\(10\\) m." },
    { stepNumber: 2, description: "Differentiate the constraint implicitly w.r.t. \\(t\\).", workingLatex: "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0", explanation: "Both \\(x\\) and \\(y\\) depend on time; chain rule gives an implicit relation between their rates." },
    { stepNumber: 3, description: "Simplify and isolate the unknown rate symbolically.", workingLatex: "x\\dfrac{dx}{dt} = -y\\dfrac{dy}{dt}", explanation: "Divide by 2 — keep symbols first." },
    { stepNumber: 4, description: "Find \\(y\\) when \\(x = 6\\).", workingLatex: "y = \\sqrt{100 - 36} = 8", explanation: "From the constraint at the moment of interest." },
    { stepNumber: 5, description: "State the given rate including its sign.", workingLatex: "\\dfrac{dy}{dt} = -0.2 \\text{ m/s}", explanation: "Top is sliding down, so vertical position decreases." },
    { stepNumber: 6, description: "Solve for \\(\\dfrac{dx}{dt}\\) symbolically.", workingLatex: "\\dfrac{dx}{dt} = -\\dfrac{y}{x}\\cdot \\dfrac{dy}{dt}", explanation: "Algebraic rearrangement of step 3." },
    { stepNumber: 7, description: "Substitute the known values.", workingLatex: "\\dfrac{dx}{dt} = -\\dfrac{8}{6}\\cdot (-0.2)", explanation: "Insert \\(x=6, y=8, \\dfrac{dy}{dt} = -0.2\\)." },
    { stepNumber: 8, description: "Simplify.", workingLatex: "\\dfrac{dx}{dt} = \\dfrac{1.6}{6} = \\dfrac{4}{15}", explanation: "Cancel and tidy." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dx}{dt} = \\tfrac{4}{15} \\approx 0.267 \\text{ m/s}", explanation: "Foot slides outward at about \\(0.267\\) m/s." }
  ], finalAnswer: "\\( \\tfrac{4}{15} \\approx 0.267 \\) m/s." } },
  { id: "y2df10-020", topicRef: "y2df10", topicTitle: "Rates of Change 20", difficulty: "Challenge", questionText: "A \\(5\\) m ladder leans against a wall. The top slides down at \\(0.3\\) m/s. Find \\(dx/dt\\) when foot is \\(3\\) m away.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up notation.", workingLatex: "x = \\text{foot's distance from wall},\\; y = \\text{height of top}", explanation: "Both depend on time as the ladder slides." },
    { stepNumber: 2, description: "Constraint equation.", workingLatex: "x^2 + y^2 = 25", explanation: "Pythagoras with ladder length \\(5\\) m." },
    { stepNumber: 3, description: "Differentiate implicitly w.r.t. time.", workingLatex: "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0", explanation: "Each side is differentiated using the chain rule." },
    { stepNumber: 4, description: "Simplify symbolically.", workingLatex: "x\\dfrac{dx}{dt} = -y\\dfrac{dy}{dt}", explanation: "Divide by 2." },
    { stepNumber: 5, description: "Find \\(y\\) when \\(x = 3\\).", workingLatex: "y = \\sqrt{25 - 9} = 4", explanation: "Pythagoras at this snapshot." },
    { stepNumber: 6, description: "State the given rate with sign.", workingLatex: "\\dfrac{dy}{dt} = -0.3 \\text{ m/s}", explanation: "Negative because the top is sliding down." },
    { stepNumber: 7, description: "Solve for \\(\\dfrac{dx}{dt}\\) symbolically.", workingLatex: "\\dfrac{dx}{dt} = -\\dfrac{y}{x}\\cdot \\dfrac{dy}{dt}", explanation: "Algebraic rearrangement before substitution." },
    { stepNumber: 8, description: "Substitute the known values.", workingLatex: "\\dfrac{dx}{dt} = -\\dfrac{4}{3}\\cdot (-0.3)", explanation: "Insert \\(x=3, y=4, \\dfrac{dy}{dt} = -0.3\\)." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{dx}{dt} = 0.4 \\text{ m/s}", explanation: "The foot moves away at \\(0.4\\) m/s." }
  ], finalAnswer: "\\( 0.4 \\) m/s." } },
  // ── Various ────
  { id: "y2df10-021", topicRef: "y2df10", topicTitle: "Rates of Change 21", difficulty: "Standard", questionText: "Oil spreads in a circular patch with radius increasing at \\(4\\) cm/min. Find the rate of increase of area when \\(r=50\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the area formula.", workingLatex: "A = \\pi r^2", explanation: "Circular patch — standard formula." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dr}{dt} = 4 \\text{ cm/min}", explanation: "Radius growth rate with units." },
    { stepNumber: 3, description: "Differentiate area w.r.t. \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = 2\\pi r", explanation: "Power rule." },
    { stepNumber: 4, description: "Apply the chain rule.", workingLatex: "\\dfrac{dA}{dt} = \\dfrac{dA}{dr}\\cdot \\dfrac{dr}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Symbol form." },
    { stepNumber: 5, description: "Substitute the rate.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot 4 = 8\\pi r", explanation: "Now a function of \\(r\\) only." },
    { stepNumber: 6, description: "Substitute \\(r = 50\\).", workingLatex: "\\dfrac{dA}{dt} = 8\\pi \\cdot 50", explanation: "Evaluate at the given radius." },
    { stepNumber: 7, description: "Simplify and state.", workingLatex: "\\dfrac{dA}{dt} = 400\\pi \\text{ cm}^2/\\text{min}", explanation: "Area grows at \\(400\\pi\\) cm²/min." }
  ], finalAnswer: "\\( 400\\pi \\) cm²/min." } },
  { id: "y2df10-022", topicRef: "y2df10", topicTitle: "Rates of Change 22", difficulty: "Standard", questionText: "A particle's displacement is \\( s = 3t^2 - t^3 \\). Find its velocity at \\(t=2\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates", "mechanics"], workedSolution: { steps: [
    { stepNumber: 1, description: "Recall the link between displacement and velocity.", workingLatex: "v = \\dfrac{ds}{dt}", explanation: "Velocity is the rate of change of displacement w.r.t. time." },
    { stepNumber: 2, description: "Identify the displacement function.", workingLatex: "s = 3t^2 - t^3", explanation: "Given polynomial in \\(t\\)." },
    { stepNumber: 3, description: "Differentiate term by term.", workingLatex: "\\dfrac{d}{dt}(3t^2) = 6t,\\; \\dfrac{d}{dt}(-t^3) = -3t^2", explanation: "Power-rule on each term." },
    { stepNumber: 4, description: "Combine to give the velocity function.", workingLatex: "v = 6t - 3t^2", explanation: "Sum the term derivatives." },
    { stepNumber: 5, description: "Substitute \\(t = 2\\).", workingLatex: "v(2) = 6\\cdot 2 - 3\\cdot 4", explanation: "Numerical evaluation." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "v(2) = 12 - 12 = 0", explanation: "Velocity is zero at this instant." },
    { stepNumber: 7, description: "Interpret with units.", workingLatex: "v(2) = 0 \\text{ units/s}", explanation: "Particle is momentarily at rest at \\(t = 2\\) — about to change direction." }
  ], finalAnswer: "\\( 0 \\) (momentarily at rest)." } },
  { id: "y2df10-023", topicRef: "y2df10", topicTitle: "Rates of Change 23", difficulty: "Standard", questionText: "A particle's displacement is \\( s = 2t^3 - 5t^2 \\). Find its acceleration at \\(t = 3\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates", "mechanics"], workedSolution: { steps: [
    { stepNumber: 1, description: "Recall: acceleration is the second derivative of displacement.", workingLatex: "a = \\dfrac{d^2 s}{dt^2}", explanation: "Differentiate twice with respect to time." },
    { stepNumber: 2, description: "Write down the displacement.", workingLatex: "s = 2t^3 - 5t^2", explanation: "Given polynomial." },
    { stepNumber: 3, description: "First derivative (velocity).", workingLatex: "v = \\dfrac{ds}{dt} = 6t^2 - 10t", explanation: "Power-rule on each term." },
    { stepNumber: 4, description: "Second derivative (acceleration).", workingLatex: "a = \\dfrac{dv}{dt} = 12t - 10", explanation: "Differentiate again." },
    { stepNumber: 5, description: "Substitute \\(t = 3\\).", workingLatex: "a(3) = 12\\cdot 3 - 10", explanation: "Numerical substitution." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "a(3) = 36 - 10 = 26", explanation: "Arithmetic step." },
    { stepNumber: 7, description: "State with units.", workingLatex: "a(3) = 26 \\text{ units/s}^2", explanation: "Acceleration is \\(26\\) units/s² at \\(t = 3\\)." }
  ], finalAnswer: "\\( 26 \\) units/s²." } },
  { id: "y2df10-024", topicRef: "y2df10", topicTitle: "Rates of Change 24", difficulty: "Challenge", questionText: "A rectangle has length increasing at \\(2\\) cm/s and width at \\(3\\) cm/s. Find the rate of change of area when length = 10, width = 6 cm.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates", "product"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the relationship for area.", workingLatex: "A = \\ell w", explanation: "Two variables both change with time, so we need the product rule." },
    { stepNumber: 2, description: "Identify both variables as time-dependent.", workingLatex: "\\ell = \\ell(t),\\; w = w(t)", explanation: "Single-chain-rule template no longer applies — use the product rule." },
    { stepNumber: 3, description: "Differentiate w.r.t. \\(t\\) using the product rule.", workingLatex: "\\dfrac{dA}{dt} = \\dfrac{d\\ell}{dt}\\, w + \\ell\\, \\dfrac{dw}{dt}", explanation: "Both factors are time-dependent." },
    { stepNumber: 4, description: "State the given rates.", workingLatex: "\\dfrac{d\\ell}{dt} = 2,\\; \\dfrac{dw}{dt} = 3 \\text{ cm/s}", explanation: "Two rates given." },
    { stepNumber: 5, description: "State the instantaneous lengths.", workingLatex: "\\ell = 10,\\; w = 6", explanation: "At the moment of interest." },
    { stepNumber: 6, description: "Substitute into the product rule.", workingLatex: "\\dfrac{dA}{dt} = 2 \\cdot 6 + 10 \\cdot 3", explanation: "Insert all values." },
    { stepNumber: 7, description: "Compute the two contributions.", workingLatex: "\\dfrac{dA}{dt} = 12 + 30", explanation: "First term is from length growth, second from width growth." },
    { stepNumber: 8, description: "Sum.", workingLatex: "\\dfrac{dA}{dt} = 42", explanation: "Add the two contributions." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dA}{dt} = 42 \\text{ cm}^2/\\text{s}", explanation: "Area grows at \\(42\\) cm²/s." }
  ], finalAnswer: "\\( 42 \\) cm²/s." } },
  // ── More spheres/cubes ────
  { id: "y2df10-025", topicRef: "y2df10", topicTitle: "Rates of Change 25", difficulty: "Challenge", questionText: "A sphere's surface area is decreasing at \\(16\\pi\\) cm²/s. Find the rate of change of radius when \\(r = 4\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the surface-area formula.", workingLatex: "S = 4\\pi r^2", explanation: "Standard formula." },
    { stepNumber: 2, description: "Identify the inverse-rate structure.", workingLatex: "\\text{Given: }\\dfrac{dS}{dt};\\; \\text{Find: }\\dfrac{dr}{dt}", explanation: "We have the surface-area rate but need the radius rate — rearrangement will be needed." },
    { stepNumber: 3, description: "State the given rate with sign.", workingLatex: "\\dfrac{dS}{dt} = -16\\pi \\text{ cm}^2/\\text{s}", explanation: "Decreasing, so the derivative is negative." },
    { stepNumber: 4, description: "Differentiate \\(S\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dS}{dr} = 8\\pi r", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dS}{dt} = 8\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Symbolic relation." },
    { stepNumber: 6, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{1}{8\\pi r}\\cdot \\dfrac{dS}{dt}", explanation: "Inverse-rate solve." },
    { stepNumber: 7, description: "Substitute \\(r = 4\\) and the surface-area rate.", workingLatex: "\\dfrac{dr}{dt} = \\dfrac{-16\\pi}{8\\pi \\cdot 4} = \\dfrac{-16\\pi}{32\\pi}", explanation: "Numerical substitution." },
    { stepNumber: 8, description: "Simplify the fraction.", workingLatex: "\\dfrac{dr}{dt} = -\\dfrac{1}{2}", explanation: "Cancel common factors." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dr}{dt} = -0.5 \\text{ cm/s}", explanation: "Radius shrinks at \\(0.5\\) cm/s." }
  ], finalAnswer: "\\( 0.5 \\) cm/s (decreasing)." } },
  { id: "y2df10-026", topicRef: "y2df10", topicTitle: "Rates of Change 26", difficulty: "Challenge", questionText: "An ice cube melts uniformly so that its surface area decreases at \\(12\\) cm²/s. Find the rate of change of volume when the side is \\(5\\) cm.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write surface-area and volume formulae.", workingLatex: "S = 6x^2,\\; V = x^3", explanation: "Both depend on side length \\(x\\)." },
    { stepNumber: 2, description: "State the given rate with sign.", workingLatex: "\\dfrac{dS}{dt} = -12 \\text{ cm}^2/\\text{s}", explanation: "Decreasing surface area." },
    { stepNumber: 3, description: "Differentiate \\(S\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dS}{dx} = 12x", explanation: "First chain-rule step." },
    { stepNumber: 4, description: "Apply chain rule to find \\(\\dfrac{dx}{dt}\\).", workingLatex: "\\dfrac{dS}{dt} = 12x \\cdot \\dfrac{dx}{dt}", explanation: "Inverse rate to solve." },
    { stepNumber: 5, description: "Substitute \\(x = 5\\) and solve.", workingLatex: "-12 = 60 \\cdot \\dfrac{dx}{dt} \\Rightarrow \\dfrac{dx}{dt} = -0.2 \\text{ cm/s}", explanation: "Now we have the side rate." },
    { stepNumber: 6, description: "Differentiate \\(V\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dV}{dx} = 3x^2", explanation: "Same chain-rule template." },
    { stepNumber: 7, description: "Apply chain rule for \\(\\dfrac{dV}{dt}\\).", workingLatex: "\\dfrac{dV}{dt} = 3x^2 \\cdot \\dfrac{dx}{dt}", explanation: "Symbolic form." },
    { stepNumber: 8, description: "Substitute \\(x = 5\\) and the side rate.", workingLatex: "\\dfrac{dV}{dt} = 3 \\cdot 25 \\cdot (-0.2) = -15", explanation: "Numerical evaluation." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dV}{dt} = -15 \\text{ cm}^3/\\text{s}", explanation: "Volume decreases at \\(15\\) cm³/s." }
  ], finalAnswer: "\\( -15 \\) cm³/s (volume decreasing at 15 cm³/s)." } },
  // ── Velocity/acceleration in kinematics ────
  { id: "y2df10-027", topicRef: "y2df10", topicTitle: "Rates of Change 27", difficulty: "Challenge", questionText: "A particle's displacement is \\( s = t e^{-t} \\). Find its velocity at \\(t = 1\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Recall the velocity definition.", workingLatex: "v = \\dfrac{ds}{dt}", explanation: "Time derivative of displacement." },
    { stepNumber: 2, description: "Recognise \\(s = t \\cdot e^{-t}\\) as a product of \\(u = t\\) and \\(w = e^{-t}\\).", workingLatex: "u = t \\Rightarrow u' = 1;\\; w = e^{-t} \\Rightarrow w' = -e^{-t}", explanation: "We need the product rule, with chain rule on the exponential factor." },
    { stepNumber: 3, description: "Apply the product rule.", workingLatex: "v = u' w + u w' = 1 \\cdot e^{-t} + t \\cdot (-e^{-t})", explanation: "Standard product-rule template." },
    { stepNumber: 4, description: "Simplify.", workingLatex: "v = e^{-t}(1 - t)", explanation: "Factor out the exponential." },
    { stepNumber: 5, description: "Substitute \\(t = 1\\).", workingLatex: "v(1) = e^{-1}(1 - 1)", explanation: "Numerical evaluation." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "v(1) = e^{-1}\\cdot 0", explanation: "Bracket becomes zero." },
    { stepNumber: 7, description: "State with units.", workingLatex: "v(1) = 0 \\text{ units/s}", explanation: "Particle is momentarily at rest at \\(t = 1\\)." },
    { stepNumber: 8, description: "Interpret.", workingLatex: "\\text{Direction of motion is about to reverse}", explanation: "The factor \\((1 - t)\\) changes sign through \\(t = 1\\)." },
    { stepNumber: 9, description: "Closing remark.", workingLatex: "v(1) = 0", explanation: "This is a turning point of the displacement function." }
  ], finalAnswer: "\\( 0 \\) (momentarily at rest)." } },
  { id: "y2df10-028", topicRef: "y2df10", topicTitle: "Rates of Change 28", difficulty: "Standard", questionText: "A ball's height above ground is \\( h = 20t - 5t^2 \\). Find its velocity at \\(t=1\\).", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Velocity is the derivative of height.", workingLatex: "v = \\dfrac{dh}{dt}", explanation: "Standard definition." },
    { stepNumber: 2, description: "Write down the height function.", workingLatex: "h = 20t - 5t^2", explanation: "Given expression." },
    { stepNumber: 3, description: "Differentiate term by term.", workingLatex: "\\dfrac{d}{dt}(20t) = 20,\\; \\dfrac{d}{dt}(-5t^2) = -10t", explanation: "Power rule on each term." },
    { stepNumber: 4, description: "Combine.", workingLatex: "v = 20 - 10t", explanation: "Sum of derivatives." },
    { stepNumber: 5, description: "Substitute \\(t = 1\\).", workingLatex: "v(1) = 20 - 10 \\cdot 1", explanation: "Numerical substitution." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "v(1) = 10", explanation: "Arithmetic step." },
    { stepNumber: 7, description: "State with units.", workingLatex: "v(1) = 10 \\text{ m/s}", explanation: "Ball moves upward at \\(10\\) m/s at \\(t = 1\\)." }
  ], finalAnswer: "\\( 10 \\) m/s." } },
  { id: "y2df10-029", topicRef: "y2df10", topicTitle: "Rates of Change 29", difficulty: "Standard", questionText: "For \\( h = 20t - 5t^2 \\), find the maximum height reached.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Find the velocity by differentiating.", workingLatex: "\\dfrac{dh}{dt} = 20 - 10t", explanation: "At maximum height the velocity is zero." },
    { stepNumber: 2, description: "Set the velocity to zero.", workingLatex: "20 - 10t = 0", explanation: "Stationary point condition." },
    { stepNumber: 3, description: "Solve for \\(t\\).", workingLatex: "t = 2", explanation: "Time at which the ball reaches maximum height." },
    { stepNumber: 4, description: "Verify this is a maximum.", workingLatex: "\\dfrac{d^2 h}{dt^2} = -10 < 0", explanation: "Negative second derivative confirms a maximum." },
    { stepNumber: 5, description: "Substitute \\(t = 2\\) into the height formula.", workingLatex: "h(2) = 20\\cdot 2 - 5\\cdot 4", explanation: "Evaluate height at the critical time." },
    { stepNumber: 6, description: "Compute the value.", workingLatex: "h(2) = 40 - 20 = 20", explanation: "Arithmetic step." },
    { stepNumber: 7, description: "State the maximum height with units.", workingLatex: "h_{\\max} = 20 \\text{ m}", explanation: "Maximum height is \\(20\\) m." }
  ], finalAnswer: "\\( 20 \\) m." } },
  // ── Shadow / similar triangles ────
  { id: "y2df10-030", topicRef: "y2df10", topicTitle: "Rates of Change 30", difficulty: "Challenge", questionText: "A lamp-post is \\(5\\) m tall. A \\(2\\) m tall person walks away from it at \\(1\\) m/s. Find the rate at which the tip of their shadow moves.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates", "similar triangles"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up notation.", workingLatex: "x = \\text{person's distance from post},\\; s = \\text{shadow length}", explanation: "Two variables both depend on time." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dx}{dt} = 1 \\text{ m/s}", explanation: "Person walks at \\(1\\) m/s." },
    { stepNumber: 3, description: "Use similar triangles for the geometric constraint.", workingLatex: "\\dfrac{s}{2} = \\dfrac{x + s}{5}", explanation: "Triangle from person to shadow tip is similar to triangle from lamp to shadow tip." },
    { stepNumber: 4, description: "Solve for \\(s\\) in terms of \\(x\\).", workingLatex: "5s = 2(x + s) \\Rightarrow 3s = 2x \\Rightarrow s = \\tfrac{2x}{3}", explanation: "Algebraic simplification." },
    { stepNumber: 5, description: "Differentiate w.r.t. \\(t\\).", workingLatex: "\\dfrac{ds}{dt} = \\tfrac{2}{3}\\cdot \\dfrac{dx}{dt}", explanation: "Differentiate the explicit relation." },
    { stepNumber: 6, description: "Substitute the given rate.", workingLatex: "\\dfrac{ds}{dt} = \\tfrac{2}{3}\\cdot 1 = \\tfrac{2}{3} \\text{ m/s}", explanation: "Shadow length growth rate." },
    { stepNumber: 7, description: "The tip's position is at \\(x + s\\).", workingLatex: "\\dfrac{d(x + s)}{dt} = \\dfrac{dx}{dt} + \\dfrac{ds}{dt}", explanation: "Tip is offset from post by person's distance plus shadow length." },
    { stepNumber: 8, description: "Substitute the two rates.", workingLatex: "\\dfrac{d(x+s)}{dt} = 1 + \\tfrac{2}{3}", explanation: "Insert the values." },
    { stepNumber: 9, description: "Simplify and state with units.", workingLatex: "\\dfrac{d(x+s)}{dt} = \\tfrac{5}{3} \\text{ m/s}", explanation: "Shadow tip moves at \\(\\tfrac{5}{3}\\) m/s." }
  ], finalAnswer: "Shadow tip moves at \\( \\tfrac{5}{3} \\) m/s." } },
  { id: "y2df10-031", topicRef: "y2df10", topicTitle: "Rates of Change 31", difficulty: "Challenge", questionText: "A lamp is \\(6\\) m tall; a \\(1.5\\) m person walks away at \\(2\\) m/s. Find the rate at which the shadow length increases.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up notation.", workingLatex: "x = \\text{person's distance},\\; s = \\text{shadow length}", explanation: "Two time-dependent variables." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dx}{dt} = 2 \\text{ m/s}", explanation: "Walking speed." },
    { stepNumber: 3, description: "Identify what is being asked.", workingLatex: "\\text{Find: }\\dfrac{ds}{dt}", explanation: "We want how fast the shadow lengthens." },
    { stepNumber: 4, description: "Set up the geometry from similar triangles.", workingLatex: "\\text{Triangles (lamp top, base, tip of shadow) and (person's head, feet, tip of shadow) are similar.}", explanation: "Lamp and person are both vertical; both triangles share the angle of elevation to the lamp top." },
    { stepNumber: 5, description: "Write the similar-triangle constraint.", workingLatex: "\\dfrac{s}{1.5} = \\dfrac{x + s}{6}", explanation: "Person-to-shadow-tip triangle is similar to lamp-to-shadow-tip triangle." },
    { stepNumber: 6, description: "Solve for \\(s\\) in terms of \\(x\\).", workingLatex: "6s = 1.5(x + s) \\Rightarrow 4.5 s = 1.5 x \\Rightarrow s = \\tfrac{x}{3}", explanation: "Algebraic simplification." },
    { stepNumber: 7, description: "Differentiate w.r.t. \\(t\\).", workingLatex: "\\dfrac{ds}{dt} = \\tfrac{1}{3}\\cdot \\dfrac{dx}{dt}", explanation: "Apply the chain rule to the explicit relation." },
    { stepNumber: 8, description: "Substitute the rate.", workingLatex: "\\dfrac{ds}{dt} = \\tfrac{1}{3}\\cdot 2", explanation: "Insert the walking speed." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{ds}{dt} = \\tfrac{2}{3} \\text{ m/s}", explanation: "Shadow grows at \\(\\tfrac{2}{3}\\) m/s, regardless of \\(x\\)." }
  ], finalAnswer: "\\( \\tfrac{2}{3} \\) m/s." } },
  // ── Equilateral triangle, sector rates ────
  { id: "y2df10-032", topicRef: "y2df10", topicTitle: "Rates of Change 32", difficulty: "Challenge", questionText: "An equilateral triangle has side length increasing at \\(1\\) cm/s. Find the rate of change of area when the side is \\(4\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the area formula for an equilateral triangle.", workingLatex: "A = \\tfrac{\\sqrt{3}}{4}s^2", explanation: "Standard result, derivable from \\(A = \\tfrac{1}{2}\\cdot s \\cdot s\\sin 60°\\)." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{ds}{dt} = 1 \\text{ cm/s}", explanation: "Side growth rate." },
    { stepNumber: 3, description: "Identify what's being asked.", workingLatex: "\\text{Find: }\\dfrac{dA}{dt}\\text{ at }s = 4", explanation: "Standard chain-rule application." },
    { stepNumber: 4, description: "Differentiate \\(A\\) w.r.t. \\(s\\).", workingLatex: "\\dfrac{dA}{ds} = \\tfrac{\\sqrt{3}}{2}s", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{\\sqrt{3}}{2}s \\cdot \\dfrac{ds}{dt}", explanation: "Symbolic relation first." },
    { stepNumber: 6, description: "Substitute the rate.", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{\\sqrt{3}}{2}s \\cdot 1 = \\tfrac{\\sqrt{3}}{2}s", explanation: "Now a function of \\(s\\)." },
    { stepNumber: 7, description: "Substitute \\(s = 4\\).", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{\\sqrt{3}}{2}\\cdot 4", explanation: "Evaluate at the side of interest." },
    { stepNumber: 8, description: "Simplify.", workingLatex: "\\dfrac{dA}{dt} = 2\\sqrt{3}", explanation: "Arithmetic step." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dA}{dt} = 2\\sqrt{3} \\text{ cm}^2/\\text{s}", explanation: "Area grows at \\(2\\sqrt{3}\\) cm²/s." }
  ], finalAnswer: "\\( 2\\sqrt{3} \\) cm²/s." } },
  { id: "y2df10-033", topicRef: "y2df10", topicTitle: "Rates of Change 33", difficulty: "Standard", questionText: "A sector has angle \\(\\pi/3\\) rad and radius increasing at \\(1\\) cm/s. Find the rate of area change when \\(r=6\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the sector-area formula.", workingLatex: "A = \\tfrac{1}{2}r^2\\theta", explanation: "Standard sector-area formula." },
    { stepNumber: 2, description: "Substitute the fixed angle.", workingLatex: "A = \\tfrac{1}{2}\\cdot \\tfrac{\\pi}{3}\\cdot r^2 = \\tfrac{\\pi}{6}r^2", explanation: "With \\(\\theta = \\pi/3\\) constant, only \\(r\\) varies." },
    { stepNumber: 3, description: "State the given rate.", workingLatex: "\\dfrac{dr}{dt} = 1 \\text{ cm/s}", explanation: "Radius rate." },
    { stepNumber: 4, description: "Differentiate w.r.t. \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = \\tfrac{\\pi}{3}r", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply chain rule.", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{\\pi}{3}r \\cdot \\dfrac{dr}{dt}", explanation: "Symbol form first." },
    { stepNumber: 6, description: "Substitute the rate.", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{\\pi}{3}r \\cdot 1 = \\tfrac{\\pi r}{3}", explanation: "Now in terms of \\(r\\)." },
    { stepNumber: 7, description: "Substitute \\(r = 6\\) and state.", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{6\\pi}{3} = 2\\pi \\text{ cm}^2/\\text{s}", explanation: "Area grows at \\(2\\pi\\) cm²/s." }
  ], finalAnswer: "\\( 2\\pi \\) cm²/s." } },
  // ── More classic examples ────
  { id: "y2df10-034", topicRef: "y2df10", topicTitle: "Rates of Change 34", difficulty: "Standard", questionText: "A sector has fixed radius \\(10\\) cm and angle increasing at \\(\\pi/12\\) rad/s. Find the rate of area change.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the sector-area formula.", workingLatex: "A = \\tfrac{1}{2}r^2\\theta", explanation: "Sector-area in terms of radius and angle (radians)." },
    { stepNumber: 2, description: "Note the constants and variables.", workingLatex: "r = 10 \\text{ (fixed)},\\; \\theta \\text{ varies with time}", explanation: "One variable depends on time." },
    { stepNumber: 3, description: "Substitute the fixed radius.", workingLatex: "A = \\tfrac{1}{2}\\cdot 100\\cdot \\theta = 50\\theta", explanation: "Linear in \\(\\theta\\)." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{d\\theta}{dt} = \\tfrac{\\pi}{12} \\text{ rad/s}", explanation: "Angular rate." },
    { stepNumber: 5, description: "Differentiate \\(A\\) w.r.t. \\(\\theta\\).", workingLatex: "\\dfrac{dA}{d\\theta} = 50", explanation: "Constant coefficient." },
    { stepNumber: 6, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = 50 \\cdot \\dfrac{d\\theta}{dt}", explanation: "Chain rule." },
    { stepNumber: 7, description: "Substitute and state.", workingLatex: "\\dfrac{dA}{dt} = 50 \\cdot \\tfrac{\\pi}{12} = \\tfrac{25\\pi}{6} \\text{ cm}^2/\\text{s}", explanation: "Area grows at \\(\\tfrac{25\\pi}{6}\\) cm²/s." }
  ], finalAnswer: "\\( \\tfrac{25\\pi}{6} \\) cm²/s." } },
  { id: "y2df10-035", topicRef: "y2df10", topicTitle: "Rates of Change 35", difficulty: "Challenge", questionText: "A rectangle has area \\(60\\) cm² (fixed). Width increases at \\(2\\) cm/s. Find the rate of change of length when width = 4 cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the constraint.", workingLatex: "\\ell w = 60", explanation: "Fixed-area rectangle." },
    { stepNumber: 2, description: "Solve for length in terms of width.", workingLatex: "\\ell = \\dfrac{60}{w}", explanation: "Length depends on width." },
    { stepNumber: 3, description: "State the given rate.", workingLatex: "\\dfrac{dw}{dt} = 2 \\text{ cm/s}", explanation: "Width grows at \\(2\\) cm/s." },
    { stepNumber: 4, description: "Identify what's being asked.", workingLatex: "\\text{Find: }\\dfrac{d\\ell}{dt}\\text{ at }w = 4", explanation: "Inverse relationship — expect a negative answer." },
    { stepNumber: 5, description: "Differentiate \\(\\ell\\) w.r.t. \\(w\\).", workingLatex: "\\dfrac{d\\ell}{dw} = -\\dfrac{60}{w^2}", explanation: "Quotient/power-rule differentiation." },
    { stepNumber: 6, description: "Apply chain rule.", workingLatex: "\\dfrac{d\\ell}{dt} = -\\dfrac{60}{w^2}\\cdot \\dfrac{dw}{dt}", explanation: "Symbol form before numbers." },
    { stepNumber: 7, description: "Substitute \\(w = 4\\) and the width rate.", workingLatex: "\\dfrac{d\\ell}{dt} = -\\dfrac{60}{16}\\cdot 2", explanation: "Numerical substitution." },
    { stepNumber: 8, description: "Multiply.", workingLatex: "\\dfrac{d\\ell}{dt} = -\\dfrac{120}{16}", explanation: "Arithmetic step." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{d\\ell}{dt} = -7.5 \\text{ cm/s}", explanation: "Length decreases at \\(7.5\\) cm/s." }
  ], finalAnswer: "\\( -7.5 \\) cm/s (length decreasing)." } },
  { id: "y2df10-036", topicRef: "y2df10", topicTitle: "Rates of Change 36", difficulty: "Challenge", questionText: "An ice cube melts so its volume decreases at \\(6\\) cm³/s. Find \\(dx/dt\\) when \\(x = 3\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume formula.", workingLatex: "V = x^3", explanation: "Cube volume." },
    { stepNumber: 2, description: "State the given rate with sign.", workingLatex: "\\dfrac{dV}{dt} = -6 \\text{ cm}^3/\\text{s}", explanation: "Volume is decreasing — include the negative sign." },
    { stepNumber: 3, description: "Identify the inverse-rate structure.", workingLatex: "\\text{Find: }\\dfrac{dx}{dt}", explanation: "Volume rate is given; we want the side rate." },
    { stepNumber: 4, description: "Differentiate \\(V\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dV}{dx} = 3x^2", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 3x^2 \\cdot \\dfrac{dx}{dt}", explanation: "Symbolic form first." },
    { stepNumber: 6, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dx}{dt} = \\dfrac{1}{3x^2}\\cdot \\dfrac{dV}{dt}", explanation: "Inverse-rate algebra." },
    { stepNumber: 7, description: "Substitute \\(x = 3\\) and the volume rate.", workingLatex: "\\dfrac{dx}{dt} = \\dfrac{-6}{3 \\cdot 9}", explanation: "Numerical substitution." },
    { stepNumber: 8, description: "Simplify the fraction.", workingLatex: "\\dfrac{dx}{dt} = -\\dfrac{6}{27} = -\\dfrac{2}{9}", explanation: "Cancel common factors." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dx}{dt} = -\\tfrac{2}{9} \\text{ cm/s}", explanation: "Side shrinks at \\(\\tfrac{2}{9}\\) cm/s." }
  ], finalAnswer: "\\( -\\tfrac{2}{9} \\) cm/s." } },
  // ── Various rate setups ────
  { id: "y2df10-037", topicRef: "y2df10", topicTitle: "Rates of Change 37", difficulty: "Challenge", questionText: "A boat is \\(3\\) km from a straight shore, pulled along a rope at \\(2\\) km/h. Find the rate of change of the angle \\(\\theta\\) between the rope and shore when the rope is 5 km long.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates", "trig"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up notation and the geometry.", workingLatex: "L = \\text{rope length},\\; \\theta = \\text{angle of rope with shore}", explanation: "The boat is \\(3\\) km out, so the perpendicular distance is fixed at 3." },
    { stepNumber: 2, description: "State the relationship from the right triangle.", workingLatex: "\\sin\\theta = \\dfrac{3}{L}", explanation: "Vertical leg 3 km, hypotenuse \\(L\\)." },
    { stepNumber: 3, description: "State the given rate (rope shortens as boat is pulled in).", workingLatex: "\\dfrac{dL}{dt} = -2 \\text{ km/h}", explanation: "Rope length decreases at \\(2\\) km/h." },
    { stepNumber: 4, description: "Differentiate the geometric relation implicitly.", workingLatex: "\\cos\\theta \\cdot \\dfrac{d\\theta}{dt} = -\\dfrac{3}{L^2}\\cdot \\dfrac{dL}{dt}", explanation: "Both \\(\\theta\\) and \\(L\\) depend on time; chain rule on both sides." },
    { stepNumber: 5, description: "Find \\(\\sin\\theta\\) and \\(\\cos\\theta\\) when \\(L = 5\\).", workingLatex: "\\sin\\theta = \\tfrac{3}{5},\\; \\cos\\theta = \\tfrac{4}{5}", explanation: "3-4-5 right triangle." },
    { stepNumber: 6, description: "Substitute into the differentiated equation.", workingLatex: "\\tfrac{4}{5}\\cdot \\dfrac{d\\theta}{dt} = -\\dfrac{3}{25}\\cdot (-2)", explanation: "Insert all numerical values." },
    { stepNumber: 7, description: "Simplify the right-hand side.", workingLatex: "\\tfrac{4}{5}\\cdot \\dfrac{d\\theta}{dt} = \\dfrac{6}{25}", explanation: "Arithmetic step." },
    { stepNumber: 8, description: "Solve for \\(\\dfrac{d\\theta}{dt}\\).", workingLatex: "\\dfrac{d\\theta}{dt} = \\dfrac{6}{25}\\cdot \\dfrac{5}{4} = \\dfrac{6}{20} = \\dfrac{3}{10}", explanation: "Multiply through." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{d\\theta}{dt} = 0.3 \\text{ rad/h}", explanation: "Angle is increasing at \\(0.3\\) rad/h." }
  ], finalAnswer: "\\( 0.3 \\) rad/h." } },
  { id: "y2df10-038", topicRef: "y2df10", topicTitle: "Rates of Change 38", difficulty: "Standard", questionText: "Gas obeys \\(PV = 100\\). Pressure increases at \\(4\\) Pa/s. Find \\(dV/dt\\) when \\(V = 20\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the constraint.", workingLatex: "PV = 100", explanation: "Ideal-gas-like relationship at constant temperature." },
    { stepNumber: 2, description: "State the given rate with units.", workingLatex: "\\dfrac{dP}{dt} = 4 \\text{ Pa/s}", explanation: "Pressure rises at \\(4\\) Pa/s." },
    { stepNumber: 3, description: "Differentiate the constraint implicitly w.r.t. \\(t\\).", workingLatex: "P\\dfrac{dV}{dt} + V\\dfrac{dP}{dt} = 0", explanation: "Product rule on both factors, since both depend on time." },
    { stepNumber: 4, description: "Rearrange for the unknown.", workingLatex: "\\dfrac{dV}{dt} = -\\dfrac{V}{P}\\cdot \\dfrac{dP}{dt}", explanation: "Algebraic isolation of \\(\\dfrac{dV}{dt}\\)." },
    { stepNumber: 5, description: "Find \\(P\\) when \\(V = 20\\).", workingLatex: "P = \\dfrac{100}{20} = 5 \\text{ Pa}", explanation: "From the constraint." },
    { stepNumber: 6, description: "Substitute the known values.", workingLatex: "\\dfrac{dV}{dt} = -\\dfrac{20}{5}\\cdot 4", explanation: "Insert \\(V, P, \\dfrac{dP}{dt}\\)." },
    { stepNumber: 7, description: "Simplify with units.", workingLatex: "\\dfrac{dV}{dt} = -16 \\text{ m}^3/\\text{s}", explanation: "Volume decreases as pressure rises." }
  ], finalAnswer: "\\( -16 \\) m³/s." } },
  { id: "y2df10-039", topicRef: "y2df10", topicTitle: "Rates of Change 39", difficulty: "Standard", questionText: "A hemispherical bowl has radius increasing at \\(0.2\\) cm/s. Find the rate of change of its volume when \\(r = 3\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume formula for a hemisphere.", workingLatex: "V = \\tfrac{2}{3}\\pi r^3", explanation: "Half of a sphere's volume." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dr}{dt} = 0.2 \\text{ cm/s}", explanation: "Radius growth rate with units." },
    { stepNumber: 3, description: "Differentiate \\(V\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dV}{dr} = 2\\pi r^2", explanation: "Power-rule differentiation." },
    { stepNumber: 4, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 2\\pi r^2 \\cdot \\dfrac{dr}{dt}", explanation: "Symbol form first." },
    { stepNumber: 5, description: "Substitute the rate.", workingLatex: "\\dfrac{dV}{dt} = 2\\pi r^2 \\cdot 0.2 = 0.4\\pi r^2", explanation: "Now a function of \\(r\\)." },
    { stepNumber: 6, description: "Substitute \\(r = 3\\).", workingLatex: "\\dfrac{dV}{dt} = 0.4\\pi \\cdot 9 = 3.6\\pi", explanation: "Evaluate at the radius of interest." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dV}{dt} = 3.6\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume grows at \\(3.6\\pi\\) cm³/s." }
  ], finalAnswer: "\\( 3.6\\pi \\) cm³/s." } },
  { id: "y2df10-040", topicRef: "y2df10", topicTitle: "Rates of Change 40", difficulty: "Challenge", questionText: "A cooling object's temperature satisfies \\( T = 80e^{-0.1t} + 20 \\). Find \\(dT/dt\\) when \\(T = 60\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates", "exp"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write down the temperature model.", workingLatex: "T = 80 e^{-0.1t} + 20", explanation: "Exponential decay to ambient temperature 20." },
    { stepNumber: 2, description: "Differentiate \\(T\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dT}{dt} = 80 \\cdot (-0.1)e^{-0.1t}", explanation: "Chain rule on the exponential; the constant \\(20\\) differentiates to zero." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "\\dfrac{dT}{dt} = -8 e^{-0.1t}", explanation: "Cleaner form to substitute into." },
    { stepNumber: 4, description: "Use the temperature condition.", workingLatex: "T = 60 \\Rightarrow 80 e^{-0.1t} + 20 = 60", explanation: "Set up an equation for the exponential factor." },
    { stepNumber: 5, description: "Solve for the exponential.", workingLatex: "80 e^{-0.1t} = 40 \\Rightarrow e^{-0.1t} = 0.5", explanation: "Isolate \\(e^{-0.1t}\\)." },
    { stepNumber: 6, description: "Substitute into the rate expression.", workingLatex: "\\dfrac{dT}{dt} = -8 \\cdot 0.5", explanation: "Insert the value." },
    { stepNumber: 7, description: "Simplify.", workingLatex: "\\dfrac{dT}{dt} = -4", explanation: "Arithmetic step." },
    { stepNumber: 8, description: "State with units.", workingLatex: "\\dfrac{dT}{dt} = -4 \\text{ °C/s}", explanation: "Temperature is decreasing at \\(4\\) °C/s when \\(T = 60\\)." },
    { stepNumber: 9, description: "Sanity check the sign.", workingLatex: "\\dfrac{dT}{dt} < 0", explanation: "Negative because the object is cooling — consistent." }
  ], finalAnswer: "\\( -4 \\) °C/s." } },
  { id: "y2df10-041", topicRef: "y2df10", topicTitle: "Rates of Change 41", difficulty: "Standard", questionText: "A population satisfies \\( P = 100e^{0.05t} \\). Find \\(dP/dt\\) when \\(P = 200\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates", "exp"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "P = 100 e^{0.05 t}", explanation: "Exponential growth with rate constant \\(0.05\\)." },
    { stepNumber: 2, description: "Differentiate \\(P\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dP}{dt} = 100 \\cdot 0.05 e^{0.05t} = 5 e^{0.05t}", explanation: "Chain rule on the exponential." },
    { stepNumber: 3, description: "Note that this equals \\(0.05 P\\).", workingLatex: "\\dfrac{dP}{dt} = 0.05 \\cdot P", explanation: "Useful shortcut for any exponential function." },
    { stepNumber: 4, description: "State the condition.", workingLatex: "P = 200", explanation: "Given." },
    { stepNumber: 5, description: "Substitute.", workingLatex: "\\dfrac{dP}{dt} = 0.05 \\cdot 200", explanation: "Insert the population." },
    { stepNumber: 6, description: "Compute.", workingLatex: "\\dfrac{dP}{dt} = 10", explanation: "Arithmetic step." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dP}{dt} = 10 \\text{ units/time}", explanation: "Population grows at \\(10\\) units per unit time when \\(P = 200\\)." }
  ], finalAnswer: "\\( 10 \\) units/time." } },
  { id: "y2df10-042", topicRef: "y2df10", topicTitle: "Rates of Change 42", difficulty: "Standard", questionText: "A sample satisfies \\( N = 500 e^{-0.02t} \\). Find \\(dN/dt\\) in terms of \\(N\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates", "exp"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "N = 500 e^{-0.02 t}", explanation: "Exponential decay with rate constant \\(-0.02\\)." },
    { stepNumber: 2, description: "Differentiate \\(N\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dN}{dt} = 500 \\cdot (-0.02) e^{-0.02t}", explanation: "Chain rule on the exponential." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "\\dfrac{dN}{dt} = -10 e^{-0.02t}", explanation: "Tidy form." },
    { stepNumber: 4, description: "Express in terms of \\(N\\).", workingLatex: "N = 500 e^{-0.02t} \\Rightarrow e^{-0.02t} = \\dfrac{N}{500}", explanation: "Rearrange the original equation." },
    { stepNumber: 5, description: "Substitute.", workingLatex: "\\dfrac{dN}{dt} = -10 \\cdot \\dfrac{N}{500}", explanation: "Standard exponential-decay form: rate is proportional to current amount." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "\\dfrac{dN}{dt} = -0.02 N", explanation: "Cancel \\(\\tfrac{10}{500}\\)." },
    { stepNumber: 7, description: "Interpret.", workingLatex: "\\dfrac{dN}{dt} = -0.02 N", explanation: "Negative because the sample is decaying." }
  ], finalAnswer: "\\( dN/dt = -0.02N \\)." } },
  { id: "y2df10-043", topicRef: "y2df10", topicTitle: "Rates of Change 43", difficulty: "Challenge", questionText: "An equilateral triangle has area increasing at \\(3\\sqrt{3}\\) cm²/s. Find \\(ds/dt\\) when \\(s = 6\\) cm.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Area formula.", workingLatex: "A = \\tfrac{\\sqrt{3}}{4}s^2", explanation: "Standard result for an equilateral triangle." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dA}{dt} = 3\\sqrt{3} \\text{ cm}^2/\\text{s}", explanation: "Area rate given." },
    { stepNumber: 3, description: "Identify the inverse-rate structure.", workingLatex: "\\text{Find: }\\dfrac{ds}{dt}", explanation: "Area rate given; we want the side rate." },
    { stepNumber: 4, description: "Differentiate \\(A\\) w.r.t. \\(s\\).", workingLatex: "\\dfrac{dA}{ds} = \\tfrac{\\sqrt{3}}{2}s", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = \\tfrac{\\sqrt{3}}{2}s \\cdot \\dfrac{ds}{dt}", explanation: "Symbolic chain rule." },
    { stepNumber: 6, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{ds}{dt} = \\dfrac{2}{\\sqrt{3}\\, s}\\cdot \\dfrac{dA}{dt}", explanation: "Inverse-rate algebra." },
    { stepNumber: 7, description: "Substitute \\(s = 6\\) and the area rate.", workingLatex: "\\dfrac{ds}{dt} = \\dfrac{2}{\\sqrt{3}\\cdot 6}\\cdot 3\\sqrt{3}", explanation: "Insert the numbers." },
    { stepNumber: 8, description: "Simplify.", workingLatex: "\\dfrac{ds}{dt} = \\dfrac{6\\sqrt{3}}{6\\sqrt{3}} = 1", explanation: "Cancel like terms." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{ds}{dt} = 1 \\text{ cm/s}", explanation: "Side grows at \\(1\\) cm/s." }
  ], finalAnswer: "\\( 1 \\) cm/s." } },
  { id: "y2df10-044", topicRef: "y2df10", topicTitle: "Rates of Change 44", difficulty: "Standard", questionText: "A ball falls so that \\(s = 5t^2\\). Find its velocity at \\(t=2\\) s.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Velocity is the derivative of displacement.", workingLatex: "v = \\dfrac{ds}{dt}", explanation: "Standard kinematics definition." },
    { stepNumber: 2, description: "Write down the displacement.", workingLatex: "s = 5 t^2", explanation: "Given function." },
    { stepNumber: 3, description: "Differentiate using the power rule.", workingLatex: "v = 5 \\cdot 2 t = 10t", explanation: "Power rule on \\(5t^2\\)." },
    { stepNumber: 4, description: "Substitute \\(t = 2\\).", workingLatex: "v(2) = 10 \\cdot 2", explanation: "Numerical evaluation." },
    { stepNumber: 5, description: "Simplify.", workingLatex: "v(2) = 20", explanation: "Arithmetic step." },
    { stepNumber: 6, description: "Sanity check the sign.", workingLatex: "v > 0", explanation: "Ball is falling and \\(s\\) measures distance fallen, so velocity is positive." },
    { stepNumber: 7, description: "State with units.", workingLatex: "v(2) = 20 \\text{ m/s}", explanation: "Ball moves at \\(20\\) m/s at \\(t = 2\\) s." }
  ], finalAnswer: "\\( 20 \\) m/s." } },
  { id: "y2df10-045", topicRef: "y2df10", topicTitle: "Rates of Change 45", difficulty: "Challenge", questionText: "A cylinder has \\(r=3\\) cm increasing at \\(0.2\\) cm/s, and height \\(h=5\\) cm increasing at \\(0.5\\) cm/s. Find \\(dV/dt\\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the cylinder-volume formula.", workingLatex: "V = \\pi r^2 h", explanation: "Two variables both depend on time." },
    { stepNumber: 2, description: "State the given rates.", workingLatex: "\\dfrac{dr}{dt} = 0.2,\\; \\dfrac{dh}{dt} = 0.5 \\text{ cm/s}", explanation: "Two-variable problem — need the product rule." },
    { stepNumber: 3, description: "Identify both variables as time-dependent.", workingLatex: "r = r(t),\\; h = h(t)", explanation: "Single-chain-rule template does not apply." },
    { stepNumber: 4, description: "Differentiate w.r.t. \\(t\\) using the product rule.", workingLatex: "\\dfrac{dV}{dt} = \\pi\\left(2r\\dfrac{dr}{dt}\\cdot h + r^2 \\cdot \\dfrac{dh}{dt}\\right)", explanation: "Product rule applied to \\(r^2 h\\)." },
    { stepNumber: 5, description: "Simplify the structure.", workingLatex: "\\dfrac{dV}{dt} = 2\\pi r h \\cdot \\dfrac{dr}{dt} + \\pi r^2 \\cdot \\dfrac{dh}{dt}", explanation: "Standard expansion." },
    { stepNumber: 6, description: "State the instantaneous values.", workingLatex: "r = 3,\\; h = 5", explanation: "At the moment of interest." },
    { stepNumber: 7, description: "Substitute into the formula.", workingLatex: "\\dfrac{dV}{dt} = 2\\pi \\cdot 3 \\cdot 5 \\cdot 0.2 + \\pi \\cdot 9 \\cdot 0.5", explanation: "Insert all numerical values." },
    { stepNumber: 8, description: "Compute each term.", workingLatex: "= 6\\pi + 4.5\\pi", explanation: "First term from radius growth, second from height growth." },
    { stepNumber: 9, description: "Sum and state with units.", workingLatex: "\\dfrac{dV}{dt} = 10.5\\pi \\text{ cm}^3/\\text{s}", explanation: "Volume grows at \\(10.5\\pi\\) cm³/s." }
  ], finalAnswer: "\\( 10.5\\pi \\) cm³/s." } },
  { id: "y2df10-046", topicRef: "y2df10", topicTitle: "Rates of Change 46", difficulty: "Standard", questionText: "Water fills a cone (apex down) with semi-vertical angle \\(\\tan^{-1}(1/2)\\). Find \\(dV/dh\\) when \\(h = 4\\) cm.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Interpret the semi-vertical angle.", workingLatex: "\\tan(\\text{angle}) = \\tfrac{r}{h} = \\tfrac{1}{2}", explanation: "The ratio of radius to height is \\(1:2\\)." },
    { stepNumber: 2, description: "State the constraint between \\(r\\) and \\(h\\).", workingLatex: "r = \\tfrac{h}{2}", explanation: "From the angle." },
    { stepNumber: 3, description: "Use the cone-volume formula.", workingLatex: "V = \\tfrac{1}{3}\\pi r^2 h", explanation: "Standard formula." },
    { stepNumber: 4, description: "Substitute the constraint.", workingLatex: "V = \\tfrac{1}{3}\\pi \\left(\\tfrac{h}{2}\\right)^2 h", explanation: "Express \\(V\\) purely in terms of \\(h\\)." },
    { stepNumber: 5, description: "Simplify.", workingLatex: "V = \\tfrac{\\pi h^3}{12}", explanation: "Single-variable expression." },
    { stepNumber: 6, description: "Differentiate w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = \\tfrac{\\pi h^2}{4}", explanation: "Power-rule differentiation." },
    { stepNumber: 7, description: "Substitute \\(h = 4\\) and state with units.", workingLatex: "\\dfrac{dV}{dh} = \\tfrac{16\\pi}{4} = 4\\pi \\text{ cm}^3/\\text{cm}", explanation: "Rate of volume change per unit height." }
  ], finalAnswer: "\\( 4\\pi \\) cm³/cm." } },
  { id: "y2df10-047", topicRef: "y2df10", topicTitle: "Rates of Change 47", difficulty: "Standard", questionText: "A stone drops into water and creates a circular ripple whose radius grows at \\(0.5\\) m/s. Find the rate of area change when \\(r=3\\) m.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the area formula.", workingLatex: "A = \\pi r^2", explanation: "Circular ripple's area." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dr}{dt} = 0.5 \\text{ m/s}", explanation: "Radius growth rate with units." },
    { stepNumber: 3, description: "Differentiate \\(A\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = 2\\pi r", explanation: "Power rule." },
    { stepNumber: 4, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Symbol form first." },
    { stepNumber: 5, description: "Substitute the rate.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot 0.5 = \\pi r", explanation: "Cleaner expression in terms of \\(r\\)." },
    { stepNumber: 6, description: "Substitute \\(r = 3\\).", workingLatex: "\\dfrac{dA}{dt} = \\pi \\cdot 3", explanation: "Evaluate at the given radius." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dA}{dt} = 3\\pi \\text{ m}^2/\\text{s}", explanation: "Area grows at \\(3\\pi\\) m²/s." }
  ], finalAnswer: "\\( 3\\pi \\) m²/s." } },
  { id: "y2df10-048", topicRef: "y2df10", topicTitle: "Rates of Change 48", difficulty: "Challenge", questionText: "A sphere is expanding so that its volume doubles every \\(5\\) s. Find the rate of volume change when \\(V = 100\\) cm³.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Model exponential growth.", workingLatex: "V = V_0 e^{kt}", explanation: "Volume that doubles in a fixed interval grows exponentially." },
    { stepNumber: 2, description: "Use the doubling condition.", workingLatex: "V(t + 5) = 2 V(t)", explanation: "After 5 s the volume has doubled, irrespective of \\(t\\)." },
    { stepNumber: 3, description: "Express the condition in terms of \\(k\\).", workingLatex: "V_0 e^{k(t+5)} = 2 V_0 e^{kt} \\Rightarrow e^{5k} = 2", explanation: "Cancel the common factor \\(V_0 e^{kt}\\)." },
    { stepNumber: 4, description: "Solve for the constant \\(k\\).", workingLatex: "k = \\dfrac{\\ln 2}{5}", explanation: "Take logs and rearrange." },
    { stepNumber: 5, description: "Differentiate the model.", workingLatex: "\\dfrac{dV}{dt} = k\\, V_0 e^{kt} = k V", explanation: "Standard property of exponential growth: the rate is proportional to the current value." },
    { stepNumber: 6, description: "Substitute \\(V = 100\\).", workingLatex: "\\dfrac{dV}{dt} = \\dfrac{\\ln 2}{5}\\cdot 100", explanation: "Insert the volume." },
    { stepNumber: 7, description: "Simplify.", workingLatex: "\\dfrac{dV}{dt} = 20 \\ln 2", explanation: "Multiply through." },
    { stepNumber: 8, description: "Evaluate numerically with units.", workingLatex: "\\dfrac{dV}{dt} \\approx 13.86 \\text{ cm}^3/\\text{s}", explanation: "Volume grows at about \\(13.86\\) cm³/s when \\(V = 100\\)." },
    { stepNumber: 9, description: "Sanity check.", workingLatex: "\\dfrac{dV}{dt} > 0", explanation: "Positive, consistent with growth." }
  ], finalAnswer: "\\( 20\\ln 2 \\approx 13.86 \\) cm³/s." } },
  { id: "y2df10-049", topicRef: "y2df10", topicTitle: "Rates of Change 49", difficulty: "Challenge", questionText: "A cloud mass \\(m\\) grows according to \\( m = 2e^{0.3t} \\). Find \\(dm/dt\\) when \\(m = 8\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "m = 2 e^{0.3 t}", explanation: "Exponential-growth model for the mass." },
    { stepNumber: 2, description: "Differentiate \\(m\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dm}{dt} = 2 \\cdot 0.3 e^{0.3t} = 0.6 e^{0.3t}", explanation: "Chain rule on the exponential." },
    { stepNumber: 3, description: "Express in terms of \\(m\\).", workingLatex: "\\dfrac{dm}{dt} = 0.3 m", explanation: "Standard exponential-growth shortcut: rate is proportional to current value." },
    { stepNumber: 4, description: "State the condition.", workingLatex: "m = 8 \\text{ kg}", explanation: "Given." },
    { stepNumber: 5, description: "Substitute.", workingLatex: "\\dfrac{dm}{dt} = 0.3 \\cdot 8", explanation: "Insert the mass value." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "\\dfrac{dm}{dt} = 2.4", explanation: "Arithmetic step." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dm}{dt} = 2.4 \\text{ kg/s}", explanation: "Mass grows at \\(2.4\\) kg/s when \\(m = 8\\) kg." },
    { stepNumber: 8, description: "Sanity check the sign.", workingLatex: "\\dfrac{dm}{dt} > 0", explanation: "Positive, consistent with growth." },
    { stepNumber: 9, description: "Conclusion.", workingLatex: "\\dfrac{dm}{dt} = 2.4 \\text{ kg/s}", explanation: "Final rate." }
  ], finalAnswer: "\\( 2.4 \\) kg/s." } },
  { id: "y2df10-050", topicRef: "y2df10", topicTitle: "Rates of Change 50", difficulty: "Challenge", questionText: "A spherical snowball melts so that \\(dV/dt = -k\\cdot S\\) for positive constant \\(k\\). Show \\(dr/dt\\) is constant.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates", "proof"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume and surface-area formulae for a sphere.", workingLatex: "V = \\tfrac{4}{3}\\pi r^3,\\; S = 4\\pi r^2", explanation: "Both depend on the radius." },
    { stepNumber: 2, description: "Identify the modelling assumption.", workingLatex: "\\dfrac{dV}{dt} = -k S", explanation: "Volume decreases proportional to surface area — common physical model." },
    { stepNumber: 3, description: "Differentiate the volume using the chain rule.", workingLatex: "\\dfrac{dV}{dt} = \\dfrac{dV}{dr}\\cdot \\dfrac{dr}{dt} = 4\\pi r^2 \\cdot \\dfrac{dr}{dt}", explanation: "Same chain-rule template as for an inflating sphere." },
    { stepNumber: 4, description: "Substitute the modelling assumption.", workingLatex: "\\dfrac{dV}{dt} = -k\\cdot 4\\pi r^2", explanation: "Insert \\(S = 4\\pi r^2\\)." },
    { stepNumber: 5, description: "Equate the two expressions for \\(\\dfrac{dV}{dt}\\).", workingLatex: "4\\pi r^2 \\cdot \\dfrac{dr}{dt} = -4\\pi k r^2", explanation: "Both equal \\(\\dfrac{dV}{dt}\\)." },
    { stepNumber: 6, description: "Cancel common factors.", workingLatex: "\\dfrac{dr}{dt} = -k", explanation: "Divide through by \\(4\\pi r^2\\) (non-zero while the snowball exists)." },
    { stepNumber: 7, description: "Interpret the result.", workingLatex: "\\dfrac{dr}{dt} = -k", explanation: "Right-hand side is independent of \\(r\\) and of \\(t\\)." },
    { stepNumber: 8, description: "Sign check.", workingLatex: "k > 0 \\Rightarrow \\dfrac{dr}{dt} < 0", explanation: "Snowball is shrinking, consistent with melting." },
    { stepNumber: 9, description: "State the conclusion.", workingLatex: "\\dfrac{dr}{dt} = -k \\text{ (constant)} \\; \\blacksquare", explanation: "Hence the radius shrinks at a constant rate, as required." }
  ], finalAnswer: "\\(dr/dt = -k\\), constant. \\(\\blacksquare\\)" } },
  // ── Varied remaining items ────
  { id: "y2df10-051", topicRef: "y2df10", topicTitle: "Rates of Change 51", difficulty: "Standard", questionText: "A square pyramid has height \\(h\\) fixed at 6 and base side \\(x\\) increasing at \\(0.5\\) cm/s. Find rate of volume change when \\(x = 4\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume formula for a square pyramid.", workingLatex: "V = \\tfrac{1}{3}x^2 h", explanation: "Base area times height divided by 3." },
    { stepNumber: 2, description: "Substitute the fixed height.", workingLatex: "V = \\tfrac{1}{3}x^2 \\cdot 6 = 2 x^2", explanation: "With \\(h = 6\\) only \\(x\\) varies." },
    { stepNumber: 3, description: "State the given rate.", workingLatex: "\\dfrac{dx}{dt} = 0.5 \\text{ cm/s}", explanation: "Base side growth rate." },
    { stepNumber: 4, description: "Differentiate \\(V\\) w.r.t. \\(x\\).", workingLatex: "\\dfrac{dV}{dx} = 4x", explanation: "Power rule." },
    { stepNumber: 5, description: "Apply chain rule.", workingLatex: "\\dfrac{dV}{dt} = 4x \\cdot \\dfrac{dx}{dt}", explanation: "Symbol form first." },
    { stepNumber: 6, description: "Substitute the rate and \\(x = 4\\).", workingLatex: "\\dfrac{dV}{dt} = 4 \\cdot 4 \\cdot 0.5", explanation: "Insert all numerical values." },
    { stepNumber: 7, description: "Simplify with units.", workingLatex: "\\dfrac{dV}{dt} = 8 \\text{ cm}^3/\\text{s}", explanation: "Volume grows at \\(8\\) cm³/s." }
  ], finalAnswer: "\\( 8 \\) cm³/s." } },
  { id: "y2df10-052", topicRef: "y2df10", topicTitle: "Rates of Change 52", difficulty: "Challenge", questionText: "A rectangle has fixed perimeter \\(40\\) cm. Its width increases at \\(2\\) cm/s. Find the rate of area change when \\(w = 8\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Identify the perimeter constraint.", workingLatex: "2\\ell + 2w = 40", explanation: "Perimeter is fixed, so the two sides are linked." },
    { stepNumber: 2, description: "Solve for \\(\\ell\\).", workingLatex: "\\ell = 20 - w", explanation: "Express length in terms of width." },
    { stepNumber: 3, description: "Write the area in terms of \\(w\\).", workingLatex: "A = \\ell w = w(20 - w)", explanation: "Single-variable expression." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dw}{dt} = 2 \\text{ cm/s}", explanation: "Width grows at \\(2\\) cm/s." },
    { stepNumber: 5, description: "Differentiate \\(A\\) w.r.t. \\(w\\).", workingLatex: "\\dfrac{dA}{dw} = 20 - 2w", explanation: "Power-rule differentiation." },
    { stepNumber: 6, description: "Apply chain rule.", workingLatex: "\\dfrac{dA}{dt} = (20 - 2w)\\cdot \\dfrac{dw}{dt}", explanation: "Symbol form." },
    { stepNumber: 7, description: "Substitute \\(w = 8\\) and the rate.", workingLatex: "\\dfrac{dA}{dt} = (20 - 16)\\cdot 2", explanation: "Numerical evaluation." },
    { stepNumber: 8, description: "Compute.", workingLatex: "\\dfrac{dA}{dt} = 4 \\cdot 2 = 8", explanation: "Arithmetic step." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dA}{dt} = 8 \\text{ cm}^2/\\text{s}", explanation: "Area grows at \\(8\\) cm²/s at this width." }
  ], finalAnswer: "\\( 8 \\) cm²/s." } },
  { id: "y2df10-053", topicRef: "y2df10", topicTitle: "Rates of Change 53", difficulty: "Challenge", questionText: "Water flows into a cylindrical tank of radius \\(2\\) m at \\(4\\pi\\) m³/min. Find the rate at which water level rises.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the cylinder-volume formula.", workingLatex: "V = \\pi r^2 h", explanation: "Volume in terms of radius and height." },
    { stepNumber: 2, description: "Note constants and variables.", workingLatex: "r = 2 \\text{ (fixed)},\\; h \\text{ varies}", explanation: "Tank radius is constant." },
    { stepNumber: 3, description: "Substitute the fixed radius.", workingLatex: "V = 4\\pi h", explanation: "With \\(r = 2\\) only \\(h\\) varies." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dV}{dt} = 4\\pi \\text{ m}^3/\\text{min}", explanation: "Inflow rate." },
    { stepNumber: 5, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = 4\\pi", explanation: "Linear coefficient." },
    { stepNumber: 6, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 4\\pi \\cdot \\dfrac{dh}{dt}", explanation: "Symbol form first." },
    { stepNumber: 7, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{1}{4\\pi}\\cdot \\dfrac{dV}{dt}", explanation: "Inverse-rate algebra." },
    { stepNumber: 8, description: "Substitute the inflow rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{4\\pi}{4\\pi}", explanation: "Insert the numerical rate." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{dh}{dt} = 1 \\text{ m/min}", explanation: "Water level rises at \\(1\\) m/min." }
  ], finalAnswer: "\\( 1 \\) m/min." } },
  { id: "y2df10-054", topicRef: "y2df10", topicTitle: "Rates of Change 54", difficulty: "Challenge", questionText: "Boat A moves north at \\(15\\) km/h, Boat B moves east from same starting point at \\(20\\) km/h. Find rate of separation when both have travelled \\(1\\) hour.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates", "pythagoras"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up notation.", workingLatex: "x(t) = 20 t \\text{ (east)},\\; y(t) = 15 t \\text{ (north)}", explanation: "Boats' positions from the common starting point." },
    { stepNumber: 2, description: "Constraint via Pythagoras.", workingLatex: "D^2 = x^2 + y^2", explanation: "Boats move along perpendicular directions." },
    { stepNumber: 3, description: "Substitute the linear motions.", workingLatex: "D^2 = (20t)^2 + (15t)^2", explanation: "Insert the position functions." },
    { stepNumber: 4, description: "Simplify.", workingLatex: "D^2 = 400 t^2 + 225 t^2 = 625 t^2", explanation: "Add the squared linear functions." },
    { stepNumber: 5, description: "Take the positive square root.", workingLatex: "D = 25 t", explanation: "Clean expression — distance grows linearly in time (3-4-5 ratio scaled)." },
    { stepNumber: 6, description: "Differentiate.", workingLatex: "\\dfrac{dD}{dt} = 25", explanation: "Constant for all \\(t\\), in particular at \\(t = 1\\)." },
    { stepNumber: 7, description: "Substitute \\(t = 1\\).", workingLatex: "\\dfrac{dD}{dt}\\bigg|_{t=1} = 25", explanation: "Confirm the value at the moment of interest." },
    { stepNumber: 8, description: "Sanity check.", workingLatex: "\\sqrt{15^2 + 20^2} = 25", explanation: "Resultant speed of the relative motion is \\(25\\) km/h — matches Pythagoras of the velocities." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dD}{dt} = 25 \\text{ km/h}", explanation: "Separation rate is \\(25\\) km/h." }
  ], finalAnswer: "\\( 25 \\) km/h." } },
  { id: "y2df10-055", topicRef: "y2df10", topicTitle: "Rates of Change 55", difficulty: "Challenge", questionText: "A right triangle has legs \\(a\\) and \\(b\\). \\(a\\) increases at 1 cm/s, \\(b\\) decreases at 2 cm/s. Find the rate of change of the hypotenuse when \\(a=3, b=4\\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Constraint linking legs to hypotenuse.", workingLatex: "c^2 = a^2 + b^2", explanation: "Pythagoras." },
    { stepNumber: 2, description: "Differentiate implicitly w.r.t. \\(t\\).", workingLatex: "2c\\dfrac{dc}{dt} = 2a\\dfrac{da}{dt} + 2b\\dfrac{db}{dt}", explanation: "All three lengths depend on time." },
    { stepNumber: 3, description: "Divide through.", workingLatex: "c\\dfrac{dc}{dt} = a\\dfrac{da}{dt} + b\\dfrac{db}{dt}", explanation: "Simpler form to substitute into." },
    { stepNumber: 4, description: "State the given rates with signs.", workingLatex: "\\dfrac{da}{dt} = 1,\\; \\dfrac{db}{dt} = -2 \\text{ cm/s}", explanation: "Negative sign for the decreasing leg." },
    { stepNumber: 5, description: "Find \\(c\\) at the instant.", workingLatex: "c = \\sqrt{a^2 + b^2} = \\sqrt{9 + 16} = 5", explanation: "3-4-5 triangle." },
    { stepNumber: 6, description: "Substitute into the differentiated equation.", workingLatex: "5\\dfrac{dc}{dt} = 3 \\cdot 1 + 4 \\cdot (-2)", explanation: "Insert all values." },
    { stepNumber: 7, description: "Simplify the right-hand side.", workingLatex: "5\\dfrac{dc}{dt} = 3 - 8 = -5", explanation: "Arithmetic step." },
    { stepNumber: 8, description: "Solve for the unknown.", workingLatex: "\\dfrac{dc}{dt} = -1", explanation: "Divide through by 5." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dc}{dt} = -1 \\text{ cm/s}", explanation: "Hypotenuse is shrinking at \\(1\\) cm/s." }
  ], finalAnswer: "\\( -1 \\) cm/s (hypotenuse shrinking)." } },
  { id: "y2df10-056", topicRef: "y2df10", topicTitle: "Rates of Change 56", difficulty: "Standard", questionText: "Coffee temperature \\( T = 20 + 60e^{-0.1t} \\). Find \\(dT/dt\\) at \\(t=10\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "T = 20 + 60 e^{-0.1 t}", explanation: "Exponential decay to room temperature 20." },
    { stepNumber: 2, description: "Differentiate \\(T\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dT}{dt} = 60 \\cdot (-0.1) e^{-0.1t}", explanation: "Chain rule on the exponential, constant 20 differentiates to zero." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "\\dfrac{dT}{dt} = -6 e^{-0.1t}", explanation: "Tidier expression." },
    { stepNumber: 4, description: "Substitute \\(t = 10\\).", workingLatex: "\\dfrac{dT}{dt}\\bigg|_{t=10} = -6 e^{-1}", explanation: "Insert the time." },
    { stepNumber: 5, description: "Simplify.", workingLatex: "= -\\dfrac{6}{e}", explanation: "Cleaner closed form." },
    { stepNumber: 6, description: "Evaluate numerically.", workingLatex: "\\dfrac{dT}{dt} \\approx -2.21", explanation: "Use \\(e \\approx 2.718\\)." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dT}{dt} \\approx -2.21 \\text{ °C/s}", explanation: "Coffee is cooling at about \\(2.21\\) °C/s at \\(t = 10\\)." }
  ], finalAnswer: "\\( -\\tfrac{6}{e} \\approx -2.21 \\) °C/s." } },
  { id: "y2df10-057", topicRef: "y2df10", topicTitle: "Rates of Change 57", difficulty: "Standard", questionText: "A bacterial culture has size \\( N = 50\\cdot 2^{t/3} \\). Find \\(dN/dt\\) at \\(t=0\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "N = 50 \\cdot 2^{t/3}", explanation: "Exponential growth with base 2." },
    { stepNumber: 2, description: "Recall the derivative rule for \\(a^{f(t)}\\).", workingLatex: "\\dfrac{d}{dt}a^{f(t)} = a^{f(t)}\\ln a \\cdot f'(t)", explanation: "General formula for exponentials with non-\\(e\\) bases." },
    { stepNumber: 3, description: "Apply with \\(a = 2,\\; f(t) = t/3\\).", workingLatex: "\\dfrac{dN}{dt} = 50 \\cdot 2^{t/3} \\cdot \\ln 2 \\cdot \\tfrac{1}{3}", explanation: "Chain rule on the exponential with base 2." },
    { stepNumber: 4, description: "Simplify.", workingLatex: "\\dfrac{dN}{dt} = \\tfrac{50\\ln 2}{3}\\cdot 2^{t/3}", explanation: "Common factors gathered." },
    { stepNumber: 5, description: "Substitute \\(t = 0\\).", workingLatex: "\\dfrac{dN}{dt}\\bigg|_{t=0} = \\tfrac{50\\ln 2}{3}\\cdot 2^0", explanation: "Insert time." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "= \\tfrac{50\\ln 2}{3}", explanation: "\\(2^0 = 1\\)." },
    { stepNumber: 7, description: "Evaluate numerically with units.", workingLatex: "\\approx 11.55 \\text{ units/hr}", explanation: "Initial growth rate of the culture." }
  ], finalAnswer: "\\( \\tfrac{50\\ln 2}{3} \\approx 11.55 \\) units/hr." } },
  { id: "y2df10-058", topicRef: "y2df10", topicTitle: "Rates of Change 58", difficulty: "Foundation", questionText: "Write the rate of change of circle area \\(A = \\pi r^2\\) in terms of \\(dr/dt\\).", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates", "theory"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the area formula.", workingLatex: "A = \\pi r^2", explanation: "Given relationship between area and radius." },
    { stepNumber: 2, description: "Differentiate \\(A\\) w.r.t. \\(r\\).", workingLatex: "\\dfrac{dA}{dr} = 2\\pi r", explanation: "Power-rule differentiation." },
    { stepNumber: 3, description: "State the chain rule.", workingLatex: "\\dfrac{dA}{dt} = \\dfrac{dA}{dr}\\cdot \\dfrac{dr}{dt}", explanation: "Composite-function rule for linking rates." },
    { stepNumber: 4, description: "Substitute the derivative.", workingLatex: "\\dfrac{dA}{dt} = 2\\pi r \\cdot \\dfrac{dr}{dt}", explanation: "Expression in the required form." },
    { stepNumber: 5, description: "State the result.", workingLatex: "\\boxed{\\dfrac{dA}{dt} = 2\\pi r\\cdot \\dfrac{dr}{dt}}", explanation: "Standard identity used throughout these problems." }
  ], finalAnswer: "\\( 2\\pi r\\cdot \\tfrac{dr}{dt} \\)." } },
  { id: "y2df10-059", topicRef: "y2df10", topicTitle: "Rates of Change 59", difficulty: "Foundation", questionText: "Write \\(dV/dt\\) for a sphere in terms of \\(r\\) and \\(dr/dt\\).", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates", "theory"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the volume formula.", workingLatex: "V = \\tfrac{4}{3}\\pi r^3", explanation: "Volume of a sphere." },
    { stepNumber: 2, description: "Differentiate w.r.t. \\(r\\).", workingLatex: "\\dfrac{dV}{dr} = 4\\pi r^2", explanation: "Power rule." },
    { stepNumber: 3, description: "State the chain rule.", workingLatex: "\\dfrac{dV}{dt} = \\dfrac{dV}{dr}\\cdot \\dfrac{dr}{dt}", explanation: "Composite-function rule." },
    { stepNumber: 4, description: "Substitute.", workingLatex: "\\dfrac{dV}{dt} = 4\\pi r^2 \\cdot \\dfrac{dr}{dt}", explanation: "Required form." },
    { stepNumber: 5, description: "State the identity.", workingLatex: "\\boxed{\\dfrac{dV}{dt} = 4\\pi r^2\\cdot \\dfrac{dr}{dt}}", explanation: "Used in every sphere-rate question." }
  ], finalAnswer: "\\( 4\\pi r^2\\cdot \\tfrac{dr}{dt} \\)." } },
  { id: "y2df10-060", topicRef: "y2df10", topicTitle: "Rates of Change 60", difficulty: "Standard", questionText: "A tray's temperature \\(T = 180 - 160e^{-0.2t}\\). Find \\(dT/dt\\) at \\(t=0\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "T = 180 - 160 e^{-0.2 t}", explanation: "Exponential rise toward a limit of 180 °C." },
    { stepNumber: 2, description: "Differentiate \\(T\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dT}{dt} = -160 \\cdot (-0.2) e^{-0.2t}", explanation: "Chain rule on the exponential; constant \\(180\\) drops out." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "\\dfrac{dT}{dt} = 32 e^{-0.2t}", explanation: "Sign flips: two negatives become positive." },
    { stepNumber: 4, description: "Substitute \\(t = 0\\).", workingLatex: "\\dfrac{dT}{dt}\\bigg|_{t=0} = 32 e^{0}", explanation: "Numerical evaluation." },
    { stepNumber: 5, description: "Simplify.", workingLatex: "= 32 \\cdot 1 = 32", explanation: "\\(e^0 = 1\\)." },
    { stepNumber: 6, description: "Sanity check the sign.", workingLatex: "\\dfrac{dT}{dt} > 0", explanation: "Positive, consistent with warming from a cooler starting state." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dT}{dt} = 32 \\text{ °C/s}", explanation: "Tray initially warms at \\(32\\) °C/s." }
  ], finalAnswer: "\\( 32 \\) °C/s initially." } },
  { id: "y2df10-061", topicRef: "y2df10", topicTitle: "Rates of Change 61", difficulty: "Challenge", questionText: "A ship sails north at \\(5\\) km/h. A receiver on shore is \\(2\\) km east of the starting point. Find rate at which the straight-line distance between them changes at \\(t=1\\) h.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up coordinates.", workingLatex: "x = 2 \\text{ km (east)},\\; y = 5t \\text{ km (north)}", explanation: "Receiver position relative to ship's starting point." },
    { stepNumber: 2, description: "State the given rate.", workingLatex: "\\dfrac{dy}{dt} = 5 \\text{ km/h}", explanation: "Ship's northward speed." },
    { stepNumber: 3, description: "Distance formula.", workingLatex: "D = \\sqrt{x^2 + y^2} = \\sqrt{4 + 25 t^2}", explanation: "Pythagoras with the receiver position fixed at \\(x = 2\\)." },
    { stepNumber: 4, description: "Differentiate w.r.t. \\(t\\).", workingLatex: "\\dfrac{dD}{dt} = \\dfrac{1}{2\\sqrt{4 + 25 t^2}}\\cdot 50 t", explanation: "Chain rule on the square root." },
    { stepNumber: 5, description: "Simplify.", workingLatex: "\\dfrac{dD}{dt} = \\dfrac{25 t}{\\sqrt{4 + 25 t^2}}", explanation: "Cleaner expression in \\(t\\)." },
    { stepNumber: 6, description: "Substitute \\(t = 1\\).", workingLatex: "\\dfrac{dD}{dt}\\bigg|_{t=1} = \\dfrac{25}{\\sqrt{4 + 25}}", explanation: "Insert the time." },
    { stepNumber: 7, description: "Simplify the surd.", workingLatex: "= \\dfrac{25}{\\sqrt{29}}", explanation: "Surd in lowest form." },
    { stepNumber: 8, description: "Sanity check.", workingLatex: "0 < \\dfrac{25}{\\sqrt{29}} < 5", explanation: "Less than the ship's full speed, since only the component along the line-of-sight contributes." },
    { stepNumber: 9, description: "Evaluate numerically with units.", workingLatex: "\\approx 4.64 \\text{ km/h}", explanation: "Separation grows at about \\(4.64\\) km/h." }
  ], finalAnswer: "\\( \\tfrac{25}{\\sqrt{29}} \\approx 4.64 \\) km/h." } },
  { id: "y2df10-062", topicRef: "y2df10", topicTitle: "Rates of Change 62", difficulty: "Standard", questionText: "A bar's length varies with temperature: \\(L = 100 + 0.01T\\). If \\(T\\) increases at \\(2\\) °C/min, find \\(dL/dt\\).", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the relationship.", workingLatex: "L = 100 + 0.01 T", explanation: "Linear in temperature." },
    { stepNumber: 2, description: "Differentiate \\(L\\) w.r.t. \\(T\\).", workingLatex: "\\dfrac{dL}{dT} = 0.01", explanation: "Constant slope — no dependence on temperature." },
    { stepNumber: 3, description: "State the given rate.", workingLatex: "\\dfrac{dT}{dt} = 2 \\text{ °C/min}", explanation: "Temperature rate." },
    { stepNumber: 4, description: "Apply the chain rule symbolically.", workingLatex: "\\dfrac{dL}{dt} = \\dfrac{dL}{dT}\\cdot \\dfrac{dT}{dt}", explanation: "Standard chain rule." },
    { stepNumber: 5, description: "Substitute.", workingLatex: "\\dfrac{dL}{dt} = 0.01 \\cdot 2", explanation: "Insert both values." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "\\dfrac{dL}{dt} = 0.02", explanation: "Arithmetic step." },
    { stepNumber: 7, description: "State with units.", workingLatex: "\\dfrac{dL}{dt} = 0.02 \\text{ m/min}", explanation: "Bar lengthens at \\(0.02\\) m/min." }
  ], finalAnswer: "\\( 0.02 \\) m/min." } },
  { id: "y2df10-063", topicRef: "y2df10", topicTitle: "Rates of Change 63", difficulty: "Challenge", questionText: "Water fills a rectangular trough (\\(1\\) m wide, \\(3\\) m long) at \\(6\\) litres/min. Find the rate at which water depth rises. (\\(1\\) L = \\(0.001\\) m³.)", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Convert the inflow rate to SI units.", workingLatex: "\\dfrac{dV}{dt} = 6 \\text{ L/min} = 0.006 \\text{ m}^3/\\text{min}", explanation: "Use the given conversion." },
    { stepNumber: 2, description: "Find the cross-sectional area of the trough.", workingLatex: "A = 1 \\times 3 = 3 \\text{ m}^2", explanation: "Top area of water surface remains constant for a rectangular trough." },
    { stepNumber: 3, description: "Write the volume in terms of the depth.", workingLatex: "V = A h = 3 h", explanation: "Volume of water equals cross-section times depth." },
    { stepNumber: 4, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = 3", explanation: "Linear coefficient." },
    { stepNumber: 5, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = 3 \\cdot \\dfrac{dh}{dt}", explanation: "Symbolic relation." },
    { stepNumber: 6, description: "Rearrange for \\(\\dfrac{dh}{dt}\\).", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{1}{3}\\cdot \\dfrac{dV}{dt}", explanation: "Inverse-rate solve." },
    { stepNumber: 7, description: "Substitute the inflow rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{0.006}{3}", explanation: "Insert numerical value." },
    { stepNumber: 8, description: "Simplify and convert to mm/min.", workingLatex: "\\dfrac{dh}{dt} = 0.002 \\text{ m/min} = 2 \\text{ mm/min}", explanation: "Depth rises at \\(2\\) mm/min." },
    { stepNumber: 9, description: "Interpret.", workingLatex: "\\dfrac{dh}{dt} = 2 \\text{ mm/min}", explanation: "Slow but steady — consistent with a small inflow into a wide trough." }
  ], finalAnswer: "\\( 0.002 \\) m/min = 2 mm/min." } },
  { id: "y2df10-064", topicRef: "y2df10", topicTitle: "Rates of Change 64", difficulty: "Challenge", questionText: "A kite is rising vertically at \\(2\\) m/s; horizontal distance from observer is fixed at \\(100\\) m. Find the rate at which the string length changes when string = \\(150\\) m.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set notation.", workingLatex: "x = 100 \\text{ m},\\; y = \\text{height},\\; L = \\text{string length}", explanation: "Right triangle with fixed horizontal leg and variable vertical leg." },
    { stepNumber: 2, description: "Constraint via Pythagoras.", workingLatex: "L^2 = x^2 + y^2 = 10000 + y^2", explanation: "String length is the hypotenuse." },
    { stepNumber: 3, description: "Differentiate implicitly w.r.t. \\(t\\).", workingLatex: "2L \\dfrac{dL}{dt} = 2y \\dfrac{dy}{dt}", explanation: "Both \\(L\\) and \\(y\\) depend on time." },
    { stepNumber: 4, description: "Simplify.", workingLatex: "L \\dfrac{dL}{dt} = y \\dfrac{dy}{dt}", explanation: "Divide through by 2." },
    { stepNumber: 5, description: "Find \\(y\\) when \\(L = 150\\).", workingLatex: "y = \\sqrt{L^2 - x^2} = \\sqrt{22500 - 10000} = \\sqrt{12500} = 50\\sqrt{5}", explanation: "Pythagoras at the snapshot." },
    { stepNumber: 6, description: "State the given rate.", workingLatex: "\\dfrac{dy}{dt} = 2 \\text{ m/s}", explanation: "Kite rises at \\(2\\) m/s." },
    { stepNumber: 7, description: "Solve for \\(\\dfrac{dL}{dt}\\) symbolically.", workingLatex: "\\dfrac{dL}{dt} = \\dfrac{y}{L}\\cdot \\dfrac{dy}{dt}", explanation: "Algebraic rearrangement." },
    { stepNumber: 8, description: "Substitute the known values.", workingLatex: "\\dfrac{dL}{dt} = \\dfrac{50\\sqrt{5}}{150}\\cdot 2 = \\dfrac{\\sqrt{5}}{3}\\cdot 2 = \\dfrac{2\\sqrt{5}}{3}", explanation: "Insert numerical values." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dL}{dt} = \\tfrac{2\\sqrt{5}}{3} \\approx 1.49 \\text{ m/s}", explanation: "String lengthens at about \\(1.49\\) m/s." }
  ], finalAnswer: "\\( \\tfrac{2\\sqrt 5}{3} \\approx 1.49 \\) m/s." } },
  { id: "y2df10-065", topicRef: "y2df10", topicTitle: "Rates of Change 65", difficulty: "Challenge", questionText: "A plane flies horizontally at \\(500\\) km/h at altitude \\(5\\) km. Find the rate at which its distance from an observer on the ground is increasing when the plane is directly \\(12\\) km (horizontal) from the observer.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set notation.", workingLatex: "x = \\text{horizontal distance},\\; D = \\text{straight-line distance}", explanation: "Altitude \\(5\\) km is the constant vertical leg." },
    { stepNumber: 2, description: "Pythagorean constraint.", workingLatex: "D^2 = 25 + x^2", explanation: "Right triangle: altitude \\(5\\), horizontal \\(x\\), hypotenuse \\(D\\)." },
    { stepNumber: 3, description: "Differentiate implicitly.", workingLatex: "2 D \\dfrac{dD}{dt} = 2x \\dfrac{dx}{dt}", explanation: "Both \\(D\\) and \\(x\\) depend on time." },
    { stepNumber: 4, description: "Simplify.", workingLatex: "D \\dfrac{dD}{dt} = x \\dfrac{dx}{dt}", explanation: "Divide through by 2." },
    { stepNumber: 5, description: "State the given rate.", workingLatex: "\\dfrac{dx}{dt} = 500 \\text{ km/h}", explanation: "Plane's horizontal speed." },
    { stepNumber: 6, description: "Find \\(D\\) when \\(x = 12\\).", workingLatex: "D = \\sqrt{25 + 144} = \\sqrt{169} = 13", explanation: "5-12-13 right triangle." },
    { stepNumber: 7, description: "Solve for \\(\\dfrac{dD}{dt}\\) symbolically.", workingLatex: "\\dfrac{dD}{dt} = \\dfrac{x}{D}\\cdot \\dfrac{dx}{dt}", explanation: "Algebraic rearrangement." },
    { stepNumber: 8, description: "Substitute.", workingLatex: "\\dfrac{dD}{dt} = \\dfrac{12}{13}\\cdot 500", explanation: "Insert numerical values." },
    { stepNumber: 9, description: "Simplify and state with units.", workingLatex: "\\dfrac{dD}{dt} = \\dfrac{6000}{13} \\approx 461.5 \\text{ km/h}", explanation: "Distance from observer grows at about \\(461.5\\) km/h — less than the plane's speed, since only the radial component matters." }
  ], finalAnswer: "\\( \\tfrac{6000}{13} \\approx 461.5 \\) km/h." } },
  { id: "y2df10-066", topicRef: "y2df10", topicTitle: "Rates of Change 66", difficulty: "Challenge", questionText: "Charge on a capacitor: \\( Q = 5 e^{-0.1t} \\) coulombs. Find the current \\(i = -dQ/dt\\) at \\(t=10\\) s.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the charge model.", workingLatex: "Q = 5 e^{-0.1 t}", explanation: "Exponential discharge of a capacitor." },
    { stepNumber: 2, description: "Differentiate \\(Q\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dQ}{dt} = 5 \\cdot (-0.1) e^{-0.1t}", explanation: "Chain rule on the exponential." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "\\dfrac{dQ}{dt} = -0.5 e^{-0.1t}", explanation: "Tidy form." },
    { stepNumber: 4, description: "Express the current using the given sign convention.", workingLatex: "i = -\\dfrac{dQ}{dt} = 0.5 e^{-0.1t}", explanation: "Convention defines \\(i\\) as a positive quantity for a discharging capacitor." },
    { stepNumber: 5, description: "Substitute \\(t = 10\\).", workingLatex: "i(10) = 0.5 e^{-1}", explanation: "Numerical evaluation." },
    { stepNumber: 6, description: "Simplify.", workingLatex: "= \\dfrac{0.5}{e}", explanation: "Exact closed form." },
    { stepNumber: 7, description: "Sanity check the sign.", workingLatex: "i(10) > 0", explanation: "Capacitor is still discharging at \\(t = 10\\) s." },
    { stepNumber: 8, description: "Evaluate numerically.", workingLatex: "i(10) \\approx 0.184", explanation: "Use \\(e \\approx 2.718\\)." },
    { stepNumber: 9, description: "State with units.", workingLatex: "i(10) \\approx 0.184 \\text{ A}", explanation: "Current is about \\(0.184\\) amps at \\(t = 10\\) s." }
  ], finalAnswer: "\\( i \\approx 0.184 \\) A." } },
  { id: "y2df10-067", topicRef: "y2df10", topicTitle: "Rates of Change 67", difficulty: "Challenge", questionText: "Sand pours at \\(30\\) cm³/s onto a cone-shaped pile whose height always equals the base radius. Find \\(dh/dt\\) when \\(h=10\\) cm.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Note the geometric constraint.", workingLatex: "r = h", explanation: "Pile keeps height equal to base radius for all sizes." },
    { stepNumber: 2, description: "Cone-volume formula.", workingLatex: "V = \\tfrac{1}{3}\\pi r^2 h", explanation: "Standard formula." },
    { stepNumber: 3, description: "Apply the constraint.", workingLatex: "V = \\tfrac{1}{3}\\pi h^2 \\cdot h = \\tfrac{\\pi h^3}{3}", explanation: "Single-variable expression in \\(h\\)." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dV}{dt} = 30 \\text{ cm}^3/\\text{s}", explanation: "Sand pours in at this rate." },
    { stepNumber: 5, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = \\pi h^2", explanation: "Power-rule differentiation." },
    { stepNumber: 6, description: "Apply chain rule symbolically.", workingLatex: "\\dfrac{dV}{dt} = \\pi h^2 \\cdot \\dfrac{dh}{dt}", explanation: "Symbol form first." },
    { stepNumber: 7, description: "Rearrange for the unknown rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{1}{\\pi h^2}\\cdot \\dfrac{dV}{dt}", explanation: "Inverse-rate algebra." },
    { stepNumber: 8, description: "Substitute \\(h = 10\\) and the inflow rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{30}{100\\pi} = \\dfrac{3}{10\\pi}", explanation: "Numerical evaluation." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dh}{dt} = \\tfrac{3}{10\\pi} \\approx 0.0955 \\text{ cm/s}", explanation: "Height rises at about \\(0.0955\\) cm/s." }
  ], finalAnswer: "\\( \\tfrac{3}{10\\pi} \\approx 0.0955 \\) cm/s." } },
  { id: "y2df10-068", topicRef: "y2df10", topicTitle: "Rates of Change 68", difficulty: "Challenge", questionText: "A lighthouse beacon \\(1\\) km from shore revolves at \\(\\pi\\) rad/s. Find the speed at which the light hits a point on the shore \\(2\\) km from the lighthouse's closest point.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up notation.", workingLatex: "x = \\text{distance along shore},\\; \\theta = \\text{angle of beam from perpendicular}", explanation: "Lighthouse \\(1\\) km offshore." },
    { stepNumber: 2, description: "Draw the right triangle.", workingLatex: "\\text{Adjacent} = 1,\\; \\text{Opposite} = x,\\; \\text{Hypotenuse} = \\text{light ray length}", explanation: "The perpendicular distance from lighthouse to shore is the adjacent leg." },
    { stepNumber: 3, description: "Geometric constraint.", workingLatex: "\\tan\\theta = \\dfrac{x}{1} = x", explanation: "Trigonometric ratio for the angle between the beam and the perpendicular." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{d\\theta}{dt} = \\pi \\text{ rad/s}", explanation: "Beacon rotation rate." },
    { stepNumber: 5, description: "Differentiate the constraint implicitly.", workingLatex: "\\sec^2\\theta \\cdot \\dfrac{d\\theta}{dt} = \\dfrac{dx}{dt}", explanation: "Chain rule on \\(\\tan\\theta\\); both \\(x\\) and \\(\\theta\\) depend on time." },
    { stepNumber: 6, description: "Find \\(\\sec^2\\theta\\) at the moment of interest.", workingLatex: "\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + x^2 = 1 + 4 = 5", explanation: "Standard identity, at \\(x = 2\\)." },
    { stepNumber: 7, description: "Solve for \\(\\dfrac{dx}{dt}\\) symbolically.", workingLatex: "\\dfrac{dx}{dt} = \\sec^2\\theta \\cdot \\dfrac{d\\theta}{dt}", explanation: "Direct rearrangement of the differentiated constraint." },
    { stepNumber: 8, description: "Substitute.", workingLatex: "\\dfrac{dx}{dt} = 5 \\cdot \\pi", explanation: "Insert the rotation rate." },
    { stepNumber: 9, description: "Simplify with units.", workingLatex: "\\dfrac{dx}{dt} = 5\\pi \\approx 15.7 \\text{ km/s}", explanation: "Light sweeps along the shore at about \\(15.7\\) km/s." }
  ], finalAnswer: "\\( 5\\pi \\approx 15.7 \\) km/s." } },
  { id: "y2df10-069", topicRef: "y2df10", topicTitle: "Rates of Change 69", difficulty: "Challenge", questionText: "A tree's height \\(h = 20 - 18e^{-0.1t}\\) m. Find \\(dh/dt\\) when \\(h = 10\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the model.", workingLatex: "h = 20 - 18 e^{-0.1 t}", explanation: "Tree height approaches \\(20\\) m as \\(t \\to \\infty\\)." },
    { stepNumber: 2, description: "Differentiate \\(h\\) w.r.t. \\(t\\).", workingLatex: "\\dfrac{dh}{dt} = -18 \\cdot (-0.1) e^{-0.1t}", explanation: "Chain rule on the exponential; constant \\(20\\) drops out." },
    { stepNumber: 3, description: "Simplify.", workingLatex: "\\dfrac{dh}{dt} = 1.8 e^{-0.1t}", explanation: "Two negatives become positive." },
    { stepNumber: 4, description: "Use the height condition.", workingLatex: "h = 10 \\Rightarrow 20 - 18 e^{-0.1t} = 10", explanation: "Set up an equation for the exponential factor." },
    { stepNumber: 5, description: "Solve for the exponential.", workingLatex: "18 e^{-0.1t} = 10 \\Rightarrow e^{-0.1t} = \\dfrac{10}{18} = \\dfrac{5}{9}", explanation: "Rearrange." },
    { stepNumber: 6, description: "Substitute into the rate expression.", workingLatex: "\\dfrac{dh}{dt} = 1.8 \\cdot \\dfrac{5}{9}", explanation: "Plug in the exponential value." },
    { stepNumber: 7, description: "Compute.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{9}{9} = 1", explanation: "Cancellation gives a clean answer." },
    { stepNumber: 8, description: "Sanity check the sign.", workingLatex: "\\dfrac{dh}{dt} > 0", explanation: "Tree is still growing, consistent with asymptotic approach to 20 m." },
    { stepNumber: 9, description: "State with units.", workingLatex: "\\dfrac{dh}{dt} = 1 \\text{ m/year}", explanation: "Tree grows at \\(1\\) m/year when it is \\(10\\) m tall." }
  ], finalAnswer: "\\( 1 \\) m/year." } },
  { id: "y2df10-070", topicRef: "y2df10", topicTitle: "Rates of Change 70", difficulty: "Challenge", questionText: "Water pours into a cone (apex down) at \\(4\\) cm³/s. Cone has semi-vertical angle \\(\\tan^{-1}(1/4)\\). Find the rate at which the water's surface area changes when \\(h = 8\\) cm.", marks: 6, examStyle: true, yearCreated: 2026, tags: ["rates"], workedSolution: { steps: [
    { stepNumber: 1, description: "Interpret the semi-vertical angle.", workingLatex: "\\tan(\\text{angle}) = \\tfrac{r}{h} = \\tfrac{1}{4}", explanation: "Hence \\(r = h/4\\) for the water inside the cone at all heights." },
    { stepNumber: 2, description: "Express volume in terms of \\(h\\) only.", workingLatex: "V = \\tfrac{1}{3}\\pi r^2 h = \\tfrac{1}{3}\\pi \\left(\\tfrac{h}{4}\\right)^2 h = \\tfrac{\\pi h^3}{48}", explanation: "Substitute the constraint into the cone-volume formula." },
    { stepNumber: 3, description: "Differentiate \\(V\\) w.r.t. \\(h\\).", workingLatex: "\\dfrac{dV}{dh} = \\tfrac{\\pi h^2}{16}", explanation: "Power rule." },
    { stepNumber: 4, description: "State the given rate.", workingLatex: "\\dfrac{dV}{dt} = 4 \\text{ cm}^3/\\text{s}", explanation: "Water pours in at this rate." },
    { stepNumber: 5, description: "Apply chain rule symbolically and rearrange.", workingLatex: "\\dfrac{dV}{dt} = \\tfrac{\\pi h^2}{16}\\cdot \\dfrac{dh}{dt} \\Rightarrow \\dfrac{dh}{dt} = \\dfrac{16}{\\pi h^2}\\cdot \\dfrac{dV}{dt}", explanation: "Inverse-rate solve." },
    { stepNumber: 6, description: "Substitute \\(h = 8\\) and the inflow rate.", workingLatex: "\\dfrac{dh}{dt} = \\dfrac{16 \\cdot 4}{\\pi \\cdot 64} = \\dfrac{64}{64\\pi} = \\dfrac{1}{\\pi} \\text{ cm/s}", explanation: "Numerical evaluation." },
    { stepNumber: 7, description: "Water-surface area in terms of \\(h\\).", workingLatex: "A = \\pi r^2 = \\pi \\left(\\tfrac{h}{4}\\right)^2 = \\tfrac{\\pi h^2}{16}", explanation: "Top of the water is a circle of radius \\(h/4\\)." },
    { stepNumber: 8, description: "Differentiate and apply chain rule.", workingLatex: "\\dfrac{dA}{dh} = \\tfrac{\\pi h}{8} \\Rightarrow \\dfrac{dA}{dt} = \\tfrac{\\pi h}{8}\\cdot \\dfrac{dh}{dt}", explanation: "Same template." },
    { stepNumber: 9, description: "Substitute \\(h = 8\\) and \\(\\dfrac{dh}{dt}\\); state with units.", workingLatex: "\\dfrac{dA}{dt} = \\dfrac{\\pi \\cdot 8}{8}\\cdot \\dfrac{1}{\\pi} = 1 \\text{ cm}^2/\\text{s}", explanation: "Surface area grows at \\(1\\) cm²/s." }
  ], finalAnswer: "\\( 1 \\) cm²/s." } },
  { id: "y2df10-071", topicRef: "y2df10", topicTitle: "Rates of Change 71", difficulty: "Foundation", questionText: "State the chain-rule identity linking \\(\\tfrac{dQ}{dt}\\), \\(\\tfrac{dQ}{dx}\\) and \\(\\tfrac{dx}{dt}\\).", marks: 2, examStyle: false, yearCreated: 2026, tags: ["rates", "theory"], workedSolution: { steps: [
    { stepNumber: 1, description: "Recall: if \\(Q\\) depends on \\(x\\), and \\(x\\) depends on \\(t\\), \\(Q\\) is a composite function of \\(t\\).", workingLatex: "Q = Q(x(t))", explanation: "Composite function structure." },
    { stepNumber: 2, description: "Apply the chain rule to a composite function.", workingLatex: "\\dfrac{dQ}{dt} = \\dfrac{dQ}{dx}\\cdot \\dfrac{dx}{dt}", explanation: "Standard A-Level chain rule for rates." },
    { stepNumber: 3, description: "Interpret each factor.", workingLatex: "\\dfrac{dQ}{dx}: \\text{rate of }Q\\text{ per unit }x", explanation: "Comes from the formula linking the two quantities." },
    { stepNumber: 4, description: "And the second factor.", workingLatex: "\\dfrac{dx}{dt}: \\text{rate at which the underlying variable changes}", explanation: "Usually given in the problem." },
    { stepNumber: 5, description: "Final identity.", workingLatex: "\\boxed{\\dfrac{dQ}{dt} = \\dfrac{dQ}{dx}\\cdot \\dfrac{dx}{dt}}", explanation: "Linchpin of every connected-rate question — substitute the formula for \\(\\dfrac{dQ}{dx}\\) before substituting numerical values." }
  ], finalAnswer: "\\( \\tfrac{dQ}{dt} = \\tfrac{dQ}{dx}\\cdot\\tfrac{dx}{dt} \\)." } },
];
