import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideP, GuideList, PageJumpLinks } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";
import { ModuleHowToJsonLd, FAQPageJsonLd } from "@/components/layout/JsonLd";

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

const wireHowToSteps = [
  { name: "Count the wires", text: "The Deaf Monkey counts every visible wire on the module. Note how many wires and their colors from left to right. Never skip counting — guessing the count causes immediate mistakes." },
  { name: "Identify the LED color", text: "The Deaf Monkey locates and announces the color of the LED indicator light on the wire module. This is the deciding clue. Common colors: red, blue, yellow." },
  { name: "Mute looks up the rule", text: "Using the wire count and LED color, the Mute Monkey finds the matching rule in the bomb manual. The rule determines which numbered wire (1st, 2nd, 3rd, 4th) must be cut." },
  { name: "Mute gestures the number", text: "The Mute Monkey holds up the corresponding number of fingers to indicate which wire to cut. Use large, clear gestures at chest-to-head height." },
  { name: "Deaf confirms and relays", text: "The Deaf Monkey sees the gesture and speaks the instruction clearly: 'Cut wire number three.' The Blind Monkey repeats it back before acting." },
  { name: "Blind cuts after confirmation", text: "The Blind Monkey confirms the instruction, positions the scissors on the correct wire, waits for final 'Confirmed,' and then cuts. Never cut before confirmation." },
];

export default function WireModulePage() {
  return (
    <>
      <ModuleHowToJsonLd moduleName="Wire Module" steps={wireHowToSteps} totalTime="PT2M" imageUrl="https://bombanana.online/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg" />
      <FAQPageJsonLd questions={faqs} />
      <PageHero src="/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg" alt="BOMBANANA! Wire Module — Read, Confirm, Cut" />
      
      <PageTitle highlight="Wire Module">Wire Module Guide: Read, Confirm, and Cut Safely</PageTitle>
      <p className="mb-4 text-base leading-7 text-[var(--color-forest-ink)]/72">
        The Wire Module answer pattern is simple: count the wires, read the deciding clue, name the exact wire position, then cut only after confirmation.
      </p>
      <PageJumpLinks
        links={[
          { href: "#wire-fast-answer", label: "Fast answer" },
          { href: "#wire-recognize", label: "How to recognize it" },
          { href: "#wire-mistakes", label: "Common mistakes" },
          { href: "#wire-callout", label: "Callout example" },
        ]}
      />
      <section id="wire-fast-answer" aria-label="Wire module fast answer">
        <BlufBox title="Fast Answer"><strong>For most Wire Module searches, the useful workflow is:</strong> count every wire, read the clue that changes the rule, identify the exact wire position, and confirm before the Blind player cuts. Google and players both need the same thing here: one exact action, not a vague color guess.</BlufBox>
      </section>
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

      <div id="wire-recognize" />
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

      <div id="wire-mistakes" />
      <GuideH2>Common Mistakes</GuideH2>
      <WarningBox title="Cutting by color only"><strong>This fails when more than one wire shares the same color</strong> or when color is not the deciding factor. Color should support the solution, not replace it. 'The second blue one' is safer than 'the blue one.'</WarningBox>
      <GuideList items={[
        "<strong>Forgetting wire order:</strong> Position matters. Left-to-right order, count, and relative placement can all change the answer.",
        "<strong>Moving too fast:</strong> The Wire Module looks easy, so teams treat it like a warmup. That is exactly when they make the dumbest mistakes. Go slow for two seconds and save ten seconds of recovery time.",
        "<strong>Vague callouts:</strong> 'Cut that one' is not a real instruction. Good teams use numbered positions and repeat them before execution.",
      ]} />

      <div id="wire-callout" />
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

      <GuideH2>Wire Module Rules — Decision Table</GuideH2>
      <GuideP>The Wire Module's correct answer depends on two things: <strong>how many wires are present</strong> and <strong>the color of the LED indicator light</strong> on the module. The Deaf Monkey must call out both pieces of information. Below is the complete decision table for the most common configurations.</GuideP>

      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Wire Count</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">LED Color</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Wire Colors (Left → Right)</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Cut Wire #</th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--color-forest-ink)]">Mute Gesture</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">3 Wires</td>
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1" /> Red</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Red, Green, Blue</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Wire #3 (Blue)</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Hold up 3 fingers</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">3 Wires</td>
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1" /> Blue</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Yellow, Green, Blue</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Wire #2 (Green)</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Hold up 2 fingers</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">3 Wires</td>
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-1" /> Yellow</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Blue, Yellow, Red</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Wire #1 (Blue)</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Hold up 1 finger</td>
            </tr>
            <tr className="border-b border-[var(--color-pencil-gray)]">
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">4 Wires</td>
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1" /> Red</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Blue, Red, Yellow, Green</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Wire #4 (Green)</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Hold up 4 fingers</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[var(--color-forest-ink)]">4 Wires</td>
              <td className="px-4 py-3"><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1" /> Blue</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Green, Red, Yellow, Blue</td>
              <td className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Wire #3 (Yellow)</td>
              <td className="px-4 py-3 text-[var(--color-forest-ink)]/70">Hold up 3 fingers</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-xs text-[var(--color-forest-ink)]/50">Note: Wire configurations may vary based on game version and difficulty. Always verify LED color and wire count before making the final call.</p>

      <GuideH2>Communication Flow for Wire Modules</GuideH2>
      <GuideP>The Wire Module follows a strict communication chain. Each role has a specific job:</GuideP>
      <div className="my-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">1. Deaf Monkey</p>
          <p className="mt-2 text-sm text-[var(--color-forest-ink)]/70">"Four wires. Left to right: green, red, yellow, blue. LED is <strong>blue</strong>."</p>
        </div>
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">2. Mute Monkey</p>
          <p className="mt-2 text-sm text-[var(--color-forest-ink)]/70">Looks up: 4 wires + blue LED → Cut wire #3. Holds up <strong>3 fingers</strong>.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">3. Blind Monkey</p>
          <p className="mt-2 text-sm text-[var(--color-forest-ink)]/70">"Cutting wire three." Waits for "Confirmed." Then <strong>cuts</strong>.</p>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
