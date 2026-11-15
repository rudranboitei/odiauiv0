"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandIcon,
  ImageIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const items = [
  {
    caption:
      "A 13th-century CE sun temple chariot carved out of sandstone, featuring 24 intricately sculpted wheels.",
    color: "from-amber-800 to-amber-950",
    gradient: "from-amber-900/80 via-stone-900/60 to-black/80",
    image: "/images/konark-temple.webp",
    subtitle: "Puri District, Odisha",
    title: "Konark Sun Temple",
  },
  {
    caption:
      "Blue Flag certified beach along the eastern coastline, renowned for its golden sands and sacred sunrises.",
    color: "from-sky-800 to-blue-950",
    gradient: "from-sky-900/80 via-blue-900/60 to-stone-900/80",
    image: null,
    subtitle: "Bay of Bengal",
    title: "Puri Golden Beach",
  },
  {
    caption:
      "Winter home to over 160 bird species and the rare Irrawaddy dolphin, nestled along the Odisha coast.",
    color: "from-teal-800 to-emerald-950",
    gradient: "from-emerald-900/80 via-teal-900/60 to-stone-900/80",
    image: null,
    subtitle: "Asia's Largest Brackish Water Lagoon",
    title: "Chilika Lagoon",
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
        {/* Interactive 3-card thumbnail grid */}
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div
                  className={`size-full bg-gradient-to-br ${item.color} flex items-center justify-center p-2 text-white/90`}
                >
                  <ImageIcon className="size-6 opacity-60" />
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 backdrop-blur-[1px] transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <ExpandIcon className="size-5 text-white drop-shadow-md" />
              </div>
              {/* Bottom label */}
              <span className="absolute inset-x-1.5 bottom-1.5 truncate rounded-lg bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                {item.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Text trigger button */}
        <DialogTrigger
          render={<Button variant="outline" size="sm" className="gap-2" />}
        >
          <ImageIcon className="size-3.5" />
          <span>View gallery lightbox</span>
        </DialogTrigger>
      </div>

      {/* Lightbox Dialog Content */}
      <DialogContent
        size="lg"
        showCloseButton={false}
        className="overflow-hidden border-0 bg-card p-0 shadow-2xl sm:max-w-2xl"
      >
        <DialogTitle className="sr-only">{current.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {current.caption}
        </DialogDescription>

        {/* Media display area */}
        <div className="relative aspect-video w-full overflow-hidden bg-black select-none">
          {current.image ? (
            <img
              src={current.image}
              alt={current.title}
              className="size-full object-cover"
            />
          ) : (
            <div
              className={`size-full bg-gradient-to-br ${current.color} flex flex-col items-center justify-center gap-2 text-white`}
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <ImageIcon className="size-7" />
              </div>
              <p className="font-heading text-lg font-medium">
                {current.title}
              </p>
              <p className="text-xs text-white/70">{current.subtitle}</p>
            </div>
          )}

          {/* Close button */}
          <DialogClose
            render={
              <button
                type="button"
                aria-label="Close lightbox"
                className="absolute top-3 right-3 z-20 flex size-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              />
            }
          >
            <XIcon className="size-4" />
          </DialogClose>

          {/* Previous arrow */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeftIcon className="size-5" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRightIcon className="size-5" />
          </button>

          {/* Counter pill */}
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Footer info & dot pagination */}
        <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
          <div className="flex min-w-0 flex-col gap-0.5">
            <h4 className="font-heading text-sm font-semibold text-foreground truncate">
              {current.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2">
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
