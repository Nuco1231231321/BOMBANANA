interface ArticleImageProps { src: string; alt: string; caption: string }
interface VideoEmbedProps { videoId: string; title: string; caption?: string }

/**
 * ArticleImage — Bordered image with caption.
 * Matches reference project's ArticleImage component.
 */
export function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
      <div className="relative aspect-video bg-[var(--color-surface-dark)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <figcaption className="border-t border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-4 py-3 text-xs leading-relaxed text-[var(--color-forest-ink)]/50">{caption}</figcaption>
    </figure>
  );
}

/**
 * VideoEmbed — YouTube embed with caption.
 */
export function VideoEmbed({ videoId, title, caption }: VideoEmbedProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
      <div className="relative aspect-video bg-[var(--color-surface-dark)]">
        <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube.com/embed/${videoId}?rel=0`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" />
      </div>
      {caption && (
        <figcaption className="border-t border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-4 py-3 text-xs leading-relaxed text-[var(--color-forest-ink)]/50">
          {caption}{" "}
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="font-medium text-[var(--color-forest-ink)] underline decoration-[var(--color-pencil-gray)] hover:decoration-[var(--color-banana-yellow)]">Watch on YouTube</a>
        </figcaption>
      )}
    </figure>
  );
}
