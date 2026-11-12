import type { ReactNode } from "react";

import { CodeToggle } from "@/components/code-toggle";
import { ComponentSource } from "@/components/component-source";
import { cn } from "@/lib/utils";

/**
 * Preview / Code toggle used across the docs.
 *
 * The live example is rendered as `children` while the exact source of the
 * example file is read at build time by `<ComponentSource />`, so the preview
 * and the code can never drift apart.
 *
 * Layout follows the shadcn/ui docs: the preview sits on top and the code is
 * attached below it inside the same card, toggled by a centered pill at the
 * bottom.
 */
export const ComponentPreview = ({
  name,
  src,
  title,
  children,
  className,
  previewClassName,
}: {
  name?: string;
  src?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  previewClassName?: string;
}) => (
  <div
    className={cn(
      "not-prose group relative my-6 flex w-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
      className
    )}
  >
    <div
      className={cn(
        "flex min-h-64 w-full items-center justify-center bg-[#fafafa] p-6 text-neutral-900 md:p-10 dark:bg-neutral-950 dark:text-white",
        previewClassName
      )}
    >
      <div className="flex w-full items-center justify-center">{children}</div>
    </div>
    <CodeToggle
      code={
        <ComponentSource
          className="border-t border-neutral-200 dark:border-neutral-800 [&_figure]:my-0 [&_pre]:max-h-[32rem] [&_pre]:rounded-none"
          collapsible={false}
          name={name}
          src={src}
          title={title}
        />
      }
    />
  </div>
);
