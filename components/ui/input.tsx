"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"
import { AlertCircleIcon, FieldMessage } from "@/components/ui/label"

/* ── Icons (inline, currentColor) ──────────────────────── */

const icon24 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

type IconProps = React.ComponentProps<"svg">

/** Magnifier with a tiny Konark wheel in the lens */
function SearchIcon(props: IconProps) {
  return (
    <svg {...icon24} {...props}>
      <circle cx="10.5" cy="10.5" r="7" />
      <circle cx="10.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M10.5 6.2V8.4M10.5 12.6V14.8M6.2 10.5H8.4M12.6 10.5H14.8M7.5 7.5L9 9M12 12L13.5 13.5M13.5 7.5L12 9M9 12L7.5 13.5" strokeWidth="1.1" />
      <path d="M15.8 15.8L21 21" />
    </svg>
  )
}

function MailIcon(props: IconProps) {
  return (
    <svg {...icon24} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5L12 13.2L20.5 7.5" />
    </svg>
  )
}

function LockIcon(props: IconProps) {
  return (
    <svg {...icon24} {...props}>
      <rect x="5" y="11" width="14" height="9.5" rx="2.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function EyeIcon(props: IconProps) {
  return (
    <svg {...icon24} {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon(props: IconProps) {
  return (
    <svg {...icon24} {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M4 4L20 20" />
    </svg>
  )
}

function PaperclipIcon(props: IconProps) {
  return (
    <svg {...icon24} {...props}>
      <path d="M21 11.5l-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.6-8.6a3.7 3.7 0 0 1 5.2 5.2l-8.6 8.6a1.8 1.8 0 0 1-2.6-2.6L15 6" />
    </svg>
  )
}

/* ── Styles ────────────────────────────────────────────── */

const sizes = {
  sm: "h-8 text-sm",
  md: "h-9 text-base md:text-sm",
  lg: "h-10 text-base",
} as const

const fieldBase =
  "w-full min-w-0 rounded-xl border border-input bg-transparent shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"

const groupBase =
  "flex w-full items-center overflow-hidden rounded-xl border border-input bg-transparent shadow-xs transition-[color,box-shadow] dark:bg-input/30 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-[3px] has-[input:focus-visible]:ring-ring/50 has-[input[aria-invalid=true]]:border-destructive has-[input[aria-invalid=true]]:ring-destructive/20 dark:has-[input[aria-invalid=true]]:ring-destructive/40 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50"

const innerInput =
  "h-full min-w-0 flex-1 bg-transparent px-3 text-[length:inherit] outline-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground file:mr-2 file:inline-flex file:border-0 file:bg-transparent file:p-0 file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:hidden"

/* ── Input ─────────────────────────────────────────────── */

type InputProps = Omit<React.ComponentProps<"input">, "size" | "prefix"> & {
  /** Preset: adds the matching icon and input type. */
  variant?: "default" | "search" | "email" | "password" | "file"
  size?: keyof typeof sizes
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  /** Bordered block before the field, e.g. "₹". */
  addonStart?: React.ReactNode
  /** Bordered block after the field, e.g. ".00". */
  addonEnd?: React.ReactNode
  invalid?: boolean
  /** Error message shown under the field (also marks it invalid). */
  error?: React.ReactNode
}

function Input({
  className,
  type,
  variant = "default",
  size = "md",
  startIcon,
  endIcon,
  addonStart,
  addonEnd,
  invalid,
  error,
  id,
  ...props
}: InputProps) {
  const autoId = React.useId()
  const fieldId = id ?? autoId
  const errorId = `${fieldId}-error`
  const [show, setShow] = React.useState(false)

  const isInvalid = Boolean(invalid || error)

  const presetIcon =
    variant === "search" ? (
      <SearchIcon />
    ) : variant === "email" ? (
      <MailIcon />
    ) : variant === "password" ? (
      <LockIcon />
    ) : variant === "file" ? (
      <PaperclipIcon />
    ) : null

  const presetType =
    variant === "search"
      ? "search"
      : variant === "email"
        ? "email"
        : variant === "password"
          ? show
            ? "text"
            : "password"
          : variant === "file"
            ? "file"
            : undefined

  const leading = startIcon ?? presetIcon ?? (isInvalid && !endIcon ? <AlertCircleIcon className="text-destructive" /> : null)
  const trailing =
    variant === "password" ? (
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="rounded-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        {show ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    ) : (
      endIcon
    )

  const common = {
    id: fieldId,
    type: type ?? presetType,
    "aria-invalid": isInvalid || undefined,
    "aria-describedby": error ? errorId : props["aria-describedby"],
    "data-slot": "input",
  } as const

  const adorned = Boolean(leading || trailing || addonStart || addonEnd)

  const field = adorned ? (
    <div data-slot="input-group" className={cn(groupBase, sizes[size], className)}>
      {addonStart && (
        <span className="flex h-full items-center border-r bg-muted px-3 text-sm text-muted-foreground">
          {addonStart}
        </span>
      )}
      {leading && (
        <span className="flex items-center pl-3 text-muted-foreground [&_svg]:size-4">{leading}</span>
      )}
      <InputPrimitive
        {...common}
        className={cn(innerInput, leading && "pl-2", trailing && "pr-2")}
        {...props}
      />
      {trailing && (
        <span className="flex items-center pr-3 text-muted-foreground [&_svg]:size-4">{trailing}</span>
      )}
      {addonEnd && (
        <span className="flex h-full items-center border-l bg-muted px-3 text-sm text-muted-foreground">
          {addonEnd}
        </span>
      )}
    </div>
  ) : (
    <InputPrimitive {...common} className={cn(fieldBase, sizes[size], "px-3 py-1", className)} {...props} />
  )

  if (!error) return field

  return (
    <div className="grid gap-1.5">
      {field}
      <FieldMessage id={errorId} error>
        {error}
      </FieldMessage>
    </div>
  )
}

export { Input }
export type { InputProps }

/* ── Usage ──────────────────────────────────────────────────
<Input placeholder="Enter your name..." />
<Input variant="search" placeholder="Search..." />
<Input variant="email" placeholder="you@example.com" />
<Input variant="password" placeholder="••••••••" />
<Input variant="file" />
<Input addonStart="₹" addonEnd=".00" placeholder="Amount" />

<Input size="sm" /> <Input size="md" /> <Input size="lg" />
<Input invalid placeholder="Enter text..." />
<Input error="This field is required." />
*/
