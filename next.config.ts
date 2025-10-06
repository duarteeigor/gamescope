import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
      },
    ],
    // qualities padrão podem ser usadas, ou apenas remova quality=100
  },
};

export default nextConfig;
