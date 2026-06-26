import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InfoArticlePage from "@/components/localized-pages/InfoArticlePage";
import { manualPage } from "@/components/localized-pages/bombananaPages";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export const metadata: Metadata = {
  title: "BOMBANANA! Manual Guide — Wire, Button, Switch & Symbol Rules",
  description:
    "Complete BOMBANANA! manual with wire rules, button logic, switch patterns, and symbol reference. Includes team communication flow and quick reference tables.",
  alternates: {
    canonical: "/manual",
    languages: {
      en: "/manual",
    },
  },
};

export default async function ManualPage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return <InfoArticlePage {...manualPage} />;
}
