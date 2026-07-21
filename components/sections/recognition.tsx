"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import { recognition } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

// Highlight one meaningful phrase per paragraph with a premium accent mark,
// without altering the underlying text.
function highlight(text: string) {
  const phrase = "recommend Bhanu for future contracts";
  const idx = text.indexOf(phrase);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-verified-soft px-1 py-0.5 font-medium text-verified">{phrase}</mark>
      {text.slice(idx + phrase.length)}
    </>
  );
}

export function Recognition() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="Professional Recognition" title="Recognized by the people I built with." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="paper-grain relative overflow-hidden rounded-2xl border border-cream-line bg-surface shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)]"
        >
          {/* top accent bar, like a document letterhead rule */}
          <div className="h-1 w-full bg-gradient-to-r from-verified via-verified/60 to-transparent" />

          <div className="flex items-start justify-between gap-4 border-b border-cream-line px-7 py-6">
            <div className="flex items-start gap-3.5">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-verified" />
              <div>
                <p className="font-display text-lg font-semibold text-ink">{recognition.from}</p>
                <p className="text-sm text-slate">{recognition.role}</p>
                <p className="field-label mt-1.5 text-[10px] text-slate">{recognition.context}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between px-7 py-3.5 text-sm font-medium text-verified transition-colors hover:bg-verified-soft/40"
            aria-expanded={open}
          >
            {open ? "Collapse full note" : "Read full note"}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  initial={{ rotateX: -12, scaleY: 0.94, transformOrigin: "top" }}
                  animate={{ rotateX: 0, scaleY: 1 }}
                  exit={{ rotateX: -8, scaleY: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 border-t border-cream-line px-7 py-7"
                >
                  {recognition.body.map((p, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                      className="text-[15px] leading-[1.75] text-ink/85"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {highlight(p)}
                    </motion.p>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + recognition.body.length * 0.08 }}
                    className="rounded-lg border border-pending/30 bg-pending-soft px-4 py-3"
                  >
                    <p className="field-label text-[10px] text-pending">Noted area for growth</p>
                    <p className="mt-1 text-sm text-ink/85">{recognition.areaForGrowth}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
