import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

/* ═══════════════════════════════════════
   BLUF Box — "Bottom Line Up Front"
   Key takeaway at the top of the page
   ═══════════════════════════════════════ */
interface BlufBoxProps { title?: string; children: ReactNode }
export function BlufBox({ title = "At a Glance", children }: BlufBoxProps) {
  return (
    <section className="my-8 rounded-xl border border-[var(--color-banana-yellow)] bg-[var(--color-banana-yellow)]/10 p-5">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)]">{title}</h2>
      <div className="text-sm leading-7 text-[var(--color-forest-ink)]/70 [&_strong]:text-[var(--color-forest-ink)]">{children}</div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Search Answer Panel — "Quick Answer" box
   ═══════════════════════════════════════ */
interface IntentRow { query: string; answer: string; href: string; label?: string }
interface JumpLink { href: string; label: string }
interface SearchAnswerPanelProps { title: string; answer: string; intentRows: IntentRow[]; jumpLinks: JumpLink[] }

export function SearchAnswerPanel({ title, answer, intentRows, jumpLinks }: SearchAnswerPanelProps) {
  return (
    <section className="my-8 overflow-hidden rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
      <div className="border-b border-[var(--color-pencil-gray)] p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">Quick Answer</p>
        <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.29px] text-[var(--color-forest-ink)]">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-forest-ink)]/60">{answer}</p>
      </div>
      <div className="grid gap-4 p-5 lg:grid-cols-[1fr_220px]">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[var(--color-forest-ink)]">What you probably searched for</h3>
          <div className="grid gap-3">
            {intentRows.map((row) => (
              <Link key={row.query} href={row.href as never} className="group rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-3 transition-colors hover:border-[var(--color-banana-yellow)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <p className="text-sm font-semibold text-[var(--color-forest-ink)]">{row.query}</p>
                  {row.label && <span className="inline-flex rounded-md bg-[var(--color-banana-yellow)]/40 px-2 py-0.5 text-xs font-medium text-[var(--color-forest-ink)] w-fit">{row.label}</span>}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-forest-ink)]/60">{row.answer}</p>
              </Link>
            ))}
          </div>
        </div>
        <nav aria-label="Page jump links" className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)] p-3">
          <h3 className="mb-3 text-sm font-semibold text-[var(--color-forest-ink)]">Jump to</h3>
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {jumpLinks.map((link) => (
              <Link key={link.href} href={link.href as never} className="rounded-md border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-3 py-1.5 text-sm text-[var(--color-forest-ink)]/60 hover:text-[var(--color-forest-ink)] hover:border-[var(--color-banana-yellow)] transition-colors">{link.label}</Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Status Panel — Key Facts grid
   ═══════════════════════════════════════ */
interface StatusItem { label: string; value: string; status: "verified" | "needs-check" | "working" }
interface StatusPanelProps { items: StatusItem[] }

const statusStyles = { verified: "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]", "needs-check": "bg-[var(--color-whisper-gray)] text-[var(--color-forest-ink)]", working: "bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)]" };
const statusLabels = { verified: "Confirmed", "needs-check": "Unconfirmed", working: "May Change" };

export function StatusPanel({ items }: StatusPanelProps) {
  return (
    <section className="my-8 rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-5">
      <h2 className="mb-4 text-xl font-bold tracking-[-0.22px] text-[var(--color-forest-ink)]">Key Facts</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)] p-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <dt className="text-xs text-[var(--color-forest-ink)]/60">{item.label}</dt>
              <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${statusStyles[item.status]}`}>{statusLabels[item.status]}</span>
            </div>
            <dd className="text-sm font-semibold leading-relaxed text-[var(--color-forest-ink)]">{item.value}</dd>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Action Table — Step-by-step guide
   ═══════════════════════════════════════ */
interface ActionRow { step: string; doThis: string; why: string }
interface ActionTableProps { rows: readonly ActionRow[] }

export function ActionTable({ rows }: ActionTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Step</th>
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Do This</th>
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.step} className="border-b border-[var(--color-pencil-gray)] last:border-0">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">{row.step}</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">{row.doThis}</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════
   Related Guides — Next steps
   ═══════════════════════════════════════ */
interface RelatedGuide { href: string; title: string; description: string }
interface RelatedGuidesProps { guides: RelatedGuide[] }

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  return (
    <section className="my-10 border-t border-[var(--color-pencil-gray)] pt-8">
      <h2 className="mb-4 text-xl font-bold tracking-[-0.22px] text-[var(--color-forest-ink)]">Continue Reading</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.href} href={guide.href as never} className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4 transition-colors hover:border-[var(--color-banana-yellow)]">
            <h3 className="text-sm font-semibold text-[var(--color-forest-ink)]">{guide.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-forest-ink)]/60">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Tip Box — Highlighted advice
   ═══════════════════════════════════════ */
export function TipBox({ children, title = "Pro Tip" }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-xl bg-[var(--color-sticky-note-mint)]/60 border border-[var(--color-sticky-note-mint)] p-5">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)]">💡 {title}</p>
      <div className="text-sm leading-relaxed text-[var(--color-forest-ink)]/70">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════
   Warning Box
   ═══════════════════════════════════════ */
export function WarningBox({ children, title = "Warning" }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-xl bg-[var(--color-bomb-red)]/10 border border-[var(--color-bomb-red)]/30 p-5">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-bomb-red)]">⚠ {title}</p>
      <div className="text-sm leading-relaxed text-[var(--color-forest-ink)]/70">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════
   Guide Section Heading
   ═══════════════════════════════════════ */
export function GuideH2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold leading-tight text-[var(--color-forest-ink)] mt-10 mb-4">{children}</h2>;
}

export function GuideH3({ children }: { children: ReactNode }) {
  return <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mt-6 mb-2">{children}</h3>;
}

export function GuideP({ children }: { children: ReactNode }) {
  return <p className="text-[var(--color-forest-ink)]/70 leading-relaxed mb-4">{children}</p>;
}

export function GuideList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-2 text-[var(--color-forest-ink)]/70 leading-relaxed mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-forest-ink)]/30 flex-shrink-0" />
          {typeof item === "string" ? <span dangerouslySetInnerHTML={{ __html: item }} /> : item}
        </li>
      ))}
    </ul>
  );
}
