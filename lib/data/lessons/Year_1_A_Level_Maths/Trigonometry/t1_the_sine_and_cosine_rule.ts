import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: The Sine and Cosine Rules
 * Ref:   t1
 */
export const lesson: Lesson = {
  topicRef: "t1",
  title: "The Sine and Cosine Rules",
  intro:
    "Right-angled triangle trig only works on right-angled triangles. The sine and cosine rules unlock every other triangle — the whole skill is choosing the right one for what you're given.",
  cards: [
    {
      id: "t1-c1",
      title: "Sides and their opposite angles",
      concept:
        "In any triangle we label sides with lower-case letters and angles with capitals, where side \\(a\\) sits opposite angle \\(A\\), side \\(b\\) opposite \\(B\\), and \\(c\\) opposite \\(C\\). Getting this pairing right is what makes both rules work, because each rule links a side to the angle facing it across the triangle.",
      miniQuestion: {
        prompt:
          "In triangle \\(ABC\\), which angle is opposite the side \\(c\\)?",
        expectedAnswer: "C",
        options: ["A", "B", "C", "c"],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Side \\(c\\) joins vertices \\(A\\) and \\(B\\), so the angle facing it from the far vertex is \\(C\\). A side and its opposite angle never share a vertex.",
        hints: [
          "The side \\(c\\) runs between which two vertices?",
          "The opposite angle is at the third, remaining vertex.",
        ],
      },
    },
    {
      id: "t1-c2",
      title: "The sine rule",
      concept:
        "When you know a side and the angle opposite it, the sine rule \\(\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}\\) lets you find another side or angle. Use it whenever you have a matching side-angle pair plus one more piece of information.",
      miniQuestion: {
        prompt:
          "In a triangle, \\(A = 90^\\circ\\), \\(B = 30^\\circ\\) and \\(b = 10\\). Using \\(\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}\\), find \\(a\\).",
        expectedAnswer: "20",
        options: ["5", "10", "20", "17.3"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(a = \\dfrac{b\\sin A}{\\sin B} = \\dfrac{10\\sin 90^\\circ}{\\sin 30^\\circ} = \\dfrac{10}{0.5} = 20\\). The sine rule pairs each side with its own opposite angle.",
        hints: [
          "Rearrange to \\(a = \\dfrac{b\\sin A}{\\sin B}\\).",
          "\\(\\sin 90^\\circ = 1\\) and \\(\\sin 30^\\circ = 0.5\\).",
        ],
      },
    },
    {
      id: "t1-c3",
      title: "The cosine rule — finding a side",
      concept:
        "If you have two sides and the angle between them (SAS), no side-angle pair is complete, so the sine rule can't start. Instead use the cosine rule \\(a^2 = b^2 + c^2 - 2bc\\cos A\\), where \\(A\\) is the angle between the two known sides \\(b\\) and \\(c\\).",
      miniQuestion: {
        prompt:
          "Two sides of length \\(4\\) and \\(5\\) meet at an angle of \\(60^\\circ\\). Find \\(a^2\\), the square of the side opposite that angle, using \\(a^2 = b^2 + c^2 - 2bc\\cos A\\).",
        expectedAnswer: "21",
        options: ["61", "41", "21", "31"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(a^2 = 4^2 + 5^2 - 2(4)(5)\\cos 60^\\circ = 16 + 25 - 40(0.5) = 41 - 20 = 21\\). The \\(-2bc\\cos A\\) term corrects Pythagoras for the angle not being \\(90^\\circ\\).",
        hints: [
          "Substitute \\(b = 4\\), \\(c = 5\\), \\(A = 60^\\circ\\).",
          "\\(\\cos 60^\\circ = 0.5\\), so the last term is \\(2(4)(5)(0.5) = 20\\).",
        ],
      },
    },
    {
      id: "t1-c4",
      title: "The cosine rule — finding an angle",
      concept:
        "Given all three sides (SSS), rearrange the cosine rule for the angle: \\(\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}\\). If the result is negative the angle is obtuse — a built-in check that the largest angle faces the longest side.",
      miniQuestion: {
        prompt:
          "A triangle has sides \\(a = 7\\), \\(b = 5\\), \\(c = 6\\). Compute \\(\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}\\) as a decimal.",
        expectedAnswer: "0.2",
        options: ["0.2", "-0.2", "0.1", "0.5"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "\\(\\cos A = \\dfrac{25 + 36 - 49}{2(5)(6)} = \\dfrac{12}{60} = 0.2\\), giving \\(A \\approx 78.5^\\circ\\). Because \\(\\cos A > 0\\), \\(A\\) is acute.",
        hints: [
          "Numerator: \\(5^2 + 6^2 - 7^2\\).",
          "Denominator: \\(2 \\times 5 \\times 6 = 60\\).",
        ],
      },
    },
    {
      id: "t1-c5",
      title: "Area with \\(\\tfrac{1}{2}ab\\sin C\\)",
      concept:
        "Two sides and the included angle also give the area directly: \\(\\text{Area} = \\tfrac{1}{2}ab\\sin C\\), where \\(C\\) is the angle between sides \\(a\\) and \\(b\\). No need for a perpendicular height.",
      miniQuestion: {
        prompt:
          "Find the area of a triangle with two sides \\(8\\) and \\(5\\) enclosing an angle of \\(30^\\circ\\).",
        expectedAnswer: "10",
        options: ["20", "10", "17.3", "34.6"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(\\text{Area} = \\tfrac{1}{2}(8)(5)\\sin 30^\\circ = \\tfrac{1}{2}(40)(0.5) = 10\\). The angle must be the one between the two sides for this formula to apply.",
        hints: [
          "\\(\\sin 30^\\circ = 0.5\\).",
          "Area \\(= \\tfrac{1}{2} \\times 8 \\times 5 \\times 0.5\\).",
        ],
      },
    },
  ],
};
