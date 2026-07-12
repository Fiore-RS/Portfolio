# Portfolio

React 19 + Vite + TypeScript + Tailwind implementation of your Figma portfolio design.

## Run it

```
npm install
npm run dev
```

## Structure

- `src/data/projects.ts` — all project content lives here. Seeded with Heleani and
  Reading Journal; two placeholder Graphic Design entries are marked "Project Title" —
  replace those with real work or delete them.
- `src/components/ProjectCard.tsx` — the card used on Home and All Projects.
- `src/components/CategoryFilter.tsx` — the pill toggle for Graphic Design / UX/UI Design.
- `src/pages/` — Home, AllProjects (`/work`), ProjectDetail (`/work/:slug`), About, Contact.

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
  trick you used on Reading Journal, so refreshing `/work/heleani-animal-health`
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
