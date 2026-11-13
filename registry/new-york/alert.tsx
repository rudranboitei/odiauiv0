import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { BadgeIcon, type BadgeIconName } from "@/components/ui/badge"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Alert
 *
 * shadcn tokens only; success and warning have no shadcn token,
 * so they use the Tailwind emerald / amber scale with dark-mode
 * pairs (same as Badge). Each variant shows a cultural motif from
 * the Badge icon set, drawn inline in currentColor — pass `icon`
 * as a child to bring your own artwork, or `motif` to choose one.
 * `ornament` adds an engraved inner hairline frame.
 * ─────────────────────────────────────────────────────────── */

const alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-2xl border-0 px-2.5 py-2 text-left text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.06)] has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        info: "bg-primary/5 text-primary",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
        success:
          "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
        warning:
          "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
      },
      /** Engraved inner hairline frame, like a pattachitra medallion */
      ornament: {
        true: "before:pointer-events-none before:absolute before:inset-[3px] before:rounded-[calc(1rem-3px)] before:border before:border-border/60 before:content-['']",
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
    /** Engraved inner hairline frame. */
    ornament?: boolean
  }

function Alert({
  className,
  variant,
  motif,
  ornament,
  children,
  ...props
}: AlertProps) {
  const hasOwnIcon = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === "svg"
  )
  const shownMotif =
    motif ?? (hasOwnIcon ? undefined : DEFAULT_MOTIFS[variant ?? "default"])

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, ornament }), className)}
      {...props}
    >
      {shownMotif && <BadgeIcon name={shownMotif} aria-hidden />}
      {children}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
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
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
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
      className={cn("absolute top-2 right-2", className)}
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
<Alert ornament>Engraved frame.</Alert>
*/
