"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";

const easeOut = [0.16, 1, 0.3, 1] as const;

// Background clip playlist. Add an entry (poster + both encodes) to extend the
// rotation — the crossfade system picks up extra clips automatically. Keep all
// clips at the same 1920×1080 cover dimensions.
const clips = [
  {
    poster: "/videos/hero-1-poster.jpg",
    src1080: "/videos/hero-1-1080.mp4",
    src720: "/videos/hero-1-720.mp4",
  },
  {
    poster: "/videos/hero-2-poster.jpg",
    src1080: "/videos/hero-2-1080.mp4",
    src720: "/videos/hero-2-720.mp4",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const advance = () => setActive((i) => (i + 1) % clips.length);

  // Playback + crossfade controller. Playback is JS-driven so reduced-motion
  // (and no-JS) visitors keep the first clip's static poster instead of a
  // rotating video. Runs whenever the active clip changes.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const light = window.innerWidth < 768 || conn?.saveData === true;
    const srcFor = (i: number) => (light ? clips[i].src720 : clips[i].src1080);

    // Assign each clip's source lazily, the first time it's needed.
    const prepare = (i: number) => {
      const v = videoRefs.current[i];
      if (v && !v.getAttribute("src")) {
        v.src = srcFor(i);
        v.load();
      }
    };

    const current = videoRefs.current[active];
    if (!current) return;
    prepare(active);
    current.currentTime = 0;
    current.play().catch(() => {});

    // Pre-buffer the next clip so its crossfade starts on a ready frame, and
    // pause the rest so only one video decodes at a time.
    prepare((active + 1) % clips.length);
    videoRefs.current.forEach((el, i) => {
      if (el && i !== active) el.pause();
    });
  }, [active]);

  // GSAP parallax drifts the whole video stack on scroll. Code-split out of the
  // initial bundle, decorative, and gated behind reduced-motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current || !stackRef.current) return;

    const stack = stackRef.current;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !sectionRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          stack,
          { y: "0%" },
          {
            y: "-25%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
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
    <section
      ref={sectionRef}
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-forest"
    >
      {/* Full-screen parallax video stack — locally hosted, compressed, and
          poster-first. Clips crossfade and advance when each one ends; sources
          and playback are JS-driven so reduced-motion and no-JS visitors keep
          the first clip's static poster. */}
      <div
        ref={stackRef}
        aria-hidden
        className="absolute inset-0 w-full h-[125%] top-[-12.5%]"
      >
        {clips.map((clip, i) => (
          <video
            key={clip.src1080}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            muted
            playsInline
            preload="none"
            poster={clip.poster}
            loop={clips.length === 1}
            onEnded={clips.length > 1 ? advance : undefined}
            style={{ opacity: i === active ? 1 : 0 }}
            className="absolute inset-0 w-full h-full object-cover bg-forest transition-opacity duration-1000 ease-in-out"
          />
        ))}
      </div>

      {/* Deep forest green overlay — brand colour wash over the video */}
      <div className="absolute inset-0 bg-forest/75" />

      {/* Subtle gradient: darker at top (behind nav) and bottom edge */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-transparent to-ink/50" />

      {/* Sage vignette on left so text pops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(22,36,28,0.55)_100%)]" />

      {/* Brass warm glow — top-left accent */}
      <div
        aria-hidden
        className="absolute -top-16 -left-16 w-128 h-128 rounded-full bg-brass/15 blur-3xl pointer-events-none"
      />

      {/* Hero content — centred, full width */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easeOut, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl leading-[1.05] text-steam drop-shadow-lg"
        >
          Pressed, cared for,
          <br />
          <span
            className="relative inline-block"
            style={{ color: "var(--brass)" }}
          >
            back by tomorrow.
            {/* brass underline stroke */}
            <span
              aria-hidden
              className="absolute left-0 -bottom-1 w-full h-0.75 rounded-full opacity-60"
              style={{ background: "var(--brass)" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.28 }}
          className="mt-8 text-lg text-steam/80 max-w-xl mx-auto leading-relaxed"
        >
          National Dry Cleaners handles everyday shirts, delicate silks,
          wedding gowns, and leather — with free pickup and delivery across
          the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.44 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <motion.a
            href={PHONE_HREF}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full px-7 font-semibold shadow-lg"
            style={{ background: "var(--brass)", color: "var(--ink)" }}
          >
            <Phone aria-hidden size={18} />
            Call {PHONE_DISPLAY}
          </motion.a>
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(246,243,234,1)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-paper/90 px-7 font-semibold text-forest backdrop-blur-sm transition-colors"
          >
            <MessageCircle aria-hidden size={18} />
            WhatsApp pickup
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(127,169,140,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center rounded-full border px-7 font-medium backdrop-blur-sm transition-colors"
            style={{
              borderColor: "var(--sage)",
              color: "var(--steam)",
            }}
          >
            View services
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-steam/55 text-sm"
        >
          {["Same-day service", "Free pickup & delivery", "Est. 1967 · Lahore"].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <span style={{ color: "var(--sage)" }}>✓</span> {badge}
            </span>
          ))}
        </motion.div>

        {/* Certification strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {["DLI Certified", "ISO Certified", "Eco-Safe Solvent", "100+ EU Machines"].map((cert) => (
            <span
              key={cert}
              className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full border"
              style={{ borderColor: "rgba(127,169,140,0.35)", color: "rgba(232,239,230,0.55)" }}
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll-cue chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/50"
        aria-hidden
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
