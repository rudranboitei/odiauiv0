"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type CopyButtonProps = React.ComponentProps<typeof Button> & {
  value: string;
  copiedLabel?: string;
};

export function CopyButton({
  value,
  copiedLabel = "Copied",
  children = "Copy",
  onClick,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    onClick?.(e);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <Button variant="outline" onClick={handleClick} {...props}>
      {copied ? (
        <CheckIcon className="size-4" aria-hidden="true" />
      ) : (
        <CopyIcon className="size-4" aria-hidden="true" />
      )}
      {copied ? copiedLabel : children}
    </Button>
  );
}
