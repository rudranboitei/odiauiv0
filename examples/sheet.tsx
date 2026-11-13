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

export const SheetDemo = () => (
  <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      Open sheet
    </SheetTrigger>
    <SheetContent>
      <SheetHeader icon={<ChakraIcon />}>
        <SheetTitle>Temple passes</SheetTitle>
        <SheetDescription>
          Manage your darshan bookings from the side panel.
        </SheetDescription>
      </SheetHeader>
      <p className="text-muted-foreground px-4 pb-2 text-sm">
        A faint Konark temple — stepped tower and chariot wheels — sits behind
        the content by default. Turn it off with{" "}
        <code className="text-foreground">watermark="none"</code>.
      </p>
    </SheetContent>
  </Sheet>
);
