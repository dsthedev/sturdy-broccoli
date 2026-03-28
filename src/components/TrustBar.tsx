import { Badge } from "@/components/ui/badge"

type TrustBarProps = {
  data?: string[]
}

export default function TrustBar({ data = [] }: TrustBarProps) {
  if (data.length === 0) return null

  return (
    <section>
      <div className="mx-auto grid w-full max-w-5xl gap-3 px-6 py-6 text-center md:grid-cols-3">
        {data.map((item) => (
          <div key={item} className="flex justify-center">
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
              {item}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  )
}