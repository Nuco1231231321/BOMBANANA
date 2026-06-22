import { type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CardAccent = "cream" | "mint" | "teal" | "blush" | "yellow";

const accentStyles: Record<CardAccent, string> = {
  cream: "bg-[var(--color-cream-paper)] border border-[var(--color-pencil-gray)]",
  mint: "bg-[var(--color-sticky-note-mint)]",
  teal: "bg-[var(--color-sticky-note-teal)]",
  blush: "bg-[var(--color-sticky-note-blush)]",
  yellow: "bg-[var(--color-banana-yellow)]",
};

interface CardProps {
  children: ReactNode;
  accent?: CardAccent;
  className?: string;
  bordered?: boolean;
  as?: "div" | "article";
}

export function Card({
  children,
  accent = "cream",
  className,
  bordered = false,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl p-6 transition-all duration-200",
        accentStyles[accent],
        bordered && "border border-[var(--color-forest-ink)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// ── Link Card (clickable card) ──
interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  accent?: CardAccent;
  icon?: ReactNode;
  className?: string;
}

export function LinkCard({
  title,
  description,
  href,
  accent = "cream",
  icon,
  className,
}: LinkCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "guide-card group relative block min-h-[184px] overflow-hidden rounded-lg p-5 no-underline transition-all duration-300 sm:p-6",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
        accentStyles[accent],
        borderedStyles(accent),
        className
      )}
    >
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="min-w-0">
          <div className="mb-4 flex items-start justify-between gap-4">
            {icon && (
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)] shadow-[var(--shadow-subtle)]">
                {icon}
              </span>
            )}
            <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 -translate-x-2 text-[var(--color-forest-ink)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
          <h3 className="text-xl font-bold leading-tight text-[var(--color-forest-ink)]">
            {title}
          </h3>
          {description && (
            <p className="guide-card-description mt-3 text-sm leading-relaxed text-[var(--color-forest-ink)] opacity-70">
              {description}
            </p>
          )}
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest-ink)] opacity-60">
          Open guide
        </span>
      </div>
    </Link>
  );
}

function borderedStyles(accent: CardAccent): string {
  if (accent === "cream") return "border border-[var(--color-pencil-gray)]";
  return "";
}
