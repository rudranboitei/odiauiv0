"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useFeedback } from "@/hooks/use-feedback";
import { cn } from "@/lib/utils";

export const DocsNavLink = ({
  href,
  children,
  className,
  tooltip,
  transitionTypes,
  size = "icon-sm",
  onClick,
  ...props
}: React.ComponentProps<typeof Button> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  tooltip?: { title: string; icon: React.ReactNode };
  transitionTypes?: string[];
}) => {
  const playClick = useFeedback({ sound: "click" });

  const link = (
    <Button
      variant="ghost"
      size={size}
      className={cn(
        "text-muted-foreground hover:text-foreground active:text-foreground",
        className
      )}
      asChild
      onClick={(e) => {
        playClick();
        onClick?.(e);
      }}
      {...props}
    >
      <Link href={href} transitionTypes={transitionTypes}>
        {transitionTypes?.includes("nav-back") && (
          <ChevronLeftIcon className="size-4" />
        )}
        {children}
        {transitionTypes?.includes("nav-forward") && (
          <ChevronRightIcon className="size-4" />
        )}
      </Link>
    </Button>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        <TooltipContent className="pr-2 pl-3">
          <div className="flex items-center gap-3">
            {tooltip.title}
            {tooltip.icon && <Kbd>{tooltip.icon}</Kbd>}
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }

  return link;
};
