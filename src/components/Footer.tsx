import type { Brand } from "@/types/content"

type FooterProps = {
  brand?: Brand
}

export default function Footer({ brand }: FooterProps) {
  if (!brand) return null

  return (
    <footer>
      <div className="mx-auto w-full max-w-5xl px-6 py-6 text-center">
        <p className="font-heading text-xl text-primary">{brand.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{brand.tagline}</p>
        <p className="mt-3 text-foreground">Serving {brand.contact.serviceArea}</p>
      </div>
    </footer>
  )
}