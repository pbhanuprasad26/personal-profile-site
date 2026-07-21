"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { knowledgeExplorer, additionalTools } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function KnowledgeExplorer() {
  const [catIdx, setCatIdx] = useState(0);
  const category = knowledgeExplorer[catIdx];
  const [activeItem, setActiveItem] = useState(category.items[0]);
  const [direction, setDirection] = useState(1);

  function selectCategory(idx: number) {
    setDirection(idx > catIdx ? 1 : -1);
    setCatIdx(idx);
    setActiveItem(knowledgeExplorer[idx].items[0]);
  }

  return (
    <section id="expertise" className="relative bg-noir noir-grid pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Explore by category."
          intro="Click any item for what it is, how it was applied, and the measured outcome."
          tone="technical"
          dark
        />

        <div className="mb-7 flex flex-wrap gap-2">
          {knowledgeExplorer.map((c, i) => (
            <button
              key={c.category}
              onClick={() => selectCategory(i)}
              className={cn(
                "relative rounded-full border px-4 py-1.5 text-sm transition-colors duration-300",
                i === catIdx
                  ? "border-noir-accent text-noir"
                  : "border-noir-hairline text-noir-muted hover:border-noir-accent/50 hover:text-noir-soft"
              )}
            >
              {i === catIdx && (
                <motion.span
                  layoutId="knowledge-cat-active"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-noir-accent"
                />
              )}
              <span className="relative">{c.category}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-wrap content-start gap-2 lg:flex-col">
            {category.items.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item)}
                className={cn(
                  "relative overflow-hidden rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300 lg:w-full",
                  activeItem.name === item.name
                    ? "border-noir-accent bg-noir-accent/10 text-noir-accent"
                    : "border-noir-hairline bg-noir-surface text-noir-soft hover:border-noir-accent/40 hover:translate-x-1"
                )}
              >
                {activeItem.name === item.name && (
                  <motion.span
                    layoutId="knowledge-item-active"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-y-0 left-0 w-0.5 bg-noir-accent"
                  />
                )}
                {item.name}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-noir-hairline bg-noir-surface">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={category.category + activeItem.name}
                custom={direction}
                initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-6"
              >
                <h3 className="font-display text-xl font-semibold text-noir-soft">{activeItem.name}</h3>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  {[
                    { label: "What it is", value: activeItem.what, accent: false },
                    { label: "How I used it", value: activeItem.how, accent: false },
                    { label: "Business impact", value: activeItem.impact, accent: true },
                    { label: "Where", value: activeItem.where, accent: false },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
                    >
                      <dt className="field-label mb-1 text-[10px] text-noir-muted">{row.label}</dt>
                      <dd className={row.accent ? "text-noir-accent" : "text-noir-soft/85"}>{row.value}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-8 text-sm text-noir-muted">
          Also across the stack: {additionalTools.join(" · ")}.
        </p>
      </div>
    </section>
  );
}
