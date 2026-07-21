"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function Education() {
  return (
    <section className="bg-surface-raised/50 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="Education" title="Foundation and ongoing study." />
        <div className="divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-base font-semibold text-ink">{e.degree}</p>
                <p className="text-sm text-slate">{e.school}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="tabular-nums text-sm text-ink/80">{e.period}</p>
                <p className="text-xs text-slate">{e.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
