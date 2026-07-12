import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-body md:flex-row md:justify-between">
        <Link to="/" className="font-display text-lg font-bold text-accent-600">
          Portfolio
        </Link>
        <p>{year} Personal Portfolio.</p>
        <div className="flex gap-6 font-medium">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent-600">
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="hover:text-accent-600">
            Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent-600">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
