import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function LocationSection() {
  const { locationSection, urls } = siteConfig;

  return (
    <section id="beliggenhet" className="bg-background py-10 md:py-14 lg:py-16">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <p className="eyebrow">{locationSection.eyebrow}</p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
            {locationSection.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            {locationSection.body}
          </p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            {locationSection.details.map((detail) => (
              <div key={detail.label} className="border-t border-border pt-3">
                <dt className="text-sm font-semibold text-ink">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-muted">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <Button
            href={urls.googleMaps}
            variant="secondary"
            className="mt-6 w-full sm:w-fit"
          >
            {locationSection.cta}
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-warm">
          {urls.googleMapsEmbed ? (
            <iframe
              src={urls.googleMapsEmbed}
              title="Kart til Norgesgym"
              className="h-60 w-full border-0 md:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-60 flex-col justify-between p-5 md:h-72 md:p-6">
              <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase text-purple-dark">
                Kart kommer
              </span>
              <div>
                <p className="font-heading text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                  Google Maps legges inn her
                </p>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted md:text-base md:leading-7">
                  Bruk knappen for å åpne plasseringen i Google Maps.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
