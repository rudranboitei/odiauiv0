"use client";

import { CheckIcon, DownloadIcon, Loader2Icon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type DownloadButtonProps = React.ComponentProps<typeof Button> & {
  progress?: number;
};

export function DownloadButton({
  progress,
  children = "Download",
  onClick,
  disabled,
  ...props
}: DownloadButtonProps) {
  const [downloading, setDownloading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    onClick?.(e);
    if (progress === undefined) {
      setDownloading(true);
      window.setTimeout(() => {
        setDownloading(false);
        setDone(true);
        window.setTimeout(() => setDone(false), 2000);
      }, 1200);
    }
  };

  const isLoading = downloading || (progress !== undefined && progress < 100 && progress > 0);
  const isDone = done || progress === 100;

  return (
    <Button
      onClick={handleClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isDone ? (
        <CheckIcon className="size-4" aria-hidden="true" />
      ) : isLoading ? (
        <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <DownloadIcon className="size-4" aria-hidden="true" />
      )}
      {isDone ? "Downloaded" : isLoading && progress !== undefined ? `Downloading ${Math.round(progress)}%` : children}
    </Button>
  );
}
