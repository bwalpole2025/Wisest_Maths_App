import { Question } from "@/lib/types";

import { questions as a1_expanding_brackets_ } from "./Year_1_A_Level_Maths/Algebra/a1_expanding_brackets_";
import { questions as a2_factorising } from "./Year_1_A_Level_Maths/Algebra/a2_factorising";
import { questions as a3_algebraic_fractions } from "./Year_1_A_Level_Maths/Algebra/a3_algebraic_fractions";
import { questions as a4_laws_of_indices } from "./Year_1_A_Level_Maths/Algebra/a4_laws_of_indices";
import { questions as a5_laws_of_surds } from "./Year_1_A_Level_Maths/Algebra/a5_laws_of_surds";
import { questions as a6_rationalising_the_denominator } from "./Year_1_A_Level_Maths/Algebra/a6_rationalising_the_denominator";
import { questions as be1_binomial_expansions } from "./Year_1_A_Level_Maths/Binomial_Expansions/be1_binomial_expansions";
import { questions as c2_limit_of_chord } from "./Year_1_A_Level_Maths/Calculus/c2_limit_of_chord";
import { questions as c3_the_derivative } from "./Year_1_A_Level_Maths/Calculus/c3_the_derivative";
import { questions as cg1_equations_of_straight_line } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg1_equations_of_straight_line";
import { questions as cg2_line_segments } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg2_line_segments";
import { questions as cg3_parallel_and_perpendicular_lines } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg3_parallel_and_perpendicular_lines";
import { questions as cg4_proportion } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg4_proportion";
import { questions as cg5_curve_sketching } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg5_curve_sketching";
import { questions as ise1_Inequalities } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise1_Inequalities";
import { questions as ise2_Simultaneous_Equations_Linear } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise2_Simultaneous_Equations_Linear";
import { questions as qc10_factorising_a_cubic_with_no_x_factor } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc10_factorising_a_cubic_(with_no_x_factor)";
import { questions as qc11_algebraic_division } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc11_algebraic_division";
import { questions as qc1_factorising_quadratic } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc1_factorising_quadratic";
import { questions as qc2_quadratic_equation } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc2_quadratic_equation";
import { questions as qc3_complete_the_square } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc3_complete_the_square";
import { questions as qc4_quadratic_involving_function_of_x } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc4_quadratic_involving_function_of_x";
import { questions as qc5_the_discriminant } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc5_the_discriminant";
import { questions as qc6_sketching_quadratic_graphs } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc6_sketching_quadratic_graphs";
import { questions as qc7_factorising_cubics } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc7_factorising_cubics";
import { questions as qc8_the_remainder_theorem } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc8_the_remainder_theorem";
import { questions as qc9_the_factor_theorem } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc9_the_factor_theorem";
import { questions as t1_the_sine_and_cosine_rule } from "./Year_1_A_Level_Maths/Trigonometry/t1_the_sine_and_cosine_rule";
import { questions as t2_trigonometric_identities } from "./Year_1_A_Level_Maths/Trigonometry/t2_trigonometric_identities";
import { questions as t3_trigonometric_graphs } from "./Year_1_A_Level_Maths/Trigonometry/t3_trigonometric_graphs";
import { questions as t4_trigonometric_equations } from "./Year_1_A_Level_Maths/Trigonometry/t4_trigonometric_equations";
import { questions as FMp } from "./Year_1_A_Level_Further_Maths/FurtherPure/fm_placeholder";
import { questions as FMm } from "./Year_1_A_Level_Further_Maths/FurtherMechanics/fm_mechanics_placeholder";
import { questions as FMs } from "./Year_1_A_Level_Further_Maths/FurtherStatistics/fm_stats_placeholder";

export const questions: Question[] = [
  ...a1_expanding_brackets_,
  ...a2_factorising,
  ...a3_algebraic_fractions,
  ...a4_laws_of_indices,
  ...a5_laws_of_surds,
  ...a6_rationalising_the_denominator,
  ...be1_binomial_expansions,
  ...c2_limit_of_chord,
  ...c3_the_derivative,
  ...cg1_equations_of_straight_line,
  ...cg2_line_segments,
  ...cg3_parallel_and_perpendicular_lines,
  ...cg4_proportion,
  ...cg5_curve_sketching,
  ...ise1_Inequalities,
  ...ise2_Simultaneous_Equations_Linear,
  ...qc10_factorising_a_cubic_with_no_x_factor,
  ...qc11_algebraic_division,
  ...qc1_factorising_quadratic,
  ...qc2_quadratic_equation,
  ...qc3_complete_the_square,
  ...qc4_quadratic_involving_function_of_x,
  ...qc5_the_discriminant,
  ...qc6_sketching_quadratic_graphs,
  ...qc7_factorising_cubics,
  ...qc8_the_remainder_theorem,
  ...qc9_the_factor_theorem,
  ...t1_the_sine_and_cosine_rule,
  ...t2_trigonometric_identities,
  ...t3_trigonometric_graphs,
  ...t4_trigonometric_equations,
  ...FMp,
  ...FMm,
  ...FMs,
];

questions.sort((a, b) => a.topicRef.localeCompare(b.topicRef, undefined, { numeric: true }));

export function getQuestionsByTopicRef(ref: string): Question[] {
  return questions.filter((q) => q.topicRef === ref);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
