import { siteConfig } from "@/lib/site-config";

export function TrustPoints() {
  return (
    <section className="site-shell pb-4 md:pb-6">
      <div className="rounded-lg bg-warm px-4 py-4 md:px-6 md:py-5">
        <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.practicalValuePoints.map((point) => (
            <div key={point.label} className="min-w-0">
              <p className="font-heading text-lg font-extrabold leading-tight text-ink md:text-xl">
                {point.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted md:text-base">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
