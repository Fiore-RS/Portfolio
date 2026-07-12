import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import CategoryFilter from '../components/CategoryFilter'
import { projects } from '../data/projects'
import type { ProjectCategory } from '../data/types'

const categories: ProjectCategory[] = ['Graphic Design', 'UX/UI Design']

export default function AllProjects() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')

  const visibleProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            All My <span className="text-accent-500">Projects.</span>
          </h1>
          <p className="mt-3 max-w-md text-body">Everything I've shipped, filterable by discipline.</p>
        </div>
        <Link
          to="/"
          className="rounded-full bg-accent-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
        >
          ← Go Back
        </Link>
      </div>

      <div className="mt-8">
        <CategoryFilter categories={categories} active={filter} onChange={setFilter} />
      </div>

      {visibleProjects.length === 0 ? (
        <p className="mt-16 text-center text-body">No projects in this category yet — check back soon.</p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
