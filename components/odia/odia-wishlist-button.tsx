"use client";

import { HeartIcon } from "lucide-react";
import { motion } from "motion/react";
import * as React from "react";

import { Button } from "@/components/odia/odia-button";
import { cn } from "@/lib/utils";

export type OdiaWishlistButtonProps = React.ComponentProps<typeof Button> & {
  defaultLiked?: boolean;
  liked?: boolean;
  onLikedChange?: (liked: boolean) => void;
};

/** Wishlist heart toggle button. */
export const OdiaWishlistButton = ({
  className,
  defaultLiked = false,
  liked: likedProp,
  onLikedChange,
  ...props
}: OdiaWishlistButtonProps) => {
  const [uncontrolled, setUncontrolled] = React.useState(defaultLiked);
  const liked = likedProp ?? uncontrolled;

  const toggle = () => {
    const next = !liked;
    if (likedProp === undefined) {
      setUncontrolled(next);
    }
    onLikedChange?.(next);
  };

  return (
    <Button
      aria-pressed={liked}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      className={cn("gap-1.5", className)}
      onClick={toggle}
      variant={liked ? "secondary" : "outline"}
      {...props}
    >
      <motion.span
        animate={{ scale: liked ? [1, 1.35, 1] : 1 }}
        className="inline-flex"
        transition={{ duration: 0.3 }}
      >
        <HeartIcon
          aria-hidden="true"
          className={cn("size-4", liked && "fill-current text-red-500")}
        />
      </motion.span>
      {liked ? "Saved" : "Wishlist"}
    </Button>
  );
};
