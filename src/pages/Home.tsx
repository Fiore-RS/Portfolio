import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutPanelLeft,
  Image as ImageIcon,
  Code2,
  Puzzle,
  Network,
  Images,
  Share2,
  Github,
  Mail,
  Send,
  MapPin,
} from 'lucide-react'
import type { ComponentType } from 'react'
import ProjectCarousel from '../components/ProjectCarousel'
import CategoryFilter from '../components/CategoryFilter'
import { projects } from '../data/projects'
import type { ProjectCategory } from '../data/types'

const categories: ProjectCategory[] = ['Graphic Design', 'UX/UI Design']

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
    title: 'Reading Journal',
    years: '2025 - 2026',
    role: 'Solo Designer & Developer',
    description: 'Designed and shipped a full-stack reading tracker end to end, from prototype to deployment.',
    icon: Network,
    iconBg: 'bg-accent-200',
    iconColor: 'text-accent-600',
  },
  {
    title: 'Project Name',
    years: '20XX - 20XX',
    role: 'Role in project',
    description: 'Replace with a short description of this project and your role in it.',
    icon: Puzzle,
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

const connectLinks = [
  {
    label: 'LinkedIn',
    subtitle: 'Professional Network & Updates',
    href: 'https://www.linkedin.com/in/fiorella-salazar-7014a6225/',
    icon: Share2,
    trailing: 'arrow' as const,
  },
  {
    label: 'GitHub',
    subtitle: 'Open Source Projects & Code',
    href: 'https://github.com/Fiore-RS',
    icon: Github,
    trailing: 'arrow' as const,
  },
  {
    label: 'Email Me',
    subtitle: 'Direct Inquiries & Collaborations',
    href: 'mailto:fiorella.rodsal5@gmail.com',
    icon: Mail,
    trailing: 'send' as const,
  },
]

export default function Home() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')

  const visibleProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-8 md:grid-cols-[1.15fr_1fr] md:items-center md:pb-24 md:pt-12">
        <div>
          <span className="inline-block rounded-full bg-accent-100 px-3.5 py-1 text-xs font-medium text-accent-600">
            Welcome to my creative studio!
          </span>
          <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[1.15] text-ink md:text-5xl">
            Crafting digital experiences with <span className="text-accent-500">soul.</span>
          </h1>
          <p className="mt-6 max-w-lg text-body">
            I design and build full-stack web platforms — from research and interface design through
            to a working, deployed product.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/#work"
              className="rounded-2xl bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
            >
              View My Work →
            </Link>
            <Link
              to="/#about"
              className="rounded-2xl border border-ink/20 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink/40"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Photo panel: clay frame with the portrait inset on all sides
            (more breathing room top/bottom than left/right). Swap the src
            for your own photo when ready. */}
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.75rem] bg-clay px-10 py-14 md:justify-self-end md:px-12 md:py-16">
          <img
            src="https://i.pinimg.com/originals/24/66/a1/2466a17b21e6371ebc7a83ee36f6150e.jpg"
            alt="Portrait placeholder — reading a book"
            className="h-full w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Selected <span className="text-accent-500">work.</span>
            </h2>
            <p className="mt-3 max-w-md text-body">A few recent projects, spanning product design and development.</p>
          </div>
          <CategoryFilter categories={categories} active={filter} onChange={setFilter} />
        </div>

        <ProjectCarousel projects={visibleProjects} />

        <div className="mt-10 text-center">
          <Link
            to="/work"
            className="inline-block rounded-full bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
          >
            All My Projects →
          </Link>
        </div>
      </section>

      {/* Craft & Tools */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
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
      <section className="mx-auto max-w-6xl px-6 py-16">
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

      {/* Connect */}
      <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16 text-center">
        <img
          src="https://i.pinimg.com/originals/24/66/a1/2466a17b21e6371ebc7a83ee36f6150e.jpg"
          alt="Portrait placeholder"
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
        <h2 className="mt-6 text-4xl font-bold">Let's Connect!</h2>
        <p className="mx-auto mt-3 max-w-md text-body">
          I'm always open to new collaborations, creative projects, or just a friendly conversation over digital
          coffee.
        </p>

        <div className="mt-8 space-y-3 text-left">
          {connectLinks.map((link) => {
            const Icon = link.icon
            const Trailing = link.trailing === 'send' ? Send : null
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-2xl bg-paper px-5 py-4 shadow-sm transition-colors hover:bg-accent-100/60"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-200 text-accent-600">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{link.label}</span>
                    <span className="block text-sm text-body/70">{link.subtitle}</span>
                  </span>
                </span>
                {Trailing ? (
                  <Trailing size={18} className="shrink-0 text-ink" />
                ) : (
                  <span aria-hidden="true" className="shrink-0 text-ink">
                    →
                  </span>
                )}
              </a>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-sm text-body/70">
          <span className="h-px w-12 bg-ink/15" aria-hidden="true" />
          <span>"Sometimes, less is more"</span>
          <span className="h-px w-12 bg-ink/15" aria-hidden="true" />
        </div>

        <div className="mt-8 rounded-2xl bg-accent-100 px-6 py-5 text-accent-600">
          <MapPin size={20} className="mx-auto" />
          <p className="mt-2 font-semibold">
            Currently based in
            <br />
            Alajuela, Costa Rica
          </p>
        </div>
      </section>
    </>
  )
}
