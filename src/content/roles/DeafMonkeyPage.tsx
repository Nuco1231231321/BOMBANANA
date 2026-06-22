import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "Why can't I hear anything as the Deaf Monkey?", answer: "This is your role's core mechanic. The Deaf Monkey's in-game voice chat input is disabled. You can speak instructions to the Blind, but you cannot hear the Blind's confirmations, the Mute's sounds, or any game audio. You must rely entirely on visual cues." },
  { question: "How do I know if the Blind understood me?", answer: "Watch the Blind's hands. If they move to the correct position, they understood. If they hesitate or move to the wrong spot, repeat the instruction or use different words. You can also pre-agree on visual signals — the Blind nodding for 'got it' or shaking their head for 'repeat.'" },
  { question: "Where should I look most of the time?", answer: "At the Mute Monkey. Your default gaze should be on the Mute's gestures. Glance at the bomb only to verify the Blind's hand position, check module status lights, or read the timer. The Mute is your primary information source." },
  { question: "Am I the team leader?", answer: "In practice, yes. You are the only player who has both visual information (bomb + Mute's gestures) and the ability to speak. The Blind follows your voice; the Mute communicates through you. Your calm, clear instructions set the team's rhythm." },
];

const actionRows = [
  { step: "1", doThis: "Face the Mute. Watch their gestures continuously.", why: "The Mute is your primary data source. Missing a gesture means missing the solution." },
  { step: "2", doThis: "Identify all modules before defusing: \"Wire — 5 wires. Button — 3×3. Switch — 4 switches.\"", why: "The Mute needs module names to find the correct manual sections." },
  { step: "3", doThis: "Interpret the Mute's gesture into a clear, short instruction", why: "Gestures are ambiguous. You must translate body language into precise spoken commands." },
  { step: "4", doThis: "Speak the instruction: \"Cut — third wire from left\"", why: "Use the [Action] + [Position] + [Object] format. Consistent structure prevents confusion." },
  { step: "5", doThis: "Watch the Blind's hands approach the target. Confirm visually.", why: "You must SEE the Blind's finger on the correct wire before authorizing the cut." },
  { step: "6", doThis: "Say \"Confirmed\" to authorize the action", why: "The Blind must never act without this word. It is the final safety check in the chain." },
  { step: "7", doThis: "Announce the timer at 60s, 30s, and 10s remaining", why: "You are the only one who can see the timer. Regular announcements prevent time-blind panic." },
];

const relatedGuides = [
  { title: "Blind Monkey Guide", description: "The only monkey who touches the bomb — and sees nothing.", href: "/roles/blind-monkey" },
  { title: "Mute Monkey Guide", description: "Hold the manual. Know the answers. Gesture through chaos.", href: "/roles/mute-monkey" },
  { title: "Team Callouts", description: "Standardized phrases for fast, precise communication.", href: "/communication/team-callouts" },
  { title: "Communication Chain", description: "Deep dive into the information flow between roles.", href: "/communication/communication-chain" },
];

export default function DeafMonkeyPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg" alt="BOMBANANA! Deaf Monkey — Hear No Evil" />
      
      <PageTitle highlight="Deaf Monkey">Deaf Monkey Guide: Hear No Evil, Lead the Team</PageTitle>
<BlufBox title="At a Glance"><strong>The Deaf Monkey is the critical communication bridge.</strong> You see the bomb clearly, you see the Mute's gestures, and you speak instructions to the Blind. But you hear absolutely nothing — no voice chat, no game sounds. <strong>Your default gaze should be on the Mute, not the bomb.</strong> The Mute is your primary information source.</BlufBox>

      <GuideH2>Your Role: Hear No Evil</GuideH2>
      <GuideP>The Deaf Monkey occupies the most demanding position in BOMBANANA!. Information flows into you through your eyes — from two different sources — and out through your mouth. The Mute gestures. The bomb displays status. You process both streams and produce the spoken instructions that guide the Blind's hands. Every word you say determines whether the bomb is defused or detonated.</GuideP>

      <ArticleImage src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="Deaf Monkey's full-color view" caption="What the Deaf Monkey sees: full color, clear text, and the timer. Everything except sound." />

      <GuideH2>Capabilities & Limitations</GuideH2>
      <GuideH3>You Can</GuideH3>
      <GuideList items={["<strong>See everything:</strong> Full-color bomb view, module labels, wire colors, screen readouts, timer — all clearly visible.", "<strong>Speak:</strong> Give verbal instructions to the Blind. Your voice is their only guidance.", "<strong>Observe the Mute:</strong> You are the only one who can interpret the Mute's gestures."]} />
      <GuideH3>You Cannot</GuideH3>
      <GuideList items={["<strong>Hear anything:</strong> No voice chat input. No game audio. No timer ticking. Complete auditory silence.", "<strong>Touch the bomb:</strong> Only the Blind Monkey can physically interact with modules."]} />

      <GuideH2>Gesture Interpretation</GuideH2>
      <GuideP>This is the hardest part of the Deaf role — and the #1 cause of failed defusals. You must decode the Mute's body language in real time. Pre-agreed gesture vocabulary is essential: every gesture should have exactly one meaning. If you are unsure what a gesture means, shake your head side to side. The Mute will repeat or try a different gesture. Never guess.</GuideP>

      <ActionTable rows={actionRows} />

      <WarningBox title="Most Common Deaf Mistake">Looking at the bomb instead of the Mute. It is natural to watch the Blind's hands on the bomb, but the Mute is your information source. If you miss a gesture while watching the bomb, you have nothing to tell the Blind. Default gaze = Mute. Glance at bomb = verification only.</WarningBox>

      <TipBox title="Pro Tip: Split Attention Training">Practice dividing your visual attention: keep the Mute in your central vision while monitoring the bomb's timer and module lights in your peripheral vision. This skill develops with practice and dramatically improves your effectiveness.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
