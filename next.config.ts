import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    qualities: [75, 90],
  },
  // Remove problematic turbopack config that can cause infinite recompilation
};

export default nextConfig;