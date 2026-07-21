"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { experience, projects } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Experience() {
  const [openId, setOpenId] = useState<string>("");

  return (
    <section id="experience" className="bg-surface-raised/50 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Professional Experience"
          title="Enterprise case studies, not job descriptions."
          intro="Each engagement below is scoped to what was actually delivered — including where credit is shared with the wider engineering team."
          tone="structural"
        />

        <div className="space-y-3">
          {experience.map((e) => {
            const open = openId === e.id;
            return (
              <div
                key={e.id}
                className={cn(
                  "overflow-hidden rounded-xl border bg-surface transition-colors duration-300",
                  open ? "border-verified/40" : "border-hairline"
                )}
              >
                <button
                  onClick={() => setOpenId(open ? "" : e.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-raised/60"
                  aria-expanded={open}
                >
                  <div>
                    <p className="font-display text-base font-semibold text-ink">{e.company}</p>
                    <p className="mt-0.5 text-sm text-slate">
                      {e.title} · {e.period}
                    </p>
                  </div>
                  <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                    <ChevronDown className="h-4 w-4 shrink-0 text-slate" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        variants={listContainer}
                        initial="hidden"
                        animate="show"
                        className="border-t border-hairline px-5 py-5"
                      >
                        {e.client && (
                          <motion.p variants={fadeUp} className="field-label mb-4 text-[10px] text-verified">
                            {e.client}
                          </motion.p>
                        )}
                        <motion.p variants={fadeUp} className="text-sm leading-relaxed text-slate">
                          {e.overview}
                        </motion.p>

                        {e.responsibilities.length > 0 && (
                          <div className="mt-5">
                            <motion.p variants={fadeUp} className="field-label mb-2 text-[10px] text-slate">
                              Scope of Work
                            </motion.p>
                            <ul className="space-y-2">
                              {e.responsibilities.map((r) => (
                                <motion.li
                                  key={r}
                                  variants={listItem}
                                  className="flex gap-2.5 text-sm leading-relaxed text-ink/90"
                                >
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-verified" />
                                  {r}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {e.impact.length > 0 && (
                          <div className="mt-5">
                            <motion.p variants={fadeUp} className="field-label mb-2 text-[10px] text-slate">
                              Business Impact
                            </motion.p>
                            <ul className="space-y-2">
                              {e.impact.map((r) => (
                                <motion.li
                                  key={r}
                                  variants={listItem}
                                  className="flex gap-2.5 text-sm leading-relaxed text-ink/90"
                                >
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pending" />
                                  {r}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {e.recognition && (
                          <motion.p
                            variants={fadeUp}
                            className="mt-5 rounded-lg border border-hairline bg-surface-raised px-4 py-3 text-sm italic leading-relaxed text-slate"
                          >
                            {e.recognition}
                          </motion.p>
                        )}

                        {e.tech.length > 0 && (
                          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-1.5">
                            {e.tech.map((t) => (
                              <span
                                key={t}
                                className="field-label rounded-full border border-hairline px-2.5 py-1 text-[9px] text-slate transition-colors hover:border-verified hover:text-verified"
                              >
                                {t}
                              </span>
                            ))}
                          </motion.div>
                        )}

                        {e.projectIds && e.projectIds.length > 0 && (
                          <div className="mt-6 space-y-3 border-t border-hairline pt-5">
                            <motion.p variants={fadeUp} className="field-label text-[10px] text-slate">
                              Case Studies
                            </motion.p>
                            {e.projectIds.map((pid) => {
                              const p = projects.find((proj) => proj.id === pid);
                              if (!p) return null;
                              return (
                                <motion.div
                                  key={pid}
                                  variants={fadeUp}
                                  className="rounded-lg border border-hairline bg-surface-raised/60 p-4"
                                >
                                  <p className="font-display text-sm font-semibold text-ink">{p.name}</p>
                                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{p.problem}</p>
                                  <p className="mt-2 text-sm font-medium text-verified">{p.impact}</p>
                                </motion.div>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
