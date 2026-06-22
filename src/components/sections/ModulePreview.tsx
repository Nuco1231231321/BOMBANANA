import { AlertTriangle, Clock, Lightbulb, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LinkCard } from "@/components/ui/Card";
import type { Locale } from "@/lib/i18n";

interface ModulePreviewProps {
  locale?: Locale;
}

const modules = [
  {
    title: "Wiring Puzzles",
    desc: "Connect, cut, and verify wire instructions before the circuit gets messy.",
    href: "/modules/wire-module",
    icon: Puzzle,
  },
  {
    title: "Button Module",
    desc: "Know when to tap, hold, or wait instead of guessing under pressure.",
    href: "/modules/button-module",
    icon: Clock,
  },
  {
    title: "Switch Module",
    desc: "Translate switch states into a clean sequence the operator can repeat.",
    href: "/modules/switch-module",
    icon: AlertTriangle,
  },
  {
    title: "Symbols Module",
    desc: "Match symbols quickly with a calmer callout system.",
    href: "/modules/symbols-module",
    icon: Lightbulb,
  },
] as const;

export default function ModulePreview({ locale = "en" }: ModulePreviewProps) {
  void locale;

  return (
    <section className="bg-[var(--color-sticky-note-mint)]/30 py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2rem,4vw,3.4375rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance">
            Bomb Modules{" "}
            <span className="rounded-sm bg-[var(--color-banana-yellow)] px-2 py-0.5">
              Explained
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-lg text-[var(--color-forest-ink)] opacity-60 text-balance">
            Start with the module families players need most often, then branch into
            specific rules and callouts.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <LinkCard
                key={mod.title}
                title={mod.title}
                description={mod.desc}
                href={mod.href}
                accent="cream"
                icon={<Icon className="h-5 w-5" />}
              />
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/modules" variant="pastel-teal" size="md" arrow>
            Explore All Modules
          </Button>
        </div>
      </div>
    </section>
  );
}
