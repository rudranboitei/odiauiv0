"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { FieldMessage } from "@/components/ui/label"

const resizeStyles = {
  none: "resize-none",
  vertical: "resize-y",
  both: "resize",
} as const

type TextareaProps = React.ComponentProps<"textarea"> & {
  /** Which way the corner handle can drag. */
  resize?: keyof typeof resizeStyles
  invalid?: boolean
  /** Error message shown under the field (also marks it invalid). */
  error?: React.ReactNode
  /** Show a live "n / max" counter (needs `maxLength`). */
  showCount?: boolean
}

function Textarea({
  className,
  resize = "vertical",
  invalid,
  error,
  showCount,
  maxLength,
  value,
  defaultValue,
  onChange,
  id,
  ...props
}: TextareaProps) {
  const autoId = React.useId()
  const fieldId = id ?? autoId
  const errorId = `${fieldId}-error`

  const [length, setLength] = React.useState(String(defaultValue ?? "").length)
  const count = value !== undefined ? String(value).length : length
  const isInvalid = Boolean(invalid || error)

  const field = (
    <textarea
      id={fieldId}
      data-slot="textarea"
      aria-invalid={isInvalid || undefined}
      aria-describedby={error ? errorId : props["aria-describedby"]}
      maxLength={maxLength}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => {
        setLength(e.target.value.length)
        onChange?.(e)
      }}
      className={cn(
        "flex min-h-24 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        resizeStyles[resize],
        className
      )}
      {...props}
    />
  )

  const counter =
    showCount && maxLength ? (
      <p className="ml-auto text-sm text-muted-foreground tabular-nums">
        {count} / {maxLength}
      </p>
    ) : null

  if (!error && !counter) return field

  return (
    <div className="grid gap-1.5">
      {field}
      <div className="flex items-start gap-3">
        {error && (
          <FieldMessage id={errorId} error>
            {error}
          </FieldMessage>
        )}
        {counter}
      </div>
    </div>
  )
}

export { Textarea }
export type { TextareaProps }

/* ── Usage ──────────────────────────────────────────────────
<Textarea placeholder="Share your thoughts..." />
<Textarea resize="vertical" placeholder="Drag to resize..." />
<Textarea resize="none" />
<Textarea showCount maxLength={500} placeholder="Tell us more..." />
<Textarea disabled placeholder="This field is disabled..." />
<Textarea error="This field is required." defaultValue="Please provide a message." />
*/
