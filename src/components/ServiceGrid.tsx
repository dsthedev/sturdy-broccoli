import type { ServiceItem } from "@/types/content"
import { Card, CardContent } from "@/components/ui/card"

type ServiceGridProps = {
  title?: string
  data?: ServiceItem[]
}

export default function ServiceGrid({ title, data = [] }: ServiceGridProps) {
  const formatServiceTitle = (title: string) => title.replace(/\s+Cleaning$/i, "")

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10">
        <Card className="mx-auto max-w-3xl bg-white/20">
          <CardContent className="py-6 text-center">
            <h2 className="mb-6 font-heading text-3xl font-semibold text-accent">
              {title}
            </h2>
            <ul className="mx-auto grid max-w-2xl grid-cols-1 justify-items-center gap-3 sm:grid-cols-2">
              {data.map((service) => (
                <li
                  key={service.id}
                  className="w-full rounded-xl border border-primary/25 bg-white/80 px-4 py-4 text-center font-heading text-xl font-bold text-primary shadow-sm sm:text-2xl"
                >
                  {formatServiceTitle(service.title)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}