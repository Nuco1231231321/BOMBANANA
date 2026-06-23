import { Banana, Users, Zap } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { HighlightedWord, TaglineBadge } from "@/components/ui/TaglineBadge";
import type { Locale } from "@/i18n/routing";

interface HeroProps {
  locale?: Locale;
}

const stats = [
  { label: "Role guides", value: "3", icon: Users },
  { label: "Module guides", value: "5", icon: Zap },
  { label: "Starter routes", value: "3", icon: Banana },
] as const;

const searchedLinks = [
  { href: "/manual", label: "Manual" },
  { href: "/modules", label: "Modules" },
  { href: "/modules/wire-module", label: "Wire Module" },
  { href: "/modules/switch-module", label: "Switch Module" },
  { href: "/beginners/how-to-play", label: "How to Play" },
] as const;

export default function Hero({ locale = "en" }: HeroProps) {
  void locale;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-forest-ink) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-forest-ink) 1px, transparent 1px)",
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />

      <div className="container-page relative z-10">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <TaglineBadge icon={<Banana className="h-3.5 w-3.5" />}>
            The Ultimate Game Guide
          </TaglineBadge>

          <h1 className="mt-6 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance">
            BOMBANANA! <HighlightedWord>Bomb</HighlightedWord>
            <br />
            Defusal Guide
          </h1>

          <p className="mt-6 max-w-[580px] text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] text-[var(--color-forest-ink)] opacity-70 text-balance">
            The complete guide to BOMBANANA!, a chaotic 3-player co-op bomb defusal
            game. Learn every role, master every module, and keep your friendships
            intact.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/modules" variant="primary" size="lg" arrow>
              Open Module Guides
            </Button>
            <Button href="/manual" variant="outline" size="lg">
              Manual Guide
            </Button>
          </div>

          <nav
            aria-label="Most searched help"
            className="mt-5 w-full max-w-[640px] rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]/75 p-3 text-left"
          >
            <p className="mb-2 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
              Most searched help
            </p>
            <div className="flex flex-wrap gap-2">
              {searchedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as never}
                  className="inline-flex min-h-10 items-center rounded-md border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-3 py-2 text-sm font-semibold leading-tight text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-[var(--color-pencil-gray)] pt-8 sm:gap-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-banana-yellow)]/40">
                    <Icon className="h-4 w-4 text-[var(--color-forest-ink)]" />
                  </span>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[var(--color-forest-ink)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--color-forest-ink)] opacity-50">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
