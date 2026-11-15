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
  DialogOrnament,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DialogEditProfile = () => (
  <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Edit profile
    </DialogTrigger>
    <DialogContent size="default">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Update your display name and bio. Changes save immediately.
        </DialogDescription>
      </DialogHeader>
      <DialogOrnament />
      {/* Body */}
      <div className="flex flex-col gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="dp-name">Display name</Label>
          <Input id="dp-name" defaultValue="Subhashree Nayak" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dp-username">Username</Label>
          <Input id="dp-username" addonStart="@" defaultValue="subha_odia" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dp-bio">Bio</Label>
          <textarea
            id="dp-bio"
            rows={3}
            defaultValue="Passionate about Odisha's art, culture, and temple architecture."
            className="w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 resize-none dark:bg-input/30"
          />
        </div>
      </div>
      {/* Footer */}
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
        <DialogClose render={<Button />}>Save changes</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
