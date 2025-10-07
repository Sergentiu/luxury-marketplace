import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client"],
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "fallback-secret-for-build",
  },
};

export default nextConfig;