"use client";

import { QuizBuilder } from "@/components/teacher/QuizBuilder";

export default function QuizBuilderPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Quiz Builder</h1>
        <p className="text-sm text-muted-foreground">
          Generate a student quiz from the question bank by topic and difficulty.
        </p>
      </div>
      <QuizBuilder />
    </div>
  );
}
