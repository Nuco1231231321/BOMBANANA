import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "About - BOMBANANA! Guide",
  description:
    "About this unofficial BOMBANANA! guide, its purpose, and the people behind the content.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page py-16">
        <section className="mx-auto max-w-3xl rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/90 p-8 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-forest-ink)]">
            About BOMBANANA! Guide
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--color-pencil-gray)]">
            This site is an unofficial player-created guide for BOMBANANA!, built to help
            teams learn monkey roles, module strategy, and communication best practices.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-[var(--color-forest-ink)]">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">What this site covers</h2>
              <p>
                The guide includes role overviews, module walkthroughs, beginner tips, and
                communication advice designed for three-player co-op play.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Why this site exists</h2>
              <p>
                We built this resource because BOMBANANA! can be hard to coordinate, and a quick
                reference card helps teams play safer and faster together.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Affiliation</h2>
              <p>
                This is an independent fan guide. It is not endorsed by or officially connected
                to Lefto Studio or the creators of the BOMBANANA! game.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
