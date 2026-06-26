import ContentLayout from "@/components/layout/ContentLayout";
import { LinkCard } from "@/components/ui/Card";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { BadgeCheck, Banana, BookOpenCheck, Download, Hand, ListChecks, TriangleAlert } from "lucide-react";

export const metadata = {
  title: "BOMBANANA! Beginner Guide — How to Play, Setup & First Defusal",
  description:
    "New to BOMBANANA!? Beginner guide with role tips, session checklist, communication basics, common mistakes, and first bomb walkthrough. Updated 2026.",
};

const BEGINNER_GUIDES = [
  {
    href: "/beginners/how-to-play",
    title: "How to Play BOMBANANA!",
    description: "Learn the three-player role loop, what each monkey can do, and how a first defusal works.",
    icon: BookOpenCheck,
    accent: "cream" as const,
  },
  {
    href: "/beginners/first-session-checklist",
    title: "First Session Checklist",
    description: "A quick setup checklist for roles, voice chat, gestures, and the first practice run.",
    icon: ListChecks,
    accent: "mint" as const,
  },
  {
    href: "/beginners/beginner-mistakes",
    title: "Beginner Mistakes",
    description: "Fix the common errors that cause early explosions: rushing, unclear gestures, and skipped confirms.",
    icon: TriangleAlert,
    accent: "blush" as const,
  },
  {
    href: "/demo",
    title: "Demo Download Guide",
    description: "Open the Steam demo safely and avoid unconfirmed APK or third-party downloads.",
    icon: Download,
    accent: "yellow" as const,
  },
  {
    href: "/manual",
    title: "Manual Guide",
    description: "Understand the Mute Monkey manual flow before moving into module-specific pages.",
    icon: BookOpenCheck,
    accent: "mint" as const,
  },
];

const firstRunSteps = [
  "Pick Blind, Deaf, and Mute before the timer starts.",
  "Agree on yes, no, repeat, number, direction, and stop signals.",
  "Let the Deaf identify the module, then let the Mute find the rule.",
  "Use the loop: Mute gestures, Deaf speaks, Blind repeats, Deaf confirms.",
];

export default function BeginnersPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      <header className="mb-12 border-b border-[var(--color-pencil-gray)] pb-10">
        <TaglineBadge icon={<Banana className="h-3 w-3" />}>START HERE</TaglineBadge>
        <h1 className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.85rem)] font-extrabold leading-[1.02] tracking-[0.04em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            Beginner
          </span>{" "}
          Guide
        </h1>
        <p className="mt-5 max-w-[660px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-65">
          Start here if your team is new. Learn the role split, set up the first
          communication loop, and avoid the mistakes that make early bombs feel
          impossible.
        </p>
        <div className="mt-6 rounded-xl border border-[var(--color-banana-yellow)]/40 bg-[var(--color-banana-yellow)]/8 p-5">
          <p className="text-sm leading-relaxed text-[var(--color-forest-ink)]/75">
            <strong>Quick Start:</strong> All 3 players install the{" "}
            <strong>free Steam Demo</strong> → assign Blind, Deaf, Mute roles{" "}
            → agree on <strong>yes/no/number gestures</strong> (2 minutes){" "}
            → start the bomb → Deaf identifies modules{" "}
            → Mute reads rules and gestures{" "}
            → Blind confirms and acts.{" "}
            <strong>Your first 2-3 bombs will explode.</strong> That&apos;s normal — debrief and try again.
          </p>
        </div>
      </header>

      <section className="mb-10 grid gap-5 md:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
          {BEGINNER_GUIDES.map((guide) => {
            const Icon = guide.icon;
            return (
              <LinkCard
                key={guide.href}
                title={guide.title}
                description={guide.description}
                href={guide.href}
                accent={guide.accent}
                icon={<Icon className="h-5 w-5" />}
              />
            );
          })}
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-[var(--color-forest-ink)] bg-[var(--color-cream-paper)] p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-banana-yellow)]/55 text-[var(--color-forest-ink)]">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-bold text-[var(--color-forest-ink)]">
                First Run Loop
              </h2>
            </div>
            <ol className="space-y-3">
              {firstRunSteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-banana-yellow)]/45 font-[family-name:var(--font-roboto-mono)] text-xs font-bold text-[var(--color-forest-ink)]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-70">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-sticky-note-mint)]/60 text-[var(--color-forest-ink)]">
                <Hand className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-bold text-[var(--color-forest-ink)]">
                Essential Gestures
              </h2>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-[var(--color-whisper-gray)] pb-1.5"><span className="text-[var(--color-forest-ink)]/70">Yes / Correct</span><span className="font-semibold">👍 Thumbs up</span></div>
              <div className="flex justify-between border-b border-[var(--color-whisper-gray)] pb-1.5"><span className="text-[var(--color-forest-ink)]/70">No / Wrong</span><span className="font-semibold">👎 Thumbs down</span></div>
              <div className="flex justify-between border-b border-[var(--color-whisper-gray)] pb-1.5"><span className="text-[var(--color-forest-ink)]/70">Numbers 1-5</span><span className="font-semibold">✋ Fingers</span></div>
              <div className="flex justify-between border-b border-[var(--color-whisper-gray)] pb-1.5"><span className="text-[var(--color-forest-ink)]/70">Cut wire</span><span className="font-semibold">✌️ Scissors</span></div>
              <div className="flex justify-between border-b border-[var(--color-whisper-gray)] pb-1.5"><span className="text-[var(--color-forest-ink)]/70">Press button</span><span className="font-semibold">👇 Point down</span></div>
              <div className="flex justify-between border-b border-[var(--color-whisper-gray)] pb-1.5"><span className="text-[var(--color-forest-ink)]/70">Hold button</span><span className="font-semibold">✊ Closed fist</span></div>
              <div className="flex justify-between"><span className="text-[var(--color-forest-ink)]/70">Repeat / Again</span><span className="font-semibold">🔄 Circular motion</span></div>
            </div>
          </div>
        </aside>
      </section>
    </ContentLayout>
  );
}
