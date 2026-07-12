import type { Project } from './types'

// Swap `cardColor` for a real screenshot/mockup by adding an `image` path
// (drop the file in /public/projects/ and point to it, e.g. '/projects/reading-journal-cover.png').
// The card and detail hero both fall back to the solid color until you do.
export const projects: Project[] = [
  {
    id: '1',
    slug: 'reading-journal',
    title: 'Reading Journal',
    type: 'Web App',
    category: 'UX/UI Design',
    cardColor: 'bg-terracotta',
    timeline: '2 weeks',
    role: 'Solo Designer & Developer',
    tools: 'React, Tailwind, Express, Drizzle, Neon',
    overview: [
      'A personal reading tracker that went from a Claude-generated prototype to a full-stack app: status tracking, series, star-rating reviews, and a stats page with year-by-year breakdowns.',
      'Built with authentication (JWT, bcrypt, user-scoped data) so the app could support multiple accounts, then deployed the frontend to GitHub Pages and the backend to Render with a Neon Postgres database.',
    ],
    gallery: [
      { color: 'bg-terracotta', alt: 'Reading Journal library grid view' },
      { color: 'bg-clay', alt: 'Reading Journal stats page' },
      { color: 'bg-espresso', alt: 'Reading Journal currently-reading carousel' },
      { color: 'bg-rust', alt: 'Reading Journal book detail page' },
    ],
    summary:
      'This was my first end-to-end deploy of a full-stack app I designed myself — the sage-green system and the auth flow taught me as much about DevOps as about UI.',
  },
  {
    id: '2',
    slug: 'project-title-2',
    title: 'Project Title',
    type: 'Brand Identity',
    category: 'Graphic Design',
    cardColor: 'bg-clay',
    timeline: 'XX weeks',
    role: 'Lead Designer',
    tools: 'Figma, Illustrator, Adobe Cloud',
    overview: [
      'Replace this with a short description of the project: who it was for, the problem it solved, and your role.',
      'Add a second paragraph on the process or a key decision you made along the way.',
    ],
    gallery: [
      { color: 'bg-clay', alt: 'Placeholder gallery image 1' },
      { color: 'bg-rust', alt: 'Placeholder gallery image 2' },
      { color: 'bg-terracotta', alt: 'Placeholder gallery image 3' },
      { color: 'bg-espresso', alt: 'Placeholder gallery image 4' },
    ],
    summary: 'Replace with a closing reflection on what this project taught you.',
  },
  {
    id: '3',
    slug: 'project-title-3',
    title: 'Project Title',
    type: 'Visual System',
    category: 'Graphic Design',
    cardColor: 'bg-espresso',
    timeline: 'XX weeks',
    role: 'Visual Designer',
    tools: 'Figma, Photoshop',
    overview: [
      'Replace this with a short description of the project: who it was for, the problem it solved, and your role.',
      'Add a second paragraph on the process or a key decision you made along the way.',
    ],
    gallery: [
      { color: 'bg-terracotta', alt: 'Placeholder gallery image 1' },
      { color: 'bg-clay', alt: 'Placeholder gallery image 2' },
      { color: 'bg-espresso', alt: 'Placeholder gallery image 3' },
      { color: 'bg-rust', alt: 'Placeholder gallery image 4' },
    ],
    summary: 'Replace with a closing reflection on what this project taught you.',
  },
  {
    id: '4',
    slug: 'project-title-4',
    title: 'Project Title',
    type: 'Web Platform',
    category: 'UX/UI Design',
    cardColor: 'bg-rust',
    timeline: 'XX weeks',
    role: 'Product Designer',
    tools: 'Figma, React',
    overview: [
      'Replace this with a short description of the project: who it was for, the problem it solved, and your role.',
      'Add a second paragraph on the process or a key decision you made along the way.',
    ],
    gallery: [
      { color: 'bg-rust', alt: 'Placeholder gallery image 1' },
      { color: 'bg-terracotta', alt: 'Placeholder gallery image 2' },
      { color: 'bg-clay', alt: 'Placeholder gallery image 3' },
      { color: 'bg-espresso', alt: 'Placeholder gallery image 4' },
    ],
    summary: 'Replace with a closing reflection on what this project taught you.',
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
