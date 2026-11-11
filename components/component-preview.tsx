import type { ReactNode } from "react";

import { ComponentSource } from "@/components/component-source";

export const ComponentPreview = ({
  name,
  src,
  title,
  children,
}: {
  name?: string;
  src?: string;
  title?: string;
  children?: ReactNode;
}) => (
  <>
    <div className="not-prose my-6 flex min-h-64 w-full items-center justify-center rounded-xl border bg-muted/20 p-6 md:p-10">
      <div className="flex w-full items-center justify-center">{children}</div>
    </div>
    <ComponentSource name={name} src={src} title={title} />
  </>
);
