import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";
import { ModuleHowToJsonLd, FAQPageJsonLd } from "@/components/layout/JsonLd";

const faqs = [
  { question: "Why is Symbols hard in co-op?", answer: "Because the puzzle depends on shared visual language, not just personal recognition. One player says 'the star thing,' another says 'the fork,' and the team wastes time reconciling words. The difficulty is linguistic, not just visual." },
  { question: "What is the best way to describe symbols?", answer: "Use position, shape, and a stable nickname that your team already understands. Build a shared symbol dictionary and stick to it. If a symbol has a nickname, everyone must agree on it before the round starts." },
  { question: "Can one player own symbol callouts?", answer: "Yes, and that often makes the module easier. When one consistent voice names the symbols, the team avoids the confusion of multiple naming systems colliding." },
  { question: "What is the biggest Symbols mistake?", answer: "Changing the name of a symbol mid-run. 'Loop' becomes 'circle' becomes 'ring' — even if they mean the same thing, the shift in language wastes time and creates doubt." },
];

const relatedGuides = [
  { title: "Wire Module", description: "The best first module — count, confirm, cut.", href: "/modules/wire-module" },
  { title: "Button Module", description: "Decide before you press. Never rush a button.", href: "/modules/button-module" },
  { title: "Switch Module", description: "Track the board state and flip in order.", href: "/modules/switch-module" },
  { title: "Team Callouts", description: "Standardized phrases for clear communication.", href: "/communication/team-callouts" },
];

const symbolsHowToSteps = [
  { name: "Agree on symbol names", text: "Before the timer starts, the entire team must agree on exactly one name for each symbol type. Practice the names together. Write them down if needed. Never change names mid-run." },
  { name: "Deaf identifies the symbols", text: "The Deaf Monkey reads out each visible symbol using the team's agreed names. Use position as backup: 'Top-left is the star, bottom-right is the trident.'" },
  { name: "Mute looks up the order", text: "Using the symbol group and any visible clue, the Mute Monkey finds the correct order in the manual. The rule maps symbol groups to a specific sequence of actions." },
  { name: "Mute gestures the sequence", text: "The Mute communicates the order one symbol at a time using gestures or pointing. For multi-symbol sequences, handle one at a time — never gesture the full sequence at once." },
  { name: "Deaf relays and Blind confirms", text: "The Deaf speaks each step clearly. The Blind repeats the target symbol before acting. This back-and-forth prevents the most common Symbols mistake: two players thinking they're talking about the same symbol when they're not." },
];

export default function SymbolsModulePage() {
  return (
    <>
      <ModuleHowToJsonLd moduleName="Symbols Module" steps={symbolsHowToSteps} totalTime="PT3M" imageUrl="https://bombanana.online/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" />
      <FAQPageJsonLd questions={faqs} />
      <PageHero src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="BOMBANANA! Symbols Module — Match Glyphs, Clean Callouts" />
      
      <PageTitle highlight="Symbols Module">Symbols Module Guide: Match Glyphs, Clean Callouts</PageTitle>
<BlufBox title="At a Glance"><strong>Symbols modules are visual matching puzzles.</strong> The challenge comes from identifying similar-looking glyphs, remembering their order, and describing them in a way your teammates instantly understand. In BOMBANANA!, this makes Symbols one of the most communication-heavy puzzle types. A good symbol callout system saves more time than raw memory ever will.</BlufBox>

      <GuideH2>How the Symbols Module Works</GuideH2>
      <GuideP>The module presents several glyphs or icon-like shapes that must be matched, interpreted, or selected in the correct order. Because many symbols can look similar, the team needs a stable naming system before the round becomes chaotic. The difficulty is not just visual — it is linguistic. If one player says "the star thing," another says "the fork," and a third says "the top-left one," the team is already losing time.</GuideP>

      <ArticleImage src="/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg" alt="Symbols module glyph display" caption="Symbols often share a shape language but differ in small details. Standardized naming prevents confusion." />

      <GuideH2>How to Recognize It</GuideH2>
      <GuideP>Symbols are usually easy to spot because they look different from wires, buttons, or switches. The real challenge is telling apart symbols that share a shape language but differ in small details. Before solving, the team should decide:</GuideP>
      <GuideList items={["What does each symbol look like?", "What team name are we using for it?", "Are we calling it by shape, position, or a shared nickname?", "Can everyone repeat the same label without confusion?"]} />

      <GuideH2>How to Solve It</GuideH2>
      <GuideH3>Step 1: Name the symbol clearly</GuideH3>
      <GuideP>The team should agree on one label for each glyph. That label should be easy to repeat and should not change halfway through the run.</GuideP>
      <GuideH3>Step 2: Match the rule or order</GuideH3>
      <GuideP>Once the symbol is identified, the team must apply the correct order or mapping rule. Do not guess from memory if the pattern is not obvious.</GuideP>
      <GuideH3>Step 3: Confirm the exact glyph</GuideH3>
      <GuideP>Before anyone acts, repeat the symbol name and position aloud. This prevents the most common mistake: two players believing they are talking about the same symbol when they are not.</GuideP>
      <GuideH3>Step 4: Execute carefully</GuideH3>
      <GuideP>If the module has multiple symbols or multiple steps, solve them one at a time. Symbols get harder when the team tries to treat them like a speed test.</GuideP>

      <GuideH2>Common Mistakes</GuideH2>
      <WarningBox title="Inconsistent language"><strong>One player says 'loop,' another says 'circle,' another says 'ring.'</strong> Even if they mean the same thing, the team wastes time reconciling words. Pick one name per symbol and enforce it.</WarningBox>
      <GuideList items={[
        "<strong>Vague descriptions:</strong> 'That weird symbol' is not a callout. The team needs names that are repeatable and clear.",
        "<strong>Guessing from memory:</strong> Symbols often look familiar, which makes people overconfident. A familiar shape is not the same as a confirmed shape.",
        "<strong>Rushing through similar glyphs:</strong> The more similar two symbols are, the more dangerous a fast guess becomes. Pause and standardize the description.",
      ]} />

      <GuideH2>Team Callout Example</GuideH2>
      <GuideP>A strong Symbols Module callout might sound like this:</GuideP>
      <div className="my-4 p-4 rounded-lg bg-[var(--color-whisper-gray)] font-mono text-sm text-[var(--color-forest-ink)]/80">
        <p>"Top-left is the loop-cross."</p>
        <p>"Bottom-right is the fork shape."</p>
        <p>"Use the same names as last round."</p>
        <p>"Confirmed. Proceed."</p>
      </div>
      <GuideP>This kind of language keeps the whole team synchronized.</GuideP>

      <TipBox title="Pro Tip: Build a Shared Symbol Dictionary">Create a shared symbol dictionary with your team and stick to it. If a symbol has a nickname, make sure everyone agrees on the nickname before the round starts. When a symbol feels ambiguous, it is better to pause and standardize the description than to guess and create confusion.</TipBox>

      <GuideH2>Symbol Module Rules — Reference Table</GuideH2>
      <GuideP>The Symbols Module challenges teams with visual matching. Symbols are organized into groups. The Mute Monkey's manual contains the mapping between symbol groups and the required order. Every team should establish <strong>consistent names</strong> for each symbol before the timer starts.</GuideP>

      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Symbol Shape</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Suggested Team Name</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Alternative Names</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Confusion Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">⚡ Lightning / Zigzag</td>
              <td className="px-4 py-3"><strong>Squiggly</strong></td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Zigzag, bolt, snake, wave</td>
              <td className="px-4 py-3 text-xs text-[var(--color-bomb-red)]">⚠ High — too many nicknames</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">★ Star / Asterisk</td>
              <td className="px-4 py-3"><strong>Star</strong></td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Asterisk, sparkle, sun, burst</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Low — "star" is widely understood</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">◎ Circle-with-dot / Target</td>
              <td className="px-4 py-3"><strong>Target</strong></td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Bullseye, dot-circle, ring, onion</td>
              <td className="px-4 py-3 text-xs text-[var(--color-bomb-red)]">⚠ Medium — "circle" alone loses detail</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">Ψ Trident / Fork</td>
              <td className="px-4 py-3"><strong>Trident</strong></td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Fork, pitchfork, psi, three-prong</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Medium — "fork" is common but ambiguous</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">♢ Diamond / Rhombus</td>
              <td className="px-4 py-3"><strong>Diamond</strong></td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Rhombus, kite, tilted-square</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Medium — don't confuse with square</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">☥ Ankh / Cross-loop</td>
              <td className="px-4 py-3"><strong>Loop-cross</strong></td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Ankh, lollipop, circle-cross, handle</td>
              <td className="px-4 py-3 text-xs text-[var(--color-bomb-red)]">⚠ High — no universal name exists</td>
            </tr>
          </tbody>
        </table>
      </div>

      <GuideH2>Symbol Naming Protocol</GuideH2>
      <GuideP>Before the timer starts, your team MUST agree on exactly one name per symbol type. The protocol:</GuideP>
      <div className="my-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-sm font-bold text-[var(--color-forest-ink)]">✅ DO</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-forest-ink)]/70">
            <li>• Use the SAME name every time</li>
            <li>• Practice names before starting</li>
            <li>• Write names down if needed</li>
            <li>• Use position as backup: "top-left is star"</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-sm font-bold text-[var(--color-bomb-red)]">❌ DON'T</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-forest-ink)]/70">
            <li>• Change names mid-run</li>
            <li>• Use "that one" or "the weird thing"</li>
            <li>• Assume your teammate uses the same name</li>
            <li>• Describe by color only (colors may repeat)</li>
          </ul>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
