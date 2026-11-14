# Contributing to odiaui

Thanks for contributing! This guide covers the whole component workflow — from a fresh clone to a registry-installable component with docs.

## Getting Started

```bash
git clone https://github.com/rudranboitei/odiaui.git
cd odiaui
bun install
bun dev
```

The site runs at [http://localhost:3000](http://localhost:3000). The docs live at `/docs`.

Before pushing, make sure all checks pass:

```bash
bun run check      # lint + format (Ultracite)
bun run typecheck  # TypeScript
bun run build      # registry + production build
```

## Component Workflow

Every component lives in **three places** and they must stay in sync:

| Path                                 | Purpose                                            |
| ------------------------------------ | -------------------------------------------------- |
| `components/ui/<name>.tsx`           | The working copy used by the site itself           |
| `registry/new-york/<name>.tsx`       | The registry copy that users install               |
| `registry.json`                      | The registry manifest                              |
| `examples/<name>.tsx`                | Live demo rendered by `<ComponentPreview>` in docs |
| `content/docs/components/<name>.mdx` | The docs page                                      |

### 1. Write the component

Create `components/ui/<name>.tsx`. Imports must use the alias:

```tsx
import { cn } from "@/lib/utils";
```

Design rules:

- **Theme tokens only.** No hardcoded hex values — colors must come from shadcn theme tokens (`primary`, `muted`, `border`, `card`, …) so components follow the user's theme in light and dark mode.
- **Heritage is visible by default, and opt-out-able.** Components carry a cultural touch — a faint deula/chakra watermark, a motif thumb, an Ikat ornament — on by default, but each one accepts a `watermark` prop (`"none"` turns it off). Never force heritage on users who don't want it.
- **Reuse existing art.** Cultural icons come from the `BadgeIcon` set in `components/ui/badge.tsx` (`BADGE_ICONS`). Import them — don't copy SVG paths.
- **Match the existing component API style.** Look at `sheet.tsx` or `card.tsx` for the conventions.

### 2. Sync the registry copy

```bash
cp components/ui/<name>.tsx registry/new-york/<name>.tsx
```

The two files must stay **byte-identical**.

### 3. Register it

Add an entry to `registry.json`:

```json
{
  "name": "my-component",
  "type": "registry:ui",
  "title": "My Component",
  "description": "What it is and what heritage features it has.",
  "registryDependencies": ["badge"],
  "files": [
    {
      "path": "registry/new-york/my-component.tsx",
      "type": "registry:ui",
      "target": "components/ui/my-component.tsx"
    }
  ]
}
```

List `registryDependencies` if the component imports from another registry component (e.g. `badge` for icons), and `dependencies` for npm packages beyond the base install.

### 4. Build the registry

```bash
bun run registry:build
```

This generates the installable JSON in `public/r/` — including `public/r/<name>.json`. Commit the generated files.

### 5. Add an example

Create `examples/<name>.tsx` with a default-exported demo (a named export like `export const MyDemo` also works). `<ComponentPreview name="<name>">` and `<ComponentSource name="<name>">` in the docs resolve to this file, so one example powers both the live preview and the shown source.

### 6. Write the docs page

Create `content/docs/components/<name>.mdx`:

```mdx
---
title: My Component
description: Matches the registry.json description.
---

<ComponentPreview name="my-component">
  <MyDemo />
</ComponentPreview>

## Installation

\`\`\`bash
npx shadcn@latest add https://odiaui.xyz/r/my-component.json
\`\`\`

## Usage

...
```

Then add it to `content/docs/components/meta.json` so it appears in the sidebar.

### 7. Verify

```bash
bun run check
bun run typecheck
bun run build
```

The build compiles the site and renders every MDX page, so a broken example or docs file will fail here.

## Component Design Files (Maintainers)

Files you design by hand (rather than adapting stock shadcn code) are excluded from lint and formatting so manual styling stays untouched. If you add such a file, list it in **both** ignore patterns:

- `oxfmt.config.ts` (formatting)
- `oxlint.config.ts` (linting)

## Conventions

- **Install URLs** always use the production registry: `npx shadcn@latest add https://odiaui.xyz/r/<name>.json` — docs install tabs trigger on `npx`/`npm` prefixes.
- **No `asChild`.** Components are Base UI-based; use the `render` prop for composition instead.
- **Commits** use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`.

## Pull Requests

1. Fork the repo and create your branch from `main`.
2. Keep the three component copies in sync (`components/ui`, `registry/new-york`, built `public/r`).
3. Run the three checks (`check`, `typecheck`, `build`) before opening the PR.
4. Describe what the component does and how its heritage features are opt-out-able.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
