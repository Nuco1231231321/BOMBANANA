import { PageTitle } from "@/components/guide/PageTitle";
import { PageHero } from "@/components/guide/PageHero";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "How many players do I need?", answer: "Exactly 3 players. No more, no less. Each player takes one role — Blind, Deaf, or Mute Monkey. The game is balanced for exactly three asymmetric roles." },
  { question: "Can I play solo or with just 2 players?", answer: "No. BOMBANANA! requires all three roles to be filled by human players. There is no AI, no bot, and no way to control two roles simultaneously. You need two friends." },
  { question: "Is the Demo free?", answer: "Yes. The BOMBANANA! Demo is completely free on Steam (App ID: 4747510). It includes the full core gameplay with a selection of campaign levels and Free Mode." },
  { question: "Do I need a powerful PC?", answer: "No. Minimum requirements are very low: Intel Core i3-6100, Intel HD Graphics 520, and 2GB RAM. Almost any PC made in the last 8 years can run BOMBANANA! smoothly." },
];

const actionRows = [
  { step: "1", doThis: "All 3 players install the Demo from Steam", why: "Everyone must be on the same version. Demo players cannot play with full-game players (after August 2026 release)." },
  { step: "2", doThis: "Assign roles: Blind, Deaf, Mute", why: "Decide BEFORE launching. Read each role's guide. Players who enjoy puzzles should be Mute; clear communicators should be Deaf; steady hands should be Blind." },
  { step: "3", doThis: "Host launches game → Host Game → invites friends via Steam overlay", why: "Steam overlay (Shift+Tab) → Friends → Invite to Game. All three must be Steam friends." },
  { step: "4", doThis: "In lobby: each player selects a DIFFERENT role", why: "Two players cannot pick the same role. If the lobby shows two Blinds, someone must switch." },
  { step: "5", doThis: "Spend 5 minutes agreeing on gestures", why: "Color indicators, number gestures, action gestures, yes/no signals. This 5 minutes saves 50 minutes of frustration." },
  { step: "6", doThis: "Start the first bomb. Blind sweeps. Deaf identifies modules.", why: "Follow the 60-second protocol: sweep → identify → solve hardest module first." },
];

const relatedGuides = [
  { title: "First Session Checklist", description: "Printable pre-game checklist for your entire team.", href: "/beginners/first-session-checklist" },
  { title: "Beginner Mistakes to Avoid", description: "The 10 most common new-player errors and how to fix each one.", href: "/beginners/beginner-mistakes" },
  { title: "Blind Monkey Guide", description: "Complete strategy for the monkey who touches the bomb.", href: "/roles/blind-monkey" },
  { title: "Communication Chain", description: "Understand the information flow from manual to bomb.", href: "/communication/communication-chain" },
];

export default function HowToPlayPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg" alt="BOMBANANA! First Session" />
      
      <PageTitle highlight="How to Play">How to Play BOMBANANA!: Your First Session</PageTitle>
<BlufBox title="At a Glance"><strong>BOMBANANA! is a 3-player online co-op bomb defusal game.</strong> You need exactly two friends, a Steam account, and the free Demo. Your first 2-3 bombs will probably explode — that is completely normal. <strong>Communication is a skill that builds with practice.</strong> The average team succeeds on their 3rd or 4th attempt.</BlufBox>

      <GuideH2>Before You Launch</GuideH2>
      <GuideH3>System Check (All 3 Players)</GuideH3>
      <GuideList items={["Steam installed and logged in", "BOMBANANA! Demo downloaded (~300 MB, free)", "Microphone tested in Steam → Settings → Voice", "Headphones plugged in (not speakers — prevents echo)", "Steam overlay enabled", "Discord/other voice apps closed"]} />

      <GuideH3>Role Selection Guide</GuideH3>
      <GuideList items={["<strong>Blind Monkey:</strong> Best for steady hands, calm under pressure, or players new to gaming. You touch the bomb but see nothing.", "<strong>Deaf Monkey:</strong> Best for clear communicators, leaders, and players who can stay calm while giving instructions. You see everything but hear nothing.", "<strong>Mute Monkey:</strong> Best for puzzle lovers, manual readers, and expressive communicators. You know all the answers but cannot speak."]} />

      <ActionTable rows={actionRows} />

      <WarningBox title="Your First Bombs Will Explode">This is expected. The average team fails 2-3 times before their first successful defusal. Do not get discouraged. Each failure teaches you something about your team's communication gaps. Debrief for 2 minutes after every bomb.</WarningBox>

      <TipBox title="Pro Tip: Hardest Module First">When you start a bomb, tackle the most complex module first — when you have maximum time and zero strikes. Saving the hardest puzzle for the final 30 seconds with 2 strikes is the worst possible scenario.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
