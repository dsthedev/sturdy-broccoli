import type { ServiceItem } from "@/types/content"

type ServiceGridProps = {
  title?: string
  data?: ServiceItem[]
}

export default function ServiceGrid({ title, data = [] }: ServiceGridProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-10">
        <h2 className="mb-6 text-center font-heading text-3xl font-semibold text-primary">
          {title}
        </h2>
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {data.map((service) => (
            <li
              key={service.id}
              className="rounded-lg border border-border bg-card px-4 py-3 text-card-foreground"
            >
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}