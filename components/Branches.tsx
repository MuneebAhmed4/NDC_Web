"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Phone } from "lucide-react";

// Branch data sourced from the official store locator (ndc.com.pk/store-locator,
// July 2026) — have the client verify before launch. `query` drives both the
// embedded map and the "Get directions" link.
const branches = [
  {
    name: "Muslim Town",
    address: "12-A Main Wahdat Road, near Abrar Centre",
    hours: "8am – 10pm",
    phone: "042-37555321",
    query: "National Dry Cleaners, 12-A Main Wahdat Road, Muslim Town, Lahore",
  },
  {
    name: "Faisal Town",
    address: "598-B Qazi Muhammad Esa Road, near Ravi Restaurant",
    hours: "9am – 10pm",
    phone: "042-35165920",
    query: "National Dry Cleaners, 598-B Qazi Muhammad Esa Road, Faisal Town, Lahore",
  },
  {
    name: "Johar Town",
    address: "20-A Samsaani Road, near Shadaywal Chowk",
    hours: "8am – 9pm",
    phone: "042-35316000",
    query: "National Dry Cleaners, 20-A Samsaani Road, Johar Town, Lahore",
  },
  {
    name: "DHA Phase IV",
    address: "81 CCA Sector DD, near Masooms",
    hours: "9am – 9pm",
    phone: "042-37185769",
    query: "National Dry Cleaners, 81 CCA Sector DD, DHA Phase 4, Lahore",
  },
  {
    name: "DHA Phase V",
    address: "68 CCA, near Jalal Sons",
    hours: "9am – 9pm",
    phone: "042-37182084",
    query: "National Dry Cleaners, 68 CCA, DHA Phase 5, Lahore",
  },
  {
    name: "Thokar Niaz Baig",
    address: "Dogar Market, Canal Bank Road",
    hours: "9am – 9pm",
    phone: "042-37498178",
    query: "National Dry Cleaners, Dogar Market, Canal Bank Road, Thokar Niaz Baig, Lahore",
  },
];

// The overview query surfaces Google's own pins for every listed NDC
// location, so all branches show highlighted without needing an API key.
const overviewQuery = "National Dry Cleaners Lahore";

const easeOut = [0.16, 1, 0.3, 1] as const;

function embedSrc(query: string, zoomed: boolean) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}${
    zoomed ? "&z=15" : "&z=12"
  }&output=embed`;
}

function directionsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function Branches() {
  // null = overview showing all branches
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? overviewQuery : branches[active].query;

  return (
    <section id="locations" className="py-20 md:py-28 px-6 bg-steam">
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
            Find a branch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-balance">
            Six branches across Lahore.
          </h2>
          <p className="mt-4 text-ink/70 text-base leading-relaxed">
            Drop off at whichever branch is closest — or skip the trip entirely
            with free pickup and delivery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,20rem)_1fr] gap-6 items-start">
          {/* Branch list */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3"
            aria-label="Branch locations"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
              }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-pressed={active === null}
                className={`w-full min-h-11 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${
                  active === null
                    ? "bg-forest text-paper"
                    : "bg-paper text-ink/80 border border-forest/15 hover:border-forest/40 hover:text-forest"
                }`}
              >
                View all branches
              </button>
            </motion.li>

            {branches.map((b, i) => (
              <motion.li
                key={b.name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
                }}
              >
                <div
                  className={`rounded-xl transition-colors duration-200 ${
                    active === i
                      ? "bg-forest text-paper"
                      : "bg-paper border border-forest/15 hover:border-forest/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className="w-full min-h-11 px-4 pt-3 pb-1.5 text-left"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin aria-hidden size={15} className={active === i ? "text-brass" : "text-forest"} />
                      {b.name}
                    </span>
                    <span className={`block pl-6 text-xs leading-relaxed ${active === i ? "text-paper/75" : "text-ink/65"}`}>
                      {b.address}
                    </span>
                    <span className={`block pl-6 text-xs ${active === i ? "text-paper/75" : "text-ink/65"}`}>
                      Open {b.hours}
                    </span>
                  </button>
                  <div className="flex flex-wrap gap-x-4 px-4 pl-10 pb-3 pt-1">
                    <a
                      href={directionsHref(b.query)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 py-1 text-xs font-medium transition-colors ${
                        active === i
                          ? "text-paper/85 hover:text-brass"
                          : "text-forest hover:text-ink"
                      }`}
                    >
                      Get directions
                      <ExternalLink aria-hidden size={11} />
                      <span className="sr-only"> to the {b.name} branch (opens Google Maps)</span>
                    </a>
                    <a
                      href={`tel:${b.phone.replace(/-/g, "")}`}
                      className={`inline-flex items-center gap-1.5 py-1 text-xs font-medium transition-colors ${
                        active === i
                          ? "text-paper/85 hover:text-brass"
                          : "text-forest hover:text-ink"
                      }`}
                    >
                      <Phone aria-hidden size={11} />
                      {b.phone}
                      <span className="sr-only"> — call the {b.name} branch</span>
                    </a>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-forest/15 bg-paper"
          >
            <iframe
              src={embedSrc(current, active !== null)}
              title={
                active === null
                  ? "Map of all National Dry Cleaners branches in Lahore"
                  : `Map of the National Dry Cleaners ${branches[active].name} branch`
              }
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full h-96 lg:h-120 border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
