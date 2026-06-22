import { ImageBlock, TipBox, WarningBox, SectionHeading, SubHeading, Para, BulletList } from "@/components/content/ContentBlocks";

export default function BeginnerMistakesPage() {
  return (
    <>
      <SectionHeading>The 10 Most Common Beginner Mistakes</SectionHeading>
      <Para>Every BOMBANANA! team makes these. Here they are, why they happen, and exactly how to fix each one.</Para>

      <ImageBlock src="/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.thumb.jpg" alt="BOMBANANA! Common Mistakes" caption="Learning from failures is the fastest path to consistent defusals."/>

      <SubHeading>1. Acting Without Confirmation</SubHeading>
      <Para>The Blind hears an instruction and immediately cuts/presses without repeating it back. One wrong action = one strike, zero chance to correct.</Para>
      <TipBox title="Fix">Always use the 3-step loop: Deaf instructs → Blind repeats → Deaf says "Confirmed". This takes 1 second and prevents 90% of mistakes.</TipBox>

      <SubHeading>2. Deaf Looking at Bomb Instead of Mute</SubHeading>
      <Para>The Deaf stares at the bomb watching the Blind's hands, missing the Mute's next gesture. The Mute is your ONLY information source.</Para>
      <TipBox title="Fix">Default gaze = on the Mute. Glance at bomb only to verify Blind's position or check module status lights.</TipBox>

      <SubHeading>3. Gesturing Too Small</SubHeading>
      <Para>The Mute makes tiny hand gestures near their chest. The Deaf squints, guesses wrong, bomb explodes.</Para>
      <TipBox title="Fix">Exaggerate everything. Full arm extension. Gesture at chest-to-head height. If the Deaf squints, go bigger.</TipBox>

      <SubHeading>4. Solving Modules in Wrong Order</SubHeading>
      <Para>Team tackles easy modules first, leaving the hardest for the final 30 seconds with 2 strikes already used. Worst possible scenario.</Para>
      <TipBox title="Fix">After Blind's sweep, the team agrees: hardest module FIRST. Maximum time, zero strikes.</TipBox>

      <SubHeading>5. Using External Voice Chat</SubHeading>
      <Para>Using Discord removes both the Mute's silence and the Deaf's inability to hear. The game becomes a simple bomb puzzle — the core mechanic is gone.</Para>
      <WarningBox title="Fix">Use in-game voice chat. The restrictions ARE the game. External VC is only acceptable for documented accessibility needs.</WarningBox>

      <SubHeading>6-10: Quick Hits</SubHeading>
      <BulletList items={[
        "6. No pre-agreed gestures → Spend 5 minutes before session defining your vocabulary.",
        "7. Ignoring the timer → Deaf must announce at 60s, 30s, and 10s thresholds.",
        "8. No post-bomb debrief → 2 minutes after every attempt: what worked, what broke?",
        "9. Wrong manual section → Deaf clearly names module type BEFORE Mute opens manual.",
        "10. Panic spiraling → Deaf is the voice of reason. If you sound calm, Blind stays calm.",
      ]} />
    </>
  );
}
