"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { person } from "@/lib/content";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [progress, setProgress] = useState(0); // 0 = top of page, 1 = scrolled
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Standard next-themes hydration-safe pattern: theme is unknown on the
  // server, so we defer rendering the toggle until after client mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setProgress(Math.min(y / 120, 1));
  });

  // Track which section is currently in view to drive the sliding underline
  const sectionsRef = useRef<{ id: string; el: Element }[]>([]);
  useEffect(() => {
    sectionsRef.current = links
      .map((l) => ({ id: l.href, el: document.querySelector(l.href) as Element }))
      .filter((s) => s.el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sectionsRef.current.find((s) => s.el === entry.target);
            if (match) setActive(match.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sectionsRef.current.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-40 flex justify-center px-4"
        style={{ paddingTop: 16 - progress * 6 }}
      >
        <div
          className="flex w-full max-w-5xl items-center justify-between rounded-full border transition-[padding,background-color,border-color,box-shadow] duration-300"
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10 - progress * 2,
            paddingBottom: 10 - progress * 2,
            backdropFilter: `blur(${progress * 16}px)`,
            WebkitBackdropFilter: `blur(${progress * 16}px)`,
            backgroundColor:
              progress > 0.05
                ? `color-mix(in srgb, var(--surface) ${70 + progress * 20}%, transparent)`
                : "transparent",
            borderColor: progress > 0.05 ? "var(--hairline)" : "transparent",
            boxShadow: progress > 0.05 ? "0 8px 30px -12px rgba(0,0,0,0.12)" : "none",
          }}
        >
          <a
            href="#top"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-semibold tracking-tight text-paper transition-transform duration-300 hover:scale-105"
          >
            BP
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === l.href ? "text-ink" : "text-slate hover:text-ink"
                )}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-surface-raised"
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate transition-all duration-300 hover:bg-surface-raised hover:text-ink hover:rotate-12"
              >
                {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-all duration-300 hover:opacity-85 hover:scale-[1.03] sm:block"
            >
              Let&apos;s talk
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate hover:bg-surface-raised hover:text-ink md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-paper p-6 md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="field-label text-[11px] text-slate">{person.shortName}</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-display text-3xl font-semibold text-ink"
              >
                <span className="mr-3 text-base text-slate">0{i + 1}</span>
                {l.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
