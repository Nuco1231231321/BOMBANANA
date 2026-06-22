import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, RelatedGuides, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";

const relatedGuides = [
  { title: "Wire Module", description: "Color communication, cutting sequences, conditional cuts.", href: "/modules/wire-module" },
  { title: "Button Module", description: "Grid navigation, press/hold timing, Simon Says patterns.", href: "/modules/button-module" },
  { title: "Switch Module", description: "Toggle states, flip sequences, pattern matching.", href: "/modules/switch-module" },
  { title: "Symbols Module", description: "Abstract glyphs, description frameworks, symbol lookup.", href: "/modules/symbols-module" },
];

export default function OverviewModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg" alt="BOMBANANA! Module Overview" />
      <BlufBox title="At a Glance"><strong>Every bomb in BOMBANANA! is built from modules — independent puzzles with unique rules, solutions, and panic effects.</strong> The Demo includes four core module types: Wire, Button, Switch, and Symbols. The full game (August 2026) will add significantly more. <strong>Master these four, and you can handle any bomb the Demo throws at you.</strong></BlufBox>

      <GuideH2>Module Categories</GuideH2>
      <GuideH2>Logic Puzzles</GuideH2>
      <GuideP>Modules that require deductive reasoning. The Mute reads the manual's logic tree (e.g., "If the serial number ends in an even digit, cut the second wire; otherwise, cut the fourth"). The Mute gestures the correct path; the Deaf interprets; the Blind executes.</GuideP>

      <GuideH2>Sequence Modules</GuideH2>
      <GuideP>Modules requiring actions in a specific order. Missing a step or doing them out of sequence triggers a strike. The key: one step at a time. Never queue multiple instructions — complete step 1, confirm, then move to step 2.</GuideP>

      <GuideH2>Memory Modules</GuideH2>
      <GuideP>Require remembering previous states and comparing them. Gets harder as more information accumulates across stages. The Deaf should document each stage's result (mentally or on scratch paper) to avoid confusion in later stages.</GuideP>

      <GuideH2>Timed Challenges</GuideH2>
      <GuideP>Complete the module within a time window after activation. The Deaf's timer monitoring is critical here — announce remaining time at each threshold. Speed without precision is useless; precision without speed explodes.</GuideP>

      <GuideH2>Communication Tests</GuideH2>
      <GuideP>Modules specifically designed to exploit the communication gaps between roles. These appear in higher difficulty levels and often combine multiple mechanics (e.g., a symbols module that also has a time limit). The ultimate test of your team's communication system.</GuideP>

      <GuideH2>Difficulty Progression</GuideH2>
      <GuideList items={[
        "<strong>Levels 1-3:</strong> 3-4 modules per bomb. Basic logic, single-step solutions, one module active at a time.",
        "<strong>Levels 4-6:</strong> 4-5 modules per bomb. Multi-step sequences, memory elements, two modules may be active simultaneously.",
        "<strong>Levels 7-9:</strong> 5-6 modules per bomb. Timed challenges, panic effect chains, three modules active at once.",
        "<strong>Levels 10+:</strong> 6-8 modules per bomb. Communication test modules, all panic effects enabled, maximum complexity.",
      ]} />

      <GuideH2>General Module Strategy</GuideH2>
      <GuideList items={[
        "<strong>1. Identify first:</strong> Deaf calls out every module type and position before defusing starts.",
        "<strong>2. Prioritize:</strong> Solve the hardest module first when time pressure is lowest and strikes are zero.",
        "<strong>3. One at a time:</strong> Never split your team's attention across two modules. Complete one → confirm green → next.",
        "<strong>4. Confirm every action:</strong> Instruction → repeat → confirm → execute. Every. Single. Time.",
        "<strong>5. Debrief:</strong> After each bomb, discuss which module was hardest and why. Adjust your strategy.",
      ]} />

      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
