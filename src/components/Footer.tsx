import { Link } from 'react-router-dom'
import { ui, useTranslations } from '../i18n/translations'

export default function Footer() {
  const { t } = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-body md:flex-row md:justify-between">
        <Link to="/" className="font-display text-lg font-bold text-accent-600">
          Portfolio
        </Link>
        <p>
          {year} {t(ui.footer.tagline)}
        </p>
        <div className="flex gap-6 font-medium">
          <a
            href="https://www.linkedin.com/in/fiorella-salazar-7014a6225/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-600"
          >
            LinkedIn
          </a>
          <a href="mailto:fiorella.rodsal5@gmail.com" className="hover:text-accent-600">
            Email
          </a>
          <a href="https://github.com/Fiore-RS" target="_blank" rel="noreferrer" className="hover:text-accent-600">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
