import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, AlertTriangle, CheckCircle, Info, ArrowRight } from "lucide-react";

/* ── Image Block ── */
export function ImageBlock({ src, alt, caption, className }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={cn("my-8", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full rounded-xl border border-[var(--color-pencil-gray)]" loading="lazy" />
      {caption && <figcaption className="mt-2 text-sm text-center text-[var(--color-forest-ink)] opacity-50 italic">{caption}</figcaption>}
    </figure>
  );
}

/* ── Tip Box ── */
export function TipBox({ children, title = "Pro Tip" }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-xl bg-[var(--color-banana-yellow)]/20 border border-[var(--color-banana-yellow)] p-5">
      <div className="flex items-center gap-2 mb-2"><Lightbulb className="w-5 h-5 text-[var(--color-forest-ink)]" /><strong className="text-[var(--color-forest-ink)] text-sm">{title}</strong></div>
      <div className="text-sm text-[var(--color-forest-ink)] opacity-70 leading-relaxed">{children}</div>
    </div>
  );
}

/* ── Warning Box ── */
export function WarningBox({ children, title = "Warning" }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-xl bg-[var(--color-bomb-red)]/10 border border-[var(--color-bomb-red)]/30 p-5">
      <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5 text-[var(--color-bomb-red)]" /><strong className="text-[var(--color-bomb-red)] text-sm">{title}</strong></div>
      <div className="text-sm text-[var(--color-forest-ink)] opacity-70 leading-relaxed">{children}</div>
    </div>
  );
}

/* ── Success / Check Box ── */
export function SuccessBox({ children, title = "Best Practice" }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-xl bg-[var(--color-sticky-note-mint)]/60 border border-[var(--color-sticky-note-mint)] p-5">
      <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-5 h-5 text-[var(--color-forest-ink)]" /><strong className="text-[var(--color-forest-ink)] text-sm">{title}</strong></div>
      <div className="text-sm text-[var(--color-forest-ink)] opacity-70 leading-relaxed">{children}</div>
    </div>
  );
}

/* ── Info Box ── */
export function InfoBox({ children, title = "Note" }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-xl bg-[var(--color-sticky-note-teal)]/40 border border-[var(--color-sticky-note-teal)] p-5">
      <div className="flex items-center gap-2 mb-2"><Info className="w-5 h-5 text-[var(--color-forest-ink)]" /><strong className="text-[var(--color-forest-ink)] text-sm">{title}</strong></div>
      <div className="text-sm text-[var(--color-forest-ink)] opacity-70 leading-relaxed">{children}</div>
    </div>
  );
}

/* ── Section Heading ── */
export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold leading-tight text-[var(--color-forest-ink)] mt-10 mb-4">{children}</h2>;
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mt-6 mb-2">{children}</h3>;
}

/* ── Body Text ── */
export function Para({ children }: { children: ReactNode }) {
  return <p className="text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-4">{children}</p>;
}

/* ── Inline List ── */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
      {items.map((item, i) => <li key={i} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-forest-ink)] opacity-30 flex-shrink-0" />{item}</li>)}
    </ul>
  );
}

/* ── Numbered List ── */
export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3 text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6 ml-1">
      {items.map((item, i) => <li key={i} className="flex gap-3"><span className="font-bold text-[var(--color-forest-ink)] opacity-40 min-w-[1.5rem]">{i + 1}.</span><span>{item}</span></li>)}
    </ol>
  );
}

/* ── Comparison Table ── */
export function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>{headers.map((h, i) => <th key={i} className="bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)] px-4 py-2 text-left font-semibold first:rounded-tl-lg last:rounded-tr-lg">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-banana-yellow)]/5" : ""}>
              {row.map((cell, ci) => <td key={ci} className="px-4 py-2.5 border-b border-[var(--color-whisper-gray)] text-[var(--color-forest-ink)] opacity-70">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── CTA Link ── */
export function CTALink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-terracotta)] hover:text-[var(--color-forest-ink)] transition-colors">
      {children} <ArrowRight className="w-3.5 h-3.5" />
    </a>
  );
}
