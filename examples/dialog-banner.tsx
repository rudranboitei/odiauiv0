"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBanner,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOrnament,
  DialogTitle,
  DialogTrigger,
  JagannathIcon,
} from "@/components/ui/dialog";

export const DialogBannerDemo = () => (
  <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Rath Yatra notice
    </DialogTrigger>
    <DialogContent size="lg">
      <DialogBanner icon={<JagannathIcon />}>
        <DialogTitle>Rath Yatra 2026</DialogTitle>
        <DialogDescription className="text-primary-foreground/80">
          The chariots roll at dawn from the Jagannath Temple.
        </DialogDescription>
      </DialogBanner>
      <DialogOrnament />
      <p className="text-muted-foreground text-sm">
        The banner header carries a faint Sambalpuri Ikat pattern, the ornament
        below is a thin Ikat diamond strip — both drawn inline with theme
        tokens.
      </p>
      <DialogFooter>
        <DialogClose render={<Button />}>Got it</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
