#!/bin/bash

# This script handles the build process for Cloudflare Pages

# Print commands for debugging
set -ex

# Remove package-lock.json first to force a fresh install
rm -f package-lock.json

# Install dependencies using npm install (not npm ci)
npm install

# Run the next-on-pages build
npx @cloudflare/next-on-pages

# Fix the _routes.json file in the output directory
# Create a temporary fixed _routes.json file
cat > fixed_routes.json << 'EOL'
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_next/*",
    "/api/*",
    "/favicon.ico",
    "/robots.txt",
    "/*.ico",
    "/*.png",
    "/*.svg",
    "/*.jpg",
    "/*.jpeg",
    "/*.gif",
    "/*.webp",
    "/*.css",
    "/*.js",
    "/*.json",
    "/*.woff",
    "/*.woff2",
    "/*.ttf",
    "/*.otf"
  ],
  "routes": [
    { "src": "/", "dest": "/index.html" },
    { "src": "/services", "dest": "/index.html" },
    { "src": "/services/", "dest": "/index.html" },
    { "src": "/gallery", "dest": "/index.html" },
    { "src": "/gallery/", "dest": "/index.html" },
    { "src": "/(.*)/", "dest": "/index.html" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOL

# Copy the fixed routes file to both the root output directory and any possible worker directory
cp fixed_routes.json .vercel/output/static/_routes.json
cp fixed_routes.json .vercel/output/static/_worker.js/_routes.json 2>/dev/null || true
cp _worker.js .vercel/output/static/

# Output success message
echo "Build completed successfully!" 