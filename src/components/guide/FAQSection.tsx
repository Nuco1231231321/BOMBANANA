import { FAQPageJsonLd } from "@/components/layout/JsonLd";

interface FAQItem { question: string; answer: string }
interface FAQSectionProps { faqs: FAQItem[]; title?: string }

/**
 * FAQSection — Structured Q&A with semantic markup.
 * Feeds into generateFAQSchema for JSON-LD rich results.
 */
export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  return (
    <>
      <FAQPageJsonLd questions={faqs} />
      <section aria-labelledby="faq-heading" className="mt-12 border-t border-[var(--color-pencil-gray)] pt-8">
        <h2 id="faq-heading" className="mb-6 text-[26px] font-extrabold leading-tight tracking-[-0.29px] text-[var(--color-forest-ink)]">{title}</h2>
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
              <h3 className="mb-2 text-sm font-semibold text-[var(--color-forest-ink)]">Q: {faq.question}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-forest-ink)]/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
