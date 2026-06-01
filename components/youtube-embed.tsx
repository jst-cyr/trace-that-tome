import { cn } from "@/lib/utils";

function getYouTubeVideoId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Support passing a bare video id.
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);

    // https://youtu.be/<id>
    if (url.hostname === "youtu.be") {
      const id = url.pathname.replace(/^\/+/, "").split("/")[0];
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    // https://www.youtube.com/watch?v=<id>
    const v = url.searchParams.get("v");
    if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;

    // https://www.youtube.com/embed/<id>
    const match = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

export function YouTubeEmbed({
  videoUrl,
  title = "YouTube video",
  className,
}: {
  videoUrl: string;
  title?: string;
  className?: string;
}) {
  const videoId = getYouTubeVideoId(videoUrl);
  const src = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
    : null;

  if (!src) {
    return (
      <div
        className={cn(
          "rounded-xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground",
          className,
        )}
      >
        Unable to load video. Please check the YouTube URL.
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
        <div className="w-full" style={{ paddingTop: "56.25%" }} />
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}

