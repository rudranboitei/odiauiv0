"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

export const SheetEditProfile = () => (
  <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>
      Edit profile
    </SheetTrigger>
    <SheetContent side="right" className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Update your personal information and save your changes.
        </SheetDescription>
      </SheetHeader>

      <form
        className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pb-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-1.5">
          <Label htmlFor="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="Aarav Sharma" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="sheet-email">Email</Label>
          <Input
            id="sheet-email"
            type="email"
            defaultValue="aarav@example.com"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="sheet-bio">Bio</Label>
          <Textarea
            id="sheet-bio"
            rows={4}
            resize="none"
            defaultValue="Product designer focused on simple, accessible interfaces."
          />
        </div>
      </form>

      <SheetFooter className="flex-row">
        <SheetClose render={<Button variant="outline" className="flex-1" />}>
          Cancel
        </SheetClose>
        <SheetClose render={<Button className="flex-1" />}>
          Save changes
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
