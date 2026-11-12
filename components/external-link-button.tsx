"use client";

import type React from "react";

import { Button } from "@/components/ui/button";

interface ExternalLinkButtonProps extends React.ComponentProps<typeof Button> {
  href: string;
}

export const ExternalLinkButton = ({
  href,
  children,
  ...props
}: ExternalLinkButtonProps) => (
  <Button asChild {...props}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);
