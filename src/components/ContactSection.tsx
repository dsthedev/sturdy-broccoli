import type { Brand } from "@/types/content"

type ContactSectionProps = {
  title?: string
  brand?: Brand
}

export default function ContactSection({ title, brand }: ContactSectionProps) {
  if (!brand) return null

  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-center">
        <h3 className="font-heading text-3xl font-semibold text-accent">{title}</h3>
        <ul className="mx-auto mt-5 max-w-xl list-none space-y-2 text-foreground">
          <li className="text-lg font-medium">
            {brand.contact.name} · {brand.contact.role}
          </li>
          <li>
            <a
              href={`mailto:${brand.contact.email}`}
              className="underline-offset-2 hover:underline"
            >
              Email: {brand.contact.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
              className="underline-offset-2 hover:underline"
            >
              Phone: {brand.contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}