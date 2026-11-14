import { CheckIcon, ExternalLink, Heart } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { DocsTocRail } from "@/components/docs-toc-rail";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LINK } from "@/constants/links";
import { ROUTES } from "@/constants/routes";
import { BreadcrumbJsonLd } from "@/seo/json-ld";
import { createPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  description:
    "Everything in odiaui is free and open source. No pro tier, no gated components — sponsor only if you want to support the project.",
  path: ROUTES.PRICING,
  title: "Pricing",
});

const FREE_FEATURES = [
  "Every component, source code in your repo",
  "Full theming — warm clay tokens, dark mode",
  "Registry install with npx shadcn",
  "Docs, examples, and llms.txt for AI tooling",
  "MIT licensed, use it in commercial work",
];

const PricingPage = () => (
  <>
    <BreadcrumbJsonLd items={[{ name: "Pricing", path: ROUTES.PRICING }]} />
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
                open source · no paywalls
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
                Pricing
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground text-balance sm:text-xl">
                There isn&apos;t one. Everything in odiaui is free and
                that&apos;s not changing.
              </p>
            </div>
          </section>

          <section
            className="border-grid border-b px-4 py-12 lg:px-8 lg:py-16"
            id="plans"
          >
            <div className="mx-auto grid w-full max-w-4xl gap-4 lg:grid-cols-2">
              <Card className="gap-4 py-6" id="free">
                <CardHeader>
                  <CardDescription>Free forever</CardDescription>
                  <div className="flex items-baseline gap-2">
                    <CardTitle className="text-4xl font-semibold tracking-tight">
                      $0
                    </CardTitle>
                    <span className="text-muted-foreground text-sm">
                      / everything, forever
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-2.5">
                    {FREE_FEATURES.map((feature) => (
                      <li
                        className="flex items-start gap-2.5 text-sm"
                        key={feature}
                      >
                        <CheckIcon className="text-foreground mt-0.5 size-4 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-2">
                    <Link href={ROUTES.DOCS_COMPONENTS}>Browse components</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="gap-4 py-6" id="sponsor">
                <CardHeader>
                  <CardDescription>If you want to help</CardDescription>
                  <div className="flex items-baseline gap-2">
                    <CardTitle className="text-4xl font-semibold tracking-tight">
                      Sponsor
                    </CardTitle>
                    <span className="text-muted-foreground text-sm">
                      any amount
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No pro tier, no gated components, no &quot;premium&quot;
                    badge. Sponsoring just says you like that this exists in the
                    open — and helps justify spending real time on it.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Money not your thing? Star the repo or share something you
                    liked.
                  </p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                    <ExternalLinkButton size="lg" href={LINK.SPONSOR}>
                      <Heart />
                      Sponsor on GitHub
                      <ExternalLink className="size-3.5 opacity-60" />
                    </ExternalLinkButton>
                    <Button asChild size="lg" variant="outline">
                      <Link href={ROUTES.SPONSOR}>See supporters</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        <DocsTocRail
          toc={[
            { depth: 1, title: "Free forever", url: "#free" },
            { depth: 1, title: "Sponsor", url: "#sponsor" },
          ]}
        />
      </div>
    </PageTransition>
  </>
);

export default PricingPage;
