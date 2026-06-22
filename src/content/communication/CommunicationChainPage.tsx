import { ImageBlock, TipBox, WarningBox, SuccessBox, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function CommunicationChainPage() {
  return (
    <>
      <SectionHeading>The Communication Chain</SectionHeading>
      <Para>The communication chain is the backbone of BOMBANANA!. Information must travel through three monkeys — each with a different disability — before reaching the bomb. Understanding where this chain breaks is the key to consistent defusals.</Para>

      <ImageBlock src="/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg" alt="BOMBANANA! Communication Chain" caption="Every arrow is a potential failure point. Your goal: minimize information loss at each transfer."/>

      <div className="my-8 p-6 rounded-xl bg-[var(--color-surface-dark)] text-[var(--color-cream-paper)] font-mono text-sm text-center">
        MANUAL → 🙊 MUTE (reads, can't speak) → 🙉 DEAF (interprets, can't hear) → 🙈 BLIND (executes, can't see) → 💣 BOMB
      </div>

      <SubHeading>Stage 1: Manual → Mute Monkey</SubHeading>
      <Para><strong>Challenge:</strong> Under time pressure, the Mute must find the correct manual section and parse complex instructions quickly.</Para>
      <WarningBox title="Most Common Failure">Mute opens the wrong manual section → gestures wrong solution → entire chain executes the wrong thing.</WarningBox>
      <SuccessBox title="Prevention"><BulletList items={["Deaf clearly announces module type: \"WIRE MODULE — 5 wires\" before Mute opens manual", "Mute confirms by pointing to module → manual section → thumbs up", "Practice manual navigation outside of live bombs"]} /></SuccessBox>

      <SubHeading>Stage 2: Mute → Deaf Monkey</SubHeading>
      <Para><strong>Challenge:</strong> Gestures are inherently ambiguous. No words. No text. Pure body language. This is the #1 cause of failed defusals.</Para>
      <WarningBox title="Most Common Failure">Deaf misinterprets a gesture → gives wrong instruction → Blind executes wrong action → strike.</WarningBox>
      <SuccessBox title="Prevention"><BulletList items={["Pre-agreed gesture vocabulary — every gesture has ONE meaning", "Mute waits for Deaf's thumbs-up before next gesture", "Deaf shakes head if unclear → Mute repeats gesture differently"]} /></SuccessBox>

      <SubHeading>Stage 3: Deaf → Blind Monkey</SubHeading>
      <Para><strong>Challenge:</strong> The Blind cannot see what they are doing. Every action is guided purely by voice. One misheard word = one wrong action.</Para>
      <SuccessBox title="Prevention"><BulletList items={["Standardized position language: numbered left→right, top→bottom", "Blind ALWAYS repeats the instruction before executing", "Deaf ALWAYS confirms visually before saying \"go\"", "Blind narrates touch feedback: \"Third wire feels thicker than others\""]} /></SuccessBox>

      <SubHeading>The Feedback Loop</SubHeading>
      <Para>Communication is NOT one-way. After each action, feedback flows backward:</Para>
      <NumberedList items={[
        "Blind reports result: \"Done — what's the light?\" or \"ERROR — hands off\"",
        "Deaf announces: \"Green! Module complete. Next: Keypad\" or \"Strike. 2 remaining.\"",
        "Mute sees the result and prepares the next solution or corrects the current one",
      ]} />

      <ImageBlock src="/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg" alt="BOMBANANA! Feedback Loop in Action" caption="The correction loop — Mute sees Blind doing wrong thing → thumbs down → repeats gesture → Deaf corrects instruction."/>

      <TipBox title="When the Chain Breaks"><BulletList items={["Identify the break point: gesture? miscounting? wrong manual section?", "Reset that stage — don't push through", "Switch communication method if one isn't working", "Stay calm — frustration amplifies breakdown"]} /></TipBox>

      <TipBox title="Golden Rule">Start with the hardest module first — when the communication chain is freshest and strikes are zero. Time pressure degrades communication quality.</TipBox>
    </>
  );
}
