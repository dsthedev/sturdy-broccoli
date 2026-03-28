import type { OfferItem } from "@/types/content"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type OfferStripProps = {
  title?: string
  data?: OfferItem[]
}

export default function OfferStrip({ title, data = [] }: OfferStripProps) {
  if (data.length === 0) return null

  const [primaryOffer, ...otherOffers] = data

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <h3 className="font-heading text-3xl font-semibold text-accent">{title}</h3>
        <div className="mx-auto mt-5 max-w-xl">
          <Card className="border-primary/60 bg-primary/80 text-primary-foreground">
            <CardContent className="px-5 py-5">
              <CardTitle className="text-center font-heading text-3xl">
                {primaryOffer.headline}
              </CardTitle>
              <Separator className="my-3 bg-primary-foreground/40" />
              <CardDescription className="text-center text-primary-foreground/90">
                {primaryOffer.subtext}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <ul className="mx-auto mt-5 max-w-xl list-inside list-disc space-y-2 text-left text-foreground">
          {otherOffers.map((offer) => (
            <li key={offer.id}>
              <span className="font-semibold">{offer.headline}</span>
              <span className="text-muted-foreground"> · {offer.subtext}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}