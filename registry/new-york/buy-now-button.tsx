"use client";

import { CreditCardIcon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type BuyNowButtonProps = React.ComponentProps<typeof Button>;

export function BuyNowButton({
  children = "Buy Now",
  ...props
}: BuyNowButtonProps) {
  return (
    <Button className="w-full sm:w-auto" size="lg" {...props}>
      <CreditCardIcon className="size-4" aria-hidden="true" />
      {children}
    </Button>
  );
}
