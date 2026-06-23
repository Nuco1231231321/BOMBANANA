import type { Metadata } from "next";
import InfoArticlePage from "@/components/localized-pages/InfoArticlePage";
import { demoPage, ptDemoPage } from "@/components/localized-pages/bombananaPages";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === "pt";

  return {
    title: isPt
      ? "BOMBANANA Demo: Steam, download seguro e APK"
      : "BOMBANANA! Demo Download Guide",
    description: isPt
      ? "Onde baixar o demo de BOMBANANA com segurança, por que usar Steam primeiro e por que APK ainda não confirmado é um risco."
      : "Where to download the BOMBANANA! Demo safely, why Steam is the primary source, and why APK downloads are not confirmed.",
    alternates: {
      canonical: isPt ? "/pt/bombanana-demo" : "/demo",
      languages: {
        en: "/demo",
        pt: "/pt/bombanana-demo",
      },
    },
  };
}

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  return <InfoArticlePage {...(locale === "pt" ? ptDemoPage : demoPage)} />;
}
