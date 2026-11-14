import type { Metadata } from "next";
import Link from "next/link";

import { DocsTocRail } from "@/components/docs-toc-rail";
import { PageTransition } from "@/components/page-transition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { BreadcrumbJsonLd } from "@/seo/json-ld";
import { createPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  description:
    "Ready-made sections built from odiaui components — heroes, pricing tables, logins, dashboards. Copy, paste, ship.",
  path: ROUTES.BLOCKS,
  title: "Blocks",
});

/** Tonal placeholder bars used to sketch block wireframes before real blocks ship. */
const Bar = ({ className }: { className?: string }) => (
  <div className={cn("bg-foreground/10 h-2 rounded-full", className)} />
);

const PreviewFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="border-grid bg-surface/50 relative flex h-44 items-center justify-center overflow-hidden rounded-md border p-4">
    {children}
  </div>
);

const DUMMY_BLOCKS: {
  name: string;
  description: string;
  preview: React.ReactNode;
}[] = [
  {
    description: "Masked grid-lines canvas, kicker, solid ink headline.",
    name: "Hero",
    preview: (
      <div className="flex w-full max-w-52 flex-col items-center gap-2 text-center">
        <Bar className="h-1.5 w-16" />
        <Bar className="h-3 w-40" />
        <Bar className="h-3 w-32" />
        <Bar className="w-44" />
        <div className="mt-1 h-5 w-20 rounded-md bg-foreground/15" />
      </div>
    ),
  },
  {
    description: "Three tiers, hairline-divided, free forever.",
    name: "Pricing",
    preview: (
      <div className="flex w-full max-w-56 gap-2">
        {[0, 1, 2].map((tier) => (
          <div
            className="border-grid flex flex-1 flex-col gap-1.5 rounded-md border bg-card p-2"
            key={tier}
          >
            <Bar className="h-1.5 w-8" />
            <Bar className="h-2.5 w-12" />
            <Bar className="w-full" />
            <Bar className="w-full" />
            <div className="bg-foreground/10 mt-1 h-4 rounded" />
          </div>
        ))}
      </div>
    ),
  },
  {
    description: "Centered card, two fields, one ink button.",
    name: "Login",
    preview: (
      <div className="border-grid flex w-full max-w-36 flex-col gap-2 rounded-md border bg-card p-3">
        <Bar className="h-2.5 w-14" />
        <div className="bg-foreground/10 h-4 rounded" />
        <div className="bg-foreground/10 h-4 rounded" />
        <div className="h-4 rounded bg-foreground/20" />
      </div>
    ),
  },
  {
    description: "Sidebar rail, stat cards, a bar chart.",
    name: "Dashboard",
    preview: (
      <div className="flex w-full max-w-56 gap-2">
        <div className="border-grid flex w-10 flex-col gap-1.5 rounded-md border bg-card p-1.5">
          {[0, 1, 2, 3].map((row) => (
            <Bar className="h-1.5 w-full" key={row} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-2">
            {[0, 1].map((stat) => (
              <div
                className="border-grid flex-1 rounded-md border bg-card p-1.5"
                key={stat}
              >
                <Bar className="h-1.5 w-8" />
                <Bar className="mt-1 h-2.5 w-10" />
              </div>
            ))}
          </div>
          <div className="border-grid flex flex-1 items-end gap-1 rounded-md border bg-card p-2">
            {[3, 5, 2, 7, 4, 6].map((height, index) => (
              <div
                className="flex-1 rounded-sm bg-foreground/15"
                key={index}
                style={{ height: `${height * 12}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    description: "Icon, title, copy — a row of three.",
    name: "Features",
    preview: (
      <div className="flex w-full max-w-56 gap-2">
        {[0, 1, 2].map((feature) => (
          <div
            className="border-grid flex flex-1 flex-col items-center gap-1.5 rounded-md border bg-card p-2 text-center"
            key={feature}
          >
            <div className="bg-foreground/15 size-4 rounded" />
            <Bar className="h-1.5 w-10" />
            <Bar className="w-full" />
            <Bar className="w-3/4" />
          </div>
        ))}
      </div>
    ),
  },
  {
    description: "Split call-to-action with a bordered action cell.",
    name: "CTA",
    preview: (
      <div className="border-grid flex w-full max-w-56 items-center justify-between rounded-md border bg-card p-3">
        <div className="flex flex-col gap-1.5">
          <Bar className="h-2.5 w-20" />
          <Bar className="w-28" />
        </div>
        <div className="h-5 w-16 rounded-md bg-foreground/20" />
      </div>
    ),
  },
];

const BlocksPage = () => (
  <>
    <BreadcrumbJsonLd items={[{ name: "Blocks", path: ROUTES.BLOCKS }]} />
    <PageTransition>
      <div className="flex items-stretch xl:w-full">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="h-(--top-spacing) shrink-0" />
          <section className="relative overflow-hidden border-b border-grid">
            <div
              aria-hidden="true"
              className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,black_20%,transparent_75%)]"
            />
            <div className="relative flex flex-col items-center gap-4 px-4 py-12 text-center md:py-16 lg:py-20 lg:px-8">
              <p className="text-muted-foreground text-[0.7rem] font-medium tracking-[0.18em] uppercase">
                coming soon · ready-made sections
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
                Blocks
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground text-balance sm:text-xl">
                Composable sections assembled from odiaui components — heroes,
                pricing tables, logins, dashboards. Copy, paste, ship.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-2">
                <Link href={ROUTES.DOCS_COMPONENTS}>Browse components</Link>
              </Button>
            </div>
          </section>

          <section
            className="border-grid border-b px-4 py-12 lg:px-8 lg:py-16"
            id="whats-coming"
          >
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">
                  What&apos;s coming
                </h2>
                <Badge variant="secondary">In the works</Badge>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                Every block will ship as registry source code, the same way
                components do. Here&apos;s the first batch taking shape.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {DUMMY_BLOCKS.map((block) => (
                  <Card className="gap-3 py-4" key={block.name}>
                    <CardContent className="flex flex-col gap-3">
                      <PreviewFrame>{block.preview}</PreviewFrame>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium">{block.name}</h3>
                          <Badge variant="secondary" className="text-[0.65rem]">
                            Soon
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
        <DocsTocRail
          toc={[{ depth: 1, title: "What's coming", url: "#whats-coming" }]}
        />
      </div>
    </PageTransition>
  </>
);

export default BlocksPage;
