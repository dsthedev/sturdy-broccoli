import { buttonVariants } from "@/components/ui/button"
import logo from "@/assets/naturprologo.png"
import type { Brand, CTA } from "@/types/content"

type HeroProps = {
  brand?: Brand
  headline?: string
  subheadline?: string
  primaryCTA?: CTA
  secondaryCTA?: CTA
}

function resolveHref(action?: string) {
  if (!action) return "#contact"
  if (action === "scroll_contact") return "#contact"
  return action
}

export default function Hero({
  brand,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <header>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-6 py-14 text-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={logo}
            alt={`${brand?.name ?? "Brand"} logo`}
            className="h-16 w-16 object-contain md:h-32 md:w-32 lg:h-48 lg:w-48"
          />
          <div className="flex flex-col items-start text-left">
            <p className="font-heading text-4xl font-semibold text-primary sm:text-5xl md:text-6xl">
              {brand?.name}
            </p>
            <p className="mt-1 font-heading text-xs italic text-accent sm:text-sm md:text-base">
              {brand?.tagline}
            </p>
          </div>
        </div>

        {headline ? (
          <h1 className="font-heading text-4xl leading-tight font-bold text-primary md:text-5xl">
            {headline}
          </h1>
        ) : null}
        {subheadline ? (
          <p className="max-w-2xl text-base text-accent md:text-lg">{subheadline}</p>
        ) : null}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {primaryCTA ? (
            <a
              className={buttonVariants({ variant: "default" })}
              href={resolveHref(primaryCTA.action)}
            >
              {primaryCTA.label}
            </a>
          ) : null}
          {secondaryCTA ? (
            <a
              className={buttonVariants({ variant: "outline" })}
              href={resolveHref(secondaryCTA.action)}
            >
              {secondaryCTA.label}
            </a>
          ) : null}
        </div>
      </div>
    </header>
  )
}