import type { Board, Strand, Topic } from "@/lib/types";
import { gcseManifest } from "./manifest";

/**
 * Pure builder: flattens the GCSE manifest (Strand → Topic → Subtopic) into the
 * shared `Topic[]` leaf shape used across the app.
 *
 *   category    = strand
 *   subcategory = topic title
 *   title       = subtopic title
 *   ref / id    = deterministic short code "g" + strand-letter + zero-padded
 *                 running counter per strand (e.g. gn01, ga01, gr01, gg01,
 *                 gp01, gs01). Stable while the manifest order is frozen.
 *
 * GCSE-only metadata (tier/dfeRef/notes) is carried through; `boards` defaults
 * to all five awarding bodies unless the subtopic names a subset (Wales-only).
 */

const ALL_BOARDS: Board[] = ["AQA", "Edexcel", "OCR", "Eduqas", "WJEC"];

const STRAND_LETTER: Record<Strand, string> = {
  Number: "n",
  Algebra: "a",
  "Ratio, Proportion & Rates of Change": "r",
  "Geometry & Measures": "g",
  Probability: "p",
  Statistics: "s",
};

function zeroPad2(n: number): string {
  return String(n).padStart(2, "0");
}

function buildGcseTopics(): Topic[] {
  const counters: Partial<Record<Strand, number>> = {};
  const out: Topic[] = [];

  for (const topic of gcseManifest) {
    for (const sub of topic.subtopics) {
      const n = (counters[topic.strand] ?? 0) + 1;
      counters[topic.strand] = n;
      const ref = `g${STRAND_LETTER[topic.strand]}${zeroPad2(n)}`;

      out.push({
        id: `gcse-${ref}`,
        ref,
        title: sub.title,
        category: topic.strand,
        subcategory: topic.title,
        module: 1,
        videoUrl: "",
        videoTitle: "",
        duration: 300,
        learningOutcome: "",
        course: "gcse-maths",
        tier: sub.tier,
        dfeRef: sub.dfeRef,
        boards: sub.boards ?? ALL_BOARDS,
        notes: sub.notes,
      });
    }
  }

  return out;
}

export const gcseTopics: Topic[] = buildGcseTopics();
