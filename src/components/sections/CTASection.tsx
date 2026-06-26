import { Banana } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HighlightedWord } from "@/components/ui/TaglineBadge";
import type { Locale } from "@/i18n/routing";

interface CTASectionProps {
  locale?: Locale;
}

export default function CTASection({ locale = "en" }: CTASectionProps) {
  void locale;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto grid max-w-[1040px] gap-8 rounded-2xl border border-[var(--color-forest-ink)]/12 bg-[var(--color-panel-cream)] p-8 shadow-[var(--shadow-card)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-banana-yellow)]/70 shadow-[var(--shadow-subtle)]">
              <Banana className="h-8 w-8 text-[var(--color-forest-ink)]" />
            </div>

            <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance">
              Ready to <HighlightedWord>Defuse</HighlightedWord>?
            </h2>

            <p className="mt-6 max-w-[560px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-60 text-balance">
              Pick a role, learn the first callout loop, and use the guide pages as a
              shared manual before the next timer starts.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <Button href="/beginners" variant="primary" size="lg" arrow>
              Beginner's Guide
            </Button>
            <p className="max-w-[240px] text-xs text-[var(--color-forest-ink)] opacity-40 md:text-right">
              Start with the beginner route if your team has not played before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
