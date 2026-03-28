import type { Brand } from "@/types/content"
import { Code2, Heart, Plus } from "lucide-react"

type FooterProps = {
  brand?: Brand
  codeUrl?: string
  codeLabel?: string
}

export default function Footer({ brand, codeUrl, codeLabel }: FooterProps) {
  if (!brand) return null

  return (
    <footer>
      <div className="mx-auto w-full max-w-5xl px-6 py-6 text-center">
        <p className="font-heading text-xl text-primary">{brand.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{brand.tagline}</p>
        <p className="mt-3 text-foreground">Serving {brand.contact.serviceArea}</p>

        <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground print:hidden">
          <Heart size={16} strokeWidth={2} className="text-red-500" aria-hidden />
          <Plus size={12} strokeWidth={2} className="text-slate-500" aria-hidden />
          <a
            href={codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline-offset-2 hover:underline"
          >
            <Code2 size={18} strokeWidth={2} className="" aria-hidden />
            {codeLabel ? <span>{codeLabel}</span> : null}
          </a>
        </div>
      </div>
    </footer>
  )
}