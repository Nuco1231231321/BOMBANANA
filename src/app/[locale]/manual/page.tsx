import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InfoArticlePage from "@/components/localized-pages/InfoArticlePage";
import { manualPage } from "@/components/localized-pages/bombananaPages";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export const metadata: Metadata = {
  title: "BOMBANANA! Manual Guide",
  description:
    "BOMBANANA! manual guide explaining module lookup, Mute Monkey reading flow, common manual mistakes, and when to use module pages.",
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
