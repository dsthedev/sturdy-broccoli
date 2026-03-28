import type { ServiceItem } from "@/types/content"
import { Card, CardContent } from "@/components/ui/card"

type ServiceGridProps = {
  title?: string
  data?: ServiceItem[]
}

export default function ServiceGrid({ title, data = [] }: ServiceGridProps) {
  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10">
        <Card className="mx-auto max-w-2xl bg-white/20">
          <CardContent className="py-6 text-center">
            <h2 className="mb-6 font-heading text-3xl font-semibold text-accent">
              {title}
            </h2>
            <ul className="mx-auto max-w-xl list-inside list-disc space-y-2 text-center text-lg text-foreground">
              {data.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}