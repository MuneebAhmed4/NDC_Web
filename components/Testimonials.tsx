"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock3, ShieldCheck } from "lucide-react";

const proofPoints = [
  {
    icon: Clock3,
    title: "Fast daily service",
    desc: "Most routine garments can return within 24 hours, with same-day timing confirmed by branch.",
  },
  {
    icon: ShieldCheck,
    title: "Inspection before cleaning",
    desc: "Garments are checked by fabric, colour, care label, trims, and stain risk before the cleaning method is selected.",
  },
  {
    icon: BadgeCheck,
    title: "Specialist item handling",
    desc: "Bridal, leather, suede, curtains, rugs, and upholstery are quoted and handled through specialist processes.",
  },
];

const credentials = [
  { value: "1967", label: "Est. in Lahore" },
  { value: "DLI", label: "American certified" },
  { value: "100+", label: "Imported EU machines" },
  { value: "ISO", label: "Quality certified" },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="max-w-xl mb-14 md:mb-16"
        >
          <p className="flex items-center gap-3 text-forest font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            <span aria-hidden className="w-8 h-0.5 rounded-full bg-brass" />
            Trust signals
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-balance">
            Built for the garments you do not want to risk.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {proofPoints.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-forest/10 p-7 bg-paper hover:border-forest/30 hover:shadow-[0_12px_32px_-16px_rgba(31,77,58,0.35)] transition-[border-color,box-shadow] duration-200"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-forest text-paper">
                <Icon aria-hidden size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">{desc}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Credentials bar */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-forest/10 rounded-2xl overflow-hidden"
        >
          {credentials.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
              className="bg-steam px-8 py-10 text-center"
            >
              <p className="font-display text-4xl text-forest mb-1">{value}</p>
              <p className="text-sm text-ink/70">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
