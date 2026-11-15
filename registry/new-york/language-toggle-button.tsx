"use client";

import * as React from "react";

import { Button } from "./button";

export type LanguageToggleButtonProps = React.ComponentProps<typeof Button> & {
  value?: "or" | "en";
  onChange?: (value: "or" | "en") => void;
};

export function LanguageToggleButton({
  value,
  onChange,
  onClick,
  children,
  ...props
}: LanguageToggleButtonProps) {
  const [internal, setInternal] = React.useState<"or" | "en">(value ?? "or");
  const current = value ?? internal;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    const next = current === "or" ? "en" : "or";
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  return (
    <Button
      variant="outline"
      aria-label="Toggle language"
      onClick={handleClick}
      {...props}
    >
      {children ?? (current === "or" ? "ଓଡ଼ିଆ / EN" : "EN / ଓଡ଼ିଆ")}
    </Button>
  );
}
