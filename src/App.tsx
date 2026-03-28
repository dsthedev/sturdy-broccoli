import contentData from "../public/alphacontent.json"
import { Fragment } from "react"
import type {
  ContentRoot,
  CTA,
  EmergencyData,
  OfferItem,
  ServiceItem,
} from "@/types/content"

// --- Component Registry ---
import Hero from "./components/Hero"
import TrustBar from "./components/TrustBar"
import ServiceGrid from "./components/ServiceGrid"
import HighlightSection from "./components/HighlightSection"
import OfferStrip from "./components/OfferStrip"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { Separator } from "./components/ui/separator"

const content = contentData as ContentRoot

type RenderSectionProps = {
  section: ContentRoot["layout"][number]
  contentRoot: ContentRoot
}

function RenderSection({ section, contentRoot }: RenderSectionProps) {
  const data = section.dataKey ? contentRoot.content[section.dataKey] : undefined
  const props = section.props ?? {}

  switch (section.component) {
    case "Hero":
      return (
        <section id={section.id} className="w-full">
          <Hero
            headline={props.headline as string | undefined}
            subheadline={props.subheadline as string | undefined}
            primaryCTA={props.primaryCTA as CTA | undefined}
            secondaryCTA={props.secondaryCTA as CTA | undefined}
          />
        </section>
      )
    case "TrustBar":
      return (
        <section id={section.id} className="w-full">
          <TrustBar data={data as string[] | undefined} />
        </section>
      )
    case "ServiceGrid":
      return (
        <section id={section.id} className="w-full">
          <ServiceGrid
            title={props.title as string | undefined}
            data={data as ServiceItem[] | undefined}
          />
        </section>
      )
    case "HighlightSection":
      return (
        <section id={section.id} className="w-full">
          <HighlightSection data={data as EmergencyData | undefined} />
        </section>
      )
    case "OfferStrip":
      return (
        <section id={section.id} className="w-full">
          <OfferStrip data={data as OfferItem[] | undefined} />
        </section>
      )
    case "ContactSection":
      return (
        <section id={section.id} className="w-full">
          <ContactSection
            title={props.title as string | undefined}
            brand={contentRoot.brand}
          />
        </section>
      )
    case "Footer":
      return (
        <section id={section.id} className="w-full">
          <Footer brand={contentRoot.brand} />
        </section>
      )
    default:
      return null
  }
}

// --- App ---
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {content.layout.map((section, index) => (
        <Fragment key={section.id}>
          <RenderSection section={section} contentRoot={content} />
          {index < content.layout.length - 1 ? (
            <div className="mx-auto w-full max-w-4xl px-6">
              <Separator />
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>
  )
}