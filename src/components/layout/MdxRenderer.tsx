import { type ContentEntry } from "@/lib/content";
import { readingTime } from "@/lib/utils";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Calendar, Clock, User } from "lucide-react";

interface MdxRendererProps {
  entry: ContentEntry;
}

/**
 * Renders a content entry with metadata header and MD body.
 * For now renders raw markdown; MDX compilation happens at build time.
 */
export function ContentEntryHeader({ entry }: MdxRendererProps) {
  const { meta, content } = entry;
  const readTime = readingTime(content);

  return (
    <>
      {/* ── Article Header ── */}
      <header className="mb-10">
        {/* Breadcrumb / Category badge */}
        {meta.category && (
          <TaglineBadge className="mb-4">
            {meta.category.toUpperCase()}
          </TaglineBadge>
        )}

        <h1 className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance mb-4">
          {meta.title}
        </h1>

        {meta.description && (
          <p className="text-lg text-[var(--color-forest-ink)] opacity-60 leading-relaxed">
            {meta.description}
          </p>
        )}

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-[var(--color-forest-ink)] opacity-50">
          {meta.author && (
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {meta.author}
            </span>
          )}
          {meta.date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {meta.date}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readTime} min read
          </span>
          {meta.difficulty && (
            <span className="px-2 py-0.5 rounded-full bg-[var(--color-banana-yellow)] bg-opacity-40 text-[var(--color-forest-ink)] font-medium">
              {meta.difficulty}
            </span>
          )}
        </div>

        {/* Tags */}
        {meta.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-whisper-gray)] text-[var(--color-forest-ink)] opacity-60"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

    </>
  );
}

export default function MdxRenderer({ entry }: MdxRendererProps) {
  const { content } = entry;

  return (
    <>
      <ContentEntryHeader entry={entry} />

      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
      />
    </>
  );
}

/**
 * Simple markdown-to-HTML renderer for MD content.
 * For production, use a proper MDX compiler like next-mdx-remote.
 */
function renderMarkdown(md: string): string {
  let html = md;

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" loading="lazy" />'
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr />");

  // Blockquotes
  html = html.replace(
    /^> (.+)$/gm,
    "<blockquote><p>$1</p></blockquote>"
  );

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>");

  // Tables (simple support)
  html = html.replace(
    /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g,
    (_match: string, header: string, rows: string) => {
      const headers = header
        .split("|")
        .filter(Boolean)
        .map((h: string) => `<th>${h.trim()}</th>`)
        .join("");
      const bodyRows = rows
        .trim()
        .split("\n")
        .map(
          (row: string) =>
            `<tr>${row
              .split("|")
              .filter(Boolean)
              .map((cell: string) => `<td>${cell.trim()}</td>`)
              .join("")}</tr>`
        )
        .join("");
      return `<table><thead><tr>${headers}</tr></thead><tbody>${bodyRows}</tbody></table>`;
    }
  );

  // Paragraphs — wrap remaining text blocks
  const lines = html.split("\n");
  const result: string[] = [];
  let inParagraph = false;

  for (const line of lines) {
    const trimmed = line.trim();
    // Skip empty lines and already-wrapped elements
    if (
      !trimmed ||
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("<table") ||
      trimmed.startsWith("<thead") ||
      trimmed.startsWith("<tbody") ||
      trimmed.startsWith("<tr") ||
      trimmed.startsWith("<td") ||
      trimmed.startsWith("<th") ||
      trimmed.startsWith("<blockquote") ||
      trimmed.startsWith("<img") ||
      trimmed.startsWith("<hr") ||
      trimmed.startsWith("</")
    ) {
      if (inParagraph) {
        result.push("</p>");
        inParagraph = false;
      }
      result.push(line);
    } else {
      if (!inParagraph) {
        result.push("<p>");
        inParagraph = true;
      }
      result.push(trimmed);
    }
  }
  if (inParagraph) result.push("</p>");

  return result.join("\n");
}
