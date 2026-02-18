// next.config.ts
import type { NextConfig } from "next";

const repo = "press-kit"; // NOME EXATO do repositório no GitHub
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // obrigatório para static export
  trailingSlash: true, // evita problemas de rota no Pages
  images: {
    unoptimized: true, // necessário porque o Pages não roda o image optimizer
  },

  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
