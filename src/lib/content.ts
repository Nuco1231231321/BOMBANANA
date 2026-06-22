import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentMeta {
  title: string;
  description: string;
  date?: string;
  updated?: string;
  category?: string;
  tags?: string[];
  image?: string;
  author?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  role?: "blind" | "deaf" | "mute" | "all";
  order?: number;
}

export interface ContentEntry {
  slug: string;
  meta: ContentMeta;
  content: string;
  raw: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

/**
 * Get all content entries from a directory, sorted by order or date.
 */
export function getContentEntries(
  locale: string = "en",
  subdir: string = ""
): ContentEntry[] {
  const dir = path.join(CONTENT_ROOT, locale, subdir);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const entries = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");

    return {
      slug,
      meta: data as ContentMeta,
      content,
      raw,
    };
  });

  // Sort by order if available, otherwise by date
  return entries.sort((a, b) => {
    if (a.meta.order !== undefined && b.meta.order !== undefined) {
      return a.meta.order - b.meta.order;
    }
    if (a.meta.date && b.meta.date) {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    }
    return 0;
  });
}

/**
 * Get a single content entry by slug.
 */
export function getContentEntry(
  locale: string,
  subdir: string,
  slug: string
): ContentEntry | null {
  const dir = path.join(CONTENT_ROOT, locale, subdir);

  // Try .md first, then .mdx
  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return { slug, meta: data as ContentMeta, content, raw };
    }
  }

  return null;
}

/**
 * Get all unique tags across content entries.
 */
export function getAllTags(locale: string = "en"): string[] {
  const entries = [
    ...getContentEntries(locale, "roles"),
    ...getContentEntries(locale, "modules"),
    ...getContentEntries(locale, "levels"),
  ];

  const tagSet = new Set<string>();
  entries.forEach((entry) => {
    entry.meta.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}
