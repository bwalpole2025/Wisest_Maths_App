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

import { questions as C2 } from "./Year_1_A_Level_Maths/Graphs/C2_intersection_curves";
import { questions as C3 } from "./Year_1_A_Level_Maths/Graphs/C3_completing_square";
import { questions as C4 } from "./Year_1_A_Level_Maths/Graphs/C4_sketching_polynomials";
import { questions as C5 } from "./Year_1_A_Level_Maths/Graphs/C5_stationary_curve_sketching";
import { questions as C6 } from "./Year_1_A_Level_Maths/Graphs/C6_reciprocal_graphs";
import { questions as E10 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E10_natural_logarithm";
import { questions as E11 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E11_growth_decay";
import { questions as E2 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E2_index_log_conversion";
import { questions as E3 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E3_logs_as_inverse";
import { questions as E4 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E4_laws_of_logarithms";
import { questions as E5 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E5_special_log_values";
import { questions as E6 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E6_solving_ax_equals_b";
import { questions as E7 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E7_linearising_data";
import { questions as E9 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/E9_gradient_ex";
import { questions as MC1 } from "./Year_1_A_Level_Maths/Graphs/MC1_graphs_of_functions";
import { questions as MC7 } from "./Year_1_A_Level_Maths/Graphs/MC7_graph_transformations";
import { questions as ME1 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/ME1_exponential_function";
import { questions as ME8 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/ME8_natural_exponential";
import { questions as Mc1 } from "./Year_1_A_Level_Maths/Calculus/Mc1_gradient_of_curve";
import { questions as Mc19 } from "./Year_1_A_Level_Maths/Calculus/Mc19_integration_reverse";
import { questions as Mf1 } from "./Year_1_A_Level_Maths/Functions/Mf1_polynomials";
import { questions as Mg1 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/Mg1_parallel_perpendicular";
import { questions as Mg8 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/Mg8_lines_and_curves";
import { questions as Mp1 } from "./Year_1_A_Level_Maths/Proof/Mp1_structure_of_proof";
import { questions as Mp21 } from "./Year_1_A_Level_Maths/Sampling/Mp21_population_sample";
import { questions as Ms1 } from "./Year_1_A_Level_Maths/Sequences_and_Series/Ms1_binomial_expansion";
import { questions as Mt1 } from "./Year_1_A_Level_Maths/Trigonometry/Mt1_sin_cos_tan_any_angle";
import { questions as Mv1 } from "./Year_1_A_Level_Maths/Vectors/Mv1_vectors_2d";
import { questions as a1 } from "./Year_1_A_Level_Maths/Algebra/a1_expanding_brackets_";
import { questions as a2 } from "./Year_1_A_Level_Maths/Algebra/a2_factorising";
import { questions as a3 } from "./Year_1_A_Level_Maths/Algebra/a3_algebraic_fractions";
import { questions as a4 } from "./Year_1_A_Level_Maths/Algebra/a4_laws_of_indices";
import { questions as a5 } from "./Year_1_A_Level_Maths/Algebra/a5_laws_of_surds";
import { questions as a6 } from "./Year_1_A_Level_Maths/Algebra/a6_rationalising_the_denominator";
import { questions as c2 } from "./Year_1_A_Level_Maths/Calculus/c2_limit_of_chord";
import { questions as c20 } from "./Year_1_A_Level_Maths/Calculus/c20_integrating_kxn";
import { questions as c21 } from "./Year_1_A_Level_Maths/Calculus/c21_constant_of_integration";
import { questions as c22 } from "./Year_1_A_Level_Maths/Calculus/c22_definite_integrals";
import { questions as c23 } from "./Year_1_A_Level_Maths/Calculus/c23_area_under_curve";
import { questions as c3 } from "./Year_1_A_Level_Maths/Calculus/c3_the_derivative";
import { questions as c4 } from "./Year_1_A_Level_Maths/Calculus/c4_sketching_gradient";
import { questions as c5 } from "./Year_1_A_Level_Maths/Calculus/c5_differentiating_kxn";
import { questions as c6 } from "./Year_1_A_Level_Maths/Calculus/c6_second_derivative";
import { questions as c7 } from "./Year_1_A_Level_Maths/Calculus/c7_stationary_points";
import { questions as c8 } from "./Year_1_A_Level_Maths/Calculus/c8_increasing_decreasing";
import { questions as c9 } from "./Year_1_A_Level_Maths/Calculus/c9_tangents_normals";
import { questions as f2 } from "./Year_1_A_Level_Maths/Functions/f2_factor_theorem";
import { questions as g10 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g10_equation_circle";
import { questions as g11 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g11_circle_properties";
import { questions as g2 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g2_distance_between_points";
import { questions as g3 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g3_midpoint";
import { questions as g4 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g4_equation_straight_line";
import { questions as g5 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g5_drawing_lines";
import { questions as g6 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g6_intersection_two_lines";
import { questions as g7 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g7_straight_line_models";
import { questions as g9 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/g9_line_circle";
import { questions as p2 } from "./Year_1_A_Level_Maths/Proof/p2_disproof_counter_example";
import { questions as p22 } from "./Year_1_A_Level_Maths/Sampling/p22_inferring_samples";
import { questions as p23 } from "./Year_1_A_Level_Maths/Sampling/p23_random_sampling";
import { questions as p24 } from "./Year_1_A_Level_Maths/Sampling/p24_sampling_techniques";
import { questions as p25 } from "./Year_1_A_Level_Maths/Sampling/p25_evaluating_sampling";
import { questions as s2 } from "./Year_1_A_Level_Maths/Sequences_and_Series/s2_factorial_ncr";
import { questions as t2 } from "./Year_1_A_Level_Maths/Trigonometry/t2_trig_graphs";
import { questions as t3 } from "./Year_1_A_Level_Maths/Trigonometry/t3_area_triangle_sine";
import { questions as t4 } from "./Year_1_A_Level_Maths/Trigonometry/t4_sine_cosine_rules";
import { questions as t5 } from "./Year_1_A_Level_Maths/Trigonometry/t5_tan_identity";
import { questions as t6 } from "./Year_1_A_Level_Maths/Trigonometry/t6_pythagorean_identity";
import { questions as t7 } from "./Year_1_A_Level_Maths/Trigonometry/t7_solving_trig_equations";
import { questions as v2 } from "./Year_1_A_Level_Maths/Vectors/v2_vector_operations";
import { questions as v3 } from "./Year_1_A_Level_Maths/Vectors/v3_magnitude_direction";
import { questions as v4 } from "./Year_1_A_Level_Maths/Vectors/v4_position_vectors";
import { questions as v5 } from "./Year_1_A_Level_Maths/Vectors/v5_distance_vectors";
import { questions as v6 } from "./Year_1_A_Level_Maths/Vectors/v6_vectors_in_problems";

/*
 * ── Year 1 A-Level Maths — Quadratic and Cubics ──────────────────
 */

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

import { questions as ise1 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise1_Inequalities";
import { questions as ise3 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise3_Graphing_Inequalities";

export const questions: Question[] = [
  ...C2,
  ...C3,
  ...C4,
  ...C5,
  ...C6,
  ...E10,
  ...E11,
  ...E2,
  ...E3,
  ...E4,
  ...E5,
  ...E6,
  ...E7,
  ...E9,
  ...MC1,
  ...MC7,
  ...ME1,
  ...ME8,
  ...Mc1,
  ...Mc19,
  ...Mf1,
  ...Mg1,
  ...Mg8,
  ...Mp1,
  ...Mp21,
  ...Ms1,
  ...Mt1,
  ...Mv1,
  ...a1,
  ...a2,
  ...a3,
  ...a4,
  ...a5,
  ...a6,
  ...c2,
  ...c20,
  ...c21,
  ...c22,
  ...c23,
  ...c3,
  ...c4,
  ...c5,
  ...c6,
  ...c7,
  ...c8,
  ...c9,
  ...f2,
  ...g10,
  ...g11,
  ...g2,
  ...g3,
  ...g4,
  ...g5,
  ...g6,
  ...g7,
  ...g9,
  ...p2,
  ...p22,
  ...p23,
  ...p24,
  ...p25,
  ...s2,
  ...t2,
  ...t3,
  ...t4,
  ...t5,
  ...t6,
  ...t7,
  ...v2,
  ...v3,
  ...v4,
  ...v5,
  ...v6,
  ...qc1,
  ...qc2,
  ...qc3,
  ...qc4,
  ...qc5,
  ...qc6,
  ...qc7,
  ...qc8,
  ...qc9,
  ...qc10,
  ...qc11,
  ...ise1,
  ...ise3,
];

/* Sort by topicRef for consistent ordering */
questions.sort((a, b) => a.topicRef.localeCompare(b.topicRef, undefined, { numeric: true }));

export function getQuestionsByTopicRef(ref: string): Question[] {
  return questions.filter((q) => q.topicRef === ref);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
