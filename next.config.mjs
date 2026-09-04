import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cms.secureguardservices.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
      }
    ],
  },
  experimental: {
    turbopack: {
      root: __dirname,
    }
  }
};

export default nextConfig;
