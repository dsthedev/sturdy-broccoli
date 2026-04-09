export type Brand = {
  name: string
  tagline: string
  contact: {
    name: string
    role: string
    phone: string
    email: string
    facebook: string
    serviceArea: string
  }
}

export type CTA = {
  label: string
  action: string
}

export type ServiceItem = {
  id: string
  title: string
}

export type EmergencyItem = {
  label: string
  icon: string
}

export type EmergencyData = {
  title: string
  items: EmergencyItem[]
  note: string
}

export type OfferItem = {
  id: string
  headline: string
  subtext: string
}

export type ContentData = {
  services: ServiceItem[]
  emergency: EmergencyData
  offers: OfferItem[]
  trust: string[]
}

export type LayoutSection = {
  id: string
  component:
    | "Hero"
    | "TrustBar"
    | "ServiceGrid"
    | "HighlightSection"
    | "OfferStrip"
    | "ContactSection"
    | "Footer"
  dataKey?: keyof ContentData
  props?: Record<string, unknown>
}

export type ContentRoot = {
  brand: Brand
  content: ContentData
  layout: LayoutSection[]
}