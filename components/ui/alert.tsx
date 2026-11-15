import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Alert — fully minimal.
 *
 * One style: a soft tinted rounded container with a hairline
 * border and the library's soft card shadow, a small icon tile,
 * a floating status pill on the top edge (`status` prop) and
 * inline actions below the text (AlertAction).
 * Six semantic variants colour the container, tile and pill;
 * text stays neutral. Success, important and warning have no
 * shadcn token, so they use the Tailwind emerald / violet /
 * amber scale with dark-mode pairs.
 * ─────────────────────────────────────────────────────────── */

type AlertVariant =
  | "default"
  | "info"
  | "success"
  | "important"
  | "warning"
  | "destructive"

const alertVariants = cva(
  [
    "relative flex w-full items-start gap-2.5 rounded-xl border px-3.5 py-3 text-sm",
    "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
    "dark:shadow-[0_1px_2px_rgba(0,0,0,0.2)]",
  ],
  {
    variants: {
      variant: {
        default: "",
        info: "",
        success: "",
        important: "",
        warning: "",
        destructive: "",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

/** Container surface, per variant */
const CONTAINER: Record<AlertVariant, string> = {
  default: "border-border bg-muted text-foreground",
  info: "border-blue-100 bg-blue-50 text-foreground dark:border-blue-500/20 dark:bg-blue-500/10",
  success:
    "border-emerald-100 bg-emerald-50 text-foreground dark:border-emerald-500/20 dark:bg-emerald-500/10",
  important:
    "border-violet-100 bg-violet-50 text-foreground dark:border-violet-500/20 dark:bg-violet-500/10",
  warning:
    "border-amber-100 bg-amber-50 text-foreground dark:border-amber-500/20 dark:bg-amber-500/10",
  destructive:
    "border-red-100 bg-red-50 text-foreground dark:border-red-500/20 dark:bg-red-500/10",
}

/** Icon tile, per variant */
const TILE: Record<AlertVariant, string> = {
  default: "bg-background text-foreground/80",
  info: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300",
  success:
    "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300",
  important:
    "bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300",
  warning:
    "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300",
  destructive:
    "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300",
}

/** Floating status pill, per variant */
const STATUS: Record<AlertVariant, string> = {
  default: "bg-foreground text-background",
  info: "bg-blue-600 text-white",
  success: "bg-emerald-600 text-white",
  important: "bg-violet-600 text-white",
  warning: "bg-amber-500 text-white",
  destructive: "bg-red-600 text-white",
}

export interface AlertProps extends React.ComponentProps<"div">,
  VariantProps<typeof alertVariants> {
  /** Semantic colour: default, info, success, important, warning or destructive. */
  variant?: AlertVariant
  /** Leading icon — lucide icon, inline <svg> or any node, shown in a tile. */
  icon?: React.ReactNode
  /** Small pill floating on the top edge — text or any node. */
  status?: React.ReactNode
}

function Alert({
  className,
  variant = "default",
  icon,
  status,
  children,
  ...props
}: AlertProps) {
  // A raw <svg> child still works as the icon, as before.
  const items = React.Children.toArray(children)
  const svgChild = items.find(
    (child) => React.isValidElement(child) && child.type === "svg"
  )
  const content = svgChild ? items.filter((child) => child !== svgChild) : items
  const iconNode = icon ?? svgChild

  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), CONTAINER[variant], className)}
      {...props}
    >
      {status && (
        <span
          data-slot="alert-status"
          className={cn(
            "absolute -top-2.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] leading-none font-medium whitespace-nowrap [&_svg]:size-3",
            STATUS[variant]
          )}
        >
          {status}
        </span>
      )}
      {iconNode && (
        <span
          data-slot="alert-icon"
          aria-hidden
          className={cn(
            "grid size-8 shrink-0 place-items-center self-start rounded-lg [&_img]:size-4 [&_svg]:size-4",
            TILE[variant]
          )}
        >
          {iconNode}
        </span>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-0.5">
        {content}
      </div>
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium tracking-tight text-foreground [&_a]:underline [&_a]:underline-offset-3",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-[0.8rem] text-balance text-foreground/60 md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("flex items-center gap-1.5 pt-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
export type { AlertVariant }
