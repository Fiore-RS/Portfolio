# Portfolio

React 19 + Vite + TypeScript + Tailwind implementation of your Figma portfolio design.

## Run it

```
npm install
npm run dev
```

## Structure

- **Bilingual (EN/ES)**: `src/i18n/LanguageContext.tsx` holds the current language (persisted in
  `localStorage`, defaults to the visitor's browser language) and `src/i18n/translations.ts`
  holds every UI string in both languages plus the `useTranslations()` hook (`t()` for single
  strings, `tArr()` for string lists). The toggle button lives in the header. Project content in
  `src/data/projects.ts` is bilingual too — every text field is `{ en, es }` instead of a plain
  string.
- `src/pages/Home.tsx` — the whole one-page scroll: Hero, Selected Work, Craft &
  Tools, Experience, Let's Connect. Nav links in the header scroll to `#work`,
  `#about`, and `#contact` on this page rather than routing elsewhere.
- `src/pages/AllProjects.tsx` (`/work`) and `src/pages/ProjectDetail.tsx`
  (`/work/:slug`) are the only separate pages/routes, plus `src/pages/Hire.tsx` (`/hire`).
- `src/components/ScrollToHash.tsx` — makes the header's `/#work`-style links
  smooth-scroll to the right section, even when navigating there from a
  project detail page.
- `src/data/projects.ts` — all project content lives here, in both languages. Seeded with
  Reading Journal, PyCon LATAM 2025, Pixmatic Studios, Happy Home, and Hack GB; one
  placeholder UX/UI entry ("Project Title") is left to replace as you add more.
- `src/components/ProjectCard.tsx` / `ProjectCarousel.tsx` — the swipeable, scroll-snap
  carousel used for "Selected work" (uniform card size, no page-height growth as you add
  projects) and the grid used on `/work`.
- `src/components/CategoryFilter.tsx` — the pill toggle for Graphic Design / UX/UI Design.

### Adding a new project

Add an entry to the `projects` array in `src/data/projects.ts`. Every text field needs both
`en` and `es` values — there's no automatic translation, so write (or paste a translation of)
the Spanish version yourself.

## Improvements applied from the Figma review

1. **Real image support, not just color blocks.** `Project.image` (cover) and
   `gallery[].image` (detail page) are optional — add a path and the card/hero/gallery
   tile swaps the flat color for your screenshot automatically. Until then, every
   card safely falls back to its brand color so nothing looks broken.
2. **Contrast fix.** Every card and the project-detail hero now sit under a
   `bg-gradient-to-t from-black/65|70` scrim behind the text, so the white title
   stays legible regardless of the underlying color — or, later, a busy photo.
   No more picking text color per swatch by eye.
3. **Typo fixed.** "Projet Type" → "Project Type" everywhere (it only existed in
   one place now: `ProjectCard.tsx`).
4. **Filters instead of duplicated sections.** All Projects no longer hardcodes a
   "Graphic Design" block and a "UX/UI Design" block — it reuses the same
   `CategoryFilter` component as Home, driven by the `category` field on each
   project. Add a project to `projects.ts` and it appears in the right filter
   automatically.
5. **"Hire Me" left as-is but flagged.** See the comment in `Header.tsx` — swap the
   label/link for something like "Contact" if you're not actively freelancing.

## Deploying to GitHub Pages (repo: `Portfolio`)

This project is already configured for a repo named **Portfolio**:

- `vite.config.ts` → `base: '/Portfolio/'`
- `src/main.tsx` → `<BrowserRouter basename="/Portfolio">`
- `public/404.html` + the inline script in `index.html` → the same SPA redirect
  trick you used on Reading Journal, so refreshing `/work/reading-journal`
  doesn't 404.
- `.github/workflows/deploy.yml` → builds and publishes `dist/` to GitHub Pages
  automatically on every push to `main`.

**One-time setup, once you're ready to publish:**

1. Create a new **empty** repo on GitHub named `Portfolio` (no README, no
   .gitignore — you already have those here).
2. In this project folder (PowerShell):

   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/Portfolio.git
   git push -u origin main
   ```

3. On GitHub: go to the repo → **Settings → Pages** → under "Build and
   deployment", set **Source** to **GitHub Actions**. (Not "Deploy from a
   branch" — the workflow already handles the build.)
4. Push triggers the workflow automatically going forward. Check the
   **Actions** tab for build status; once it's green, your site is live at
   `https://<your-username>.github.io/Portfolio/`.

If you ever rename the repo, update the two `/Portfolio/` references above
(`vite.config.ts` and `main.tsx`) to match, or GitHub Pages will 404.
