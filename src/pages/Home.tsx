import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutPanelLeft,
  Image as ImageIcon,
  Code2,
  Puzzle,
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
import { assetUrl } from '../lib/assetUrl'
import type { ProjectCategory, Localized } from '../data/types'
import { ui, useTranslations } from '../i18n/translations'

const categories: ProjectCategory[] = ['Graphic Design', 'UX/UI Design']

interface ToolGroup {
  title: Localized
  items: { en: string[]; es: string[] }
  icon: ComponentType<{ size?: number; className?: string }>
  iconBg: string
  iconColor: string
}

const tools: ToolGroup[] = [
  {
    title: ui.craftTools.uxui,
    items: ui.craftTools.uxuiItems,
    icon: LayoutPanelLeft,
    iconBg: 'bg-accent-200',
    iconColor: 'text-accent-600',
  },
  {
    title: ui.craftTools.visual,
    items: ui.craftTools.visualItems,
    icon: ImageIcon,
    iconBg: 'bg-terracotta/25',
    iconColor: 'text-rust',
  },
  {
    title: ui.craftTools.frontend,
    items: ui.craftTools.frontendItems,
    icon: Code2,
    iconBg: 'bg-clay/30',
    iconColor: 'text-espresso',
  },
]

interface ExperienceEntry {
  title: Localized
  years: Localized
  role: Localized
  description: Localized
  icon: ComponentType<{ size?: number; className?: string }>
  iconBg: string
  iconColor: string
}

const experience: ExperienceEntry[] = [
  {
    title: { en: 'PyCon LATAM 2025', es: 'PyCon LATAM 2025' },
    years: { en: '2025', es: '2025' },
    role: { en: 'Freelance Brand Designer', es: 'Diseñadora de Marca Freelance' },
    description: {
      en: 'Corrected the event logo and built the complete brand manual, supervised by my design professor.',
      es: 'Corregí el logo del evento y construí el manual de marca completo, supervisado por mi profesora de diseño.',
    },
    icon: Puzzle,
    iconBg: 'bg-terracotta/25',
    iconColor: 'text-rust',
  },
  {
    title: { en: 'Hack GB', es: 'Hack GB' },
    years: { en: '2026', es: '2026' },
    role: { en: 'Design Team Support', es: 'Apoyo al Equipo de Diseño' },
    description: {
      en: "Designed the phoenix logo and brand mark for UW-Green Bay's hackathon in one week, ahead of the sponsor outreach deadline.",
      es: 'Diseñé el logo y la marca del fénix para el hackathon de UW-Green Bay en una semana, antes de la fecha límite de búsqueda de patrocinadores.',
    },
    icon: Images,
    iconBg: 'bg-clay/30',
    iconColor: 'text-espresso',
  },
  {
    title: { en: 'Teleo', es: 'Teleo' },
    years: { en: '2026 - Present', es: '2026 - Presente' },
    role: { en: 'Solo Designer & Developer', es: 'Diseñadora y Desarrolladora Única' },
    description: {
      en: 'Designing and building a private, ad-free reading journal web app end to end, from UX to a Supabase-backed database.',
      es: 'Diseñando y construyendo un diario de lectura privado y sin anuncios de principio a fin, desde la UX hasta una base de datos con Supabase.',
    },
    icon: Code2,
    iconBg: 'bg-accent-200',
    iconColor: 'text-accent-600',
  },
]

const connectLinks = [
  {
    label: 'LinkedIn',
    subtitle: ui.connect.linkedinSubtitle,
    href: 'https://www.linkedin.com/in/fiorella-salazar-7014a6225/',
    icon: Share2,
    trailing: 'arrow' as const,
  },
  {
    label: 'GitHub',
    subtitle: ui.connect.githubSubtitle,
    href: 'https://github.com/Fiore-RS',
    icon: Github,
    trailing: 'arrow' as const,
  },
  {
    label: { en: 'Email Me', es: 'Escríbeme' },
    subtitle: ui.connect.emailSubtitle,
    href: 'mailto:fiorella.rodsal5@gmail.com',
    icon: Mail,
    trailing: 'send' as const,
  },
]

export default function Home() {
  const { t, tArr } = useTranslations()
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')

  const visibleProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl overflow-x-hidden px-6 pb-16 pt-[7.5rem]">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          <div className="text-center md:text-left">
            <span className="inline-block rounded-full bg-accent-100 px-3.5 py-1 text-xs font-medium text-accent-600">
              {t(ui.hero.badge)}
            </span>
            <h1 className="mx-auto mt-6 max-w-xl break-words font-display text-4xl font-extrabold leading-[1.15] text-ink sm:text-5xl md:mx-0 md:text-5xl md:leading-[1.1]">
              {t(ui.hero.titleStart)} <span className="text-accent-500">{t(ui.hero.titleHighlight)}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-body md:mx-0">{t(ui.hero.body)}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/#work"
                className="rounded-2xl bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
              >
                {t(ui.hero.viewWork)}
              </Link>
              <Link
                to="/#about"
                className="rounded-2xl border border-ink/20 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink/40"
              >
                {t(ui.hero.aboutMe)}
              </Link>
            </div>

            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-accent-100 px-6 py-3 text-sm font-medium text-accent-600 md:justify-start">
              <span>
                {projects.length}+ {t(ui.hero.statsProjects)}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
              <span>{t(ui.hero.statsDisciplines)}</span>
              <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
              <span>{t(ui.hero.statsLocation)}</span>
            </div>
          </div>

          {/* Portrait — hidden on mobile, shown from md up */}
          <div className="hidden md:order-2 md:block">
            <div className="relative mx-auto w-56 sm:w-64 md:w-full md:max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2.5rem] bg-accent-200"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 -z-10 h-2/3 w-2/3 rounded-[2rem] bg-terracotta/25"
              />
              <img
                src={assetUrl('profile/fiorella.webp')}
                alt={t(ui.hero.photoAlt)}
                className="w-full rounded-[2rem] drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              {t(ui.work.heading)} <span className="text-accent-500">{t(ui.work.headingHighlight)}</span>
            </h2>
            <p className="mt-3 max-w-md text-body">{t(ui.work.subtitle)}</p>
          </div>
          <CategoryFilter categories={categories} active={filter} onChange={setFilter} />
        </div>

        <ProjectCarousel projects={visibleProjects} />

        <div className="mt-10 text-center">
          <Link
            to="/work"
            className="inline-block rounded-full bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {t(ui.work.allProjects)}
          </Link>
        </div>
      </section>

      {/* Craft & Tools */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-12">
        <h2 className="text-4xl font-bold">
          {t(ui.craftTools.heading)} <span className="text-accent-500">{t(ui.craftTools.headingHighlight)}</span>
        </h2>
        <p className="mt-3 max-w-md text-body">{t(ui.craftTools.subtitle)}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tools.map((group) => {
            const Icon = group.icon
            return (
              <div key={t(group.title)} className="rounded-2xl bg-paper p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold">{t(group.title)}</h3>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${group.iconBg}`}>
                    <Icon size={20} className={group.iconColor} />
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-body">
                  {tArr(group.items).map((item) => (
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
          {t(ui.experience.heading)} <span className="text-accent-500">{t(ui.experience.headingHighlight)}</span>
        </h2>
        <p className="mt-3 max-w-md text-body">{t(ui.experience.subtitle)}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experience.map((entry) => {
            const Icon = entry.icon
            return (
              <div key={t(entry.title)} className="rounded-2xl bg-paper p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{t(entry.title)}</h3>
                    <p className="text-sm text-body/70">{t(entry.years)}</p>
                  </div>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${entry.iconBg}`}>
                    <Icon size={20} className={entry.iconColor} />
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-ink">{t(entry.role)}</p>
                <p className="mt-2 text-sm text-body">{t(entry.description)}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Connect */}
      <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">{t(ui.connect.heading)}</h2>
        <p className="mx-auto mt-3 max-w-md text-body">{t(ui.connect.subtitle)}</p>

        <div className="mt-8 space-y-3 text-left">
          {connectLinks.map((link) => {
            const Icon = link.icon
            const Trailing = link.trailing === 'send' ? Send : null
            return (
              <a
                key={link.href}
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
                    <span className="block font-semibold text-ink">
                      {typeof link.label === 'string' ? link.label : t(link.label)}
                    </span>
                    <span className="block text-sm text-body/70">{t(link.subtitle)}</span>
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
          <span>{t(ui.connect.quote)}</span>
          <span className="h-px w-12 bg-ink/15" aria-hidden="true" />
        </div>

        <div className="mt-8 rounded-2xl bg-accent-100 px-6 py-5 text-accent-600">
          <MapPin size={20} className="mx-auto" />
          <p className="mt-2 font-semibold">
            {t(ui.connect.locationLabel)}
            <br />
            Alajuela, Costa Rica
          </p>
        </div>
      </section>
    </>
  )
}
