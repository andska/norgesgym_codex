import Link from "next/link";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="site-shell flex min-h-16 items-center justify-between gap-4 md:min-h-[72px] md:gap-6">
        <Link href="/" className="group flex flex-col" aria-label="Norgesgym">
          <span className="font-heading text-xl font-extrabold uppercase text-ink md:text-2xl">
            <span>NORGES</span>
            <span className="text-purple">GYM</span>
          </span>
          <span className="text-xs font-medium text-muted md:text-sm">
            {siteConfig.seoLocation}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-base font-medium text-muted lg:flex"
          aria-label="Hovedmeny"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex md:gap-3">
          <Button
            href={siteConfig.trialUrl}
            variant="secondary"
            className="hidden md:inline-flex"
          >
            Prøv gratis
          </Button>
          <Button href={siteConfig.membershipUrl} className="px-4 md:px-6">
            Bli medlem
          </Button>
        </div>
      </div>
    </header>
  );
}
