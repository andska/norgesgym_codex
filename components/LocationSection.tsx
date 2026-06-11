import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function LocationSection() {
  const { locationSection, urls } = siteConfig;

  return (
    <section
      id="beliggenhet"
      className="scroll-mt-24 bg-background py-10 md:py-14 lg:py-16"
    >
      <div className="site-shell grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12">
        <div className="max-w-xl">
          <p className="eyebrow">{locationSection.eyebrow}</p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
            {locationSection.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            {locationSection.body}
          </p>
          <Button
            href={urls.googleMaps}
            variant="secondary"
            className="mt-7 w-full sm:w-fit"
          >
            {locationSection.cta}
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-warm">
          <iframe
            src={urls.googleMapsEmbed}
            title="Kart til Norgesgym"
            className="h-72 w-full border-0 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
