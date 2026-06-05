import type { Board, Strand, Tier } from "@/lib/types";

/**
 * GCSE Mathematics taxonomy — the all-boards England spec (DfE subject content
 * shared by AQA / Edexcel / OCR / Eduqas) plus WJEC-Wales additions.
 *
 * Source of truth: the DfE "Mathematics GCSE subject content" reference codes
 * (Number N1–N16, Algebra A1–A25, Ratio R1–R16, Geometry G1–G25,
 * Probability P1–P9, Statistics S1–S6), broken down into teachable subtopics in
 * teaching order. WJEC-Wales-specific financial/handling content is marked
 * "(Wales)" in the title and carries `boards: ["WJEC"]`.
 *
 * Hierarchy: Strand → Topic → Subtopic. This manifest is flattened to the
 * shared `Topic[]` shape by lib/data/gcse/topics.ts (each subtopic → one leaf).
 *
 * Conventions:
 *   - `tier`: "Both" for DfE (F/H) content (Foundation ⊂ Higher), "Higher" for
 *     (H)-only content. (No Foundation-only content exists in the DfE spec.)
 *   - `dfeRef`: the DfE reference code(s) the subtopic draws on (non-empty).
 *   - `boards`: omit ⇒ all five boards. Set `["WJEC"]` for "(Wales)" subtopics.
 *   - `notes`: board caveats and cross-references.
 */

export interface GcseSubtopic {
  title: string;
  tier: Tier;
  dfeRef: string[];
  boards?: Board[];
  notes?: string;
}

export interface GcseTopic {
  title: string;
  strand: Strand;
  subtopics: GcseSubtopic[];
}

export const gcseManifest: GcseTopic[] = [
  /* ───────────────────────── NUMBER ───────────────────────── */
  {
    title: "Integers & Place Value",
    strand: "Number",
    subtopics: [
      { title: "Place value and ordering integers", tier: "Both", dfeRef: ["N1"] },
      { title: "Ordering decimals and fractions", tier: "Both", dfeRef: ["N1"] },
      { title: "Negative numbers and the four operations", tier: "Both", dfeRef: ["N2", "N3"] },
      { title: "Inequality symbols: <, >, ≤, ≥, =, ≠", tier: "Both", dfeRef: ["N1"] },
    ],
  },
  {
    title: "Factors, Multiples & Primes",
    strand: "Number",
    subtopics: [
      { title: "Factors, multiples and prime numbers", tier: "Both", dfeRef: ["N4"] },
      { title: "Prime factorisation in index form", tier: "Both", dfeRef: ["N4"] },
      { title: "Highest common factor and lowest common multiple", tier: "Both", dfeRef: ["N4"] },
      { title: "Systematic listing and the product rule for counting", tier: "Higher", dfeRef: ["N5"] },
    ],
  },
  {
    title: "Operations & Order of Operations",
    strand: "Number",
    subtopics: [
      { title: "The four operations with integers and decimals", tier: "Both", dfeRef: ["N2"] },
      { title: "Order of operations (BIDMAS)", tier: "Both", dfeRef: ["N2"] },
      { title: "Inverse operations and checking", tier: "Both", dfeRef: ["N3"] },
    ],
  },
  {
    title: "Fractions",
    strand: "Number",
    subtopics: [
      { title: "Equivalent fractions and simplifying", tier: "Both", dfeRef: ["N1"] },
      { title: "Adding and subtracting fractions", tier: "Both", dfeRef: ["N2"] },
      { title: "Multiplying and dividing fractions", tier: "Both", dfeRef: ["N2"] },
      { title: "Mixed numbers and improper fractions", tier: "Both", dfeRef: ["N2"] },
      { title: "Fractions and decimals interchangeably", tier: "Both", dfeRef: ["N10"] },
      { title: "Converting recurring decimals to fractions", tier: "Higher", dfeRef: ["N10"] },
    ],
  },
  {
    title: "Powers, Roots & Indices",
    strand: "Number",
    subtopics: [
      { title: "Powers and roots (squares, cubes and higher)", tier: "Both", dfeRef: ["N6"] },
      { title: "Laws of indices with integer powers", tier: "Both", dfeRef: ["N7"] },
      { title: "Negative and fractional indices", tier: "Higher", dfeRef: ["N7"] },
      { title: "Estimating powers and roots", tier: "Both", dfeRef: ["N6", "N14"] },
    ],
  },
  {
    title: "Standard Form",
    strand: "Number",
    subtopics: [
      { title: "Writing and ordering numbers in standard form", tier: "Both", dfeRef: ["N9"] },
      { title: "Calculating with standard form", tier: "Both", dfeRef: ["N9"] },
    ],
  },
  {
    title: "Surds",
    strand: "Number",
    subtopics: [
      { title: "Simplifying surds", tier: "Higher", dfeRef: ["N8"] },
      { title: "Operations with surds", tier: "Higher", dfeRef: ["N8"] },
      { title: "Rationalising the denominator", tier: "Higher", dfeRef: ["N8"] },
      { title: "Exact calculation with π and surds", tier: "Higher", dfeRef: ["N8"] },
    ],
  },
  {
    title: "Approximation & Accuracy",
    strand: "Number",
    subtopics: [
      { title: "Estimation and approximation", tier: "Both", dfeRef: ["N14"] },
      { title: "Rounding to decimal places and significant figures", tier: "Both", dfeRef: ["N15"] },
      { title: "Error intervals and truncation", tier: "Both", dfeRef: ["N15", "N16"] },
      { title: "Upper and lower bounds", tier: "Higher", dfeRef: ["N16"] },
      { title: "Bounds in calculations", tier: "Higher", dfeRef: ["N16"] },
    ],
  },
  {
    title: "Working with Number",
    strand: "Number",
    subtopics: [
      { title: "Standard units of mass, length, time and money", tier: "Both", dfeRef: ["N13"] },
      { title: "Fractions and percentages as operators", tier: "Both", dfeRef: ["N12"] },
      { title: "Reading mileage charts and timetables (Wales)", tier: "Both", dfeRef: ["N13"], boards: ["WJEC"], notes: "WJEC-Wales numeracy context; cross-ref R1." },
    ],
  },

  /* ───────────────────────── ALGEBRA ───────────────────────── */
  {
    title: "Notation & Vocabulary",
    strand: "Algebra",
    subtopics: [
      { title: "Algebraic notation and conventions", tier: "Both", dfeRef: ["A1"] },
      { title: "Vocabulary: expressions, equations, formulae, identities", tier: "Both", dfeRef: ["A3"] },
      { title: "Substitution into formulae and expressions", tier: "Both", dfeRef: ["A2"] },
    ],
  },
  {
    title: "Manipulating Expressions",
    strand: "Algebra",
    subtopics: [
      { title: "Collecting like terms", tier: "Both", dfeRef: ["A4"] },
      { title: "Expanding a single bracket", tier: "Both", dfeRef: ["A4"] },
      { title: "Expanding two binomials", tier: "Both", dfeRef: ["A4"] },
      { title: "Expanding products of more than two binomials", tier: "Higher", dfeRef: ["A4"] },
      { title: "Factorising using common factors", tier: "Both", dfeRef: ["A4"] },
      { title: "Factorising quadratics x² + bx + c", tier: "Both", dfeRef: ["A4"] },
      { title: "Factorising quadratics ax² + bx + c", tier: "Higher", dfeRef: ["A4"] },
      { title: "Difference of two squares", tier: "Both", dfeRef: ["A4"] },
      { title: "Laws of indices in algebra", tier: "Both", dfeRef: ["A4"] },
      { title: "Simplifying algebraic fractions", tier: "Higher", dfeRef: ["A4"] },
    ],
  },
  {
    title: "Formulae",
    strand: "Algebra",
    subtopics: [
      { title: "Writing and using formulae", tier: "Both", dfeRef: ["A5"] },
      { title: "Rearranging formulae: change of subject", tier: "Both", dfeRef: ["A5"] },
      { title: "Change of subject where the subject appears twice", tier: "Higher", dfeRef: ["A5"] },
    ],
  },
  {
    title: "Equations & Identities",
    strand: "Algebra",
    subtopics: [
      { title: "Equations versus identities", tier: "Both", dfeRef: ["A6"] },
      { title: "Proving algebraic identities", tier: "Higher", dfeRef: ["A6"] },
    ],
  },
  {
    title: "Functions",
    strand: "Algebra",
    subtopics: [
      { title: "Function notation: inputs and outputs", tier: "Both", dfeRef: ["A7"] },
      { title: "Inverse functions", tier: "Higher", dfeRef: ["A7"] },
      { title: "Composite functions", tier: "Higher", dfeRef: ["A7"] },
    ],
  },
  {
    title: "Linear Graphs",
    strand: "Algebra",
    subtopics: [
      { title: "Coordinates in all four quadrants", tier: "Both", dfeRef: ["A8"] },
      { title: "Plotting straight-line graphs", tier: "Both", dfeRef: ["A9"] },
      { title: "Gradient and intercept; y = mx + c", tier: "Both", dfeRef: ["A9", "A10"] },
      { title: "Equation of a line through two points", tier: "Both", dfeRef: ["A9"] },
      { title: "Parallel and perpendicular lines", tier: "Higher", dfeRef: ["A9"] },
    ],
  },
  {
    title: "Quadratic & Other Graphs",
    strand: "Algebra",
    subtopics: [
      { title: "Plotting and interpreting quadratic graphs", tier: "Both", dfeRef: ["A11", "A12"] },
      { title: "Roots, intercepts and turning points of quadratics", tier: "Higher", dfeRef: ["A11"] },
      { title: "Cubic and reciprocal graphs", tier: "Both", dfeRef: ["A12"] },
      { title: "Exponential and trigonometric graphs", tier: "Higher", dfeRef: ["A12"] },
      { title: "Graph transformations: translations and reflections", tier: "Higher", dfeRef: ["A13"] },
      { title: "Real-life and non-standard graphs", tier: "Both", dfeRef: ["A14"] },
      { title: "Gradients and areas under graphs", tier: "Higher", dfeRef: ["A15"] },
    ],
  },
  {
    title: "Equation of a Circle",
    strand: "Algebra",
    subtopics: [
      { title: "Equation of a circle centred at the origin", tier: "Higher", dfeRef: ["A16"] },
      { title: "Equation of a tangent to a circle", tier: "Higher", dfeRef: ["A16"] },
    ],
  },
  {
    title: "Solving Equations",
    strand: "Algebra",
    subtopics: [
      { title: "Solving linear equations", tier: "Both", dfeRef: ["A17"] },
      { title: "Linear equations with the unknown on both sides", tier: "Both", dfeRef: ["A17"] },
      { title: "Solving quadratics by factorising", tier: "Both", dfeRef: ["A18"] },
      { title: "Completing the square", tier: "Higher", dfeRef: ["A18"] },
      { title: "The quadratic formula", tier: "Higher", dfeRef: ["A18"] },
      { title: "Solving quadratics graphically", tier: "Both", dfeRef: ["A18"] },
      { title: "Iterative methods for numerical solutions", tier: "Higher", dfeRef: ["A20"] },
    ],
  },
  {
    title: "Simultaneous Equations",
    strand: "Algebra",
    subtopics: [
      { title: "Linear simultaneous equations", tier: "Both", dfeRef: ["A19"] },
      { title: "Linear and quadratic simultaneous equations", tier: "Higher", dfeRef: ["A19"] },
      { title: "Simultaneous equations solved graphically", tier: "Both", dfeRef: ["A19"] },
    ],
  },
  {
    title: "Inequalities",
    strand: "Algebra",
    subtopics: [
      { title: "Solving linear inequalities", tier: "Both", dfeRef: ["A22"] },
      { title: "Representing inequalities on a number line", tier: "Both", dfeRef: ["A22"] },
      { title: "Quadratic inequalities and set notation", tier: "Higher", dfeRef: ["A22"] },
      { title: "Graphing linear inequalities in two variables", tier: "Higher", dfeRef: ["A22"] },
    ],
  },
  {
    title: "Algebraic Modelling",
    strand: "Algebra",
    subtopics: [
      { title: "Forming expressions and equations from context", tier: "Both", dfeRef: ["A21"] },
    ],
  },
  {
    title: "Sequences",
    strand: "Algebra",
    subtopics: [
      { title: "Generating sequences from a rule", tier: "Both", dfeRef: ["A23"] },
      { title: "Arithmetic sequences and the nth term", tier: "Both", dfeRef: ["A24", "A25"] },
      { title: "Special sequences (triangular, Fibonacci, geometric)", tier: "Both", dfeRef: ["A24"] },
      { title: "Quadratic sequences", tier: "Higher", dfeRef: ["A25"] },
      { title: "Geometric and other non-linear sequences", tier: "Higher", dfeRef: ["A24"] },
    ],
  },

  /* ──────────── RATIO, PROPORTION & RATES OF CHANGE ──────────── */
  {
    title: "Units & Conversions",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Converting between metric units", tier: "Both", dfeRef: ["R1"] },
      { title: "Converting compound units", tier: "Both", dfeRef: ["R1", "R11"] },
      { title: "Converting between units of time", tier: "Both", dfeRef: ["R1"] },
    ],
  },
  {
    title: "Scale",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Scale factors, scale diagrams and maps", tier: "Both", dfeRef: ["R2"] },
      { title: "Maps, scales and bearings in context", tier: "Both", dfeRef: ["R2"], notes: "Cross-ref G15 (bearings)." },
    ],
  },
  {
    title: "Ratio",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Ratio notation and simplifying", tier: "Both", dfeRef: ["R4"] },
      { title: "Expressing one quantity as a fraction of another", tier: "Both", dfeRef: ["R3"] },
      { title: "Dividing a quantity in a given ratio", tier: "Both", dfeRef: ["R5"] },
      { title: "Part:part and part:whole ratio problems", tier: "Both", dfeRef: ["R5", "R8"] },
      { title: "Multiplicative relationships as ratios and fractions", tier: "Both", dfeRef: ["R6"] },
      { title: "Ratios, fractions and linear functions", tier: "Higher", dfeRef: ["R8"] },
    ],
  },
  {
    title: "Proportion",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Proportion as equality of ratios", tier: "Both", dfeRef: ["R7"] },
      { title: "Direct proportion", tier: "Both", dfeRef: ["R10", "R11"] },
      { title: "Inverse proportion", tier: "Both", dfeRef: ["R11"] },
      { title: "Direct and inverse proportion algebraically", tier: "Higher", dfeRef: ["R13"] },
      { title: "Proportion graphs", tier: "Higher", dfeRef: ["R11", "R13"] },
    ],
  },
  {
    title: "Percentages",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Percentages, fractions and decimals", tier: "Both", dfeRef: ["R9"] },
      { title: "Percentage of an amount", tier: "Both", dfeRef: ["R9"] },
      { title: "Percentage change, increase and decrease", tier: "Both", dfeRef: ["R9"] },
      { title: "Reverse percentages (original value)", tier: "Both", dfeRef: ["R9"] },
      { title: "Simple interest", tier: "Both", dfeRef: ["R9"] },
      { title: "Compound interest and repeated percentage change", tier: "Both", dfeRef: ["R16"] },
      { title: "Growth and decay problems", tier: "Higher", dfeRef: ["R16"] },
    ],
  },
  {
    title: "Financial Mathematics (Wales)",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Wages, salaries and payslips (Wales)", tier: "Both", dfeRef: ["R9"], boards: ["WJEC"], notes: "WJEC-Wales financial-maths emphasis." },
      { title: "Income tax and National Insurance (Wales)", tier: "Both", dfeRef: ["R9"], boards: ["WJEC"], notes: "WJEC-Wales financial-maths emphasis." },
      { title: "Currency conversion and exchange rates (Wales)", tier: "Both", dfeRef: ["R1", "R9"], boards: ["WJEC"], notes: "WJEC-Wales financial-maths emphasis." },
      { title: "Household bills and budgeting (Wales)", tier: "Both", dfeRef: ["R9"], boards: ["WJEC"], notes: "WJEC-Wales financial-maths emphasis." },
    ],
  },
  {
    title: "Compound Measures",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Speed, distance and time", tier: "Both", dfeRef: ["R11"] },
      { title: "Density, mass and volume", tier: "Both", dfeRef: ["R11"] },
      { title: "Pressure, force and area", tier: "Both", dfeRef: ["R11"] },
      { title: "Rates of pay and unit pricing (best buys)", tier: "Both", dfeRef: ["R1"] },
    ],
  },
  {
    title: "Rates of Change",
    strand: "Ratio, Proportion & Rates of Change",
    subtopics: [
      { title: "Gradient of a straight-line graph as a rate of change", tier: "Both", dfeRef: ["R14"] },
      { title: "Instantaneous and average rates of change", tier: "Higher", dfeRef: ["R15"] },
      { title: "Distance–time and velocity–time graphs", tier: "Higher", dfeRef: ["R15"] },
    ],
  },

  /* ──────────────────── GEOMETRY & MEASURES ──────────────────── */
  {
    title: "Angles",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Angle notation and conventions", tier: "Both", dfeRef: ["G1"] },
      { title: "Angles at a point and on a straight line", tier: "Both", dfeRef: ["G3"] },
      { title: "Vertically opposite angles", tier: "Both", dfeRef: ["G3"] },
      { title: "Angles in parallel lines", tier: "Both", dfeRef: ["G3"] },
      { title: "Angles in triangles", tier: "Both", dfeRef: ["G3"] },
      { title: "Angles in quadrilaterals", tier: "Both", dfeRef: ["G4"] },
      { title: "Interior and exterior angles of polygons", tier: "Both", dfeRef: ["G3"] },
    ],
  },
  {
    title: "Properties of Shapes",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Properties of triangles", tier: "Both", dfeRef: ["G4"] },
      { title: "Properties of quadrilaterals", tier: "Both", dfeRef: ["G4"] },
      { title: "Properties of polygons", tier: "Both", dfeRef: ["G4"] },
    ],
  },
  {
    title: "Congruence & Similarity",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Congruent triangles (SSS, SAS, ASA, RHS)", tier: "Both", dfeRef: ["G5"] },
      { title: "Geometric proof using congruence", tier: "Higher", dfeRef: ["G6"] },
      { title: "Similar shapes and length scale factors", tier: "Both", dfeRef: ["G19"] },
      { title: "Area and volume scale factors in similar figures", tier: "Higher", dfeRef: ["G19"] },
    ],
  },
  {
    title: "Constructions & Loci",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Ruler and compass constructions", tier: "Both", dfeRef: ["G2"] },
      { title: "Loci and regions", tier: "Both", dfeRef: ["G2"] },
    ],
  },
  {
    title: "Transformations",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Reflection", tier: "Both", dfeRef: ["G7", "G8"] },
      { title: "Rotation", tier: "Both", dfeRef: ["G7", "G8"] },
      { title: "Translation", tier: "Both", dfeRef: ["G7", "G8", "G24"] },
      { title: "Enlargement with positive and fractional scale factors", tier: "Both", dfeRef: ["G7"] },
      { title: "Enlargement with negative scale factors", tier: "Higher", dfeRef: ["G7"] },
      { title: "Combinations of transformations and invariance", tier: "Higher", dfeRef: ["G8"] },
    ],
  },
  {
    title: "Pythagoras & Trigonometry",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Pythagoras' theorem", tier: "Both", dfeRef: ["G20"] },
      { title: "Trigonometric ratios in right-angled triangles", tier: "Both", dfeRef: ["G20"] },
      { title: "Exact trigonometric values", tier: "Higher", dfeRef: ["G21"] },
      { title: "The sine rule", tier: "Higher", dfeRef: ["G22"] },
      { title: "The cosine rule", tier: "Higher", dfeRef: ["G22"] },
      { title: "Area of a triangle using ½ab sin C", tier: "Higher", dfeRef: ["G23"] },
      { title: "Pythagoras and trigonometry in 3D", tier: "Higher", dfeRef: ["G20"] },
    ],
  },
  {
    title: "Circles",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Circle definitions and parts", tier: "Both", dfeRef: ["G9"] },
      { title: "Circumference of a circle", tier: "Both", dfeRef: ["G17"] },
      { title: "Area of a circle", tier: "Both", dfeRef: ["G17"] },
      { title: "Arc lengths and areas of sectors", tier: "Both", dfeRef: ["G18"] },
      { title: "Circle theorems", tier: "Higher", dfeRef: ["G10"] },
      { title: "Proving the circle theorems", tier: "Higher", dfeRef: ["G10"] },
    ],
  },
  {
    title: "Mensuration: Area & Volume",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Area of rectangles, triangles, parallelograms and trapezia", tier: "Both", dfeRef: ["G16"] },
      { title: "Perimeter and area of composite shapes", tier: "Both", dfeRef: ["G16", "G17"] },
      { title: "Volume of prisms and cylinders", tier: "Both", dfeRef: ["G16"] },
      { title: "Surface area of prisms and cylinders", tier: "Both", dfeRef: ["G17"] },
      { title: "Volume and surface area of spheres, cones and pyramids", tier: "Both", dfeRef: ["G17"] },
      { title: "Plans and elevations", tier: "Both", dfeRef: ["G13"] },
      { title: "Properties of 3D solids", tier: "Both", dfeRef: ["G12"] },
    ],
  },
  {
    title: "Measures",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Standard units of measure", tier: "Both", dfeRef: ["G14"] },
      { title: "Measuring lines and angles; scale drawings", tier: "Both", dfeRef: ["G15"] },
      { title: "Bearings", tier: "Both", dfeRef: ["G15"] },
    ],
  },
  {
    title: "Vectors",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Vectors as translations; column vectors", tier: "Both", dfeRef: ["G24"] },
      { title: "Vector arithmetic", tier: "Both", dfeRef: ["G25"] },
      { title: "Vector geometry proofs", tier: "Higher", dfeRef: ["G25"] },
    ],
  },
  {
    title: "Coordinate Geometry",
    strand: "Geometry & Measures",
    subtopics: [
      { title: "Geometric problems on coordinate axes", tier: "Both", dfeRef: ["G11"] },
    ],
  },

  /* ───────────────────────── PROBABILITY ───────────────────────── */
  {
    title: "Basic Probability",
    strand: "Probability",
    subtopics: [
      { title: "Probability scale and language", tier: "Both", dfeRef: ["P3"] },
      { title: "Calculating theoretical probability", tier: "Both", dfeRef: ["P7"] },
      { title: "Experimental probability and relative frequency", tier: "Both", dfeRef: ["P1", "P5"] },
      { title: "Expected outcomes", tier: "Both", dfeRef: ["P2"] },
      { title: "Mutually exclusive and exhaustive events", tier: "Both", dfeRef: ["P4"] },
    ],
  },
  {
    title: "Recording Outcomes",
    strand: "Probability",
    subtopics: [
      { title: "Frequency tables and frequency trees", tier: "Both", dfeRef: ["P1"] },
      { title: "Sample space diagrams", tier: "Both", dfeRef: ["P7"] },
      { title: "Sets, Venn diagrams and set notation", tier: "Both", dfeRef: ["P6"] },
    ],
  },
  {
    title: "Combined Events",
    strand: "Probability",
    subtopics: [
      { title: "Tree diagrams", tier: "Both", dfeRef: ["P8"] },
      { title: "Independent and dependent events", tier: "Higher", dfeRef: ["P8"] },
      { title: "Conditional probability", tier: "Higher", dfeRef: ["P9"] },
    ],
  },

  /* ───────────────────────── STATISTICS ───────────────────────── */
  {
    title: "Sampling",
    strand: "Statistics",
    subtopics: [
      { title: "Populations and sampling", tier: "Both", dfeRef: ["S1"] },
      { title: "Sampling methods and bias", tier: "Higher", dfeRef: ["S1"] },
      { title: "Designing questionnaires and data collection (Wales)", tier: "Both", dfeRef: ["S1"], boards: ["WJEC"], notes: "WJEC-Wales data-collection emphasis." },
    ],
  },
  {
    title: "Representing Data",
    strand: "Statistics",
    subtopics: [
      { title: "Frequency tables and tally charts", tier: "Both", dfeRef: ["S2"] },
      { title: "Pictograms", tier: "Both", dfeRef: ["S2"] },
      { title: "Bar charts", tier: "Both", dfeRef: ["S2"] },
      { title: "Pie charts", tier: "Both", dfeRef: ["S2"] },
      { title: "Vertical line charts", tier: "Both", dfeRef: ["S2"] },
      { title: "Stem-and-leaf diagrams", tier: "Both", dfeRef: ["S2"], notes: "Board-dependent: examined by some boards (e.g. WJEC/Eduqas) but not all." },
      { title: "Time series and line graphs", tier: "Both", dfeRef: ["S2"] },
      { title: "Two-way tables", tier: "Both", dfeRef: ["S2"] },
      { title: "Histograms with unequal class widths", tier: "Higher", dfeRef: ["S3"] },
      { title: "Cumulative frequency graphs", tier: "Higher", dfeRef: ["S3"] },
      { title: "Box plots", tier: "Higher", dfeRef: ["S4"] },
    ],
  },
  {
    title: "Averages & Spread",
    strand: "Statistics",
    subtopics: [
      { title: "Mean, median and mode", tier: "Both", dfeRef: ["S4"] },
      { title: "Averages from frequency tables", tier: "Both", dfeRef: ["S4"] },
      { title: "Range and outliers", tier: "Both", dfeRef: ["S4"] },
      { title: "Quartiles and the interquartile range", tier: "Higher", dfeRef: ["S4"] },
      { title: "Comparing distributions", tier: "Both", dfeRef: ["S4", "S5"] },
    ],
  },
  {
    title: "Correlation",
    strand: "Statistics",
    subtopics: [
      { title: "Scatter graphs and correlation", tier: "Both", dfeRef: ["S6"] },
      { title: "Lines of best fit; interpolation and extrapolation", tier: "Both", dfeRef: ["S6"] },
    ],
  },
];
