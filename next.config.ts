// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     // Yeh built-in flag Turbopack engine ko bina kisi external PostCSS config ke automatic Tailwind compile karne par force karega
//     optimizeCss: true,
//   },
// };

// export default nextConfig;










import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Yeh built-in utility Turbopack ko force karegi naye components layout par styles overlay karne ke liye
    optimizeCss: true,
  }
};

export default nextConfig;