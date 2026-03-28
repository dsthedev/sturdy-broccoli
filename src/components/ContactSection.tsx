import type { Brand } from "@/types/content"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ContactSectionProps = {
  title?: string
  brand?: Brand
}

export default function ContactSection({ title, brand }: ContactSectionProps) {
  if (!brand) return null

  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="items-center px-6 pt-6">
            <CardTitle className="font-heading text-3xl text-primary">{title}</CardTitle>
            <Badge variant="outline" className="mt-2">
              Contact
            </Badge>
          </CardHeader>
          <CardContent className="space-y-2 px-6 pb-6">
            <p className="text-lg font-medium text-foreground">
              {brand.contact.name} · {brand.contact.role}
            </p>
            <p>
              <a
                href={`mailto:${brand.contact.email}`}
                className="text-foreground underline-offset-2 hover:underline"
              >
                {brand.contact.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
                className="text-foreground underline-offset-2 hover:underline"
              >
                {brand.contact.phone}
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}