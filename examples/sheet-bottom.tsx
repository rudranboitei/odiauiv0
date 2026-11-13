"use client";

import { Button } from "@/components/ui/button";
import {
  ChakraIcon,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SheetBottom = () => (
  <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      Bottom sheet
    </SheetTrigger>
    <SheetContent
      side="bottom"
      handle
      ornament
      watermark="chakra"
      className="max-h-[60vh]"
    >
      <SheetHeader icon={<ChakraIcon />}>
        <SheetTitle>Konark festival passes</SheetTitle>
        <SheetDescription>
          Rounded top edge, grabber handle, Ikat ornament strip, and a faint
          chakra watermark.
        </SheetDescription>
      </SheetHeader>
      <p className="text-muted-foreground px-4 pb-4 text-sm">
        The handle is visual only — drag the sheet's own edge to dismiss with
        Base UI's gestures.
      </p>
    </SheetContent>
  </Sheet>
);
