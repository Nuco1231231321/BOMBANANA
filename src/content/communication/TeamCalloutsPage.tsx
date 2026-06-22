import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, RelatedGuides, TipBox, GuideH2, GuideList } from "@/components/guide/GuideBlocks";

const deafCallouts = [
  "\"One minute — [N] modules remaining\" (Timer: 60s)",
  "\"Thirty seconds\" (Timer: 30s)",
  "\"TEN — execute, no confirm\" (Timer: 10s)",
  "\"Strike [N] — [N] remaining\" (Strike occurred)",
  "\"[Module name] — green. Next: [next module]\" (Module complete)",
  "\"Cut — [N]th wire from [left/right]\" (Wire action)",
  "\"Press — row [N], column [N]\" (Button action)",
  "\"Hold — row [N], col [N] — I'll count down\" (Hold action)",
  "\"Release — NOW\" (Release held button)",
  "\"Flip switch [N] — [up/down]\" (Switch action)",
  "\"Confirmed\" (Blind is in correct position)",
  "\"Stop — move [direction] — there\" (Blind needs to adjust)",
];

const blindCallouts = [
  "\"Sweeping — hands on bomb\" (Starting module sweep)",
  "\"Module found — [rough shape/size]\" (Found a module by touch)",
  "\"Sweep complete — [N] modules\" (Sweep finished)",
  "\"On [position] — confirm?\" (Located target, awaiting verification)",
  "\"[Action] now — [position]\" (Executing the instruction)",
  "\"Done — next?\" (Action complete, ready for next step)",
  "\"Not sure I'm on the right one — verify\" (Uncertain about position)",
  "\"Lost — resetting hands. Guide me back\" (Spatial disorientation)",
  "\"ERROR — hands off — awaiting instruction\" (Made a mistake)",
];

const muteSignals = [
  "Thumbs up → \"Yes / Correct / Continue\"",
  "Thumbs down → \"No / Wrong / Stop immediately\"",
  "Circular hand motion → \"Repeat that gesture\"",
  "Rapid waving → \"Urgent — time is critical\"",
  "Point at eyes → bomb → \"Look at the bomb now\"",
  "Point at manual → nod → \"I found the solution — watch me\"",
  "Both palms up, shrug → \"Can't find it in the manual\"",
  "Clap once → \"Module complete — move to the next one\"",
];

const relatedGuides = [
  { title: "Communication Chain", description: "Deep dive into the information flow between roles.", href: "/communication/communication-chain" },
  { title: "Voice Chat Settings", description: "Configure in-game voice for optimal performance.", href: "/communication/voice-chat-settings" },
  { title: "Deaf Monkey Guide", description: "Complete strategy for the communication bridge role.", href: "/roles/deaf-monkey" },
  { title: "Beginner Mistakes", description: "10 common errors every new team should know.", href: "/beginners/beginner-mistakes" },
];

export default function TeamCalloutsPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg" alt="BOMBANANA! Team Communication" />
      <BlufBox title="At a Glance"><strong>Standardized callouts eliminate ambiguity.</strong> In high-pressure situations, people revert to habit. Pre-agreed phrases mean you don't waste mental energy constructing sentences — you just say the words you've practiced. This is the same principle used by pilots, surgeons, and military teams.</BlufBox>

      <GuideH2>Deaf Monkey Callouts</GuideH2>
      <GuideList items={deafCallouts} />

      <GuideH2>Blind Monkey Callouts</GuideH2>
      <GuideList items={blindCallouts} />

      <GuideH2>Mute Monkey Signals (Non-Verbal)</GuideH2>
      <GuideList items={muteSignals} />

      <TipBox title="Print These Cards">Print the Deaf and Blind callout cards on a single sheet and keep them visible during play. In high-pressure moments, reading a pre-made phrase is faster than constructing a sentence from scratch. Professional teams use this exact technique.</TipBox>

      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
