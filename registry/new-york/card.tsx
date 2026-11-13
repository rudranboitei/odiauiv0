"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { BadgeIcon } from "@/components/ui/badge"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Card                                                               */
/*  Same API as shadcn/ui Card, plus the v4-style size / --card-spacing API.   */
/*  Colours come only from shadcn theme tokens (card, muted, primary,          */
/*  border...), so it follows your theme in light and dark mode.               */
/*                                                                            */
/*  Odia additions:                                                           */
/*   - Card         watermark  "deula" | "chakra" | "padma" faint artwork,    */
/*                              on by default, cropped into the corner        */
/*   - CardMedia    image slot that bleeds to the card edges (top/left/bottom)*/
/*   - CardOrnament thin Ikat diamond strip, use as a divider                 */
/* -------------------------------------------------------------------------- */

type CardWatermark = "none" | "deula" | "chakra" | "padma"

const cardVariants = cva(
  [
    "relative isolate flex flex-col gap-(--card-spacing) overflow-hidden",
    "rounded-xl border bg-card py-(--card-spacing) text-card-foreground shadow-sm",
  ],
  {
    variants: {
      size: {
        default: "[--card-spacing:--spacing(6)]",
        sm: "[--card-spacing:--spacing(4)]",
      },
    },
    defaultVariants: {
      size: "default",
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
      className={cn(cardVariants({ size }), className)}
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
        "relative shrink-0 overflow-hidden bg-muted [&>img]:size-full [&>img]:object-cover",
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
      className={cn("h-2 text-primary/60", className)}
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
}
export type { CardWatermark }
