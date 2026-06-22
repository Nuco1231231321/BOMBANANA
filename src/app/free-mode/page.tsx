import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Puzzle,
  Share2,
  SlidersHorizontal,
  TestTube2,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "BOMBANANA! Free Mode Guide - Custom Bomb Builder",
  description:
    "BOMBANANA! Free Mode guide for custom bomb setup, module combinations, timers, strikes, panic effects, testing, and sharing preparation.",
};

const setupRows = [
  {
    label: "Modules",
    value:
      "Start with 2-3 modules. Add more only after the core idea is easy to explain.",
    icon: Puzzle,
  },
  {
    label: "Timer",
    value:
      "Give new teams 5-8 minutes. Lower time only after the solution path is proven.",
    icon: Clock3,
  },
  {
    label: "Strikes",
    value:
      "Use three strikes for practice bombs. Use fewer strikes only for expert pressure.",
    icon: SlidersHorizontal,
  },
  {
    label: "Panic effects",
    value:
      "Add one effect at a time. If the failure reason becomes unclear, remove it.",
    icon: Zap,
  },
];

const buildSteps = [
  "Pick one main idea: wires, buttons, switches, symbols, or a specific communication test.",
  "Choose the smallest module set that proves that idea.",
  "Set timer and strikes so the first run tests communication, not raw speed.",
  "Run a dry test and write down where the team hesitates.",
  "Remove unfair rules, unclear effects, or duplicate pressure before sharing.",
];

const difficultyRows = [
  ["Beginner", "2-3 modules", "5-8 min", "3", "Teach one mechanic clearly."],
  ["Intermediate", "4-5 modules", "4-6 min", "3", "Combine two module types."],
  ["Advanced", "5-6 modules", "3-5 min", "2", "Add time pressure or one panic effect."],
  ["Expert", "6+ modules", "2-4 min", "1-2", "Use only after repeated testing."],
];

export default function FreeModePage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[960px]">
      <header className="relative mb-14 overflow-hidden border-b border-[var(--color-pencil-gray)] pb-10">
        <div className="pointer-events-none absolute right-0 top-2 hidden rotate-[-8deg] border border-[var(--color-forest-ink)] px-4 py-2 font-[family-name:var(--font-roboto-mono)] text-xs uppercase tracking-[0.12em] text-[var(--color-forest-ink)] opacity-30 md:block">
          van workshop note
        </div>
        <TaglineBadge icon={<Wrench className="h-3 w-3" />}>
          FREE MODE
        </TaglineBadge>
        <h1 className="mt-4 max-w-[760px] font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.35rem,6vw,4.35rem)] font-extrabold leading-[1] tracking-[0.045em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="inline-block rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            Free Mode
          </span>{" "}
          Guide
        </h1>
        <p className="mt-5 max-w-[640px] text-lg leading-[1.6] text-[var(--color-forest-ink)] opacity-70">
          Build custom bombs like a defusal manual page: one test idea, clear
          module choices, readable timer pressure, and no mystery failures.
        </p>
      </header>

      <section className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <TestTube2 className="h-5 w-5 text-[var(--color-forest-ink)]" />
            <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-[var(--color-forest-ink)]">
              What Free Mode Is For
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] text-[var(--color-forest-ink)] opacity-75">
            Free Mode is a controlled bomb workshop. Do not start by stacking
            every puzzle together. Define one skill to test first: role
            coordination, timer discipline, panic recovery, or module
            recognition. A good custom bomb tells the team exactly what broke.
          </p>
        </div>

        <aside className="border-l-4 border-[var(--color-banana-yellow)] bg-[var(--color-banana-yellow)]/20 px-4 py-3">
          <p className="font-[family-name:var(--font-roboto-mono)] text-xs uppercase tracking-[0.12em] text-[var(--color-forest-ink)] opacity-60">
            Rule zero
          </p>
          <p className="mt-2 text-sm font-semibold leading-[1.6] text-[var(--color-forest-ink)]">
            One hard idea per bomb. Test it before adding chaos.
          </p>
        </aside>
      </section>

      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-[var(--color-forest-ink)]">
            Setup Rules
          </h2>
        </div>

        <div className="border-y border-[var(--color-pencil-gray)]">
          {setupRows.map((row) => {
            const Icon = row.icon;
            return (
              <div
                key={row.label}
                className="grid gap-3 border-b border-[var(--color-whisper-gray)] py-4 last:border-b-0 sm:grid-cols-[170px_minmax(0,1fr)]"
              >
                <div className="flex items-center gap-2 font-bold text-[var(--color-forest-ink)]">
                  <Icon className="h-4 w-4 opacity-70" />
                  {row.label}
                </div>
                <p className="text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-75">
                  {row.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-[var(--color-forest-ink)]">
            First Custom Bomb Flow
          </h2>
        </div>

        <ol className="border-y border-[var(--color-pencil-gray)]">
          {buildSteps.map((step, index) => (
            <li
              key={step}
              className="grid gap-3 border-b border-[var(--color-whisper-gray)] py-4 last:border-b-0 sm:grid-cols-[72px_minmax(0,1fr)]"
            >
              <span className="font-[family-name:var(--font-roboto-mono)] text-sm font-bold text-[var(--color-forest-ink)] opacity-55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-[1.65] text-[var(--color-forest-ink)] opacity-75">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <Puzzle className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-[var(--color-forest-ink)]">
            Difficulty Recipes
          </h2>
        </div>

        <div className="overflow-x-auto border-y border-[var(--color-pencil-gray)]">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="text-left">
                {["Tier", "Modules", "Timer", "Strikes", "Design Goal"].map(
                  (header) => (
                    <th
                      key={header}
                      className="border-b border-[var(--color-pencil-gray)] px-3 py-3 font-[family-name:var(--font-roboto-mono)] text-xs uppercase tracking-[0.1em] text-[var(--color-forest-ink)] opacity-60"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {difficultyRows.map((row) => (
                <tr
                  key={row[0]}
                  className="border-b border-[var(--color-whisper-gray)] last:border-b-0"
                >
                  {row.map((cell, index) => (
                    <td
                      key={cell}
                      className={`px-3 py-3 text-[var(--color-forest-ink)] ${
                        index === 0 ? "font-bold" : "opacity-75"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid gap-6 border-y border-[var(--color-pencil-gray)] py-6 md:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-[var(--color-forest-ink)]" />
            <h2 className="font-bold text-[var(--color-forest-ink)]">
              Avoid overbuilding
            </h2>
          </div>
          <p className="text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-75">
            If a team fails, they should know whether the issue was timing,
            communication, or puzzle logic. If the reason is unclear, simplify.
          </p>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Share2 className="h-5 w-5 text-[var(--color-forest-ink)]" />
            <h2 className="font-bold text-[var(--color-forest-ink)]">
              Share only after testing
            </h2>
          </div>
          <p className="text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-75">
            Run the bomb with a team that did not design it. Repeated questions
            mean the rule is unclear, not that the team is slow.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-[var(--color-forest-ink)]">
            Final Checklist
          </h2>
        </div>
        <ul className="space-y-2 text-[var(--color-forest-ink)] opacity-75">
          {[
            "Every module has a clear role path: Mute reads, Deaf interprets, Blind acts.",
            "Timer pressure is tuned after the solution path is proven.",
            "Panic effects create tension without hiding the answer.",
            "The next version changes one variable, not the entire bomb.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 opacity-60" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </ContentLayout>
  );
}
