"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";

const PAGES = [
  { href: ROUTES.DOCS, name: "Documentation" },
  { href: ROUTES.DOCS_COMPONENTS, name: "Components" },
  { href: ROUTES.BLOCKS, name: "Blocks" },
  { href: ROUTES.PRICING, name: "Pricing" },
];

const MENU_BUTTON_CLS =
  "relative h-7 w-full overflow-visible border border-transparent text-[0.8rem] font-medium text-muted-foreground transition-colors outline-none hover:bg-transparent hover:text-foreground active:bg-transparent data-[active=true]:border-transparent data-[active=true]:bg-transparent data-[active=true]:text-foreground before:absolute before:top-1 before:bottom-1 before:left-0 before:w-0.5 before:rounded-full before:bg-transparent before:content-[''] data-[active=true]:before:bg-primary 3xl:fixed:w-full 3xl:fixed:max-w-48";

export const PagesSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();

  return (
    <Sidebar
      className="text-sidebar-foreground sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] flex-col overscroll-none bg-transparent border-r border-grid [--sidebar-menu-width:--spacing(48)] lg:flex"
      collapsible="none"
      {...props}
    >
      <div className="h-6" />
      <div className="absolute top-8 z-10 h-8 w-(--sidebar-menu-width) shrink-0 bg-linear-to-b from-background via-background/80 to-background/50 blur-xs" />
      <SidebarContent className="mx-auto no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden px-2">
        <SidebarGroup className="pt-6">
          <SidebarGroupLabel className="text-muted-foreground/80 text-[0.7rem] font-medium tracking-[0.1em] uppercase">
            Site
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {PAGES.map(({ name, href }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    asChild
                    className={MENU_BUTTON_CLS}
                    isActive={
                      href === ROUTES.DOCS
                        ? pathname.startsWith(ROUTES.DOCS)
                        : pathname === href
                    }
                    sound="click"
                  >
                    <Link href={href}>{name}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="from-background via-background/80 to-background/50 sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
      </SidebarContent>
    </Sidebar>
  );
};
