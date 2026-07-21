"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { person } from "@/lib/content";

const items = [
  { label: "Journey", href: "#journey" },
  { label: "Professional Experience", href: "#experience" },
  { label: "Technical Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
  { label: "View Resume", href: person.resumeHref },
  { label: "LinkedIn", href: person.linkedin },
  { label: "GitHub", href: person.github },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-ink/40 px-4 pt-28"
      onClick={() => setOpen(false)}
    >
      <Command
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-hairline bg-surface shadow-xl"
      >
        <Command.Input
          autoFocus
          placeholder="Jump to a section, or open a link…"
          className="w-full border-b border-hairline bg-transparent px-4 py-3.5 text-sm text-ink outline-none placeholder:text-slate"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-slate">No results.</Command.Empty>
          {items.map((item) => (
            <Command.Item
              key={item.label}
              onSelect={() => {
                if (item.href.startsWith("#")) {
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.open(item.href, "_blank");
                }
                setOpen(false);
              }}
              className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-verified-soft data-[selected=true]:text-verified"
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
        <div className="field-label border-t border-hairline px-4 py-2 text-[10px] text-slate">
          esc to close
        </div>
      </Command>
    </div>
  );
}
