import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Link interni, canonical e sitemap usano lo slash finale (es. /teatro/).
  trailingSlash: true,
};

export default nextConfig;
