import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "How does the Blind find the right button without seeing?", answer: "The Blind uses the 'anchor and sweep' technique: place the non-dominant hand on the top-left corner of the module as a fixed reference, then sweep the dominant hand across rows and columns, counting by touch. The Deaf confirms visually: \"Row 2, Column 3 — that's the one. Press it.\"" },
  { question: "What's the difference between Press and Hold?", answer: "Press means push and immediately release. Hold means push and keep your finger down until the Deaf says \"Release now.\" Hold durations vary by module — the Deaf counts down from the timer display. Releasing too early or too late can trigger a strike." },
  { question: "Are all button modules grid-based?", answer: "Most are arranged in 2×2, 3×3, or 4×3 grids. However, some advanced modules use irregular layouts (e.g., a circular arrangement or scattered buttons). The Deaf must describe the layout to the Blind before giving instructions." },
  { question: "How do we handle Simon Says button modules?", answer: "The module flashes a pattern of buttons that gets longer each round. The Deaf calls each button by grid position as it lights up. The Blind repeats the pattern from memory. This module heavily tests the Deaf's observation skills and the Blind's memory." },
];

const actionRows = [
  { step: "1", doThis: "Deaf: \"Button module — 3×3 grid\"", why: "The Blind needs to know the grid size to mentally map the space before touching." },
  { step: "2", doThis: "Blind places anchor hand on top-left corner", why: "A fixed reference prevents spatial drift as the Blind moves between buttons." },
  { step: "3", doThis: "Mute gestures solution: row number, then column number", why: "Breaking the target into two numbers (row, column) is clearer than one complex gesture." },
  { step: "4", doThis: "Deaf: \"Row 2, Column 1 — press\"", why: "Always give row first, then column. Consistent order prevents confusion under pressure." },
  { step: "5", doThis: "Blind counts to target: \"Row two... column one... pressing\"", why: "Vocalizing the count lets the Deaf verify position before the action." },
  { step: "6", doThis: "Deaf confirms visually, Blind presses", why: "The Deaf watches the Blind's finger approach and can call \"Stop\" if the trajectory is wrong." },
];

const relatedGuides = [
  { title: "Wire Module Guide", description: "Master wire cutting sequences and color communication strategies.", href: "/modules/wire-module" },
  { title: "Symbols Module Guide", description: "Learn to describe abstract glyphs and match them to manual entries.", href: "/modules/symbols-module" },
  { title: "Team Callouts Reference", description: "Standardized phrases for precise, fast communication.", href: "/communication/team-callouts" },
  { title: "Deaf Monkey Role Guide", description: "The communication bridge — see everything, hear nothing.", href: "/roles/deaf-monkey" },
];

export default function ButtonModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="BOMBANANA! Button Module Grid" />
      <BlufBox title="At a Glance"><strong>Button modules require navigating a grid by touch.</strong> Buttons may have colors, labels, or both — all invisible to the Blind. The Deaf describes target buttons by grid coordinates (row, column). <strong>The most common error is the Blind miscounting rows or columns under time pressure.</strong> Always use the anchor-and-sweep technique.</BlufBox>

      <GuideH2>Button Grid Navigation by Touch</GuideH2>
      <GuideP>Button modules present a grid — typically 2×2, 3×3, or 4×3. Each button may have a unique color, label, or both. The Blind cannot see any of this. Navigation relies entirely on the Deaf's verbal grid coordinates and the Blind's systematic touch-counting.</GuideP>

      <ArticleImage src="/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.thumb.jpg" alt="Button module close-up" caption="A 3×3 button grid: 9 possible targets, only one correct answer per step." />

      <GuideH2>Action Types</GuideH2>
      <GuideList items={[
        "<strong>Press:</strong> Push and immediately release. The most common action.",
        "<strong>Hold:</strong> Press and keep holding. The Deaf counts down from the timer. Release only when told.",
        "<strong>Release:</strong> Lift your finger from a held button. Timing-critical — release at the exact moment the Deaf says \"now.\"",
        "<strong>Tap Sequence:</strong> Quick successive presses on different buttons (e.g., \"top-left, bottom-right, top-left\").",
        "<strong>Long Press:</strong> Hold for a variable duration specified in the manual — could be 3, 5, or 8 seconds.",
      ]} />

      <ActionTable rows={actionRows} />

      <WarningBox title="The Row/Column Confusion">Some teams confuse row vs. column under pressure. Before starting, agree: <strong>"Row = horizontal (side to side). Column = vertical (up and down)."</strong> Say it out loud at the start of each session. One confused axis = one wrong button = one strike.</WarningBox>

      <TipBox title="Pro Tip: Anchor and Sweep">The Blind keeps one hand on the module corner at all times. The other hand sweeps across rows systematically — top row first, then middle, then bottom. This prevents spatial disorientation between button presses.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
