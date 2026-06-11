import Link from "next/link";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-night py-9 text-white md:py-12">
      <div className="site-shell grid gap-7 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
        <div>
          <Link
            href="/"
            className="w-fit font-heading text-2xl font-extrabold uppercase md:text-3xl"
          >
            <span>NORGES</span>
            <span className="text-purple-soft">GYM</span>
          </Link>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
            {siteConfig.footer.tagline}
          </p>
          <dl className="mt-5 grid max-w-3xl gap-3 text-sm text-white/65 sm:grid-cols-2 md:text-base">
            <div>
              <dt className="font-semibold text-white">Adresse</dt>
              <dd>{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Tilgang</dt>
              <dd>{siteConfig.accessStatement}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Resepsjonstid</dt>
              <dd>{siteConfig.receptionHours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Parkering</dt>
              <dd>{siteConfig.parking}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button
            href={siteConfig.urls.trial}
            variant="light"
            className="w-full sm:w-fit"
          >
            Prøv gratis
          </Button>
          <Button
            href={siteConfig.urls.membership}
            className="w-full sm:w-fit"
          >
            Bli medlem
          </Button>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/60 md:col-span-2">
          <p>
            © {new Date().getFullYear()} {siteConfig.gymName}. Kontakt:{" "}
            <a
              href={siteConfig.urls.contact}
              className="text-white transition hover:text-purple-soft"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
