import type { MetadataRoute } from "next";
import { getContentEntries } from "@/lib/content";

const BASE_URL = "https://bombanana.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/roles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/modules`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/beginners`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/communication`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/free-mode`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/levels`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/troubleshooting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/updates`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  // Dynamic role pages
  const roles = getContentEntries("en", "roles");
  roles.forEach((r) => {
    staticPages.push({
      url: `${BASE_URL}/roles/${r.slug}`,
      lastModified: new Date(r.meta.updated || r.meta.date || Date.now()),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  });

  // Dynamic module pages
  const modules = getContentEntries("en", "modules");
  modules.forEach((m) => {
    staticPages.push({
      url: `${BASE_URL}/modules/${m.slug}`,
      lastModified: new Date(m.meta.updated || m.meta.date || Date.now()),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  });

  // Dynamic beginner sub-pages
  const beginnerEntries = getContentEntries("en", "beginners");
  beginnerEntries.forEach((b) => {
    staticPages.push({
      url: `${BASE_URL}/beginners/${b.slug}`,
      lastModified: new Date(b.meta.updated || b.meta.date || Date.now()),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  // Dynamic communication sub-pages
  const commEntries = getContentEntries("en", "communication");
  commEntries.forEach((c) => {
    staticPages.push({
      url: `${BASE_URL}/communication/${c.slug}`,
      lastModified: new Date(c.meta.updated || c.meta.date || Date.now()),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  return staticPages;
}
