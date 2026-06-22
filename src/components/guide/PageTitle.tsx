/**
 * PageTitle — SEO-critical H1 with optional highlighter word.
 * Every guide page must render exactly one H1 containing the primary keyword.
 */
import { type ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
  highlight?: string;
}

export function PageTitle({ children, highlight }: PageTitleProps) {
  if (highlight) {
    // Split on the highlight word and wrap it
    const text = String(children);
    const parts = text.split(highlight);
    return (
      <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mb-6 text-balance">
        {parts[0]}
        <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">{highlight}</span>
        {parts[1]}
      </h1>
    );
  }

  return (
    <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mb-6 text-balance">
      {children}
    </h1>
  );
}
