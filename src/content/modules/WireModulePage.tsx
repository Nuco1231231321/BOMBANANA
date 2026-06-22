import { ImageBlock, TipBox, WarningBox, ComparisonTable, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function WireModulePage() {
  return (
    <>
      <SectionHeading>Wire Modules</SectionHeading>
      <Para>Wire modules are the most common — and most iconic — bomb defusal puzzle in BOMBANANA!. A panel of colored wires, each one a potential solution or a potential explosion. The Blind Monkey sees only gray; the Mute must gesture the correct color and position; the Deaf must interpret and instruct.</Para>

      <ImageBlock src="/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg" alt="Wire Module Close-up in BOMBANANA!" caption="A typical wire module panel — multiple colored wires that the Blind sees only as gray lines." />

      <SubHeading>How Wire Modules Work</SubHeading>
      <Para>A wire module presents 3-8 colored wires in a row or bundle. The defusal manual specifies exactly which wire to cut, based on:</Para>
      <BulletList items={["Color — Red, blue, yellow, green, white, black", "Position — First, second, third from left or right", "Serial number rules — Some wires selected by bomb serial parity", "Neighbor conditions — Cut the blue wire only if next to a red wire"]} />

      <ImageBlock src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="BOMBANANA! Wire Cutting Interface" caption="The Blind Monkey's grayscale view — colors are invisible, only shapes and positions remain." />

      <SubHeading>Color Communication: 3 Methods</SubHeading>

      <ComparisonTable
        headers={["Method", "How It Works", "Pros", "Cons"]}
        rows={[
          ["Position-Based", "Deaf translates color → position: \"Third wire from left\"", "No special gestures needed", "Requires wires in a clear row"],
          ["Color Cards", "Mute holds up a colored card matching target wire", "Fast and reliable", "Requires preparing cards beforehand"],
          ["Gesture Encoding", "Pre-agree: 1 finger=red, 2=blue, 3=yellow, 4=green", "Works in all scenarios", "Requires memorization"],
        ]}
      />

      <TipBox title="Best Method for Beginners">Use position-based communication first. Count wires together from left to right. Once your team has rhythm, graduate to gesture encoding for speed.</TipBox>

      <SubHeading>Wire Module Variants</SubHeading>
      <ComparisonTable
        headers={["Variant", "Description", "Strategy"]}
        rows={[
          ["Simple Cut", "One wire to cut", "Identify and cut — fastest module"],
          ["Cut Sequence", "Multiple wires in specific order", "Mute gestures sequence; Deaf calls each step"],
          ["Conditional Cut", "Target depends on bomb serial", "Mute checks serial rule in manual first"],
          ["Do Not Cut", "Some wires are forbidden", "Deaf identifies forbidden wires clearly"],
          ["Multi-Striped", "Wires have multiple colors", "More complex color identification"],
        ]}
      />

      <SubHeading>Step-by-Step: Solving a Wire Module</SubHeading>
      <NumberedList items={[
        "Deaf identifies: \"Wire module — 5 wires\"",
        "Mute locates the wire module section in the manual",
        "Mute gestures the solution — color first, then position",
        "Deaf interprets gesture and visually confirms the correct wire on the bomb",
        "Deaf instructs Blind: \"Third wire from the left — cut it\"",
        "Blind repeats: \"Third wire from left, cutting now?\"",
        "Deaf confirms: \"Confirmed — cut\"",
        "Blind cuts — wire separates cleanly",
      ]} />

      <WarningBox title="Most Common Wire Mistake">Blind cuts wrong wire due to miscounting. Prevention: Blind counts out loud while physically touching each wire with their finger. Deaf watches and confirms position before saying "cut."</WarningBox>

      <SubHeading>Pro Tips by Role</SubHeading>
      <TipBox title="For the Blind Monkey">Run your finger along wires from the anchored end (where they connect to the panel). Counting from the fixed end prevents confusion if wires cross over each other.</TipBox>

      <TipBox title="For the Deaf Monkey">If the manual says "cut the blue wire next to the red wire," find BOTH wires first. Visually confirm they are adjacent before giving the cut instruction. Never assume adjacency.</TipBox>

      <TipBox title="For the Mute Monkey">For conditional wires, gesture the condition FIRST (e.g., point at imaginary serial number), then the wire position. This prevents the Deaf from acting on incomplete information.</TipBox>
    </>
  );
}
