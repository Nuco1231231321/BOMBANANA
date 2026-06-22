/**
 * BOMBANANA! Media Assets — Local image paths
 *
 * All images downloaded from Steam CDN, compressed with sharp (~50% reduction).
 * Source: Steam API (app/4747510 — Demo)
 */

export interface MediaItem {
  id: string;
  type: "image" | "video";
  /** Local thumbnail path (600x338, compressed) */
  thumbnail: string;
  /** Local full-size path (1920x1080, compressed) or video URL */
  full: string;
  /** Optional webm video URL */
  webm?: string;
  /** Optional mp4 video URL */
  mp4?: string;
  /** Optional poster image */
  poster?: string;
  title: string;
  category: "screenshot" | "gameplay" | "trailer" | "role";
  width?: number;
  height?: number;
}

// Steam CDN base for videos (kept remote — too large to host locally)
const STEAM_VIDEO_BASE =
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4747510/extras";

/**
 * Demo screenshots — downloaded & compressed locally.
 * Thumbnails: ~25KB avg (from ~60KB). Full: ~150KB avg (from ~300KB).
 */
export const demoScreenshots: MediaItem[] = [
  {
    id: "ss-0",
    type: "image",
    thumbnail: "/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.thumb.jpg",
    full: "/images/screenshots/ss_858b009c283bfaac07f526309cb8a68c0c284278.full.jpg",
    title: "BOMBANANA! Gameplay Screenshot",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-1",
    type: "image",
    thumbnail: "/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.thumb.jpg",
    full: "/images/screenshots/ss_68f3c44625be8227496c6c017bfe847ed3c83e3d.full.jpg",
    title: "Bomb Defusal Interface",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-2",
    type: "image",
    thumbnail: "/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.thumb.jpg",
    full: "/images/screenshots/ss_2c952b65fc5734ce79f252df9f55af35b590be4a.full.jpg",
    title: "Team Communication in Action",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-3",
    type: "image",
    thumbnail: "/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg",
    full: "/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.full.jpg",
    title: "Van Workshop Interior",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-4",
    type: "image",
    thumbnail: "/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.thumb.jpg",
    full: "/images/screenshots/ss_3ecd09d511a5ac97a7342505ec47766554d702a3.full.jpg",
    title: "Module Puzzle Close-up",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-5",
    type: "image",
    thumbnail: "/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg",
    full: "/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.full.jpg",
    title: "Bomb Defusal Under Pressure",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-6",
    type: "image",
    thumbnail: "/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.thumb.jpg",
    full: "/images/screenshots/ss_353f30e2c12b406ab6f48642e6c21b2c5ffe1d72.full.jpg",
    title: "Module Control Panel",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-7",
    type: "image",
    thumbnail: "/images/screenshots/ss_085b75f6dbb019c101268a3bff124ab1a817799f.thumb.jpg",
    full: "/images/screenshots/ss_085b75f6dbb019c101268a3bff124ab1a817799f.full.jpg",
    title: "3-Player Co-op Gameplay",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
  {
    id: "ss-8",
    type: "image",
    thumbnail: "/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.thumb.jpg",
    full: "/images/screenshots/ss_0345ddc6d194e6528b764cf488ca5ead157b7995.full.jpg",
    title: "Bomb Module Overview",
    category: "screenshot",
    width: 1920,
    height: 1080,
  },
];

/**
 * Role gameplay videos — videos hosted on Steam CDN (too large to host locally).
 * Poster thumbnails stored locally.
 */
export const roleVideos: MediaItem[] = [
  {
    id: "role-blind",
    type: "video",
    thumbnail: "/images/videos/blind-monkey-poster.avif",
    poster: "/images/videos/blind-monkey-poster.avif",
    full: `${STEAM_VIDEO_BASE}/4e7fef3e06ad72ddff8d0d2a010d6206.webm`,
    webm: `${STEAM_VIDEO_BASE}/4e7fef3e06ad72ddff8d0d2a010d6206.webm`,
    title: "🙈 Blind Monkey — Gameplay Preview",
    category: "role",
    width: 506,
    height: 400,
  },
  {
    id: "role-mute",
    type: "video",
    thumbnail: "/images/videos/mute-monkey-poster.avif",
    poster: "/images/videos/mute-monkey-poster.avif",
    full: `${STEAM_VIDEO_BASE}/2f0903dd502d56b3e7d44c1ee23790f9.mp4`,
    webm: `${STEAM_VIDEO_BASE}/2f0903dd502d56b3e7d44c1ee23790f9.webm`,
    mp4: `${STEAM_VIDEO_BASE}/2f0903dd502d56b3e7d44c1ee23790f9.mp4`,
    title: "🙊 Mute Monkey — Gameplay Preview",
    category: "role",
    width: 506,
    height: 400,
  },
  {
    id: "role-deaf",
    type: "video",
    thumbnail: "/images/videos/deaf-monkey-poster.avif",
    poster: "/images/videos/deaf-monkey-poster.avif",
    full: `${STEAM_VIDEO_BASE}/d70f1a20f256cef5d1dbe837732cda68.mp4`,
    webm: `${STEAM_VIDEO_BASE}/d70f1a20f256cef5d1dbe837732cda68.webm`,
    mp4: `${STEAM_VIDEO_BASE}/d70f1a20f256cef5d1dbe837732cda68.mp4`,
    title: "🙉 Deaf Monkey — Gameplay Preview",
    category: "role",
    width: 506,
    height: 400,
  },
];

/**
 * Demo Trailer — thumbnail local, video on Steam CDN
 */
export const trailer: MediaItem = {
  id: "trailer",
  type: "video",
  thumbnail: "/images/videos/trailer-thumb.jpg",
  poster: "/images/videos/trailer-thumb.jpg",
  full: "https://video.akamai.steamstatic.com/store_trailers/4747510/144745567/a577fd4f2be687045a59d23ea3886a4c99021983/1779575073/hls_264_master.m3u8",
  title: "BOMBANANA! Official Demo Trailer",
  category: "trailer",
};

/**
 * All gallery items combined
 */
export const allMedia: MediaItem[] = [...roleVideos, ...demoScreenshots];

/**
 * Medal.tv clips — embed placeholder.
 * Page: https://medal.tv/games/bombanana
 * Clips will be fetched dynamically via Medal.tv embed API.
 */
export const medalClips: MediaItem[] = [];
