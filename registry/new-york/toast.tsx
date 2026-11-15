"use client"

import * as React from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { cn } from "@/lib/utils"
import { Loader2Icon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BadgeIcon } from "@/components/ui/badge"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Toast                                                              */
/*  Same Base UI API as shadcn/ui Toast. Colours come only from shadcn theme  */
/*  tokens (primary, muted, popover, border...), so it follows your theme in  */
/*  light and dark mode.                                                      */
/*                                                                            */
/*  Odia additions:                                                           */
/*   - Toast    watermark  "deula" | "chakra" faint Odisha artwork, on by     */
/*                          default — cropped into the toast's corner          */
/*   - ToastIcon types carry cultural motifs from the Badge icon set:         */
/*       success → bana, info → padma, warning → ikat,                        */
/*       error → jagannath (destructive), loading → spinner                   */
/* -------------------------------------------------------------------------- */

const toast = ToastPrimitive.createToastManager()

type ToastWatermark = "none" | "deula" | "chakra"

/* ------------------------------- Watermarks -------------------------------- */

function ToastWatermarkArt({
  variant,
}: {
  variant: Exclude<ToastWatermark, "none">
}) {
  return (
    <div
      data-slot="toast-watermark"
      data-variant={variant}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] text-foreground opacity-[0.07] dark:opacity-[0.1]"
    >
      <BadgeIcon
        name={variant}
        className="absolute -right-6 -bottom-6 size-28"
      />
    </div>
  )
}

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

const viewportPositionClasses: Record<ToastPosition, string> = {
  "top-left": "left-4 right-auto top-4 bottom-auto w-[calc(100%-2rem)] sm:w-full",
  "top-center":
    "left-1/2 right-auto top-4 bottom-auto w-[calc(100%-2rem)] -translate-x-1/2 sm:w-full",
  "top-right": "right-4 left-auto top-4 bottom-auto w-[calc(100%-2rem)] sm:w-full",
  "bottom-left":
    "left-4 right-auto bottom-4 top-auto w-[calc(100%-2rem)] sm:w-full",
  "bottom-center":
    "left-1/2 right-auto bottom-4 top-auto w-[calc(100%-2rem)] -translate-x-1/2 sm:w-full",
  "bottom-right":
    "right-4 left-auto bottom-4 top-auto w-[calc(100%-2rem)] sm:w-full",
}

function ToastViewport({
  className,
  position = "bottom-right",
  ...props
}: ToastPrimitive.Viewport.Props & { position?: ToastPosition }) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      data-position={position}
      className={cn(
        "pointer-events-none fixed z-50 max-w-sm outline-none",
        viewportPositionClasses[position],
        className
      )}
      {...props}
    />
  )
}

function Toast({
  className,
  children,
  watermark = "deula",
  position = "bottom-right",
  ...props
}: ToastPrimitive.Root.Props & {
  /** Faint Odisha artwork cropped into the toast's corner. */
  watermark?: ToastWatermark
  position?: ToastPosition
}) {
  const isTop = position.startsWith("top")

  return (
    <ToastPrimitive.Root
      data-slot="toast"
      data-side={isTop ? "top" : "bottom"}
      className={cn(
        "group/toast pointer-events-auto isolate absolute right-0 z-[calc(1000-var(--toast-index))] w-full border-0 rounded-3xl bg-popover text-popover-foreground shadow-[0_4px_12px_rgba(0,0,0,0.08),0_20px_48px_rgba(0,0,0,0.16)] will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        isTop ? "top-0 bottom-auto origin-top" : "bottom-0 top-auto origin-bottom",
        "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
        isTop
          ? "[--offset-y:calc(var(--toast-offset-y)+calc(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))]"
          : "[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]",
        "h-(--height) [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]",
        isTop
          ? "[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))]"
          : "[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
        "after:absolute after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
        isTop ? "after:bottom-full" : "after:top-full",
        "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
        "data-limited:opacity-0",
        isTop
          ? "data-starting-style:[transform:translateY(-150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(-150%)]"
          : "data-starting-style:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]",
        "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        className
      )}
      {...props}
    >
      {watermark !== "none" ? <ToastWatermarkArt variant={watermark} /> : null}
      {children}
    </ToastPrimitive.Root>
  )
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      role="status"
      aria-live="polite"
      className={cn(
        "flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function ToastAction({
  className,
  render = <Button variant="outline" size="sm" />,
  ...props
}: ToastPrimitive.Action.Props) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}

function ToastClose({
  className,
  children,
  render = <Button variant="ghost" size="icon-sm" />,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close toast"
      render={render}
      className={cn(
        "relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? <XIcon aria-hidden="true" />}
    </ToastPrimitive.Close>
  )
}

function ToastIcon({ type }: { type: string | undefined }) {
  let icon: React.ReactNode = null

  if (type === "success") {
    icon = <BadgeIcon name="bana" aria-hidden="true" />
  }

  if (type === "info") {
    icon = <BadgeIcon name="padma" aria-hidden="true" />
  }

  if (type === "warning") {
    icon = <BadgeIcon name="ikat" aria-hidden="true" />
  }

  if (type === "error") {
    icon = (
      <BadgeIcon name="jagannath" className="text-destructive" aria-hidden="true" />
    )
  }

  if (type === "loading") {
    icon = <Loader2Icon className="animate-spin" aria-hidden="true" />
  }

  if (!icon) {
    return null
  }

  return (
    <span
      data-slot="toast-icon"
      className="shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
    >
      {icon}
    </span>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager()

  return toasts.map((toastItem) => {
    const customContent = toastItem.data?.content as React.ReactNode | undefined
    const hideClose = Boolean(toastItem.data?.hideClose)

    return (
      <Toast
        key={toastItem.id}
        toast={toastItem}
        watermark={toastItem.data?.watermark as ToastWatermark | undefined}
      >
        {customContent ? (
          <ToastPrimitive.Content
            data-slot="toast-content"
            role="status"
            aria-live="polite"
            className={cn(
              "h-full overflow-hidden transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
              toastItem.data?.contentClassName as string | undefined
            )}
          >
            {customContent}
          </ToastPrimitive.Content>
        ) : (
          <ToastContent>
            <ToastIcon type={toastItem.type} />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <ToastTitle />
              <ToastDescription />
            </div>
            <ToastAction />
            {!hideClose && <ToastClose />}
          </ToastContent>
        )}
      </Toast>
    )
  })
}

function Toaster({
  children,
  toastManager = toast,
  position = "bottom-right",
  ...props
}: ToastPrimitive.Provider.Props & { position?: ToastPosition }) {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport position={position}>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
}
export type { ToastPosition, ToastWatermark }
