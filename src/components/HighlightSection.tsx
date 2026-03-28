import type { EmergencyData } from "@/types/content"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type HighlightSectionProps = {
  data?: EmergencyData
}

export default function HighlightSection({ data }: HighlightSectionProps) {
  if (!data) return null

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <Card className="mx-auto max-w-2xl text-left">
          <CardHeader className="items-center px-6 pt-6 text-center">
            <Badge variant="outline" className="mb-2">
              Emergency Support
            </Badge>
            <CardTitle className="font-heading text-3xl text-primary">
              {data.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <ul className="mx-auto mt-2 max-w-xl space-y-2 text-foreground">
              {data.items.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
            <CardDescription className="mt-5 text-center text-sm italic">
              {data.note}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}