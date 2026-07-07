import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.119"],
  turbopack: {
    resolveAlias: {
      "@": path.join(process.cwd(), "src"),
    },
  },
};

export default nextConfig;
