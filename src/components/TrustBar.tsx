import type { Brand } from "@/types/content"
import { Card, CardContent } from "@/components/ui/card"

type TrustBarProps = {
  title?: string
  brand?: Brand
  data?: string[]
}

export default function TrustBar({ title, brand, data = [] }: TrustBarProps) {
  if (data.length === 0) return null

  const isParagraph = data.length === 1

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-8">
        <Card className="mx-auto max-w-3xl bg-white/20">
          <CardContent className="py-6 text-center">
            <h3 className="mb-4 font-heading text-3xl font-semibold text-accent">
              {title ?? `Why ${brand?.name ?? "Us"}`}
            </h3>
            {isParagraph ? (
              <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-foreground md:text-lg">
                {data[0]}
              </p>
            ) : (
              <ul className="mx-auto max-w-xl list-inside list-disc space-y-2 text-center text-foreground">
                {data.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}