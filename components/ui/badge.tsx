import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Badge
 *
 * shadcn tokens only (primary / secondary / destructive / muted /
 * border). Success and warning have no shadcn token, so they use
 * the Tailwind emerald / amber scale with dark-mode pairs.
 * Icons are drawn inline in currentColor — no icon imports.
 * ─────────────────────────────────────────────────────────── */

/* ── Cultural icons ────────────────────────────────────── */

type IconProps = React.SVGProps<SVGSVGElement>

const base32 = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

const SPOKES_8 = Array.from({ length: 8 }, (_, i) => i * 45)
const SPOKES_8_OFFSET = SPOKES_8.map((a) => a + 22.5)

/** Konark wheel */
function ChakraIcon(props: IconProps) {
  return (
    <svg {...base32} {...props}>
      <circle cx="16" cy="16" r="14.2" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="11.6" strokeWidth="1" />
      {SPOKES_8.map((a) => (
        <line key={a} x1="16" y1="5.6" x2="16" y2="11.4" strokeWidth="2.6" transform={`rotate(${a} 16 16)`} />
      ))}
      {SPOKES_8_OFFSET.map((a) => (
        <line key={a} x1="16" y1="5.6" x2="16" y2="11.4" strokeWidth="1.1" transform={`rotate(${a} 16 16)`} />
      ))}
      <circle cx="16" cy="16" r="4.6" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Rekha deula with flag */
function DeulaIcon(props: IconProps) {
  return (
    <svg {...base32} {...props}>
      <path d="M4.5 29.5H27.5M7 27H25" />
      <path d="M10 27V21H22V27" />
      <path d="M14.5 27V24.6A1.5 1.5 0 0 1 17.5 24.6V27" />
      <path d="M10 21C10 15.5 12 11 14.5 8.6L15 6.8H17L17.5 8.6C20 11 22 15.5 22 21" />
      <path d="M16 21V8.6M10.7 17.6H21.3M11.8 14.2H20.2M13.2 11.2H18.8" strokeWidth="1.1" />
      <ellipse cx="16" cy="5.7" rx="3" ry="1.1" />
      <path d="M16 4.6V1.6" />
      <path d="M16.2 1.7L21.2 2.9L16.2 4.1Z" fill="currentColor" />
    </svg>
  )
}

/** Odissi dancer in tribhangi */
function OdissiIcon(props: IconProps) {
  return (
    <svg {...base32} {...props}>
      <path d="M13.6 4.6L14.4 2.3L16 3.4L17.6 2.3L18.4 4.6" />
      <circle cx="16" cy="6.8" r="2.2" fill="currentColor" />
      <path d="M16 9.2C14.8 12 17.2 14.6 16 18" />
      <path d="M15.6 10.4C12.8 9.6 10.8 7.4 9.6 4.8" />
      <path d="M16.4 10.6C19.4 11.6 21.8 11 23.8 8.4" />
      <path d="M16 17.4C12.6 18.8 11 23.4 10 28H22C21.6 24 19.8 18.8 16 17.4Z" fill="currentColor" fillOpacity={0.35} />
      <path d="M13 28V30.5M19.5 28L21 30.5" />
      <path d="M12.4 22.2H19.4" strokeWidth="1.1" />
    </svg>
  )
}

/** Ikat: four diamonds around a core */
function IkatIcon(props: IconProps) {
  return (
    <svg {...base32} strokeWidth={1.4} {...props}>
      <path d="M16 2L20.2 6.8L16 11.6L11.8 6.8Z" />
      <path d="M30 16L25.2 20.2L20.4 16L25.2 11.8Z" />
      <path d="M16 30L11.8 25.2L16 20.4L20.2 25.2Z" />
      <path d="M2 16L6.8 11.8L11.6 16L6.8 20.2Z" />
      <path d="M16 10.8L21.2 16L16 21.2L10.8 16Z" fill="currentColor" />
    </svg>
  )
}

/** Jagannath: wide eyes, brows, crown */
function JagannathIcon(props: IconProps) {
  return (
    <svg {...base32} {...props}>
      <path d="M10.5 5L16 1.8L21.5 5" />
      <path d="M3.8 10.4C8 5.8 13 6.4 15.6 10.4M28.2 10.4C24 5.8 19 6.4 16.4 10.4" />
      <circle cx="9.6" cy="16" r="5" />
      <circle cx="22.4" cy="16" r="5" />
      <circle cx="9.6" cy="16" r="2.4" />
      <circle cx="22.4" cy="16" r="2.4" />
      <circle cx="9.6" cy="16" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="22.4" cy="16" r="0.9" fill="currentColor" stroke="none" />
      <path d="M16 14V21M12.6 25.6H19.4" />
    </svg>
  )
}

/** Pattachitra medallion: framed arch with a bloom */
function PattachitraIcon(props: IconProps) {
  return (
    <svg {...base32} {...props}>
      <circle cx="16" cy="16" r="14" />
      <circle cx="16" cy="16" r="11.6" strokeWidth="1" />
      <path d="M9.6 24.4V15.4A6.4 6.4 0 0 1 22.4 15.4V24.4" />
      <path d="M12.4 24.4V15.6A3.6 3.6 0 0 1 19.6 15.6V24.4" strokeWidth="1.1" />
      <path d="M16 6.6L17.6 8.6L16 10.6L14.4 8.6Z" fill="currentColor" />
      <path d="M8 24.4H24" />
    </svg>
  )
}

/** Lotus */
function PadmaIcon(props: IconProps) {
  return (
    <svg {...base32} {...props}>
      <path d="M16 4.5C19.2 8.6 19.2 13.8 16 19C12.8 13.8 12.8 8.6 16 4.5Z" />
      <path d="M16 19C12.4 19 8.8 16.9 7.8 12.4C11.9 12.4 15 14.6 16 19Z" />
      <path d="M16 19C19.6 19 23.2 16.9 24.2 12.4C20.1 12.4 17 14.6 16 19Z" />
      <path d="M16 19C11.4 20.2 6.2 18.6 3.8 13.6" />
      <path d="M16 19C20.6 20.2 25.8 18.6 28.2 13.6" />
      <path d="M6.5 23.5C9.6 25.2 12.8 26.2 16 26.2C19.2 26.2 22.4 25.2 25.5 23.5" />
      <path d="M11.5 28.8H20.5" />
    </svg>
  )
}

/** Bana: eight-diamond rosette */
function BanaIcon(props: IconProps) {
  return (
    <svg {...base32} strokeWidth={1.4} {...props}>
      {SPOKES_8.map((a) => (
        <path
          key={a}
          d="M16 2.6L18.6 8.2L16 13.8L13.4 8.2Z"
          fill={a % 90 === 0 ? "currentColor" : "none"}
          transform={`rotate(${a} 16 16)`}
        />
      ))}
      <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Dotted loading ring */
function SpinnerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      {SPOKES_8.map((a, i) => (
        <circle key={a} cx="12" cy="3.6" r="1.7" opacity={0.25 + (i / 7) * 0.75} transform={`rotate(${a} 12 12)`} />
      ))}
    </svg>
  )
}

const BADGE_ICONS = {
  chakra: ChakraIcon,
  deula: DeulaIcon,
  odissi: OdissiIcon,
  ikat: IkatIcon,
  jagannath: JagannathIcon,
  pattachitra: PattachitraIcon,
  padma: PadmaIcon,
  bana: BanaIcon,
} as const

type BadgeIconName = keyof typeof BADGE_ICONS

function BadgeIcon({ name, ...props }: IconProps & { name: BadgeIconName }) {
  const Icon = BADGE_ICONS[name]
  return <Icon {...props} />
}

/* ── Variants ──────────────────────────────────────────── */

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-full border border-transparent font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline: "border-0 bg-card text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.06)] [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
        success:
          "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 [a]:hover:bg-emerald-500/20",
        warning:
          "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 [a]:hover:bg-amber-500/20",
      },
      size: {
        xs: "h-4 gap-1 px-1.5 text-[10px] [&>svg]:size-2.5",
        sm: "h-5 gap-1 px-2 text-xs [&>svg]:size-3",
        md: "h-6 gap-1.5 px-2.5 text-sm [&>svg]:size-3.5",
        lg: "h-7 gap-1.5 px-3 text-sm [&>svg]:size-4",
        xl: "h-8 gap-2 px-3.5 text-base [&>svg]:size-5",
      },
      /** Square, icon-only badge */
      iconOnly: {
        true: "aspect-square px-0",
        false: "",
      },
    },
    defaultVariants: { variant: "default", size: "sm", iconOnly: false },
  }
)

const dotSize = {
  xs: "size-1",
  sm: "size-1.5",
  md: "size-1.5",
  lg: "size-2",
  xl: "size-2",
} as const

type BadgeProps = useRender.ComponentProps<"span"> &
  Omit<VariantProps<typeof badgeVariants>, "iconOnly"> & {
    /** Cultural icon shown before the label. With no label it becomes an icon-only badge. */
    icon?: BadgeIconName
    /** Leading status dot in the badge colour. */
    dot?: boolean
    /** Dotted spinner in place of the icon / dot. */
    loading?: boolean
    disabled?: boolean
  }

function Badge({
  className,
  variant = "default",
  size = "sm",
  icon,
  dot,
  loading,
  disabled,
  children,
  render,
  ...props
}: BadgeProps) {
  const iconOnly = Boolean(icon) && (children === undefined || children === null || children === false)
  const Icon = icon ? BADGE_ICONS[icon] : null

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, size, iconOnly }), className),
        "aria-busy": loading || undefined,
        ...(disabled ? { "data-disabled": "" } : {}),
        children: (
          <>
            {loading ? (
              <SpinnerIcon className="animate-spin" />
            ) : Icon ? (
              <Icon data-icon="inline-start" />
            ) : dot ? (
              <span aria-hidden className={cn("shrink-0 rounded-full bg-current", dotSize[size ?? "sm"])} />
            ) : null}
            {children}
          </>
        ),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
      size,
    },
  })
}

export { Badge, BadgeIcon, badgeVariants, BADGE_ICONS }
export type { BadgeProps, BadgeIconName }

/* ── Usage ──────────────────────────────────────────────────
<Badge dot>Default</Badge>
<Badge variant="secondary" dot>Secondary</Badge>
<Badge variant="success" dot>Success</Badge>

<Badge icon="chakra">Chakra</Badge>
<Badge icon="deula">Deula</Badge>
<Badge icon="odissi">Odissi</Badge>
<Badge icon="ikat">Ikat</Badge>
<Badge icon="jagannath">Jagannath</Badge>
<Badge icon="pattachitra">Pattachitra</Badge>
<Badge icon="padma">Padma</Badge>
<Badge icon="bana">Bana</Badge>

<Badge size="xs">XS</Badge> <Badge size="lg">LG</Badge>
<Badge icon="chakra" size="xl" />            // icon-only

<Badge loading>Loading</Badge>
<Badge disabled dot>Disabled</Badge>
*/
