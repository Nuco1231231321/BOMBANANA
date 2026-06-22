import { type ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/lib/i18n";

interface ContentLayoutProps {
  locale?: Locale;
  children: ReactNode;
}

/**
 * Layout wrapper for interior content pages.
 * Includes Header, content area with max-width, and Footer.
 */
export default function ContentLayout({ locale = "en", children }: ContentLayoutProps) {
  return (
    <>
      <Header locale={locale} />
      <main className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container-page">
          <article className="prose-content max-w-[720px] mx-auto">
            {children}
          </article>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
