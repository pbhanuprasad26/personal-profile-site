"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import { journey } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 90,
    damping: 24,
  });

  // Only the current position is open by default — everything else is a
  // discoverable, collapsed milestone.
  const [openIdx, setOpenIdx] = useState(journey.length - 1);

  return (
    <section id="journey" className="py-24 sm:py-28" style={{ backgroundColor: "var(--pending-soft)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Professional Journey"
          title="From tax preparation to tax technology."
          intro="Seven stops, one throughline. Tap any milestone to open it."
          tone="narrative"
        />

        <div ref={containerRef} className="relative">
          <div className="absolute left-[7px] top-3 bottom-2 w-px bg-hairline sm:left-[9px]" aria-hidden />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-3 w-px bg-verified sm:left-[9px]"
            aria-hidden
          />
          <ol className="space-y-1">
            {journey.map((stop, i) => {
              const isLast = i === journey.length - 1;
              const open = openIdx === i;
              return (
                <motion.li
                  key={`${stop.year}-${stop.title}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-8 sm:pl-10"
                >
                  <span className="absolute left-0 top-[15px] flex h-3.5 w-3.5 items-center justify-center sm:h-[18px] sm:w-[18px]">
                    {isLast && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-verified/40"
                        animate={{ scale: [1, 1.9, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden
                      />
                    )}
                    <span
                      className={
                        "relative h-full w-full rounded-full border-2 bg-paper transition-colors duration-300 " +
                        (open ? "border-verified" : "border-hairline")
                      }
                    />
                  </span>

                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 rounded-lg py-2.5 pr-2 text-left transition-colors hover:bg-surface-raised/70"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="tabular-nums field-label text-xs text-verified">{stop.year}</span>
                      <h3 className="font-display text-lg font-semibold text-ink">{stop.title}</h3>
                      <span className="text-sm text-slate">{stop.org}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-slate"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-4 pr-2 text-sm leading-relaxed text-slate">{stop.summary}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
