import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Yeh built-in utility Turbopack ko force karegi naye components layout par styles overlay karne ke liye
    optimizeCss: true,
  }
};

export default nextConfig;