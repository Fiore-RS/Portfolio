import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Nav links point at hashes on the home page (e.g. "/#work"). When the hash
 * changes — including after navigating here from a different route, like a
 * project detail page — smooth-scroll to that section once it's mounted.
 * With no hash, reset scroll to the top on route changes.
 */
export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0 })
  }, [hash, pathname])

  return null
}
