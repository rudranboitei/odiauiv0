import { DocsSidebar } from "@/components/docs-sidebar";
import { PageFrame } from "@/components/page-frame";
import { source } from "@/lib/source";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageFrame sidebar={<DocsSidebar tree={source.pageTree} />}>
      {children}
    </PageFrame>
  );
}
