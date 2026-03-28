import type { OfferItem } from "@/types/content"

type OfferStripProps = {
  data?: OfferItem[]
}

export default function OfferStrip({ data = [] }: OfferStripProps) {
  if (data.length === 0) return null

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <h3 className="font-heading text-3xl font-semibold text-accent">Offers</h3>
        <ul className="mx-auto mt-5 max-w-xl list-inside list-disc space-y-2 text-left text-foreground">
          {data.map((offer) => (
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