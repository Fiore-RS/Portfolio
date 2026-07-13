export type ProjectCategory = 'Graphic Design' | 'UX/UI Design'

export interface Localized {
  en: string
  es: string
}

export interface Project {
  id: string
  slug: string
  title: Localized
  /** e.g. "Brand Identity", "Mobile App", "Web Platform" */
  type: Localized
  category: ProjectCategory
  /** Tailwind class for the placeholder card background until a real cover image exists. */
  cardColor: string
  /** Optional real cover image — falls back to cardColor when absent. */
  image?: string
  timeline: Localized
  role: Localized
  tools: Localized
  overview: { en: string[]; es: string[] }
  gallery: { color: string; image?: string; alt: Localized }[]
  summary: Localized
  /** Optional downloadable document (e.g. a brand manual PDF) shown as a button on the project page. */
  pdf?: { path: string; label: Localized }
  /** Optional external link (e.g. the live deployed site) shown as a button on the project page. */
  liveUrl?: { url: string; label: Localized }
}
