import { Link } from 'react-router-dom'
import type { Project } from '../data/types'
import { useTranslations } from '../i18n/translations'

interface ProjectCardProps {
  project: Project
  /** "large" spans the tall hero-style slot used on the home page. */
  size?: 'default' | 'large'
}

export default function ProjectCard({ project, size = 'default' }: ProjectCardProps) {
  const { t } = useTranslations()
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`group relative block h-full overflow-hidden rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600 ${
        size === 'large' ? 'min-h-[440px]' : 'min-h-[210px]'
      }`}
    >
      {/* Background: real cover image if provided, otherwise the flat brand color */}
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 ${project.cardColor} transition-transform duration-500 group-hover:scale-105`} />
      )}

      {/* Scrim: guarantees the label stays readable (WCAG AA) no matter the
          background color or, later, a busy photo. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="text-sm font-medium text-white/80">{t(project.type)}</span>
        <h3 className="font-display text-2xl font-bold text-white">{t(project.title)}</h3>
      </div>
    </Link>
  )
}
