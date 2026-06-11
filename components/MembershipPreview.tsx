import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function MembershipPreview() {
  const { membership, urls } = siteConfig;

  return (
    <section
      id="medlemskap"
      className="bg-background pb-10 pt-6 md:pb-14 md:pt-8 lg:pb-16 lg:pt-10"
    >
      <div className="site-shell">
        <div className="grid gap-8 rounded-lg bg-warm p-5 md:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:p-10">
          <div className="max-w-xl">
            <p className="eyebrow">{membership.eyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
              {membership.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
              {membership.body}
            </p>
            <Button href={urls.membership} className="mt-6 w-full sm:w-fit">
              {membership.priceCta}
            </Button>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-surface">
            <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {membership.options.map((option) => (
                <article key={option.title} id={option.id} className="p-5 md:p-6">
                  <h3 className="font-heading text-xl font-extrabold text-ink md:text-2xl">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted md:text-base md:leading-7">
                    {option.description}
                  </p>
                  <a
                    href={option.href}
                    className="mt-5 inline-flex w-fit text-sm font-semibold text-purple transition hover:text-purple-dark md:text-base"
                  >
                    {option.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
