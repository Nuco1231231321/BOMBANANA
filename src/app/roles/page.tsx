import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { ArrowRight, EyeOff, MessageSquareOff, VolumeOff, Banana } from "lucide-react";
import Link from "next/link";

const roleIcons = {
  blind: EyeOff,
  deaf: VolumeOff,
  mute: MessageSquareOff,
} as const;

export const metadata = {
  title: "BOMBANANA! Role Guides",
  description:
    "BOMBANANA! role guides for Blind Monkey, Deaf Monkey, and Mute Monkey. Learn each co-op bomb defusal role, communication flow, and team strategy.",
};

const roleCards = [
  {
    slug: "blind-monkey",
    role: "blind",
    title: "Blind Monkey 🙈",
    emoji: "🙈",
    roleLabel: "Hands on the bomb",
    description: "Defuse the bomb by touch while teammates guide every move.",
    job: "Repeat the command, confirm the target, then act.",
    accent: "blush" as const,
  },
  {
    slug: "deaf-monkey",
    role: "deaf",
    title: "Deaf Monkey 🙉",
    emoji: "🙉",
    roleLabel: "Voice relay",
    description: "Read the bomb state and relay clear instructions to the team.",
    job: "Watch the Mute, speak to the Blind, keep the tempo calm.",
    accent: "teal" as const,
  },
  {
    slug: "mute-monkey",
    role: "mute",
    title: "Mute Monkey 🙊",
    emoji: "🙊",
    roleLabel: "Manual reader",
    description: "Use the manual and gestures to turn rules into safe actions.",
    job: "Find the rule, gesture the answer, verify the relay.",
    accent: "mint" as const,
  },
] as const;

const accentStyles = {
  blush: "bg-[var(--color-sticky-note-blush)]",
  teal: "bg-[var(--color-sticky-note-teal)]",
  mint: "bg-[var(--color-sticky-note-mint)]",
} as const;

export default function RolesPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      <header className="mb-12 border-b border-[var(--color-pencil-gray)] pb-10">
        <TaglineBadge icon={<Banana className="h-3 w-3" />}>
          ROLE GUIDES
        </TaglineBadge>
        <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
          <div>
            <h1 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.85rem)] font-extrabold leading-[1.02] tracking-[0.04em] text-[var(--color-forest-ink)]">
              BOMBANANA! <span className="rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">Role</span>{" "}
              Guides
            </h1>
            <p className="mt-5 max-w-[640px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-65">
              Pick your monkey, learn the communication limit, and enter the bomb
              room with one clean job instead of three half-remembered rules.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-forest-ink)] bg-[var(--color-cream-paper)] p-4">
            <p className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
              Relay order
            </p>
            <div className="mt-3 flex items-center justify-between gap-2 text-2xl" aria-label="Mute to Deaf to Blind">
              <span>🙊</span>
              <ArrowRight className="h-4 w-4 text-[var(--color-forest-ink)] opacity-45" />
              <span>🙉</span>
              <ArrowRight className="h-4 w-4 text-[var(--color-forest-ink)] opacity-45" />
              <span>🙈</span>
            </div>
            <p className="mt-3 text-sm leading-[1.55] text-[var(--color-forest-ink)] opacity-65">
              Manual to relay to action. Break this chain and the timer wins.
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {roleCards.map((card) => {
          const Icon = roleIcons[card.role] || Banana;

          return (
            <Link
              key={card.slug}
              href={`/roles/${card.slug}`}
              className={[
                "group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl p-5 no-underline",
                "border border-[var(--color-forest-ink)]/20 transition-all duration-200",
                "hover:-translate-y-1 hover:border-[var(--color-forest-ink)] hover:shadow-[var(--shadow-subtle)]",
                accentStyles[card.accent],
              ].join(" ")}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)] shadow-[var(--shadow-subtle)]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-5xl leading-none" aria-hidden="true">
                  {card.emoji}
                </span>
              </div>

              <p className="mb-3 w-fit rounded-md bg-[var(--color-cream-paper)] px-2 py-1 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-forest-ink)]/65">
                {card.roleLabel}
              </p>

              <h2 className="text-2xl font-bold leading-tight text-[var(--color-forest-ink)]">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-[1.65] text-[var(--color-forest-ink)] opacity-70">
                {card.description}
              </p>

              <div className="mt-auto pt-6">
                <p className="border-t border-[var(--color-forest-ink)]/20 pt-4 text-xs font-semibold leading-[1.55] text-[var(--color-forest-ink)] opacity-70">
                  {card.job}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-forest-ink)]">
                  Open role guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-5">
        <p className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
          Team tip
        </p>
        <p className="mt-2 text-sm leading-[1.65] text-[var(--color-forest-ink)] opacity-70">
          If your team keeps failing, do not swap roles immediately. First check
          whether the Mute is readable, the Deaf is relaying one instruction at a
          time, and the Blind is repeating before touching the bomb.
        </p>
      </section>
    </ContentLayout>
  );
}
