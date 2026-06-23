import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "Is Wire the easiest module?", answer: "Usually yes, but it only stays easy if the team does not rush or guess. The Wire Module looks simple, so teams treat it like a warmup — that is exactly when they make the dumbest mistakes." },
  { question: "Who should handle wire callouts?", answer: "It helps to let one player own the wire callouts consistently so the team does not keep changing language between runs. Usually the Deaf player reads the wires left to right, the Mute confirms the rule, and the Blind executes." },
  { question: "What is the biggest Wire Module mistake?", answer: "Cutting too early, or using color instead of the actual rule. 'Cut the blue one' is dangerous when there are multiple blue wires. Always use position: 'Cut wire two, the third from the left.'" },
  { question: "Should Wire be solved first?", answer: "Often yes — especially if it helps the team settle into a rhythm. A clean Wire solve sets the tone for the rest of the bomb." },
];

const actionRows = [
  { step: "1. Count", doThis: "Count every wire on the module. Do not cut, hover, or guess while counting.", why: "Many mistakes happen when players skip the count and jump straight to the color they think looks right." },
  { step: "2. Read", doThis: "Read the rule source or module clue that tells you how to choose the safe wire.", why: "The Mute player is critical here if they hold the rule knowledge. Never guess the rule from memory." },
  { step: "3. Confirm", doThis: "Say the position: 'Cut wire two' or 'Cut the leftmost wire.' The whole team repeats the target.", why: "Never say 'cut the blue one' if there is any possibility of confusion. Position language prevents ambiguity." },
  { step: "4. Cut", doThis: "After the team has agreed, the Blind executes the cut. No mid-action changes.", why: "If the callout was wrong, stop and re-read rather than trying to improvise after the cut." },
];

const relatedGuides = [
  { title: "Button Module", description: "Master decision-based puzzles — press, hold, confirm.", href: "/modules/button-module" },
  { title: "Switch Module", description: "Track board state and flip in the correct order.", href: "/modules/switch-module" },
  { title: "Symbols Module", description: "Match glyphs and standardize your team's visual language.", href: "/modules/symbols-module" },
  { title: "Team Callouts", description: "Standardized phrases for every in-game situation.", href: "/communication/team-callouts" },
];

const solveRhythm = [
  { label: "Read", detail: "Count wires and collect the clue before naming a target." },
  { label: "Confirm", detail: "Repeat the exact wire position so the team agrees." },
  { label: "Cut", detail: "The Blind player acts only after confirmation." },
] as const;

export default function WireModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg" alt="BOMBANANA! Wire Module — Read, Confirm, Cut" />
      
      <PageTitle highlight="Wire Module">Wire Module Guide: Read, Confirm, and Cut Safely</PageTitle>
      <section
        aria-label="Wire module fast solve rhythm"
        className="mb-8 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4"
      >
        <p className="mb-3 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
          Read -&gt; Confirm -&gt; Cut
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {solveRhythm.map((step) => (
            <div key={step.label} className="rounded-md bg-[var(--color-whisper-gray)] px-3 py-3">
              <p className="text-sm font-bold text-[var(--color-forest-ink)]">{step.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-forest-ink)]/65">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>
<BlufBox title="At a Glance"><strong>Wire modules are a counting-and-logic puzzle.</strong> The exact answer depends on what the module shows, and the safest approach is always to identify the full layout before anyone touches the bomb. For new players, this is the best first module to learn — it teaches the entire team the basic rhythm of clue reading and confirmation.</BlufBox>

      <GuideH2>How the Wire Module Works</GuideH2>
      <GuideP>The wire puzzle is built around visible clues: wire count, wire color, wire position, and any additional indicator that changes the correct answer. A player should not guess based on color alone. In BOMBANANA!, a correct solution comes from combining the visual cue with the rule, then verifying the exact target before cutting. The best Wire Module playstyle is slow at the start and clean at the end.</GuideP>

      <ArticleImage src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="Wire module close-up" caption="Before anyone gives a command, the team must answer: How many wires? What are the colors left to right? Which wire is the target?" />

      <GuideH2>How to Recognize It</GuideH2>
      <GuideP>The Wire Module presents one or more wires in a compact bomb panel. The important thing is not just what color the wires are, but how many there are and where each one sits in the sequence. Before anyone gives a command, the team should answer:</GuideP>
      <GuideList items={[
        "How many wires are visible?",
        "What are the colors from left to right?",
        "Is there any clue that changes the rule?",
        "Which wire position is the final target?",
      ]} />
      <GuideP>If the team cannot answer those questions clearly, the module has not been read properly yet.</GuideP>

      <ActionTable rows={actionRows} />

      <GuideH2>Common Mistakes</GuideH2>
      <WarningBox title="Cutting by color only"><strong>This fails when more than one wire shares the same color</strong> or when color is not the deciding factor. Color should support the solution, not replace it. 'The second blue one' is safer than 'the blue one.'</WarningBox>
      <GuideList items={[
        "<strong>Forgetting wire order:</strong> Position matters. Left-to-right order, count, and relative placement can all change the answer.",
        "<strong>Moving too fast:</strong> The Wire Module looks easy, so teams treat it like a warmup. That is exactly when they make the dumbest mistakes. Go slow for two seconds and save ten seconds of recovery time.",
        "<strong>Vague callouts:</strong> 'Cut that one' is not a real instruction. Good teams use numbered positions and repeat them before execution.",
      ]} />

      <GuideH2>Team Callout Example</GuideH2>
      <GuideP>A clean Wire Module callout sequence should sound like this:</GuideP>
      <div className="my-4 p-4 rounded-lg bg-[var(--color-whisper-gray)] font-mono text-sm text-[var(--color-forest-ink)]/80">
        <p>"There are four wires."</p>
        <p>"Left to right: yellow, green, blue, red."</p>
        <p>"Rule says cut position two."</p>
        <p>"Confirm?" — "Confirmed."</p>
        <p>"Cutting now."</p>
      </div>
      <GuideP>That format removes ambiguity before the Blind player commits.</GuideP>

      <TipBox title="Pro Tip: Speed Up the Read, Not the Cut">If your team wants to get faster, do not speed up the cut. Speed up the reading process by using a fixed order every time: count → clue → position → confirm → act. Let one player always own wire callouts so the language stays consistent.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
