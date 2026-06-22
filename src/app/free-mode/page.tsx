import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Card } from "@/components/ui/Card";
import { Wrench, Share2, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Free Mode — Design Your Own Bombs | BOMBANANA! Guide",
  description:
    "BOMBANANA! Free Mode guide. Learn to design custom bombs, create challenging puzzles, and share with the community.",
};

export default function FreeModePage() {
  return (
    <ContentLayout>
      <header className="mb-10">
        <TaglineBadge icon={<Wrench className="w-3 h-3" />}>
          FREE MODE
        </TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          Design Your Own{" "}
          <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">
            Bombs
          </span>
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          BOMBANANA! Free Mode lets you create custom bomb puzzles. Design unique challenges and share them with the community.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        <Card accent="mint">
          <Lightbulb className="w-6 h-6 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-semibold text-lg text-[var(--color-forest-ink)] mb-2">
            Design Principles
          </h3>
          <p className="text-sm text-[var(--color-forest-ink)] opacity-60 leading-relaxed">
            Learn what makes a great bomb puzzle — balancing difficulty, creating fair challenges, and using module combinations effectively.
          </p>
        </Card>
        <Card accent="teal">
          <Wrench className="w-6 h-6 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-semibold text-lg text-[var(--color-forest-ink)] mb-2">
            Module Combinations
          </h3>
          <p className="text-sm text-[var(--color-forest-ink)] opacity-60 leading-relaxed">
            Discover powerful module synergies and learn which combinations create the most engaging (and chaotic) experiences.
          </p>
        </Card>
        <Card accent="blush">
          <Share2 className="w-6 h-6 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-semibold text-lg text-[var(--color-forest-ink)] mb-2">
            Community Sharing
          </h3>
          <p className="text-sm text-[var(--color-forest-ink)] opacity-60 leading-relaxed">
            How to share your custom bombs with other players and discover community-created challenges.
          </p>
        </Card>
      </div>

      <div className="rounded-xl border border-[var(--color-pencil-gray)] p-8 text-center">
        <Wrench className="w-8 h-8 text-[var(--color-banana-yellow)] mx-auto mb-3" />
        <p className="text-[var(--color-forest-ink)] opacity-50 text-sm">
          Full Free Mode tutorials coming with the August 2026 release. Stay tuned!
        </p>
      </div>
    </ContentLayout>
  );
}
