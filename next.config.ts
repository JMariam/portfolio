import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  output: 'export', // Generate static files
  // Optional: Add if using trailing slashes in URLs
  trailingSlash: true,
};

export default nextConfig;
