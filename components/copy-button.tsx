"use client";

import type { HTMLMotionProps, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback } from "react";

import { CopyPageIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useFeedback } from "@/hooks/use-feedback";
import type { Event } from "@/lib/events";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export const motionIconVariants: Variants = {
  animate: { filter: "blur(0px)", opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  initial: { filter: "blur(2px)", opacity: 0, scale: 0.8 },
};

export const motionIconProps: HTMLMotionProps<"span"> = {
  animate: "animate",
  exit: "exit",
  initial: "initial",
  transition: { duration: 0.15, ease: "easeOut" },
  variants: motionIconVariants,
};

/**
 * Verified badge (X/Twitter style) — filled scalloped seal with a knocked-out
 * check. Shown briefly after a successful copy.
 */
const VerifiedIcon = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
    {...props}
  >
    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
  </svg>
);

export interface CopyButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  "value"
> {
  value: string | (() => Promise<string> | string);
  src?: string;
  event?: Event["name"];
  showTooltip?: boolean;
  /** Swap the children with this label while the copy is in its success state. */
  copiedLabel?: React.ReactNode;
  /** Colour applied to the success badge and label. Defaults to white (dark surfaces). */
  copiedClassName?: string;
}

export const CopyButton = ({
  value,
  className,
  variant = "default",
  event,
  children,
  showTooltip = true,
  copiedLabel,
  copiedClassName,
  ...props
}: CopyButtonProps) => {
  const getValue = useCallback(() => {
    if (typeof value === "function") {
      return value();
    }

    return value;
  }, [value]);

  const { copyToClipboard, isCopied } = useCopyToClipboard({
    timeout: 1000,
  });

  const playCopyFeedback = useFeedback({ sound: "copy" });

  const handleCopy = useCallback(async () => {
    const text = await getValue();
    const hasCopied = await copyToClipboard(text);

    if (hasCopied) {
      playCopyFeedback();

      if (event) {
        trackEvent({
          name: event,
          properties: {
            code: text,
          },
        });
      }
    }
  }, [copyToClipboard, event, getValue, playCopyFeedback]);

  const copyButton = (
    <Button
      data-slot="copy-button"
      size={children ? "sm" : "icon"}
      variant={variant}
      className={cn(
        children
          ? ""
          : "bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100",
        className
      )}
      onClick={handleCopy}
      {...props}
    >
      <span className="sr-only">Copy</span>
      <AnimatePresence mode="popLayout" initial={false}>
        {isCopied ? (
          <motion.span
            {...motionIconProps}
            className={cn("text-white", copiedClassName)}
          >
            <VerifiedIcon className="size-4" />
          </motion.span>
        ) : (
          <motion.span key="idle" {...motionIconProps}>
            <CopyPageIcon className="size-4" />
          </motion.span>
        )}
      </AnimatePresence>
      {isCopied && copiedLabel ? (
        <span className={copiedClassName}>{copiedLabel}</span>
      ) : (
        children
      )}
    </Button>
  );

  if (!showTooltip) {
    return copyButton;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{copyButton}</TooltipTrigger>
      <TooltipContent>
        {isCopied ? "Copied" : "Copy to Clipboard"}
      </TooltipContent>
    </Tooltip>
  );
};
