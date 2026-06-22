import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, ActionTable, RelatedGuides, WarningBox, TipBox, GuideH2 } from "@/components/guide/GuideBlocks";

const actionRows = [
  { step: "Manual → Mute", doThis: "Mute finds the correct manual section and reads the solution.", why: "This is the SOURCE of all correct information. Wrong section = wrong solution for the entire chain." },
  { step: "Mute → Deaf", doThis: "Mute gestures the solution. Deaf interprets the gestures into words.", why: "The highest-failure step. Gestures are inherently ambiguous. Pre-agreed vocabulary is essential." },
  { step: "Deaf → Blind", doThis: "Deaf speaks the instruction. Blind repeats it back for confirmation.", why: "The Blind cannot see what they are doing. Voice is the only guidance. Confirmation catches errors." },
  { step: "Blind → Bomb", doThis: "Blind executes the physical action (cut, press, flip, rotate).", why: "Fine motor control under time pressure. Slow is smooth, smooth is fast." },
  { step: "Result → Feedback", doThis: "Blind reports result. Deaf announces status. Mute sees and prepares next step.", why: "The feedback loop allows correction. If the Blind did something wrong, the chain reverses to fix it." },
];

const relatedGuides = [
  { title: "Team Callouts", description: "Standardized phrases for every role and situation.", href: "/communication/team-callouts" },
  { title: "Voice Chat Settings", description: "Configure in-game voice for optimal communication.", href: "/communication/voice-chat-settings" },
  { title: "Mute Monkey Guide", description: "Hold the manual. Know the answers. Cannot speak.", href: "/roles/mute-monkey" },
  { title: "Deaf Monkey Guide", description: "The communication bridge — see everything, hear nothing.", href: "/roles/deaf-monkey" },
];

export default function CommunicationChainPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="BOMBANANA! Communication Chain" />
      
      <PageTitle highlight="Communication Chain">BOMBANANA! Communication Chain: How Information Flows</PageTitle>
<BlufBox title="At a Glance"><strong>Information must travel through three monkeys — each with a different disability — before reaching the bomb.</strong> Every arrow in the chain is a potential failure point. Your goal: minimize information loss at each transfer. <strong>The Mute→Deaf gesture step is the #1 cause of failed defusals.</strong> Pre-agreed gesture vocabulary is the single most effective improvement any team can make.</BlufBox>

      <div className="my-8 p-6 rounded-xl bg-[var(--color-surface-dark)] text-[var(--color-cream-paper)] font-mono text-sm text-center tracking-wider">
        📖 MANUAL → 🙊 MUTE (reads, can't speak) → 🙉 DEAF (interprets, can't hear) → 🙈 BLIND (executes, can't see) → 💣 BOMB
      </div>

      <GuideH2>The Four Stages</GuideH2>
      <ActionTable rows={actionRows} />

      <GuideH2>Where the Chain Breaks (and How to Fix It)</GuideH2>

      <WarningBox title="Break Point #1: Mute→Deaf (Gesture Misinterpretation)"><strong>Most common failure.</strong> The Deaf misinterprets the Mute's gesture and gives wrong instructions. Prevention: pre-agreed one-to-one gesture mapping. Every gesture means exactly one thing. The Mute waits for the Deaf's thumbs-up before the next gesture. If unclear, the Deaf shakes their head and the Mute repeats the gesture differently.</WarningBox>

      <WarningBox title="Break Point #2: Deaf→Blind (Miscounting)"><strong>Second most common.</strong> The Blind miscounts wires or buttons and acts on the wrong target. Prevention: Blind counts out loud while touching each item. Deaf watches the Blind's hand position and confirms visually before authorizing the action.</WarningBox>

      <WarningBox title="Break Point #3: Manual→Mute (Wrong Section)"><strong>Information source error.</strong> The Mute opens the wrong manual page. Prevention: Deaf clearly announces the module type BEFORE the Mute opens the manual. Mute confirms by pointing module → manual section → thumbs up.</WarningBox>

      <TipBox title="Golden Rule: Hardest Module First">Start with the most complex module when the communication chain is freshest and strikes are zero. Time pressure degrades communication quality — use your best minutes for the hardest puzzles.</TipBox>

      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
