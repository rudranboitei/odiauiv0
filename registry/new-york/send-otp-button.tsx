"use client";

import { CheckIcon, Loader2Icon, SendIcon } from "lucide-react";
import * as React from "react";

import { Button } from "./button";

export type SendOtpButtonProps = React.ComponentProps<typeof Button> & {
  duration?: number;
  onResend?: () => void | Promise<void>;
};

export function SendOtpButton({
  duration = 30,
  onResend,
  ...props
}: SendOtpButtonProps) {
  const [seconds, setSeconds] = React.useState(0);
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    if (seconds <= 0) return;
    const id = window.setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [seconds]);

  const handleClick = async () => {
    if (seconds > 0) return;
    await onResend?.();
    setSent(true);
    setSeconds(duration);
    window.setTimeout(() => setSent(false), 1500);
  };

  const disabled = seconds > 0 || props.disabled;

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      aria-busy={props["aria-busy"]}
      {...props}
    >
      {sent ? (
        <CheckIcon className="size-4" aria-hidden="true" />
      ) : seconds > 0 ? (
        <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <SendIcon className="size-4" aria-hidden="true" />
      )}
      {seconds > 0 ? `Resend OTP in ${seconds}s` : sent ? "Sent" : "Send OTP"}
    </Button>
  );
}
