import { DocsTableOfContents } from "@/components/docs-toc";

/**
 * Sticky right rail used by docs, blocks, and pricing pages — the
 * border-l line that closes the grid frame on the right.
 */
export const DocsTocRail = ({
  toc,
  children,
}: {
  toc: {
    title?: React.ReactNode;
    url: string;
    depth: number;
  }[];
  children?: React.ReactNode;
}) => (
  <div className="border-grid sticky top-(--header-height) z-30 ml-auto hidden h-[calc(100svh-var(--header-height))] w-64 flex-col gap-4 overflow-hidden overscroll-none border-l pb-8 xl:flex">
    <div className="h-(--top-spacing) shrink-0" />
    {toc?.length ? (
      <div className="no-scrollbar mx-6 overflow-y-auto border-b">
        <DocsTableOfContents toc={toc} />
      </div>
    ) : null}
    {children}
  </div>
);
