import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";
import vitest from "ultracite/oxlint/vitest";

export default defineConfig({
  extends: [core, react, next, vitest],
  ignorePatterns: [
    "public/r/**",
    ".agents/**",
    ".cursor/**",
    ".changeset/**",
    ".claude/**",
    ".web-kits/**",
    "audio/**",
    // Verbatim copies from the zolo project — do not reformat or relint
    "components/ui/badge.tsx",
    "components/ui/button.tsx",
    "components/ui/odia-icons1.tsx",
    "components/ui/separator.tsx",
    "components/ui/skeleton.tsx",
    "components/ui/spinner.tsx",
    "components/ui/label.tsx",
    "components/ui/input.tsx",
    "components/ui/textarea.tsx",
    "registry/**",
  ],
});
