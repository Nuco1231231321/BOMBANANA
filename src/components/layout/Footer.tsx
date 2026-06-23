import { Banana, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface FooterProps {
  locale?: Locale;
}

const GUIDE_LINKS = [
  { href: "/roles", key: "roles", translated: false },
  { href: "/modules", key: "modules", translated: false },
  { href: "/beginners", key: "beginners", translated: false },
  { href: "/manual", key: "manual", translated: false },
] as const;

const COMMUNITY_LINKS = [
  { href: "/communication", key: "communication", translated: false },
  { href: "/free-mode", key: "freeMode", translated: false },
  { href: "/faq", key: "faq", translated: false },
  { href: "/troubleshooting", key: "troubleshooting", translated: false },
] as const;

const RESOURCE_LINKS = [
  {
    href: "https://store.steampowered.com/app/4747510/BOMBANANA_Demo/",
    label: "Steam Demo",
  },
  {
    href: "https://store.steampowered.com/app/4656000/BOMBANANA/",
    label: "Steam Full Game",
  },
  {
    href: "https://store.steampowered.com/search/?developer=Lefto%20Studio",
    label: "Developer",
  },
] as const;

export default function Footer({ locale = "en" }: FooterProps) {
  const nav = useTranslations("nav");
  const common = useTranslations("common");
  const footerPathLocale = locale === "pt" ? locale : undefined;

  return (
    <footer className="mt-32 bg-[var(--color-surface-dark)] text-[var(--color-cream-paper)]">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={"/" as never} locale={footerPathLocale} className="group mb-4 inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)] transition-transform group-hover:scale-110">
                <Banana className="h-6 w-6" />
              </span>
              <span className="text-xl font-bold tracking-tight text-[var(--color-cream-paper)]">
                BOMBANANA!
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-pencil-gray)]">
              {common("brandDescription")}
            </p>
          </div>

          <FooterColumn title={common("guides")}>
            {GUIDE_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as never}
                  locale={item.translated ? footerPathLocale : undefined}
                  className="text-sm text-[var(--color-pencil-gray)] transition-colors hover:text-[var(--color-banana-yellow)]"
                >
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={common("community")}>
            {COMMUNITY_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as never}
                  locale={item.translated ? footerPathLocale : undefined}
                  className="text-sm text-[var(--color-pencil-gray)] transition-colors hover:text-[var(--color-banana-yellow)]"
                >
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={common("resources")}>
            {RESOURCE_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href as never}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-pencil-gray)] transition-colors hover:text-[var(--color-banana-yellow)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)]">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-[var(--color-pencil-gray)]">
            &copy; {new Date().getFullYear()} BOMBANANA! Guide.{" "}
            <span className="opacity-60">{common("unofficial")}</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Nuco1231231321/BOMBANANA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-pencil-gray)] transition-colors hover:text-[var(--color-banana-yellow)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-cream-paper)]">
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}
