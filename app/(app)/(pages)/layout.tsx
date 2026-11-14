import { PageFrame } from "@/components/page-frame";
import { PagesSidebar } from "@/components/pages-sidebar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageFrame sidebar={<PagesSidebar />}>{children}</PageFrame>;
}
