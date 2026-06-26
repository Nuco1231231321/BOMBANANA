import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpen, Heart, Info, Target, Users } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "About - BOMBANANA! Guide",
  description:
    "About the unofficial BOMBANANA! guide — our mission, what we cover, who creates the content, and how this community resource helps teams master bomb defusal.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page pt-[7.5rem] pb-20 md:pt-32 md:pb-28">
        <article className="mx-auto max-w-[960px]">
          <div className="mb-10 rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/95 p-6 shadow-[var(--shadow-card)] md:p-10">
            <p className="mb-3 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-terracotta)]">
              Our Story
            </p>
            <h1 className="font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.02] text-[var(--color-forest-ink)]">
              About BOMBANANA! Guide
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-[var(--color-forest-ink)]/72 md:text-lg">
              We&apos;re a small team of passionate gamers who fell in love with the chaotic,
              hilarious, and deeply rewarding co-op experience that is BOMBANANA!. This
              guide exists to help players communicate better, defuse faster, and laugh
              harder — together.
            </p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-2">
            <MissionCard icon={Target} title="Our Mission" text="Make BOMBANANA! accessible to new players while providing depth for veterans who want to optimize their team play." />
            <MissionCard icon={Heart} title="Our Motivation" text="We built this because a clear, central guide means fewer confused teams and more successful defusals." />
            <MissionCard icon={Users} title="For the Community" text="This guide is built by players, for players. We play the game ourselves and update content based on real team experience." />
            <MissionCard icon={BookOpen} title="What We Cover" text="Monkey roles, module strategies, communication chains, beginner tips, and troubleshooting — all in one place." />
          </div>

          <div className="space-y-10 rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)]/95 p-6 shadow-[var(--shadow-card)] md:p-10">
            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                What this site covers
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  The BOMBANANA! Guide is a comprehensive reference designed for exactly three-player co-op teams.
                  Every page is written with the core restriction in mind: one player sees the bomb, one player reads
                  rules silently, and one player can&apos;t see or hear — but must act. Our site covers:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Role Guides</strong> — Deep dives into the Blind Monkey, Deaf Monkey, and Mute Monkey
                    roles, including communication strategies, common mistakes, and role-specific tips.
                  </li>
                  <li>
                    <strong>Module Walkthroughs</strong> — Step-by-step instructions for Wire, Button, Switch, and
                    Symbols modules, covering rule logic, communication patterns, and failure prevention.
                  </li>
                  <li>
                    <strong>Beginner Resources</strong> — First-session checklists, common beginner mistakes, and
                    a how-to-play guide for teams starting from scratch.
                  </li>
                  <li>
                    <strong>Communication Guides</strong> — Team callout systems, voice chat configuration, and
                    the communication chain that makes three-player co-op work.
                  </li>
                  <li>
                    <strong>Game Info</strong> — Download demo guide, release date tracking, platform status,
                    free mode, and level overviews.
                  </li>
                  <li>
                    <strong>FAQ &amp; Troubleshooting</strong> — Answers to common questions and solutions to
                    frequent problems players encounter.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                Why this site exists
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  BOMBANANA! is uniquely demanding as a co-op experience. Most co-op games let players talk
                  freely; BOMBANANA! deliberately breaks communication channels so every defusal depends on
                  discipline, clear signals, and trust. A quick-reference guide dramatically reduces the
                  friction new teams face:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>New teams can onboard faster by learning one role at a time.</li>
                  <li>Experienced teams can reference module rules without disrupting their flow.</li>
                  <li>Teams switching roles get a structured way to understand each position&apos;s constraints.</li>
                  <li>Common failure patterns are documented so teams can avoid them proactively.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                Who we are
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  We are independent fans and players of BOMBANANA!. This guide is created and maintained by a
                  small group of contributors who actively play the game, test strategies, and update content as
                  the game evolves. We are not a company — we&apos;re gamers who want to share what we&apos;ve
                  learned with the wider community.
                </p>
                <p>
                  The guide is open-source and hosted on GitHub. If you&apos;d like to contribute corrections,
                  improvements, or new content, we welcome pull requests and feedback.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                Affiliation &amp; Disclaimer
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <div className="rounded-xl border border-[var(--color-banana-yellow)]/40 bg-[var(--color-banana-yellow)]/10 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-banana-gold)]" />
                    <div>
                      <p className="font-semibold text-[var(--color-forest-ink)]">Important disclosure</p>
                      <p className="mt-1">
                        This is an <strong>independent, unofficial fan guide</strong>. It is not endorsed by,
                        affiliated with, or officially connected to Lefto Studio or the creators of BOMBANANA!.
                        All game-related names, images, and trademarks are property of their respective owners.
                        This site exists solely as a community resource — we do not claim ownership of the game
                        or its intellectual property.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  Game information (release dates, pricing, features) is based on publicly available sources
                  and may change. Always check the official Steam pages and Lefto Studio announcements for
                  the most current information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-[family-name:var(--font-bricolage-grotesque)] text-2xl font-bold text-[var(--color-forest-ink)]">
                How to contribute
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-forest-ink)]/80">
                <p>
                  We welcome contributions from the community! Here&apos;s how you can help make this guide better:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Send feedback</strong> — Use the{" "}
                    <Link href="/contact" className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]">contact page</Link>{" "}
                    to report errors, suggest improvements, or share strategies we&apos;re missing.
                  </li>
                  <li>
                    <strong>Contribute on GitHub</strong> — The guide is open-source. Submit pull requests for
                    fixes, new content, or translations. See the repository for contribution guidelines.
                  </li>
                  <li>
                    <strong>Spread the word</strong> — Share the guide with your BOMBANANA! teammates and the
                    broader community so more teams can benefit from clear strategies.
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Nuco1231231321/BOMBANANA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-forest-ink)] px-5 py-3 text-sm font-bold text-[var(--color-cream-paper)] transition-opacity hover:opacity-90"
                  >
                    View on GitHub &rarr;
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-3 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
                  >
                    Send Feedback
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function MissionCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-forest-ink)]/10 bg-[var(--color-panel-cream)] p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-nav)]">
      <Icon className="mb-3 h-6 w-6 text-[var(--color-banana-gold)]" />
      <h3 className="mb-2 font-semibold text-[var(--color-forest-ink)]">{title}</h3>
      <p className="text-sm leading-6 text-[var(--color-forest-ink)]/70">{text}</p>
    </div>
  );
}
