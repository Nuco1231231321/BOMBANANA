import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, RelatedGuides, WarningBox, TipBox, GuideH2, GuideP, GuideList } from "@/components/guide/GuideBlocks";

const mistakesData = [
  { title: "1. Acting Without Confirmation", desc: "The Blind cuts/presses immediately without repeating the instruction back. One wrong action = one strike, zero chance to correct.", fix: "Always use the 3-step loop: Deaf instructs → Blind repeats → Deaf says \"Confirmed.\" This takes 1 second and prevents 90% of mistakes." },
  { title: "2. Deaf Looking at Bomb Instead of Mute", desc: "The Deaf stares at the bomb watching the Blind's hands, missing the Mute's next gesture. The Mute is your ONLY information source.", fix: "Default gaze = on the Mute. Glance at the bomb only to verify Blind's position or check module status lights." },
  { title: "3. Gesturing Too Small", desc: "The Mute makes tiny gestures near their chest. The Deaf squints, guesses wrong, and the bomb explodes.", fix: "Exaggerate everything. Full arm extension. Gesture at chest-to-head height. If the Deaf leans forward, go bigger." },
  { title: "4. Solving Modules in Wrong Order", desc: "Easy modules first → hardest module last with 30 seconds and 2 strikes. Worst possible scenario.", fix: "Deaf identifies ALL modules. Team agrees: hardest module FIRST. Maximum time, minimum pressure." },
  { title: "5. Using External Voice Chat", desc: "Discord removes both role restrictions. The Mute can speak, the Deaf can hear. The core game mechanic is gone.", fix: "Use in-game voice. The restrictions ARE the game. External VC is only justified for documented accessibility accommodations." },
];

const relatedGuides = [
  { title: "How to Play", description: "Complete walkthrough for your first BOMBANANA! session.", href: "/beginners/how-to-play" },
  { title: "First Session Checklist", description: "Printable pre-game preparation checklist.", href: "/beginners/first-session-checklist" },
  { title: "Communication Chain", description: "Where information breaks and how to fix it.", href: "/communication/communication-chain" },
  { title: "Troubleshooting", description: "Fix common technical and connection issues.", href: "/troubleshooting" },
];

export default function BeginnerMistakesPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.thumb.jpg" alt="Common Beginner Mistakes in BOMBANANA!" />
      <BlufBox title="At a Glance"><strong>Every new BOMBANANA! team makes these mistakes.</strong> Learning them here — before they happen in a live bomb — is the fastest path to consistent defusals. <strong>The #1 root cause of all beginner failures: poor preparation.</strong> Five minutes of prep prevents fifty minutes of explosions.</BlufBox>

      {mistakesData.map((m) => (
        <div key={m.title} className="my-6">
          <GuideH2>{m.title}</GuideH2>
          <GuideP>{m.desc}</GuideP>
          <TipBox title="The Fix">{m.fix}</TipBox>
        </div>
      ))}

      <GuideH2>Quick Hits: Mistakes 6-10</GuideH2>
      <GuideList items={["<strong>6. No pre-agreed gestures</strong> — Spend 5 minutes defining your vocabulary. Every team needs this.", "<strong>7. Ignoring the timer</strong> — Deaf must announce remaining time at 60s, 30s, and 10s thresholds.", "<strong>8. No post-bomb debrief</strong> — 2 minutes after every attempt: what worked, what broke, what changes?", "<strong>9. Wrong manual section</strong> — Deaf clearly names the module type BEFORE the Mute opens the manual.", "<strong>10. Panic spiraling</strong> — One mistake causes tension, tension causes another mistake. The Deaf is the voice of reason. Calm voice = calm team."]} />

      <WarningBox title="The Panic Spiral Is Real">After a strike, take a deliberate 2-second breath before continuing. The timer feels urgent, but a calm 2-second pause is faster than a panicked 10-second mistake. Your brain works better when you are not flooded with adrenaline.</WarningBox>

      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
