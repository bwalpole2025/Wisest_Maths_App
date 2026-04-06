"use client";

import { useState, useCallback } from "react";
import type { Question, AssessmentQuestion } from "@/lib/types";

interface AssessmentState {
  currentIndex: number;
  answers: AssessmentQuestion[];
  isComplete: boolean;
  goTo: (index: number) => void;
  submitAnswer: (answer: string, explanation: string) => void;
  score: number;
}

export function useAssessment(questions: Question[]): AssessmentState {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentQuestion[]>([]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < questions.length) setCurrentIndex(index);
  }, [questions.length]);

  const submitAnswer = useCallback(
    (answer: string, explanation: string) => {
      const q = questions[currentIndex];
      if (!q) return;

      const entry: AssessmentQuestion = {
        questionId: q.id,
        studentAnswer: answer,
        explanation,
        isCorrect: answer.trim().toLowerCase() === q.workedSolution.finalAnswer.trim().toLowerCase(),
        timeSpentSeconds: 0,
      };

      setAnswers((prev) => {
        const existing = prev.findIndex((a) => a.questionId === q.id);
        if (existing >= 0) {
          const copy = [...prev];
          copy[existing] = entry;
          return copy;
        }
        return [...prev, entry];
      });

      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    [questions, currentIndex]
  );

  const isComplete = answers.length === questions.length;
  const score = answers.filter((a) => a.isCorrect).length;

  return { currentIndex, answers, isComplete, goTo, submitAnswer, score };
}
