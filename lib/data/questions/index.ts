import { Question } from "@/lib/types";

/*
 * ── Year 1 A-Level Maths ──────────────────────────────────────
 *
 * Each topic has its own file inside Year_1_A_Level_Maths/<Subject>/.
 * To add questions: open the file, uncomment the template, fill it in.
 *
 * To add a brand-new topic file:
 *   1. Create the .ts file in the appropriate subfolder
 *   2. Add an import line below
 *   3. Add the spread to the questions array
 */

import { questions as a1 } from "./Year_1_A_Level_Maths/Algebra/a1_expanding_brackets_";
import { questions as a2 } from "./Year_1_A_Level_Maths/Algebra/a2_factorising";
import { questions as a3 } from "./Year_1_A_Level_Maths/Algebra/a3_algebraic_fractions";
import { questions as a4 } from "./Year_1_A_Level_Maths/Algebra/a4_laws_of_indices";
import { questions as a5 } from "./Year_1_A_Level_Maths/Algebra/a5_laws_of_surds";
import { questions as a6 } from "./Year_1_A_Level_Maths/Algebra/a6_rationalising_the_denominator";

import { questions as qc1 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc1_factorising_quadratic";
import { questions as qc2 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc2_quadratic_equation";
import { questions as qc3 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc3_complete_the_square";
import { questions as qc4 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc4_quadratic_involving_function_of_x";
import { questions as qc5 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc5_the_discriminant";
import { questions as qc6 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc6_sketching_quadratic_graphs";
import { questions as qc7 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc7_factorising_cubics";
import { questions as qc8 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc8_the_remainder_theorem";
import { questions as qc9 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc9_the_factor_theorem";
import { questions as qc10 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc10_factorising_a_cubic_(with_no_x_factor)";
import { questions as qc11 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc11_algebraic_division";

import { questions as be1 } from "./Year_1_A_Level_Maths/Binomial_Expansions/be1_binomial_expansions";

import { questions as cg1 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg1_equations_of_straight_line";
import { questions as cg2 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg2_line_segments";
import { questions as cg3 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg3_parallel_and_perpendicular_lines";
import { questions as cg4 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg4_proportion";
import { questions as cg5 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg5_curve_sketching";

import { questions as ise1 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise1_Inequalities";
import { questions as ise2 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise2_Simultaneous_Equations_Linear";

import { questions as t1 } from "./Year_1_A_Level_Maths/Trigonometry/t1_the_sine_and_cosine_rule";
import { questions as t2 } from "./Year_1_A_Level_Maths/Trigonometry/t2_trigonometric_identities";
import { questions as t3 } from "./Year_1_A_Level_Maths/Trigonometry/t3_trigonometric_graphs";
import { questions as t4 } from "./Year_1_A_Level_Maths/Trigonometry/t4_trigonometric_equations";

import { questions as el1 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el1_expontentials";
import { questions as el2 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el2_logarithms";
import { questions as el3 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el3_laws_of_logarithms";
import { questions as el4 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el4_solving_equations";
import { questions as el5 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el5_modelling_exponential_growth_and_decay";
import { questions as el6 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el6_using_logarithmic_graphs";

import { questions as d1 } from "./Year_1_A_Level_Maths/Differentiation/d1_the_gradient_of_a_curve";
import { questions as d2 } from "./Year_1_A_Level_Maths/Differentiation/d2_differentiating_curves";
import { questions as d3 } from "./Year_1_A_Level_Maths/Differentiation/d3_second_order_derivatives";
import { questions as d4 } from "./Year_1_A_Level_Maths/Differentiation/d4_derivatives_and_graphs";
import { questions as d5 } from "./Year_1_A_Level_Maths/Differentiation/d5_real_life_problems";

import { questions as i1 } from "./Year_1_A_Level_Maths/Integration/i1_indefinite_integration";
import { questions as i2 } from "./Year_1_A_Level_Maths/Integration/i2_definite_integration";

import { questions as v1 } from "./Year_1_A_Level_Maths/Vectors/v1_vectors_introduction";
import { questions as v2 } from "./Year_1_A_Level_Maths/Vectors/v2_calculating_vectors";
import { questions as v3 } from "./Year_1_A_Level_Maths/Vectors/v3_modelling_with_vectors";

export const questions: Question[] = [
  ...a1, ...a2, ...a3, ...a4, ...a5, ...a6,
  ...qc1, ...qc2, ...qc3, ...qc4, ...qc5, ...qc6, ...qc7, ...qc8, ...qc9, ...qc10, ...qc11,
  ...be1,
  ...cg1, ...cg2, ...cg3, ...cg4, ...cg5,
  ...ise1, ...ise2,
  ...t1, ...t2, ...t3, ...t4,
  ...el1, ...el2, ...el3, ...el4, ...el5, ...el6,
  ...d1, ...d2, ...d3, ...d4, ...d5,
  ...i1, ...i2,
  ...v1, ...v2, ...v3,
];

/* Sort by topicRef for consistent ordering */
questions.sort((a, b) => a.topicRef.localeCompare(b.topicRef, undefined, { numeric: true }));

export function getQuestionsByTopicRef(ref: string): Question[] {
  return questions.filter((q) => q.topicRef === ref);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
