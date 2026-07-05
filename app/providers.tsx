"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const raf_id = requestAnimationFrame(raf);

    // Route same-page anchor clicks through Lenis so they glide instead of
    // jumping. Offset matches the global 6rem scroll-margin-top. Links marked
    // data-native-anchor (the skip link) keep native behaviour, which also
    // moves keyboard focus.
    function onAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.(
        'a[href^="#"]:not([data-native-anchor])'
      ) as HTMLAnchorElement | null;
      if (!anchor || e.defaultPrevented) return;

      const id = anchor.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : document.body;
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(id ? target : 0, { offset: id ? -96 : 0 });
      history.pushState(null, "", id ? `#${id}` : window.location.pathname);
    }
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(raf_id);
      lenis.destroy();
    };
  }, []);

  // MotionConfig with reducedMotion="user" makes every Framer Motion
  // animation in the tree respect the OS-level prefers-reduced-motion
  // setting automatically, without per-component checks.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
