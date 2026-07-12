import type { ProjectCategory } from '../data/types'

interface CategoryFilterProps {
  categories: ProjectCategory[]
  active: ProjectCategory | 'All'
  onChange: (category: ProjectCategory | 'All') => void
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const options: (ProjectCategory | 'All')[] = ['All', ...categories]

  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
      {options.map((option) => {
        const isActive = active === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? 'border-accent-500 bg-accent-500 text-white'
                : 'border-accent-300 bg-transparent text-accent-600 hover:bg-accent-100'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
