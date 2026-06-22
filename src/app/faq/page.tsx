import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Banana, HelpCircle } from "lucide-react";

export const metadata = {
  title: "BOMBANANA! FAQ - Co-op Questions",
  description:
    "Complete BOMBANANA! FAQ. Multiplayer requirements, co-op setup, voice chat, demo vs full game, crossplay, and common questions answered.",
};

const faqSections = [
  {
    title: "Multiplayer & Co-op",
    questions: [
      {
        q: "Is BOMBANANA! multiplayer only?",
        a: "Yes. BOMBANANA! is built around exactly three online co-op roles: Blind Monkey, Deaf Monkey, and Mute Monkey.",
      },
      {
        q: "Does BOMBANANA! require exactly 3 players?",
        a: "Yes. The communication chain breaks with two players, and there are only three roles for a full team.",
      },
      {
        q: "Is there online co-op?",
        a: "Yes. The game uses Steam online co-op so three players can connect through Steam.",
      },
      {
        q: "Can you play solo?",
        a: "No. Every role is essential, so solo play is not supported.",
      },
    ],
  },
  {
    title: "Voice Chat & Roles",
    questions: [
      {
        q: "Does BOMBANANA! have built-in voice chat?",
        a: "Yes. Voice chat is restricted by role: Blind can hear and speak, Deaf can speak but cannot hear, and Mute can hear but cannot speak.",
      },
      {
        q: "Can we use Discord instead?",
        a: "You can, but it bypasses the main role restrictions. Use in-game voice for the intended co-op challenge.",
      },
      {
        q: "How does the Mute Monkey communicate?",
        a: "The Mute Monkey uses gestures, body language, pointing, counting, and pre-agreed signals that the Deaf Monkey can relay.",
      },
    ],
  },
  {
    title: "Demo & Gameplay",
    questions: [
      {
        q: "Is there a free demo?",
        a: "Yes. The BOMBANANA! Demo is available on Steam and lets teams try the core co-op loop.",
      },
      {
        q: "When is the full game releasing?",
        a: "The full game is scheduled for August 2026 on Steam.",
      },
      {
        q: "Is BOMBANANA! beginner-friendly?",
        a: "The early bombs are designed to teach the basics gradually. Most teams need a few attempts to build a rhythm.",
      },
      {
        q: "Can I create custom bombs?",
        a: "Free Mode supports custom bomb setup with modules, timers, strike limits, and panic effects.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      <header className="mb-12 border-b border-[var(--color-pencil-gray)] pb-10">
        <TaglineBadge icon={<HelpCircle className="h-3 w-3" />}>
          QUESTIONS
        </TaglineBadge>
        <h1 className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.85rem)] font-extrabold leading-[1.02] tracking-[0.04em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            FAQ
          </span>
        </h1>
        <p className="mt-5 max-w-[660px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-65">
          Quick answers for multiplayer setup, role restrictions, voice chat, the
          demo, and common first-session questions.
        </p>
      </header>

      <div className="grid gap-8">
        {faqSections.map((section) => (
          <section key={section.title} className="border-y border-[var(--color-pencil-gray)] py-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-banana-yellow)]/55 text-[var(--color-forest-ink)]">
                <Banana className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-forest-ink)]">
                {section.title}
              </h2>
            </div>

            <div className="grid gap-3">
              {section.questions.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold leading-[1.45] text-[var(--color-forest-ink)]">
                    <span>{item.q}</span>
                    <span className="rounded-sm bg-[var(--color-banana-yellow)]/50 px-2 py-0.5 font-[family-name:var(--font-roboto-mono)] text-xs transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-[1.7] text-[var(--color-forest-ink)] opacity-70">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ContentLayout>
  );
}
