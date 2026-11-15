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
