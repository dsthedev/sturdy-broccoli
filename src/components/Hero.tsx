import { buttonVariants } from "@/components/ui/button"
import type { CTA } from "@/types/content"

type HeroProps = {
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
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-6 py-14 text-center">
        <h1 className="font-heading text-4xl leading-tight font-bold text-primary md:text-5xl">
          {headline}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          {subheadline}
        </p>
        <p className="font-heading text-xl italic text-accent md:text-2xl">
          Clean by Nature, Powered by Pros
        </p>
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