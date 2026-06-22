import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "How does the Blind Monkey cut the right wire if they can't see colors?", answer: "The Blind relies on the Deaf's verbal instructions using position (\"third wire from the left\"). The team pre-agrees on a spatial vocabulary. The Blind counts wires by touch from a fixed reference point, and the Deaf visually confirms position before saying \"cut.\"" },
  { question: "What happens if I cut the wrong wire?", answer: "The bomb registers a strike. Most bombs allow 2-3 strikes before detonation. After a strike, the module resets and you must start that module over. If you exceed the strike limit, the bomb explodes immediately." },
  { question: "How do I communicate colors without speaking? (For Mute)", answer: "The Mute uses pre-agreed gestures: number mapping (1 finger = red, 2 = blue, 3 = yellow, 4 = green), color-coded cards held up for the Deaf to see, or pointing to colored objects. The key is agreeing on the system before the bomb starts." },
  { question: "Are there always the same number of wires per module?", answer: "No. Wire modules can have 3-8 wires depending on difficulty. Early campaign levels typically have 3-5 wires. Higher difficulty levels and Free Mode custom bombs can have up to 8 wires with multi-color striped variants." },
  { question: "How do I know if a wire is the right one before cutting?", answer: "Always use the confirmation loop: Deaf instructs → Blind repeats back → Deaf says 'Confirmed' → Blind cuts. Never cut without verbal confirmation. This 1-second loop prevents the most common defusal mistake." },
];

const actionRows = [
  { step: "1", doThis: "Deaf identifies the module: \"Wire module — 5 wires\"", why: "The Mute needs the module type to find the correct manual section. Clear identification prevents wrong-solution errors." },
  { step: "2", doThis: "Mute locates the wire module section in the defusal manual", why: "Each module type has a dedicated section with decision trees. Fast manual navigation comes with practice." },
  { step: "3", doThis: "Mute gestures the solution: color reference first, then wire position", why: "Information must flow in order: which wire → where it is. Gesturing position first causes the Deaf to look at wires before knowing what to look for." },
  { step: "4", doThis: "Deaf interprets gesture → finds the target wire on the bomb → instructs Blind: \"Third wire from left — cut it\"", why: "The Deaf must visually confirm the correct wire before passing the instruction. Never guess." },
  { step: "5", doThis: "Blind repeats: \"Third wire from left, cutting now?\"", why: "This confirmation catches miscounts. If the Blind is on the wrong wire, the Deaf sees it and says \"Stop — one wire to your right.\"" },
  { step: "6", doThis: "Deaf confirms: \"Confirmed — cut\"", why: "Only after visual verification does the Deaf authorize the cut. This is the final safety check." },
  { step: "7", doThis: "Blind cuts. Deaf checks module light.", why: "Green = module complete. Red = strike. After a strike, reset and restart the module." },
];

const relatedGuides = [
  { title: "Button Module Guide", description: "Master button grids, press/hold sequences, and Simon Says patterns.", href: "/modules/button-module" },
  { title: "Switch Module Guide", description: "Toggle switch configurations and state communication strategies.", href: "/modules/switch-module" },
  { title: "Communication Chain Guide", description: "Understand how information flows through the three monkeys.", href: "/communication/communication-chain" },
  { title: "Blind Monkey Role Guide", description: "Complete strategy for the only monkey who touches the bomb.", href: "/roles/blind-monkey" },
];

export default function WireModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg" alt="BOMBANANA! Wire Module — The Blind Monkey's grayscale view of colored wires" />

      <BlufBox title="At a Glance">
        Wire modules are the most common bomb puzzle in <strong>BOMBANANA!</strong>. The Blind Monkey cannot see wire colors — everything appears gray. The team must communicate wire position precisely. <strong>The #1 mistake is cutting without verbal confirmation.</strong> Always use the 3-step loop: instruct → repeat → confirm → cut.
      </BlufBox>

      <GuideH2>How Wire Modules Work</GuideH2>
      <GuideP>A wire module presents 3-8 colored wires arranged in a row or bundle. The defusal manual specifies exactly which wire to cut based on color, position, and sometimes the bomb's serial number parity. The challenge is bridging the gap between the manual (Mute), visual identification (Deaf), and physical execution (Blind).</GuideP>

      <ArticleImage src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="Wire cutting interface" caption="The Blind Monkey's view: every wire appears gray. Only shape and position remain distinguishable." />

      <GuideH2>Color Communication: 3 Methods</GuideH2>
      <GuideP>Since the Blind cannot see colors, the team must bridge this gap using one of three communication methods. Pick one method and stick with it across all bombs for consistency.</GuideP>

      <GuideH3>Method 1: Position-Based (Recommended for Beginners)</GuideH3>
      <GuideList items={["Deaf translates color → position: \"Cut the third wire from the left\"", "Blind counts by touch from left to right", "No special gestures or equipment needed", "Works best when wires are in a clear, well-spaced row"]} />

      <GuideH3>Method 2: Color-Coded Cards</GuideH3>
      <GuideList items={["Mute holds up a colored card matching the target wire (red, blue, yellow, green)", "Deaf sees the card color, identifies the matching wire on the bomb", "Fast and reliable — but requires preparing cards beforehand", "Ideal for teams that play regularly together"]} />

      <GuideH3>Method 3: Gesture Encoding (Advanced)</GuideH3>
      <GuideList items={["Pre-agree: 1 finger = red, 2 fingers = blue, 3 = yellow, 4 = green", "Mute holds up the number → Deaf interprets color → locates wire → instructs Blind", "No props required — works in all scenarios", "Requires memorization but fastest once mastered"]} />

      <ArticleImage src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="Module detail view" caption="The Deaf Monkey's full-color view: the manual, timer, and module status lights are all visible." />

      <GuideH2>Wire Module Variants</GuideH2>
      <GuideList items={[
        "<strong>Simple Cut:</strong> One wire to cut. Identify color → cut. Fastest module type.",
        "<strong>Cut Sequence:</strong> Multiple wires in a specific order. Mute gestures the entire sequence; Deaf calls each step one at a time.",
        "<strong>Conditional Cut:</strong> Which wire depends on the bomb's serial number. Mute MUST check the serial rule in the manual before gesturing.",
        "<strong>Do Not Cut:</strong> Some wires are traps. Cutting them triggers an instant strike. Deaf must visually identify and mark forbidden wires.",
        "<strong>Multi-Color Striped:</strong> Wires have two or more colors in bands. More complex identification — use descriptive language: \"red with a blue stripe.\"",
      ]} />

      <ActionTable rows={actionRows} />

      <WarningBox title="Most Common Wire Mistake">The Blind cuts the wrong wire due to miscounting. Prevention: Blind counts out loud while physically touching each wire. Deaf watches the Blind's hand position and says \"Stop — one wire to the left\" if the count is off. Never say \"cut\" until you visually see the Blind's finger on the correct wire.</WarningBox>

      <TipBox title="Pro Tip: The Anchored Count">Blind: Run your finger along wires from the anchored end (where they connect to the panel). Counting from the fixed connection point prevents confusion when wires cross or overlap. Practice this technique in Free Mode before campaign levels.</TipBox>

      <TipBox title="Pro Tip: Condition First">Mute: For conditional wires, gesture the condition FIRST (e.g., point to an imaginary serial number → show \"even\"), then gesture the wire position. This prevents the Deaf from acting on an incomplete instruction that might be wrong after the condition is applied.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
