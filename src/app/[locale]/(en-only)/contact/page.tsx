import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Contact - BOMBANANA! Guide",
  description:
    "Contact page for the BOMBANANA! fan guide. Get in touch for questions, corrections, or suggestions.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page py-16">
        <section className="mx-auto max-w-3xl rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/90 p-8 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-forest-ink)]">
            Contact
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--color-pencil-gray)]">
            Have a question, correction, or feedback about the BOMBANANA! guide? Reach out below.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-[var(--color-forest-ink)]">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Email</h2>
              <p>
                Send mail to <a className="text-[var(--color-banana-yellow)] underline" href="mailto:contact@bombanana.online">contact@bombanana.online</a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">What to include</h2>
              <p>
                Please include a short description of your question and the page or topic you
                are referring to. We welcome reports for broken links, typos, or suggestions
                that improve the guide.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Note</h2>
              <p>
                This is an unofficial fan guide and is not affiliated with Lefto Studio or the
                official BOMBANANA! game developers.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
