import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "Is the Button Module about speed?", answer: "No. It is mostly about correct decision-making under pressure. The instinct to press immediately is exactly what this module is designed to punish." },
  { question: "Why do button puzzles cause so many mistakes?", answer: "Because players assume they can act immediately instead of reading first. A button looks simple, so people press it before they understand it." },
  { question: "Should beginners rush button modules?", answer: "No. Button modules reward calm inspection and clear confirmation. One extra second of verification is worth much more than a strike." },
  { question: "What is the safest way to handle a button puzzle?", answer: "Read the button, decide the action, confirm the plan with the team, then execute. Never press before the team has agreed." },
];

const actionRows = [
  { step: "1. Stop", doThis: "Do not press the button as soon as you see it. Read the full module and confirm what kind of puzzle it appears to be.", why: "This first pause saves far more time than a rushed strike does." },
  { step: "2. Decide", doThis: "Figure out whether the module wants a normal press, a hold, or another interaction path.", why: "If the clue suggests a secondary step, do not ignore it. Hold and press are not interchangeable." },
  { step: "3. Confirm", doThis: "Repeat the exact plan out loud: What color? What label? Press or hold? Who is executing?", why: "The best teams describe the button and the action together before anyone touches anything." },
  { step: "4. Execute", doThis: "Once the plan is clear, the Blind performs the action. If the module changes state, check that state before moving on.", why: "Button modules can have follow-up behavior. Do not assume success after the first input." },
];

const relatedGuides = [
  { title: "Wire Module", description: "The best first module to learn — count, confirm, cut.", href: "/modules/wire-module" },
  { title: "Switch Module", description: "Track the board state and flip in the correct order.", href: "/modules/switch-module" },
  { title: "Symbols Module", description: "Match glyphs with consistent team language.", href: "/modules/symbols-module" },
  { title: "Communication Chain", description: "Understand the information flow between roles.", href: "/communication/communication-chain" },
];

export default function ButtonModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="BOMBANANA! Button Module — Press, Hold, Decide" />
      <BlufBox title="At a Glance"><strong>The Button Module is not a speed test. It is a decision test.</strong> The hardest part is resisting the instinct to press immediately just because the object looks simple. In a game built on communication, the best move is often to stop for one beat and verify the rule together. If the team reads the clue properly before touching the button, this module becomes much easier to control.</BlufBox>

      <GuideH2>How the Button Module Works</GuideH2>
      <GuideP>Button modules combine a visible button with a rule that decides what to do next. The button's color, label, or state can matter, and the correct answer may change depending on the module's internal conditions. The team should always treat the button as a decision point: What does it look like? What action does the module want? Is this a press or a hold? Has the team confirmed before execution?</GuideP>

      <ArticleImage src="/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.thumb.jpg" alt="Button module grid" caption="Look at the button before anyone presses it. Color, label, and state determine the correct action." />

      <GuideH2>How to Recognize It</GuideH2>
      <GuideP>Look at the button before anyone presses it. The important details are color, text, and any other clue or state the module displays. Some button puzzles may look almost identical at a glance, but the correct interaction can change completely depending on a small visual difference. That is why "just press it" is the wrong mindset. BOMBANANA! wants the team to inspect first and act second.</GuideP>

      <ActionTable rows={actionRows} />

      <GuideH2>Common Mistakes</GuideH2>
      <WarningBox title="Pressing too early"><strong>This is the classic mistake.</strong> A button looks simple, so people press it before they understand it. That is exactly the behavior this module is designed to punish.</WarningBox>
      <GuideList items={[
        "<strong>Ignoring the follow-up state:</strong> Sometimes the first input is only part of the solution. If the team stops paying attention after the press, they can miss the real result.",
        "<strong>Confusing hold with press:</strong> A hold instruction and a press instruction are not interchangeable. If the team does not verify the intended action, the module fails immediately.",
        "<strong>Weak callouts:</strong> 'Press it' is not enough. Good teams always describe the button and the action together: color, label, action type, executor.",
      ]} />

      <GuideH2>Team Callout Example</GuideH2>
      <GuideP>A strong Button Module callout should sound like this:</GuideP>
      <div className="my-4 p-4 rounded-lg bg-[var(--color-whisper-gray)] font-mono text-sm text-[var(--color-forest-ink)]/80">
        <p>"Button is red."</p>
        <p>"Text is visible."</p>
        <p>"Looks like a hold action."</p>
        <p>"Confirming hold."</p>
        <p>"Blind executes now."</p>
      </div>
      <GuideP>That format protects the team from acting on impulse.</GuideP>

      <TipBox title="Pro Tip: Say Less, Verify More">If the module feels ambiguous, say less and verify more. One extra second of confirmation is usually worth much more than a strike. Assign one player to read the button and another to confirm the action before the Blind touches it.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
