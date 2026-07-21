"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { contact, person } from "@/lib/content";

// Replace with your own Formspree form ID: https://formspree.io/forms
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkodzozw";

type Status = "idle" | "sending" | "sent" | "error";

const contactLinks = [
  { href: `mailto:${person.email}`, icon: Mail, label: person.email, external: false },
  { href: person.linkedin, icon: Linkedin, label: "LinkedIn Profile", external: true },
  { href: person.github, icon: Github, label: "GitHub Profile", external: true },
];

const steps = [
  { key: "name", question: "What should I call you?", type: "text", placeholder: "Your name" },
  { key: "email", question: "And where can I reply?", type: "email", placeholder: "you@company.com" },
  { key: "message", question: "What's on your mind?", type: "textarea", placeholder: "Say hello, ask a question, or propose something…" },
] as const;

const slideVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);
  // Only auto-focus step inputs once the visitor has actually engaged with
  // the form (advanced past step 1). Auto-focusing on initial mount made the
  // browser scroll the whole page down to this section on every load, since
  // this component is always mounted (single-page site) regardless of what
  // the visitor is actually looking at.
  const [interacted, setInteracted] = useState(false);

  const current = steps[step];
  const canAdvance = values[current.key].trim().length > (current.key === "email" ? 4 : 0);

  function next() {
    if (!canAdvance) return;
    setInteracted(true);
    if (step < steps.length - 1) setStep(step + 1);
    else submit();
  }

  async function submit() {
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("name", values.name);
      fd.append("email", values.email);
      fd.append("message", values.message);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-2xl"
      >
        <p className="field-label text-xs text-verified">Let&apos;s Connect</p>
        <h2 className="mt-3.5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {contact.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate">{contact.body}</p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          {contactLinks.map(({ href, icon: Icon, label, external }, i) => (
            <motion.a
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="card-interactive flex items-center gap-3 rounded-xl border border-hairline bg-surface px-5 py-4 text-sm"
            >
              <Icon className="h-4 w-4 text-verified" />
              <span className="text-ink">{label}</span>
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex items-center gap-3 rounded-xl border border-hairline bg-surface px-5 py-4 text-sm"
          >
            <MapPin className="h-4 w-4 text-verified" />
            <span className="text-ink">{person.location}</span>
          </motion.div>
        </div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-hairline bg-surface p-7"
        >
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 py-10 text-center"
            >
              <CheckCircle2 className="h-8 w-8 text-verified" />
              <p className="font-display text-lg font-semibold text-ink">Message sent.</p>
              <p className="text-sm text-slate">Thanks, {values.name.split(" ")[0] || "there"} — I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <>
              {/* step indicator */}
              <div className="mb-6 flex items-center gap-1.5">
                {steps.map((s, i) => (
                  <div
                    key={s.key}
                    className="h-1 flex-1 overflow-hidden rounded-full bg-hairline"
                  >
                    <motion.div
                      className="h-full bg-verified"
                      initial={false}
                      animate={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <label className="field-label mb-3 block text-[10px] text-verified">
                    {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </label>
                  <p className="mb-4 font-display text-xl font-semibold text-ink">{current.question}</p>

                  {current.type === "textarea" ? (
                    <textarea
                      autoFocus={interacted}
                      rows={4}
                      placeholder={current.placeholder}
                      value={values.message}
                      onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) next();
                      }}
                      name="message"
                      className="w-full resize-none rounded-lg border border-hairline bg-paper px-4 py-3 text-ink outline-none transition-all duration-200 focus:border-verified focus:shadow-[0_0_0_3px_var(--verified-soft)]"
                    />
                  ) : (
                    <input
                      autoFocus={interacted}
                      type={current.type}
                      placeholder={current.placeholder}
                      name={current.key}
                      value={values[current.key]}
                      onChange={(e) => setValues((v) => ({ ...v, [current.key]: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") next();
                      }}
                      className="w-full rounded-lg border border-hairline bg-paper px-4 py-3 text-ink outline-none transition-all duration-200 focus:border-verified focus:shadow-[0_0_0_3px_var(--verified-soft)]"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    Back
                  </button>
                ) : (
                  <span />
                )}
                <motion.button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance || status === "sending"}
                  whileHover={{ scale: canAdvance ? 1.03 : 1 }}
                  whileTap={{ scale: canAdvance ? 0.97 : 1 }}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity disabled:opacity-40"
                >
                  {status === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : step < steps.length - 1 ? (
                    <>
                      Next <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      Send <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </motion.button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-sm text-pending">
                  Something went wrong — please email {person.email} directly instead.
                </p>
              )}
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
