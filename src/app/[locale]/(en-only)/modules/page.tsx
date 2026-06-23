import ContentLayout from "@/components/layout/ContentLayout";
import { LinkCard } from "@/components/ui/Card";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Puzzle, Bomb, BookOpenCheck } from "lucide-react";

export const metadata = {
  title: "BOMBANANA! Bomb Modules Guide — Wire, Button, Switch, and Symbol Puzzles",
  description: "Complete BOMBANANA! bomb modules guide covering wire, button, switch, and symbol puzzles. Rules, panic effects, and co-op defusal strategies.",
};

const MODULES = [
  { slug: "overview", title: "Modules Overview", description: "Scan module types, difficulty flow, and the basic defusal loop." },
  { slug: "wire-module", title: "Wire Module", description: "Identify wire clues, confirm positions, and cut in the safe order." },
  { slug: "button-module", title: "Button Module", description: "Handle press, hold, and grid button puzzles without rushing." },
  { slug: "switch-module", title: "Switch Module", description: "Track switch states and flip sequences with clean callouts." },
  { slug: "symbols-module", title: "Symbols Module", description: "Match glyphs and patterns when verbal shortcuts get risky." },
];

export default function ModulesPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      <header className="mb-10 max-w-[740px]">
        <TaglineBadge icon={<Bomb className="w-3 h-3" />}>BOMB MODULES</TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">BOMBANANA! Bomb <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">Modules</span></h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">Quick access to wire, button, switch, and symbol puzzle guides for cleaner co-op bomb defusal.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {MODULES.map((m) => <LinkCard key={m.slug} title={m.title} description={m.description} href={`/modules/${m.slug}`} accent="cream" icon={<Puzzle className="w-5 h-5" />} />)}
        <LinkCard
          title="Manual Guide"
          description="Learn how Mute reads rules, Deaf relays, and Blind executes safely."
          href="/manual"
          accent="mint"
          icon={<BookOpenCheck className="w-5 h-5" />}
        />
      </div>
      <div className="rounded-xl border border-[var(--color-pencil-gray)] p-8 text-center">
        <Bomb className="w-8 h-8 text-[var(--color-banana-yellow)] mx-auto mb-3" />
        <p className="text-[var(--color-forest-ink)] opacity-50 text-sm">More module guides coming soon. The full game releases August 2026 with more bomb modules!</p>
      </div>
    </ContentLayout>
  );
}
