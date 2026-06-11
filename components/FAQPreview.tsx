import { siteConfig } from "@/lib/site-config";

export function FAQPreview() {
  const { faq } = siteConfig;

  return (
    <section id="faq" className="bg-background py-10 md:py-14 lg:py-16">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
        <div className="max-w-xl">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
            {faq.title}
          </h2>
        </div>

        <div className="divide-y divide-border/80 border-y border-border">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-4 md:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-ink md:gap-8 md:text-xl">
                {item.question}
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-warm text-lg text-purple transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
