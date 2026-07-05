"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Wind,
  Droplets,
  Gem,
  Scissors,
  Feather,
  Palette,
  Layers,
  Sofa,
} from "lucide-react";

// Service list merged from the in-app price list (Dry Cleaning, Steam Press,
// Alteration, Dye, Leather Care, Rafu, Accessories) and the wider NDC service
// range (wet cleaning, wash & fold, wedding restoration, rugs, upholstery,
// curtains, car interiors, odour removal). Have the client confirm the final
// list and per-garment pricing before launch.
const services = [
  {
    icon: Shirt,
    title: "Dry cleaning",
    desc: "Men's suits and sherwani, ladies' formals, kids' wear, and everyday garments — cleaned on the right cycle for each fabric, plus ties, caps, and accessories.",
  },
  {
    icon: Wind,
    title: "Steam pressing & finishing",
    desc: "Crisp hand-finishing and steam pressing, returned on the hanger or folded — as a standalone service or with any clean.",
  },
  {
    icon: Droplets,
    title: "Wet cleaning & wash-and-fold",
    desc: "Gentle eco-friendly wet cleaning for delicates, plus everyday wash-and-fold laundry priced by weight.",
  },
  {
    icon: Gem,
    title: "Wedding & formalwear",
    desc: "Bridal lehnga, gharara, and gowns cleaned, restored, preserved, and boxed — for the big day or long-term storage.",
  },
  {
    icon: Scissors,
    title: "Alterations & repairs",
    desc: "Hemming, resizing, and in-house tailoring — most alterations completed within 48 hours.",
  },
  {
    icon: Feather,
    title: "Rafu — invisible darning",
    desc: "Fine hand reweaving that closes moth holes, snags, and tears so the mend all but disappears into the weave.",
  },
  {
    icon: Palette,
    title: "Dyeing & colour restoration",
    desc: "Re-dyeing and colour restoration to bring faded garments and fabrics back to their original depth.",
  },
  {
    icon: Layers,
    title: "Leather, suede & fur",
    desc: "Specialist cleaning and conditioning for leather jackets, suede, and fur, using imported European machinery.",
  },
  {
    icon: Sofa,
    title: "Home, upholstery & auto",
    desc: "Rugs and carpets, curtains and blinds, sofas, cushions, and mattresses, car-interior detailing, and odour and smoke removal.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="max-w-xl mb-14 md:mb-16"
        >
          <p className="flex items-center gap-3 text-forest font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            <span aria-hidden className="w-8 h-0.5 rounded-full bg-brass" />
            What we handle
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-balance">
            One drop-off. Everything covered.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group rounded-2xl bg-steam p-8 border border-forest/10 hover:border-forest/30 hover:shadow-[0_12px_32px_-16px_rgba(31,77,58,0.35)] transition-[border-color,box-shadow] duration-200"
            >
              <div className="w-11 h-11 rounded-full bg-forest text-paper flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-brass group-hover:text-ink">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{title}</h3>
              <p className="text-ink/70 text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mt-10 text-ink/70 text-base leading-relaxed"
        >
          Free pickup and delivery on every order across Lahore, with same-day
          service on request. Pricing is per garment —{" "}
          <a
            href="#contact"
            className="font-medium text-forest underline decoration-brass/60 underline-offset-4 hover:decoration-brass transition-colors"
          >
            ask for a full price list
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
