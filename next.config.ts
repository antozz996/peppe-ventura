import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Link interni, canonical e sitemap usano lo slash finale (es. /teatro/).
  trailingSlash: true,
  // Evita che `next dev` generi AGENTS.md e CLAUDE.md nel repository.
  agentRules: false,
};

export default nextConfig;
