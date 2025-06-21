import type { NextConfig } from "next";
import path from "path"; 

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Add custom Webpack alias config
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname), // 👈 Maps "@" to the project root
    };
    return config;
  },

};

export default nextConfig;

