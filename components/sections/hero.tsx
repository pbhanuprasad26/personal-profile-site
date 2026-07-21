"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileText, Linkedin, Github } from "lucide-react";
import { hero, person } from "@/lib/content";
import { ShareButton } from "@/components/share-button";
import portrait from "@/public/portrait.webp";

const checks = ["FEDERAL", "STATE", "2D BARCODE", "XML / XSD", "IRS MeF"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function HeadlineWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="inline">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.85, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  // Cinematic depth: as the hero scrolls out of view, layers separate at
  // different rates and the whole scene recedes rather than simply fading.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 150, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* form-field grid — the site's own material is the tax form itself, gently animated and parallaxed */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          y: gridY,
        }}
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "64px 64px" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
      >
        <div>
          <motion.p variants={rise} className="field-label text-xs text-verified">
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-[4.5rem]">
            <HeadlineWords text={hero.headline} />
          </h1>

          <motion.p variants={rise} className="mt-7 max-w-xl text-xl leading-relaxed text-slate">
            {hero.subline}
          </motion.p>

          <motion.p variants={rise} className="mt-3 max-w-xl text-[17px] leading-relaxed text-slate/90">
            {hero.description}
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={person.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <ShareButton />
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 px-2 py-2.5 text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              Contact{" "}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* signature element: a compliance validation strip */}
          <motion.div
            variants={rise}
            className="mt-14 max-w-xl rounded-xl border border-hairline bg-surface/60 p-5 backdrop-blur-sm"
          >
            <p className="field-label mb-3 text-[10px] text-slate">Form 1040 · Release Validation</p>
            <div className="flex flex-wrap gap-2">
              {checks.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="field-label inline-flex items-center gap-1.5 rounded-md border border-verified/30 bg-verified-soft px-2.5 py-1 text-[10px] text-verified"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 1.05 + i * 0.14 }}
                  >
                    ✓
                  </motion.span>
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div style={{ y: portraitY, scale: portraitScale }}>
        <motion.div
          variants={rise}
          className="relative mx-auto w-full max-w-sm"
          style={{ perspective: 1000 }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          {/* ambient glow behind the portrait */}
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in srgb, var(--verified) 22%, transparent), transparent 70%)",
            }}
            aria-hidden
          />

          <motion.div
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-surface-raised shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]">
              <Image
                src={portrait}
                alt={person.name}
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 400px"
                className="object-cover grayscale-[15%]"
              />
              {/* subtle glass reflection sweep */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.16) 45%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-6 rounded-xl border border-hairline bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-sm"
          >
            <p className="field-label text-[10px] text-slate">Currently</p>
            <p className="mt-0.5 text-sm font-medium text-ink">{person.currentTitle}</p>
          </motion.div>
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
