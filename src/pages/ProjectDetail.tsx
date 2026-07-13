import { Navigate, useParams, Link } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import { ui, useTranslations } from '../i18n/translations'

export default function ProjectDetail() {
  const { t, tArr } = useTranslations()
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')

  if (!project) return <Navigate to="/work" replace />

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const overview = tArr(project.overview)

  return (
    <>
      {/* Hero */}
      <section className={`relative flex min-h-[420px] items-end ${project.cardColor}`}>
        {project.image && (
          <img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-14 text-white">
          <p className="text-sm font-medium text-white/80">{t(project.type)}</p>
          <h1 className="mt-2 font-display text-5xl font-extrabold">{t(project.title)}</h1>
          <p className="mt-4 max-w-xl text-white/90">{overview[0]}</p>
        </div>
      </section>

      {/* Overview + details */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-3xl font-bold">
            {t(ui.projectDetail.overview)} <span className="text-accent-500">{t(ui.projectDetail.overviewHighlight)}</span>
          </h2>
          <div className="mt-4 space-y-4 text-body">
            {overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl bg-paper p-6 shadow-sm">
          <h3 className="text-lg font-bold">{t(ui.projectDetail.details)}</h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-body/70">{t(ui.projectDetail.timeline)}</dt>
              <dd className="font-semibold text-ink">{t(project.timeline)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-body/70">{t(ui.projectDetail.role)}</dt>
              <dd className="font-semibold text-ink">{t(project.role)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-body/70">{t(ui.projectDetail.tools)}</dt>
              <dd className="font-semibold text-ink">{t(project.tools)}</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          {t(ui.projectDetail.closeLook)} <span className="text-accent-500">{t(ui.projectDetail.closeLookHighlight)}</span>
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {project.gallery.map((item, i) => (
            <div key={i} className={`aspect-[4/3] rounded-3xl ${item.color}`} role="img" aria-label={t(item.alt)}>
              {item.image && (
                <img src={item.image} alt={t(item.alt)} className="h-full w-full rounded-3xl object-cover" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="bg-accent-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            {t(ui.projectDetail.summary)} <span className="text-accent-500">{t(ui.projectDetail.summaryHighlight)}</span>
          </h2>
          <p className="mt-4 max-w-none text-body">{t(project.summary)}</p>
        </div>
      </section>

      <div className="py-16 text-center">
        <Link
          to={`/work/${nextProject.slug}`}
          className="inline-block rounded-full bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
        >
          {t(ui.projectDetail.nextProject)}
        </Link>
      </div>
    </>
  )
}
