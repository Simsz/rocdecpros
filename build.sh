#!/bin/bash

# This script handles the build process for Cloudflare Pages

# Print commands for debugging
set -ex

# Install dependencies using npm install (not npm ci)
npm install

# Run the next-on-pages build
npx @cloudflare/next-on-pages

# Output success message
echo "Build completed successfully!" 