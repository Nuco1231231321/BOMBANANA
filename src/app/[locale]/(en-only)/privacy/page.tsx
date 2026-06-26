import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CalendarDays, Cookie, Database, Lock, Shield, Users } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Privacy Policy - BOMBANANA! Guide",
  description:
    "Privacy Policy for BOMBANANA! Guide. How we use Google Analytics & AdSense cookies, your GDPR & CCPA rights, and how to manage or opt out of data collection.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

const LAST_UPDATED = "June 26, 2026";
const SITE_NAME = "BOMBANANA! Guide";
const SITE_URL = "bombanana.online";
const CONTACT_EMAIL = "contact@bombanana.online";

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page py-16">
        <article className="mx-auto max-w-3xl">
          {/* ── Header ── */}
          <div className="mb-10 rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/90 p-8 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.5)]">
            <h1 className="font-[family-name:var(--font-bricolage-grotesque)] text-4xl font-extrabold tracking-tight text-[var(--color-forest-ink)]">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-pencil-gray)]">
              Your privacy is important to us. This Privacy Policy explains how{" "}
              {SITE_NAME} ({SITE_URL}) collects, uses, stores, and protects your
              information when you visit this website. By using this site, you
              consent to the practices described in this policy.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-4 py-2 text-xs font-medium text-[var(--color-forest-ink)]/60">
              <CalendarDays className="h-3.5 w-3.5" />
              Last updated: {LAST_UPDATED}
            </div>
          </div>

          {/* ── Quick Summary Box ── */}
          <div className="mb-10 rounded-2xl border border-[var(--color-sticky-note-teal)]/40 bg-[var(--color-sticky-note-teal)]/10 p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)]">
              At a Glance
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <SummaryCard icon={Database} label="What we collect" text="Anonymous analytics and ad-serving data via third-party services. No personal information is collected directly by this site." />
              <SummaryCard icon={Cookie} label="Cookies" text="Third-party cookies from Google Analytics and Google AdSense for measurement and ad serving." />
              <SummaryCard icon={Shield} label="Your rights" text="You can manage cookie preferences, request data access, or opt out of personalized ads at any time." />
              <SummaryCard icon={Lock} label="Data security" text="We use HTTPS encryption and do not store personal data on our own servers." />
            </div>
          </div>

          {/* ── Table of Contents ── */}
          <nav className="mb-10 rounded-2xl border border-[var(--color-banana-yellow)]/30 bg-[var(--color-banana-yellow)]/5 p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-forest-ink)]">
              Table of Contents
            </h2>
            <ol className="list-decimal space-y-1.5 pl-5 text-sm text-[var(--color-forest-ink)]/70">
              <li><a href="#information-we-collect" className="underline hover:text-[var(--color-terracotta)]">Information We Collect</a></li>
              <li><a href="#how-we-use" className="underline hover:text-[var(--color-terracotta)]">How We Use Information</a></li>
              <li><a href="#cookies" className="underline hover:text-[var(--color-terracotta)]">Cookies &amp; Tracking Technologies</a></li>
              <li><a href="#third-party" className="underline hover:text-[var(--color-terracotta)]">Third-Party Services</a></li>
              <li><a href="#data-retention" className="underline hover:text-[var(--color-terracotta)]">Data Retention</a></li>
              <li><a href="#your-rights" className="underline hover:text-[var(--color-terracotta)]">Your Data Rights (GDPR &amp; CCPA)</a></li>
              <li><a href="#children" className="underline hover:text-[var(--color-terracotta)]">Children&apos;s Privacy</a></li>
              <li><a href="#consent" className="underline hover:text-[var(--color-terracotta)]">Cookie Consent &amp; Opt-Out</a></li>
              <li><a href="#changes" className="underline hover:text-[var(--color-terracotta)]">Changes to This Policy</a></li>
              <li><a href="#contact-us" className="underline hover:text-[var(--color-terracotta)]">Contact Us</a></li>
            </ol>
          </nav>

          {/* ── Detail Sections ── */}
          <div className="space-y-10 rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/90 p-8 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.5)]">
            <section id="information-we-collect">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  <strong>{SITE_NAME} does not directly collect, store, or process personal information from visitors.</strong>{" "}
                  We do not have user accounts, comment systems, contact forms, newsletter sign-ups, or any mechanism
                  that solicits or stores personal data on our servers.
                </p>
                <p>
                  However, we use third-party services that may automatically collect certain information when you
                  visit this site. This information is collected by the third-party providers, not by us directly:
                </p>
                <table className="my-4 w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Service</th>
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Purpose</th>
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Data Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--color-whisper-gray)]">
                      <td className="px-4 py-3 font-medium">Google Analytics (GA4)</td>
                      <td className="px-4 py-3">Site traffic &amp; usage measurement</td>
                      <td className="px-4 py-3">IP address (anonymized), pages viewed, time on site, browser type, device type, referring URL, general location (country/city level)</td>
                    </tr>
                    <tr className="border-b border-[var(--color-whisper-gray)]">
                      <td className="px-4 py-3 font-medium">Google AdSense</td>
                      <td className="px-4 py-3">Displaying advertisements</td>
                      <td className="px-4 py-3">IP address, browser type, browsing behavior for interest-based ads, cookie identifiers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="how-we-use">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                2. How We Use Information
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  The anonymous data collected via third-party services helps us:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Understand how many people visit the site and which pages are most helpful.</li>
                  <li>Identify and fix technical issues (broken pages, slow load times).</li>
                  <li>Support the site through advertising (Google AdSense).</li>
                  <li>Improve content and navigation based on aggregated usage patterns.</li>
                </ul>
                <p>
                  We do not use this data to identify individual users, and we do not combine data from these services
                  with any other data sources to build user profiles.
                </p>
              </div>
            </section>

            <section id="cookies">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                3. Cookies &amp; Tracking Technologies
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  Cookies are small text files stored on your device by your web browser. This website uses the
                  following types of cookies:
                </p>
                <table className="my-4 w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)]">
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Cookie Type</th>
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Source</th>
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Purpose</th>
                      <th className="px-4 py-3 font-bold text-[var(--color-forest-ink)]">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--color-whisper-gray)]">
                      <td className="px-4 py-3 font-medium">Analytics</td>
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Track page views, sessions, and traffic sources</td>
                      <td className="px-4 py-3">Up to 2 years</td>
                    </tr>
                    <tr className="border-b border-[var(--color-whisper-gray)]">
                      <td className="px-4 py-3 font-medium">Advertising</td>
                      <td className="px-4 py-3">Google AdSense</td>
                      <td className="px-4 py-3">Serve relevant ads, measure ad performance, frequency capping</td>
                      <td className="px-4 py-3">Up to 1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Functional</td>
                      <td className="px-4 py-3">{SITE_NAME}</td>
                      <td className="px-4 py-3">Remember your cookie consent preference</td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
                <div className="rounded-xl border border-[var(--color-banana-yellow)]/40 bg-[var(--color-banana-yellow)]/10 p-4">
                  <p className="font-semibold text-[var(--color-forest-ink)]">Important:</p>
                  <p>
                    Third-party vendors, including Google, use cookies to serve ads based on your prior visits to
                    this website and other websites. Google&apos;s use of advertising cookies enables it and its
                    partners to serve ads based on your visit to this site and/or other sites on the Internet.
                  </p>
                </div>
              </div>
            </section>

            <section id="third-party">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                4. Third-Party Services
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  We use the following third-party services, each of which has its own privacy policy governing the
                  data it collects. We encourage you to review their policies:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Google Analytics</strong> —{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      Google Privacy Policy
                    </a>
                    {" "}|{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      Opt-out browser add-on
                    </a>
                  </li>
                  <li>
                    <strong>Google AdSense</strong> —{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      Google Privacy Policy
                    </a>
                    {" "}|{" "}
                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      Ad Settings
                    </a>
                  </li>
                  <li>
                    <strong>Google AdSense for personalized ads</strong> — This site uses Google AdSense, which may
                    use cookies to serve personalized ads based on browsing history. Users in the EEA, UK, and
                    certain US states can manage these preferences via the cookie consent banner shown on first visit.
                  </li>
                </ul>
              </div>
            </section>

            <section id="data-retention">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                5. Data Retention
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  Since we do not directly collect or store personal data, there is no user data for us to retain
                  or delete on our own systems. Data collected by third-party services (Google Analytics, Google
                  AdSense) is retained according to each provider&apos;s own data retention policies:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Google Analytics data is retained for up to 26 months by default.</li>
                  <li>Google AdSense data is retained in accordance with Google&apos;s data retention policies.</li>
                </ul>
              </div>
            </section>

            <section id="your-rights">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                6. Your Data Rights (GDPR &amp; CCPA)
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
                    <h3 className="mb-2 font-semibold text-[var(--color-forest-ink)]">For EEA / UK Residents (GDPR)</h3>
                    <ul className="list-disc space-y-1 pl-5">
                      <li><strong>Right to access</strong> — Request a copy of personal data held about you.</li>
                      <li><strong>Right to rectification</strong> — Correct inaccurate or incomplete data.</li>
                      <li><strong>Right to erasure</strong> — Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                      <li><strong>Right to restrict processing</strong> — Limit how your data is used.</li>
                      <li><strong>Right to data portability</strong> — Receive your data in a structured, machine-readable format.</li>
                      <li><strong>Right to object</strong> — Object to processing based on legitimate interests or direct marketing.</li>
                      <li><strong>Right to withdraw consent</strong> — Withdraw consent for cookie/data processing at any time.</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-4">
                    <h3 className="mb-2 font-semibold text-[var(--color-forest-ink)]">For California Residents (CCPA/CPRA)</h3>
                    <ul className="list-disc space-y-1 pl-5">
                      <li><strong>Right to know</strong> — Know what personal information is collected and how it is used/shared.</li>
                      <li><strong>Right to delete</strong> — Request deletion of personal information collected.</li>
                      <li><strong>Right to opt-out</strong> — Opt out of the sale or sharing of personal information.</li>
                      <li><strong>Right to non-discrimination</strong> — Not be discriminated against for exercising CCPA rights.</li>
                    </ul>
                  </div>
                </div>
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                    {CONTACT_EMAIL}
                  </a>. We will respond to verifiable requests within the timeframes required by applicable law.
                </p>
              </div>
            </section>

            <section id="children">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                7. Children&apos;s Privacy
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  This website is a game guide and reference resource. It is not specifically directed at children
                  under 13 years of age (or the applicable age of digital consent in your jurisdiction). We do not
                  knowingly collect personal information from children. If you are a parent or guardian and believe
                  your child has provided personal information through this site, please contact us immediately so we
                  can take appropriate action.
                </p>
                <div className="rounded-xl border border-[var(--color-sticky-note-blush)]/40 bg-[var(--color-sticky-note-blush)]/10 p-4">
                  <p className="font-semibold text-[var(--color-forest-ink)]">For parents:</p>
                  <p>
                    Google AdSense may show non-personalized ads when it detects that a site or page is
                    child-directed. We have configured our AdSense settings to comply with COPPA requirements.
                    If you have concerns, you can use the opt-out links listed in Section 8 below.
                  </p>
                </div>
              </div>
            </section>

            <section id="consent">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                8. Cookie Consent &amp; Opt-Out
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  When you first visit this website, a cookie consent banner is displayed. You can choose to
                  accept or decline non-essential cookies used for advertising and analytics. Your preference
                  is saved for future visits.
                </p>
                <p>You may also opt out of personalized advertising and analytics through the following methods:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Google Ad Settings:</strong>{" "}
                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      adssettings.google.com
                    </a>
                  </li>
                  <li>
                    <strong>Network Advertising Initiative (NAI) opt-out:</strong>{" "}
                    <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      optout.networkadvertising.org
                    </a>
                  </li>
                  <li>
                    <strong>YourAdChoices (DAA):</strong>{" "}
                    <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">
                      optout.aboutads.info
                    </a>
                  </li>
                  <li>
                    <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through
                    their settings/preferences. Refer to your browser&apos;s help documentation.
                  </li>
                </ul>
              </div>
            </section>

            <section id="changes">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                9. Changes to This Policy
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal
                  requirements, or the services we use. When we make changes, we will update the &ldquo;Last
                  updated&rdquo; date at the top of this page. We encourage you to review this page periodically
                  for the latest information on our privacy practices. Material changes will be noted prominently
                  on this page.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                10. Contact Us
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please reach out:
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-3 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)] hover:bg-[var(--color-banana-yellow)]/10"
                  >
                    <Users className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <Link
                    href={"/contact" as never}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-3 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)] hover:bg-[var(--color-banana-yellow)]/10"
                  >
                    Visit Contact Page &rarr;
                  </Link>
                </div>
                <p className="text-xs text-[var(--color-pencil-gray)]">
                  For urgent privacy concerns, please use email. We aim to respond to all privacy-related inquiries
                  within 30 days.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]" />
      <div>
        <p className="text-sm font-semibold text-[var(--color-forest-ink)]">{label}</p>
        <p className="text-sm leading-6 text-[var(--color-forest-ink)]/70">{text}</p>
      </div>
    </div>
  );
}
