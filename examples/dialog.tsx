"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const DialogDemo = () => (
  <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Open dialog
    </DialogTrigger>
    <DialogContent size="lg">
      <DialogHeader>
        <DialogTitle>Plan your Odisha trip</DialogTitle>
        <DialogDescription>
          Pick your dates and we will handle the temple passes.
        </DialogDescription>
      </DialogHeader>
      <p className="text-muted-foreground text-sm">
        This dialog uses only theme tokens, so it follows your light and dark
        theme automatically.
      </p>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
        <DialogClose render={<Button />}>Continue</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
