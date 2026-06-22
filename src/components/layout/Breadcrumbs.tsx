import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link href="/" className="text-[var(--color-forest-ink)] opacity-40 hover:opacity-70 transition-opacity flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-forest-ink)] opacity-20" />
            {item.href ? (
              <Link href={item.href} className="text-[var(--color-forest-ink)] opacity-40 hover:opacity-70 transition-opacity">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-forest-ink)] opacity-80 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
