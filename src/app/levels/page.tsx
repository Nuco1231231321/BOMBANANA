import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Card } from "@/components/ui/Card";
import { Trophy, Timer, Zap, Star, Target, Brain, Shield } from "lucide-react";

export const metadata = {
  title: "Level Walkthroughs — BOMBANANA! Campaign Guide",
  description: "Complete level walkthroughs for BOMBANANA! Module configurations, strategies, and tips for every campaign level.",
};

const levels = [
  { name: "Levels 1-3", modules: "3-4 per bomb", time: "5-8 min", strikes: "3", mechanic: "Basic logic, single-step solutions, one module type at a time", difficulty: "Beginner", icon: Star },
  { name: "Levels 4-6", modules: "4-5 per bomb", time: "5-7 min", strikes: "3", mechanic: "Multi-step sequences, memory elements, two modules active at once", difficulty: "Intermediate", icon: Brain },
  { name: "Levels 7-9", modules: "5-6 per bomb", time: "4-6 min", strikes: "2", mechanic: "Timed challenges, panic effect chains, three modules active", difficulty: "Advanced", icon: Target },
  { name: "Levels 10+", modules: "6-8 per bomb", time: "3-5 min", strikes: "2", mechanic: "Communication tests, combined mechanics, all panic effects", difficulty: "Expert", icon: Shield },
];

export default function LevelsPage() {
  return (
    <ContentLayout>
      <header className="mb-10">
        <TaglineBadge icon={<Trophy className="w-3 h-3" />}>CAMPAIGN WALKTHROUGHS</TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          Campaign{" "}
          <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">Walkthroughs</span>
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          Step-by-step strategies for every campaign level. Module configurations, recommended role assignments, and proven defusal patterns for each difficulty tier.
        </p>
      </header>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg"
        alt="BOMBANANA! Campaign Level Gameplay"
        className="w-full rounded-xl mb-10 border border-[var(--color-pencil-gray)]"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {levels.map((level) => {
          const Icon = level.icon;
          return (
            <Card key={level.name} accent="cream" bordered>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-[var(--color-forest-ink)]" />
                  <h3 className="font-bold text-lg text-[var(--color-forest-ink)]">{level.name}</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-banana-yellow)]/50 text-[var(--color-forest-ink)]">
                  {level.difficulty}
                </span>
              </div>
              <div className="space-y-2 text-sm text-[var(--color-forest-ink)] opacity-60 mt-4">
                <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 flex-shrink-0" /><span>{level.modules}</span></div>
                <div className="flex items-center gap-2"><Timer className="w-3.5 h-3.5 flex-shrink-0" /><span>Time: {level.time}</span></div>
                <div className="flex items-center gap-2"><Target className="w-3.5 h-3.5 flex-shrink-0" /><span>Strikes allowed: {level.strikes}</span></div>
                <p className="pt-1 text-[var(--color-forest-ink)] opacity-80">{level.mechanic}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <h2 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] tracking-[0.03em] text-[var(--color-forest-ink)] mb-4">General Campaign Strategy</h2>

      <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2 mt-6">Pre-Bomb Preparation</h3>
      <ul className="space-y-2 text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
        <li>• <strong>Assign roles before launching.</strong> Don&apos;t swap mid-campaign — consistency builds chemistry.</li>
        <li>• <strong>Review unlocked modules.</strong> Each tier introduces new module types. Study them in Free Mode first.</li>
        <li>• <strong>Warm up with a practice bomb.</strong> Use Free Mode to run a quick 2-module bomb before campaign levels.</li>
        <li>• <strong>Check your setup.</strong> Ensure the Mute&apos;s manual is accessible, the Deaf has clear sight lines, and the Blind can reach all bomb areas.</li>
      </ul>

      <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2 mt-6">During the Bomb</h3>
      <ul className="space-y-2 text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
        <li>• <strong>Blind sweeps first.</strong> Spend 5-10 seconds mapping the bomb by touch. Report module count.</li>
        <li>• <strong>Deaf identifies all modules.</strong> Call out every module type before defusing. Solve hardest first when time pressure is lowest.</li>
        <li>• <strong>Mute pre-locates solutions.</strong> While Blind sweeps, find all relevant manual sections and bookmark them.</li>
        <li>• <strong>One module at a time.</strong> Complete one, confirm green, then move to the next.</li>
        <li>• <strong>Deaf calls timer:</strong> Announce at 50% time, 30 seconds, and 10 seconds remaining.</li>
      </ul>

      <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2 mt-6">Post-Bomb Debrief</h3>
      <p className="text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
        After every bomb — success or explosion — spend 2 minutes discussing:
      </p>
      <ul className="space-y-2 text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
        <li>• Which module was hardest and why?</li>
        <li>• Where did communication break down?</li>
        <li>• Which gestures were unclear or inconsistent?</li>
        <li>• What should we change on the next attempt?</li>
      </ul>

      <div className="rounded-xl bg-[var(--color-banana-yellow)]/20 p-6 border border-[var(--color-banana-yellow)] mt-8">
        <Trophy className="w-6 h-6 text-[var(--color-forest-ink)] mb-2" />
        <p className="text-sm text-[var(--color-forest-ink)] opacity-70">
          <strong>Coming with the August 2026 full release:</strong> Detailed walkthrough videos for every campaign level, including optimal role assignments, module-by-module solutions, and speedrun strategies. The full game will feature significantly more content than the current Demo.
        </p>
      </div>
    </ContentLayout>
  );
}
