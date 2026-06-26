"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "bombanana-cookie-consent";
const CONSENT_EXPIRY_DAYS = 365;

type ConsentChoice = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getStoredConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const { choice, timestamp } = JSON.parse(stored);
    const expiryMs = CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > expiryMs) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return choice as ConsentChoice;
  } catch {
    return null;
  }
}

function storeConsent(choice: "accepted" | "declined") {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, timestamp: Date.now() })
    );
  } catch {
    // localStorage unavailable — silently skip
  }
}

function updateGtagConsent(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredConsent();
    if (stored) {
      setChoice(stored);
      // Re-apply consent on page load (gtag may not have been ready when consent default ran)
      if (typeof window !== "undefined" && window.gtag) {
        updateGtagConsent(stored === "accepted");
      }
    } else {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    storeConsent("accepted");
    updateGtagConsent(true);
    setChoice("accepted");
    setVisible(false);
  }

  function handleDecline() {
    storeConsent("declined");
    updateGtagConsent(false);
    setChoice("declined");
    setVisible(false);
  }

  // Avoid hydration mismatch — don't render until mounted
  if (!mounted) return null;

  // Don't render banner if choice already made previously
  if (choice !== null || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] animate-fade-in-up p-4"
    >
      <div className="mx-auto flex max-w-[640px] items-start gap-4 rounded-2xl border border-[var(--color-pencil-gray)] bg-white/95 p-5 shadow-[0_-4px_40px_rgba(0,0,0,0.12)] backdrop-blur">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-banana-yellow)] text-[var(--color-forest-ink)]">
          <Cookie className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[var(--color-forest-ink)]">
            This website uses cookies
          </p>
          <p className="mt-1 text-sm leading-6 text-[var(--color-forest-ink)]/70">
            We use cookies for analytics and to serve ads via Google AdSense.
            By clicking &ldquo;Accept,&rdquo; you consent to the use of these
            cookies. You can decline non-essential cookies or learn more in our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[var(--color-terracotta)] underline hover:text-[var(--color-forest-ink)]"
            >
              Privacy Policy
            </Link>.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={handleAccept}
              className="rounded-lg bg-[var(--color-forest-ink)] px-5 py-2.5 text-sm font-bold text-[var(--color-cream-paper)] transition-opacity hover:opacity-90"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="rounded-lg border border-[var(--color-pencil-gray)] bg-[var(--color-cream-paper)] px-5 py-2.5 text-sm font-semibold text-[var(--color-forest-ink)] transition-colors hover:border-[var(--color-banana-yellow)]"
            >
              Essential Only
            </button>
          </div>
        </div>

        <button
          onClick={handleDecline}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--color-pencil-gray)] transition-colors hover:bg-[var(--color-whisper-gray)] hover:text-[var(--color-forest-ink)]"
          aria-label="Close cookie banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
