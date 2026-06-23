import ContentLayout from "@/components/layout/ContentLayout";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Headphones, PlugZap, Settings, ShieldAlert, Wrench } from "lucide-react";

export const metadata = {
  title: "BOMBANANA! Troubleshooting Guide",
  description:
    "Fix common BOMBANANA! issues: connection problems, voice chat not working, lobby errors, demo issues, and technical troubleshooting.",
};

const fixes = [
  {
    title: "Cannot Join Lobby",
    icon: PlugZap,
    items: [
      "Confirm all three players use the same game version.",
      "Restart Steam and check Steam Friends is online.",
      "Disable VPN or proxy temporarily if invites fail.",
      "Try a different player as the lobby host.",
    ],
  },
  {
    title: "Voice Chat Not Working",
    icon: Headphones,
    items: [
      "Remember role restrictions: Deaf cannot hear and Mute cannot speak.",
      "Check Steam voice input and Windows microphone permissions.",
      "Use headphones to prevent echo or feedback.",
      "Avoid external voice chat unless you intentionally want to bypass the mechanic.",
    ],
  },
  {
    title: "Demo Not Launching",
    icon: Settings,
    items: [
      "Verify game files in Steam.",
      "Update graphics drivers and Windows.",
      "Disable third-party overlays temporarily.",
      "Check antivirus exclusions if the executable is blocked.",
    ],
  },
];

export default function TroubleshootingPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      <header className="mb-12 border-b border-[var(--color-pencil-gray)] pb-10">
        <TaglineBadge icon={<Wrench className="h-3 w-3" />}>
          TROUBLESHOOTING
        </TaglineBadge>
        <h1 className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.85rem)] font-extrabold leading-[1.02] tracking-[0.04em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            Troubleshooting
          </span>
        </h1>
        <p className="mt-5 max-w-[680px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-65">
          Fix lobby, voice chat, demo launch, and setup issues before your team
          blames the bomb.
        </p>
      </header>

      <section className="mb-8 rounded-xl border border-[var(--color-forest-ink)] bg-[var(--color-sticky-note-mint)]/55 p-5">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-forest-ink)]" />
          <p className="text-sm leading-[1.65] text-[var(--color-forest-ink)] opacity-75">
            First check whether the issue is a real technical problem or an intended
            role restriction. In BOMBANANA!, some missing audio or speech is part of
            the game.
          </p>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        {fixes.map((fix) => {
          const Icon = fix.icon;
          return (
            <section
              key={fix.title}
              className="rounded-xl border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-banana-yellow)]/55 text-[var(--color-forest-ink)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-bold text-[var(--color-forest-ink)]">
                  {fix.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {fix.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-[1.6] text-[var(--color-forest-ink)] opacity-70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-forest-ink)] opacity-40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </ContentLayout>
  );
}
