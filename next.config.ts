import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Link interni, canonical e sitemap usano lo slash finale (es. /teatro/).
  trailingSlash: true,
  // Evita che `next dev` generi AGENTS.md e CLAUDE.md nel repository.
  agentRules: false,
  // La pagina Chi sono è stata rimossa (16/11/2026): i vecchi link portano alla home.
  async redirects() {
    return [{ source: "/chi-sono/", destination: "/", permanent: true }];
  },
};

export default nextConfig;
