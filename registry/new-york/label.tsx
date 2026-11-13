"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/* ── Shared icon ───────────────────────────────────────── */

function AlertCircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 5h2v6.5h-2V7Zm0 8.5h2v2h-2v-2Z"
      />
    </svg>
  )
}

/* ── Label ─────────────────────────────────────────────── */

type LabelProps = React.ComponentProps<"label"> & {
  /** Adds the red asterisk. (Set `required` on the field itself too.) */
  required?: boolean
  /** Adds a small "Optional" pill. */
  optional?: boolean
  /** Turns the label destructive. */
  invalid?: boolean
  /** Dims the label to match a disabled field. */
  disabled?: boolean
}

function Label({
  className,
  required,
  optional,
  invalid,
  disabled,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      data-slot="label"
      data-disabled={disabled ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[invalid]:text-destructive",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden className="text-destructive">
          *
        </span>
      )}
      {optional && (
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] leading-none font-medium text-muted-foreground">
          Optional
        </span>
      )}
    </label>
  )
}

/* ── Helper / error text ───────────────────────────────── */

type FieldMessageProps = React.ComponentProps<"p"> & {
  /** Destructive colour with a leading alert icon. */
  error?: boolean
}

function FieldMessage({ className, error, children, ...props }: FieldMessageProps) {
  return (
    <p
      data-slot="field-message"
      role={error ? "alert" : undefined}
      className={cn(
        "flex items-center gap-1.5 text-sm",
        error ? "text-destructive" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {error && <AlertCircleIcon className="size-4 shrink-0" />}
      {children}
    </p>
  )
}

export { Label, FieldMessage, AlertCircleIcon }
export type { LabelProps, FieldMessageProps }

/* ── Usage ──────────────────────────────────────────────────
<Label htmlFor="name">Name</Label>
<Label htmlFor="email" required>Email</Label>
<Label htmlFor="phone" optional>Phone</Label>
<Label htmlFor="x" disabled>Disabled</Label>
<Label htmlFor="e" invalid>Email</Label>
<FieldMessage>This is helper text.</FieldMessage>
<FieldMessage error>This field is required.</FieldMessage>
*/
