import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * OdiaUI Skeleton — self-contained (no icon imports).
 *
 * Add once to your global CSS (Tailwind v4) for the shimmer sweep:
 *
 * @theme inline {
 *   --animate-shimmer: odia-shimmer 1.8s ease-in-out infinite;
 *   @keyframes odia-shimmer {
 *     100% { transform: translateX(100%); }
 *   }
 * }
 */

/* ── Patterns ──────────────────────────────────────────── */

/** Dash · outlined diamond · dash, tiled along the band (ikat). */
const IKAT_MASK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='16' viewBox='0 0 28 16' fill='none' stroke='black' stroke-width='1.2'%3E%3Cpath d='M0 8H6M22 8H28'/%3E%3Cpath d='M14 2.5L19.5 8L14 13.5L8.5 8Z'/%3E%3Cpath d='M14 5.5L16.5 8L14 10.5L11.5 8Z'/%3E%3C/svg%3E")`

/** Stepped pida silhouette: inset top/bottom, full width through the middle. */
const PIDA_CLIP =
  "[clip-path:polygon(8px_0,calc(100%-8px)_0,calc(100%-8px)_18%,100%_18%,100%_82%,calc(100%-8px)_82%,calc(100%-8px)_100%,8px_100%,8px_82%,0_82%,0_18%,8px_18%)]"

/* ── Art (drawn inside the skeleton) ───────────────────── */
/*
 * All art uses currentColor. Solids are drawn at half opacity and carry an
 * outline plus engraved detail lines at full strength, so the detail reads
 * as carved relief in both light and dark themes.
 */

const FILL = 0.5

/**
 * One Kalinga-style rekha deula, drawn at the origin (base y = 0, centred on x = 0,
 * ≈ 60 wide × 127 tall). From the ground up: plinth, bada with doorway and niches,
 * curved gandi with rekha ribs, bhumi ledges and angashikhara turrets, beki,
 * ribbed amalaka, khapuri, kalasa, ayudha staff and the fluttering patita-pavana flag.
 * `porch` adds a jagamohana — the tiered pidha roof hall in front of the tower.
 */
function Deula({ x, s, porch = false }: { x: number; s: number; porch?: boolean }) {
  return (
    <g
      transform={`translate(${x} 130) scale(${s})`}
      stroke="currentColor"
      strokeWidth={0.9 / s}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* jagamohana porch */}
      {porch && (
        <g>
          <g fill="currentColor" fillOpacity={FILL}>
            <rect x={28} y={-6} width={50} height={6} />
            <rect x={31} y={-30} width={42} height={24} />
            <rect x={29} y={-37} width={46} height={7} />
            <rect x={34} y={-43} width={36} height={6} />
            <rect x={39} y={-48} width={26} height={5} />
            <rect x={44} y={-52} width={16} height={4} />
            <rect x={48} y={-55} width={8} height={3} />
            <ellipse cx={52} cy={-58} rx={3.2} ry={2.2} />
          </g>
          <g fill="none">
            <path d="M47 -6V-19A5 5 0 0 1 57 -19V-6" />
            <path d="M36 -26V-12M68 -26V-12M31 -22H73" />
            <path d="M52 -60V-67" />
          </g>
          <path d="M52.4 -67Q58 -68.5 63 -64.5Q58 -64 52.4 -61.5Z" fill="currentColor" />
        </g>
      )}

      {/* plinth + bada (wall) */}
      <g fill="currentColor" fillOpacity={FILL}>
        <rect x={-30} y={-6} width={60} height={6} />
        <rect x={-26} y={-11} width={52} height={5} />
        <rect x={-22} y={-34} width={44} height={23} />
        {/* gandi (curved tower) */}
        <path d="M-22 -34C-22 -52 -17 -68 -7 -80L-6 -86H6L7 -80C17 -68 22 -52 22 -34Z" />
        {/* angashikhara turrets */}
        <path d="M22 -38C26 -41 27.5 -48 25 -55C23 -48 22.5 -43 22 -38Z" />
        <path d="M-22 -38C-26 -41 -27.5 -48 -25 -55C-23 -48 -22.5 -43 -22 -38Z" />
        <path d="M17 -58C20 -60 21 -65.5 19.5 -71C18 -65 17.5 -62 17 -58Z" />
        <path d="M-17 -58C-20 -60 -21 -65.5 -19.5 -71C-18 -65 -17.5 -62 -17 -58Z" />
        {/* amalaka, khapuri, kalasa */}
        <ellipse cx={0} cy={-90} rx={10} ry={4} />
        <ellipse cx={0} cy={-96.5} rx={5.5} ry={2.5} />
        <path d="M-3 -99C-6.5 -103 -5 -109 0 -109C5 -109 6.5 -103 3 -99Z" />
      </g>

      {/* engraved detail */}
      <g fill="none">
        {/* doorway + niches + pilasters + mouldings */}
        <path d="M-5 -11V-21A5 5 0 0 1 5 -21V-11" />
        <rect x={-20} y={-27} width={5} height={10} />
        <rect x={15} y={-27} width={5} height={10} />
        <path d="M-11 -34V-11M11 -34V-11" />
        <path d="M-22 -30H22M-22 -33H22" />
        {/* rekha ribs */}
        <path d="M-11 -34C-11 -52 -8 -68 -3.5 -80" />
        <path d="M0 -34V-80" />
        <path d="M11 -34C11 -52 8 -68 3.5 -80" />
        {/* bhumi ledges */}
        <path d="M-21 -42H21M-19.5 -50H19.5M-17.5 -58H17.5M-14.5 -66H14.5M-11 -73H11" />
        {/* amalaka ribs */}
        <path d="M-7 -93.5V-86.5M-3.5 -94V-86M0 -94.2V-85.8M3.5 -94V-86M7 -93.5V-86.5" />
        {/* kalasa band + staff */}
        <path d="M-4.2 -103.5H4.2" />
        <path d="M0 -109V-124" />
      </g>

      {/* flag (patita-pavana bana) */}
      <circle cx={0} cy={-124.5} r={1.3} fill="currentColor" />
      <path d="M0.8 -124Q13 -127.5 26 -120Q13 -119 0.8 -113Z" fill="currentColor" />
    </g>
  )
}

// [centre x, scale] on a 330 × 132 canvas; only the main tower gets a porch
const TEMPLES = [
  { x: 42, s: 0.5 },
  { x: 118, s: 1, porch: true },
  { x: 240, s: 0.62 },
  { x: 300, s: 0.42 },
] as const

function TempleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 330 132"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
    >
      <path d="M6 130H324" stroke="currentColor" strokeWidth={1} />
      {TEMPLES.map((t) => (
        <Deula key={t.x} {...t} />
      ))}
    </svg>
  )
}

const SPOKES_24 = Array.from({ length: 24 }, (_, i) => i * 15)
const SPOKES_8 = Array.from({ length: 8 }, (_, i) => i * 45)
const SPOKES_8_OFFSET = SPOKES_8.map((a) => a + 22.5)

/**
 * Konark wheel: double rim with a bead ring, eight bold spokes with
 * medallions, eight slender spokes, lotus petals around a three-ring hub.
 */
function WheelSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* rims */}
      <circle cx="50" cy="50" r="48" strokeWidth="2.2" />
      <circle cx="50" cy="50" r="40.5" strokeWidth="1" />
      {/* bead ring */}
      {SPOKES_24.map((a) => (
        <circle
          key={a}
          cx="50"
          cy="6.5"
          r="1.5"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      {/* bold spokes with medallions */}
      {SPOKES_8.map((a) => (
        <g key={a} transform={`rotate(${a} 50 50)`}>
          <line x1="50" y1="11" x2="50" y2="30" strokeWidth="3.2" />
          <circle cx="50" cy="19" r="3.4" strokeWidth="1" fill="none" />
        </g>
      ))}
      {/* slender spokes */}
      {SPOKES_8_OFFSET.map((a) => (
        <line key={a} x1="50" y1="12" x2="50" y2="30" strokeWidth="1" transform={`rotate(${a} 50 50)`} />
      ))}
      {/* lotus petals */}
      {SPOKES_8_OFFSET.map((a) => (
        <path
          key={a}
          d="M50 38Q54.5 33 50 27Q45.5 33 50 38Z"
          strokeWidth="0.9"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      {/* hub */}
      <circle cx="50" cy="50" r="13" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="8" strokeWidth="1" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Deula doorway arch: three nested arch mouldings, a keystone diamond, threshold steps. */
function ArchSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M2 80V32A28 28 0 0 1 58 32V80Z" fill="currentColor" fillOpacity={FILL} />
      <path d="M8 80V32A22 22 0 0 1 52 32V80" fill="none" />
      <path d="M14 80V32A16 16 0 0 1 46 32V80" fill="none" />
      <path d="M30 13L34.5 19.5L30 26L25.5 19.5Z" fill="currentColor" />
      <path d="M30 32V80" fill="none" />
      <path d="M2 72H58M2 76H58" fill="none" />
    </svg>
  )
}

/** Inset diamond mouldings, drawn square (the skeleton itself is rotated 45°). */
function DiamondSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
    >
      <rect x="14" y="14" width="72" height="72" rx="3" />
      <rect x="30" y="30" width="40" height="40" rx="2" />
      <circle cx="50" cy="50" r="6" />
      <circle cx="50" cy="50" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ── Variants ──────────────────────────────────────────── */

const skeletonVariants = cva(
  "relative overflow-hidden bg-foreground/[0.08] dark:bg-foreground/[0.12]",
  {
    variants: {
      variant: {
        /** Classic shadcn pulse */
        default: "animate-pulse",
        /** Soft light sweep */
        shimmer:
          "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-background/70 before:to-transparent dark:before:via-foreground/10",
        /** Ikat dash-and-diamond border band */
        ikat: "animate-pulse after:absolute after:inset-0 after:bg-foreground/20 after:[mask-image:var(--ikat-mask)] after:[mask-position:center] after:[mask-repeat:repeat-x] after:[mask-size:28px_16px]",
        /** Stepped pida silhouette */
        pida: `animate-pulse ${PIDA_CLIP}`,
      },
      shape: {
        /** Free-form: size it with className */
        none: "rounded-md",
        /** Konark wheel */
        chakra: "aspect-square rounded-full",
        /** Deula doorway arch */
        arch: "aspect-[3/4] rounded-t-full rounded-b-md",
        /** Rotated square */
        diamond: "aspect-square rotate-45 rounded-[3px]",
        /** Stepped block */
        pida: `animate-pulse ${PIDA_CLIP}`,
        /** Thin text line */
        line: "h-2.5 w-full rounded-full",
      },
    },
    defaultVariants: { variant: "default", shape: "none" },
  }
)

type SkeletonArt = "temple" | "wheel" | "arch"

type SkeletonProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonVariants> & {
    /**
     * Faint artwork inside the skeleton, for media placeholders.
     * Pass one value or an array, e.g. ["temple", "wheel"].
     * - temple: Kalinga deula towers with flags and a pidha porch, along the bottom
     * - wheel:  Konark wheel cropped by the top-right corner
     * - arch:   nested deula doorway arch standing at the bottom centre
     */
    art?: SkeletonArt | SkeletonArt[]
  }

function Skeleton({
  className,
  variant,
  shape,
  art,
  style,
  children,
  ...props
}: SkeletonProps) {
  const arts = Array.isArray(art) ? art : art ? [art] : []

  return (
    <div
      data-slot="skeleton"
      data-variant={variant ?? "default"}
      data-shape={shape ?? "none"}
      aria-hidden
      className={cn(skeletonVariants({ variant, shape }), className)}
      style={{ ["--ikat-mask" as string]: IKAT_MASK, ...style }}
      {...props}
    >
      {shape === "chakra" && (
        <WheelSilhouette className="inset-0 size-full text-foreground/20" />
      )}

      {shape === "diamond" && (
        <DiamondSilhouette className="inset-0 size-full text-foreground/20" />
      )}

      {arts.includes("wheel") && (
        <WheelSilhouette className="-right-3 -top-3 size-16 text-foreground/15" />
      )}

      {arts.includes("temple") && (
        <TempleSilhouette className="bottom-0 left-1/2 h-[80%] w-auto -translate-x-1/2 text-foreground/[0.16]" />
      )}

      {arts.includes("arch") && (
        <ArchSilhouette className="bottom-0 left-1/2 h-[88%] w-auto -translate-x-1/2 text-foreground/[0.14]" />
      )}

      {children}
    </div>
  )
}

export { Skeleton, skeletonVariants }
export type { SkeletonProps }

/* ── Usage ──────────────────────────────────────────────────
<Skeleton className="h-4 w-[250px]" />
<Skeleton variant="shimmer" className="h-4 w-[250px]" />
<Skeleton variant="ikat" className="h-6 w-[250px]" />
<Skeleton variant="pida" className="h-6 w-[250px]" />

<Skeleton shape="chakra" className="size-12" />
<Skeleton shape="arch" className="w-14" />
<Skeleton shape="diamond" className="size-10" />
<Skeleton shape="pida" className="h-12 w-28" />
<Skeleton shape="line" />

// Card media (matches the design)
<Skeleton variant="shimmer" art={["temple", "wheel"]} className="h-40 w-full rounded-xl" />
<Skeleton art="arch" className="h-40 w-full rounded-xl" />
*/
