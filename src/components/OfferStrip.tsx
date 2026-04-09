import type { OfferItem } from "@/types/content"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type OfferStripProps = {
  title?: string
  data?: OfferItem[]
}

export default function OfferStrip({ title, data = [] }: OfferStripProps) {
  if (data.length === 0) return null

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <h3 className="font-heading text-3xl font-semibold text-accent">{title}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {data.map((offer, index) => {
            const featured = index === 0

            return (
              <Card
                key={offer.id}
                className={featured ? "border-primary/60 bg-primary/80 text-primary-foreground" : "border-primary/30 bg-white/80"}
              >
                <CardContent className="px-5 py-5">
                  <CardTitle className="text-center font-heading text-2xl font-bold md:text-3xl">
                    {offer.headline}
                  </CardTitle>
                  <Separator className={featured ? "my-3 bg-primary-foreground/40" : "my-3 bg-primary/20"} />
                  <CardDescription
                    className={featured ? "text-center text-sm leading-6 text-primary-foreground/90 md:text-base" : "text-center text-sm leading-6 text-foreground md:text-base"}
                  >
                    {offer.subtext}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}