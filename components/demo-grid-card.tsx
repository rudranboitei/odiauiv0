"use client";

import { ArrowUpRightIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/odia/odia-dialog";

export interface DemoGridCardProps {
  title: string;
  description?: string;
  install?: string;
  demo: React.ReactNode;
  html: string | null;
}

/**
 * One gallery card. The whole card is the dialog trigger; the dialog shows
 * the live demo, the highlighted source, and an optional install command.
 */
export const DemoGridCard = ({
  title,
  description,
  install,
  demo,
  html,
}: DemoGridCardProps) => (
  <Dialog>
    <DialogTrigger
      render={
        <button
          className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white text-left transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
          type="button"
        />
      }
    >
      {/* Live preview */}
      <div className="flex min-h-44 w-full items-center justify-center bg-[#fafafa] p-6 dark:bg-neutral-950">
        {demo}
      </div>
      {/* Footer */}
      <span className="flex items-start justify-between gap-2 border-t border-neutral-200 p-4 dark:border-neutral-800">
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="text-sm font-medium text-neutral-900 dark:text-white">
            {title}
          </span>
          {description ? (
            <span className="line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400">
              {description}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-white dark:group-hover:text-neutral-900">
          <ArrowUpRightIcon className="size-3.5" />
        </span>
      </span>
    </DialogTrigger>

    <DialogContent size="lg">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description ? (
          <DialogDescription>{description}</DialogDescription>
        ) : null}
      </DialogHeader>

      {/* Live demo inside the dialog */}
      <div className="flex min-h-32 items-center justify-center rounded-2xl bg-[#fafafa] p-6 dark:bg-neutral-950">
        {demo}
      </div>

      {/* Source code (highlighted at build time) */}
      {html ? (
        <div
          className={
            "[&_figure]:m-0 [&_pre]:max-h-72 [&_pre]:overflow-auto [&_pre]:rounded-xl [&_pre]:text-xs"
          }
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : null}

      {install ? (
        <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900">
          <code className="text-xs whitespace-pre">{install}</code>
        </div>
      ) : null}
    </DialogContent>
  </Dialog>
);
