"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tone = "default" | "narrative" | "technical" | "structural";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "default",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: Tone;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-14",
        tone === "narrative" ? "max-w-xl" : "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className={cn("field-label text-xs", dark ? "text-noir-accent" : tone === "narrative" ? "text-pending" : "text-verified")}>
        {eyebrow}
      </p>

      {tone === "narrative" ? (
        <h2
          className={cn("mt-4 font-display text-[2.1rem] font-normal italic leading-[1.15] tracking-tight sm:text-[2.6rem]", !dark && "text-ink")}
          style={dark ? { color: "var(--noir-soft)" } : undefined}
        >
          {title}
        </h2>
      ) : tone === "technical" ? (
        <h2
          className={cn("mt-3.5 font-mono text-2xl font-medium uppercase tracking-tight sm:text-3xl", !dark && "text-ink")}
          style={dark ? { color: "var(--noir-soft)" } : undefined}
        >
          {title}
        </h2>
      ) : tone === "structural" ? (
        <h2
          className={cn("mt-3.5 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl", !dark && "text-ink")}
          style={dark ? { color: "var(--noir-soft)" } : undefined}
        >
          {title}
        </h2>
      ) : (
        <h2
          className={cn("mt-3.5 font-display text-4xl font-semibold tracking-tight sm:text-5xl", !dark && "text-ink")}
          style={dark ? { color: "var(--noir-soft)" } : undefined}
        >
          {title}
        </h2>
      )}

      {intro && (
        <p
          className={cn(
            "mt-5 leading-relaxed",
            dark ? "text-noir-muted" : "text-slate",
            tone === "narrative" ? "text-lg" : tone === "technical" ? "font-mono text-sm" : "text-base"
          )}
        >
          {intro}
        </p>
      )}
    </motion.div>
  );
}
