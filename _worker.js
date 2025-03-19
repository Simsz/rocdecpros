// Cloudflare Worker for Next.js static site using KV for assets
export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;
      
      // Remove leading slash for KV lookups
      const key = pathname.replace(/^\//, '') || 'index.html';
      
      // For static sites with KV storage, need to fetch assets from KV
      if (env.__STATIC_CONTENT) {
        // Try to get the asset from KV
        let asset = await env.__STATIC_CONTENT.get(key, { type: 'arrayBuffer' });
        
        // If not found, and it's a route without extension, try with index.html
        if (!asset && (!pathname.includes('.') || pathname === '/')) {
          // Try with /index.html for routes
          const indexKey = pathname.replace(/\/$/, '') + '/index.html';
          asset = await env.__STATIC_CONTENT.get(indexKey.replace(/^\//, ''), { type: 'arrayBuffer' });
          
          // If still not found, try with just index.html (for root)
          if (!asset && (pathname === '/' || pathname === '')) {
            asset = await env.__STATIC_CONTENT.get('index.html', { type: 'arrayBuffer' });
          }
        }
        
        // If asset found, return it with appropriate content type
        if (asset) {
          const contentType = getContentType(key);
          return new Response(asset, {
            headers: { 'Content-Type': contentType }
          });
        }
      }
      
      // Fallback for SPA routing - return index.html for routes without extension
      if (!pathname.includes('.') || pathname === '/') {
        const indexContent = await env.__STATIC_CONTENT.get('index.html', { type: 'text' });
        if (indexContent) {
          return new Response(indexContent, {
            headers: { 'Content-Type': 'text/html' }
          });
        }
        
        // Final fallback if index.html isn't available
        return new Response("Welcome to Rochester Deck Pros", {
          headers: { 'Content-Type': 'text/html' }
        });
      }
      
      // 404 for all other cases
      return new Response("Not Found", { status: 404 });
    } catch (e) {
      return new Response("Error: " + e.message, { status: 500 });
    }
  }
}

// Helper function to determine content type based on file extension
function getContentType(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'txt': 'text/plain',
    'pdf': 'application/pdf',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'otf': 'font/otf',
    'webp': 'image/webp'
  };
  
  return contentTypes[ext] || 'application/octet-stream';
} 