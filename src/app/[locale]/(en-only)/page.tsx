import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import RoleOverview from "@/components/sections/RoleOverview";
import MediaGallery from "@/components/sections/MediaGallery";
import ModulePreview from "@/components/sections/ModulePreview";
import HomeGuideLinks from "@/components/sections/HomeGuideLinks";
import HomeFaq from "@/components/sections/HomeFaq";
import CTASection from "@/components/sections/CTASection";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "BOMBANANA! Guide - Co-op Bomb Defusal Walkthrough",
  description:
    "BOMBANANA! guide for co-op bomb defusal, monkey roles, bomb modules, communication, beginner routes, and walkthrough help.",
};

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <RoleOverview locale={locale} />
        <section className="bg-[var(--color-cream-paper)] py-16 md:py-24">
          <div className="container-page">
            <MediaGallery />
          </div>
        </section>
        <ModulePreview locale={locale} />
        <HomeGuideLinks />
        <HomeFaq />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
