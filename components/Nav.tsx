"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(31,77,58,0.12)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className={`font-display text-xl tracking-tight transition-colors duration-300 ${
            solid ? "text-forest" : "text-paper"
          }`}
        >
          National <span className="text-brass">Dry Cleaners</span>
        </a>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
          }}
          className="hidden md:flex items-center gap-8 text-sm font-medium"
        >
          {links.map((l) => (
            <motion.li
              key={l.href}
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <a
                href={l.href}
                className={`inline-block py-2 transition-colors duration-300 ${
                  solid
                    ? "text-ink/80 hover:text-forest"
                    : "text-paper/90 hover:text-brass"
                }`}
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className={`rounded-full text-sm font-medium px-5 py-2.5 transition-colors duration-300 ${
            solid ? "bg-forest text-paper" : "bg-paper text-forest"
          }`}
        >
          Book pickup
        </motion.a>
      </nav>
    </motion.header>
  );
}
