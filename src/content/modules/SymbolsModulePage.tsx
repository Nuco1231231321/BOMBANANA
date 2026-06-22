import { ImageBlock, TipBox, WarningBox, ComparisonTable, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function SymbolsModulePage() {
  return (
    <>
      <SectionHeading>Symbols Modules</SectionHeading>
      <Para>Symbols modules are among the hardest puzzles in BOMBANANA!. They display abstract glyphs on screen that the Blind cannot see. The Deaf must verbally describe symbols, and the Mute must match descriptions to the manual's symbol-action lookup table.</Para>

      <ImageBlock src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="BOMBANANA! Symbols Module" caption="A symbols module display. Abstract glyphs that the Deaf must describe in words." />

      <SubHeading>How Symbols Modules Work</SubHeading>
      <BulletList items={["1-4 abstract symbols displayed on screen", "Manual contains a lookup table: symbol description → action", "Deaf describes each symbol in words", "Mute matches description to manual entry", "Mute gestures the corresponding action to the Deaf"]} />

      <SubHeading>Symbol Description Framework</SubHeading>
      <Para>Use this structured approach when describing symbols:</Para>
      <NumberedList items={[
        "Basic shape: \"It looks like a circle with a cross inside\"",
        "Comparison: \"Like a backwards letter N\" or \"Similar to a WiFi icon\"",
        "Features: \"Three vertical lines — the middle one is taller\"",
        "Common objects: \"Looks like a crown\" or \"Shaped like a key\"",
      ]} />

      <ComparisonTable
        headers={["Visual Feature", "Description Words to Use"]}
        rows={[
          ["Circle-based", "Dot, ring, target (concentric), filled, empty"],
          ["Line-based", "Vertical, horizontal, diagonal, cross, X, parallel"],
          ["Triangle-based", "Pointing up/down/left/right, pyramid"],
          ["Square-based", "Square, rectangle, diamond, checkerboard"],
          ["Curves", "Wave, spiral, hook, crescent, arch"],
          ["Combined", "Circle+line, square+X, triangle inside circle"],
        ]}
      />

      <SubHeading>Symbol Module Variants</SubHeading>
      <BulletList items={[
        "Single Symbol — One symbol, one action. Fastest — but description must be perfect.",
        "Pair Match — Two symbols; must find the matching pair in the manual.",
        "Sequence — 3-4 symbols form an action sequence. Document each step as you go.",
        "Exclusion — \"Which symbol is NOT present?\" — harder lookup in the manual.",
        "Rotated — Symbols may appear tilted. Deaf must specify orientation: \"Turned sideways.\"",
      ]} />

      <WarningBox title="Vague Descriptions Kill">\"Circle with a line\" could match 5+ different symbols. Be specific: \"Circle with a vertical line extending below the circle only.\" The Mute cannot guess — they must find the EXACT symbol in the manual.</WarningBox>

      <TipBox title="Pro Tip: Practice Symbol Recognition">Before playing, have someone show the Deaf random abstract shapes and practice describing each in 10 words or fewer. Speed and precision of symbol description is the #1 bottleneck on these modules.</TipBox>

      <TipBox title="For the Mute">Memorize the 10-15 most common symbols in the manual before the session. If you can recognize \"target\" or \"crown\" instantly from the Deaf's description, you save 5-10 seconds per symbol lookup.</TipBox>
    </>
  );
}
