import { CheckCircle2 } from "lucide-react";

const popularRequests = [
  {
    title: "Everyday shirts & trousers",
    detail: "Pressing, wash-and-fold, and routine dry-cleaning for weekly wardrobes.",
  },
  {
    title: "Suits, sherwani & formals",
    detail: "Fabric-led cleaning, finishing, and hanger return for structured garments.",
  },
  {
    title: "Bridal & occasion wear",
    detail: "Inspection-led quotes for lehnga, gharara, gowns, embroidery, and preservation.",
  },
  {
    title: "Home textiles",
    detail: "Rugs, curtains, sofas, cushions, mattresses, and car-interior fabric care.",
  },
];

const assurances = [
  "Quote confirmed before specialist work begins",
  "Free pickup and delivery across Lahore",
  "Same-day service available on request",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-brass" />
            Popular requests
          </p>
          <h2 className="font-display text-4xl text-ink text-balance md:text-5xl">
            Clear next steps before you commit.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
            Send a photo or call the nearest branch for the current price list.
            Delicate, bridal, leather, and home items are quoted after inspection.
          </p>

          <div className="mt-8 space-y-3">
            {assurances.map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm font-medium text-ink/75">
                <CheckCircle2 aria-hidden size={18} className="shrink-0 text-forest" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {popularRequests.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-forest/10 bg-steam p-6"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.detail}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex min-h-10 items-center rounded-full bg-paper px-4 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-paper"
              >
                Ask for quote
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
