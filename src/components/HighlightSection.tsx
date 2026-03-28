import type { EmergencyData } from "@/types/content"
import { Card, CardContent } from "@/components/ui/card"

type HighlightSectionProps = {
  data?: EmergencyData
}

export default function HighlightSection({ data }: HighlightSectionProps) {
  if (!data) return null

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <Card className="mx-auto max-w-2xl bg-white/20">
          <CardContent className="py-6 text-center">
            <h2 className="font-heading text-3xl font-semibold text-accent">
              {data.title}
            </h2>
            <ul className="mx-auto mt-5 max-w-xl list-inside list-disc space-y-2 text-left text-foreground">
              {data.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-muted-foreground">{data.note}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}