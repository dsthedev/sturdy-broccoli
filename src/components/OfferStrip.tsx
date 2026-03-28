import type { OfferItem } from "@/types/content"

type OfferStripProps = {
  data?: OfferItem[]
}

export default function OfferStrip({ data = [] }: OfferStripProps) {
  if (data.length === 0) return null

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-4xl gap-4 px-6 py-10 md:grid-cols-2">
        {data.map((offer) => (
          <article
            key={offer.id}
            className="rounded-lg border border-border bg-secondary px-5 py-5 text-center"
          >
            <h3 className="font-heading text-2xl font-semibold text-primary">
              {offer.headline}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{offer.subtext}</p>
          </article>
        ))}
      </div>
    </section>
  )
}