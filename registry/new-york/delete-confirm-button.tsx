"use client";

import { CheckIcon, TrashIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

export type DeleteConfirmButtonProps = React.ComponentProps<typeof Button> & {
  onConfirm?: () => void;
  onDelete?: () => void;
};

export function DeleteConfirmButton({
  onConfirm,
  onDelete,
  children = "Delete",
  ...props
}: DeleteConfirmButtonProps) {
  const [armed, setArmed] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleClick = () => {
    if (done) return;
    if (armed) {
      (onConfirm ?? onDelete)?.();
      setArmed(false);
      setDone(true);
      window.setTimeout(() => setDone(false), 2000);
    } else {
      setArmed(true);
      window.setTimeout(() => setArmed(false), 3000);
    }
  };

  let label: React.ReactNode = children;
  if (armed) label = "Are you sure?";
  if (done) label = "Deleted";

  return (
    <Button
      onClick={handleClick}
      variant={armed || done ? "destructive" : "outline"}
      {...props}
    >
      {done ? (
        <CheckIcon className="size-4" aria-hidden="true" />
      ) : (
        <TrashIcon className="size-4" aria-hidden="true" />
      )}
      {label}
    </Button>
  );
}
