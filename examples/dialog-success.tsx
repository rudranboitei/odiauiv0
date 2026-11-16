"use client";

import { CheckCircle2Icon } from "lucide-react";

import { Button } from "@/components/odia/odia-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/odia/odia-dialog";

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
      <div className="relative flex size-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/10 ring-8 ring-primary/10" />
        <div className="relative flex size-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2Icon className="size-8 text-primary" strokeWidth={1.6} />
        </div>
      </div>

      <div className="flex max-w-[220px] flex-col gap-1.5">
        <DialogTitle className="text-base font-semibold leading-tight">
          Payment successful
        </DialogTitle>
        <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
          Your order has been placed. A confirmation has been sent to your
          email.
        </DialogDescription>
      </div>

      <DialogClose render={<Button className="w-full" />}>
        Back to dashboard
      </DialogClose>

      <DialogClose
        render={
          <button
            type="button"
            className="text-xs text-muted-foreground underline underline-offset-3 transition-colors hover:text-foreground"
          >
            View order details
          </button>
        }
      />
    </DialogContent>
  </Dialog>
);
