import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function MembroSection() {
  const { membro, urls } = siteConfig;

  return (
    <section id="membro" className="bg-warm py-10 md:py-14 lg:py-16">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <p className="eyebrow">{membro.eyebrow}</p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
            {membro.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            {membro.body}
          </p>
          <Button href={urls.membro} className="mt-7 w-full sm:w-fit">
            {membro.cta}
          </Button>
        </div>

        <aside className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-surface p-5 md:p-6">
            <p className="text-sm font-semibold uppercase text-purple">
              Tilgang
            </p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-ink md:text-3xl">
              {membro.accessTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted">
              {membro.accessDetail}
            </p>
            <div className="mt-5 space-y-2 text-sm font-semibold leading-6 text-ink md:text-base">
              <p>{membro.points[2]}</p>
              <p>{membro.points[3]}</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 md:p-6">
            <p className="text-sm font-semibold uppercase text-purple">
              Resepsjon
            </p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-ink md:text-3xl">
              {membro.receptionLabel}: {membro.receptionDetail}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted">
              Resepsjonen er bemannet i denne perioden. {siteConfig.accessMethod}{" "}
              gjelder utenom resepsjonstiden.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
