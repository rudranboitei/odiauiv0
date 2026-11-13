"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Avatar                                                             */
/*  Same Base UI API as shadcn/ui Avatar. Every Odia addition is optional:    */
/*  with no extra props, it renders exactly like the stock avatar.            */
/* -------------------------------------------------------------------------- */

type AvatarSize = "sm" | "default" | "lg" | "xl"

/**
 * Heritage frames drawn around the portrait.
 * - chakra:      Konark wheel rim, a thin ring with a bead garland
 * - padma:       lotus petals radiating outward
 * - deula:       Kalinga temple spire crowning a thin ring
 * - ikat:        Sambalpuri Ikat diamond band
 * - pattachitra: rope-style border of a Pattachitra painting
 */
type AvatarFrameVariant =
  | "none"
  | "chakra"
  | "padma"
  | "deula"
  | "ikat"
  | "pattachitra"

/** Heritage accent used by frames, heritage badges and heritage fallbacks. */
type AvatarAccent = "bronze" | "terracotta" | "gold"

/*
 * Each accent maps to a shadcn token so light and dark mode follow the
 * theme automatically. Override it anywhere with
 * className="text-primary" (or any token colour) to match your own theme.
 */
const accentClasses: Record<AvatarAccent, string> = {
  bronze: "text-primary",
  terracotta: "text-destructive",
  gold: "text-muted-foreground",
}

/* ------------------------------ Frame artwork ------------------------------ */
/* All artwork is drawn on a 100x100 canvas. The portrait itself occupies the  */
/* inner circle of radius 40, so every frame lives between r=40 and r=50.      */

function steps(count: number) {
  return Array.from({ length: count }, (_, i) => (360 / count) * i)
}

function ChakraFrame() {
  return (
    <>
      <circle cx="50" cy="50" r="46.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      {steps(16).map((angle) => (
        <circle
          key={angle}
          cx="50"
          cy="3.5"
          r="1.7"
          fill="currentColor"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </>
  )
}

function PadmaFrame() {
  return (
    <>
      {steps(16).map((angle) => (
        <path
          key={angle}
          d="M50 9 C53.5 7 54 3.5 50 0 C46 3.5 46.5 7 50 9Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </>
  )
}

function DeulaFrame() {
  return (
    <>
      <circle cx="50" cy="50" r="45.5" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* Spire (shikhara) with kalasha finial */}
      <path
        d="M42.5 5 C45 3 47 0 48 -4 L50 -9 L52 -4 C53 0 55 3 57.5 5 Z"
        fill="currentColor"
      />
      <circle cx="50" cy="-11" r="1.6" fill="currentColor" />
    </>
  )
}

function IkatFrame() {
  return (
    <>
      {steps(16).map((angle) => (
        <g key={angle}>
          <path
            d="M50 1.5 L52.8 5.5 L50 9.5 L47.2 5.5Z"
            fill="currentColor"
            transform={`rotate(${angle} 50 50)`}
          />
          <circle
            cx="50"
            cy="5.5"
            r="0.9"
            fill="currentColor"
            opacity="0.7"
            transform={`rotate(${angle + 11.25} 50 50)`}
          />
        </g>
      ))}
    </>
  )
}

function PattachitraFrame() {
  return (
    <>
      <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="43.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {/* Rope border: pathLength makes the dash pattern close without a seam */}
      <circle
        cx="50"
        cy="50"
        r="46.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        pathLength={96}
        strokeDasharray="1 1"
        opacity="0.85"
      />
    </>
  )
}

const frameArtwork: Record<Exclude<AvatarFrameVariant, "none">, () => React.JSX.Element> = {
  chakra: ChakraFrame,
  padma: PadmaFrame,
  deula: DeulaFrame,
  ikat: IkatFrame,
  pattachitra: PattachitraFrame,
}

function AvatarFrame({ variant }: { variant: AvatarFrameVariant }) {
  if (variant === "none") return null
  const Artwork = frameArtwork[variant]

  return (
    <svg
      data-slot="avatar-frame"
      data-frame={variant}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute -top-[12.5%] -left-[12.5%] z-0 size-[125%] overflow-visible text-inherit"
    >
      <Artwork />
    </svg>
  )
}

/* ------------------------------- Badge icons ------------------------------- */

function ChakraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 3v7M12 14v7M3 12h7M14 12h7M5.6 5.6l5 5M13.4 13.4l5 5M18.4 5.6l-5 5M10.6 13.4l-5 5" />
    </svg>
  )
}

function PadmaIcon() {
  const petal = "M12 3c2.5 3 2.5 6 0 10-2.5-4-2.5-7 0-10Z"
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={petal} />
      <path d={petal} transform="rotate(-55 12 14)" />
      <path d={petal} transform="rotate(55 12 14)" />
      <path
        d="M5 18c3 3 11 3 14 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* -------------------------------- Components ------------------------------- */

function Avatar({
  className,
  size = "default",
  frame = "none",
  accent = "bronze",
  children,
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: AvatarSize
  /** Optional Odisha heritage frame drawn around the portrait. */
  frame?: AvatarFrameVariant
  /** Heritage accent colour for frames, heritage badges and fallbacks. */
  accent?: AvatarAccent
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-frame={frame}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 data-[size=xl]:size-14 dark:after:mix-blend-lighten",
        accentClasses[accent],
        className
      )}
      {...props}
    >
      {children}
      <AvatarFrame variant={frame} />
    </AvatarPrimitive.Root>
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  tone = "default",
  ...props
}: AvatarPrimitive.Fallback.Props & {
  /** "heritage" tints the initials with the avatar's accent colour. */
  tone?: "default" | "heritage"
}) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      data-tone={tone}
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs group-data-[size=xl]/avatar:text-base",
        tone === "heritage" &&
          "font-medium text-inherit",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({
  className,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<"span"> & {
  /** "chakra" and "padma" render a built-in heritage icon in the accent colour. */
  variant?: "default" | "chakra" | "padma"
}) {
  return (
    <span
      data-slot="avatar-badge"
      data-variant={variant}
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        variant !== "default" &&
          "bg-current text-inherit [&_svg]:text-background",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        "group-data-[size=xl]/avatar:size-4 group-data-[size=xl]/avatar:[&>svg]:size-2.5",
        className
      )}
      {...props}
    >
      {variant === "chakra" ? <ChakraIcon /> : null}
      {variant === "padma" ? <PadmaIcon /> : null}
      {variant === "default" ? children : null}
    </span>
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 group-has-data-[size=xl]/avatar-group:size-14 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=xl]/avatar-group:[&>svg]:size-6",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
export type { AvatarSize, AvatarFrameVariant, AvatarAccent }
