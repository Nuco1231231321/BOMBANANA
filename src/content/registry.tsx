/**
 * Content Registry — maps [slug] to React components with full layout control.
 * Each component can freely embed images, callouts, tables, tips.
 */
import type { FC } from "react";

/* ── Module pages ── */
import WireModulePage from "./modules/WireModulePage";
import ButtonModulePage from "./modules/ButtonModulePage";
import SwitchModulePage from "./modules/SwitchModulePage";
import SymbolsModulePage from "./modules/SymbolsModulePage";
import OverviewModulePage from "./modules/OverviewModulePage";

/* ── Beginner sub-pages ── */
import HowToPlayPage from "./beginners/HowToPlayPage";
import FirstSessionChecklistPage from "./beginners/FirstSessionChecklistPage";
import BeginnerMistakesPage from "./beginners/BeginnerMistakesPage";

/* ── Role pages ── */
import BlindMonkeyPage from "./roles/BlindMonkeyPage";
import DeafMonkeyPage from "./roles/DeafMonkeyPage";
import MuteMonkeyPage from "./roles/MuteMonkeyPage";

/* ── Communication sub-pages ── */
import TeamCalloutsPage from "./communication/TeamCalloutsPage";
import VoiceChatSettingsPage from "./communication/VoiceChatSettingsPage";
import CommunicationChainPage from "./communication/CommunicationChainPage";

type RegistryMap = Record<string, Record<string, FC>>;

export const CONTENT_REGISTRY: RegistryMap = {
  modules: {
    "overview": OverviewModulePage,
    "wire-module": WireModulePage,
    "button-module": ButtonModulePage,
    "switch-module": SwitchModulePage,
    "symbols-module": SymbolsModulePage,
  },
  beginners: {
    "how-to-play": HowToPlayPage,
    "first-session-checklist": FirstSessionChecklistPage,
    "beginner-mistakes": BeginnerMistakesPage,
  },
  roles: {
    "blind-monkey": BlindMonkeyPage,
    "deaf-monkey": DeafMonkeyPage,
    "mute-monkey": MuteMonkeyPage,
  },
  communication: {
    "team-callouts": TeamCalloutsPage,
    "voice-chat-settings": VoiceChatSettingsPage,
    "communication-chain": CommunicationChainPage,
  },
};

export function getContentComponent(section: string, slug: string): FC | null {
  return CONTENT_REGISTRY[section]?.[slug] ?? null;
}

/** Returns all slugs for a section (for generateStaticParams) */
export function getRegistrySlugs(section: string): string[] {
  return Object.keys(CONTENT_REGISTRY[section] ?? {});
}
