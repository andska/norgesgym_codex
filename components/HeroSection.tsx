import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-5 pb-10 pt-8 md:gap-10 md:px-8 md:pb-12 md:pt-12 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.02fr)] lg:items-start lg:gap-12 lg:px-16 lg:pb-14 lg:pt-16">
      <div className="min-w-0 max-w-[22rem] sm:max-w-none lg:pt-7">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1
          className="mt-4 max-w-[760px] font-heading text-[clamp(1.85rem,7.8vw,3.8rem)] font-extrabold leading-[1.04] text-ink md:mt-6 lg:text-[clamp(3.1rem,5vw,4.25rem)] lg:leading-[1.02]"
          aria-label={hero.headline}
        >
          {hero.headlineLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8 md:text-xl md:leading-9">
          {hero.body}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8 md:gap-4">
          <Button href={siteConfig.membershipUrl} className="w-full sm:w-fit">
            {hero.primaryCta}
          </Button>
          <Button
            href={siteConfig.trialUrl}
            variant="secondary"
            className="w-full sm:w-fit"
          >
            {hero.secondaryCta}
          </Button>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-sm font-semibold text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 md:mt-7">
          {hero.trustPoints.map((point, index) => (
            <li key={point} className="flex items-center gap-3">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-border sm:block"
                />
              ) : null}
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative max-w-[22rem] justify-self-start sm:max-w-full lg:w-full lg:justify-self-end">
        <div className="flex aspect-[4/3] flex-col justify-between rounded-lg border border-dashed border-border bg-warm p-5 md:aspect-[16/10] md:p-7">
          <span className="w-fit rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold uppercase text-purple-dark">
            {hero.placeholder.label}
          </span>
          <div className="max-w-xs">
            <p className="text-sm font-semibold leading-6 text-muted md:text-base md:leading-7">
              {hero.placeholder.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
