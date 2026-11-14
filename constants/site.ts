export const FALLBACK_SITE_ORIGIN = "https://odiaui.xyz" as const;

const getBaseUrl = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return process.env.SITE_URL ?? FALLBACK_SITE_ORIGIN;
};

const baseUrl = getBaseUrl();

export const SITE = {
  AUTHOR: {
    NAME: "Rudra Narayan Boitei",
    TWITTER: "@rudranboitei",
  },
  DESCRIPTION: {
    LONG: "An open-source shadcn/ui component registry for Odisha — accessible, themeable, and built with modern React.",
    SHORT: "A shadcn/ui library for Odisha",
  },
  KEYWORDS: [
    "odiaui",
    "odisha",
    "odia",
    "shadcn",
    "shadcn registry",
    "component registry",
    "shadcn components",
    "react components",
    "next.js",
    "tailwindcss",
    "npx shadcn add",
  ] as const,
  NAME: "odiaui",
  OG_IMAGE: `${baseUrl}/og`,
  REGISTRY: `${baseUrl}/r`,
  REGISTRY_ITEM: `${baseUrl}/r/{name}.json`,
  URL: baseUrl,
};

export const META_THEME_COLORS = {
  dark: "#120d09",
  light: "#f8f6f1",
};

export const UTM_PARAMS = {
  utm_source: new URL(baseUrl).hostname,
};
