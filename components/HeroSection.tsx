import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-5 pb-16 pt-10 md:gap-12 md:px-8 md:pb-20 md:pt-16 lg:min-h-[640px] lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center lg:gap-16 lg:px-16 lg:py-20 xl:min-h-[680px]">
      <div className="min-w-0 max-w-[35rem] lg:max-w-full">
        <p className="text-sm font-semibold text-purple">{hero.eyebrow}</p>
        <h1
          className="mt-5 max-w-[12ch] font-heading text-[clamp(2.05rem,9vw,3.35rem)] font-extrabold leading-[1.03] text-ink sm:text-[clamp(3.1rem,8vw,4.65rem)] lg:text-[clamp(3.7rem,5.35vw,4.9rem)] lg:leading-[1.01]"
          aria-label={hero.headline}
        >
          {hero.headlineLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[33rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 md:text-xl md:leading-9">
          {hero.body}
        </p>

        <div className="mt-8 flex w-full max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row md:gap-4">
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
      </div>

      <div className="w-full max-w-[22rem] justify-self-start sm:max-w-full lg:justify-self-end">
        <div className="relative flex aspect-[4/3] overflow-hidden rounded-lg border border-dashed border-border bg-[linear-gradient(135deg,#FBFAF7_0%,#F4F1EA_100%)] p-5 md:aspect-[16/10] md:p-7 lg:min-h-[420px] xl:min-h-[455px]">
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-purple/25 via-border to-transparent" />
          <div className="flex w-full flex-col justify-between">
            <span className="w-fit rounded-full bg-surface/85 px-3 py-1 text-[0.7rem] font-semibold text-purple-dark">
              {hero.placeholder.label}
            </span>
            <p className="max-w-[18rem] font-heading text-xl font-extrabold leading-tight text-ink md:text-2xl">
              {hero.placeholder.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
