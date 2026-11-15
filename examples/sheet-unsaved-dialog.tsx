"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SheetUnsavedDialog = () => {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [value, setValue] = React.useState("Initial draft");

  const dirty = value !== "Initial draft";

  return (
    <>
      <Sheet
        open={sheetOpen}
        onOpenChange={(open) => {
          if (!open && dirty) {
            setConfirmOpen(true);
            return;
          }
          setSheetOpen(open);
        }}
      >
        <SheetTrigger render={<Button variant="outline" />}>
          Edit draft
        </SheetTrigger>
        <SheetContent side="right" className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Edit draft</SheetTitle>
            <SheetDescription>
              Make changes to your draft. Closing with unsaved changes will ask
              for confirmation.
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-1 flex-col gap-4 px-4 pb-4">
            <div className="grid gap-1.5">
              <Label htmlFor="draft-name">Draft name</Label>
              <Input
                id="draft-name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            {dirty ? (
              <p className="text-sm text-muted-foreground">
                You have unsaved changes.
              </p>
            ) : null}
          </div>

          <SheetFooter className="flex-row">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                if (dirty) {
                  setConfirmOpen(true);
                } else {
                  setSheetOpen(false);
                }
              }}
            >
              Close
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                setSheetOpen(false);
              }}
            >
              Save
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle>Discard unsaved changes?</DialogTitle>
            <DialogDescription>
              Your changes haven&apos;t been saved. If you close now, they will
              be lost.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose render={<Button variant="outline" />}>
              Keep editing
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                setConfirmOpen(false);
                setSheetOpen(false);
                setValue("Initial draft");
              }}
            >
              Discard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
