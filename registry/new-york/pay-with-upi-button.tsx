"use client";

import { SmartphoneIcon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type PayWithUpiButtonProps = React.ComponentProps<typeof Button>;

export function PayWithUpiButton({
  children = "Pay with UPI",
  ...props
}: PayWithUpiButtonProps) {
  return (
    <Button className="w-full sm:w-auto" size="lg" {...props}>
      <SmartphoneIcon className="size-4" aria-hidden="true" />
      {children}
    </Button>
  );
}
