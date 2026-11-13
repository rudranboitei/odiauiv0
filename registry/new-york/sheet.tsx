"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Sheet                                                              */
/*  Same Base UI API as shadcn/ui Sheet. Colours come only from shadcn theme  */
/*  tokens (primary, muted, popover, border...), so it follows your theme in  */
/*  light and dark mode.                                                      */
/*                                                                            */
/*  Odia additions:                                                           */
/*   - SheetContent  watermark  "deula" (Konark temple) | "chakra" — faint,   */
/*                              on by default, opt-out-able                   */
/*   - SheetContent  ornament   Ikat diamond strip on the bottom edge         */
/*   - SheetContent  handle     grabber bar for bottom sheets (visual only)   */
/*   - SheetHeader   icon       leading icon, e.g. <ChakraIcon /> or          */
/*                              <PadmaIcon />                                 */
/*   - SheetOrnament            the strip as a standalone divider             */
/*   - Left sheets put the close button at the top-left, like the poster.     */
/* -------------------------------------------------------------------------- */

type SheetSide = "top" | "right" | "bottom" | "left"
type SheetWatermark = "none" | "deula" | "chakra"

function steps(count: number) {
  return Array.from({ length: count }, (_, i) => (360 / count) * i)
}

/* --------------------------------- Icons ----------------------------------- */


/** Konark wheel icon. Use in SheetHeader's icon slot. */
function ChakraIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="7.6" strokeWidth="0.9" />
      <circle cx="12" cy="12" r="1.9" fill="currentColor" />
      {steps(8).map((angle) => (
        <line
          key={angle}
          x1="12"
          y1="4.4"
          x2="12"
          y2="9.8"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      {steps(8).map((angle) => (
        <circle
          key={`bead-${angle}`}
          cx="12"
          cy="2"
          r="0.7"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${angle + 22.5} 12 12)`}
        />
      ))}
    </svg>
  )
}

/** Lotus (padma) icon. Use in SheetHeader's icon slot. */
function PadmaIcon({ className, ...props }: React.ComponentProps<"svg">) {
  const petal = "M12 3.5c2.3 3.3 2.3 7 0 11.5-2.3-4.5-2.3-8.2 0-11.5Z"
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d={petal} transform="rotate(-66 12 17)" fill="currentColor" fillOpacity="0.15" />
      <path d={petal} transform="rotate(66 12 17)" fill="currentColor" fillOpacity="0.15" />
      <path d={petal} transform="rotate(-33 12 17)" fill="currentColor" fillOpacity="0.15" />
      <path d={petal} transform="rotate(33 12 17)" fill="currentColor" fillOpacity="0.15" />
      <path d={petal} fill="currentColor" fillOpacity="0.15" />
      <path d="M4.5 19.8c4.5 2.2 10.5 2.2 15 0" />
    </svg>
  )
}

/* ------------------------------- Watermarks -------------------------------- */

/*
 * Konark Sun Temple jagamohana (pidha deula): a stepped pyramidal roof made of
 * three tiers of receding slabs, each tier separated by a recessed band, then
 * the neck, amalaka and kalasha. It stands on a moulded plinth between rows of
 * the giant stone chariot wheels.
 */
const TEMPLE_CX = 100
const TEMPLE_WALL_TOP = 90

type TempleBlock = { w: number; h: number; recess?: boolean }

const TEMPLE_BLOCKS: TempleBlock[] = [
  // tier 1
  { w: 34, h: 4 },
  { w: 31, h: 4 },
  { w: 28, h: 4 },
  { w: 25, h: 4 },
  { w: 22, h: 4 },
  { w: 18, h: 6, recess: true },
  // tier 2
  { w: 21, h: 4 },
  { w: 18, h: 4 },
  { w: 15, h: 4 },
  { w: 12, h: 4 },
  { w: 9.5, h: 5, recess: true },
  // tier 3
  { w: 12, h: 4 },
  { w: 9, h: 4 },
  { w: 6.5, h: 4 },
  // neck
  { w: 4, h: 4, recess: true },
]

const TEMPLE_ROOF = (() => {
  let y = TEMPLE_WALL_TOP
  return TEMPLE_BLOCKS.map((block) => {
    y -= block.h
    return { ...block, y }
  })
})()

/** One Konark chariot wheel: rim, inner ring, 8 spokes with medallions, hub. */
function TempleWheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g
      transform={`translate(${cx} ${cy}) scale(${r / 12})`}
      fill="none"
      stroke="currentColor"
    >
      <circle r="11" strokeWidth="2.2" />
      <circle r="8.2" strokeWidth="0.8" />
      {steps(8).map((angle) => (
        <line
          key={angle}
          y1="-8.2"
          y2="-2.4"
          strokeWidth="1.8"
          transform={`rotate(${angle})`}
        />
      ))}
      {steps(8).map((angle) => (
        <circle
          key={`medallion-${angle}`}
          cy="-5.6"
          r="0.9"
          fill="var(--popover)"
          stroke="none"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="2.6" fill="currentColor" stroke="none" />
      <circle r="0.9" fill="var(--popover)" stroke="none" />
    </g>
  )
}

function SheetWatermarkArt({
  variant,
}: {
  variant: Exclude<SheetWatermark, "none">
}) {
  return (
    <div
      data-slot="sheet-watermark"
      data-variant={variant}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] text-foreground opacity-[0.06] dark:opacity-[0.09]"
    >
      {variant === "deula" ? (
        /* Konark Sun Temple: stepped pyramidal roof, plinth and chariot wheels */
        <svg
          viewBox="0 0 200 126"
          fill="currentColor"
          focusable="false"
          className="absolute right-2 bottom-0 h-40 w-auto"
        >
          {/* Chariot wheels flanking the sanctuary */}
          {[22, 50, 150, 178].map((cx) => (
            <TempleWheel key={cx} cx={cx} cy={102} r={12} />
          ))}

          {/* Moulded plinth (jagati) */}
          <rect x="6" y="114" width="188" height="3.6" />
          <line
            x1="3"
            y1="119.8"
            x2="197"
            y2="119.8"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeDasharray="3 2"
          />
          <rect x="0" y="122" width="200" height="4" />

          {/* Sanctuary wall with doorway and pilaster lines */}
          <rect x={TEMPLE_CX - 30} y={TEMPLE_WALL_TOP} width="60" height="24" />
          <path
            d={`M${TEMPLE_CX - 7} 114 V101 A7 7 0 0 1 ${TEMPLE_CX + 7} 101 V114 Z`}
            fill="var(--popover)"
            stroke="none"
          />
          <path
            d={[-24, -17, 17, 24]
              .map((dx) => `M${TEMPLE_CX + dx} 93.5 V112`)
              .join(" ")}
            fill="none"
            stroke="var(--popover)"
            strokeWidth="1"
          />

          {/* Stepped pyramidal roof: slabs with a hairline gap, recessed bands with niches */}
          {TEMPLE_ROOF.map((block) => (
            <rect
              key={block.y}
              x={TEMPLE_CX - block.w}
              y={block.y}
              width={block.w * 2}
              height={block.recess ? block.h : block.h - 0.9}
            />
          ))}
          {TEMPLE_ROOF.filter((block) => block.recess && block.w >= 9).map(
            (block) => (
              <path
                key={`niche-${block.y}`}
                d={[-0.5, 0, 0.5]
                  .map(
                    (k) =>
                      `M${TEMPLE_CX + k * block.w} ${block.y + 0.8} V${block.y + block.h - 0.8}`
                  )
                  .join(" ")}
                fill="none"
                stroke="var(--popover)"
                strokeWidth="1"
              />
            )
          )}

          {/* Amalaka (ribbed disc), kalasha (pot) and the chakra finial */}
          <ellipse cx={TEMPLE_CX} cy="24" rx="8" ry="3" />
          <path
            d={[-4.5, 0, 4.5]
              .map((dx) => `M${TEMPLE_CX + dx} 22 V26`)
              .join(" ")}
            fill="none"
            stroke="var(--popover)"
            strokeWidth="0.8"
          />
          <rect x={TEMPLE_CX - 1.4} y="19" width="2.8" height="2.4" />
          <ellipse cx={TEMPLE_CX} cy="16" rx="3.2" ry="3.6" />
          <rect x={TEMPLE_CX - 0.6} y="9" width="1.2" height="4" />
          <circle
            cx={TEMPLE_CX}
            cy="6"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx={TEMPLE_CX} cy="6" r="0.9" />
        </svg>
      ) : (
        /* Konark wheel, cropped by the sheet corner */
        <svg
          viewBox="0 0 100 100"
          focusable="false"
          className="absolute -right-8 -bottom-8 size-44"
        >
          <g fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="3" />
            <circle cx="50" cy="50" r="38" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="9" strokeWidth="3" />
            {steps(16).map((angle) => (
              <line
                key={angle}
                x1="50"
                y1="12"
                x2="50"
                y2="41"
                strokeWidth="2"
                transform={`rotate(${angle} 50 50)`}
              />
            ))}
          </g>
          {steps(16).map((angle) => (
            <circle
              key={angle}
              cx="50"
              cy="8"
              r="1.6"
              fill="currentColor"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      )}
    </div>
  )
}

/* -------------------------------- Primitives ------------------------------- */

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ornament = false,
  watermark = "deula",
  handle = false,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: SheetSide
  showCloseButton?: boolean
  /** Ikat diamond strip on the bottom edge. */
  ornament?: boolean
  /** Faint Konark temple behind the content. On by default. */
  watermark?: SheetWatermark
  /** Grabber bar at the top. Visual only, made for side="bottom". */
  handle?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          /* Odia: rounded outer edge for top and bottom sheets */
          "group/sheet isolate data-[side=bottom]:rounded-t-xl data-[side=top]:rounded-b-xl",
          /* Odia: with the close button at the top-left, the header moves below it */
          "data-[side=left]:has-data-[odia-close]:[&>[data-slot=sheet-header]]:pt-12",
          className
        )}
        {...props}
      >
        {watermark !== "none" ? <SheetWatermarkArt variant={watermark} /> : null}
        {handle ? (
          <div
            data-slot="sheet-handle"
            aria-hidden="true"
            className="mx-auto mt-2 -mb-2 h-1 w-10 shrink-0 rounded-full bg-muted-foreground/30"
          />
        ) : null}
        {children}
        {ornament ? <SheetOrnament /> : null}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            data-odia-close=""
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3 group-data-[side=left]/sheet:right-auto group-data-[side=left]/sheet:left-3"
                size="icon-sm"
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({
  className,
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Leading icon, for example <ChakraIcon /> or <PadmaIcon />. */
  icon?: React.ReactNode
}) {
  if (!icon) {
    return (
      <div
        data-slot="sheet-header"
        className={cn("flex flex-col gap-0.5 p-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      data-slot="sheet-header"
      data-has-icon=""
      className={cn("flex items-center gap-3 p-4 pr-12", className)}
      {...props}
    >
      <span
        data-slot="sheet-header-icon"
        className="flex size-8 shrink-0 items-center justify-center text-primary [&>svg]:size-7"
      >
        {icon}
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">{children}</div>
    </div>
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "cn-font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

/* ------------------------------ Odia additions ----------------------------- */

/**
 * Sambalpuri Ikat diamond strip between two thin lines. SheetContent renders
 * it on the bottom edge when `ornament` is set. You can also use it as a divider.
 */
function SheetOrnament({ className, ...props }: React.ComponentProps<"div">) {
  const patternId = `odia-sheet-strip-${React.useId().replace(/:/g, "")}`

  return (
    <div
      data-slot="sheet-ornament"
      aria-hidden="true"
      className={cn(
        "shrink-0 overflow-hidden bg-muted/40 group-data-[side=top]/sheet:rounded-b-xl",
        className
      )}
      {...props}
    >
      <svg
        focusable="false"
        className="block h-3 w-full text-primary/60"
      >
        <defs>
          <pattern
            id={patternId}
            width="20"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0.5 H20 M0 11.5 H20"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <path
              d="M10 1.8 L15.5 6 L10 10.2 L4.5 6 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />
            <path d="M10 4.2 L12.4 6 L10 7.8 L7.6 6 Z" fill="currentColor" />
            <circle cx="0" cy="6" r="1" fill="currentColor" />
            <circle cx="20" cy="6" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetOrnament,
  ChakraIcon,
  PadmaIcon,
}
export type { SheetSide, SheetWatermark }
