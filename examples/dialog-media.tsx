"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMedia,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const DialogMediaDemo = () => (
  <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Konark gallery
    </DialogTrigger>
    <DialogContent size="lg" watermark="chakra">
      <div className="flex gap-4">
        <DialogMedia>
          <img src="/images/konark-temple.webp" alt="Konark Sun Temple wheel" />
        </DialogMedia>
        <DialogHeader>
          <DialogTitle>Konark Sun Temple</DialogTitle>
          <DialogDescription>
            A 13th-century chariot of stone, with 24 carved wheels.
          </DialogDescription>
        </DialogHeader>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
