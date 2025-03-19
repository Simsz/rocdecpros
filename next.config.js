/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export
  experimental: {
    optimisticClientCache: true,
  },
  images: {
    unoptimized: true, // Required for static export
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