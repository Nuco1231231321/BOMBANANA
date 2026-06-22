"use client";

import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, Film, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { type MediaItem, allMedia } from "@/data/media";
import { TaglineBadge } from "@/components/ui/TaglineBadge";

interface MediaGalleryProps {
  items?: MediaItem[];
  title?: string;
  subtitle?: string;
}

export default function MediaGallery({
  items = allMedia,
  title = "Gameplay Gallery",
  subtitle = "Screenshots and clips from the BOMBANANA! Demo. See the chaos in action.",
}: MediaGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "screenshot" | "video">("all");

  const filtered = filter === "all" ? items : items.filter((m) => m.type === filter || m.category === filter || m.category === "role");

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  const activeItem = filtered[activeIndex];

  return (
    <>
      {/* ── Section Header ── */}
      <div className="text-center mb-10">
        <TaglineBadge icon={<Camera className="w-3 h-3" />}>
          MEDIA GALLERY
        </TaglineBadge>
        <h2
          className="mt-4 font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] tracking-[0.04em] text-[var(--color-forest-ink)] text-balance"
        >
          {title}
        </h2>
        <p className="mt-3 text-[var(--color-forest-ink)] opacity-60 text-base max-w-[520px] mx-auto text-balance">
          {subtitle}
        </p>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {([
            { key: "all", label: "All" },
            { key: "video", label: "Videos" },
            { key: "screenshot", label: "Screenshots" },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                filter === tab.key
                  ? "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]"
                  : "bg-[var(--color-whisper-gray)] text-[var(--color-forest-ink)] opacity-60 hover:opacity-100"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-[var(--color-pencil-gray)]",
              "bg-[var(--color-cream-paper)]",
              "hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5",
              "transition-all duration-300 text-left cursor-pointer",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-banana-yellow)]"
            )}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-[var(--color-surface-dark)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Video play icon overlay */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)] shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5" />
                  </span>
                </div>
              )}
              {/* Type badge */}
              <span
                className={cn(
                  "absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium",
                  item.type === "video"
                    ? "bg-[var(--color-bomb-red)] text-white"
                    : "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)]"
                )}
              >
                {item.type === "video" ? (
                  <Film className="w-3 h-3" />
                ) : (
                  <Camera className="w-3 h-3" />
                )}
                {item.type === "video" ? "Video" : "Screenshot"}
              </span>
            </div>
            {/* Caption */}
            <div className="p-3">
              <p className="text-sm font-medium text-[var(--color-forest-ink)] truncate">
                {item.title}
              </p>
              <p className="text-xs text-[var(--color-forest-ink)] opacity-40 mt-0.5 capitalize">
                {item.category}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxOpen && activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 text-white/70 text-sm font-medium">
            {activeIndex + 1} / {filtered.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.type === "video" ? (
              <video
                src={activeItem.mp4 || activeItem.full}
                poster={activeItem.poster || activeItem.thumbnail}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
                style={{ aspectRatio: activeItem.width && activeItem.height ? `${activeItem.width}/${activeItem.height}` : "auto" }}
              >
                {activeItem.webm && (
                  <source src={activeItem.webm} type="video/webm" />
                )}
                {activeItem.mp4 && (
                  <source src={activeItem.mp4} type="video/mp4" />
                )}
              </video>
            ) : (
              <div className="relative max-w-full max-h-[85vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.full}
                  alt={activeItem.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm font-medium">{activeItem.title}</p>
            <p className="text-white/50 text-xs mt-1 capitalize">{activeItem.category}</p>
          </div>
        </div>
      )}
    </>
  );
}
