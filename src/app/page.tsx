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

export const metadata: Metadata = {
  title: "BOMBANANA! Guide - Co-op Bomb Defusal Walkthrough",
  description:
    "BOMBANANA! guide for co-op bomb defusal, monkey roles, bomb modules, communication, beginner routes, and walkthrough help.",
};

export default function HomePage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <Hero locale="en" />
        <RoleOverview locale="en" />
        {/* Media Gallery — screenshots & gameplay videos */}
        <section className="py-16 md:py-24 bg-[var(--color-cream-paper)]">
          <div className="container-page">
            <MediaGallery />
          </div>
        </section>
        <ModulePreview locale="en" />
        <HomeGuideLinks />
        <HomeFaq />
        <CTASection locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
