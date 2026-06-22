import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, RelatedGuides, TipBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "What is a module in BOMBANANA!?", answer: "A module is a self-contained puzzle attached to the bomb. It has its own visual cues, logic, and failure conditions. Solving one module does not automatically solve the rest — your team must treat every module as a separate task inside one shared timer." },
  { question: "Which modules are in the Demo?", answer: "The Demo includes four core module types: Wire, Button, Switch, and Symbols. Each teaches a different part of the game's communication system. The full game (August 2026) will add more module types and combinations." },
  { question: "How should we decide which module to solve first?", answer: "Always solve the hardest module first — when the timer is calm and you have zero strikes. Easy modules can wait. The puzzle likely to cause panic should be handled while everyone is still fresh." },
  { question: "Why do teams fail modules they think are easy?", answer: "Overconfidence. A module like Wire or Button looks simple, so teams rush, skip confirmation, and make dumb mistakes. Go slow for two seconds, save ten seconds of recovery time." },
];

const relatedGuides = [
  { title: "Wire Module", description: "Learn to count, confirm, and cut with precision.", href: "/modules/wire-module" },
  { title: "Button Module", description: "Press, hold, decide — never rush a button puzzle.", href: "/modules/button-module" },
  { title: "Switch Module", description: "Track the board state and flip in the correct order.", href: "/modules/switch-module" },
  { title: "Symbols Module", description: "Match glyphs and keep your team's callouts consistent.", href: "/modules/symbols-module" },
];

export default function OverviewModulePage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg" alt="BOMBANANA! Modules Overview" />
      <BlufBox title="At a Glance"><strong>BOMBANANA! is built around a three-player co-op setup where each role has different limits.</strong> Modules are not just puzzles — they are coordination problems. One player touches the bomb, another reads the manual, and another bridges information into action. The Demo's four module types are the foundation. Once you learn them, the full game's added complexity becomes a matter of scale.</BlufBox>

      <GuideH2>What a Module Is</GuideH2>
      <GuideP>A module is a self-contained puzzle attached to the bomb. It has its own visual cues, its own logic, and its own way of punishing mistakes. Solving one module does not automatically solve the rest of the bomb — your team must treat every module as a separate task inside one shared timer. That structure is what makes the game tense. You are not only solving puzzles — you are deciding who should read, who should remember, who should communicate, and who should act.</GuideP>

      <ArticleImage src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="Bomb module interface" caption="Every module has its own visual cues and failure conditions. Treat each one as a separate task." />

      <GuideH2>The Demo Module Types</GuideH2>
      <GuideH3>Wire</GuideH3>
      <GuideP>Wire is the most direct logic module in the Demo. It rewards careful counting, clean confirmation, and one exact action instead of guesswork. This is the best place to teach new players how to slow down and verify a clue before touching the bomb.</GuideP>
      <GuideH3>Button</GuideH3>
      <GuideP>Button is a decision module. The important part is not speed — it is identifying the correct action before anyone presses anything. If your team rushes, this module punishes that habit immediately.</GuideP>
      <GuideH3>Switch</GuideH3>
      <GuideP>Switch is a state-tracking module. It becomes harder when players stop remembering what the board looked like before the last action. This module most clearly rewards clean callouts and a single person keeping track of state.</GuideP>
      <GuideH3>Symbols</GuideH3>
      <GuideP>Symbols is a visual-matching module. The challenge is not just recognition, but making sure the whole team uses the same language for what they see. It is one of the best examples of why communication matters as much as puzzle knowledge.</GuideP>

      <ArticleImage src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="Module types in BOMBANANA!" caption="Wire, Button, Switch, and Symbols — the four core module types in the Demo." />

      <GuideH2>Module Categories</GuideH2>
      <GuideList items={[
        "<strong>Logic Puzzles:</strong> Read a clue and apply a rule correctly. Straightforward but dangerous — a single wrong assumption causes a strike. Wire is the clearest example.",
        "<strong>Sequence Modules:</strong> Actions in a specific order. Skip a step or do things out of sequence, and the module fails even if everyone had the right idea. Switch fits well here.",
        "<strong>Memory Modules:</strong> Punish teams that don't record what happened a moment ago. The longer the sequence, the more dangerous it is to rely on 'I think we already did that.'",
        "<strong>Timed Challenges:</strong> Speed becomes part of the solution. Accuracy still matters more than panic, but the team has less room to breathe.",
        "<strong>Communication Tests:</strong> Vague callouts, inconsistent naming, and overlapping voices do more damage than the puzzle itself. Symbols is the clearest example.",
      ]} />

      <GuideH2>Difficulty Flow</GuideH2>
      <GuideP><strong>Early Levels:</strong> Fewer modules, simpler logic. Best time to build habits: call everything out, confirm every move, keep the rhythm calm. The goal is consistency, not speed.</GuideP>
      <GuideP><strong>Mid Levels:</strong> More overlap. Multiple modules may be active. More information to track, more pressure to prioritize. A team either starts sounding coordinated or starts sounding noisy.</GuideP>
      <GuideP><strong>High Levels:</strong> Modules stack, panic builds, the bomb forces handling more than one problem at once. This is where your callout system really matters.</GuideP>
      <GuideP><strong>Late Levels:</strong> Communication becomes the real puzzle. If your team cannot standardize language, record state, and execute one action at a time, the bomb punishes every shortcut.</GuideP>

      <GuideH2>The Basic Defusal Loop</GuideH2>
      <GuideList items={[
        "<strong>1. Identify first:</strong> Before anyone starts solving, identify every visible module. The Deaf calls out what is visible, what needs attention, and which module looks like the biggest threat.",
        "<strong>2. Prioritize second:</strong> Do the hardest module first while the bomb is calm and you have zero strikes. Easy modules can wait.",
        "<strong>3. Execute one at a time:</strong> Never split focus across two modules unless the game forces it. Finish one action, confirm success, then move to the next target.",
        "<strong>4. Confirm every action:</strong> Instruction → repeat → confirm → execute. It sounds slow, but this is how you avoid turning a correct clue into a wrong strike.",
        "<strong>5. Debrief after the bomb:</strong> Talk about what went wrong. If one module repeatedly causes problems, your team needs a better callout format — not just more practice.",
      ]} />

      <TipBox title="The Most Important Habit">A good team does not rely on memory alone. It relies on a repeatable communication chain, a stable vocabulary, and a willingness to stop for one second before making a bad move. Keep first calls short. Keep naming consistent. Keep execution slow enough to be safe.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
