import { PageHero } from "@/components/guide/PageHero";
import { ArticleImage } from "@/components/guide/ArticleMedia";
import { BlufBox, ActionTable, RelatedGuides, TipBox, WarningBox, GuideH2, GuideH3, GuideP, GuideList } from "@/components/guide/GuideBlocks";
import { FAQSection } from "@/components/guide/FAQSection";

const faqs = [
  { question: "Why can't I speak as the Mute Monkey?", answer: "This is intentional — it's your role's core limitation. The Mute Monkey's microphone is disabled by the game. You can hear everything (the Deaf's instructions, the Blind's confirmations, game audio), but you cannot make a sound. All communication must be through gestures and body language." },
  { question: "How do I communicate complex solutions without speaking?", answer: "Break complex solutions into individual gestures — one piece of information at a time. For example: gesture the color first (point to color card), then the position (hold up fingers), then the action (scissors motion for cut). Wait for the Deaf's thumbs-up after each gesture before moving to the next." },
  { question: "What if the Deaf doesn't understand my gesture?", answer: "The Deaf will shake their head side to side. Try a different gesture for the same information. If '1 finger = red' isn't working, point to a red object in the room instead. Have backup gestures for common information — redundancy prevents deadlock." },
  { question: "Do I need to memorize the entire manual?", answer: "Not the entire manual, but knowing the table of contents and the most common 15-20 solutions dramatically speeds up your lookup time. Practice manual navigation in Free Mode between sessions. Fast manual lookup is the Mute's most valuable skill." },
];

const actionRows = [
  { step: "1", doThis: "Listen as the Deaf identifies each module type", why: "You need the exact module name to find the right manual section." },
  { step: "2", doThis: "Locate the solution in the manual", why: "This is your primary job. Fast manual navigation is a skill that improves with practice." },
  { step: "3", doThis: "Plan your gesture sequence before moving", why: "A planned sequence of 2-4 gestures is clearer than improvisation. Know what you will gesture before you start." },
  { step: "4", doThis: "Gesture one piece of information at a time", why: "Overloading the Deaf with rapid gestures causes confusion. One gesture → wait for thumbs-up → next gesture." },
  { step: "5", doThis: "Watch the bomb to verify the Blind's actions match your instructions", why: "You are the quality check. If the Blind does the wrong thing, use thumbs-down immediately to stop the action." },
  { step: "6", doThis: "Use thumbs-up when the module lights green, thumbs-down if red", why: "Clear, binary feedback keeps the communication loop fast and unambiguous." },
];

const relatedGuides = [
  { title: "Blind Monkey Guide", description: "The only monkey who touches the bomb — following your gestured instructions.", href: "/roles/blind-monkey" },
  { title: "Deaf Monkey Guide", description: "The communication bridge who interprets your gestures into spoken words.", href: "/roles/deaf-monkey" },
  { title: "Team Callouts", description: "Standardized phrases your Deaf teammate should use.", href: "/communication/team-callouts" },
  { title: "Communication Chain", description: "Understand where your gestures fit in the full information flow.", href: "/communication/communication-chain" },
];

export default function MuteMonkeyPage() {
  return (
    <>
      <PageHero src="/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg" alt="BOMBANANA! Mute Monkey — Speak No Evil" />
      <BlufBox title="At a Glance"><strong>The Mute Monkey holds the defusal manual — the single source of truth.</strong> You know exactly how to solve every module, but you cannot speak a single word. All communication must be through gestures and body language. <strong>Pre-agreed gesture vocabulary is the most important preparation you can do.</strong> Every gesture should mean exactly one thing.</BlufBox>

      <GuideH2>Your Role: Speak No Evil</GuideH2>
      <GuideP>The Mute Monkey is the knowledge holder. The defusal manual — with every solution, every decision tree, every correct sequence — belongs to you alone. But your microphone is disabled. You must convey complex puzzle solutions through nothing but hand signals, body language, and pre-agreed gestures. You can hear everything (the Deaf's instructions, the Blind's confirmations), which gives you the awareness to catch errors and correct them.</GuideP>

      <ArticleImage src="/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg" alt="Mute Monkey's manual view" caption="The Mute's view: the defusal manual open, the bomb visible, and the Deaf Monkey waiting for the next gesture." />

      <GuideH2>Capabilities & Limitations</GuideH2>
      <GuideH3>You Can</GuideH3>
      <GuideList items={["<strong>Read the manual:</strong> All defusal solutions are in your hands. You are the only source of correct information.", "<strong>See everything:</strong> Full visual access to the bomb, your teammates, and the manual.", "<strong>Hear everything:</strong> You can hear the Deaf's instructions and the Blind's confirmations — full audio awareness.", "<strong>Gesture:</strong> Any body language, hand signal, or physical motion is allowed."]} />
      <GuideH3>You Cannot</GuideH3>
      <GuideList items={["<strong>Speak:</strong> Your microphone is disabled. No words, no sounds, no voice chat of any kind.", "<strong>Touch the bomb:</strong> Only the Blind Monkey can physically interact with modules."]} />

      <GuideH2>Gesture Design Principles</GuideH2>
      <GuideList items={["<strong>Distinctness:</strong> Every gesture must look clearly different from every other gesture. Do not use similar hand shapes for different meanings.", "<strong>Simplicity:</strong> Complex gestures cause errors under time pressure. A 3-year-old should be able to understand each gesture.", "<strong>Consistency:</strong> Use exactly the same gesture every time for the same meaning. Never improvise a new gesture mid-bomb.", "<strong>Visibility:</strong> Gesture at chest-to-head height with full arm extension. If the Deaf leans forward, you are gesturing too small.", "<strong>Redundancy:</strong> Have a backup gesture for critical information (color, number, action) in case the primary gesture is misunderstood."]} />

      <ActionTable rows={actionRows} />

      <WarningBox title="Most Common Mute Mistake">Gesturing too small. Many new Mute players make tiny hand movements near their chest that the Deaf cannot see clearly from across the room. Exaggerate everything. Full arm extension. Gesture like you are communicating with someone across a noisy room — because you are.</WarningBox>

      <TipBox title="Pro Tip: Pre-Gesture Planning">Before you start gesturing, take 2 seconds to plan the entire gesture sequence in your head. A 2-second pause to plan is faster than a 10-second confused exchange of misunderstood gestures. Clarity beats speed every time.</TipBox>

      <FAQSection faqs={faqs} />
      <RelatedGuides guides={relatedGuides} />
    </>
  );
}
