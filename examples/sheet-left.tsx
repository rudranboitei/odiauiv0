"use client";

import { Button } from "@/components/ui/button";
import {
  PadmaIcon,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SheetLeft = () => (
  <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      Left sheet
    </SheetTrigger>
    <SheetContent side="left" watermark="deula">
      <SheetHeader icon={<PadmaIcon />}>
        <SheetTitle>Raghurajpur artisans</SheetTitle>
        <SheetDescription>
          The close button sits at the top-left, poster style.
        </SheetDescription>
      </SheetHeader>
      <p className="text-muted-foreground px-4 text-sm">
        Left sheets carry a faint deula watermark and flip the close button to
        the opposite corner.
      </p>
    </SheetContent>
  </Sheet>
);
