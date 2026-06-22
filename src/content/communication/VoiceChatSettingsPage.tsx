import { ImageBlock, TipBox, WarningBox, ComparisonTable, SectionHeading, SubHeading, Para, BulletList, NumberedList } from "@/components/content/ContentBlocks";

export default function VoiceChatSettingsPage() {
  return (
    <>
      <SectionHeading>Voice Chat Configuration</SectionHeading>
      <Para>The in-game voice chat is NOT just a communication tool — it's a core game mechanic. Role-based restrictions are enforced by the game itself and cannot be disabled. They ARE the game.</Para>

      <ImageBlock src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg" alt="BOMBANANA! Audio Settings" caption="Configure your audio before entering the van — you cannot change settings mid-bomb."/>

      <ComparisonTable
        headers={["Role", "Can Hear?", "Can Speak?", "Effect"]}
        rows={[
          ["Blind Monkey", "✅ Yes", "✅ Yes", "Full two-way communication"],
          ["Deaf Monkey", "❌ No", "✅ Yes", "Speaks but hears nothing — not even the timer"],
          ["Mute Monkey", "✅ Yes", "❌ No", "Hears everything but cannot make a sound"],
        ]}
      />

      <SubHeading>Steam Voice Settings</SubHeading>
      <NumberedList items={[
        "Steam → Settings → Voice",
        "Voice Input Device: Select your microphone",
        "Voice Output Device: Select your headphones",
        "Click \"Test Microphone\" — verify the green bar moves when you speak",
        "Transmission Type: Voice Activated (open mic)",
        "Activation Threshold: Medium (adjust if too sensitive or not sensitive enough)",
      ]} />

      <SubHeading>Common Voice Issues & Fixes</SubHeading>
      <BulletList items={["Can't hear teammate? Check you're not the Deaf Monkey — the Deaf cannot hear by design. Otherwise: verify Steam Voice Output device is set to your headphones.", "Teammate can't hear you? Check you're not the Mute Monkey — the Mute cannot speak by design. Otherwise: verify microphone is set as default in Windows Sound settings.", "Audio echo? Everyone MUST use headphones. Speaker audio leaks into microphones. Also lower mic sensitivity in Steam Voice settings.", "Bluetooth delay? Use wired headphones. Bluetooth can add 100-200ms of audio latency — critical during timed sequences."]} />

      <WarningBox title="Should You Use Discord Instead?">Technically yes, but you shouldn't. External voice chat removes the role restrictions — Mute can speak, Deaf can hear. This transforms BOMBANANA! from a unique communication challenge into a simple puzzle game. The restrictions are the entire point.</WarningBox>

      <TipBox title="Audio Optimization">Disable Windows audio enhancements (spatial sound, bass boost), close other audio apps (Spotify, YouTube), and set sample rate to 16-bit 48000 Hz for best Steam Voice compatibility.</TipBox>
    </>
  );
}
