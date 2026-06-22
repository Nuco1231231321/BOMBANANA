import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
      },
      {
        protocol: "https",
        hostname: "shared.fastly.steamstatic.com",
      },
      {
        protocol: "https",
        hostname: "store.akamai.steamstatic.com",
      },
      {
        protocol: "https",
        hostname: "video.akamai.steamstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.cloudflare.steamstatic.com",
      },
    ],
  },
  // i18n ready: locale prefix routing
  // When we add locales, we'll use middleware for routing
};

export default nextConfig;
