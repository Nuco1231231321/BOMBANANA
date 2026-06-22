import { type ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface BreadcrumbItem { label: string; href?: string }

interface ContentLayoutProps {
  locale?: Locale;
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: ReactNode;
  contentClassName?: string;
  prose?: boolean;
}

export default function ContentLayout({
  locale = "en",
  children,
  breadcrumbs,
  jsonLd,
  contentClassName,
  prose = true,
}: ContentLayoutProps) {
  return (
    <>
      {jsonLd}
      <Header locale={locale} />
      <main className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container-page">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <article
            className={cn(
              prose && "prose-content",
              contentClassName ?? "max-w-[720px]",
              "mx-auto"
            )}
          >
            {children}
          </article>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
