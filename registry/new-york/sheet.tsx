"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

type SheetSide = "top" | "right" | "bottom" | "left"
type SheetWatermark = "none" | "deula" | "chakra"

function steps(count: number) {
  return Array.from({ length: count }, (_, i) => (360 / count) * i)
}

/* --------------------------------- Icons ----------------------------------- */

const icon32 = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

const SPOKES_8 = steps(8)
const SPOKES_8_OFFSET = SPOKES_8.map((angle) => angle + 22.5)

function ChakraIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg {...icon32} {...props}>
      <circle cx="16" cy="16" r="14.2" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="11.6" strokeWidth="1" />
      {SPOKES_8.map((angle) => (
        <line
          key={angle}
          x1="16"
          y1="5.6"
          x2="16"
          y2="11.4"
          strokeWidth="2.6"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
      {SPOKES_8_OFFSET.map((angle) => (
        <line
          key={angle}
          x1="16"
          y1="5.6"
          x2="16"
          y2="11.4"
          strokeWidth="1.1"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
      <circle cx="16" cy="16" r="4.6" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PadmaIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg {...icon32} {...props}>
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

function DeulaIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg {...icon32} {...props}>
      <path d="M4.5 29.5H27.5M7 27H25" />
      <path d="M10 27V21H22V27" />
      <path d="M14.5 27V24.6A1.5 1.5 0 0 1 17.5 24.6V27" />
      <path d="M10 21C10 15.5 12 11 14.5 8.6L15 6.8H17L17.5 8.6C20 11 22 15.5 22 21" />
      <path
        d="M16 21V8.6M10.7 17.6H21.3M11.8 14.2H20.2M13.2 11.2H18.8"
        strokeWidth="1.1"
      />
      <ellipse cx="16" cy="5.7" rx="3" ry="1.1" />
      <path d="M16 4.6V1.6" />
      <path d="M16.2 1.7L21.2 2.9L16.2 4.1Z" fill="currentColor" />
    </svg>
  )
}

/* ------------------------------- Watermarks -------------------------------- */

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
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] text-foreground opacity-[0.07] dark:opacity-[0.1]"
    >
      {variant === "deula" ? (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
          className="absolute right-3 bottom-3 size-44"
        >
          <path d="M4.5 29.5H27.5M7 27H25" />
          <path d="M10 27V21H22V27" fill="currentColor" fillOpacity="0.12" />
          <path d="M14.5 27V24.6A1.5 1.5 0 0 1 17.5 24.6V27" />
          <path
            d="M10 21C10 15.5 12 11 14.5 8.6L15 6.8H17L17.5 8.6C20 11 22 15.5 22 21"
            fill="currentColor"
            fillOpacity="0.22"
          />
          <path
            d="M16 21V8.6M10.7 17.6H21.3M11.8 14.2H20.2M13.2 11.2H18.8"
            strokeWidth="0.7"
          />
          <ellipse cx="16" cy="5.7" rx="3" ry="1.1" />
          <path d="M16 4.6V1.6" />
          <path d="M16.2 1.7L21.2 2.9L16.2 4.1Z" fill="currentColor" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
          className="absolute -right-8 -bottom-8 size-44"
        >
          <circle cx="16" cy="16" r="14.2" strokeWidth="2.2" />
          <circle cx="16" cy="16" r="11.6" strokeWidth="1" />
          {SPOKES_8.map((angle) => (
            <line
              key={angle}
              x1="16"
              y1="5.6"
              x2="16"
              y2="11.4"
              strokeWidth="2.6"
              transform={`rotate(${angle} 16 16)`}
            />
          ))}
          {SPOKES_8_OFFSET.map((angle) => (
            <line
              key={angle}
              x1="16"
              y1="5.6"
              x2="16"
              y2="11.4"
              strokeWidth="1.1"
              transform={`rotate(${angle} 16 16)`}
            />
          ))}
          <circle cx="16" cy="16" r="4.6" strokeWidth="1.8" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
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
  watermark = "none",
  handle = false,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: SheetSide
  showCloseButton?: boolean
  ornament?: boolean
  watermark?: SheetWatermark
  handle?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "group/sheet fixed z-50 isolate flex flex-col gap-4 border bg-popover bg-clip-padding text-sm text-popover-foreground shadow-[0_4px_12px_rgba(0,0,0,0.08),0_24px_64px_rgba(0,0,0,0.16)] outline-none transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0",
          "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-8 data-[side=right]:data-starting-style:translate-x-8 data-[side=right]:sm:max-w-md",
          "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:-translate-x-8 data-[side=left]:data-starting-style:-translate-x-8 data-[side=left]:sm:max-w-md",
          "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:max-h-[85vh] data-[side=top]:border-b data-[side=top]:data-ending-style:-translate-y-8 data-[side=top]:data-starting-style:-translate-y-8 data-[side=top]:rounded-b-2xl",
          "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:max-h-[85vh] data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-8 data-[side=bottom]:data-starting-style:translate-y-8 data-[side=bottom]:rounded-t-2xl",
          className
        )}
        {...props}
      >
        {watermark !== "none" ? <SheetWatermarkArt variant={watermark} /> : null}
        {handle ? (
          <div
            data-slot="sheet-handle"
            aria-hidden="true"
            className="mx-auto mt-2 -mb-2 h-1.5 w-10 shrink-0 rounded-full bg-muted-foreground/30"
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
                className="absolute top-3 right-3"
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
  icon?: React.ReactNode
}) {
  if (!icon) {
    return (
      <div
        data-slot="sheet-header"
        className={cn("flex flex-col gap-1 p-4 pr-12", className)}
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
      className={cn("mt-auto flex flex-col gap-2 border-t bg-muted/30 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-base font-semibold text-foreground", className)}
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

function SheetOrnament({ className, ...props }: React.ComponentProps<"div">) {
  const patternId = `odia-sheet-strip-${React.useId().replace(/:/g, "")}`

  return (
    <div
      data-slot="sheet-ornament"
      aria-hidden="true"
      className={cn(
        "shrink-0 overflow-hidden bg-muted/40 group-data-[side=top]/sheet:rounded-b-2xl",
        className
      )}
      {...props}
    >
      <svg focusable="false" className="block h-3 w-full text-primary/60">
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
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOrnament,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  ChakraIcon,
  DeulaIcon,
  PadmaIcon,
}
export type { SheetSide, SheetWatermark }
