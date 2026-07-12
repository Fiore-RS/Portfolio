import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import CategoryFilter from '../components/CategoryFilter'
import { projects } from '../data/projects'
import type { ProjectCategory } from '../data/types'

const categories: ProjectCategory[] = ['Graphic Design', 'UX/UI Design']

const tools = [
  {
    title: 'UX/UI Strategy',
    items: ['User Research & Synthesis', 'Information Architecture', 'Interactive Prototyping'],
  },
  {
    title: 'Visual Design',
    items: ['Design Systems', 'Brand Identity & Logos', 'Typography & Color Theory'],
  },
  {
    title: 'Frontend',
    items: ['Semantic HTML & CSS', 'Tailwind & Modern CSS', 'React'],
  },
]

export default function Home() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')

  const visibleProjects = useMemo(() => {
    const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
    return filtered.slice(0, 4)
  }, [filter])

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <span className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-medium text-accent-600">
            Welcome to my creative studio!
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight text-ink">
            Crafting digital experiences with <span className="text-accent-500">soul.</span>
          </h1>
          <p className="mt-6 max-w-md text-body">
            I design and build full-stack web platforms — from research and interface design through
            to a working, deployed product.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/work"
              className="rounded-full bg-accent-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
            >
              View My Work →
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink/40"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="aspect-[4/5] w-full rounded-xl2 bg-clay md:justify-self-end md:max-w-sm">
          {/* Swap for <img src="/your-photo.jpg" alt="Portrait of ..." className="h-full w-full rounded-xl2 object-cover" /> */}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Selected <span className="text-accent-500">work.</span>
            </h2>
            <p className="mt-3 max-w-md text-body">A few recent projects, spanning product design and development.</p>
          </div>
          <CategoryFilter categories={categories} active={filter} onChange={setFilter} />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {visibleProjects[0] && (
            <div className="md:col-start-1 md:row-span-2">
              <ProjectCard project={visibleProjects[0]} size="large" />
            </div>
          )}
          {visibleProjects[1] && (
            <div className="md:col-span-2 md:col-start-2 md:row-start-1">
              <ProjectCard project={visibleProjects[1]} />
            </div>
          )}
          {visibleProjects.slice(2, 4).map((project, i) => (
            <div key={project.id} className={`md:row-start-2 ${i === 0 ? 'md:col-start-2' : 'md:col-start-3'}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-bold">
          Craft &amp; <span className="text-accent-500">Tools.</span>
        </h2>
        <p className="mt-3 max-w-md text-body">What I bring to a project, end to end.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tools.map((group) => (
            <div key={group.title} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h3 className="text-lg font-bold">{group.title}</h3>
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
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">Let's Connect!</h2>
        <p className="mx-auto mt-3 max-w-md text-body">
          I'm always open to new collaborations, projects, or just a friendly conversation.
        </p>

        <div className="mt-8 rounded-2xl bg-accent-100 px-6 py-5 text-accent-600">
          <p className="font-semibold">Currently based in Alajuela, Costa Rica</p>
        </div>
      </section>
    </>
  )
}
