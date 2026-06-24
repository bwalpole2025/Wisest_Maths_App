import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Trigonometric Graphs
 * Ref:   t3
 */
export const lesson: Lesson = {
  topicRef: "t3",
  title: "Trigonometric Graphs",
  intro:
    "The shapes of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\) repeat forever in a fixed pattern. Once you know one period, transformations let you read off any stretched or shifted version at a glance.",
  cards: [
    {
      id: "t3-c1",
      title: "Period and amplitude of \\(\\sin\\) and \\(\\cos\\)",
      concept:
        "The graphs \\(y = \\sin x\\) and \\(y = \\cos x\\) both repeat every \\(360^\\circ\\) (their period) and oscillate between \\(-1\\) and \\(1\\), so their amplitude is \\(1\\). The difference is the start: \\(\\sin 0^\\circ = 0\\) but \\(\\cos 0^\\circ = 1\\).",
      miniQuestion: {
        prompt:
          "What is the period of \\(y = \\cos x\\) in degrees?",
        expectedAnswer: "360",
        options: ["90", "180", "360", "720"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(\\cos x\\) completes one full wave every \\(360^\\circ\\), then repeats identically. Period is the horizontal length of one complete cycle.",
        hints: [
          "How far along \\(x\\) before the curve repeats its shape?",
          "Both \\(\\sin\\) and \\(\\cos\\) share the same period.",
        ],
      },
    },
    {
      id: "t3-c2",
      title: "The tangent graph",
      concept:
        "\\(y = \\tan x\\) is different: it has period \\(180^\\circ\\) and no maximum or minimum. Instead it shoots off to \\(\\pm\\infty\\) at vertical asymptotes where \\(\\cos x = 0\\) — at \\(x = 90^\\circ\\) and \\(x = 270^\\circ\\) within \\(0^\\circ\\) to \\(360^\\circ\\).",
      miniQuestion: {
        prompt:
          "What is the period of \\(y = \\tan x\\) in degrees?",
        expectedAnswer: "180",
        options: ["90", "180", "270", "360"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Tangent repeats every \\(180^\\circ\\), half the period of sine and cosine, which is why it has twice as many asymptotes over the same interval.",
        hints: [
          "Tangent repeats more often than sine.",
          "It is half of \\(360^\\circ\\).",
        ],
      },
    },
    {
      id: "t3-c3",
      title: "Vertical translations",
      concept:
        "Adding a constant shifts the whole curve up or down: \\(y = \\sin x + c\\) is \\(y = \\sin x\\) translated \\(c\\) units in the \\(y\\)-direction. The amplitude is unchanged, but the maximum and minimum both move by \\(c\\).",
      miniQuestion: {
        prompt:
          "What is the maximum value of \\(y = \\sin x + 2\\)?",
        expectedAnswer: "3",
        options: ["1", "2", "3", "-1"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "The peak of \\(\\sin x\\) is \\(1\\); adding \\(2\\) lifts it to \\(1 + 2 = 3\\). A vertical shift moves every point, including the maximum, by the same amount.",
        hints: [
          "The maximum of \\(\\sin x\\) alone is \\(1\\).",
          "Add the translation \\(+2\\).",
        ],
      },
    },
    {
      id: "t3-c4",
      title: "Horizontal translations (phase shift)",
      concept:
        "\\(y = \\sin(x - a)\\) shifts the graph \\(a\\) to the right, and \\(y = \\sin(x + a)\\) shifts it \\(a\\) to the left — the sign inside the bracket is opposite to the direction of motion. Every feature, including the \\(x\\)-intercepts, moves with it.",
      miniQuestion: {
        prompt:
          "In which direction, and by how many degrees, does \\(y = \\sin(x - 30^\\circ)\\) shift the graph of \\(y = \\sin x\\)?",
        expectedAnswer: "30 degrees to the right",
        options: [
          "30 degrees to the left",
          "30 degrees to the right",
          "30 degrees down",
          "30 degrees up",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The \\(-30^\\circ\\) inside the bracket moves the curve \\(30^\\circ\\) to the right: a value that arrived at \\(x = 0\\) now arrives at \\(x = 30^\\circ\\). Inside-the-bracket signs act in reverse.",
        hints: [
          "A minus inside the bracket moves which way?",
          "Inside-bracket changes act opposite to their sign.",
        ],
      },
    },
    {
      id: "t3-c5",
      title: "Stretches and range",
      concept:
        "A coefficient in front, like \\(y = a\\sin x\\), stretches vertically so the amplitude becomes \\(a\\). A coefficient on \\(x\\), like \\(y = \\sin(bx)\\), squeezes horizontally so the period becomes \\(\\dfrac{360^\\circ}{b}\\). Combining these with a shift sets the full range.",
      miniQuestion: {
        prompt:
          "What is the period of \\(y = \\sin(3x)\\) in degrees?",
        expectedAnswer: "120",
        options: ["1080", "360", "120", "180"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Period \\(= \\dfrac{360^\\circ}{3} = 120^\\circ\\). A factor of \\(3\\) inside the function fits three full waves where there used to be one.",
        hints: [
          "Period of \\(\\sin(bx)\\) is \\(\\dfrac{360^\\circ}{b}\\).",
          "Here \\(b = 3\\).",
        ],
      },
    },
  ],
};
