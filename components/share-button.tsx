"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { person, hero } from "@/lib/content";

export function ShareButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
    const shareData = {
      title: `${person.name} — Tax Technology Professional`,
      text: hero.headline,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled the share sheet — no action needed
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently no-op rather than error
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`card-interactive inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink ${className}`}
    >
      {copied ? <Check className="h-4 w-4 text-verified" /> : <Share2 className="h-4 w-4" />}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
