"use client";

import Image from "next/image";

import { Button } from "@/components/odia/odia-button";
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
} from "@/components/odia/odia-dialog";

export const DialogMediaExamples = () => (
  <div className="flex flex-wrap gap-2">
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Media left
      </DialogTrigger>
      <DialogContent size="lg" className="p-0 overflow-hidden">
        <div className="flex gap-4">
          <DialogMedia position="left" className="min-h-full w-36 sm:w-44">
            <Image
              src="/images/konark-temple.webp"
              alt="Stone monument"
              width={320}
              height={480}
              className="size-full object-cover"
            />
          </DialogMedia>
          <div className="flex flex-1 flex-col gap-4 p-4 pl-0">
            <DialogHeader>
              <DialogTitle>Media on the left</DialogTitle>
              <DialogDescription>
                Pair an image with text by placing <code>DialogMedia</code> and
                the header in a flex row.
              </DialogDescription>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              This layout works well for previews, highlights, or visual context
              alongside dialog content.
            </p>
            <DialogFooter className="mt-auto -mr-4 -mb-4">
              <DialogClose render={<Button />}>Close</DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Media top
      </DialogTrigger>
      <DialogContent size="default" className="overflow-hidden">
        <DialogMedia position="top" className="aspect-video">
          <Image
            src="/images/konark-temple.webp"
            alt="Stone monument"
            width={640}
            height={360}
            className="size-full object-cover"
          />
        </DialogMedia>
        <DialogHeader>
          <DialogTitle>Media on top</DialogTitle>
          <DialogDescription>
            Use <code>position="top"</code> for a banner-style image above the
            dialog content.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
);
