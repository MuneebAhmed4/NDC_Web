# National Dry Cleaners — Project Guide

## Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS (design tokens below — don't invent new colors ad hoc)
- Framer Motion (`motion/react`) — all component-level interaction & entrance animation
- GSAP + ScrollTrigger — scroll-scrubbed / pinned sequences only (the Hero press animation, the Process section)
- Lenis — global smooth scroll, already wired in `app/providers.tsx`

## Design system

**Palette**
- `--ink: #16241C` — near-black green, primary text
- `--paper: #F6F3EA` — warm off-white background
- `--forest: #1F4D3A` — primary brand green (headers, CTAs)
- `--sage: #7FA98C` — secondary/muted green (dividers, backgrounds)
- `--steam: #E8EFE6` — pale mint, used for section backgrounds/cards
- `--brass: #C9A45C` — single warm accent, used sparingly (underlines, one CTA, the press-glow)

**Type**
- Display: `Fraunces` (variable, high optical size) — headlines only, set tight tracking
- Body: `Inter` — body copy, UI labels
- Both loaded via `next/font/google` in `app/layout.tsx`

**Signature element**: the "press reveal" — copy and images uncrease/unfold on scroll like a garment coming off the press, rather than a generic fade-up. Used once, prominently, in the hero. Don't repeat this exact effect elsewhere — use simpler whileInView fades for supporting sections so the hero moment stays memorable.

## Motion conventions
- Entrance reveals: `whileInView`, `viewport={{ once: true, amount: 0.3 }}`, duration 0.6–0.8s, easing `[0.16, 1, 0.3, 1]`
- Micro-interactions (buttons, cards): `whileHover`/`whileTap`, scale 1.02–1.05, duration 0.2s
- Stagger children (nav, grids): `staggerChildren: 0.08–0.12`
- Always respect `prefers-reduced-motion` — wrap GSAP ScrollTrigger setup in a check, and set Framer Motion's `MotionConfig reducedMotion="user"` at the root
- GSAP is reserved for scroll-pinned/scrubbed sequences (hero press, process timeline). Everything else is Framer Motion.

## Content rules
- Real business: National Dry Cleaners. Copy should sound like an actual, confident local business — not generic "we care about quality" filler. Be specific about services (garment care, alterations, wedding dresses, leather/suede, same-day service, pickup & delivery — confirm exact service list with the client before finalizing).
- Placeholder images live in `/public/images/` — swap for real photography before launch (memory: real photo embeds are a requirement for this project, not stock/AI imagery).

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build check before any deploy
