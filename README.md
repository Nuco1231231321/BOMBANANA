# 🍌💣 BOMBANANA! Guide

The ultimate game guide website for **BOMBANANA!** — a chaotic 3-player co-op bomb defusal game by [Lefto Studio](https://store.steampowered.com/search/?developer=Lefto%20Studio).

**Live at: [bombanana.online](https://bombanana.online)**

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Content**: Markdown (MDX-ready)
- **Icons**: Lucide React
- **Deployment**: Vercel / Cloudflare Pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── roles/        # Role guides (Blind/Deaf/Mute)
│   ├── modules/      # Bomb modules catalog
│   ├── levels/       # Campaign walkthroughs
│   ├── beginners/    # Beginner's guide
│   ├── communication/# Communication system guide
│   └── free-mode/    # Free Mode design guide
├── components/
│   ├── layout/       # Header, Footer, ContentLayout
│   ├── ui/           # Button, Card, TaglineBadge
│   └── sections/     # Hero, RoleOverview, MediaGallery, etc.
├── content/en/       # English MD content (zh/, ja/ ready)
├── data/             # Media assets data
└── lib/              # Utilities, i18n, content parsing

public/images/        # Local compressed images (from Steam CDN)
```

## Features

- 🎮 Game-adapted design system (banana yellow, cream paper, forest ink)
- 📱 Fully mobile responsive (Tailwind-only)
- 🌐 i18n-ready (en/zh/ja infrastructure)
- 🖼️ Local compressed images (~50% reduction via sharp)
- 📝 MD-based content for easy editing
- 🔍 SEO optimized (metadata, Open Graph, sitemap-ready)

## License

Fan project — not affiliated with Lefto Studio.
