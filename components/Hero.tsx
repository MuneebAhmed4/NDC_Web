"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current || !videoRef.current) return;

    const ctx = gsap.context(() => {
      // Scroll-parallax: video drifts upward slower than the page scroll
      gsap.fromTo(
        videoRef.current,
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

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen parallax video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-[125%] top-[-12.5%] object-cover"
      >
        <source src="https://videos.pexels.com/video-files/8756635/8756635-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Deep forest green overlay — brand colour wash over the video */}
      <div className="absolute inset-0 bg-forest/75" />

      {/* Subtle gradient: darker at top (behind nav) and bottom edge */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-transparent to-ink/50" />

      {/* Sage vignette on left so text pops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(22,36,28,0.55)_100%)]" />

      {/* Brass warm glow — top-left accent */}
      <div
        aria-hidden
        className="absolute -top-16 -left-16 w-[32rem] h-[32rem] rounded-full bg-brass/15 blur-3xl pointer-events-none"
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
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full font-semibold px-8 py-3.5 shadow-lg"
            style={{ background: "var(--brass)", color: "var(--ink)" }}
          >
            Schedule a pickup
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(127,169,140,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border font-medium px-8 py-3.5 backdrop-blur-sm transition-colors"
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
