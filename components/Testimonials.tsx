"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// PLACEHOLDER DATA — replace with verified customer reviews (real name,
// neighbourhood, and service used) supplied by the client before launch.
const reviews = [
  {
    quote: "They got a decade-old stain out of my father's sherwani. I'd genuinely given up on it.",
    name: "Amina R.",
    location: "DHA, Lahore",
    service: "Specialty fabric care",
  },
  {
    quote: "Pickup and delivery has saved me hours every month. Never a missed window, never a damaged garment.",
    name: "Daniyal K.",
    location: "Gulberg, Lahore",
    service: "Pickup & delivery",
  },
  {
    quote: "Preserved and boxed my wedding lehnga exactly how they said they would. Absolutely perfect.",
    name: "Sara M.",
    location: "Model Town, Lahore",
    service: "Wedding preservation",
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
            Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-balance">
            What Lahore says.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-forest/10 p-7 bg-paper hover:border-forest/30 hover:shadow-[0_12px_32px_-16px_rgba(31,77,58,0.35)] transition-[border-color,box-shadow] duration-200"
            >
              <div
                role="img"
                aria-label="Rated 5 out of 5 stars"
                className="flex gap-0.5 text-brass mb-4"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} aria-hidden size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-ink/80 leading-relaxed mb-5">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-medium text-ink/80">{r.name}</span>
                <span className="text-ink/65"> · {r.location}</span>
                <span className="mt-2 block text-xs font-medium tracking-wide uppercase text-forest">
                  {r.service}
                </span>
              </figcaption>
            </motion.figure>
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
