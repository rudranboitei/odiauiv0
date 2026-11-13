<p align="center">
  <img src="https://odiaui.vercel.app/og" alt="odiaui banner" />
</p>

<h1 align="center">odiaui</h1>

<p align="center">
  A shadcn/ui component library for Odisha. Open source, accessible, and built to copy straight into your project.
  <br />
  <br />
  <a href="https://github.com/rudranboitei/odiaui/stargazers"><img src="https://img.shields.io/github/stars/rudranboitei/odiaui?style=flat&logo=github&label=Stars&labelColor=%2318181b&color=%23a1a1aa" alt="GitHub Stars" /></a>
  <a href="https://github.com/rudranboitei/odiaui/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/rudranboitei/odiaui/ci.yml?style=flat&logo=github&label=CI&labelColor=%2318181b&color=%23a1a1aa" alt="CI" /></a>
  <a href="https://x.com/rudranboitei"><img src="https://img.shields.io/x/follow/rudranboitei?style=flat&logo=x&label=Follow&labelColor=%2318181b&color=%23a1a1aa" alt="X Follow" /></a>
</p>

## Install

```bash
npx shadcn@latest add https://odiaui.vercel.app/r/button.json
```

Then import the component:

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Namaskar</Button>;
}
```

Or add the registry once and install by namespace:

```bash
npx shadcn@latest registry add "@odiaui=https://odiaui.vercel.app/r/{name}.json"
npx shadcn@latest add @odiaui/button
```

## Components

18 components, each carrying an Odisha touch — a faint Konark watermark, a chakra motif, an Ikat ornament — that you can turn off per instance.

| Component   | Install                                                              |
| ----------- | -------------------------------------------------------------------- |
| Accordion   | `npx shadcn@latest add https://odiaui.vercel.app/r/accordion.json`   |
| Button      | `npx shadcn@latest add https://odiaui.vercel.app/r/button.json`      |
| Badge       | `npx shadcn@latest add https://odiaui.vercel.app/r/badge.json`       |
| Card        | `npx shadcn@latest add https://odiaui.vercel.app/r/card.json`        |
| Separator   | `npx shadcn@latest add https://odiaui.vercel.app/r/separator.json`   |
| Skeleton    | `npx shadcn@latest add https://odiaui.vercel.app/r/skeleton.json`    |
| Spinner     | `npx shadcn@latest add https://odiaui.vercel.app/r/spinner.json`     |
| Label       | `npx shadcn@latest add https://odiaui.vercel.app/r/label.json`       |
| Input       | `npx shadcn@latest add https://odiaui.vercel.app/r/input.json`       |
| Textarea    | `npx shadcn@latest add https://odiaui.vercel.app/r/textarea.json`    |
| Alert       | `npx shadcn@latest add https://odiaui.vercel.app/r/alert.json`       |
| Avatar      | `npx shadcn@latest add https://odiaui.vercel.app/r/avatar.json`      |
| Switch      | `npx shadcn@latest add https://odiaui.vercel.app/r/switch.json`      |
| Radio Group | `npx shadcn@latest add https://odiaui.vercel.app/r/radio-group.json` |
| Dialog      | `npx shadcn@latest add https://odiaui.vercel.app/r/dialog.json`      |
| Sheet       | `npx shadcn@latest add https://odiaui.vercel.app/r/sheet.json`       |
| Slider      | `npx shadcn@latest add https://odiaui.vercel.app/r/slider.json`      |
| Toast       | `npx shadcn@latest add https://odiaui.vercel.app/r/toast.json`       |

## Features

- 📦 **shadcn/ui compatible** - Works with `npx shadcn add`
- 🛕 **Heritage by default** - Every component carries a visible-by-default Odisha touch (watermarks, motifs, ornaments), all opt-out-able per instance with a `watermark` prop
- ♿ **Accessible** - Built on Base UI primitives (with Radix Slot) with keyboard support
- 🌗 **Themeable** - CSS variables for light and dark mode; no hardcoded colors, only shadcn theme tokens
- 📚 **Documentation site** - Powered by Fumadocs
- 🤖 **Agent ready** - Ships with `llms.txt`, `llms-full.txt`, an API catalog, and agent skill discovery
- 🔊 **Web audio feedback** - Interaction sounds powered by `@web-kits/audio`
- 📳 **Web haptics** - Optional haptic feedback via `web-haptics`
- ✨ **Motion animations** - `motion`-powered UI polish
- 🎯 **Animated icons** - Reusable animated icons for navigation and CTAs
- 🔄 **View transitions** - Next.js view transitions enabled
- 🚀 **Deploy ready** - Deploy anywhere

## Built With

- `Next.js 16` with the App Router
- `React 19` and `TypeScript`
- `Tailwind CSS 4`
- `Base UI` for accessible primitives (plus `@radix-ui/react-slot`)
- `Fumadocs` for documentation
- `shiki` + `rehype-pretty-code` for code blocks
- `sonner` for toasts
- `@vercel/analytics` for analytics

## Local Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/rudranboitei/odiaui.git
cd odiaui
bun install
```

Start the dev server:

```bash
bun dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full component workflow.

## Project Structure

```
├── registry/
│   └── new-york/           # Component source files
│       └── button.tsx
├── registry.json           # Component registry manifest
├── examples/               # Live demos rendered in the docs
├── content/docs/           # Documentation (MDX)
├── components/             # Site components + installed UI at components/ui
├── app/                    # Next.js app
└── public/r/               # Built registry files (auto-generated)
```

## Scripts

- `bun dev` - Start the development server
- `bun run build` - Build the registry and production site
- `bun run registry:build` - Rebuild the component registry
- `bun run typecheck` - Run TypeScript checks
- `bun run check` - Lint and format with Ultracite
- `bun run fix` - Auto-fix lint and formatting issues

## Links

- Website: [odiaui.vercel.app](https://odiaui.vercel.app)
- Documentation: [odiaui.vercel.app/docs](https://odiaui.vercel.app/docs)
- Registry: [odiaui.vercel.app/r/registry.json](https://odiaui.vercel.app/r/registry.json)
- GitHub: [github.com/rudranboitei/odiaui](https://github.com/rudranboitei/odiaui)
- X: [@rudranboitei](https://x.com/rudranboitei)

## License

[MIT](./LICENSE)
