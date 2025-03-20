/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimisticClientCache: true,
  },
  images: {
    unoptimized: true,
    // Optional: Configure remote patterns if you use external images
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.example.com',
    //   },
    // ],
  },
  // Required for Cloudflare Pages
  trailingSlash: true,
  // Disable ESLint during the build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during the build
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 