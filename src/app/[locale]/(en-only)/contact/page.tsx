import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Bug, Github, Mail, MessageCircle, Clock, AlertTriangle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Contact - BOMBANANA! Guide",
  description:
    "Contact the BOMBANANA! guide team for questions, corrections, bug reports, content suggestions, or general feedback. We aim to respond within 48 hours.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page pt-[7.5rem] pb-20 md:pt-32 md:pb-28">
        <article className="mx-auto max-w-[960px]">
          <div className="mb-10 rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/95 p-6 shadow-[var(--shadow-card)] md:p-10">
            <h1 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.02] text-[var(--color-forest-ink)]">
              Contact Us
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-8 text-[var(--color-forest-ink)]/72 md:text-lg">
              Have a question, correction, or feedback about the BOMBANANA! guide?
              We&apos;d love to hear from you. Choose the best way to reach us below.
            </p>
          </div>

          <div className="mb-10 grid gap-5 md:grid-cols-3">
            <ContactMethodCard icon={Mail} title="Email" detail="contact@bombanana.online" description="Best for detailed feedback, corrections, and privacy inquiries." href="mailto:contact@bombanana.online" primary />
            <ContactMethodCard icon={Github} title="GitHub" detail="Open an Issue or PR" description="Best for bug reports, content fixes, and code contributions." href="https://github.com/Nuco1231231321/BOMBANANA" primary={false} />
            <ContactMethodCard icon={MessageCircle} title="Social" detail="Coming soon" description="Community channels for discussion and strategy sharing." href={null} primary={false} />
          </div>

          <div className="space-y-10 rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/95 p-6 shadow-[var(--shadow-card)] md:p-10">
            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                What to include in your message
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>To help us respond quickly and accurately, please include the following in your message:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Subject line</strong> - Briefly describe what your message is about.</li>
                  <li><strong>Page or topic</strong> - Mention the specific page URL or guide topic you&apos;re referring to.</li>
                  <li><strong>Details</strong> - For corrections, include the current text and your suggested fix. For bugs, describe what happened and what you expected.</li>
                  <li><strong>Context</strong> - If reporting a strategy issue, mention which roles and modules you were using.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                What we can help with
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <HelpTopicCard icon={Bug} label="Bug reports" text="Broken links, typos, incorrect information, missing pages." />
                <HelpTopicCard icon={AlertTriangle} label="Content suggestions" text="New topics, strategy additions, role-specific tips we haven't covered." />
                <HelpTopicCard icon={MessageCircle} label="General feedback" text="Site design, navigation, readability, or feature requests." />
                <HelpTopicCard icon={Mail} label="Privacy & legal" text="Privacy policy questions, data requests, DMCA/copyright concerns." />
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                Response time
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <div className="flex items-start gap-3 rounded-xl border border-[var(--color-sticky-note-teal)]/40 bg-[var(--color-sticky-note-teal)]/10 p-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-forest-ink)]" />
                  <div>
                    <p className="font-semibold text-[var(--color-forest-ink)]">We typically respond within 48 hours.</p>
                    <p className="mt-1">
                      This is a community-maintained guide, not a commercial service. We do our best to
                      address every message, but response times may vary depending on volume. For urgent
                      privacy or legal matters, please use email and include &ldquo;URGENT&rdquo; in the subject line.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                Important note
              </h2>
              <div className="rounded-xl border border-[var(--color-banana-yellow)]/40 bg-[var(--color-banana-yellow)]/10 p-5 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  This is an <strong>unofficial fan guide</strong> and is not affiliated with Lefto Studio or the
                  official BOMBANANA! game developers. For official game support, bug reports for the game itself
                  (not this guide), or business inquiries for Lefto Studio, please use the official Steam community
                  hub or the developer&apos;s contact channels. We cannot help with game account issues, purchases,
                  or technical problems with the game client.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-3 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
                >
                  About this guide &rarr;
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-3 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
                >
                  Privacy Policy &rarr;
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-3 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
                >
                  Terms of Service &rarr;
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function ContactMethodCard({
  icon: Icon,
  title,
  detail,
  description,
  href,
  primary,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  description: string;
  href: string | null;
  primary: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-shadow hover:shadow-[var(--shadow-nav)] ${
        primary
          ? "border-[var(--color-banana-gold)] bg-[var(--color-banana-yellow)]/10 shadow-[var(--shadow-card)]"
          : "border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)] shadow-[var(--shadow-card)]"
      }`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1 font-semibold text-[var(--color-forest-ink)]">{title}</h3>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mb-2 block text-sm font-medium text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]"
        >
          {detail}
        </a>
      ) : (
        <span className="mb-2 block text-sm font-medium text-[var(--color-pencil-gray)]">{detail}</span>
      )}
      <p className="text-sm leading-6 text-[var(--color-forest-ink)]/70">{description}</p>
    </div>
  );
}

function HelpTopicCard({
  icon: Icon,
  label,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
      <div>
        <p className="text-sm font-semibold text-[var(--color-forest-ink)]">{label}</p>
        <p className="text-sm leading-6 text-[var(--color-forest-ink)]/70">{text}</p>
      </div>
    </div>
  );
}
