import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TaglineBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

/**
 * Eyebrow label / tagline badge — follows design.md spec.
 * Inline-flex pill with highlighter yellow background.
 */
export function TaglineBadge({ children, icon, className }: TaglineBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        "py-1 px-2.5",
        "bg-[var(--color-banana-yellow)]",
        "text-[var(--color-forest-ink)]",
        "text-xs font-medium font-inter",
        "rounded-md",
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

// ── Highlighted Word ──
interface HighlightedWordProps {
  children: ReactNode;
  className?: string;
}

/**
 * Text highlight wash — banana yellow background behind inline text.
 * Used within display headlines for editorial emphasis (marker-pen effect).
 */
export function HighlightedWord({ children, className }: HighlightedWordProps) {
  return (
    <span
      className={cn(
        "bg-[var(--color-banana-yellow)] px-1.5 py-0.5 -mx-0.5",
        "rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
