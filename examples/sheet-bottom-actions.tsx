"use client";

import { CameraIcon, FileIcon, ImageIcon, LinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const actions = [
  { icon: CameraIcon, label: "Take photo" },
  { icon: ImageIcon, label: "Choose image" },
  { icon: FileIcon, label: "Upload file" },
  { icon: LinkIcon, label: "Copy link" },
];

export const SheetBottomActions = () => (
  <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      Open actions
    </SheetTrigger>
    <SheetContent side="bottom" handle className="mx-auto max-w-lg">
      <SheetHeader className="text-center sm:text-center">
        <SheetTitle>Quick actions</SheetTitle>
        <SheetDescription>
          Choose an action. Swipe down or tap outside to dismiss.
        </SheetDescription>
      </SheetHeader>

      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <SheetClose
              key={action.label}
              render={
                <button
                  type="button"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border bg-card p-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              }
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-muted">
                <Icon className="size-5 text-foreground" aria-hidden="true" />
              </span>
              {action.label}
            </SheetClose>
          );
        })}
      </div>

      <div className="px-4 pb-4">
        <SheetClose render={<Button variant="outline" className="w-full" />}>
          Cancel
        </SheetClose>
      </div>
    </SheetContent>
  </Sheet>
);
