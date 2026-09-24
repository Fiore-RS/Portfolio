import { useLayoutEffect } from 'react'

/**
 * Scroll-reveal for any element marked with `data-reveal`.
 *
 * - Elements fade/rise in the first time they enter the viewport.
 * - Stagger with an inline CSS var: style={{ '--reveal-delay': '120ms' }}.
 * - A MutationObserver picks up elements mounted later (route changes,
 *   filter changes), so pages don't need to wire anything up themselves.
 * - Users with prefers-reduced-motion (or browsers without
 *   IntersectionObserver) never get the hidden state — content just shows.
 *
 * The "revealed" flag is a data attribute, not a class, so React re-renders
 * never wipe it.
 */
export function useScrollReveal() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).dataset.revealed = ''
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')
        .forEach((el) => io.observe(el))
    }

    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
