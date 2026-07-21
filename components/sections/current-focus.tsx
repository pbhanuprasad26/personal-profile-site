"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentFocus } from "@/lib/content";

const statusStyle: Record<string, string> = {
  applied: "border-verified/30 bg-verified-soft text-verified",
  "in progress": "border-pending/30 bg-pending-soft text-pending",
  exploring: "border-hairline bg-surface-raised text-slate",
};

function FlipCard({ item, delay }: { item: (typeof currentFocus.items)[number]; delay: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="h-40"
      style={{ perspective: 1200 }}
    >
      <motion.button
        onClick={() => setFlipped((v) => !v)}
        aria-expanded={flipped}
        className="relative h-full w-full text-left"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* front */}
        <div
          aria-hidden={flipped}
          className="absolute inset-0 flex flex-col justify-between rounded-xl border border-hairline bg-surface p-5 transition-colors hover:border-verified/40"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold text-ink">{item.label}</h3>
            <span className={cn("field-label shrink-0 rounded-full border px-2 py-0.5 text-[9px]", statusStyle[item.status])}>
              {item.status}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate/70">
            <RotateCw className="h-3 w-3" />
            Tap for detail
          </div>
        </div>

        {/* back */}
        <div
          aria-hidden={!flipped}
          className="absolute inset-0 flex items-center rounded-xl border border-verified/30 bg-verified-soft p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm leading-relaxed text-ink/90">{item.detail}</p>
        </div>
      </motion.button>
    </motion.div>
  );
}

export function CurrentFocus() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="field-label text-xs text-verified">Current Focus</p>
        <h2 className="mt-3.5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {currentFocus.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate">{currentFocus.intro}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentFocus.items.map((item, i) => (
          <FlipCard key={item.label} item={item} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
