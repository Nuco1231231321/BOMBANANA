import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "Why can't I see anything as the Blind Monkey?", answer: "This is intentional — it's your role's core limitation. The Blind Monkey sees only grainy grayscale outlines. Colors, text, labels, and screen readouts are invisible. You must rely entirely on the Deaf Monkey's verbal instructions." },
  { question: "How do I know which wire to cut if they all look gray?", answer: "The Deaf Monkey describes the wire by position: 'Third wire from the left.' You count by touch from a fixed reference point. Always repeat the instruction back for confirmation before cutting. Never cut without the Deaf saying 'Confirmed.'" },
  { question: "What if I lose track of where my hands are?", answer: "Announce 'Lost — resetting hands.' Remove both hands from the bomb. The Deaf will guide you back to a reference point — typically the top-left corner of the module. Restart your sweep from that anchor point." },
  { question: "Is the Blind Monkey the hardest role?", answer: "It depends on the player. The Blind has the simplest mental load per action (just follow instructions) but the highest pressure (you are the only one who can physically defuse the bomb). Players who are calm under pressure and good at following verbal instructions excel at this role." },
];

const actionRows = [
  { step: "1", doThis: "Listen to the Deaf's full instruction without interrupting", why: "Partial instructions cause wrong actions. Wait for the complete sentence before moving." },
  { step: "2", doThis: "Repeat the instruction back: \"Third wire from left — confirm?\"", why: "This catches mishearings. If you say the wrong position, the Deaf corrects you before you act." },
  { step: "3", doThis: "Execute only after the Deaf says \"Confirmed\"", why: "The Deaf must visually verify your hand is on the correct target before authorizing the action." },
  { step: "4", doThis: "Vocalize everything you feel: \"This wire feels thinner than the others\"", why: "Tactile feedback helps the Deaf and Mute verify you are on the right module and component." },
  { step: "5", doThis: "Report result: \"Done — what's the light?\" or \"ERROR — hands off\"", why: "The Deaf checks module status (green = done, red = strike). This closes the feedback loop." },
];

const relatedGuides = [
  { title: "Deaf Monkey Guide", description: "The communication bridge — see everything, hear nothing.", href: "/roles/deaf-monkey" },
  { title: "Mute Monkey Guide", description: "Hold the manual. Know all answers. Cannot speak.", href: "/roles/mute-monkey" },
  { title: "Communication Chain", description: "How information flows from manual to bomb through three monkeys.", href: "/communication/communication-chain" },
  { title: "Beginner Mistakes", description: "10 common errors every new team makes and how to fix them.", href: "/beginners/beginner-mistakes" },
];

export default function BlindMonkeyPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg" alt="BOMBANANA! Blind Monkey — See No Evil" />
      
      <PageTitle highlight="Blind Monkey">Blind Monkey Guide: See No Evil, Defuse Everything</PageTitle>
<BlufBox title="At a Glance"><strong>The Blind Monkey is the only character who physically touches the bomb.</strong> You see nothing but grainy grayscale outlines — no colors, no text, no labels. You hear the Deaf's instructions and speak to confirm them. <strong>Never act without the Deaf saying "Confirmed."</strong> The 3-step loop (listen → repeat → execute) is your lifeline.</BlufBox>

      <GuideH2>Your Role: See No Evil</GuideH2>
      <GuideP>The Blind Monkey is the hands of the operation. Every wire cut, every button pressed, every switch flipped — that is you. But your eyes tell you almost nothing. The bomb appears as a blur of gray shapes. Wires look identical. Screens are unreadable. You are entirely dependent on your Deaf teammate's voice.</GuideP>

      <ArticleImage src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="Blind Monkey's grayscale view" caption="What the Blind Monkey sees: grayscale outlines, no colors, no text. Touch is your only reliable sense." />

      <GuideH2>Capabilities & Limitations</GuideH2>
      <GuideH3>You Can</GuideH3>
      <GuideList items={["<strong>Touch the bomb:</strong> Cut wires, press buttons, flip switches, rotate knobs — all physical interactions go through you.", "<strong>Hear your Deaf teammate:</strong> Voice chat works normally for you. Listen carefully to every instruction.", "<strong>Speak:</strong> Ask questions, repeat instructions back, report what you feel through touch."]} />
      <GuideH3>You Cannot</GuideH3>
      <GuideList items={["<strong>See colors:</strong> Every wire is gray. Red, blue, yellow, green — indistinguishable.", "<strong>Read text:</strong> Module labels, screen readouts, manual pages — all invisible.", "<strong>See the timer:</strong> You have no idea how much time remains unless the Deaf announces it.", "<strong>Identify modules visually:</strong> You can feel shapes and positions, but not colors or labels."]} />

      <GuideH2>Core Technique: The Anchor Hand</GuideH2>
      <GuideP>Always keep one hand on a fixed reference point — the edge of the bomb casing, a completed module, or the table surface. This prevents spatial disorientation when moving between modules. Your other hand sweeps, counts, and executes.</GuideP>

      <ActionTable rows={actionRows} />

      <WarningBox title="Most Common Blind Mistake">Acting before the Deaf says "Confirmed." In the panic of a ticking timer, you might cut or press immediately after hearing an instruction. This removes the safety check. <strong>Always wait for the confirmation word.</strong> One second of patience prevents a strike.</WarningBox>

      <TipBox title="Pro Tip: The Initial Sweep">In the first 10 seconds of every bomb, run both hands slowly across the entire bomb surface. Count the modules you feel. Report the count and their rough positions to the Deaf. This sweep establishes the mental map that guides every subsequent action.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
