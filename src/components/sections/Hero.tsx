import { TaglineBadge } from "@/components/ui/TaglineBadge";
import { HighlightedWord } from "@/components/ui/TaglineBadge";
import { Button } from "@/components/ui/Button";
import { Banana, Zap, Users } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface HeroProps {
  locale?: Locale;
}

const content = {
  en: {
    badge: "The Ultimate Game Guide",
    headline1: "Master the",
    highlight: "Bomb",
    headline2: "Defusal Chaos",
    subhead:
      "The complete guide to BOMBANANA! — a chaotic 3-player co-op bomb defusal game. Learn every role, master every module, and keep your friendships intact.",
    cta: "Start Learning",
    secondary: "View All Modules",
    stats: [
      { label: "Concurrent Players", value: "13,000+", icon: Users },
      { label: "Positive Reviews", value: "98%", icon: Zap },
      { label: "Free Demo", value: "Available Now", icon: Banana },
    ],
  },
  zh: {
    badge: "最全游戏攻略",
    headline1: "三只猴子",
    highlight: "拆弹",
    headline2: "终极指南",
    subhead:
      "BOMBANANA! 完整攻略站 — 一款三人合作拆弹游戏的混沌之旅。掌握每个角色、破解每个模块，保住你的友情。",
    cta: "开始学习",
    secondary: "浏览所有模块",
    stats: [
      { label: "同时在线", value: "13,000+", icon: Users },
      { label: "好评率", value: "98%", icon: Zap },
      { label: "免费试玩", value: "Demo 已上线", icon: Banana },
    ],
  },
  ja: {
    badge: "完全攻略ガイド",
    headline1: "爆弾解除の",
    highlight: "カオス",
    headline2: "を制覇せよ",
    subhead:
      "BOMBANANA! 完全攻略 — 3人協力爆弾解除ゲーム。全ロールをマスターし、全モジュールを攻略し、友情を守り抜け。",
    cta: "学び始める",
    secondary: "モジュール一覧",
    stats: [
      { label: "同時接続", value: "13,000+", icon: Users },
      { label: "高評価", value: "98%", icon: Zap },
      { label: "無料デモ", value: "配信中", icon: Banana },
    ],
  },
};

export default function Hero({ locale = "en" }: HeroProps) {
  const t = content[locale] || content.en;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative sketch elements — subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-forest-ink) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-forest-ink) 1px, transparent 1px)",
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />

      <div className="container-page relative z-10">
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto">
          {/* Tagline Badge */}
          <TaglineBadge icon={<Banana className="w-3.5 h-3.5" />}>
            {t.badge}
          </TaglineBadge>

          {/* Display Headline */}
          <h1
            className="mt-6 font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance"
          >
            {t.headline1}{" "}
            <HighlightedWord>{t.highlight}</HighlightedWord>
            <br />
            {t.headline2}
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-[var(--color-forest-ink)] opacity-70 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed max-w-[580px] text-balance">
            {t.subhead}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
            <Button href="/beginners" variant="primary" size="lg" arrow>
              {t.cta}
            </Button>
            <Button href="/modules" variant="outline" size="lg">
              {t.secondary}
            </Button>
          </div>

          {/* Social proof / stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-[var(--color-pencil-gray)]">
            {t.stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-banana-yellow)] bg-opacity-40">
                    <Icon className="w-4 h-4 text-[var(--color-forest-ink)]" />
                  </span>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[var(--color-forest-ink)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--color-forest-ink)] opacity-50">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
