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
    deviceSizes: [375, 768, 1024, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        // Ensure proper path resolution for images
        './public': './public',
      },
    },
  },
  // Remove problematic turbopack config that can cause infinite recompilation
};

export default nextConfig;