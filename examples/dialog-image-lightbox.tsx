"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandIcon,
  ImageIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/odia/odia-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/odia/odia-dialog";

const items = [
  {
    caption:
      "A sandstone monument with carved details and a strong architectural silhouette.",
    image: "/images/konark-temple.webp",
    placeholder: "bg-primary/10 text-primary",
    subtitle: "Featured image",
    title: "Gallery image",
  },
  {
    caption: "A calm shoreline scene with open sky and soft natural light.",
    image: null,
    placeholder: "bg-secondary text-secondary-foreground",
    subtitle: "Placeholder slide",
    title: "Coastal view",
  },
  {
    caption: "A quiet landscape with water, greenery, and distant horizons.",
    image: null,
    placeholder: "bg-accent text-accent-foreground",
    subtitle: "Placeholder slide",
    title: "Lakeside view",
  },
];

export const DialogImageLightbox = () => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prev = React.useCallback(() => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  }, []);

  const next = React.useCallback(() => {
    setCurrentIndex((i) => (i + 1) % items.length);
  }, []);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev();
      }
      if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, prev, next]);

  const current = items[currentIndex];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex w-full max-w-sm flex-col items-center gap-3.5">
        <div className="grid w-full grid-cols-3 gap-2.5">
          {items.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                setOpen(true);
              }}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-border/60 bg-muted text-left shadow-xs transition-all hover:scale-[1.03] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 33vw, 120px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div
                  className={`flex size-full items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/20 p-2 ${item.placeholder}`}
                >
                  <ImageIcon className="size-6 opacity-70" />
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 backdrop-blur-[1px] transition-opacity group-hover:opacity-100">
                <ExpandIcon className="size-5 text-foreground drop-shadow-sm" />
              </div>
              <span className="absolute inset-x-1.5 bottom-1.5 truncate rounded-lg bg-background/80 px-1.5 py-0.5 text-[10px] font-medium text-foreground backdrop-blur-sm">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <DialogTrigger
          render={<Button variant="outline" size="sm" className="gap-2" />}
        >
          <ImageIcon className="size-3.5" />
          <span>View gallery lightbox</span>
        </DialogTrigger>
      </div>

      <DialogContent
        size="lg"
        showCloseButton={false}
        className="overflow-hidden border-0 bg-card p-0 shadow-2xl sm:max-w-2xl"
      >
        <DialogTitle className="sr-only">{current.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {current.caption}
        </DialogDescription>

        <div className="relative aspect-video w-full select-none overflow-hidden bg-muted">
          {current.image ? (
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          ) : (
            <div
              className={`flex size-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-muted-foreground/20 ${current.placeholder}`}
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-background/70 backdrop-blur-sm">
                <ImageIcon className="size-7" />
              </div>
              <p className="font-heading text-lg font-medium text-foreground">
                {current.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {current.subtitle}
              </p>
            </div>
          )}

          <DialogClose
            render={
              <button
                type="button"
                aria-label="Close lightbox"
                className="absolute top-3 right-3 z-20 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            }
          >
            <XIcon className="size-4" />
          </DialogClose>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeftIcon className="size-5" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRightIcon className="size-5" />
          </button>

          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
          <div className="flex min-w-0 flex-col gap-0.5">
            <h4 className="truncate font-heading text-sm font-semibold text-foreground">
              {current.title}
            </h4>
            <p className="line-clamp-2 text-xs text-muted-foreground">
              {current.caption}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  idx === currentIndex
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
