"use client";

import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

// PLACEHOLDER CONTACT DETAILS — confirm with the client before launch.
// Displayed number and tel: href must stay in sync (632 = "NDC" on a keypad).
const PHONE_DISPLAY = "03-111-222-632";
const PHONE_HREF = "tel:03111222632";
const EMAIL = "info@ndc.com.pk";
// Hours and main-branch address sourced from ndc.com.pk/store-locator (July
// 2026) — branch hours range from 8am–9pm to 8am–10pm; verify with client.
const HOURS = "Open daily · 8am–10pm (varies by branch)";
const ADDRESS = "Main branch: 12-A Main Wahdat Road, Muslim Town, Lahore";

export default function CTAFooter() {
  return (
    <>
      <section id="contact" className="py-20 md:py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mx-auto max-w-6xl rounded-4xl bg-forest px-8 py-16 md:py-20 md:px-16 text-center relative overflow-hidden"
        >
          {/* background glow */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brass/10 blur-3xl pointer-events-none"
          />

          <p className="flex items-center justify-center gap-3 text-paper font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            <span aria-hidden className="w-8 h-0.5 rounded-full bg-brass" />
            Book a pickup
            <span aria-hidden className="w-8 h-0.5 rounded-full bg-brass" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-paper mb-5 text-balance">
            Your first pickup is one call away.
          </h2>
          <p className="text-paper/75 max-w-md mx-auto mb-10 leading-relaxed">
            Free pickup and delivery across Lahore. Most orders back within
            24 hours — same-day available.
          </p>

          <div className="mb-8">
            <motion.a
              href={PHONE_HREF}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 font-semibold text-lg shadow-lg"
              style={{ background: "var(--brass)", color: "var(--ink)" }}
            >
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call {PHONE_DISPLAY}
            </motion.a>
          </div>

          <p className="text-paper/75 text-sm mb-10">{HOURS}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-block py-2 text-paper/80 underline decoration-paper/40 underline-offset-4 hover:text-brass hover:decoration-brass transition-colors"
            >
              {EMAIL}
            </a>
            <a
              href="https://instagram.com/ndcpakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 text-paper/80 underline decoration-paper/40 underline-offset-4 hover:text-brass hover:decoration-brass transition-colors"
            >
              Instagram @ndcpakistan
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-10 text-sm text-ink/70">
        <div className="mx-auto max-w-6xl border-t border-forest/10 pt-8 grid gap-8 md:grid-cols-3">
          <div className="space-y-1">
            <p className="font-display text-base text-forest mb-1">
              National <span className="text-brass">Dry Cleaners</span>
            </p>
            <p>Est. 1967 · Lahore, Pakistan</p>
            <p>{ADDRESS}</p>
            <p>{HOURS}</p>
          </div>
          <div className="space-y-1">
            <p>
              <a href={PHONE_HREF} className="inline-block py-1 hover:text-forest underline decoration-ink/25 underline-offset-4 transition-colors">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="inline-block py-1 hover:text-forest underline decoration-ink/25 underline-offset-4 transition-colors">
                {EMAIL}
              </a>
            </p>
            <p>
              <a href="https://instagram.com/ndcpakistan" target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-forest underline decoration-ink/25 underline-offset-4 transition-colors">
                @ndcpakistan
              </a>
            </p>
          </div>
          <div className="space-y-1 md:text-right">
            <p>DLI (American) certified</p>
            <p>ISO quality certified</p>
            <p>Eco-safe hydrocarbon solvent</p>
            <p>© {new Date().getFullYear()} National Dry Cleaners</p>
          </div>
        </div>
      </footer>
    </>
  );
}
