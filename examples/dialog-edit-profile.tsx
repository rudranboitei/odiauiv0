"use client";

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
import { Textarea } from "@/components/ui/textarea";

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
      <div className="flex flex-col gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="dp-name">Display name</Label>
          <Input id="dp-name" defaultValue="Aarav Sharma" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dp-username">Username</Label>
          <Input id="dp-username" addonStart="@" defaultValue="aarav" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dp-bio">Bio</Label>
          <Textarea
            id="dp-bio"
            rows={3}
            resize="none"
            defaultValue="Designing accessible interfaces and component systems."
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
        <DialogClose render={<Button />}>Save changes</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
