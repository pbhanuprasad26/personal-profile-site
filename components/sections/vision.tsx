"use client";

import { motion } from "framer-motion";
import { vision } from "@/lib/content";

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-noir py-32 sm:py-40" style={{ color: "var(--noir-soft)" }}>
      {/* a single, slow point of light — the emotional peak of the page */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ background: "radial-gradient(circle, var(--noir-accent), transparent 65%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="field-label text-xs"
          style={{ color: "var(--noir-accent)" }}
        >
          Professional Vision
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-display text-3xl font-medium leading-[1.35] tracking-tight sm:text-4xl"
        >
          {vision.body}
        </motion.p>
      </div>
    </section>
  );
}
