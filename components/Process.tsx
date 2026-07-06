"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Free pickup",
    desc: "We collect from your door across Lahore — on a time that suits you, at no charge.",
  },
  {
    n: "02",
    title: "Inspect & sort",
    desc: "Every garment is checked by hand and sorted by fabric type, colour, and care requirement.",
  },
  {
    n: "03",
    title: "Clean with the right process",
    desc: "We use eco-safe hydrocarbon solvent — no perchloroethylene — through 100+ imported European machines in our 10,000 sq ft Lahore facility.",
  },
  {
    n: "04",
    title: "Press & finish",
    desc: "Garments are hand-pressed and finished to DLI (American Drycleaning & Laundry Institute) standards.",
  },
  {
    n: "05",
    title: "Deliver back to you",
    desc: "Returned on the hanger or folded, usually within 24 hours. Same-day service available on request.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const line = lineRef.current;
    if (prefersReduced || !sectionRef.current || !line) return;

    // GSAP is code-split out of the initial bundle and loaded lazily here; the
    // scrubbed line fill is decorative and only needed once this section mounts.
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !sectionRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      }, sectionRef);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-28 px-6 bg-forest text-paper">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-center gap-3 text-paper font-semibold text-xs tracking-[0.2em] uppercase mb-3"
        >
          <span aria-hidden className="w-8 h-0.5 rounded-full bg-brass" />
          How it works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          className="font-display text-4xl md:text-5xl mb-14 md:mb-16 text-balance"
        >
          Door to door. Five steps.
        </motion.h2>

        <div className="relative pl-10">
          <div className="absolute left-3 top-1 bottom-1 w-px bg-paper/15" />
          <div
            ref={lineRef}
            className="absolute left-3 top-1 bottom-1 w-px bg-brass"
          />

          <div className="space-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-10 top-0.5 w-6 h-6 rounded-full bg-paper text-forest text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-paper/75 max-w-md text-base leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
