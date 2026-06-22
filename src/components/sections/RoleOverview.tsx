import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EyeOff, MessageSquareOff, VolumeOff } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface RoleOverviewProps {
  locale?: Locale;
}

const roles = [
  {
    key: "blind-monkey",
    icon: EyeOff,
    emoji: "🙈",
    color: "blush" as const,
  },
  {
    key: "deaf-monkey",
    icon: VolumeOff,
    emoji: "🙉",
    color: "teal" as const,
  },
  {
    key: "mute-monkey",
    icon: MessageSquareOff,
    emoji: "🙊",
    color: "mint" as const,
  },
] as const;

const content = {
  en: {
    heading: "Meet Your Crew",
    subheading:
      "Three monkeys, three disabilities. Chaos is guaranteed — success is optional.",
    "blind-monkey": {
      title: "The Blind Monkey",
      desc: "The only one who can touch the bomb. Sees nothing but grainy outlines — no colors, no text. Follows verbal commands from the Deaf.",
      traits: ["Touches the bomb", "Can hear & speak", "Cannot see colors or text"],
    },
    "deaf-monkey": {
      title: "The Deaf Monkey",
      desc: "Sees the bomb clearly and speaks instructions, but hears nothing. The critical relay between the Mute's gestures and the Blind's hands.",
      traits: ["Sees everything", "Can speak", "Cannot hear anything"],
    },
    "mute-monkey": {
      title: "The Mute Monkey",
      desc: "Holds the defusal manual with all the answers. Can't speak a word — only frantic gestures and body language to communicate.",
      traits: ["Has the manual", "Can see & hear", "Cannot speak"],
    },
    cta: "Read Full Guide",
  },
  zh: {
    heading: "认识你的队友",
    subheading: "三只猴子，三重障碍。混乱是必然的 — 成功是额外的。",
    "blind-monkey": {
      title: "盲猴 🙈",
      desc: "唯一能触碰炸弹的猴子。只能看到模糊轮廓——看不到颜色和文字。完全依赖聋猴的口头指令操作。",
      traits: ["触碰炸弹", "能听能说", "看不见颜色和文字"],
    },
    "deaf-monkey": {
      title: "聋猴 🙉",
      desc: "能清楚看到炸弹并口述指令，但什么都听不见。是哑猴手势和盲猴操作之间的关键桥梁。",
      traits: [ "能看到一切", "能说话", "什么都听不见"],
    },
    "mute-monkey": {
      title: "哑猴 🙊",
      desc: "持有拆弹手册，知道所有答案。但一个字也说不出来——只能靠疯狂的手势和肢体语言沟通。",
      traits: ["持有手册", "能看到能听见", "不能说话"],
    },
    cta: "阅读完整攻略",
  },
  ja: {
    heading: "仲間を知ろう",
    subheading: "3匹の猿、3つの障がい。混沌は確実 — 成功はおまけ。",
    "blind-monkey": {
      title: "見ざる 🙈",
      desc: "唯一爆弾に触れられる猿。色も文字も見えず、ぼんやりとした輪郭だけ。聴猿の口頭指示に従う。",
      traits: ["爆弾に触れる", "聞こえる・話せる", "色と文字が見えない"],
    },
    "deaf-monkey": {
      title: "聞かざる 🙉",
      desc: "爆弾をはっきり見て指示を出せるが、何も聞こえない。言猿のジェスチャーを見猿の手に伝える重要な中継役。",
      traits: ["すべて見える", "話せる", "何も聞こえない"],
    },
    "mute-monkey": {
      title: "言わざる 🙊",
      desc: "解除マニュアルを持ち、全ての答えを知っている。しかし一言も話せない—身振り手振りだけで伝えるしかない。",
      traits: ["マニュアル所持", "見える・聞こえる", "話せない"],
    },
    cta: "完全ガイドを読む",
  },
};

export default function RoleOverview({ locale = "en" }: RoleOverviewProps) {
  const t = content[locale] || content.en;

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance"
          >
            {t.heading}
          </h2>
          <p className="mt-4 text-[var(--color-forest-ink)] opacity-60 text-lg max-w-[520px] mx-auto text-balance">
            {t.subheading}
          </p>
        </div>

        {/* Role cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const data = t[role.key];
            const Icon = role.icon;
            return (
              <Card
                key={role.key}
                accent={role.color}
                className="flex flex-col h-full"
              >
                {/* Icon + Emoji */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-cream-paper)] text-[var(--color-forest-ink)]">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="text-3xl">{role.emoji}</span>
                </div>

                <h3 className="font-bold text-xl text-[var(--color-forest-ink)] mb-2">
                  {data.title}
                </h3>
                <p className="text-sm text-[var(--color-forest-ink)] opacity-70 leading-relaxed mb-4 flex-1">
                  {data.desc}
                </p>

                {/* Traits */}
                <ul className="space-y-1.5 mb-5">
                  {data.traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-center gap-2 text-xs font-medium text-[var(--color-forest-ink)] opacity-60"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-forest-ink)] opacity-40" />
                      {trait}
                    </li>
                  ))}
                </ul>

                <Button
                  href={`/roles/${role.key}`}
                  variant="primary"
                  size="sm"
                  arrow
                  className="self-start mt-auto"
                >
                  {t.cta}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
