"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Dialog                                                             */
/*  Same Base UI API as shadcn/ui Dialog. Colours come only from shadcn       */
/*  theme tokens (primary, muted, popover, border...), so it follows your     */
/*  theme automatically in light and dark mode.                               */
/*                                                                            */
/*  Odia additions (all optional):                                            */
/*   - DialogContent  size="sm" | "default" | "lg"                            */
/*   - DialogContent  watermark="deula" | "chakra"  (faint Odisha artwork)    */
/*   - DialogBanner   heritage header with Ikat pattern + icon slot           */
/*   - DialogMedia    image beside (or above) the content                     */
/*   - DialogOrnament thin Ikat diamond strip                                 */
/*   - JagannathIcon  simple line icon for the banner icon slot               */
/* -------------------------------------------------------------------------- */

type DialogSize = "sm" | "default" | "lg"
type DialogWatermark = "none" | "deula" | "chakra"

const sizeClasses: Record<DialogSize, string> = {
  sm: "sm:max-w-xs",
  default: "sm:max-w-sm",
  lg: "sm:max-w-lg",
}

function steps(count: number) {
  return Array.from({ length: count }, (_, i) => (360 / count) * i)
}

/* --------------------------------- Icons ----------------------------------- */

/** Simplified line icon of Lord Jagannath. Swap for your own artwork if needed. */
function JagannathIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2.5c-4.4 0-7.5 3-7.5 7.2 0 4.6 3 9.8 7.5 11.8 4.5-2 7.5-7.2 7.5-11.8 0-4.2-3.1-7.2-7.5-7.2Z" />
      <circle cx="8.6" cy="10" r="2.4" />
      <circle cx="15.4" cy="10" r="2.4" />
      <circle cx="8.6" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15.4" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <path d="M10.5 15.8c.9.6 2.1.6 3 0" />
    </svg>
  )
}

/* ------------------------------- Watermarks -------------------------------- */

function DialogWatermarkArt({
  variant,
}: {
  variant: Exclude<DialogWatermark, "none">
}) {
  return (
    <div
      data-slot="dialog-watermark"
      data-variant={variant}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-xl text-foreground opacity-[0.06] dark:opacity-[0.09]"
    >
      {variant === "deula" ? (
        /* Kalinga temple: rekha deula (tower) + jagamohana (stepped porch) */
        <svg
          viewBox="0 0 150 120"
          fill="currentColor"
          focusable="false"
          className="absolute bottom-0 left-2 h-32 w-auto"
        >
          <path d="M20 118 V84 C20 68 30 54 36 42 C40 34 42 26 46 18 L52 9 L58 18 C62 26 64 34 68 42 C74 54 84 68 84 84 V118 Z" />
          <circle cx="52" cy="5" r="3.2" />
          <path d="M90 118 V92 H96 V84 H102 V76 H108 V68 H114 V76 H120 V84 H126 V92 H132 V118 Z" />
          <rect x="10" y="116" width="132" height="4" />
          <path
            d="M27 72 H77 M24 86 H80 M22 100 H82"
            fill="none"
            stroke="var(--popover)"
            strokeWidth="1.6"
          />
        </svg>
      ) : (
        /* Konark wheel, cropped by the dialog corner */
        <svg
          viewBox="0 0 100 100"
          focusable="false"
          className="absolute -right-10 -bottom-10 size-44"
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

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  size = "default",
  watermark = "none",
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
  /** Dialog width: sm, default or lg. */
  size?: DialogSize
  /** Optional faint Odisha artwork behind the content. */
  watermark?: DialogWatermark
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        data-size={size}
        className={cn(
          "fixed top-1/2 left-1/2 z-50 isolate grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          sizeClasses[size],
          /* When a DialogBanner is present, the close button sits on the primary colour */
          "has-data-[slot=dialog-banner]:[&>[data-odia-close]]:text-primary-foreground has-data-[slot=dialog-banner]:[&>[data-odia-close]]:hover:bg-primary-foreground/15 has-data-[slot=dialog-banner]:[&>[data-odia-close]]:hover:text-primary-foreground",
          className
        )}
        {...props}
      >
        {watermark !== "none" ? <DialogWatermarkArt variant={watermark} /> : null}
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            data-odia-close=""
            render={
              <Button
                variant="ghost"
                className="absolute top-2 right-2"
                size="icon-sm"
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline">Close</Button>} />
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "cn-font-heading text-base leading-none font-medium",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ------------------------------ Odia additions ----------------------------- */

/**
 * Heritage header: primary-colour bar with a faint Sambalpuri Ikat pattern and
 * an optional icon. Place it as the FIRST child of DialogContent.
 */
function DialogBanner({
  className,
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Icon shown in a round badge, for example <JagannathIcon />. */
  icon?: React.ReactNode
}) {
  const patternId = `odia-ikat-${React.useId().replace(/:/g, "")}`

  return (
    <div
      data-slot="dialog-banner"
      className={cn(
        "relative -mx-4 -mt-4 flex min-h-12 items-center gap-3 overflow-hidden rounded-t-xl bg-primary py-2 pr-12 pl-4 text-primary-foreground",
        className
      )}
      {...props}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute inset-0 size-full text-primary-foreground opacity-[0.12]"
      >
        <defs>
          <pattern
            id={patternId}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 2 L16 10 L10 18 L4 10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="M10 6.5 L12.5 10 L10 13.5 L7.5 10 Z" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="currentColor" />
            <circle cx="20" cy="0" r="1" fill="currentColor" />
            <circle cx="0" cy="20" r="1" fill="currentColor" />
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      {icon ? (
        <span
          data-slot="dialog-banner-icon"
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/30 [&>svg]:size-5"
        >
          {icon}
        </span>
      ) : null}
      <div className="relative flex min-w-0 flex-col gap-0.5">{children}</div>
    </div>
  )
}

/**
 * Image or illustration next to the dialog text (position="left", default)
 * or above it (position="top"). For "left", wrap it with the text in a flex row:
 * <div className="flex gap-4"><DialogMedia>...</DialogMedia><DialogHeader>...</DialogHeader></div>
 */
function DialogMedia({
  className,
  position = "left",
  ...props
}: React.ComponentProps<"div"> & {
  position?: "left" | "top"
}) {
  return (
    <div
      data-slot="dialog-media"
      data-position={position}
      className={cn(
        "relative shrink-0 overflow-hidden bg-muted [&>img]:size-full [&>img]:object-cover",
        position === "left"
          ? "-mt-4 -ml-4 min-h-28 w-28 self-stretch rounded-tl-xl sm:w-36"
          : "-mx-4 -mt-4 aspect-video rounded-t-xl",
        className
      )}
      {...props}
    />
  )
}

/** Thin Ikat diamond strip. Use it as a divider, for example under a header. */
function DialogOrnament({ className, ...props }: React.ComponentProps<"svg">) {
  const patternId = `odia-strip-${React.useId().replace(/:/g, "")}`

  return (
    <svg
      data-slot="dialog-ornament"
      aria-hidden="true"
      focusable="false"
      className={cn("h-2 w-full text-primary/60", className)}
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
  Dialog,
  DialogBanner,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMedia,
  DialogOrnament,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  JagannathIcon,
}
export type { DialogSize, DialogWatermark }
