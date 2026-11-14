import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { CommandBox } from "@/components/command-box";
import { HomeCtas } from "@/components/home-ctas";
import { PageTransition } from "@/components/page-transition";
import { LINK } from "@/constants/links";
import { ROUTES } from "@/constants/routes";
import { UTM_PARAMS } from "@/constants/site";
import { addQueryParams } from "@/lib/url";
import { Button } from "@/registry/new-york/button";
import { BreadcrumbJsonLd } from "@/seo/json-ld";

export const dynamic = "force-static";
export const revalidate = false;

export default function IndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: ROUTES.HOME }]} />
      <PageTransition>
        <div className="container-wrapper flex flex-1 flex-col px-2">
          {/* Centered hairline frame — grid lines, no sidebar on the homepage */}
          <div className="min-h-min flex-1 lg:mx-auto lg:max-w-[1400px] lg:border-x lg:border-grid">
            <section className="relative overflow-hidden border-b border-grid">
              <div
                aria-hidden="true"
                className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,black_20%,transparent_75%)]"
              />
              <div className="container relative flex flex-col items-center gap-4 py-16 text-center md:py-20 lg:py-24">
                <p className="text-muted-foreground text-[0.7rem] font-medium tracking-[0.18em] uppercase">
                  shadcn/ui registry · from odisha
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.03em] text-foreground sm:text-6xl">
                  odiaui
                </h1>

                <p className="max-w-xl text-lg text-muted-foreground text-balance sm:text-xl">
                  Open-source animated components and blocks for Odisha.
                  Accessible, themeable, and built to copy straight into your
                  project.
                </p>

                <CommandBox className="mt-4 w-full max-w-xl" />

                <HomeCtas className="mt-2" />
              </div>
            </section>

            <section className="border-grid border-b">
              <div className="container grid gap-8 py-12 md:grid-cols-2 md:gap-0 md:py-0">
                <div className="flex flex-col items-start justify-center gap-3 md:pr-12 md:py-14">
                  <p className="text-muted-foreground/80 text-[0.7rem] font-medium tracking-[0.18em] uppercase">
                    Get started
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Copy a component
                  </h2>
                  <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                    Every component ships as plain source code in your own repo
                    — no package to install, no styles to fight.
                  </p>
                  <code className="border-grid bg-surface mt-2 w-full max-w-md truncate rounded-md border px-3 py-2 text-xs">
                    npx shadcn@latest add https://odiaui.xyz/r/button.json
                  </code>
                  <Button asChild variant="outline" size="sm" className="mt-2">
                    <Link href={ROUTES.DOCS_COMPONENTS}>Browse components</Link>
                  </Button>
                </div>
                <div className="border-grid flex flex-col items-start justify-center gap-3 md:border-l md:pl-12 md:py-14">
                  <p className="text-muted-foreground/80 text-[0.7rem] font-medium tracking-[0.18em] uppercase">
                    Open source
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Built in public
                  </h2>
                  <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                    The whole kit — source, docs, and registry — lives on
                    GitHub. Issues, PRs, and ideas are welcome.
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-2">
                    <a
                      href={addQueryParams(LINK.GITHUB, UTM_PARAMS)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Star on GitHub <ArrowUpRightIcon />
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
