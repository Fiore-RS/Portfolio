import { Mail, Share2, Github, Clock, FileText } from 'lucide-react'

const webPackages = [
  {
    name: 'Landing Page',
    price: 'From $150',
    description: 'A single-page site: hero, a few content sections, contact form. Responsive, no backend.',
  },
  {
    name: 'Multi-Page Website',
    price: 'From $350',
    description: '4-6 pages (e.g. home, about, services, contact). Responsive, basic SEO setup.',
  },
  {
    name: 'Full-Stack Web App',
    price: 'From $700',
    description: 'Custom frontend + backend, database, authentication, and deployment — like Reading Journal.',
  },
]

const graphicPackages = [
  {
    name: 'Logo Design',
    price: 'From $80',
    description: 'A handful of concepts narrowed to one final logo, delivered as vector + PNG files.',
  },
  {
    name: 'Logo + Brand Manual',
    price: 'From $180',
    description: 'Logo plus a brand guide: color palette, typography, and usage rules — like PyCon LATAM 2025.',
  },
  {
    name: 'Full Identity & Mockups',
    price: 'From $350',
    description: 'Complete identity system with real-world applications (apparel, signage, packaging, etc.).',
  },
]

const terms = [
  {
    title: 'Scope & Revisions',
    detail: 'Each package includes an agreed number of concepts and two rounds of revisions. Changes beyond the original scope are quoted separately.',
  },
  {
    title: 'Payment',
    detail: '50% deposit to begin, 50% due on final delivery. Work starts once the deposit is received.',
  },
  {
    title: 'Timeline',
    detail: 'Estimated timelines assume timely feedback. Slow feedback from the client may push back the delivery date.',
  },
  {
    title: 'Usage Rights',
    detail: 'Full usage rights transfer to the client on final payment. Editable source files are provided on request.',
  },
  {
    title: 'Cancellation',
    detail: 'If a project is cancelled after work has started, the deposit is non-refundable to cover time already invested.',
  },
]

export default function Hire() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Let's Work <span className="text-accent-500">Together.</span>
      </h1>
      <p className="mt-4 max-w-xl text-body">
        I'm currently open to freelance and collaboration opportunities in both web design/development and
        graphic design. Here's how to reach me, when I'm available, and a starting reference for pricing.
      </p>

      {/* Contact + availability */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-paper p-6 shadow-sm">
          <h2 className="text-lg font-bold">Contact</h2>
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
          <h2 className="text-lg font-bold">Availability</h2>
          <div className="mt-4 flex items-start gap-3 text-sm text-body">
            <Clock size={18} className="mt-0.5 shrink-0 text-accent-500" />
            <div>
              <p className="font-semibold text-ink">Monday - Friday</p>
              <p>9:00 AM - 7:00 PM (Costa Rica time)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">
          Base <span className="text-accent-500">Pricing.</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-body">
          Starting prices for common project types. Final pricing depends on scope, timeline, and features —
          reach out for a quote tailored to your project.
        </p>

        <h3 className="mt-8 text-lg font-bold text-ink">Web Design &amp; Development</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {webPackages.map((pkg) => (
            <div key={pkg.name} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h4 className="text-lg font-bold">{pkg.name}</h4>
              <p className="mt-1 text-2xl font-extrabold text-accent-500">{pkg.price}</p>
              <p className="mt-3 text-sm text-body">{pkg.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-bold text-ink">Graphic Design &amp; Branding</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {graphicPackages.map((pkg) => (
            <div key={pkg.name} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h4 className="text-lg font-bold">{pkg.name}</h4>
              <p className="mt-1 text-2xl font-extrabold text-accent-500">{pkg.price}</p>
              <p className="mt-3 text-sm text-body">{pkg.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-body/70">
          Prices shown are a starting reference and may be adjusted per project. Not final quotes.
        </p>
      </div>

      {/* Terms of Service */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">
          Terms of <span className="text-accent-500">Service.</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-body">
          A general summary of how I work — not a formal legal contract. For larger projects, a signed
          agreement will be provided.
        </p>

        <div className="mt-6 space-y-3">
          {terms.map((term) => (
            <div key={term.title} className="flex gap-4 rounded-2xl bg-paper p-5 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-200 text-accent-600">
                <FileText size={18} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{term.title}</h3>
                <p className="mt-1 text-sm text-body">{term.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
