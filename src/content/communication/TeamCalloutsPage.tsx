import { ImageBlock, TipBox, ComparisonTable, SectionHeading, SubHeading, Para } from "@/components/content/ContentBlocks";

export default function TeamCalloutsPage() {
  return (
    <>
      <SectionHeading>Standard Team Callouts</SectionHeading>
      <Para>Words matter — especially when a bomb is ticking. These standardized callouts eliminate ambiguity and speed up communication. Every team should use these exact phrases. This is the same principle used by pilots, surgeons, and military teams.</Para>

      <ImageBlock src="/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg" alt="BOMBANANA! Team Communication" caption="Clear, pre-agreed callouts make the difference between chaos and coordination."/>

      <SubHeading>Deaf Monkey Callouts</SubHeading>
      <ComparisonTable
        headers={["Situation", "Exact Phrase"]}
        rows={[
          ["Timer: 60s remaining", "\"One minute — [N] modules remaining\""],
          ["Timer: 30s remaining", "\"Thirty seconds\""],
          ["Timer: 10s remaining", "\"TEN — execute, no confirm\""],
          ["Strike occurred", "\"Strike [N] — [N] remaining\""],
          ["Module complete", "\"[Module name] — green. Next: [next module]\""],
          ["All modules done", "\"ALL MODULES GREEN — bomb defused!\""],
          ["Cut wire", "\"Cut — [N]th wire from [left/right]\""],
          ["Press button", "\"Press — row [N], column [N]\""],
          ["Hold button", "\"Hold — row [N], col [N] — I'll count down\""],
          ["Release button", "\"Release — NOW\""],
          ["Blind is correct", "\"Confirmed\""],
          ["Blind is wrong position", "\"Stop — move [direction] — there\""],
        ]}
      />

      <SubHeading>Blind Monkey Callouts</SubHeading>
      <ComparisonTable
        headers={["Situation", "Exact Phrase"]}
        rows={[
          ["Starting sweep", "\"Sweeping — hands on bomb\""],
          ["Found a module", "\"Module found — [rough shape]\""],
          ["Sweep complete", "\"Sweep complete — [N] modules\""],
          ["Located target", "\"On [position] — confirm?\""],
          ["Executing", "\"[Action] now — [position]\""],
          ["Action done", "\"Done — next?\""],
          ["Uncertain", "\"Not sure I'm on the right one — verify\""],
          ["Lost position", "\"Lost — resetting hands. Guide me back\""],
          ["Made a mistake", "\"ERROR — hands off — awaiting instruction\""],
        ]}
      />

      <SubHeading>Mute Monkey Signals</SubHeading>
      <ComparisonTable
        headers={["Signal", "Meaning"]}
        rows={[
          ["Thumbs up", "Yes / Correct / Continue"],
          ["Thumbs down", "No / Wrong / Stop"],
          ["Circular hand motion", "Repeat that gesture"],
          ["Rapid waving", "Urgent — time is critical"],
          ["Point at eyes → bomb", "Look at the bomb"],
          ["Point at manual → nod", "I found the solution — watch me"],
          ["Both palms up, shrug", "Can't find it in the manual"],
          ["Clap once", "Module complete — move to next"],
        ]}
      />

      <TipBox title="Print These Cards">Print the Deaf and Blind callout cards and keep them visible during play. In high-pressure moments, reading a pre-made phrase is faster than constructing a sentence from scratch.</TipBox>
    </>
  );
}
