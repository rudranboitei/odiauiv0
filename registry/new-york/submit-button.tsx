"use client";

import { Loader2Icon, SendIcon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type SubmitButtonProps = React.ComponentProps<typeof Button> & {
  valid?: boolean;
  loading?: boolean;
};

export function SubmitButton({
  valid = true,
  loading = false,
  children = "Submit",
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={!valid || loading || disabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <SendIcon className="size-4" aria-hidden="true" />
      )}
      {children}
    </Button>
  );
}
