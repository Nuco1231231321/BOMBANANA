const faqs = [
  {
    question: "What is the fastest way to learn BOMBANANA!?",
    answer:
      "Start with the beginner guide, assign the three monkey roles, then practice one module family at a time before chaining full levels.",
  },
  {
    question: "Which role should a new player choose first?",
    answer:
      "The Mute Monkey is usually easiest for learning rules, while the Blind Monkey is best for players comfortable following exact commands.",
  },
  {
    question: "How should the team communicate during a bomb?",
    answer:
      "Keep one relay path: Mute reads the manual, Deaf converts it into spoken calls, and Blind repeats the action before touching the bomb.",
  },
  {
    question: "Where should we go after the beginner guide?",
    answer:
      "Move into role guides if your team keeps miscommunicating, or module guides if your team understands roles but fails specific puzzles.",
  },
  {
    question: "Does Free Mode need a different strategy?",
    answer:
      "Yes. Free Mode rewards stable routines, repeatable callouts, and recovery plans more than one-off campaign solutions.",
  },
  {
    question: "What causes most failed runs?",
    answer:
      "Most failed runs come from unclear callouts, role confusion, and changing the action before the Blind Monkey confirms the instruction.",
  },
  {
    question: "Are the module pages written as components or Markdown?",
    answer:
      "The current module, role, beginner, and communication detail pages are registered React components, giving each guide custom layout control.",
  },
  {
    question: "Where can I find troubleshooting help?",
    answer:
      "Use the troubleshooting page for setup and play-session issues, then return to role or communication pages if the problem is team process.",
  },
] as const;

export default function HomeFaq() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div>
            <p className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
              Quick answers
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)]">
              FAQ before the timer starts
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-[var(--color-forest-ink)] opacity-65">
              Short answers for the questions players usually need before opening a
              deeper guide.
            </p>
          </div>

          <div className="border-y border-[var(--color-pencil-gray)]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--color-whisper-gray)] py-4 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold leading-[1.4] text-[var(--color-forest-ink)]">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 rounded-sm bg-[var(--color-banana-yellow)]/50 px-2 py-0.5 font-[family-name:var(--font-roboto-mono)] text-xs transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[760px] text-sm leading-[1.7] text-[var(--color-forest-ink)] opacity-70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
