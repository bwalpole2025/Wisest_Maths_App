"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface QuestionFormProps {
  onSave?: () => void;
}

export function QuestionForm({ onSave }: QuestionFormProps) {
  const [latex, setLatex] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <Label>Topic Reference</Label>
        <Input placeholder="e.g. c5, Ma2, t6" className="mt-1.5" />
      </div>

      <div>
        <Label>Topic Title</Label>
        <Input placeholder="e.g. Differentiating kx\u207f" className="mt-1.5" />
      </div>

      <div>
        <Label>Question Text (LaTeX)</Label>
        <Textarea
          rows={4}
          value={latex}
          onChange={(e) => setLatex(e.target.value)}
          className="mt-1.5 font-mono"
          placeholder="e.g. Find the stationary points of \\(y = 2x^3\\)..."
        />
        {latex && (
          <div className="mt-2 rounded border border-border bg-muted/50 p-3">
            <p className="mb-1 text-xs font-semibold text-muted-foreground">
              Preview
            </p>
            <BlockMath math={latex} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Difficulty</Label>
          <select className="mt-1.5 w-full rounded-md border border-input px-3 py-2 text-sm">
            <option>Foundation</option>
            <option>Standard</option>
            <option>Challenge</option>
          </select>
        </div>
        <div>
          <Label>Marks</Label>
          <Input type="number" min={1} max={20} defaultValue={3} className="mt-1.5" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="exam-style" className="rounded" />
        <Label htmlFor="exam-style">Exam style question</Label>
      </div>

      <div>
        <Label>Tags (comma-separated)</Label>
        <Input placeholder="e.g. differentiation, stationary-points" className="mt-1.5" />
      </div>

      <button
        onClick={onSave}
        className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
      >
        Save Question
      </button>
    </div>
  );
}
