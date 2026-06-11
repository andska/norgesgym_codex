"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

type PricingOption = (typeof siteConfig.pricing.options)[number];
type PricingOptionId = PricingOption["id"];

export function PricingSection() {
  const { pricing } = siteConfig;
  const [selectedId, setSelectedId] =
    useState<PricingOptionId>("membership");

  const selected =
    pricing.options.find((option) => option.id === selectedId) ??
    pricing.options[0];

  return (
    <section
      id="priser"
      className="scroll-mt-24 bg-background py-10 md:py-14 lg:py-16"
    >
      <div className="site-shell">
        <div className="grid gap-8 border-y border-border py-8 md:py-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
          <div className="max-w-xl">
            <p className="eyebrow">{pricing.eyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] text-ink md:text-5xl md:leading-[1.05]">
              {pricing.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
              {pricing.body}
            </p>
          </div>

          <div className="rounded-lg bg-warm p-5 md:p-7">
            <div className="flex flex-col gap-5 border-b border-border pb-6">
              <div
                className="grid gap-2 rounded-lg border border-border bg-surface p-1 sm:grid-cols-3"
                role="tablist"
                aria-label="Velg prisalternativ"
              >
                {pricing.options.map((option) => {
                  const isSelected = option.id === selected.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedId(option.id)}
                      className={[
                        "min-h-11 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple",
                        isSelected
                          ? "bg-purple text-white shadow-soft"
                          : "text-ink hover:bg-purple-soft hover:text-purple-dark",
                      ].join(" ")}
                    >
                      {option.tabLabel}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-purple">
                    {selected.label}
                  </p>
                  <p className="mt-2 font-heading text-4xl font-extrabold leading-none text-ink md:text-5xl">
                    {selected.price}
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                    {selected.body}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                  {selected.actions.map((action, index) => (
                    <Button
                      key={action.label}
                      href={action.href}
                      variant={index === 0 ? "primary" : "secondary"}
                      className="w-full sm:w-fit"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <dl className="mt-6 grid gap-4 md:grid-cols-2">
              {selected.details.map((detail) => (
                <div
                  key={detail.label}
                  className="border-t border-border/80 pt-4 first:border-t-0 first:pt-0 md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(-n+2)]:pt-0"
                >
                  <dt className="text-sm font-semibold text-ink">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted md:text-base md:leading-7">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
