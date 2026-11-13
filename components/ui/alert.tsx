import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { BadgeIcon, type BadgeIconName } from "@/components/ui/badge"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Alert
 *
 * White rounded shell + tinted inset panel, same family as Card
 * and Accordion. Uses shadcn tokens plus the OdiaUI panel/chip
 * tokens (--panel-*, --chip-*). success and warning have no shadcn
 * token, so they use the Tailwind emerald / amber scale with
 * dark-mode pairs (same as Badge).
 *
 * The icon sits in a soft chip tile. Each variant shows a cultural
 * motif from the Badge set by default — pass `motif` to choose
 * another, `icon` for any node, or an <svg> child. `ornament` adds
 * an engraved inner hairline frame.
 * ─────────────────────────────────────────────────────────── */

const SHELL =
  "group/alert relative w-full rounded-3xl bg-card p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.07)]"

const CHIP_LOOK =
  "bg-[linear-gradient(180deg,var(--chip-from)_0%,var(--chip-to)_100%)] shadow-[0_6px_14px_rgba(120,90,40,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_6px_14px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]"

/** The inset panel. Each variant sets its tint, text colour and icon accent. */
const alertVariants = cva(
  [
    "relative isolate grid items-center gap-x-3 gap-y-0.5 rounded-2xl p-3.5 text-left text-sm",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
    "has-data-[slot=alert-action]:pr-20",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-[radial-gradient(120%_90%_at_0%_0%,var(--panel-glow),transparent_60%),linear-gradient(150deg,var(--panel-from)_0%,var(--panel-mid)_55%,var(--panel-to)_100%)] text-panel-title [--alert-accent:var(--panel-title)]",
        // Glossy dark panel, like the reference "+" button
        info: "bg-linear-to-b from-foreground/85 to-foreground text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] [--alert-accent:var(--foreground)]",
        destructive:
          "bg-[linear-gradient(150deg,color-mix(in_oklab,var(--destructive)_4%,var(--card))_0%,color-mix(in_oklab,var(--destructive)_13%,var(--card))_100%)] text-destructive [--alert-accent:var(--destructive)]",
        success:
          "bg-linear-to-br from-emerald-50 to-emerald-100 text-emerald-800 dark:from-emerald-500/10 dark:to-emerald-500/20 dark:text-emerald-300 [--alert-accent:var(--color-emerald-600)] dark:[--alert-accent:var(--color-emerald-400)]",
        warning:
          "bg-linear-to-br from-amber-50 to-amber-100 text-amber-800 dark:from-amber-500/10 dark:to-amber-500/20 dark:text-amber-300 [--alert-accent:var(--color-amber-600)] dark:[--alert-accent:var(--color-amber-400)]",
      },
      /** Engraved inner hairline frame, like a pattachitra medallion */
      ornament: {
        true: "before:pointer-events-none before:absolute before:inset-[3px] before:rounded-[calc(var(--radius-2xl)-3px)] before:border before:border-current/15 before:content-['']",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      ornament: false,
    },
  }
)

/** Cultural motif shown when the caller passes no icon of their own */
const DEFAULT_MOTIFS: Record<
  NonNullable<VariantProps<typeof alertVariants>["variant"]>,
  BadgeIconName
> = {
  default: "chakra",
  info: "padma",
  destructive: "jagannath",
  success: "bana",
  warning: "ikat",
}

type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    /** Cultural motif from Badge — overrides the variant's default. */
    motif?: BadgeIconName
    /** Custom icon (lucide, inline <svg>, <img>). Overrides `motif`. */
    icon?: React.ReactNode
    /** Engraved inner hairline frame. */
    ornament?: boolean
  }

function Alert({
  className,
  variant,
  motif,
  icon,
  ornament,
  children,
  ...props
}: AlertProps) {
  // A raw <svg> child still works as the icon, as before.
  const items = React.Children.toArray(children)
  const svgChild = items.find(
    (child) => React.isValidElement(child) && child.type === "svg"
  )
  const rest = svgChild ? items.filter((child) => child !== svgChild) : items

  const iconNode =
    icon ??
    svgChild ??
    <BadgeIcon name={motif ?? DEFAULT_MOTIFS[variant ?? "default"]} aria-hidden />

  return (
    <div
      data-slot="alert"
      data-variant={variant ?? "default"}
      role="alert"
      className={cn(SHELL, className)}
      {...props}
    >
      <div
        data-slot="alert-panel"
        className={cn(
          alertVariants({ variant, ornament }),
          "grid-cols-[auto_1fr]"
        )}
      >
        <span
          data-slot="alert-icon"
          aria-hidden
          className={cn(
            "row-span-2 grid size-9 shrink-0 place-items-center self-center rounded-xl text-(--alert-accent) [&_img]:size-full [&_svg]:size-4.5",
            CHIP_LOOK
          )}
        >
          {iconNode}
        </span>
        {rest}
      </div>
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-medium tracking-tight [&_a]:underline [&_a]:underline-offset-3",
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
        "col-start-2 text-sm leading-relaxed text-balance text-current/70 md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-1/2 right-3 -translate-y-1/2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
export type { AlertProps }

/* ── Usage ──────────────────────────────────────────────────
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>The Konark wheel motif shows by default.</AlertDescription>
</Alert>

<Alert variant="info" />
<Alert variant="success" />
<Alert variant="warning" />
<Alert variant="destructive" />
<Alert motif="jagannath" ornament>Rath Yatra begins tomorrow.</Alert>
<Alert icon={<Bell />}>Bring your own icon.</Alert>

<Alert>
  <AlertTitle>Update available</AlertTitle>
  <AlertDescription>Version 2.0 is ready.</AlertDescription>
  <AlertAction><Button size="sm">Update</Button></AlertAction>
</Alert>
*/
