import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      "@": path.join(process.cwd(), "src"),
    },
  },
  allowedDevOrigins: ["192.168.1.119"],
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/logos/**",
        search: "",
      },
    ],
    qualities: [75],
    formats: ["image/webp"],
  },
};

export default nextConfig;
