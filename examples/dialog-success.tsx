"use client";

import { CheckCircle2Icon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const DialogSuccess = () => (
  <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Trigger success
    </DialogTrigger>
    <DialogContent
      size="sm"
      showCloseButton={false}
      className="flex flex-col items-center gap-5 py-8 text-center"
    >
      {/* Centered icon */}
      <div className="relative flex size-16 items-center justify-center">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 ring-8 ring-emerald-500/8" />
        <div className="relative flex size-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/15">
          <CheckCircle2Icon
            className="size-8 text-emerald-500"
            strokeWidth={1.6}
          />
        </div>
      </div>

      {/* Title + message */}
      <div className="flex flex-col gap-1.5 max-w-[220px]">
        <h2 className="text-base font-semibold leading-tight">
          Payment successful
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your order has been placed. A confirmation has been sent to your
          email.
        </p>
      </div>

      {/* Single primary action */}
      <DialogClose render={<Button className="w-full" />}>
        Back to dashboard
      </DialogClose>

      {/* Quiet secondary */}
      <DialogClose
        render={
          <button
            type="button"
            className="text-xs text-muted-foreground underline underline-offset-3 hover:text-foreground transition-colors"
          >
            View order details
          </button>
        }
      />
    </DialogContent>
  </Dialog>
);
