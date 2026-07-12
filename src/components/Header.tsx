import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Work', to: '/#work' },
  { label: 'About Me', to: '/#about' },
  { label: 'Contact Me', to: '/#contact' },
]

export default function Header() {
  return (
    <header className="bg-paper sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold text-accent-600">
          Portfolio
        </Link>

        <nav className="hidden gap-8 font-body text-sm font-medium text-ink md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition-colors hover:text-accent-600">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* "Hire Me" reads well for freelance-facing portfolios. If this site is
            mainly for school/personal projects, swap the label for something
            lower-pressure like "Contact". */}
        <Link
          to="/hire"
          className="rounded-2xl bg-accent-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
        >
          Hire Me
        </Link>
      </div>
    </header>
  )
}
