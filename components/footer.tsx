import { person } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <p className="max-w-md text-sm leading-relaxed text-slate">
          Building the future of tax technology through quality engineering, automation, and continuous
          learning.
        </p>
        <p className="field-label text-[10px] text-slate">
          {person.name} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
