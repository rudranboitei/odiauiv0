"use client";

import { Share2Icon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type WhatsappShareButtonProps = React.ComponentProps<typeof Button> & {
  text?: string;
  url?: string;
};

export function WhatsappShareButton({
  text = "",
  url,
  children = "Share on WhatsApp",
  onClick,
  ...props
}: WhatsappShareButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    const shareUrl =
      url ?? (typeof window !== "undefined" ? window.location.href : "");
    const message = text ? `${text} ${shareUrl}` : shareUrl;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Button
      variant="secondary"
      aria-label="Share on WhatsApp"
      onClick={handleClick}
      {...props}
    >
      <Share2Icon className="size-4" aria-hidden="true" />
      {children}
    </Button>
  );
}
