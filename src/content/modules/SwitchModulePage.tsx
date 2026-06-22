import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "Is the Switch Module a memory puzzle?", answer: "Yes, in part. It rewards players who can track state across multiple steps. If nobody records the starting position, later calls become unreliable." },
  { question: "Why does Switch get harder later in a session?", answer: "Because the bomb has more moving parts and the team's mental load increases. The more other things are happening, the easier it is to forget which switch changed and why." },
  { question: "Who should track the switches?", answer: "Usually the player who is best at keeping stable, repeated callouts. One person should own the callout stream — multiple people shouting switch positions makes the board state impossible to trust." },
  { question: "What is the biggest Switch Module mistake?", answer: "Forgetting the starting state or skipping verification after each flip. If you lose track, do not keep guessing — rebuild the state from the last confirmed board." },
];

const actionRows = [
  { step: "1. Record", doThis: "Call out the full board exactly as it appears before flipping anything.", why: "This gives the team a baseline to compare against later. Without a starting state, later calls become guesswork." },
  { step: "2. Identify", doThis: "Find out whether the puzzle wants a specific sequence or a specific final state.", why: "Do not assume the next move from memory. The rule determines the order." },
  { step: "3. Flip one", doThis: "Flip one switch at a time. After each flip, stop and verify the board state.", why: "This is a one-action puzzle. Multiple flips without verification is the fastest way to get lost." },
  { step: "4. Re-check", doThis: "Confirm the board after each action, especially if the bomb is getting busier.", why: "The easiest way to fail is trusting your memory too much. The board should be confirmed after every move." },
  { step: "5. Reset", doThis: "If the team loses track, stop guessing. Rebuild from the last confirmed state.", why: "Continuing from an uncertain state turns a correctable error into a guaranteed strike." },
];

const relatedGuides = [
  { title: "Wire Module", description: "Count, confirm, and cut with precision.", href: "/modules/wire-module" },
  { title: "Button Module", description: "Decide before you press — never rush a button.", href: "/modules/button-module" },
  { title: "Symbols Module", description: "Match glyphs with consistent team language.", href: "/modules/symbols-module" },
  { title: "Team Callouts", description: "Standard phrases that keep the whole team synchronized.", href: "/communication/team-callouts" },
];

export default function SwitchModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg" alt="BOMBANANA! Switch Module — Track, Then Flip" />
      <BlufBox title="At a Glance"><strong>Switch modules are about order, memory, and confirmation.</strong> A good team treats them like a live checklist rather than a casual toggle puzzle. The danger is not just flipping a switch — it is losing track of what the board looked like before the last move. The puzzle rewards teams that record what they saw first and update the state after every action.</BlufBox>

      <GuideH2>How the Switch Module Works</GuideH2>
      <GuideP>The basic challenge is to read the starting state, understand what each switch currently does, and make the next move without losing the sequence. In practice, the Switch Module is less about "flip something" and more about "track something." The team needs one person keeping the state clean while other players focus on the clue and execution path. This module often becomes harder in longer runs because the team's mental load increases.</GuideP>

      <ArticleImage src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="Switch module tracking" caption="Before any action, answer: How many switches? What is the initial position of each? Are we following a sequence?" />

      <GuideH2>How to Recognize It</GuideH2>
      <GuideP>Look for a board with multiple switches and a visible on/off or up/down state. The current arrangement matters more than the switches themselves, because the starting layout often determines the right next step. Before any action, the team should ask:</GuideP>
      <GuideList items={["How many switches are there?", "What is the initial position of each one?", "Are we following a sequence?", "Has anyone repeated the current state yet?"]} />
      <GuideP>If the answer to any of those is "not yet," the team is moving too soon.</GuideP>

      <ActionTable rows={actionRows} />

      <GuideH2>Common Mistakes</GuideH2>
      <WarningBox title="Forgetting the first state"><strong>If nobody records the starting position, later calls become unreliable.</strong> The module turns into a memory fight instead of a puzzle. One person must call out the full board before any actions begin.</WarningBox>
      <GuideList items={[
        "<strong>Skipping confirmation:</strong> A flip is not enough by itself. The team needs to verify that the board now matches the intended state after every single move.",
        "<strong>Talking over the tracker:</strong> If multiple players shout switch positions at once, the board state becomes impossible to trust. One person owns the callout stream.",
        "<strong>Treating it like a simple toggle:</strong> This module is not just 'on or off.' It is about where the board was, where it is now, and where it needs to go next.",
      ]} />

      <GuideH2>Team Callout Example</GuideH2>
      <GuideP>A good Switch Module sequence should sound like this:</GuideP>
      <div className="my-4 p-4 rounded-lg bg-[var(--color-whisper-gray)] font-mono text-sm text-[var(--color-forest-ink)]/80">
        <p>"Starting state: up, down, up, down."</p>
        <p>"Flip switch two."</p>
        <p>"State check."</p>
        <p>"Confirmed."</p>
        <p>"Next move only."</p>
      </div>
      <GuideP>That rhythm keeps the team from skipping steps.</GuideP>

      <TipBox title="Pro Tip: Appoint a State Tracker">The Switch Module becomes much easier when one person acts as the state tracker. That player should speak clearly, repeat the full position, and stop the team from flipping too quickly. When the bomb gets busy, the most valuable thing is not speed — it is not losing the board.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
