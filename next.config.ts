import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import type { NextConfig } from "next";

const repoName = "norgesgym_codex";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = (phase: string): NextConfig => {
  const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    distDir: isDevServer ? ".next-dev" : ".next",
    output: "export",
    basePath: isGitHubPages ? `/${repoName}` : "",
    assetPrefix: isGitHubPages ? `/${repoName}/` : "",
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
  };
};

export default nextConfig;
