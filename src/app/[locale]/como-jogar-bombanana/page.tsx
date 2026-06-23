import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InfoArticlePage from "@/components/localized-pages/InfoArticlePage";
import { ptHowToPlayPage } from "@/components/localized-pages/bombananaPages";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "pt") {
    return {};
  }

  return {
    title: "Como jogar BOMBANANA!",
    description:
      "Guia em português para jogar BOMBANANA: funções dos três macacos, primeira partida, comunicação básica e erros comuns.",
    alternates: {
      canonical: "/pt/como-jogar-bombanana",
      languages: {
        pt: "/pt/como-jogar-bombanana",
      },
    },
  };
}

export default async function ComoJogarBombananaPage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "pt") {
    notFound();
  }

  return <InfoArticlePage {...ptHowToPlayPage} />;
}
