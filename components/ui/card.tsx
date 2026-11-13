"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { BadgeIcon } from "@/components/ui/badge"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Card                                                               */
/*  Same API as shadcn/ui Card, plus the v4-style size / --card-spacing API.   */
/*  Colours come only from shadcn theme tokens (card, muted, primary,          */
/*  border...) plus the OdiaUI sand tokens, so it follows light and dark mode. */
/*                                                                            */
/*  Odia additions:                                                           */
/*   - Card         watermark  "deula" | "chakra" | "padma" faint artwork     */
/*   - Card         variant    "default" | "inset"  (inset = widget style)    */
/*   - CardMedia    image slot that bleeds to the card edges                  */
/*   - CardOrnament thin Ikat diamond strip, use as a divider                 */
/*                                                                            */
/*  Inset widget parts (variant="inset"):                                     */
/*   - CardLabel       small icon + label row on the white shell              */
/*   - CardPanel       warm sand inner panel with optional watermark          */
/*   - CardPanelTitle / CardPanelMeta   bronze title + muted meta line        */
/*   - CardRoundButton dark floating round action (the "+")                   */
/*   - CardChips / CardChip  soft rounded tiles (date, count, tag...)         */
/* -------------------------------------------------------------------------- */

type CardWatermark = "none" | "deula" | "chakra" | "padma"

const cardVariants = cva(
  [
    "relative isolate flex flex-col gap-(--card-spacing) overflow-hidden",
    "rounded-3xl bg-card py-(--card-spacing) text-card-foreground",
    "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.07)]",
  ],
  {
    variants: {
      size: {
        default: "[--card-spacing:--spacing(6)]",
        sm: "[--card-spacing:--spacing(4)]",
      },
      variant: {
        default: "",
        // White shell with a small inset: header row on top, sand panel inside.
        inset:
          "gap-3 rounded-[2rem] p-2 pt-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.08)]",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

/* ------------------------------- Watermarks -------------------------------- */

function CardWatermarkArt({
  variant,
}: {
  variant: Exclude<CardWatermark, "none">
}) {
  return (
    <div
      data-slot="card-watermark"
      data-variant={variant}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] text-foreground opacity-[0.07] dark:opacity-[0.1]"
    >
      <BadgeIcon
        name={variant}
        className="absolute -right-8 -bottom-8 size-32"
      />
    </div>
  )
}

/* --------------------------------- Card ------------------------------------ */

function Card({
  className,
  children,
  watermark = "none",
  size,
  variant,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    /** Faint Odisha artwork cropped into the card's corner — "none" by default. */
    watermark?: CardWatermark
  }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant ?? "default"}
      className={cn(cardVariants({ size, variant }), className)}
      {...props}
    >
      {watermark !== "none" ? <CardWatermarkArt variant={watermark} /> : null}
      {children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-(--card-spacing) [.border-t]:pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

/* ------------------------------ Odia additions ----------------------------- */

const SAND_GRADIENT =
  "bg-[linear-gradient(160deg,color-mix(in_oklab,var(--sand)_82%,white)_0%,var(--sand)_55%,color-mix(in_oklab,var(--sand)_88%,black)_100%)]"

const PANEL_GRADIENT =
  "bg-[radial-gradient(120%_90%_at_0%_0%,var(--panel-glow),transparent_60%),linear-gradient(150deg,var(--panel-from)_0%,var(--panel-mid)_55%,var(--panel-to)_100%)]"

/**
 * Image or illustration bleeding to the card edges — above the content
 * (position="top", default), below it (position="bottom"), or beside it
 * (position="left"; wrap it and the header in a flex row).
 */
function CardMedia({
  className,
  position = "top",
  ...props
}: React.ComponentProps<"div"> & {
  position?: "top" | "left" | "bottom"
}) {
  return (
    <div
      data-slot="card-media"
      data-position={position}
      className={cn(
        "relative shrink-0 overflow-hidden [&>img]:size-full [&>img]:object-cover",
        SAND_GRADIENT,
        position === "top" &&
          "-mx-(--card-spacing) -mt-(--card-spacing) aspect-video rounded-t-[inherit]",
        position === "bottom" &&
          "-mx-(--card-spacing) -mb-(--card-spacing) aspect-video rounded-b-[inherit]",
        position === "left" &&
          "-mt-(--card-spacing) -ml-(--card-spacing) w-28 self-stretch rounded-tl-[inherit] sm:w-36",
        className
      )}
      {...props}
    />
  )
}

/** Thin Ikat diamond strip. Use it as a divider, for example under a header. */
function CardOrnament({ className, ...props }: React.ComponentProps<"svg">) {
  const patternId = `odia-card-strip-${React.useId().replace(/:/g, "")}`

  return (
    <svg
      data-slot="card-ornament"
      aria-hidden="true"
      focusable="false"
      className={cn("h-2 text-sand-foreground/60", className)}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width="16"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M8 0.5 L13 4 L8 7.5 L3 4 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="4" r="0.9" fill="currentColor" />
          <circle cx="16" cy="4" r="0.9" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

/* ---------------------------- Inset widget parts --------------------------- */

/** Small icon + label row that sits on the white shell above the panel. */
function CardLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-label"
      className={cn(
        "flex items-center gap-2.5 px-3 text-[15px] leading-none font-medium tracking-tight",
        "[&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-panel-art",
        className
      )}
      {...props}
    />
  )
}

/** Warm sand inner panel. Put the title/meta inside, chips and button absolutely placed. */
function CardPanel({
  className,
  children,
  watermark = "none",
  ...props
}: React.ComponentProps<"div"> & { watermark?: CardWatermark }) {
  return (
    <div
      data-slot="card-panel"
      className={cn(
        "relative isolate flex min-h-52 flex-col justify-end gap-1.5 overflow-hidden rounded-2xl p-5",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
        PANEL_GRADIENT,
        className
      )}
      {...props}
    >
      {watermark !== "none" ? (
        <div
          data-slot="card-panel-watermark"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-panel-art"
        >
          <BadgeIcon
            name={watermark}
            className="absolute -right-6 -bottom-6 size-36"
          />
        </div>
      ) : null}
      {children}
    </div>
  )
}

function CardPanelTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-panel-title"
      className={cn(
        "max-w-[62%] text-[1.65rem] leading-[1.15] font-medium tracking-tight text-balance text-panel-title",
        className
      )}
      {...props}
    />
  )
}

function CardPanelMeta({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-panel-meta"
      className={cn("text-lg leading-none text-panel-meta", className)}
      {...props}
    />
  )
}

/** Dark floating round action, top-right of the panel by default. */
function CardRoundButton({
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="card-round-button"
      type={type}
      className={cn(
        "absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full",
        "bg-linear-to-b from-foreground/80 to-foreground text-background",
        "shadow-[0_6px_14px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.18)]",
        "transition-transform outline-none hover:scale-105 active:scale-95",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "[&>svg]:size-5",
        className
      )}
      {...props}
    />
  )
}

/** Row of chips, bottom-right of the panel by default. */
function CardChips({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-chips"
      className={cn("absolute right-4 bottom-4 flex items-center gap-2", className)}
      {...props}
    />
  )
}

/** Soft rounded tile — date parts, counts, small tags. */
function CardChip({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-chip"
      className={cn(
        "grid size-14 place-items-center rounded-xl text-lg font-medium tabular-nums text-foreground",
        "bg-[linear-gradient(180deg,var(--chip-from)_0%,var(--chip-to)_100%)]",
        "shadow-[0_8px_18px_rgba(120,90,40,0.2),inset_0_1px_0_rgba(255,255,255,0.9)]",
        "dark:shadow-[0_8px_18px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardMedia,
  CardOrnament,
  CardLabel,
  CardPanel,
  CardPanelTitle,
  CardPanelMeta,
  CardRoundButton,
  CardChips,
  CardChip,
}
export type { CardWatermark }
