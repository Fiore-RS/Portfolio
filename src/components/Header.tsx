import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ui, useTranslations } from '../i18n/translations'

export default function Header() {
  const { t } = useTranslations()
  const { lang, toggleLang } = useLanguage()

  const navLinks = [
    { label: t(ui.nav.work), to: '/#work' },
    { label: t(ui.nav.about), to: '/#about' },
    { label: t(ui.nav.contact), to: '/#contact' },
  ]

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

        <div className="flex items-center gap-3">
          {/* Language toggle */}
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

          {/* "Hire Me" reads well for freelance-facing portfolios. If this site is
              mainly for school/personal projects, swap the label for something
              lower-pressure like "Contact". */}
          <Link
            to="/hire"
            className="rounded-2xl bg-accent-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {t(ui.nav.hireMe)}
          </Link>
        </div>
      </div>
    </header>
  )
}
