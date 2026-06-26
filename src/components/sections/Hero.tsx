import { Banana, BookOpen, Gauge, Users, Zap } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
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
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-forest-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-forest-ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="max-w-[760px]">
            <TaglineBadge
              icon={<Gauge className="h-3.5 w-3.5" />}
              className="border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/90 shadow-[var(--shadow-subtle)]"
            >
              3-player co-op field guide
            </TaglineBadge>

            <h1 className="mt-6 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(3rem,6.4vw,6.2rem)] font-extrabold leading-[0.88] text-[var(--color-forest-ink)] text-balance">
              BOMBANANA!
              <span className="mt-3 block max-w-[560px] text-[clamp(2.25rem,4.8vw,4.5rem)] leading-[0.95]">
                Bomb Defusal Guide
              </span>
            </h1>

            <p className="mt-6 max-w-[580px] text-[clamp(1rem,1.7vw,1.2rem)] leading-[1.75] text-[var(--color-forest-ink)]/72 text-balance">
              The complete guide to BOMBANANA!, a chaotic 3-player co-op bomb defusal
              game. Learn every role, master every module, and keep your friendships
              intact.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/modules" variant="primary" size="lg" arrow>
                Open Module Guides
              </Button>
              <Button
                href="/manual"
                variant="outline"
                size="lg"
                className="bg-[var(--color-panel-cream)]/80"
              >
                Manual Guide
              </Button>
            </div>

            <nav
              aria-label="Most searched help"
              className="mt-7 max-w-[680px] rounded-xl border border-[var(--color-forest-ink)]/12 bg-[var(--color-panel-cream)]/88 p-4 shadow-[var(--shadow-card)] backdrop-blur"
            >
              <p className="mb-3 flex items-center gap-2 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
                <BookOpen className="h-3.5 w-3.5" />
                Most searched help
              </p>
              <div className="flex flex-wrap gap-2">
                {searchedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href as never}
                    className="inline-flex min-h-10 items-center rounded-lg border border-[var(--color-forest-ink)]/12 bg-white/70 px-3 py-2 text-sm font-semibold leading-tight text-[var(--color-forest-ink)] no-underline transition-all hover:-translate-y-0.5 hover:border-[var(--color-forest-ink)] hover:bg-[var(--color-banana-yellow)]/45"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="relative space-y-4 lg:pt-6">
            <div className="rounded-2xl border border-[var(--color-forest-ink)]/15 bg-[var(--color-panel-cream)]/90 p-4 shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-lg border border-[var(--color-forest-ink)]/10 bg-[var(--color-cream-paper)] p-3 text-[var(--color-forest-ink)] shadow-[var(--shadow-subtle)]"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span className="text-lg font-extrabold leading-none">
                            {stat.value}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-medium leading-tight opacity-65">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
            </div>
            <div className="rounded-xl border border-[var(--color-forest-ink)]/15 bg-[var(--color-panel-cream)] px-4 py-3 shadow-[var(--shadow-card)]">
              <p className="font-[family-name:var(--font-roboto-mono)] text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
                Defusal status
              </p>
              <p className="mt-1 text-sm font-bold text-[var(--color-forest-ink)]">
                Manual ready
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-forest-ink)]/15 bg-[var(--color-surface-dark)] p-2 shadow-[0_28px_80px_-46px_rgba(26,51,0,0.65)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.full.jpg"
                  alt="BOMBANANA! co-op bomb defusal gameplay"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
