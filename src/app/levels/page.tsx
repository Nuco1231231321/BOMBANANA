import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Card } from "@/components/ui/Card";
import { Trophy, Timer, Star, Zap } from "lucide-react";

export const metadata = {
  title: "Level Walkthroughs — BOMBANANA! Guide",
  description:
    "Complete level walkthroughs for BOMBANANA! Module configurations, strategies, and tips for every campaign level.",
};

const levels = [
  { name: "Level 1-3", modules: "3-4", mechanic: "Basic logic, single-step solutions", difficulty: "Easy" },
  { name: "Level 4-6", modules: "4-5", mechanic: "Multi-step sequences, memory elements", difficulty: "Medium" },
  { name: "Level 7-9", modules: "5-6", mechanic: "Timed challenges, panic effect chains", difficulty: "Hard" },
  { name: "Level 10+", modules: "6-8", mechanic: "Communication tests, combined mechanics", difficulty: "Expert" },
];

export default function LevelsPage() {
  return (
    <ContentLayout>
      <header className="mb-10">
        <TaglineBadge icon={<Trophy className="w-3 h-3" />}>
          LEVEL GUIDES
        </TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          Campaign{" "}
          <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">
            Walkthroughs
          </span>
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          Step-by-step walkthroughs for every campaign level. Module configurations, recommended strategies, and speedrun tips.
        </p>
      </header>

      {/* Level tier cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {levels.map((level) => (
          <Card key={level.name} accent="cream" bordered>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg text-[var(--color-forest-ink)]">
                {level.name}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-banana-yellow)] bg-opacity-50 text-[var(--color-forest-ink)]">
                {level.difficulty}
              </span>
            </div>
            <div className="space-y-2 text-sm text-[var(--color-forest-ink)] opacity-60">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                <span>{level.modules} modules per bomb</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="w-3.5 h-3.5" />
                <span>{level.mechanic}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="rounded-xl border border-[var(--color-pencil-gray)] p-8 text-center">
        <Star className="w-8 h-8 text-[var(--color-banana-yellow)] mx-auto mb-3" />
        <p className="text-[var(--color-forest-ink)] opacity-50 text-sm">
          Detailed level-by-level walkthroughs coming with the full game release in August 2026.
        </p>
      </div>
    </ContentLayout>
  );
}
