<p align="center">
  <img src="https://odiaui.xyz/og" alt="odiaui banner" />
</p>

<h1 align="center">odiaui</h1>
<p align="center">
  <a href="https://github.com/rudranboitei/odiaui/stargazers"><img src="https://img.shields.io/github/stars/rudranboitei/odiaui?style=flat&logo=github&label=Stars&labelColor=18181b&color=a1a1aa" alt="GitHub Stars" /></a>
  <a href="https://github.com/rudranboitei/odiaui/network/members"><img src="https://img.shields.io/github/forks/rudranboitei/odiaui?style=flat&logo=github&label=Forks&labelColor=18181b&color=a1a1aa" alt="GitHub Forks" /></a>
  <a href="https://github.com/rudranboitei/odiaui/issues"><img src="https://img.shields.io/github/issues/rudranboitei/odiaui?style=flat&logo=github&label=Issues&labelColor=18181b&color=a1a1aa" alt="Open Issues" /></a>
  <a href="https://github.com/rudranboitei/odiaui/commits"><img src="https://img.shields.io/github/last-commit/rudranboitei/odiaui?style=flat&logo=github&label=Last%20Commit&labelColor=18181b&color=a1a1aa" alt="Last Commit" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/rudranboitei/odiaui?style=flat&label=License&labelColor=18181b&color=a1a1aa" alt="License" /></a>
</p>

## Install

```bash
npx shadcn@latest add https://odiaui.xyz/r/odia-button.json
```

Then import the component:

```tsx
import { Button } from "@/components/odia/odia-button";

export function Example() {
  return <Button>Namaskar</Button>;
}
```

Components install under unique `odia-*` names into `components/odia/`, so they never overwrite your base shadcn components.

Or add the registry once and install by namespace:

```bash
npx shadcn@latest registry add "@odiaui=https://odiaui.xyz/r/{name}.json"
npx shadcn@latest add @odiaui/odia-button
```

## Components

| Component   | Install                                                                       |
| ----------- | ----------------------------------------------------------------------------- |
| Odia Button | `npx shadcn@latest add https://odiaui.xyz/r/odia-button.json`                 |
| Odia Dialog | `npx shadcn@latest add https://odiaui.xyz/r/odia-dialog.json`                 |

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
├── components/
│   └── odia/               # Component source files (single source of truth)
│       ├── odia-button.tsx
│       ├── odia-dialog.tsx
│       └── odia-icons.tsx
├── registry.json           # Component registry manifest
├── examples/               # Live demos rendered in the docs
├── content/docs/           # Documentation (MDX)
├── components/ui/          # Site-only re-exports + shadcn primitives
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

- Website: [odiaui.xyz](https://odiaui.xyz)
- Documentation: [odiaui.xyz/docs](https://odiaui.xyz/docs)
- Registry: [odiaui.xyz/r/registry.json](https://odiaui.xyz/r/registry.json)
- GitHub: [github.com/rudranboitei/odiaui](https://github.com/rudranboitei/odiaui)
- X: [@rudranboitei](https://x.com/rudranboitei)

## License

[MIT](./LICENSE)
