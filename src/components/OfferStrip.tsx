import type { OfferItem } from "@/types/content"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

type OfferStripProps = {
  data?: OfferItem[]
}

export default function OfferStrip({ data = [] }: OfferStripProps) {
  if (data.length === 0) return null

  return (
    <section>
      <div className="mx-auto grid w-full max-w-4xl gap-4 px-6 py-10 md:grid-cols-2">
        {data.map((offer) => (
          <Card key={offer.id} className="text-center">
            <CardContent className="px-5 py-5">
              <CardTitle className="font-heading text-2xl text-primary">
                {offer.headline}
              </CardTitle>
              <CardDescription className="mt-1">{offer.subtext}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}