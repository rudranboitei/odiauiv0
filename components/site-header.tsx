import Link from "next/link";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { CommandMenu } from "@/components/command-menu";
import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { NavItemGithub } from "@/components/nav-item-github";
import { SiteSettings } from "@/components/site-settings";
import { SponsorLink } from "@/components/sponsor-link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { source } from "@/lib/source";

const navItems = [
  { href: ROUTES.DOCS, label: "Docs" },
  { href: ROUTES.DOCS_COMPONENTS, label: "Components" },
  { href: ROUTES.BLOCKS, label: "Blocks" },
  { href: ROUTES.PRICING, label: "Pricing" },
];

export const SiteHeader = () => (
  <header
    className="bg-background/90 supports-backdrop-filter:backdrop-blur-xs border-grid sticky top-0 z-50 w-full border-b"
    style={{ viewTransitionName: "site-header" }}
  >
    <div className="container-wrapper 3xl:fixed:px-0">
      <div className="mx-auto flex h-(--header-height) items-stretch lg:max-w-[1400px]">
        {/* Logo — aligned with the docs sidebar column below */}
        <div className="flex shrink-0 items-center gap-1 pr-3 pl-2 lg:w-60 lg:pl-8">
          <MobileNav
            items={navItems}
            tree={source.pageTree}
            className="flex lg:hidden"
          />
          <BrandContextMenu>
            <Button
              asChild
              variant="ghost"
              className="hidden h-8 px-2.5 lg:flex"
            >
              <Link href={ROUTES.HOME} transitionTypes={["nav-back"]}>
                <Logo className="h-5! w-auto!" />
                <span className="sr-only">{SITE.NAME}</span>
              </Link>
            </Button>
          </BrandContextMenu>
        </div>
        {/* Nav items — aligned with the article column */}
        <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-3">
          <MainNav items={navItems} className="hidden lg:flex" />
        </div>
        {/* Search + actions — aligned with the right rail edge */}
        <div className="flex items-center gap-2 pr-2 lg:pr-6">
          <div className="hidden md:flex">
            <CommandMenu navItems={navItems} tree={source.pageTree} />
          </div>
          <NavItemGithub />
          <SponsorLink />
          <ModeSwitcher />
          <SiteSettings />
        </div>
      </div>
    </div>
  </header>
);
