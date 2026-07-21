"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { kpis } from "@/lib/content";

function CountUp({ value, inView }: { value: string; inView: boolean }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const numeric = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(numeric === null ? value : "0");

  useEffect(() => {
    if (!inView || numeric === null) return;
    const target = numeric;
    const duration = 1100;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * target);
      setDisplay(current.toLocaleString());
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric]);

  if (numeric === null) return <>{value}</>;
  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export function ExecutiveSummary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-y border-hairline bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-6">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card-interactive relative flex flex-col justify-between gap-3 bg-surface px-5 py-8"
            >
              <p className="tabular-nums font-display text-4xl font-semibold text-ink">
                <CountUp value={k.value} inView={inView} />
              </p>
              <p className="text-xs leading-snug text-slate">{k.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
