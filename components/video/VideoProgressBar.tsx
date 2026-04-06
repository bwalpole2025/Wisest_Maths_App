"use client";

import { Progress } from "@/components/ui/progress";

export function VideoProgressBar({ watched, total }: { watched: number; total: number }) {
  const pct = total > 0 ? Math.round((watched / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <Progress value={pct} className="h-2 flex-1" />
      <span className="text-xs font-medium text-muted-foreground">
        {watched}/{total} watched
      </span>
    </div>
  );
}
