import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Card } from "@/components/ui/Card";
import { Wrench, Share2, Lightbulb, Puzzle, Zap, Star } from "lucide-react";

export const metadata = {
  title: "Free Mode — Design Your Own Bombs | BOMBANANA! Guide",
  description: "BOMBANANA! Free Mode guide. Learn to design custom bombs, create challenging puzzles, and share with the community.",
};

export default function FreeModePage() {
  return (
    <ContentLayout>
      <header className="mb-10">
        <TaglineBadge icon={<Wrench className="w-3 h-3" />}>FREE MODE</TaglineBadge>
        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] mt-4 mb-4">
          Design Your Own{" "}
          <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">Bombs</span>
        </h1>
        <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed max-w-[600px]">
          BOMBANANA! Free Mode unleashes your creativity. Design custom bomb puzzles with any combination of modules, set your own rules, and share your creations with friends or the entire community.
        </p>
      </header>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg"
        alt="BOMBANANA! Free Mode Design Interface"
        className="w-full rounded-xl mb-10 border border-[var(--color-pencil-gray)]"
      />

      <h2 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] tracking-[0.03em] text-[var(--color-forest-ink)] mb-4">What Is Free Mode?</h2>
      <p className="text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-4">
        Free Mode is BOMBANANA!&apos;s sandbox editor. Unlike the campaign where bombs are pre-designed, Free Mode gives you complete control over every aspect of a bomb: which modules to include, the time limit, the number of allowed strikes, and panic effects.
      </p>
      <p className="text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
        Save your designs, share them via Steam, and challenge other teams to beat your creation. The community is already building a library of custom bombs from beginner-friendly tutorials to expert-level challenges.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        <Card accent="mint">
          <Lightbulb className="w-8 h-8 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2">Design Principles</h3>
          <ul className="space-y-2 text-sm text-[var(--color-forest-ink)] opacity-70">
            <li>• Every module must be solvable with information available to all three roles</li>
            <li>• Start with 2-3 modules for beginner bombs; 6-8 for expert challenges</li>
            <li>• Include at least one module that tests each role&apos;s unique skill</li>
            <li>• Allow enough time — 5 min for 3 modules, 8+ min for 6+ modules</li>
            <li>• Test your bomb with a different team before sharing it publicly</li>
          </ul>
        </Card>
        <Card accent="teal">
          <Puzzle className="w-8 h-8 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2">Module Combinations</h3>
          <ul className="space-y-2 text-sm text-[var(--color-forest-ink)] opacity-70">
            <li>• <strong>Wire + Button</strong>: Classic combo of physical dexterity + precision</li>
            <li>• <strong>Sequence + Memory</strong>: Forces teams to track state across modules</li>
            <li>• <strong>Timer + Communication Test</strong>: Maximum pressure on the Deaf Monkey</li>
            <li>• <strong>Gesture Puzzle + Keypad</strong>: Tests the Mute→Deaf gesture vocabulary</li>
          </ul>
        </Card>
        <Card accent="blush">
          <Zap className="w-8 h-8 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2">Panic Effect Design</h3>
          <ul className="space-y-2 text-sm text-[var(--color-forest-ink)] opacity-70">
            <li>• <strong>Screen static</strong> — Reduces visibility for Deaf and Mute</li>
            <li>• <strong>Timer speed-up</strong> — Doubles countdown rate for 10 seconds</li>
            <li>• <strong>Control inversion</strong> — Flips left/right for the Blind</li>
            <li>• <strong>Gesture obstruction</strong> — Visual barriers between Mute and Deaf</li>
            <li>• Don&apos;t stack more than 2 panic effects on a single mistake</li>
          </ul>
        </Card>
        <Card accent="yellow">
          <Share2 className="w-8 h-8 text-[var(--color-forest-ink)] mb-3" />
          <h3 className="font-bold text-lg text-[var(--color-forest-ink)] mb-2">Community Sharing</h3>
          <ul className="space-y-2 text-sm text-[var(--color-forest-ink)] opacity-70">
            <li>• Use the in-game Share feature to upload your bomb design</li>
            <li>• Join the official BOMBANANA! Discord to share codes</li>
            <li>• Browse community-created bombs sorted by difficulty</li>
            <li>• Rate bombs you play to surface the best community creations</li>
          </ul>
        </Card>
      </div>

      <h2 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] tracking-[0.03em] text-[var(--color-forest-ink)] mb-4">Step-by-Step: Creating Your First Custom Bomb</h2>
      <ol className="space-y-4 text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-6">
        <li><strong>1. Open Free Mode</strong> from the main menu to see a blank bomb workspace.</li>
        <li><strong>2. Add modules</strong> by clicking the &quot;+&quot; button. Drag and drop modules onto the bomb surface.</li>
        <li><strong>3. Configure each module</strong> — set wire colors, button sequences, keypad codes, etc.</li>
        <li><strong>4. Set the timer</strong> (beginners: 5-8 min, experts: 2-4 min).</li>
        <li><strong>5. Set strike limit</strong> — how many mistakes before detonation? Default is 3.</li>
        <li><strong>6. Add panic effects</strong> — choose which effects trigger on which strike number.</li>
        <li><strong>7. Test your bomb</strong> by running through it yourself before sharing.</li>
        <li><strong>8. Save and share</strong> — name your bomb, write a description, share the code.</li>
      </ol>

      <div className="rounded-xl bg-[var(--color-banana-yellow)]/20 p-6 border border-[var(--color-banana-yellow)]">
        <Star className="w-6 h-6 text-[var(--color-forest-ink)] mb-2" />
        <p className="text-sm text-[var(--color-forest-ink)] opacity-70">
          <strong>Pro tip:</strong> The best custom bombs tell a story. Design sequences where Module 2&apos;s solution depends on what you learned from Module 1. This creates a narrative arc that makes defusal feel like a real mission.
        </p>
      </div>
    </ContentLayout>
  );
}
