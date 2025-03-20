// Cloudflare Worker for Next.js static site using KV for assets
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle static assets
    try {
      // Get static assets from KV
      const asset = await env.ASSETS.fetch(new Request(url, request));
      if (asset) {
        return asset;
      }
      
      // If KV doesn't have it, look for a file in the static directory
      // Create a new request with the same URL but for the static file
      const staticRequest = new Request(`${url.origin}${url.pathname}${url.pathname.endsWith('/') ? 'index.html' : ''}`, request);
      const response = await fetch(staticRequest);
      
      if (response.ok) {
        return response;
      }
      
      // If the request still fails, try appending .html
      if (!url.pathname.endsWith('.html') && !url.pathname.endsWith('/')) {
        const htmlRequest = new Request(`${url.origin}${url.pathname}.html`, request);
        const htmlResponse = await fetch(htmlRequest);
        
        if (htmlResponse.ok) {
          return htmlResponse;
        }
      }
      
      // If the direct path wasn't found, try the 404 page
      return await fetch(`${url.origin}/404.html`, request);
    } catch (e) {
      return new Response('An error occurred: ' + (e.message || e.toString()), { status: 500 });
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