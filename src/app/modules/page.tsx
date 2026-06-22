import ContentLayout from "@/components/layout/ContentLayout";
import { LinkCard } from "@/components/ui/Card";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { getContentEntries } from "@/lib/content";
import { Puzzle, Bomb } from "lucide-react";

export const metadata = {
  title: "Bomb Modules — BOMBANANA! Strategy Guide",
  description:
    "Complete catalog of all bomb modules in BOMBANANA! Rules, panic effects, strategies, and communication patterns for every module type.",
};

export default function ModulesPage() {
  const modules = getContentEntries("en", "modules");

  return (
    <ContentLayout>
      <header className="mb-10">
        <TaglineBadge icon={<Bomb className="w-3 h-3" />}>
          BOMB MODULES
        </TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          Bomb Modules{" "}
          <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">
            Catalog
          </span>
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          Every bomb module has unique rules, panic effects, and solutions. Browse the complete catalog to prepare for any scenario.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {modules.map((mod) => (
          <LinkCard
            key={mod.slug}
            title={mod.meta.title}
            description={mod.meta.description}
            href={`/modules/${mod.slug}`}
            accent="cream"
            icon={<Puzzle className="w-5 h-5" />}
          />
        ))}
      </div>

      {/* Placeholder: more modules coming */}
      <div className="rounded-xl border border-[var(--color-pencil-gray)] p-8 text-center">
        <Bomb className="w-8 h-8 text-[var(--color-banana-yellow)] mx-auto mb-3" />
        <p className="text-[var(--color-forest-ink)] opacity-50 text-sm">
          More module guides coming soon. The full game releases August 2026 with many more bomb modules!
        </p>
      </div>
    </ContentLayout>
  );
}
