<p align="center">
  <img src="https://odiaui.vercel.app/og" alt="odiaui banner" />
</p>

<h1 align="center">odiaui</h1>

<p align="center">
  A shadcn/ui component library for Odisha. Open source, accessible, and built to copy straight into your project.
  <br />
  <br />
  <a href="https://github.com/rudranboitei/odiaui"><img src="https://www.shieldcn.dev/github/stars/rudranboitei/odiaui.svg?variant=secondary&size=xs&theme=zinc" alt="GitHub Stars" /></a>
  <a href="https://github.com/rudranboitei/odiaui/actions"><img src="https://www.shieldcn.dev/github/ci/rudranboitei/odiaui.svg?variant=secondary&size=xs&theme=zinc" alt="CI" /></a>
  <a href="https://x.com/rudranboitei"><img src="https://www.shieldcn.dev/x/follow/rudranboitei.svg?variant=branded&size=xs&theme=zinc" alt="X Follow" /></a>
</p>

## Install

```bash
npx shadcn@latest add https://odiaui.vercel.app/r/button.json
```

Then import the component:

```tsx
import { RollingButton } from "@/components/ui/button";

export function Example() {
  return <RollingButton>Namaskar</RollingButton>;
}
```

Or add the registry once and install by namespace:

```bash
npx shadcn@latest registry add "@odiaui=https://odiaui.vercel.app/r/{name}.json"
npx shadcn@latest add @odiaui/button
```

## Components

| Component      | Install                                                         |
| -------------- | --------------------------------------------------------------- |
| Rolling Button | `npx shadcn@latest add https://odiaui.vercel.app/r/button.json` |
| Badge          | `npx shadcn@latest add https://odiaui.vercel.app/r/badge.json`  |
| Card           | `npx shadcn@latest add https://odiaui.vercel.app/r/card.json`   |

## Features

- 📦 **shadcn/ui compatible** - Works with `npx shadcn add`
- ♿ **Accessible** - Built on Radix primitives with keyboard support
- 🌗 **Themeable** - CSS variables for light and dark mode
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
- `Fumadocs` for documentation
- `shiki` + `rehype-pretty-code` for code blocks
- `sonner` for toasts
- `radix-ui` + `vaul` for accessible primitives
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

## Adding a Component

1. Create the component in `registry/new-york/`, for example `registry/new-york/badge.tsx`.
2. Register it in `registry.json` with a name, title, description, and file path.
3. Build the registry so the installable JSON is generated:

```bash
bun run registry:build
```

4. Add a docs page at `content/docs/components/<name>.mdx` and list it in `content/docs/components/meta.json`.

`registry/new-york/your-component.tsx` is a local placeholder you can copy when starting a new component. It is not published in the registry.

## Project Structure

```
├── registry/
│   └── new-york/           # Component source files
│       └── button.tsx
├── registry.json           # Component registry manifest
├── content/docs/           # Documentation (MDX)
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
