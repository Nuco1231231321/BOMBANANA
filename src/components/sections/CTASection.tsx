import { Banana } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HighlightedWord } from "@/components/ui/TaglineBadge";
import type { Locale } from "@/lib/i18n";

interface CTASectionProps {
  locale?: Locale;
}

export default function CTASection({ locale = "en" }: CTASectionProps) {
  void locale;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-[640px] text-center">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-banana-yellow)]/70 shadow-[var(--shadow-subtle)]">
            <Banana className="h-8 w-8 text-[var(--color-forest-ink)]" />
          </div>

          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance">
            Ready to <HighlightedWord>Defuse</HighlightedWord>?
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-60 text-balance">
            Pick a role, learn the first callout loop, and use the guide pages as a
            shared manual before the next timer starts.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button href="/beginners" variant="primary" size="lg" arrow>
              Beginner's Guide
            </Button>
            <p className="text-xs text-[var(--color-forest-ink)] opacity-40">
              Start with the beginner route if your team has not played before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
