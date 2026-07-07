# National Dry Cleaners Website

A Next.js App Router landing page for National Dry Cleaners in Lahore.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Checks

```bash
npm run lint
npm run build
```

The production build uses `next/font/google`, so CI or local builds need network access unless the fonts are moved to `next/font/local`.

## Content Notes

- Confirm branch details, hours, certifications, and contact information before launch.
- Replace trust/proof copy with verified customer reviews when available.
- Keep phone, WhatsApp, email, and address values centralized in `lib/contact.ts`.
- The Google map is click-to-load to keep the first page load lighter.

## Main Files

- `app/page.tsx` wires the page sections together.
- `app/layout.tsx` owns site metadata and fonts.
- `components/Nav.tsx` contains desktop and mobile navigation.
- `components/MobileActionBar.tsx` contains sticky mobile call/WhatsApp/directions actions.
- `components/Pricing.tsx` and `components/FAQ.tsx` support user decision-making before pickup.

## Deployment

Deploy with any Next.js-compatible host. The current route is fully static after build.
