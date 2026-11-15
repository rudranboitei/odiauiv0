import { CommandBox } from "@/components/command-box";
import { HomeCtas } from "@/components/home-ctas";
import { PageTransition } from "@/components/page-transition";
import { ROUTES } from "@/constants/routes";
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
          <div className="min-h-min flex-1 w-full lg:mx-auto lg:max-w-[1400px] lg:border-x lg:border-grid">
            <section className="relative overflow-hidden border-b border-grid">
              <div className="relative flex flex-col items-center gap-4 px-4 py-16 text-center md:py-20 lg:py-24 lg:px-8">
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
          </div>
        </div>
      </PageTransition>
    </>
  );
}
