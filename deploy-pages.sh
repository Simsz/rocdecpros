#!/bin/bash

# Update dependencies
echo "Updating dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Copy worker and routes config to output directory
echo "Setting up worker and routes..."
cp _worker.js out/
cp _routes.json out/

# Deploy using Wrangler Pages
echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out --project-name=rochesterdeckpros

echo "Deployment completed!" 