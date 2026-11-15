import { BoxIcon, CheckIcon, SproutIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { DocsTocFooter } from "@/components/docs-toc-footer";
import { DocsTocRail } from "@/components/docs-toc-rail";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { GITHUB, LINK } from "@/constants/links";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { BreadcrumbJsonLd } from "@/seo/json-ld";
import { createPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  description:
    "Simple pricing for odiaui — start free on Starter, upgrade to Growth when your team needs more.",
  path: ROUTES.PRICING,
  title: "Pricing",
});

const PLANS = [
  {
    cta: { href: ROUTES.DOCS_COMPONENTS, label: "Get Started" },
    description: "Perfect for solo founders\nand early-stage projects.",
    featured: false,
    features: [
      "1 connected account",
      "Real-time dashboard access",
      "Basic reporting",
      "Email support",
      "Up to 2 team members",
    ],
    icon: BoxIcon,
    id: "starter",
    name: "Starter",
    price: "$0",
  },
  {
    cta: { href: ROUTES.DOCS_COMPONENTS, label: "Get Started" },
    description: "Ideal for growing teams\nwho need deeper insights.",
    featured: true,
    features: [
      "Up to 5 connected accounts",
      "Advanced analytics",
      "Automated reports",
      "Priority email support",
      "Up to 10 team members",
    ],
    icon: SproutIcon,
    id: "growth",
    name: "Growth",
    price: "$25",
  },
];

const CARD_LOOK = "rounded-3xl bg-card shadow-xl";

/* Icon chip + name, big price, two-line description, pill button,
   hairline divider, then the check-list — shared by both cards */
const PlanBody = ({ plan }: { plan: (typeof PLANS)[number] }) => {
  const Icon = plan.icon;

  return (
    <>
      <div className="flex items-center gap-2.5">
        <span className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-full">
          <Icon className="text-foreground size-4.5" strokeWidth={1.5} />
        </span>
        <h2 className="text-2xl font-medium tracking-[-0.03em]">{plan.name}</h2>
      </div>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-5xl font-medium tracking-[-0.05em]">
          {plan.price}
        </span>
        <span className="text-muted-foreground text-lg tracking-[-0.03em]">
          / mo
        </span>
      </div>

      <p className="text-muted-foreground mt-3.5 text-sm leading-relaxed tracking-[-0.02em] whitespace-pre-line">
        {plan.description}
      </p>

      {plan.featured ? (
        <Button
          className="mt-6 h-11 w-full text-primary-foreground shadow-md"
          size="default"
        >
          {plan.cta.label}
        </Button>
      ) : (
        <Button
          asChild
          className="bg-foreground hover:bg-foreground/90 mt-6 h-11 w-full text-background"
          size="default"
        >
          <Link href={plan.cta.href}>{plan.cta.label}</Link>
        </Button>
      )}

      <div className="bg-border my-6 h-px" />

      <ul className="flex flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-3 text-sm" key={feature}>
            <CheckIcon
              className="text-muted-foreground mt-0.5 size-4.5 shrink-0"
              strokeWidth={1.5}
            />
            <span className="text-muted-foreground tracking-[-0.02em]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

const PricingPage = () => (
  <>
    <BreadcrumbJsonLd items={[{ name: "Pricing", path: ROUTES.PRICING }]} />
    <PageTransition>
      <div className="flex items-stretch xl:w-full">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="h-(--top-spacing) shrink-0" />
          <section className="relative overflow-hidden border-b border-grid">
            <div className="relative flex flex-col items-center gap-4 px-4 py-12 text-center md:py-16 lg:py-20 lg:px-8">
              <p className="text-muted-foreground text-[0.7rem] font-medium tracking-[0.18em] uppercase">
                simple pricing
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
                Pricing
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground text-balance sm:text-xl">
                Start free. Upgrade when your team needs more.
              </p>
            </div>
          </section>

          <section
            className="border-grid border-b px-4 py-12 lg:px-8 lg:py-16"
            id="plans"
          >
            <div className="mx-auto grid w-full max-w-4xl items-center gap-6 lg:grid-cols-2">
              {PLANS.map((plan) =>
                plan.featured ? (
                  /* Featured: a blue-gradient shell — banner strip on top,
                     then the white body inset by 1px so the gradient reads
                     as a hairline ring around it (radius 24 / radius 23) */
                  <div
                    className={cn(
                      "bg-[linear-gradient(125deg,color-mix(in_srgb,var(--primary)_88%,white)_0%,color-mix(in_srgb,var(--primary)_72%,white)_66%)] overflow-hidden rounded-3xl p-px shadow-xl"
                    )}
                    id={plan.id}
                    key={plan.id}
                  >
                    <div className="flex flex-col">
                      <p className="py-3 text-center text-sm tracking-[-0.02em] text-primary-foreground">
                        Best Deal
                      </p>
                      <div className="rounded-[calc(1.5rem-1px)] bg-card px-7 pb-7 pt-6">
                        <PlanBody plan={plan} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={CARD_LOOK} id={plan.id} key={plan.id}>
                    <div className="flex flex-col p-7">
                      <PlanBody plan={plan} />
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
        <DocsTocRail
          toc={[
            { depth: 1, title: "Starter", url: "#starter" },
            { depth: 1, title: "Growth", url: "#growth" },
          ]}
        >
          <DocsTocFooter
            editHref={`${LINK.GITHUB}/edit/${GITHUB.branch}/app/(app)/(pages)/pricing/page.tsx`}
          />
        </DocsTocRail>
      </div>
    </PageTransition>
  </>
);

export default PricingPage;
