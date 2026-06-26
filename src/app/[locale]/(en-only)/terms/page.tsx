import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CalendarDays } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Terms of Service - BOMBANANA! Guide",
  description:
    "Terms of Service for the BOMBANANA! fan guide. Learn about acceptable use, intellectual property, disclaimers, and limitations of liability.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

const LAST_UPDATED = "June 26, 2026";

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page pt-[7.5rem] pb-20 md:pt-32 md:pb-28">
        <article className="mx-auto max-w-[960px]">
          <div className="mb-10 rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/95 p-6 shadow-[var(--shadow-card)] md:p-10">
            <h1 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.02] text-[var(--color-forest-ink)]">
              Terms of Service
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-8 text-[var(--color-forest-ink)]/72 md:text-lg">
              Please read these Terms of Service carefully before using the
              BOMBANANA! Guide website. By accessing or using this site, you
              agree to be bound by these terms.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-4 py-2 text-xs font-medium text-[var(--color-forest-ink)]/60">
              <CalendarDays className="h-3.5 w-3.5" />
              Effective: {LAST_UPDATED}
            </div>
          </div>

          <nav className="mb-10 rounded-2xl border border-[var(--color-banana-yellow)]/30 bg-[var(--color-banana-yellow)]/5 p-6 shadow-[var(--shadow-subtle)] md:p-8">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)]">
              Table of Contents
            </h2>
            <ol className="list-decimal space-y-1.5 pl-5 text-sm text-[var(--color-forest-ink)]/70">
              <li><a href="#acceptance" className="underline hover:text-[var(--color-terracotta)]">Acceptance of Terms</a></li>
              <li><a href="#changes" className="underline hover:text-[var(--color-terracotta)]">Changes to Terms</a></li>
              <li><a href="#use" className="underline hover:text-[var(--color-terracotta)]">Use of the Website</a></li>
              <li><a href="#intellectual-property" className="underline hover:text-[var(--color-terracotta)]">Intellectual Property</a></li>
              <li><a href="#user-content" className="underline hover:text-[var(--color-terracotta)]">User-Generated Content</a></li>
              <li><a href="#third-party" className="underline hover:text-[var(--color-terracotta)]">Third-Party Links & Services</a></li>
              <li><a href="#disclaimers" className="underline hover:text-[var(--color-terracotta)]">Disclaimers</a></li>
              <li><a href="#limitation" className="underline hover:text-[var(--color-terracotta)]">Limitation of Liability</a></li>
              <li><a href="#indemnification" className="underline hover:text-[var(--color-terracotta)]">Indemnification</a></li>
              <li><a href="#termination" className="underline hover:text-[var(--color-terracotta)]">Termination</a></li>
              <li><a href="#governing-law" className="underline hover:text-[var(--color-terracotta)]">Governing Law</a></li>
              <li><a href="#contact" className="underline hover:text-[var(--color-terracotta)]">Contact Information</a></li>
            </ol>
          </nav>

          <div className="space-y-10 rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/95 p-6 shadow-[var(--shadow-card)] md:p-10">
            <section id="acceptance">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                By accessing and using <strong>bombanana.online</strong> (&ldquo;the
                Website&rdquo;), you accept and agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use the
                Website. These terms apply to all visitors, users, and others who
                access or use the Website.
              </p>
            </section>

            <section id="changes">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                2. Changes to Terms
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                We reserve the right to modify or replace these Terms at any time.
                Changes will be effective immediately upon posting to this page.
                Your continued use of the Website after any changes constitutes
                acceptance of the new Terms. The &ldquo;Effective&rdquo; date at
                the top of this page indicates when the terms were last revised.
              </p>
            </section>

            <section id="use">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                3. Use of the Website
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                You agree to use the Website only for lawful purposes and in a
                manner that does not infringe the rights of, restrict, or inhibit
                anyone else&apos;s use and enjoyment of the Website. Prohibited
                behavior includes but is not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <li>Attempting to interfere with the proper working of the Website.</li>
                <li>Using automated means (bots, scrapers, crawlers) to access, collect, or mine data from the Website in a way that burdens its servers.</li>
                <li>Uploading or transmitting viruses, malware, or malicious code.</li>
                <li>Attempting to gain unauthorized access to any part of the Website, its servers, or related systems.</li>
                <li>Using the Website to send spam, unsolicited advertisements, or promotional material.</li>
                <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity.</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                4. Intellectual Property
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                The original guide content, text, graphics, logos, and code on
                this Website are the intellectual property of the Website owner
                unless otherwise stated. You may not reproduce, distribute,
                modify, create derivative works of, publicly display, or exploit
                any content from this Website for commercial purposes without
                prior written permission.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                BOMBANANA! is a trademark of Lefto Studio. All game-related
                names, images, logos, and trademarks are property of their
                respective owners. This Website is an unofficial fan guide and
                is not affiliated with, endorsed, or sponsored by Lefto Studio.
                Use of the game name and related trademarks on this site is for
                descriptive and informational purposes only under fair use
                principles.
              </p>
            </section>

            <section id="user-content">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                5. User-Generated Content
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                If you submit comments, feedback, suggestions, or other content to
                the Website (&ldquo;User Content&rdquo;), you grant us a
                non-exclusive, royalty-free, perpetual, and irrevocable right to
                use, reproduce, modify, adapt, publish, and display such User
                Content in connection with the Website. You represent that you
                own or have the necessary rights to the User Content you submit
                and that it does not violate any third-party rights.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                We reserve the right to remove any User Content at our sole
                discretion, without notice, for any reason including but not
                limited to content that is unlawful, offensive, threatening,
                defamatory, or otherwise objectionable.
              </p>
            </section>

            <section id="third-party">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                6. Third-Party Links &amp; Services
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                The Website may contain links to third-party websites or services
                (including Steam, Google AdSense, and Google Analytics) that are
                not owned or controlled by us. We have no control over, and assume
                no responsibility for, the content, privacy policies, or practices
                of any third-party websites or services. You acknowledge and agree
                that we shall not be responsible or liable for any damage or loss
                caused by or in connection with the use of any such third-party
                content, goods, or services.
              </p>
            </section>

            <section id="disclaimers">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                7. Disclaimers
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                The Website is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS
                AVAILABLE&rdquo; basis. We make no representations or warranties
                of any kind, express or implied, regarding the operation or
                availability of the Website, or the accuracy, completeness,
                reliability, or suitability of the information, content, and
                materials found on the Website.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                Game information (release dates, pricing, platform support,
                features) is based on publicly available sources and may change.
                We do not guarantee that any game-related information on this
                Website is current, accurate, or complete at the time you access
                it. Always verify information through official channels
                (Steam, Lefto Studio) before making decisions.
              </p>
            </section>

            <section id="limitation">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                8. Limitation of Liability
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                To the fullest extent permitted by applicable law, the Website
                owner and its contributors shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including
                without limitation loss of profits, data, use, goodwill, or other
                intangible losses, resulting from (a) your use or inability to
                use the Website; (b) any conduct or content of any third party on
                the Website; or (c) unauthorized access, use, or alteration of
                your transmissions or content.
              </p>
            </section>

            <section id="indemnification">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                9. Indemnification
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                You agree to indemnify, defend, and hold harmless the Website
                owner and its contributors from and against any and all claims,
                damages, obligations, losses, liabilities, costs, or expenses
                (including reasonable attorneys&apos; fees) arising from (a) your
                use of and access to the Website; (b) your violation of any term
                of these Terms; or (c) your violation of any third-party right,
                including without limitation any copyright, property, or privacy
                right.
              </p>
            </section>

            <section id="termination">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                10. Termination
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                We may terminate or suspend your access to the Website immediately,
                without prior notice or liability, for any reason, including
                without limitation if you breach the Terms. All provisions of
                the Terms that by their nature should survive termination shall
                survive, including ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
            </section>

            <section id="governing-law">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                11. Governing Law
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                These Terms shall be governed and construed in accordance with
                applicable laws, without regard to conflict of law provisions.
                Any disputes arising in connection with these Terms shall be
                subject to the exclusive jurisdiction of the competent courts in
                the applicable jurisdiction.
              </p>
            </section>

            <section id="contact">
              <h2 className="mb-3 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                12. Contact Information
              </h2>
              <p className="text-sm leading-7 text-[var(--color-forest-ink)]/80">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:contact@bombanana.online"
                    className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]"
                  >
                    contact@bombanana.online
                  </a>
                </li>
                <li>
                  Via the{" "}
                  <Link
                    href={"/contact" as never}
                    className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]"
                  >
                    Contact page
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}
