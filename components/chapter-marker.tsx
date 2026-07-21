"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tone = "warm" | "cool" | "neutral";

const glow: Record<Tone, string> = {
  warm: "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--pending) 16%, transparent), transparent 70%)",
  cool: "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--verified) 16%, transparent), transparent 70%)",
  neutral: "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--slate) 12%, transparent), transparent 70%)",
};

export function ChapterMarker({
  index,
  title,
  note,
  tone = "cool",
}: {
  index: string;
  title: string;
  note: string;
  tone?: Tone;
}) {
  return (
    <div className="relative overflow-hidden border-y border-hairline">
      <div className="pointer-events-none absolute inset-0" style={{ background: glow[tone] }} aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-16 sm:flex-row sm:items-baseline sm:justify-between sm:py-20"
      >
        <div className="flex items-baseline gap-5">
          <span
            className={cn(
              "font-display text-4xl font-light tracking-tight sm:text-5xl",
              tone === "cool" ? "text-verified" : tone === "warm" ? "text-pending" : "text-slate"
            )}
          >
            {index}
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
        </div>
        <p className="field-label max-w-xs text-[10px] leading-relaxed text-slate sm:text-right">{note}</p>
      </motion.div>
    </div>
  );
}
