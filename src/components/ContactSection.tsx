import type { Brand } from "@/types/content"

type ContactSectionProps = {
  title?: string
  brand?: Brand
}

export default function ContactSection({ title, brand }: ContactSectionProps) {
  if (!brand) return null

  return (
    <section id="contact" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <h2 className="font-heading text-3xl font-semibold text-primary">{title}</h2>
        <div className="mt-5 space-y-2">
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
        </div>
      </div>
    </section>
  )
}