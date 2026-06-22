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
    value: "Start with 2-3 modules. Add more only after the core idea is easy to explain.",
    icon: Puzzle,
  },
  {
    label: "Timer",
    value: "Give new teams 5-8 minutes. Lower time only after the solution path is proven.",
    icon: Clock3,
  },
  {
    label: "Strikes",
    value: "Use three strikes for practice bombs. Use fewer strikes only for expert pressure.",
    icon: SlidersHorizontal,
  },
  {
    label: "Panic effects",
    value: "Add one effect at a time. If the failure reason becomes unclear, remove it.",
    icon: Zap,
  },
];

const buildSteps = [
  "Pick one main idea for the bomb: wires, buttons, switches, symbols, or a specific communication test.",
  "Choose the smallest module set that proves that idea.",
  "Set timer and strikes so the first run tests communication, not raw speed.",
  "Run a dry test and write down where the team hesitates.",
  "Remove unfair rules, unclear effects, or duplicate pressure before sharing.",
];

const difficultyRows = [
  ["Beginner", "2-3 modules", "5-8 min", "3 strikes", "Teach one mechanic clearly."],
  ["Intermediate", "4-5 modules", "4-6 min", "3 strikes", "Combine two module types."],
  ["Advanced", "5-6 modules", "3-5 min", "2 strikes", "Add time pressure or one panic effect."],
  ["Expert", "6+ modules", "2-4 min", "1-2 strikes", "Use only after repeated testing."],
];

export default function FreeModePage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[860px]">
      <header className="mb-10">
        <TaglineBadge icon={<Wrench className="h-3 w-3" />}>
          FREE MODE
        </TaglineBadge>
        <h1 className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1] tracking-[0.03em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="inline-block rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            Free Mode Guide
          </span>
        </h1>
        <p className="mt-5 max-w-[680px] text-lg leading-relaxed text-[var(--color-forest-ink)] opacity-65">
          Use Free Mode to build custom bombs, test module combinations, and
          tune difficulty without turning the page into a wall of rules.
        </p>
      </header>

      <section className="mb-10 border-y border-[var(--color-pencil-gray)] py-6">
        <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-extrabold text-[var(--color-forest-ink)]">
          What Free Mode Is For
        </h2>
        <p className="mt-3 text-[var(--color-forest-ink)] opacity-70 leading-relaxed">
          Free Mode is best used as a controlled practice builder. Instead of
          adding every module at once, define a single test: role coordination,
          timer discipline, panic recovery, or module recognition. A good custom
          bomb should reveal exactly which skill failed.
        </p>
      </section>

      <section className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-extrabold text-[var(--color-forest-ink)]">
            Setup Rules
          </h2>
        </div>

        <div className="divide-y divide-[var(--color-whisper-gray)] border-y border-[var(--color-pencil-gray)]">
          {setupRows.map((row) => {
            const Icon = row.icon;
            return (
              <div
                key={row.label}
                className="grid gap-3 py-4 sm:grid-cols-[180px_minmax(0,1fr)]"
              >
                <div className="flex items-center gap-2 font-bold text-[var(--color-forest-ink)]">
                  <Icon className="h-4 w-4 opacity-65" />
                  {row.label}
                </div>
                <p className="text-sm leading-6 text-[var(--color-forest-ink)] opacity-70">
                  {row.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <TestTube2 className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-extrabold text-[var(--color-forest-ink)]">
            First Custom Bomb Flow
          </h2>
        </div>

        <ol className="space-y-3">
          {buildSteps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-banana-yellow)] text-sm font-extrabold text-[var(--color-forest-ink)]">
                {index + 1}
              </span>
              <p className="pt-0.5 leading-relaxed text-[var(--color-forest-ink)] opacity-72">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <Puzzle className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-extrabold text-[var(--color-forest-ink)]">
            Difficulty Recipes
          </h2>
        </div>

        <div className="overflow-x-auto border-y border-[var(--color-pencil-gray)]">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="text-left">
                {["Tier", "Modules", "Timer", "Strikes", "Design Goal"].map(
                  (header) => (
                    <th
                      key={header}
                      className="border-b border-[var(--color-pencil-gray)] px-3 py-3 font-bold text-[var(--color-forest-ink)]"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {difficultyRows.map((row) => (
                <tr key={row[0]} className="border-b border-[var(--color-whisper-gray)] last:border-b-0">
                  {row.map((cell, index) => (
                    <td
                      key={cell}
                      className={`px-3 py-3 text-[var(--color-forest-ink)] ${
                        index === 0 ? "font-bold" : "opacity-70"
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

      <section className="mb-10 border-l-4 border-[var(--color-banana-yellow)] bg-[var(--color-banana-yellow)]/10 px-5 py-4">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-forest-ink)]" />
          <div>
            <h2 className="font-bold text-[var(--color-forest-ink)]">
              Do not overbuild the first version.
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-forest-ink)] opacity-72">
              If a team fails, they should know whether the issue was timing,
              communication, or puzzle logic. If the failure reason is unclear,
              simplify the bomb before adding more modules.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Share2 className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-extrabold text-[var(--color-forest-ink)]">
            Before Sharing
          </h2>
        </div>
        <ul className="space-y-2 text-[var(--color-forest-ink)] opacity-72">
          {[
            "Run the bomb once with a team that did not design it.",
            "Watch for repeated questions. Repeated questions usually mean the rule is unclear.",
            "Adjust one variable at a time: module count, timer, strikes, or panic effects.",
            "Keep notes so the next version improves the same test instead of becoming a different bomb.",
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
