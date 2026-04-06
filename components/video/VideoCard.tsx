import type { Video } from "@/lib/types";

export function VideoCard({ video }: { video: Video }) {
  return (
    <div className="group cursor-pointer rounded-lg border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex aspect-video items-center justify-center rounded-md bg-muted text-2xl text-muted-foreground">
        ▶
      </div>
      <h4 className="text-sm font-semibold text-foreground group-hover:text-accent">
        {video.title}
      </h4>
      <p className="mt-1 text-xs text-muted-foreground">
        {video.durationMinutes} min
      </p>
    </div>
  );
}
