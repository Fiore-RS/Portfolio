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
    slug: 'pycon-latam-2025',
    title: 'PyCon LATAM 2025',
    type: 'Brand Manual & Identity',
    category: 'Graphic Design',
    cardColor: 'bg-clay',
    timeline: '3 weeks',
    role: 'Freelance Brand Designer',
    tools: 'Figma, Adobe Creative Cloud',
    overview: [
      'PyCon LATAM 2025 was a Python conference held in Costa Rica at the Universidad de Costa Rica, Sede del Pacífico — my own campus — in August 2025. The event\'s design and advertising team needed extra support, and a friend already on the team recommended me as a freelance collaborator.',
      'My job was to take the existing logo and finalize it for official event use, then build out the complete brand manual: brand essence, imagotype construction, usage rules, and identity applications. My design professor, Verónica Solano, supervised the process and signed off on the final manual.',
    ],
    gallery: [
      { color: 'bg-clay', alt: 'PyCon LATAM 2025 event signage' },
      { color: 'bg-rust', alt: 'PyCon LATAM 2025 staff shirts and caps' },
      { color: 'bg-terracotta', alt: 'PyCon LATAM 2025 keychains and rubber bracelets' },
      { color: 'bg-espresso', alt: 'PyCon LATAM 2025 tote bags and water bottles' },
    ],
    summary:
      "My first freelance design project — and different from starting a brand from scratch. I had to work inside a logo and direction the team had already chosen, correct it, and extend it into a full manual and a set of physical applications, all while keeping it consistent enough to pass review before the event's August deadline.",
  },
  {
    id: '3',
    slug: 'pixmatic-studios',
    title: 'Pixmatic Studios',
    type: 'Brand Identity & Mascot',
    category: 'Graphic Design',
    cardColor: 'bg-espresso',
    timeline: '6 weeks',
    role: 'Personal Project — Solo Designer',
    tools: 'Figma, Adobe Creative Cloud, Medibang Paint',
    overview: [
      'A personal passion project imagining what it would be like to run my own 2D animation studio, in the spirit of Disney, DreamWorks, and Pixar — the name is a nod to the latter. The brief I set for myself: build the full identity for a fictional studio from the ground up.',
      "The brand needed to feel like a familiar, polished animation house while staying warm and local, so the studio's mascot, Coco, is a playful, friendly three-toed sloth — a national symbol of Costa Rica — wearing a collar tag with a simplified variation of the logo. In the wordmark itself, the X in PIXMATIC becomes a four-pointed star with Coco's simplified face at its center, tying the mascot directly into the logotype.",
    ],
    gallery: [
      { color: 'bg-espresso', alt: 'Pixmatic Studios logo color variations' },
      { color: 'bg-rust', alt: 'Pixmatic Studios logo formats and usage' },
      { color: 'bg-clay', alt: 'Coco the sloth mascot character design' },
      { color: 'bg-terracotta', alt: 'Pixmatic Studios brand applications' },
    ],
    summary:
      "Designing a full identity system and an original character at the same time pushed me to think about branding and illustration together — how a mascot's personality has to survive being simplified down into a single mark inside a logo, and how a playful character can still sit inside a disciplined brand system.",
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
  {
    id: '5',
    slug: 'happy-home',
    title: 'Happy Home',
    type: 'Logo & Brand Identity',
    category: 'Graphic Design',
    cardColor: 'bg-terracotta',
    timeline: '1 week',
    role: 'Freelance Graphic Designer',
    tools: 'Figma, Adobe Creative Cloud',
    overview: [
      'Happy Home rents rooms to exchange students in Costa Rica. The business already had a logo, but wanted something more iconic and distinctly their own — an identity that could hold up as they started marketing to an international audience.',
      'The new mark is an icon + wordmark logo built around a simple idea: a happy face shaped like a house. Alongside the logo, I designed functional keychains carrying the mark, made for the actual room keys tenants use day to day.',
    ],
    gallery: [
      { color: 'bg-terracotta', alt: 'Happy Home logo icon exploration' },
      { color: 'bg-clay', alt: 'Happy Home full logo lockup' },
      { color: 'bg-espresso', alt: 'Happy Home room key keychain mockups' },
      { color: 'bg-rust', alt: 'Happy Home logo usage examples' },
    ],
    summary:
      'A short, paid freelance turnaround taught me to move fast without losing the client\'s input — a one-week timeline meant getting the icon concept right early, since there wasn\'t room for many rounds of revisions.',
  },
  {
    id: '6',
    slug: 'hack-gb',
    title: 'Hack GB',
    type: 'Event Branding',
    category: 'Graphic Design',
    cardColor: 'bg-rust',
    timeline: '1 week',
    role: 'Design Team Support',
    tools: 'Figma, Adobe Creative Cloud, Medibang Paint',
    overview: [
      "HackGB is the University of Wisconsin-Green Bay's collegiate hackathon, a 24-hour weekend bringing together developers, hardware engineers, and designers. The event's design team needed the logo finished fast — they were about to launch their sponsor outreach campaign and couldn't wait.",
      "The mark centers on a phoenix, referencing UW-Green Bay's own mascot and school spirit, paired with the \"Hack GB\" wordmark. With sponsorship materials on a tight deadline, the priority was landing a strong, recognizable symbol in one week rather than exploring dozens of directions.",
    ],
    gallery: [
      { color: 'bg-rust', alt: 'Hack GB phoenix logo icon' },
      { color: 'bg-terracotta', alt: 'Hack GB full logo lockup' },
      { color: 'bg-clay', alt: 'Hack GB logo color variations' },
      { color: 'bg-espresso', alt: 'Hack GB sponsor deck applications' },
    ],
    summary:
      "Designing under a hard sponsor-outreach deadline meant trusting my first strong direction instead of iterating endlessly — a good exercise in delivering a clear, symbolic mark (the phoenix) quickly for a team I'd never worked with before.",
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
