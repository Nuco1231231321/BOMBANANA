import { ImageBlock, TipBox, WarningBox, SuccessBox, SectionHeading, SubHeading, Para, BulletList, NumberedList, ComparisonTable } from "@/components/content/ContentBlocks";

export default function HowToPlayPage() {
  return (
    <>
      <SectionHeading>How to Play BOMBANANA!</SectionHeading>
      <Para>So you've downloaded the Demo, rounded up two friends, and you're staring at the main menu. This guide walks you through every step — from launch to your first successful (or explosive) defusal.</Para>

      <ImageBlock src="/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg" alt="BOMBANANA! Main Game Screen" caption="The BOMBANANA! lobby — where each player selects their role before the bomb appears."/>

      <SubHeading>Before You Launch: Role Assignment</SubHeading>
      <ComparisonTable headers={["If You Are...", "Try This Role", "Why"]} rows={[
        ["Good at giving clear instructions", "Deaf Monkey", "You are the communication bridge"],
        ["Good at puzzles and manuals", "Mute Monkey", "You hold all the answers"],
        ["Steady hands, calm under pressure", "Blind Monkey", "You physically defuse the bomb"],
        ["New to gaming entirely", "Blind Monkey", "Simplest mental load per action"],
      ]} />

      <ImageBlock src="/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg" alt="BOMBANANA! Team at Work" caption="The communication chain in action: Mute gestures → Deaf interprets → Blind executes."/>

      <SubHeading>Launch Sequence</SubHeading>
      <NumberedList items={[
        "Host launches BOMBANANA! Demo → \"Play\" → \"Host Game\"",
        "Host opens Steam overlay (Shift+Tab) → Friends → Invite both friends",
        "Friends accept invite; game launches on their PCs",
        "All three appear in lobby — each selects a DIFFERENT role",
        "Host clicks \"Start\" — van doors close, first bomb loads",
      ]} />

      <SubHeading>The First 60 Seconds</SubHeading>
      <BulletList items={[
        "0-10s Blind Sweeps: Runs hands across bomb surface. Reports module count and rough positions out loud.",
        "10-20s Deaf Identifies: Visually confirms each module type and calls them: \"Wire panel — 5 wires\", \"Button grid — 3×2\".",
        "20-30s Mute Locates: Opens manual, finds all module sections, bookmarks mentally.",
        "30-60s Start Defusing: Tackle the hardest module first — you have maximum time and zero strikes.",
      ]} />

      <WarningBox title="Your First 3 Bombs Will Probably Explode">This is completely normal. The average team takes 3-4 attempts before their first successful defusal. Communication is a skill that builds with practice. Do not get discouraged.</WarningBox>

      <SuccessBox title="After Each Bomb: 2-Minute Debrief"><BulletList items={["Which module was hardest and why?", "Where did communication break down?", "Which gesture was unclear?", "What should we change next attempt?"]} /></SuccessBox>

      <TipBox title="Next Steps After Your First Session">Try Free Mode to practice specific modules without campaign pressure. Review your role's complete guide. Read the beginner mistakes guide to avoid common pitfalls.</TipBox>
    </>
  );
}
