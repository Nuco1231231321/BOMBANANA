import { ImageBlock, WarningBox, SuccessBox, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function FirstSessionChecklistPage() {
  return (
    <>
      <SectionHeading>First Session Checklist</SectionHeading>
      <Para>A printable pre-game checklist. Go through every item before hitting "Start" — 5 minutes of prep prevents 50 minutes of frustration.</Para>

      <ImageBlock src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="BOMBANANA! Pre-Game Setup" caption="Make sure everyone's game is running and voice chat is working before starting."/>

      <SubHeading>Technical Setup — All 3 Players</SubHeading>
      <BulletList items={["Steam installed and logged in", "BOMBANANA! Demo downloaded (free, ~300 MB)", "Game launched at least once to confirm it runs", "Headphones plugged in — NOT speakers (prevents echo)", "Microphone tested: Steam → Settings → Voice → Test Microphone", "Steam overlay enabled: Steam → Settings → In Game", "Discord/other VC apps closed — use in-game voice", "No downloads running in background"]} />

      <SubHeading>Communication Prep</SubHeading>
      <BulletList items={["Color system agreed: Number mapping? Color cards? Pointing to objects?", "Number gestures: Fingers for 1-5. How to show 6-10?", "Action gestures: Cut (scissors), Press (push), Hold (fist), Release (open hand), Rotate (circular)", "Yes = thumbs up / No = thumbs down", "Repeat signal = circular hand motion", "Urgency = rapid waving"]} />

      <SubHeading>First Bomb Protocol</SubHeading>
      <NumberedList items={[
        "Blind does initial sweep: reports module count",
        "Deaf identifies all module types before defusing starts",
        "Mute locates all module solutions in manual",
        "Start with the HARDEST module — when time pressure is lowest",
        "Use confirmation loop: Instruction → Repeat → Confirm → Execute",
        "Deaf announces timer at 60s, 30s, and 10s",
      ]} />

      <SuccessBox title="Print This Checklist">Keep it on a second screen or printed out during your first session. Teams that use a checklist have significantly higher first-session success rates.</SuccessBox>

      <WarningBox title="Role Assignment Warning">Everyone must pick a DIFFERENT role. If two players select Blind, the game will not function. Double-check the lobby before hitting Start.</WarningBox>
    </>
  );
}
