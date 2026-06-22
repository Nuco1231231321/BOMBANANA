import { ImageBlock, TipBox, WarningBox, ComparisonTable, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function SwitchModulePage() {
  return (
    <>
      <SectionHeading>Switch Modules</SectionHeading>
      <Para>Switch modules feature a row of toggle switches — each can be flipped up or down. The manual specifies a target configuration. The Blind can feel switch positions but cannot see the current state; the Deaf must visually verify each switch.</Para>

      <ImageBlock src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg" alt="BOMBANANA! Switch Module" caption="A row of toggle switches. The Deaf can see each switch's state; the Blind can only feel up vs. down." />

      <SubHeading>How Switch Modules Work</SubHeading>
      <BulletList items={["A row of 3-6 toggle switches, each independent", "Module may start in a random configuration", "Only incorrect switches need to be flipped", "Flipping a correct switch triggers a strike", "Target configuration defined in the defusal manual"]} />

      <SubHeading>Switch State Communication Pattern</SubHeading>
      <NumberedList items={[
        "Deaf reports current state: \"Currently: Up, Down, Down, Up\" (left to right)",
        "Mute checks manual for target configuration",
        "Mute gestures which switches need to change",
        "Deaf confirms: \"Flip switch 2 up, switch 3 up\"",
        "Blind touches each: \"Switch 2 is down — flipping up\"",
        "Deaf verifies visually after each flip: \"Switch 2 green\"",
      ]} />

      <ComparisonTable
        headers={["Variant", "Description", "Strategy"]}
        rows={[
          ["Set All", "All switches to one position", "Easiest — Deaf calls \"all up\" or \"all down\""],
          ["Pattern", "Specific up/down sequence", "Deaf calls each switch individually"],
          ["Majority Rule", "More than half in one position", "Count states, flip minimum switches"],
          ["Conditional", "Switch targets depend on other modules", "Mute checks conditions in manual"],
          ["Timed Flip", "Switches must flip within time window", "Speed + precision; Deaf counts down"],
        ]}
      />

      <WarningBox title="Avoid Double-Flipping">Flipping a switch twice returns it to the wrong position. Blind: flip once, confirm, then leave it. Never flip, hesitate, and flip again — that counts as two actions, not one.</WarningBox>

      <TipBox title="Pro Tip: U-U-D-D Callout">The Deaf should read current switch states as a rapid shorthand: "U-U-D-D-U" (Up-Up-Down-Down-Up). This gives the Blind an auditory map before they start touching. The Mute can also hear it and cross-reference with the manual faster.</TipBox>
    </>
  );
}
