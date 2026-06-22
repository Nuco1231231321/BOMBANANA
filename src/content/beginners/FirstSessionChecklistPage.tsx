import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, ActionTable, RelatedGuides, WarningBox, GuideH2, GuideList } from "@/components/guide/GuideBlocks";

const actionRows = [
  { step: "1", doThis: "All 3 players: Steam logged in, Demo installed, microphone tested, headphones on", why: "Technical issues are the #1 session killer. Test everything before inviting friends." },
  { step: "2", doThis: "Agree on color system: number mapping (1=red, 2=blue, 3=yellow, 4=green) or color cards", why: "Without a shared color vocabulary, every wire module becomes a guessing game." },
  { step: "3", doThis: "Agree on action gestures: cut=scissors, press=push, hold=fist, release=open hand", why: "Every action the Blind takes must have a corresponding gesture the Mute can use." },
  { step: "4", doThis: "Confirm yes/no signals: thumbs up = yes/correct, thumbs down = no/wrong", why: "Feedback loops are essential. The Deaf needs to signal understanding to the Mute." },
  { step: "5", doThis: "Host invites both friends. Each player selects a DIFFERENT role in the lobby.", why: "Two players with the same role breaks the game. Double-check the lobby before starting." },
  { step: "6", doThis: "Blind sweeps bomb surface, Deaf identifies all modules, Mute locates solutions.", why: "The 60-second protocol establishes team rhythm before time pressure begins." },
];

const relatedGuides = [
  { title: "How to Play", description: "Complete first session walkthrough from launch to defusal.", href: "/beginners/how-to-play" },
  { title: "Beginner Mistakes", description: "10 common errors every new team makes.", href: "/beginners/beginner-mistakes" },
  { title: "Voice Chat Settings", description: "Configure in-game voice for optimal communication.", href: "/communication/voice-chat-settings" },
  { title: "Team Callouts", description: "Standardized phrases for fast, clear communication.", href: "/communication/team-callouts" },
];

export default function FirstSessionChecklistPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg" alt="BOMBANANA! Session Setup" />
      <BlufBox title="At a Glance"><strong>5 minutes of prep prevents 50 minutes of frustration.</strong> This printable checklist covers everything your team needs before hitting Start. Go through every item — skipping prep is the most common reason new teams fail their first 5 bombs.</BlufBox>

      <GuideH2>Technical Setup — All 3 Players</GuideH2>
      <GuideList items={["Steam installed and logged in to a valid account", "BOMBANANA! Demo downloaded and launched at least once", "Microphone working: Steam → Settings → Voice → Test Microphone", "Headphones plugged in — NOT speakers (echo prevention)", "Steam overlay enabled: Steam → Settings → In Game", "All other voice apps closed (Discord, Teamspeak, etc.)", "No downloads running in the background"]} />

      <GuideH2>Communication Setup</GuideH2>
      <GuideList items={["<strong>Color system:</strong> How will Mute indicate colors? Number mapping (1=red) or color cards?", "<strong>Number gestures:</strong> Fingers for 1-5. How to show 6-10? (Two hands: flash 5, add remainder)", "<strong>Action gestures:</strong> Cut=scissors, Press=push down, Hold=closed fist, Release=open hand, Rotate=circular motion", "<strong>Yes/No:</strong> Thumbs up = correct, Thumbs down = wrong", "<strong>Repeat:</strong> Circular hand motion = show me that gesture again", "<strong>Urgency:</strong> Rapid waving = time is critical"]} />

      <ActionTable rows={actionRows} />

      <WarningBox title="Role Conflict Check">Before clicking Start, verify: Blind has the grayscale screen, Deaf cannot hear voice chat, and Mute's microphone is disabled. If any role is working differently than expected, someone selected the wrong role. Restart the lobby.</WarningBox>

      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
