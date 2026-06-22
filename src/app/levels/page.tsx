import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Brain, CheckCircle2, Shield, Star, Target, Timer, Trophy, Zap } from "lucide-react";

export const metadata = {
  title: "BOMBANANA! Level Walkthroughs",
  description:
    "Complete level walkthroughs for BOMBANANA! Module configurations, strategies, and tips for every campaign level.",
};

const levels = [
  ["Levels 1-3", "3-4", "5-8 min", "3", "Basic logic and single-step module solutions.", Star],
  ["Levels 4-6", "4-5", "5-7 min", "3", "Multi-step sequences and memory elements.", Brain],
  ["Levels 7-9", "5-6", "4-6 min", "2", "Timed challenges and panic effect chains.", Target],
  ["Levels 10+", "6-8", "3-5 min", "2", "Communication tests and combined mechanics.", Shield],
] as const;

const strategy = [
  "Assign roles before launching. Do not swap roles mid-campaign unless the team is deliberately practicing.",
  "Identify every module before solving. Start with the hardest module while the timer pressure is lowest.",
  "Solve one module at a time. Confirm green, reset callouts, then move to the next module.",
  "Use timer callouts at halfway, 30 seconds, and 10 seconds remaining.",
  "Debrief after every bomb: hardest module, unclear gesture, missed callout, next adjustment.",
];

export default function LevelsPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[960px]">
      <header className="mb-12 border-b border-[var(--color-pencil-gray)] pb-10">
        <TaglineBadge icon={<Trophy className="h-3 w-3" />}>
          CAMPAIGN WALKTHROUGHS
        </TaglineBadge>
        <h1 className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1] tracking-[0.04em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="inline-block rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            Level
          </span>{" "}
          Walkthroughs
        </h1>
        <p className="mt-5 max-w-[660px] text-lg leading-[1.6] text-[var(--color-forest-ink)] opacity-70">
          Use this campaign guide to plan module order, timer callouts, and
          role discipline before each bomb tier.
        </p>
      </header>

      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <Zap className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="text-2xl font-bold text-[var(--color-forest-ink)]">
            Campaign Difficulty Map
          </h2>
        </div>

        <div className="overflow-x-auto border-y border-[var(--color-pencil-gray)]">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="text-left">
                {["Tier", "Modules", "Timer", "Strikes", "Main Pressure"].map((header) => (
                  <th
                    key={header}
                    className="border-b border-[var(--color-pencil-gray)] px-3 py-3 font-[family-name:var(--font-roboto-mono)] text-xs uppercase tracking-[0.1em] text-[var(--color-forest-ink)] opacity-60"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {levels.map(([name, modules, time, strikes, mechanic, Icon]) => (
                <tr key={name} className="border-b border-[var(--color-whisper-gray)] last:border-b-0">
                  <td className="px-3 py-4 font-bold text-[var(--color-forest-ink)]">
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4 opacity-70" />
                      {name}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-[var(--color-forest-ink)] opacity-75">{modules}</td>
                  <td className="px-3 py-4 text-[var(--color-forest-ink)] opacity-75">{time}</td>
                  <td className="px-3 py-4 text-[var(--color-forest-ink)] opacity-75">{strikes}</td>
                  <td className="px-3 py-4 text-[var(--color-forest-ink)] opacity-75">{mechanic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2">
          <Timer className="h-5 w-5 text-[var(--color-forest-ink)]" />
          <h2 className="text-2xl font-bold text-[var(--color-forest-ink)]">
            General Campaign Strategy
          </h2>
        </div>

        <ol className="border-y border-[var(--color-pencil-gray)]">
          {strategy.map((item, index) => (
            <li
              key={item}
              className="grid gap-3 border-b border-[var(--color-whisper-gray)] py-4 last:border-b-0 sm:grid-cols-[72px_minmax(0,1fr)]"
            >
              <span className="font-[family-name:var(--font-roboto-mono)] text-sm font-bold text-[var(--color-forest-ink)] opacity-55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-[1.65] text-[var(--color-forest-ink)] opacity-75">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-l-4 border-[var(--color-banana-yellow)] bg-[var(--color-banana-yellow)]/20 px-5 py-4">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-forest-ink)]" />
          <p className="text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-75">
            <strong>Release note:</strong> detailed campaign walkthroughs will
            expand as the full game adds more levels and bomb module variants.
          </p>
        </div>
      </section>
    </ContentLayout>
  );
}
