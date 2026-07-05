import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stray lockfiles exist in parent directories; pin the workspace root so
  // Turbopack doesn't infer the wrong one.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
