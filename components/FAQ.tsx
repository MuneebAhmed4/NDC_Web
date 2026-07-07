const faqs = [
  {
    q: "How fast can I get my clothes back?",
    a: "Most routine orders are returned within 24 hours. Same-day service is available when the branch can confirm capacity and timing.",
  },
  {
    q: "Do you offer pickup and delivery?",
    a: "Yes. Pickup and delivery is available across Lahore, and the team can guide you to the nearest branch for urgent drop-offs.",
  },
  {
    q: "Can you handle bridal, leather, or delicate items?",
    a: "Yes. Specialist items are inspected first so the cleaning method, finish, timing, and quote are clear before work begins.",
  },
  {
    q: "Can every stain be removed?",
    a: "Stain results depend on fabric, colour, age, and previous treatment. The team inspects garments and explains realistic outcomes first.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-steam px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-brass" />
            Good to know
          </p>
          <h2 className="font-display text-4xl text-ink text-balance md:text-5xl">
            Fewer doubts before pickup.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-xl border border-forest/10 bg-paper p-6">
              <h3 className="font-display text-xl text-ink">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
