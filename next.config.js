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
}

module.exports = nextConfig 