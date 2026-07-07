"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Trust", href: "#reviews" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 40);
    if (y > 40) setOpen(false);
  });

  const onLinkClick = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid || open
          ? "bg-paper/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(31,77,58,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          onClick={onLinkClick}
          className={`font-display text-lg tracking-tight transition-colors duration-300 sm:text-xl ${
            solid || open ? "text-forest" : "text-paper"
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
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
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

        <div className="hidden items-center gap-2 md:flex">
          <motion.a
            href={PHONE_HREF}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-300 ${
              solid || open ? "bg-forest text-paper" : "bg-paper text-forest"
            }`}
          >
            <Phone aria-hidden size={15} />
            Call
          </motion.a>
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brass px-4 text-sm font-medium text-ink"
          >
            <MessageCircle aria-hidden size={15} />
            WhatsApp
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${
            solid || open ? "bg-forest text-paper" : "bg-paper text-forest"
          }`}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-forest/10 bg-paper px-6 pb-5 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-steam hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3">
            <a
              href={PHONE_HREF}
              onClick={onLinkClick}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-4 text-sm font-semibold text-paper"
            >
              <Phone aria-hidden size={16} />
              Call now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onLinkClick}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brass px-4 text-sm font-semibold text-ink"
            >
              <MessageCircle aria-hidden size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
