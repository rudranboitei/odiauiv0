import { DemoGridCard } from "@/components/demo-grid-card";
import { formatCode } from "@/lib/format-code";
import { highlightCode } from "@/lib/highlight-code";
import { getDemoSource } from "@/lib/registry";

export interface DemoGridItem {
  /** Example file name (without extension) — source of both the demo and the code. */
  name: string;
  title: string;
  description?: string;
  /** Optional install command shown in the dialog. */
  install?: string;
  /** Live demo rendered in the card and inside the dialog. */
  demo: React.ReactNode;
}

/**
 * Docs gallery: a responsive grid of demo cards.
 *
 * Clicking a card opens an odia-dialog with the live demo, its full source
 * code (read + highlighted at build time so preview and code never drift),
 * and an optional install command.
 */
export const DemoGrid = async ({ items }: { items: DemoGridItem[] }) => {
  const prepared = await Promise.all(
    items.map(async ({ demo, ...item }) => {
      const raw = await getDemoSource(item.name);
      const formatted = raw ? await formatCode(raw) : null;
      const html = formatted ? await highlightCode(formatted) : null;
      return { ...item, demo, html };
    })
  );

  return (
    <div
      className={
        "not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {prepared.map((item) => (
        <DemoGridCard
          description={item.description}
          demo={item.demo}
          html={item.html}
          install={item.install}
          key={item.name}
          title={item.title}
        />
      ))}
    </div>
  );
};
