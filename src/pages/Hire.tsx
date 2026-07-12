import { Mail, Share2, Github, Clock } from 'lucide-react'

const packages = [
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

export default function Hire() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Let's Work <span className="text-accent-500">Together.</span>
      </h1>
      <p className="mt-4 max-w-xl text-body">
        I'm currently open to freelance and collaboration opportunities. Here's how to reach me, when I'm
        available, and a starting reference for pricing.
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

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h3 className="text-lg font-bold">{pkg.name}</h3>
              <p className="mt-1 text-2xl font-extrabold text-accent-500">{pkg.price}</p>
              <p className="mt-3 text-sm text-body">{pkg.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-body/70">
          Prices shown are a starting reference and may be adjusted per project. Not final quotes.
        </p>
      </div>
    </section>
  )
}
