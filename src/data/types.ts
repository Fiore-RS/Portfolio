export type ProjectCategory = 'Graphic Design' | 'UX/UI Design'

export interface Project {
  id: string
  slug: string
  title: string
  /** e.g. "Brand Identity", "Mobile App", "Web Platform" */
  type: string
  category: ProjectCategory
  /** Tailwind class for the placeholder card background until a real cover image exists. */
  cardColor: string
  /** Optional real cover image — falls back to cardColor when absent. */
  image?: string
  timeline: string
  role: string
  tools: string
  overview: string[]
  gallery: { color: string; image?: string; alt: string }[]
  summary: string
}
