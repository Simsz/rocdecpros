/** @type {import('next').NextConfig} */
const nextConfig = {
  // We need to set output to export for Cloudflare Pages
  output: 'export',
  // Experimental features might differ in Next.js 14, remove the ones not supported
  experimental: {
    // optimisticClientCache is not in Next.js 14
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