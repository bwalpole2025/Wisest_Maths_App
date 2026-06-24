/**
 * Guided Learning — lesson registry.
 *
 * Lesson content is small and pre-authored, so each lesson is imported directly
 * (unlike the question bank, which is read from a generated JSON to keep it out
 * of the webpack graph). To add a lesson: create the file under
 * lib/data/lessons/Year_1_A_Level_Maths/<Subcategory>/, import it here, and add
 * it to the `allLessons` array. The map is keyed by each lesson's `topicRef`.
 */

import type { Lesson } from "@/lib/data/lessons/types";

// ── Algebra ──────────────────────────────────────────────────
import { lesson as a1 } from "./Year_1_A_Level_Maths/Algebra/a1_expanding_brackets";
import { lesson as a2 } from "./Year_1_A_Level_Maths/Algebra/a2_factorising";
import { lesson as a3 } from "./Year_1_A_Level_Maths/Algebra/a3_algebraic_fractions";
import { lesson as a4 } from "./Year_1_A_Level_Maths/Algebra/a4_laws_of_indices";
import { lesson as a5 } from "./Year_1_A_Level_Maths/Algebra/a5_laws_of_surds";
import { lesson as a6 } from "./Year_1_A_Level_Maths/Algebra/a6_rationalising_the_denominator";

// ── Quadratics & Cubics ──────────────────────────────────────
import { lesson as qc1 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc1_factorising_quadratic";
import { lesson as qc2 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc2_quadratic_equation";
import { lesson as qc3 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc3_complete_the_square";
import { lesson as qc4 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc4_quadratic_involving_function_of_x";
import { lesson as qc5 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc5_the_discriminant";
import { lesson as qc6 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc6_sketching_quadratic_graphs";
import { lesson as qc7 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc7_factorising_cubics";
import { lesson as qc8 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc8_the_remainder_theorem";
import { lesson as qc9 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc9_the_factor_theorem";
import { lesson as qc10 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc10_factorising_a_cubic_(with_no_x_factor)";
import { lesson as qc11 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc11_algebraic_division";

// ── Coordinate Geometry ──────────────────────────────────────
import { lesson as cg1 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg1_equations_of_straight_line";
import { lesson as cg2 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg2_Line_Segments";
import { lesson as cg3 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg3_Parallel_and_Perpendicular_Lines";
import { lesson as cg4 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg4_proportion";
import { lesson as cg5 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg5_curve_sketching";

// ── Trigonometry ─────────────────────────────────────────────
import { lesson as t1 } from "./Year_1_A_Level_Maths/Trigonometry/t1_the_sine_and_cosine_rule";
import { lesson as t2 } from "./Year_1_A_Level_Maths/Trigonometry/t2_trigonometric_identities";
import { lesson as t3 } from "./Year_1_A_Level_Maths/Trigonometry/t3_trigonometric_graphs";
import { lesson as t4 } from "./Year_1_A_Level_Maths/Trigonometry/t4_trigonometric_equations";
import { lesson as t5 } from "./Year_1_A_Level_Maths/Trigonometry/t4b_trigonometric_equations_2";

// ── Exponentials & Logarithms ────────────────────────────────
import { lesson as el1 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el1_expontentials";
import { lesson as el2 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el2_logarithms";
import { lesson as el3 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el3_laws_of_logarithms";
import { lesson as el4 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el4_solving_equations";
import { lesson as el5 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el5_modelling_exponential_growth_and_decay";
import { lesson as el6 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el6_using_logarithmic_graphs";

// ── Differentiation ──────────────────────────────────────────
import { lesson as d1 } from "./Year_1_A_Level_Maths/Differentiation/d1_the_gradient_of_a_curve";
import { lesson as d2 } from "./Year_1_A_Level_Maths/Differentiation/d2_differentiating_curves";
import { lesson as d3 } from "./Year_1_A_Level_Maths/Differentiation/d3_second_order_derivatives";
import { lesson as d4 } from "./Year_1_A_Level_Maths/Differentiation/d4_derivatives_and_graphs";
import { lesson as d5 } from "./Year_1_A_Level_Maths/Differentiation/d5_real_life_problems";

// ── Integration ──────────────────────────────────────────────
import { lesson as i1 } from "./Year_1_A_Level_Maths/Integration/i1_indefinite_integration";
import { lesson as i2 } from "./Year_1_A_Level_Maths/Integration/i2_definite_integration";

// ── Vectors ──────────────────────────────────────────────────
import { lesson as v1 } from "./Year_1_A_Level_Maths/Vectors/v1_vectors_introduction";
import { lesson as v2 } from "./Year_1_A_Level_Maths/Vectors/v2_calculating_vectors";
import { lesson as v3 } from "./Year_1_A_Level_Maths/Vectors/v3_modelling_with_vectors";

// ── Binomial Expansions ──────────────────────────────────────
import { lesson as be } from "./Year_1_A_Level_Maths/Binomial_Expansions/be1_binomial_expansions";

// ── Inequalities & Simultaneous Equations ────────────────────
import { lesson as ise1 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise1_Inequalities";
import { lesson as ise2 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise2_Simultaneous_Equations_Linear";
import { lesson as ise4 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise4_Quadratic_Inequalities";
import { lesson as ise5 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise5_Simultaneous_Equations_Quadratic";

const allLessons: Lesson[] = [
  a1, a2, a3, a4, a5, a6,
  qc1, qc2, qc3, qc4, qc5, qc6, qc7, qc8, qc9, qc10, qc11,
  cg1, cg2, cg3, cg4, cg5,
  t1, t2, t3, t4, t5,
  el1, el2, el3, el4, el5, el6,
  d1, d2, d3, d4, d5,
  i1, i2,
  v1, v2, v3,
  be,
  ise1, ise2, ise4, ise5,
];

const BY_REF: Map<string, Lesson> = new Map(allLessons.map((l) => [l.topicRef, l]));

/** The lesson for a subtopic ref, or null if none authored yet. */
export function getLessonByRef(ref: string): Lesson | null {
  return BY_REF.get(ref) ?? null;
}

/** Set of subtopic refs that currently have an authored lesson. */
export function getLessonRefs(): Set<string> {
  return new Set(BY_REF.keys());
}

export { allLessons };
