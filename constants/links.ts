export const GITHUB = {
  branch: "main",
  org: "rudranboitei",
  repo: "odiaui",
  user: "rudranboitei",
} as const;

const githubUrl = `https://github.com/${GITHUB.org}/${GITHUB.repo}`;

export const LINK = {
  DISCUSSIONS: `${githubUrl}/discussions`,
  GITHUB: githubUrl,
  LICENSE: `${githubUrl}/blob/${GITHUB.branch}/LICENSE`,
  PORTFOLIO: "https://rudranboitei.com",
  SHADCN_MCP_DOCS: "https://ui.shadcn.com/docs/mcp",
  SPONSOR: `https://github.com/sponsors/${GITHUB.user}`,
  X: "https://x.com/rudranboitei",
} as const;
