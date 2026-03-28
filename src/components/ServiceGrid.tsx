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
        <h2 className="mb-6 text-center font-heading text-3xl font-semibold text-primary">
          {title}
        </h2>
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {data.map((service) => (
            <li key={service.id}>
              <Card>
                <CardContent className="px-4 py-3">{service.title}</CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}