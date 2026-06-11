import { siteConfig } from "@/lib/site-config";

export function PhotoPlaceholderSection() {
  const { photos } = siteConfig;

  return (
    <section className="bg-warm py-10 md:py-14 lg:py-16">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12">
          <div className="max-w-xl">
            <p className="eyebrow">{photos.eyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
              {photos.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
              {photos.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {photos.placeholders.map((item, index) => (
              <figure
                key={item.title}
                className={`flex aspect-[16/9] flex-col justify-between rounded-lg border border-dashed border-border p-5 md:p-6 ${
                  index === 0 ? "bg-surface" : "bg-purple-soft/35"
                }`}
              >
                <span className="w-fit text-xs font-semibold uppercase text-purple-dark">
                  {item.label}
                </span>
                <figcaption>
                  <p className="font-heading text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
