import ContentLayout from "@/components/layout/ContentLayout";
import { LinkCard } from "@/components/ui/Card";
import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { Banana, MessageCircle, Radio, Route, Settings2 } from "lucide-react";

export const metadata = {
  title: "BOMBANANA! Communication Guide",
  description:
    "Master BOMBANANA! communication. Design effective gesture systems, standardize team callouts, and defuse bombs with precision.",
};

const COMMUNICATION_GUIDES = [
  {
    slug: "team-callouts",
    title: "Team Callouts",
    description: "Use short, repeatable phrases so the Deaf Monkey can relay instructions without confusion.",
    icon: Radio,
    accent: "cream" as const,
  },
  {
    slug: "voice-chat-settings",
    title: "Voice Chat Settings",
    description: "Set up voice chat around the game's restrictions instead of accidentally bypassing them.",
    icon: Settings2,
    accent: "teal" as const,
  },
  {
    slug: "communication-chain",
    title: "Communication Chain",
    description: "Understand how information moves from manual to gestures to spoken commands to bomb actions.",
    icon: Route,
    accent: "mint" as const,
  },
];

const chain = [
  { emoji: "🙊", label: "Mute reads the manual" },
  { emoji: "🙉", label: "Deaf relays the command" },
  { emoji: "🙈", label: "Blind repeats and acts" },
  { emoji: "💣", label: "Bomb module changes" },
];

export default function CommunicationPage() {
  return (
    <ContentLayout prose={false} contentClassName="max-w-[980px]">
      <header className="mb-12 border-b border-[var(--color-pencil-gray)] pb-10">
        <TaglineBadge icon={<MessageCircle className="h-3 w-3" />}>
          TEAM COMMUNICATION
        </TaglineBadge>
        <h1 className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] text-[clamp(2.25rem,5vw,3.85rem)] font-extrabold leading-[1.02] tracking-[0.04em] text-[var(--color-forest-ink)]">
          BOMBANANA!{" "}
          <span className="rounded-sm bg-[var(--color-banana-yellow)] px-2 py-1">
            Communication
          </span>{" "}
          Guide
        </h1>
        <p className="mt-5 max-w-[680px] text-lg leading-[1.65] text-[var(--color-forest-ink)] opacity-65">
          Communication is the real puzzle. Build a simple gesture system,
          standardize callouts, and keep the relay chain clean when the timer gets
          loud.
        </p>
      </header>

      <section className="mb-8 rounded-lg border border-[var(--color-banana-yellow)] bg-[var(--color-banana-yellow)]/10 p-5">
        <p className="mb-2 font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
          Direct answer
        </p>
        <p className="max-w-[760px] text-sm leading-7 text-[var(--color-forest-ink)]/72">
          Use one relay path: Mute turns the manual rule into a small signal, Deaf speaks one clear command, and Blind repeats before touching the bomb.
        </p>
      </section>

      <section className="mb-10 rounded-xl border border-[var(--color-forest-ink)] bg-[var(--color-cream-paper)] p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-banana-yellow)]/55 text-[var(--color-forest-ink)]">
            <Banana className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-[var(--color-forest-ink)]">
            The Relay Chain
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-4">
          {chain.map((item, index) => (
            <div
              key={item.label}
              className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-whisper-gray)] px-3 py-4 text-center"
            >
              <div className="text-3xl" aria-hidden="true">
                {item.emoji}
              </div>
              <p className="mt-2 text-sm font-semibold leading-[1.35] text-[var(--color-forest-ink)]">
                {item.label}
              </p>
              {index < chain.length - 1 && (
                <p className="mt-2 font-[family-name:var(--font-roboto-mono)] text-xs text-[var(--color-forest-ink)] opacity-45">
                  then
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="mb-4">
        <p className="font-[family-name:var(--font-roboto-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-terracotta)]">
          Pick the communication fix
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {COMMUNICATION_GUIDES.map((guide) => {
          const Icon = guide.icon;
          return (
            <LinkCard
              key={guide.slug}
              title={guide.title}
              description={guide.description}
              href={`/communication/${guide.slug}`}
              accent={guide.accent}
              icon={<Icon className="h-5 w-5" />}
            />
          );
        })}
      </div>
    </ContentLayout>
  );
}
