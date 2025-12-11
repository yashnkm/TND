import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/TND",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
