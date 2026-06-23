import type { Metadata } from "next";
import InfoArticlePage from "@/components/localized-pages/InfoArticlePage";
import { ptReleaseDatePage, releaseDatePage } from "@/components/localized-pages/bombananaPages";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === "pt";

  return {
    title: isPt
      ? "BOMBANANA: preço, data de lançamento e plataformas"
      : "BOMBANANA! Release Date, Price, and Platforms",
    description: isPt
      ? "Status de preço, demo, lançamento em agosto de 2026, plataformas e console de BOMBANANA sem informações inventadas."
      : "BOMBANANA! release status, August 2026 window, demo availability, price status, platforms, and console status.",
    alternates: {
      canonical: isPt ? "/pt/preco-data-lancamento" : "/release-date",
      languages: {
        en: "/release-date",
        pt: "/pt/preco-data-lancamento",
      },
    },
  };
}

export default async function ReleaseDatePage({ params }: Props) {
  const { locale } = await params;
  return <InfoArticlePage {...(locale === "pt" ? ptReleaseDatePage : releaseDatePage)} />;
}
