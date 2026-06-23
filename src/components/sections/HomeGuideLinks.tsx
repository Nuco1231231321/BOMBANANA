import { Link } from "@/i18n/navigation";
import {
  BookOpenCheck,
  Cable,
  HelpCircle,
  MessageCircle,
  Route,
  ShieldAlert,
  Users,
  Wrench,
} from "lucide-react";

const guideGroups = [
  {
    title: "Start Here",
    icon: Route,
    links: [
      { href: "/beginners", label: "Beginner Guide" },
      { href: "/beginners/how-to-play", label: "How to Play" },
      { href: "/beginners/first-session-checklist", label: "First Session Checklist" },
      { href: "/beginners/beginner-mistakes", label: "Beginner Mistakes" },
    ],
  },
  {
    title: "Role Manuals",
    icon: Users,
    links: [
      { href: "/roles", label: "All Role Guides" },
      { href: "/roles/blind-monkey", label: "Blind Monkey" },
      { href: "/roles/deaf-monkey", label: "Deaf Monkey" },
      { href: "/roles/mute-monkey", label: "Mute Monkey" },
    ],
  },
  {
    title: "Bomb Modules",
    icon: Cable,
    links: [
      { href: "/modules", label: "All Modules" },
      { href: "/modules/wire-module", label: "Wire Module" },
      { href: "/modules/button-module", label: "Button Module" },
      { href: "/modules/switch-module", label: "Switch Module" },
      { href: "/modules/symbols-module", label: "Symbols Module" },
    ],
  },
  {
    title: "Team Systems",
    icon: MessageCircle,
    links: [
      { href: "/communication", label: "Communication Guide" },
      { href: "/communication/team-callouts", label: "Team Callouts" },
      { href: "/communication/voice-chat-settings", label: "Voice Chat Settings" },
      { href: "/communication/communication-chain", label: "Communication Chain" },
    ],
  },
] as const;

const utilityLinks = [
  { href: "/levels", label: "Level Walkthroughs", icon: BookOpenCheck },
  { href: "/free-mode", label: "Free Mode Guide", icon: ShieldAlert },
  { href: "/troubleshooting", label: "Troubleshooting", icon: Wrench },
  { href: "/faq", label: "Full FAQ", icon: HelpCircle },
] as const;

export default function HomeGuideLinks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="mb-10 max-w-[680px]">
          <p className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
            Field manual routes
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)]">
            Jump to the next fix
          </h2>
          <p className="mt-4 text-lg leading-[1.6] text-[var(--color-forest-ink)] opacity-65">
            Use these routes when your team needs a quick next page instead of reading
            a long landing page.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-5 sm:grid-cols-2">
            {guideGroups.map((group) => {
              const Icon = group.icon;
              return (
                <nav
                  key={group.title}
                  aria-label={group.title}
                  className="rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-banana-yellow)]/45 text-[var(--color-forest-ink)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-forest-ink)]">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href as never}
                          className="group flex items-center justify-between border-b border-[var(--color-whisper-gray)] py-2 text-sm font-medium text-[var(--color-forest-ink)] no-underline last:border-b-0 hover:text-[var(--color-terracotta)]"
                        >
                          <span>{link.label}</span>
                          <span
                            aria-hidden="true"
                            className="opacity-35 transition-transform group-hover:translate-x-0.5 group-hover:opacity-80"
                          >
                            -&gt;
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}
          </div>

          <aside className="rounded-xl border border-[var(--color-forest-ink)] bg-[var(--color-sticky-note-mint)]/55 p-5">
            <h3 className="text-lg font-bold text-[var(--color-forest-ink)]">
              Useful Before Launch
            </h3>
            <div className="mt-4 grid gap-3">
              {utilityLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href as never}
                    className="flex items-center gap-3 rounded-md border border-[var(--color-forest-ink)]/20 bg-[var(--color-cream-paper)] px-3 py-3 text-sm font-semibold text-[var(--color-forest-ink)] no-underline transition-colors hover:border-[var(--color-forest-ink)]"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
