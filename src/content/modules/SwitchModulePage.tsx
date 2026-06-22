import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "How does the Blind tell if a switch is up or down?", answer: "Toggle switches have a distinct mechanical feel — up position feels different from down. The Blind can feel the position by touch, then report to the Deaf for visual verification: \"Switch 2 is currently up.\" The Deaf confirms or corrects visually." },
  { question: "What if I flip the wrong switch?", answer: "Flipping a switch that was already in the correct position usually triggers a strike. This is why the Blind should always report the current state before flipping: \"Switch 3 is down — flipping up.\" The Deaf watches and can stop a wrong flip before it happens." },
  { question: "How many switches are on a typical module?", answer: "Switch modules have 3-6 toggle switches arranged in a horizontal row. Each switch is independent — flipping one does not affect the positions of others." },
  { question: "What is double-flipping and why is it dangerous?", answer: "Double-flipping is when the Blind flips a switch once, hesitates, and flips it again. This counts as two separate actions, potentially putting the switch back in the wrong state. Flip once, confirm, then leave it." },
];

const actionRows = [
  { step: "1", doThis: "Deaf: \"Switch module — 4 switches\"", why: "Module identification for the Mute to find the correct manual section." },
  { step: "2", doThis: "Deaf reads current state: \"Currently: Up, Down, Down, Up\"", why: "The 'U-U-D-D' shorthand gives the Blind an auditory map before touching anything." },
  { step: "3", doThis: "Mute finds target config in manual, gestures which switches need change", why: "Only incorrect switches should be flipped. The Mute compares current state to target." },
  { step: "4", doThis: "Deaf: \"Flip switch 2 up, flip switch 3 up\"", why: "Call each switch individually. Never say 'flip all' unless the manual explicitly requires it." },
  { step: "5", doThis: "Blind: \"Switch 2 is down — flipping up... done\"", why: "Report current state, announce action, confirm completion. One switch at a time." },
  { step: "6", doThis: "Deaf verifies: \"Switch 2 green. Now switch 3.\"", why: "Visual confirmation after each flip prevents cascading errors." },
];

const relatedGuides = [
  { title: "Wire Module Guide", description: "Color communication and wire cutting sequences.", href: "/modules/wire-module" },
  { title: "Button Module Guide", description: "Grid navigation and press/hold timing.", href: "/modules/button-module" },
  { title: "Voice Chat Settings", description: "Configure in-game voice for optimal communication.", href: "/communication/voice-chat-settings" },
  { title: "Communication Chain", description: "How information flows from manual to bomb.", href: "/communication/communication-chain" },
];

export default function SwitchModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg" alt="BOMBANANA! Switch Module" />
      <BlufBox title="At a Glance"><strong>Switch modules present a row of toggle switches.</strong> Each must be flipped to match a target configuration from the manual. Only incorrect switches should be touched — flipping a correct switch triggers a strike. <strong>The Deaf must visually verify every switch state before and after each flip.</strong></BlufBox>

      <GuideH2>How Switch Modules Work</GuideH2>
      <GuideP>A switch module features 3-6 toggle switches in a horizontal row. The module may start in any random configuration. The manual specifies a target pattern — only switches that differ from the target need to be flipped. The Blind can feel up vs. down position but relies on the Deaf for visual verification.</GuideP>

      <ArticleImage src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="Switch configuration view" caption="The Deaf Monkey's view: each switch state clearly visible. Call them left to right as U (up) or D (down)." />

      <GuideH2>Switch Module Variants</GuideH2>
      <GuideList items={[
        "<strong>Set All:</strong> Every switch to one position (all up or all down). The easiest variant — one instruction, one action.",
        "<strong>Pattern:</strong> A specific sequence like up-down-up-down. Each switch must be individually addressed.",
        "<strong>Majority Rule:</strong> More than half the switches must be in one position. Calculate which switches to flip to reach majority with minimum moves.",
        "<strong>Conditional:</strong> Switch targets depend on other modules' states. The Mute must cross-reference conditions in the manual.",
        "<strong>Timed Flip:</strong> Switches must be flipped within a time window after activation. Speed matters.",
      ]} />

      <ActionTable rows={actionRows} />

      <WarningBox title="Double-Flip Danger">Flipping a switch, hesitating, then flipping it back counts as TWO actions — not one undo. If you are unsure whether a flip is correct, STOP. Keep your hands still. Ask the Deaf to re-verify the target configuration before proceeding.</WarningBox>

      <TipBox title="Pro Tip: U-U-D-D Shorthand">The Deaf should announce current switch states as a rapid shorthand: \"U-U-D-D\" (Up-Up-Down-Down). This is faster than \"Switch 1 is up, Switch 2 is up, Switch 3 is down...\" and gives the Mute an instant cross-reference against the manual's target pattern.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
