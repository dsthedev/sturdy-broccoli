import type { EmergencyData } from "@/types/content"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Clock3, KeyRound, Sparkles, Truck } from "lucide-react"

type HighlightSectionProps = {
  data?: EmergencyData
}

const emergencyIcons = {
  Building2,
  Clock3,
  KeyRound,
  Truck,
} as const

export default function HighlightSection({ data }: HighlightSectionProps) {
  if (!data) return null

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <Card className="mx-auto max-w-3xl bg-white/20">
          <CardContent className="py-6 text-center">
            <h2 className="font-heading text-3xl font-semibold text-accent">
              {data.title}
            </h2>
            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {data.items.map((item) => {
                const Icon = emergencyIcons[item.icon as keyof typeof emergencyIcons] ?? Sparkles

                return (
                  <Card key={item.label} className="border-primary/25 bg-white/80 shadow-sm">
                    <CardContent className="flex min-h-36 flex-col items-center justify-center gap-3 px-4 py-5 text-center">
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" aria-hidden />
                      </span>
                      <p className="text-lg font-semibold text-primary sm:text-xl">
                        {item.label}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <p className="mt-5 text-sm italic text-muted-foreground">{data.note}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}