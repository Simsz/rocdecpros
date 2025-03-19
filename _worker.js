// Cloudflare Worker for Next.js static site using KV for assets
export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;
      
      console.log(`Request for: ${pathname}`);
      
      // Check if KV namespace is available
      if (!env.__STATIC_CONTENT) {
        console.error('__STATIC_CONTENT KV namespace is not available');
        return new Response("Error: KV namespace not configured", { status: 500 });
      }
      
      // Remove leading slash for KV lookups
      const key = pathname.replace(/^\//, '') || 'index.html';
      console.log(`Looking up key: ${key}`);
      
      // First, try to get the exact path from KV
      let asset = await env.__STATIC_CONTENT.get(key, { type: 'arrayBuffer' });
      
      // If not found and it's a route without extension, try with index.html
      if (!asset && (!pathname.includes('.') || pathname === '/')) {
        // Try with /index.html for routes
        const indexKey = pathname.replace(/\/$/, '') + '/index.html';
        console.log(`Asset not found, trying: ${indexKey.replace(/^\//, '')}`);
        asset = await env.__STATIC_CONTENT.get(indexKey.replace(/^\//, ''), { type: 'arrayBuffer' });
        
        // If still not found, try with just index.html (for root)
        if (!asset && (pathname === '/' || pathname === '')) {
          console.log('Trying root index.html');
          asset = await env.__STATIC_CONTENT.get('index.html', { type: 'arrayBuffer' });
        }
      }
      
      // If asset found, return it with appropriate content type
      if (asset) {
        console.log(`Asset found: ${key}`);
        const contentType = getContentType(key);
        return new Response(asset, {
          headers: { 'Content-Type': contentType }
        });
      }
      
      console.log('Asset not found, checking for index.html as fallback');
      
      // Fallback for SPA routing - return index.html for routes without extension
      if (!pathname.includes('.') || pathname === '/') {
        const indexContent = await env.__STATIC_CONTENT.get('index.html', { type: 'text' });
        if (indexContent) {
          console.log('Returning index.html as fallback');
          return new Response(indexContent, {
            headers: { 'Content-Type': 'text/html' }
          });
        }
        
        console.log('No index.html found, returning basic fallback');
        // Final fallback if index.html isn't available
        return new Response(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rochester Deck Pros</title>
            <style>
              body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
              .container { text-align: center; padding: 20px; }
              h1 { color: #333; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome to Rochester Deck Pros</h1>
              <p>Our website is currently under maintenance.</p>
              <p>Please check back soon!</p>
            </div>
          </body>
          </html>
        `, {
          headers: { 'Content-Type': 'text/html' }
        });
      }
      
      // 404 for all other cases
      console.log('Returning 404');
      return new Response("Not Found", { status: 404 });
    } catch (e) {
      console.error(`Error: ${e.message}`);
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