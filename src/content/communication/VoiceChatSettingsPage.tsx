import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, RelatedGuides, WarningBox, TipBox, GuideH2, GuideList } from "@/components/guide/GuideBlocks";

const roleVoiceMatrix = [
  "<strong>Blind Monkey:</strong> Can hear ✅ AND speak ✅ — full two-way communication",
  "<strong>Deaf Monkey:</strong> Can speak ✅ but CANNOT hear ❌ — output only, no input",
  "<strong>Mute Monkey:</strong> Can hear ✅ but CANNOT speak ❌ — input only, no output",
];

const steamSetup = [
  "Steam → Settings → Voice",
  "Voice Input Device: Select your microphone",
  "Voice Output Device: Select your headphones",
  "Click \"Test Microphone\" — verify the green bar moves when you speak",
  "Transmission Type: set to Voice Activated (open mic)",
  "Activation Threshold: Medium (adjust if too sensitive or not sensitive enough)",
];

const quickFixes = [
  "<strong>Can't hear teammate?</strong> Check you're not the Deaf Monkey — Deaf cannot hear by design. Otherwise: verify Steam Voice Output is set to your headphones.",
  "<strong>Teammate can't hear you?</strong> Check you're not the Mute Monkey — Mute cannot speak by design. Otherwise: check Windows Sound settings → Recording tab → set mic as default.",
  "<strong>Audio echo?</strong> Everyone MUST use headphones. Speaker audio leaks into microphones. Reduce mic sensitivity in Steam.",
  "<strong>Bluetooth delay?</strong> Use wired headphones. Bluetooth adds 100-200ms of latency — critical during timed button holds.",
];

const relatedGuides = [
  { title: "Team Callouts", description: "Standardized phrases for every in-game situation.", href: "/communication/team-callouts" },
  { title: "Communication Chain", description: "How information flows through the three monkeys.", href: "/communication/communication-chain" },
  { title: "Troubleshooting", description: "Fix connection, voice, and launch issues.", href: "/troubleshooting" },
  { title: "First Session Checklist", description: "Complete pre-game setup guide.", href: "/beginners/first-session-checklist" },
];

export default function VoiceChatSettingsPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg" alt="BOMBANANA! Voice Settings" />
      
      <PageTitle highlight="Voice Chat">BOMBANANA! Voice Chat Settings: Configure In-Game Audio</PageTitle>
<BlufBox title="At a Glance"><strong>The in-game voice chat IS the game mechanic.</strong> Role restrictions are enforced by the game — they cannot be disabled. The Blind hears and speaks. The Deaf speaks but cannot hear. The Mute hears but cannot speak. <strong>These restrictions are not bugs. They are the entire point.</strong></BlufBox>

      <GuideH2>Role Voice Restrictions</GuideH2>
      <GuideList items={roleVoiceMatrix} />

      <GuideH2>Steam Voice Setup</GuideH2>
      <GuideList items={steamSetup} />

      <GuideH2>Quick Fixes</GuideH2>
      <GuideList items={quickFixes} />

      <WarningBox title="Should You Use Discord Instead?">Technically yes, but you should not. External voice chat removes the role restrictions — the Mute can speak freely, the Deaf can hear everything. This transforms BOMBANANA! from a unique communication challenge into a simple puzzle game. The restrictions ARE the experience. External VC is only acceptable for documented accessibility needs.</WarningBox>

      <TipBox title="Audio Optimization">Disable Windows audio enhancements (spatial sound, bass boost), close Spotify/YouTube, and set sample rate to 16-bit 48000 Hz in Windows Sound settings for best Steam Voice compatibility. Wired headphones are strongly recommended over Bluetooth.</TipBox>

      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
