/**
 * Resolves a path inside /public against Vite's configured `base`
 * (see vite.config.ts — it's set to '/Portfolio/' for GitHub Pages).
 * Without this, a hardcoded path like "/projects/x.png" would 404 both in
 * `npm run dev` and once deployed, since the site itself is served under
 * /Portfolio/ rather than the domain root.
 */
export function assetUrl(path?: string): string | undefined {
  if (!path) return undefined
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
