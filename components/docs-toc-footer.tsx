"use client";

import { DiscussionIcon, EditPageIcon, XIcon } from "@/components/icons";
import { GITHUB, LINK } from "@/constants/links";
import { DOCS_DIR } from "@/lib/docs";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export const DocsTocFooter = ({
  docId,
  editHref,
  className,
}: {
  docId?: string;
  editHref?: string;
  className?: string;
}) => {
  const resolvedEditHref =
    editHref ??
    (docId
      ? `${LINK.GITHUB}/edit/${GITHUB.branch}/${DOCS_DIR}/${docId}`
      : undefined);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {resolvedEditHref && (
        <a
          href={resolvedEditHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-[0.8rem] hover:text-foreground text-muted-foreground [&_svg]:size-3 flex gap-1.5 items-center"
          onClick={() =>
            trackEvent({
              name: "click_edit_page",
              properties: { doc: docId ?? editHref ?? "" },
            })
          }
        >
          <EditPageIcon />
          Edit this page
        </a>
      )}
      <a
        href={LINK.X}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors text-[0.8rem] hover:text-foreground text-muted-foreground [&_svg]:size-3 flex gap-1.5 items-center"
      >
        <XIcon />
        Follow @rudranboitei
      </a>
      <a
        href={LINK.DISCUSSIONS}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors text-[0.8rem] hover:text-foreground text-muted-foreground [&_svg]:size-3 flex gap-1.5 items-center"
      >
        <DiscussionIcon />
        Join the discussion
      </a>
    </div>
  );
};
