import { LayoutPanelLeft, Image as ImageIcon, Code2, Puzzle, Network, Images } from 'lucide-react'
import type { ComponentType } from 'react'

interface ToolGroup {
  title: string
  items: string[]
  icon: ComponentType<{ size?: number; className?: string }>
  iconBg: string
  iconColor: string
}

const tools: ToolGroup[] = [
  {
    title: 'UX/UI Strategy',
    items: ['User Research & Synthesis', 'Information Architecture', 'Interactive Prototyping'],
    icon: LayoutPanelLeft,
    iconBg: 'bg-accent-200',
    iconColor: 'text-accent-600',
  },
  {
    title: 'Visual Design',
    items: ['Design Systems', 'Brand Identity & Logos', 'Typography & Color Theory'],
    icon: ImageIcon,
    iconBg: 'bg-terracotta/25',
    iconColor: 'text-rust',
  },
  {
    title: 'Frontend',
    items: ['Semantic HTML & CSS', 'Tailwind & Modern CSS', 'React'],
    icon: Code2,
    iconBg: 'bg-clay/30',
    iconColor: 'text-espresso',
  },
]

interface ExperienceEntry {
  title: string
  years: string
  role: string
  description: string
  icon: ComponentType<{ size?: number; className?: string }>
  iconBg: string
  iconColor: string
}

const experience: ExperienceEntry[] = [
  {
    title: 'Heleani Animal Health',
    years: '2025 - 2026',
    role: 'Frontend Developer',
    description:
      'Built the frontend and its connection to the backend for a full-stack veterinary platform, developed with a team.',
    icon: Puzzle,
    iconBg: 'bg-accent-200',
    iconColor: 'text-accent-600',
  },
  {
    title: 'Reading Journal',
    years: '2025 - 2026',
    role: 'Solo Designer & Developer',
    description: 'Designed and shipped a full-stack reading tracker end to end, from prototype to deployment.',
    icon: Network,
    iconBg: 'bg-terracotta/25',
    iconColor: 'text-rust',
  },
  {
    title: 'Project Name',
    years: '20XX - 20XX',
    role: 'Role in project',
    description: 'Replace with a short description of this project and your role in it.',
    icon: Images,
    iconBg: 'bg-clay/30',
    iconColor: 'text-espresso',
  },
]

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-16">
        <h1 className="text-4xl font-bold">
          About <span className="text-accent-500">Me.</span>
        </h1>
        <p className="mt-4 text-body">
          Add your story here: background, what you're studying, and the kind of work you want to do next.
        </p>
      </section>

      {/* Craft & Tools */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold">
          Craft &amp; <span className="text-accent-500">Tools.</span>
        </h2>
        <p className="mt-3 max-w-md text-body">What I bring to a project, end to end.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tools.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.title} className="rounded-2xl bg-paper p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${group.iconBg}`}>
                    <Icon size={20} className={group.iconColor} />
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-body">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent-500">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold">
          My Professional <span className="text-accent-500">Experience.</span>
        </h2>
        <p className="mt-3 max-w-md text-body">A few of the projects I've worked on recently.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experience.map((entry) => {
            const Icon = entry.icon
            return (
              <div key={entry.title} className="rounded-2xl bg-paper p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{entry.title}</h3>
                    <p className="text-sm text-body/70">{entry.years}</p>
                  </div>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${entry.iconBg}`}>
                    <Icon size={20} className={entry.iconColor} />
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-ink">{entry.role}</p>
                <p className="mt-2 text-sm text-body">{entry.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
