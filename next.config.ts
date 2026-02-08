// next.config.ts
import type { NextConfig } from "next";

const repo = "press-kit"; // <- NOME DO REPO no GitHub
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",          // static export (necessário para GitHub Pages)
  trailingSlash: true,       // ajuda no roteamento estático
  images: { unoptimized: true }, // evita otimização do next/image (não rola no Pages)

  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
