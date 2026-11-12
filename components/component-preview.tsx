import type { ReactNode } from "react";

import { ComponentSource } from "@/components/component-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

/**
 * Preview / Code switcher used across the docs.
 *
 * The live example is rendered as `children` while the exact source of the
 * example file is read at build time by `<ComponentSource />`, so the preview
 * and the code can never drift apart.
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
    <Tabs className="gap-0" defaultValue="preview">
      <div className="flex items-center justify-end gap-2 border-b border-neutral-200 bg-neutral-50/80 px-2 py-1.5 dark:border-neutral-800 dark:bg-neutral-900/80">
        <TabsList className="h-8 gap-1 rounded-lg bg-transparent p-0">
          <TabsTrigger
            className="h-7 flex-none rounded-md border-0 px-3 text-xs font-medium text-neutral-500 hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-white dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white"
            value="preview"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            className="h-7 flex-none rounded-md border-0 px-3 text-xs font-medium text-neutral-500 hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-white dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white"
            value="code"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent className="mt-0" value="preview">
        <div
          className={cn(
            "flex min-h-64 w-full items-center justify-center bg-[#fafafa] bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-[size:16px_16px] p-6 text-neutral-900 md:p-10 dark:bg-neutral-950 dark:bg-[radial-gradient(#404040_1px,transparent_1px)] dark:text-white",
            previewClassName
          )}
        >
          <div className="flex w-full items-center justify-center">
            {children}
          </div>
        </div>
      </TabsContent>
      <TabsContent className="mt-0" value="code">
        <ComponentSource
          className="[&_figure]:my-0 [&_pre]:max-h-[32rem] [&_pre]:rounded-none"
          collapsible={false}
          name={name}
          src={src}
          title={title}
        />
      </TabsContent>
    </Tabs>
  </div>
);
