import Link from "next/link";
import type { Topic } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/student/topics/${topic.id}`}
      className="group flex flex-col rounded-lg border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between">
        <Badge variant="secondary" className="bg-accent/10 text-accent font-mono">
          {topic.ref}
        </Badge>
        <span className="text-xs text-muted-foreground">
          Year {topic.module}
        </span>
      </div>
      <h3 className="text-sm font-bold text-foreground group-hover:text-accent">
        {topic.title}
      </h3>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
        {topic.learningOutcome}
      </p>
      <div className="mt-4 flex items-center gap-3 border-t border-border pt-3 text-xs text-muted-foreground">
        <span>{topic.subcategory}</span>
        <span className="text-border">·</span>
        <span>{Math.round(topic.duration / 60)} min</span>
      </div>
    </Link>
  );
}
