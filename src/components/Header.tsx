import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { ui, useTranslations } from '../i18n/translations'

export default function Header() {
  const { t } = useTranslations()
  const { lang, toggleLang } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t(ui.nav.allProjects), to: '/work' },
    { label: t(ui.nav.hireMe), to: '/hire' },
  ]

  return (
    <header className="bg-paper sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold text-accent-600" onClick={() => setMobileOpen(false)}>
          Portfolio
        </Link>

        <nav className="hidden gap-8 font-body text-base font-medium text-ink md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-accent-600 ${isActive ? 'text-accent-600' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle — stands alone in the corner */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            className="flex items-center rounded-full border border-ink/15 p-0.5 text-xs font-semibold text-ink"
          >
            <span
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === 'en' ? 'bg-accent-400 text-white' : 'text-ink/50'
              }`}
            >
              EN
            </span>
            <span
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === 'es' ? 'bg-accent-400 text-white' : 'text-ink/50'
              }`}
            >
              ES
            </span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          className="flex flex-col gap-1 border-t border-ink/10 px-6 py-4 font-body text-base font-medium text-ink md:hidden"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-3 py-3 transition-colors hover:bg-accent-100 hover:text-accent-600 ${
                  isActive ? 'text-accent-600' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
