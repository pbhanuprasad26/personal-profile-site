"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { learningRoadmap } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

const dot: Record<string, string> = {
  done: "bg-noir-accent border-noir-accent",
  active: "bg-noir-pending/20 border-noir-pending",
  exploring: "bg-noir border-noir-hairline",
  future: "bg-noir border-noir-hairline border-dashed",
};

export function LearningRoadmap() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-noir noir-grid" style={{ color: "var(--noir-soft)" }}>
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-24 sm:pb-40 sm:pt-28">
        <SectionHeader
          eyebrow="Learning Roadmap"
          title="Tax knowledge first. Engineering second. AI next."
          intro="Ordered the way it actually happened. Tap a node for the detail."
          tone="technical"
          dark
        />

        <div className="relative overflow-x-auto overflow-y-visible pb-4">
          <div className="flex min-w-[820px] items-start gap-0 sm:min-w-0">
            {learningRoadmap.map((stage, i) => {
              const open = openIdx === i;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex-1 px-2"
                >
                  {i > 0 && (
                    <div className="absolute left-[-50%] right-1/2 top-[9px] h-px bg-noir-hairline" aria-hidden />
                  )}
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="relative flex w-full flex-col items-center text-center"
                  >
                    <motion.span
                      whileHover={{ scale: 1.25 }}
                      animate={{ scale: open ? 1.25 : 1 }}
                      transition={{ duration: 0.25 }}
                      className={cn("h-[18px] w-[18px] rounded-full border-2", dot[stage.status])}
                    />
                    <p className="mt-3 text-sm font-semibold" style={{ color: "var(--noir-soft)" }}>
                      {stage.stage}
                    </p>
                    <p className="field-label mt-1 text-[9px] text-noir-muted">{stage.status}</p>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.96 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full z-20 mt-3 w-48 rounded-xl border border-noir-hairline bg-noir-surface p-3 text-left shadow-xl"
                        >
                          <p className="text-xs leading-relaxed text-noir-muted">{stage.note}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
