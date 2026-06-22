import { ImageBlock, TipBox, WarningBox, ComparisonTable, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function ButtonModulePage() {
  return (
    <>
      <SectionHeading>Button Modules</SectionHeading>
      <Para>Button modules require the Blind Monkey to press, hold, or release specific buttons — sometimes in sequence, sometimes under precise timing. The challenge: the Blind cannot see button labels or colors; they must navigate a grid guided only by the Deaf's voice.</Para>

      <ImageBlock src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="BOMBANANA! Button Grid Module" caption="A 3×3 button grid. Each button may have a unique color, label, or both." />

      <SubHeading>How Button Modules Work</SubHeading>
      <Para>A button module presents a grid — typically 2×2, 3×3, or 4×3. The manual specifies:</Para>
      <BulletList items={["Which button to interact with (by position, label, or color)", "What action to perform (press, hold, release, tap sequence)", "Timing — some buttons must be held for a specific duration", "Sequence order — some modules require pressing multiple buttons in order"]} />

      <SubHeading>Grid Navigation by Touch</SubHeading>
      <NumberedList items={[
        "Blind places non-dominant hand on the top-left corner of the module as an anchor",
        "Deaf describes the target: \"Row 2, Column 3\"",
        "Blind counts rows top→bottom, columns left→right by touch",
        "Blind rests a finger on the target and reports: \"On Row 2, Column 3 — confirm?\"",
        "Deaf visually confirms: \"Yes, that button — press and hold for 3 seconds\"",
      ]} />

      <ImageBlock src="/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.thumb.jpg" alt="BOMBANANA! Module Interface" caption="The Deaf Monkey's view — full color, labels, and the timer are all visible." />

      <ComparisonTable
        headers={["Action", "Deaf Instruction", "Blind Execution"]}
        rows={[
          ["Press", "\"Press Row 1, Column 2\"", "Press and immediately release"],
          ["Hold", "\"Hold Row 2, Col 1 — 3 seconds\"", "Press and keep holding until told to release"],
          ["Release", "\"Release NOW\"", "Lift finger"],
          ["Tap Sequence", "\"Tap: top-left, bottom-right, top-left\"", "Series of quick, precise presses"],
          ["Long Press", "\"Press... keep holding... release\"", "Variable duration based on manual"],
        ]}
      />

      <WarningBox title="Common Grid Mistake">Blind miscounts rows/columns under pressure. Fix: Blind places anchor hand at corner, counts each position out loud. Deaf always verifies visually before saying "confirmed."</WarningBox>

      <TipBox title="Pro Tip: Anchor and Sweep">The Blind should keep their reference hand on a fixed point (module corner) at all times. Sweep the other hand across rows one at a time. This prevents spatial disorientation — the #1 cause of wrong-button presses.</TipBox>

      <SubHeading>Button Module Variants</SubHeading>
      <BulletList items={["Single Button — One specific button to press. Finding it is the challenge.", "Sequence — Press 3-5 buttons in a specific order. Memory + precision.", "Hold Timer — Hold for exactly N seconds. Deaf must count down precisely.", "Simon Says — Repeat an increasingly long pattern. Tests team memory.", "Color-Coded — Buttons identified by color, not position. Requires color communication."]} />
    </>
  );
}
