/**
 * BOMBANANA! Game schema configuration.
 * Used by JSON-LD generators for consistent structured data.
 */
export const bombanana = {
  id: "bombanana",
  name: "BOMBANANA!",
  description:
    "A chaotic 3-player asymmetric co-op bomb defusal game. Three monkeys — blind, deaf, and mute — must communicate under extreme limitations to defuse a ticking banana bomb.",
  developer: "Lefto Studio",
  publisher: "Lefto Studio",
  releaseDate: "2026-08",
  platforms: ["PC (Steam)"],
  genres: ["Casual", "Indie", "Strategy", "Co-op", "Puzzle"],
  operatingSystem: "Windows 10/11",
  url: "https://store.steampowered.com/app/4656000/BOMBANANA/",
  guidePublisher: "BOMBANANA! Guide",
  guideSiteUrl: "https://bombanana.online",
  guideSiteName: "BOMBANANA! Guide Hub",
  guideEmail: "guide@bombanana.online",
  availability: "https://schema.org/PreOrder",
} as const;

export type GameSchemaConfig = typeof bombanana;
