import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";
import { ModuleHowToJsonLd, FAQPageJsonLd } from "@/components/layout/JsonLd";

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

const buttonHowToSteps = [
  { name: "Read the button", text: "The Deaf Monkey identifies the button's color and reads any visible label text. Common colors: red, blue, white, yellow. Common labels: Hold, Press, Abort, Detonate." },
  { name: "Mute checks the manual", text: "Using the button color and label, the Mute Monkey looks up the correct action in the bomb manual. The rule specifies whether to press, hold, or avoid." },
  { name: "Mute gestures the action", text: "The Mute communicates the required action via gesture: closed fist for hold, tap motion for press, open palm for do-not-touch." },
  { name: "Deaf relays the command", text: "The Deaf Monkey sees the gesture and speaks clearly: 'Red button says Hold — press and hold.' Includes both color and action." },
  { name: "Blind executes with care", text: "The Blind Monkey performs the action. For hold: press and keep holding until the indicator changes. For press: quick tap and release. Never confuse press with hold." },
];

export default function ButtonModulePage() {
  return (
    <>
      <ModuleHowToJsonLd moduleName="Button Module" steps={buttonHowToSteps} totalTime="PT2M" imageUrl="https://bombanana.online/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" />
      <FAQPageJsonLd questions={faqs} />
      <PageHero src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="BOMBANANA! Button Module — Press, Hold, Decide" />

      <PageTitle highlight="Button Module">Button Module Guide: Press, Hold, Decide</PageTitle>
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

      <GuideH2>Button Module Rules — Decision Table</GuideH2>
      <GuideP>The Button Module varies based on the button's <strong>color</strong>, its <strong>label text</strong>, and sometimes the bomb's current <strong>timer state</strong>. The Deaf Monkey must read all visible details before the Mute consults the manual. Use the table below to identify the correct action.</GuideP>

      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Button Color</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Label / Text</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Correct Action</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Mute Gesture</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Key Warning</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1" /> Red</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">"Hold"</td>
              <td className="px-4 py-3 font-bold text-[var(--color-terracotta)]">Press and Hold</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Closed fist, hold steady</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Hold until the light changes — releasing early causes a strike</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1" /> Blue</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">"Press"</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Press and Release</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Point down, quick tap motion</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Do not hold — a press is NOT a hold</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-1" /> White</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">"Abort" / "Stop"</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Press and Release Immediately</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Point down, single quick tap</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Some variants: press when timer has a specific digit</td>
            </tr>
            <tr>
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-1" /> Yellow</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">"Detonate" / No label</td>
              <td className="px-4 py-3 font-bold text-[var(--color-bomb-red)]">DO NOT PRESS — Wait for instruction</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Open palm facing forward ✋</td>
              <td className="px-4 py-3 text-xs text-[var(--color-forest-ink)]/60">Some labels mean "do not interact" — read carefully</td>
            </tr>
          </tbody>
        </table>
      </div>

      <GuideH2>Communication Flow for Button Modules</GuideH2>
      <div className="my-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">1. Deaf Monkey</p>
          <p className="mt-2 text-sm text-[var(--color-forest-ink)]/70">"Button is <strong>red</strong>. Label says <strong>'Hold'</strong>."</p>
        </div>
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">2. Mute Monkey</p>
          <p className="mt-2 text-sm text-[var(--color-forest-ink)]/70">Checks manual: Red + Hold → <strong>Press and Hold</strong>. Gestures: closed fist.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">3. Blind Monkey</p>
          <p className="mt-2 text-sm text-[var(--color-forest-ink)]/70">"Holding button." Waits for light change, then <strong>releases</strong>.</p>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
