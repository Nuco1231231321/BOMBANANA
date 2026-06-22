import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "How does the Deaf describe symbols accurately?", answer: "Use a structured framework: basic shape first (\"it's a circle\"), then features (\"with a cross inside\"), then comparisons (\"looks like a target symbol\"). Avoid vague descriptions like 'weird shape.' Be specific about orientation: \"The triangle points to the right, not up.\"" },
  { question: "What if the Mute can't find the symbol in the manual?", answer: "The Mute signals 'not found' (both palms up, shrug). The Deaf must re-describe the symbol using different words or a different comparison. If still stuck after two attempts, describe the symbol feature by feature while the Mute scans the manual's reference images visually." },
  { question: "How are symbols modules different from other puzzles?", answer: "Unlike wire or button modules that use position-based instructions, symbols modules rely entirely on the Deaf's ability to describe abstract visual information and the Mute's ability to match descriptions to images. There is no position-based fallback — description accuracy is everything." },
  { question: "Are symbols always the same across all bombs?", answer: "The full game will include a library of symbols. Some appear frequently across bombs; others are rare. Practice in Free Mode to build recognition of the most common 10-15 symbols. The Demo includes a subset of the full symbol library." },
];

const relatedGuides = [
  { title: "Wire Module Guide", description: "Master wire cutting with color communication.", href: "/modules/wire-module" },
  { title: "Button Module Guide", description: "Grid navigation and timed button actions.", href: "/modules/button-module" },
  { title: "Team Callouts Reference", description: "Standardized phrases for every situation.", href: "/communication/team-callouts" },
  { title: "Mute Monkey Role Guide", description: "Hold the manual. Find the answers. Gesture through chaos.", href: "/roles/mute-monkey" },
];

export default function SymbolsModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="BOMBANANA! Symbols Module Display" />
      <BlufBox title="At a Glance"><strong>Symbols modules are the hardest puzzle in BOMBANANA!</strong> Abstract glyphs appear on screen. The Deaf must describe each one in words. The Mute matches the description to a lookup table in the manual, then gestures the corresponding action. <strong>Vague descriptions are the #1 cause of failure on this module.</strong> Every symbol description must be precise and specific.</BlufBox>

      <GuideH2>How Symbols Modules Work</GuideH2>
      <GuideP>A symbols module displays 1-4 abstract glyphs on its screen. The manual contains a lookup table — each symbol maps to a specific action (cut a wire, press a button, flip a switch). The Deaf describes the symbol in words; the Mute finds the matching entry. This is the only module type where the communication bottleneck is purely descriptive language, not spatial positioning.</GuideP>

      <ArticleImage src="/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg" alt="Symbol description in progress" caption="The Deaf describes what they see. The Mute searches the manual for a match. Precision matters more than speed." />

      <GuideH2>The Symbol Description Framework</GuideH2>
      <GuideP>Use this 4-step approach when describing any symbol:</GuideP>
      <GuideList items={[
        "<strong>1. Basic Shape:</strong> \"It's a circle\" / \"It's a triangle\" — start with the fundamental form.",
        "<strong>2. Features:</strong> \"...with a vertical line through the center\" — add what's inside or attached to it.",
        "<strong>3. Comparisons:</strong> \"Looks like a WiFi icon\" — familiar analogies help the Mute instantly recognize the symbol.",
        "<strong>4. Orientation:</strong> \"The arrow points right\" / \"It's rotated 45 degrees\" — direction matters.",
      ]} />

      <GuideH2>Symbol Vocabulary Reference</GuideH2>
      <GuideList items={[
        "<strong>Circle-based:</strong> dot, ring, target (concentric circles), filled circle, empty circle, circle with cross",
        "<strong>Line-based:</strong> vertical line, horizontal line, diagonal, cross/X, parallel lines, zigzag",
        "<strong>Triangle-based:</strong> pointing up/down/left/right, pyramid (triangle + base line), two triangles overlapping",
        "<strong>Square-based:</strong> square, rectangle, diamond (rotated square), checkerboard pattern",
        "<strong>Curves:</strong> wave (sine wave), spiral, hook, crescent moon, arch/rainbow shape",
        "<strong>Combined:</strong> circle with line through it, square with X inside, triangle inside circle, arrow (line + triangle)",
      ]} />

      <GuideH3>Module Variants</GuideH3>
      <GuideList items={[
        "<strong>Single Symbol:</strong> One glyph → one action. Fastest variant — but the description must be perfect on the first try.",
        "<strong>Pair Match:</strong> Two symbols displayed; the manual shows them as a matching pair. Find the pair → execute combined action.",
        "<strong>Sequence:</strong> 3-4 symbols form an action sequence. Document each symbol-action mapping as you progress through the sequence.",
        "<strong>Exclusion:</strong> \"Which of these symbols is NOT in the manual?\" — the Mute must check every listed symbol against every displayed one.",
        "<strong>Rotated:</strong> Symbols may appear rotated, flipped, or mirrored. The Deaf MUST specify orientation: \"It's the crown symbol, but rotated 90 degrees clockwise.\"",
      ]} />

      <WarningBox title="Vague Descriptions Kill Runs">\"Circle with a line\" could match 5+ different symbols in the manual. Be painfully specific: \"Circle with a vertical line that extends below the circle only — not above.\" The Mute cannot guess. If there are two possible matches in the manual, ask the Deaf to re-describe with more detail.</WarningBox>

      <TipBox title="Pro Tip: Practice Symbol Recognition">Before a session, spend 5 minutes in Free Mode practicing symbol description. Have one person show the Deaf random shapes and describe each in 10 words or fewer. Speed and precision come from practice — not from memorizing the manual.</TipBox>

      <TipBox title="Pro Tip: Memorize Common Symbols">The Mute should memorize the 10-15 most frequent symbols by sight. Recognizing \"target\" or \"crown\" instantly from the Deaf's description saves 5-10 seconds per lookup — critical time in a 3-minute bomb window.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
