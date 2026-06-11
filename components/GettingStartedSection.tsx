import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function GettingStartedSection() {
  const { gettingStarted } = siteConfig;

  return (
    <section
      id="kom-i-gang"
      className="scroll-mt-24 bg-warm py-10 md:py-14 lg:py-16"
    >
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-14">
          <div className="max-w-xl">
            <p className="eyebrow">{gettingStarted.eyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
              {gettingStarted.title}
            </h2>
          </div>

          <ol className="grid gap-0 overflow-hidden rounded-lg border border-border bg-surface">
            {gettingStarted.steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-4 border-t border-border p-5 first:border-t-0 md:grid-cols-[5rem_1fr] md:p-6"
              >
                <span className="font-heading text-2xl font-extrabold text-purple md:text-3xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-extrabold leading-tight text-ink md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-muted">
                    {step.body}
                  </p>
                  {"actions" in step ? (
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      {step.actions.map((action) => (
                        <Button
                          key={action.label}
                          href={action.href}
                          variant="secondary"
                          className="w-full sm:w-fit"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
