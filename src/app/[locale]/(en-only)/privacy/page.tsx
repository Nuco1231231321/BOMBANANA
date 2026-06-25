import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Privacy Policy - BOMBANANA! Guide",
  description:
    "Privacy policy for the BOMBANANA! fan guide. Learn what information is collected, how it is used, and how to contact the site owner.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="container-page py-16">
        <section className="mx-auto max-w-3xl rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/90 p-8 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-forest-ink)]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--color-pencil-gray)]">
            This page explains the privacy practices for the BOMBANANA! Guide website.
            We respect your privacy and only collect the minimum data needed to run the site.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-[var(--color-forest-ink)]">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Information collected</h2>
              <p>
                The site uses anonymous analytics and advertising services to understand traffic
                and improve the experience. No personal information is collected directly by
                this website unless you choose to contact us.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Cookies and third-party services</h2>
              <p>
                We use Google Analytics and Google AdSense, which may set cookies and process
                browsing data under their own privacy policies. These services are used only
                to support the website and show relevant content.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
              <p>
                If you have questions about this privacy policy, please visit the contact page
                or email <a className="text-[var(--color-banana-yellow)] underline" href="mailto:contact@bombanana.online">contact@bombanana.online</a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Changes to this policy</h2>
              <p>
                We may update this page from time to time. The most recent version is always
                available at <strong>/privacy</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
