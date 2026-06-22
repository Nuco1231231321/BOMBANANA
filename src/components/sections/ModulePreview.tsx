import { LinkCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Puzzle, Clock, AlertTriangle, Lightbulb } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface ModulePreviewProps {
  locale?: Locale;
}

const content = {
  en: {
    heading: "Bomb Modules",
    highlight: "Explained",
    subheading:
      "Every bomb module has its own rules and panic effects. Learn them all before you hear the tick.",
    modules: [
      {
        title: "Wiring Puzzles",
        desc: "Connect and cut the right sequence of wires before the circuit overloads.",
        icon: Puzzle,
      },
      {
        title: "Timer Management",
        desc: "Different modules add or subtract time. Know which to tackle first.",
        icon: Clock,
      },
      {
        title: "Panic Effects",
        desc: "When things go wrong, modules trigger chaos. Learn to recover fast.",
        icon: AlertTriangle,
      },
      {
        title: "Pattern Recognition",
        desc: "Memory games, Simon-says style sequences, and color matching under pressure.",
        icon: Lightbulb,
      },
    ],
    cta: "Explore All Modules",
  },
  zh: {
    heading: "炸弹模块",
    highlight: "详解",
    subheading:
      "每个炸弹模块都有自己独特的规则和恐慌效果。在听到滴答声之前，先学会它们。",
    modules: [
      {
        title: "线路谜题",
        desc: "在电路过载前正确连接和切断线路序列。",
        icon: Puzzle,
      },
      {
        title: "计时管理",
        desc: "不同模块会增减时间。知道该优先处理哪个。",
        icon: Clock,
      },
      {
        title: "恐慌效果",
        desc: "出错时模块会触发混乱效果。学会快速恢复。",
        icon: AlertTriangle,
      },
      {
        title: "模式识别",
        desc: "记忆游戏、Simon Says 式序列、压力下的颜色匹配。",
        icon: Lightbulb,
      },
    ],
    cta: "探索所有模块",
  },
  ja: {
    heading: "爆弾モジュール",
    highlight: "徹底解説",
    subheading:
      "各モジュールには独自のルールとパニック効果がある。時限爆弾の音が聞こえる前に全て学べ。",
    modules: [
      {
        title: "配線パズル",
        desc: "回路が過負荷になる前に正しい配線を接続・切断する。",
        icon: Puzzle,
      },
      {
        title: "タイマー管理",
        desc: "モジュールごとに時間が増減。どれから攻略すべきか判断せよ。",
        icon: Clock,
      },
      {
        title: "パニック効果",
        desc: "ミスするとカオスが発生。素早く立て直す方法を学ぶ。",
        icon: AlertTriangle,
      },
      {
        title: "パターン認識",
        desc: "記憶ゲーム、サイモン式シーケンス、プレッシャー下の色合わせ。",
        icon: Lightbulb,
      },
    ],
    cta: "全モジュールを見る",
  },
};

export default function ModulePreview({ locale = "en" }: ModulePreviewProps) {
  const t = content[locale] || content.en;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-sticky-note-mint)] bg-opacity-30">
      <div className="container-page">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(2rem,4vw,3.4375rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance"
          >
            {t.heading}{" "}
            <span className="bg-[var(--color-banana-yellow)] px-2 py-0.5 rounded-sm">
              {t.highlight}
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-forest-ink)] opacity-60 text-lg max-w-[560px] mx-auto text-balance">
            {t.subheading}
          </p>
        </div>

        {/* Module cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {t.modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <LinkCard
                key={mod.title}
                title={mod.title}
                description={mod.desc}
                href={`/modules`}
                accent="cream"
                icon={<Icon className="w-5 h-5" />}
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button href="/modules" variant="pastel-teal" size="md" arrow>
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
