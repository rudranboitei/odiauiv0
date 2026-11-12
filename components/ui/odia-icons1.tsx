import * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

const icon = (p: IconProps): IconProps => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...p,
})

const SPOKES = Array.from({ length: 8 }, (_, i) => i * 45)

/* ── Odia icon set ─────────────────────────────────────── */

export function ChakraIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="2.4" />
      {SPOKES.map((a) => (
        <line key={a} x1="12" y1="9.6" x2="12" y2="2.5" transform={`rotate(${a} 12 12)`} />
      ))}
    </svg>
  )
}

export function DeulaIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="12" cy="2.6" r="0.9" />
      <path d="M12 3.5V5.2" />
      <path d="M7 21C7 14 8.6 8.6 12 5.2C15.4 8.6 17 14 17 21" />
      <path d="M8.2 13.5H15.8M9 9.5H15" />
      <path d="M10 21V18.2a2 2 0 0 1 4 0V21" />
      <path d="M4 21H20" />
    </svg>
  )
}
export const TempleIcon = DeulaIcon

export function PadmaIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 3.5C14.6 6.5 14.6 10.5 12 14C9.4 10.5 9.4 6.5 12 3.5Z" />
      <path d="M12 14C9 14 6.2 12.2 5.2 8.4C8.6 8.4 11 10.4 12 14Z" />
      <path d="M12 14C15 14 17.8 12.2 18.8 8.4C15.4 8.4 13 10.4 12 14Z" />
      <path d="M12 14C8 15.2 4.2 13.8 2.6 10.6" />
      <path d="M12 14C16 15.2 19.8 13.8 21.4 10.6" />
      <path d="M12 14V20M7 20.5H17" />
    </svg>
  )
}

export function BanaIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M6 3V21" />
      <path d="M6 4H17.5L14.2 8L17.5 12H6" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M5 12H19M13 6L19 12L13 18" />
    </svg>
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M3.5 6H20.5M9 6V4.2C9 3.5 9.5 3 10.2 3H13.8C14.5 3 15 3.5 15 4.2V6" />
      <path d="M5.5 6L6.4 19.6C6.5 20.4 7.1 21 7.9 21H16.1C16.9 21 17.5 20.4 17.6 19.6L18.5 6" />
      <path d="M10 10.5V16.5M14 10.5V16.5" />
    </svg>
  )
}

export function SpinnerIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 3A9 9 0 1 0 21 12" />
    </svg>
  )
}

/* ── Decorative art used inside buttons ────────────────── */

/** Konark-style wheel, drawn to be cropped by the button edge. */
export function WheelArt(props: IconProps) {
  const beads = Array.from({ length: 24 }, (_, i) => i * 15)
  const thin = SPOKES.map((a) => a + 22.5)
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="50" cy="50" r="48" />
      <circle cx="50" cy="50" r="43" />
      {beads.map((a) => (
        <circle key={a} cx="50" cy="6.4" r="1.3" transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="37" />
      <circle cx="50" cy="50" r="11" />
      <circle cx="50" cy="50" r="6" />
      <circle cx="50" cy="50" r="2" />
      {SPOKES.map((a) => (
        <path key={a} d="M46.5 39V19Q50 14 53.5 19V39M46.5 19V13M53.5 19V13" transform={`rotate(${a} 50 50)`} />
      ))}
      {thin.map((a) => (
        <line key={a} x1="50" y1="39" x2="50" y2="14" strokeWidth={0.7} transform={`rotate(${a} 50 50)`} />
      ))}
    </svg>
  )
}

/** Rekha deula tower with jagamohana porch. */
export function TempleArt(props: IconProps) {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {/* ground */}
      <path d="M2 62H78M6 58H74" />
      {/* deula tower */}
      <path d="M30 58C30 40 34 22 46 10C58 22 62 40 62 58" />
      <path d="M40 20C36 32 35 46 35 58M52 20C56 32 57 46 57 58M46 12V58" />
      <path d="M34 46H58M36 38H56M38 30H54M41 22H51" />
      <ellipse cx="46" cy="10" rx="6" ry="1.6" />
      <path d="M46 8.4V4" />
      <circle cx="46" cy="3" r="1.5" />
      <path d="M43 58V52a3 3 0 0 1 6 0V58" />
      {/* jagamohana porch */}
      <path d="M6 58V46H30" />
      <path d="M8 46L10 40H27M11 40L13 35H27M14 35L16 31H27" />
      <path d="M21 31V27" />
      <path d="M16 58V52a3 3 0 0 1 6 0V58" />
    </svg>
  )
}
