import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import type { Project } from '../data/types'

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-carousel-card]') as HTMLElement | null
    const amount = (card?.offsetWidth ?? 320) + 20 // card width + gap
    track.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  if (projects.length === 0) {
    return <p className="mt-10 text-body">No projects in this category yet — check back soon.</p>
  }

  return (
    <div className="relative mt-10">
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            data-carousel-card
            className="aspect-[4/5] w-64 shrink-0 snap-start sm:w-72 md:w-80"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Prev/next controls — the track is natively swipeable on touch, these
          are for mouse/keyboard users. */}
      {projects.length > 1 && (
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollByCard('prev')}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500 transition-colors hover:bg-accent-100"
          >
            <ChevronLeft size={22} strokeWidth={2.75} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard('next')}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500 transition-colors hover:bg-accent-100"
          >
            <ChevronRight size={22} strokeWidth={2.75} />
          </button>
        </div>
      )}
    </div>
  )
}
