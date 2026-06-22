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
        "group block rounded-xl p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
        accentStyles[accent],
        borderedStyles(accent),
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            {icon && (
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)]">
                {icon}
              </span>
            )}
            <h3 className="font-semibold text-[18px] text-[var(--color-forest-ink)] leading-snug">
              {title}
            </h3>
          </div>
          {description && (
            <p className="text-sm text-[var(--color-forest-ink)] opacity-70 leading-relaxed mt-1">
              {description}
            </p>
          )}
        </div>
        <ArrowRight className="w-5 h-5 text-[var(--color-forest-ink)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
}

function borderedStyles(accent: CardAccent): string {
  if (accent === "cream") return "border border-[var(--color-pencil-gray)]";
  return "";
}
