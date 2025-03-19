#!/bin/bash

# Update dependencies
echo "Updating dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Copy the worker to out directory (for reference)
echo "Copying worker script..."
cp _worker.js out/

# Deploy the worker directly using Wrangler with the worker config
echo "Deploying to Cloudflare Workers..."
npx wrangler deploy --config worker-config.toml

echo "Deployment completed!" 