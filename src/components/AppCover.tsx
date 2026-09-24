import { useId } from 'react'
import type { AppCoverVariant } from '../data/types'
import { assetUrl } from '../lib/assetUrl'

/**
 * Generated covers for apps/websites. Instead of screenshots (which go stale
 * after every UI change), each cover is built from the app's own identity:
 * its palette, a pattern tied to its concept, and its logo/icon on top.
 * Everything is SVG/CSS, so it scales to any card or hero size.
 */
export default function AppCover({ variant }: { variant: AppCoverVariant }) {
  switch (variant) {
    case 'teleo':
      return <TeleoCover />
    case 'sobres':
      return <SobresCover />
    case 'book-tracker':
      return <BookTrackerCover />
  }
}

/** Shared slot that centers the logo in the upper part, clear of the title overlay. */
function LogoSlot({ bottom = '30%', children }: { bottom?: string; children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-0 top-0 flex items-center justify-center" style={{ bottom }}>
      {children}
    </div>
  )
}

/* ─────────────────────────── Teleo ───────────────────────────
   "Mañana con café": cream notebook paper with ruled lines and a
   margin, and a page carrying Teleo's signature dog-ear corner. */
function TeleoCover() {
  const id = useId().replace(/:/g, '')
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at 72% 22%, #EFD8D4 0%, #F4ECE0 62%)' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id={`ruled-${id}`} width="12" height="30" patternUnits="userSpaceOnUse">
            <line x1="0" y1="29.5" x2="12" y2="29.5" stroke="#E8DACB" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ruled-${id})`} />
        <line x1="44" y1="0" x2="44" y2="100%" stroke="#D0A0A4" strokeWidth="1.5" />
        <line x1="49" y1="0" x2="49" y2="100%" stroke="#D0A0A4" strokeWidth="1.5" />
      </svg>

      <LogoSlot>
        <div className="relative aspect-[5/6] h-[64%] max-h-48">
          {/* Back page for depth */}
          <div className="absolute inset-0 rotate-[7deg] rounded-lg bg-[#F5ECDF] shadow-md" />
          {/* Front page with dog-ear */}
          <div className="absolute inset-0 -rotate-[4deg] rounded-lg rounded-tr-[18%] bg-[#FCF8F0] shadow-lg">
            <svg viewBox="0 0 100 100" className="absolute right-0 top-0 w-[30%]">
              <defs>
                <clipPath id={`ear-${id}`}>
                  <path d="M0,0 L78,0 Q100,0 100,22 L100,100 L0,100 Z" />
                </clipPath>
              </defs>
              <g clipPath={`url(#ear-${id})`}>
                <polygon points="0,0 50,50 0,100" fill="#FCF8F0" />
                <polygon points="0,100 50,50 100,100" fill="#E8DACB" />
                <polygon points="0,0 100,0 50,50" fill="#7A2E3A" />
                <polygon points="100,0 100,100 50,50" fill="#58212A" />
              </g>
            </svg>
            <img
              src={assetUrl('/projects/teleo/logo-icon.svg')}
              alt=""
              className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </LogoSlot>
    </div>
  )
}

/* ─────────────────────────── Sobres ───────────────────────────
   Green → celeste (the app's "economy" palette) with a tiled pattern
   of envelopes, and the app icon front and center. */
function SobresCover() {
  const id = useId().replace(/:/g, '')
  const envelope = (x: number, y: number) => (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#f7f5f0" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <rect width="36" height="26" rx="3" />
      <path d="M1.5 2 18 14.5 34.5 2" />
    </g>
  )
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(135deg, #2f5a42 0%, oklch(38% 0.09 152) 40%, oklch(50% 0.09 227) 100%)' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.14]">
        <defs>
          <pattern id={`env-${id}`} width="96" height="72" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
            {envelope(8, 6)}
            {envelope(56, 42)}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#env-${id})`} />
      </svg>

      <LogoSlot>
        <svg viewBox="0 0 32 32" className="h-[52%] max-h-36 drop-shadow-xl">
          <rect width="32" height="32" rx="8" fill="#f7f5f0" />
          <path
            d="M7 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11Z"
            fill="none"
            stroke="#2f5a42"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M7.5 10.5 16 17l8.5-6.5" fill="none" stroke="#2f5a42" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </LogoSlot>
    </div>
  )
}

/* ───────────────────────── Book Tracker ─────────────────────────
   Parchment with a blush glow, a shelf of spines in the app's earthy
   palette, and an open book (the app never had a logo beyond 📖). */
const SPINE_COLORS = ['#7d9d6e', '#d9a05b', '#e3b8c4', '#6b4a34', '#8a7862', '#a89577', '#5c3d29', '#a9c19a', '#5c4632']

// Deterministic pseudo-random shelf so the cover is identical on every render.
const SPINES = (() => {
  let seed = 7
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  const books: { x: number; w: number; h: number; color: string; tilt: number }[] = []
  let x = 0
  let i = 0
  while (x < 1200) {
    const w = 20 + Math.round(rand() * 20)
    const h = 90 + Math.round(rand() * 70)
    const tilt = i % 11 === 6 ? -8 : 0
    books.push({ x, w, h, color: SPINE_COLORS[Math.floor(rand() * SPINE_COLORS.length)], tilt })
    x += w + (tilt ? 16 : 3)
    i++
  }
  return books
})()

function BookTrackerCover() {
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at 50% 30%, #f3dde2 0%, #fbf5e9 45%, #f6efe2 100%)' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[38%] w-full">
        {SPINES.map((b, i) => (
          <g key={i} transform={b.tilt ? `rotate(${b.tilt} ${b.x} 188)` : undefined}>
            <rect x={b.x} y={188 - b.h} width={b.w} height={b.h} rx="2" fill={b.color} />
            <rect x={b.x + 4} y={188 - b.h + 14} width={b.w - 8} height="3" rx="1.5" fill="#fbf5e9" opacity="0.45" />
          </g>
        ))}
        <rect x="0" y="188" width="1200" height="12" fill="#4a3527" />
      </svg>

      <LogoSlot bottom="36%">
        <div className="flex aspect-square h-[62%] max-h-36 items-center justify-center rounded-full bg-[#5c3d29] shadow-xl">
          <svg viewBox="0 0 64 48" className="w-[62%]" fill="none" stroke="#fbf5e9" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
            <path d="M32 10C25 5 15 4 5 6v34c10-2 20-1 27 4 7-5 17-6 27-4V6c-10-2-20-1-27 4Z" />
            <path d="M32 10v34" />
            <path d="M11 14c5-1 10 0 15 2M11 21c5-1 10 0 15 2M38 16c5-2 10-3 15-2M38 23c5-2 10-3 15-2" strokeWidth="1.8" opacity="0.7" />
          </svg>
        </div>
      </LogoSlot>
    </div>
  )
}
