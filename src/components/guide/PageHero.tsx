/**
 * PageHero — Full-width hero image for guide pages.
 * Matches reference project's PageHero pattern, adapted to BOMBANANA! design.
 */
export function PageHero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[var(--color-surface-dark)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="eager" />
    </div>
  );
}
