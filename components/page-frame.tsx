import { SidebarProvider } from "@/components/ui/sidebar";

/**
 * Shared hairline frame for docs + standalone pages (blocks, pricing):
 * a centered, bordered box with a sidebar column and a content column.
 */
export const PageFrame = ({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="container-wrapper flex flex-1 flex-col px-2">
    <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:mx-auto lg:grid lg:max-w-[1400px] lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)] lg:border-x lg:border-grid">
      {sidebar}
      <div className="h-full w-full">{children}</div>
    </SidebarProvider>
  </div>
);
