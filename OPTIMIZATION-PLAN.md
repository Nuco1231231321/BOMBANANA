# BOMBANANA! Guide — 优化执行计划

> ⚠️ 等待确认后执行。**TDH (首页Hero/Header) 不可修改。**
> 预计总工时: 3-4个session

---

## Phase 1: 高优先级 (预计提升 50% 流量) 🔴

### P1-1: 首页 Title + Meta 优化

**文件:** `src/app/layout.tsx` (全局metadata) + `src/app/[locale]/(en-only)/page.tsx`

**修改:**
```typescript
// 全局 layout.tsx 中的 metadata.title 改为:
title: {
  default: "BOMBANANA! Guide — Free Manual, Module Walkthroughs & Co-Op Strategy",
  template: "%s — BOMBANANA! Guide",
},

// description 改为:
description: "Complete BOMBANANA! strategy guide with manual rules, Wire/Button/Switch/Symbols module walkthroughs, Blind/Deaf/Mute role guides, communication tips, and demo download. Updated 2026.",

// keywords 添加:
keywords: ["BOMBANANA", "BOMBANANA guide", "BOMBANANA manual", "BOMBANANA walkthrough", "BOMBANANA how to play", "bomb defusal game", "co-op game guide", "Lefto Studio", "Steam game guide", "BOMBANANA tips", "BOMBANANA tutorial", "BOMBANANA module guide"],
```

**不修改:** TDH Hero Section 内容、Header 组件

### P1-2: Manual 页面 — 添加具体攻略规则

**文件:** `src/content/en/manual.md` (或 `src/content/registry.tsx` 指向的 MDX 文件)

**修改内容:**
1. 在现有"manual flow"内容之后添加新章节:
   - `## Wire Module Rules` — 包含完整的决策表
   - `## Button Module Rules` — 按钮操作规则
   - `## Switch Module Rules` — 开关逻辑表
   - `## Symbols Reference` — 符号对照表
2. 添加"Quick Reference Card"区域 (可打印)
3. 更新 Meta description

**新增文件:** `public/downloads/bombanana-manual-quickref.pdf` (可选, 简单的HTML→PDF)

### P1-3: 创建 Wire Module 详细攻略页

**新建文件:** `src/content/modules/WireModulePage.tsx` (参照现有 ButtonModulePage 结构)
或者如果是 MDX: `src/content/en/modules/wire-module.mdx`

**内容结构:**
1. 模块识别: 长什么样
2. 通信流程: Deaf → Mute → Blind
3. 规则表: 3线/4线 × LED颜色 → 哪根
4. 常见错误: (1)忘记LED色 (2)顺序搞反 (3)颜色辨认错误
5. 高级技巧: 预约定手势系统
6. FAQ: 4-5个

**注册到:** `src/content/registry.tsx`

### P1-4: 创建 Button Module + Symbols Module 攻略页

**同上结构。** Symbol Module 需要包含:
- 4组符号对照表
- 按键顺序规则
- 符号命名约定 (团队需要在游戏前统一符号名称!)

---

## Phase 2: 中优先级 (预计提升 30% 流量) 🟡

### P2-1: Beginners 页面重写

**文件:** 当前引用 MDX 的位置

**目标:** 从现在的薄内容扩展为 1,000+ 字的完整教程

**结构:**
```
1. What is BOMBANANA? (100w)
2. The Three Roles Explained (200w, 含表格)
3. How to Install (Steam Demo link) (50w)
4. First Session Checklist (150w) — 已经有的内容，扩展
5. Communication Basics (150w) — 信号约定
6. Solving Your First Module (200w) — 一步一步
7. Common Beginner Mistakes (150w) — 已经有的内容，扩展
8. What Next? (50w) — 链接到模块/角色
```

### P2-2: Manual 页面 Title + Meta 优化

```
当前 Title: "BOMBANANA! Manual Guide"  
建议 Title: "BOMBANANA! Manual — Complete Defusal Rules for All Modules (2026)"
建议 Description: "Complete BOMBANANA! defusal manual with wire cutting rules, button press logic, switch configurations, and symbol reference. Includes communication flowcharts and printable quick reference."
```

### P2-3: 每个模块页面添加 FAQ + HowTo Schema

**文件:** 各 module page 的 metadata 和 JsonLd

在 `src/components/layout/JsonLd.tsx` 中添加 HowTo schema 生成函数, 或者在每个页面单独添加。

---

## Phase 3: 增长机会 (预计提升 20% 流量) 🟢

### P3-1: 俄语/西语 Landing Page

**新建文件:** 在 `src/app/[locale]/` 下为已翻译页面添加新路由

或者更简单: 在 Portuguese 页面成功后, 为俄语和西语创建翻译版本:
- `src/app/[locale]/ru/` — 俄语版 (使用 `@/i18n/routing` 添加 `ru` locale)
- 或创建英文为主 + 俄语摘要的页面

**注意:** 需要权衡翻译成本和SEO收益。俄语有17.65% CTR, 但绝对流量只有34展示。

### P3-2: Tips & Tricks 合集页

**新建:** `/tips` 或 `/beginners/tips-and-tricks`

**内容:** 按模块分类的进阶技巧
- Wire Tips: 颜色记忆法、手势简化
- Button Tips: 标签缩写系统
- Switch Tips: 数字组匹配技巧
- General Tips: 时间管理、角色轮换、panic控制

### P3-3: PDF 下载

用户搜 "bombanana manual pdf" CTR 40%! 

创建简单的可打印HTML页面, 用浏览器打印功能生成PDF:
- `src/app/[locale]/(en-only)/manual/pdf/page.tsx` — 打印友好的manual页
- 或直接在 `/manual` 页添加 "🖨️ Print / Save as PDF" 按钮

---

## 执行检查清单

### Phase 1 (必须做)
- [ ] P1-1: 首页 Title + Meta (不改TDH)
- [ ] P1-2: Manual 页添加规则表
- [ ] P1-3: Wire Module 新页面
- [ ] P1-4: Button + Symbols 新页面

### Phase 2 (应该做)
- [ ] P2-1: Beginners 页重写
- [ ] P2-2: Manual 页 Meta 优化
- [ ] P2-3: HowTo Schema

### Phase 3 (锦上添花)
- [ ] P3-1: 俄语/西语页
- [ ] P3-2: Tips 合集页
- [ ] P3-3: PDF下载

---

## 不修改的范围 (TDH)

- ❌ 首页 Hero Section (`src/components/sections/Hero.tsx`)
- ❌ 首页 Header 导航结构 (`src/components/layout/Header.tsx`)
- ❌ 全局 CSS 设计系统变量 (`src/app/globals.css`)
- ❌ Footer 链接 (`src/components/layout/Footer.tsx`) — 已在上一轮优化

---

## 风险评估

| 风险 | 等级 | 缓解措施 |
|---|---|---|
| 修改Meta后短期排名波动 | 低 | 保留关键词，只增加新词 |
| 新页面被Google视为thin content | 中 | 每个模块页至少800字+决策表 |
| 翻译质量影响品牌 | 低 | 先用英文，确认需求后再翻译 |
| 构建break | 低 | 每次修改后 `next build` 验证 |
