import { Mail, Share2, Github, Clock, FileText } from 'lucide-react'
import { ui, useTranslations } from '../i18n/translations'
import type { Localized } from '../data/types'

interface Package {
  name: Localized
  price: string
  description: Localized
}

const webPackages: Package[] = [
  {
    name: { en: 'Landing Page', es: 'Landing Page' },
    price: '$150',
    description: {
      en: 'A single-page site: hero, a few content sections, contact form. Responsive, no backend.',
      es: 'Un sitio de una sola página: hero, algunas secciones de contenido, formulario de contacto. Responsive, sin backend.',
    },
  },
  {
    name: { en: 'Multi-Page Website', es: 'Sitio Web Multi-página' },
    price: '$350',
    description: {
      en: '4-6 pages (e.g. home, about, services, contact). Responsive, basic SEO setup.',
      es: '4-6 páginas (ej. inicio, sobre mí, servicios, contacto). Responsive, configuración básica de SEO.',
    },
  },
  {
    name: { en: 'Full-Stack Web App', es: 'App Web Full-Stack' },
    price: '$700',
    description: {
      en: 'Custom frontend + backend, database, authentication, and deployment — like Reading Journal.',
      es: 'Frontend + backend a medida, base de datos, autenticación y despliegue — como Reading Journal.',
    },
  },
]

const graphicPackages: Package[] = [
  {
    name: { en: 'Logo Design', es: 'Diseño de Logo' },
    price: '$80',
    description: {
      en: 'A handful of concepts narrowed to one final logo, delivered as vector + PNG files.',
      es: 'Un puñado de conceptos reducidos a un logo final, entregado en archivos vectoriales + PNG.',
    },
  },
  {
    name: { en: 'Logo + Brand Manual', es: 'Logo + Manual de Marca' },
    price: '$180',
    description: {
      en: 'Logo plus a brand guide: color palette, typography, and usage rules — like PyCon LATAM 2025.',
      es: 'Logo más una guía de marca: paleta de colores, tipografía, y reglas de uso — como PyCon LATAM 2025.',
    },
  },
  {
    name: { en: 'Full Identity & Mockups', es: 'Identidad Completa y Mockups' },
    price: '$350',
    description: {
      en: 'Complete identity system with real-world applications (apparel, signage, packaging, etc.).',
      es: 'Sistema de identidad completo con aplicaciones reales (ropa, señalización, empaques, etc.).',
    },
  },
]

const terms: { title: Localized; detail: Localized }[] = [
  {
    title: { en: 'Scope & Revisions', es: 'Alcance y Revisiones' },
    detail: {
      en: 'Each package includes an agreed number of concepts and two rounds of revisions. Changes beyond the original scope are quoted separately.',
      es: 'Cada paquete incluye un número acordado de conceptos y dos rondas de revisión. Los cambios fuera del alcance original se cotizan aparte.',
    },
  },
  {
    title: { en: 'Payment', es: 'Pago' },
    detail: {
      en: '50% deposit to begin, 50% due on final delivery. Work starts once the deposit is received.',
      es: '50% de adelanto para iniciar, 50% al momento de la entrega final. El trabajo comienza al recibir el adelanto.',
    },
  },
  {
    title: { en: 'Timeline', es: 'Tiempos de Entrega' },
    detail: {
      en: 'Estimated timelines assume timely feedback. Slow feedback from the client may push back the delivery date.',
      es: 'Los tiempos estimados asumen retroalimentación oportuna. Una respuesta lenta del cliente puede atrasar la fecha de entrega.',
    },
  },
  {
    title: { en: 'Usage Rights', es: 'Derechos de Uso' },
    detail: {
      en: 'Full usage rights transfer to the client on final payment. Editable source files are provided on request.',
      es: 'Los derechos de uso completos pasan al cliente al recibir el pago final. Los archivos editables se entregan a solicitud.',
    },
  },
  {
    title: { en: 'Cancellation', es: 'Cancelación' },
    detail: {
      en: 'If a project is cancelled after work has started, the deposit is non-refundable to cover time already invested.',
      es: 'Si un proyecto se cancela después de haber iniciado, el adelanto no es reembolsable, para cubrir el tiempo ya invertido.',
    },
  },
]

export default function Hire() {
  const { t } = useTranslations()

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        {t(ui.hire.heading)} <span className="text-accent-500">{t(ui.hire.headingHighlight)}</span>
      </h1>
      <p className="mt-4 max-w-xl text-body">{t(ui.hire.intro)}</p>

      {/* Contact + availability */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-paper p-6 shadow-sm">
          <h2 className="text-lg font-bold">{t(ui.hire.contact)}</h2>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href="mailto:fiorella.rodsal5@gmail.com"
              className="flex items-center gap-3 text-body transition-colors hover:text-accent-600"
            >
              <Mail size={18} className="text-accent-500" />
              fiorella.rodsal5@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/fiorella-salazar-7014a6225/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-body transition-colors hover:text-accent-600"
            >
              <Share2 size={18} className="text-accent-500" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Fiore-RS"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-body transition-colors hover:text-accent-600"
            >
              <Github size={18} className="text-accent-500" />
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-paper p-6 shadow-sm">
          <h2 className="text-lg font-bold">{t(ui.hire.availability)}</h2>
          <div className="mt-4 flex items-start gap-3 text-sm text-body">
            <Clock size={18} className="mt-0.5 shrink-0 text-accent-500" />
            <div>
              <p className="font-semibold text-ink">{t(ui.hire.availabilityDays)}</p>
              <p>{t(ui.hire.availabilityHours)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">
          {t(ui.hire.pricingHeading)} <span className="text-accent-500">{t(ui.hire.pricingHeadingHighlight)}</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-body">{t(ui.hire.pricingSubtitle)}</p>

        <h3 className="mt-8 text-lg font-bold text-ink">{t(ui.hire.webPackagesHeading)}</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {webPackages.map((pkg) => (
            <div key={t(pkg.name)} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h4 className="text-lg font-bold">{t(pkg.name)}</h4>
              <p className="mt-1 text-2xl font-extrabold text-accent-500">{t(ui.hire.priceFrom)} {pkg.price}</p>
              <p className="mt-3 text-sm text-body">{t(pkg.description)}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-bold text-ink">{t(ui.hire.graphicPackagesHeading)}</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {graphicPackages.map((pkg) => (
            <div key={t(pkg.name)} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h4 className="text-lg font-bold">{t(pkg.name)}</h4>
              <p className="mt-1 text-2xl font-extrabold text-accent-500">{t(ui.hire.priceFrom)} {pkg.price}</p>
              <p className="mt-3 text-sm text-body">{t(pkg.description)}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-body/70">{t(ui.hire.pricingNote)}</p>
      </div>

      {/* Terms of Service */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">
          {t(ui.hire.termsHeading)} <span className="text-accent-500">{t(ui.hire.termsHeadingHighlight)}</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-body">{t(ui.hire.termsSubtitle)}</p>

        <div className="mt-6 space-y-3">
          {terms.map((term) => (
            <div key={t(term.title)} className="flex gap-4 rounded-2xl bg-paper p-5 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-200 text-accent-600">
                <FileText size={18} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{t(term.title)}</h3>
                <p className="mt-1 text-sm text-body">{t(term.detail)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
