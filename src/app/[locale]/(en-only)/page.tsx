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
  title: "BOMBANANA! Guide — Free Manual, Walkthroughs & Co-Op Strategy",
  description:
    "Complete BOMBANANA! guide with wire, button, switch & symbol walkthroughs. Role guides, communication tips, demo download, and beginner checklist. Updated 2026.",
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
        <section className="bg-[var(--color-panel-cream)] py-16 md:py-24">
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
