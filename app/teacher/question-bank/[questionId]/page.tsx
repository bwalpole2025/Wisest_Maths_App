import { QuestionForm } from "@/components/questions/QuestionForm";

export default function EditQuestionPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Edit Question</h1>
      <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
        <QuestionForm />
      </div>
    </div>
  );
}
