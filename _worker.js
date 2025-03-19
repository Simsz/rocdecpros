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
      
      // List keys in the KV namespace to find the correct file
      // This is necessary because Next.js adds hashes to filenames
      console.log("Listing KV namespace keys");
      const keys = await env.__STATIC_CONTENT.list();
      console.log(`Found ${keys.keys.length} keys in KV namespace`);
      
      // Handle root path or HTML pages without extension
      if (pathname === '/' || pathname === '') {
        console.log('Looking for index.html with hash');
        // Find the index.html file with hash
        const indexKey = keys.keys.find(key => 
          key.name.startsWith('index.') && key.name.endsWith('.html')
        );
        
        if (indexKey) {
          console.log(`Found index file: ${indexKey.name}`);
          const indexContent = await env.__STATIC_CONTENT.get(indexKey.name, { type: 'text' });
          return new Response(indexContent, {
            headers: { 'Content-Type': 'text/html' }
          });
        }
      }
      
      // For other paths, try to find the file with a hash
      if (pathname !== '/' && pathname !== '') {
        // Remove leading slash
        const cleanPath = pathname.replace(/^\//, '');
        
        // For paths without extensions (like /about), try to find a matching HTML file
        if (!cleanPath.includes('.')) {
          console.log(`Looking for HTML file for: ${cleanPath}`);
          
          // Try with /path/index.html format
          const folderIndexKey = keys.keys.find(key => 
            key.name.startsWith(`${cleanPath}/index.`) && key.name.endsWith('.html')
          );
          
          if (folderIndexKey) {
            console.log(`Found folder index: ${folderIndexKey.name}`);
            const content = await env.__STATIC_CONTENT.get(folderIndexKey.name, { type: 'text' });
            return new Response(content, {
              headers: { 'Content-Type': 'text/html' }
            });
          }
          
          // Try with path.html format
          const htmlKey = keys.keys.find(key => 
            key.name.startsWith(`${cleanPath}.`) && key.name.endsWith('.html')
          );
          
          if (htmlKey) {
            console.log(`Found HTML file: ${htmlKey.name}`);
            const content = await env.__STATIC_CONTENT.get(htmlKey.name, { type: 'text' });
            return new Response(content, {
              headers: { 'Content-Type': 'text/html' }
            });
          }
        } else {
          // For paths with extensions (like /style.css), find the file with hash
          const fileBaseName = cleanPath.split('.')[0];
          const fileExtension = cleanPath.split('.').pop();
          
          console.log(`Looking for: ${fileBaseName} with extension .${fileExtension}`);
          
          // Find a file that matches the pattern: name.[hash].extension
          const fileKey = keys.keys.find(key => {
            const keyParts = key.name.split('.');
            return keyParts[0] === fileBaseName && keyParts[keyParts.length - 1] === fileExtension;
          });
          
          if (fileKey) {
            console.log(`Found file: ${fileKey.name}`);
            const content = await env.__STATIC_CONTENT.get(fileKey.name, { type: 'arrayBuffer' });
            return new Response(content, {
              headers: { 'Content-Type': getContentType(fileKey.name) }
            });
          }
        }
      }
      
      // If no matching file was found, try 404 page
      console.log('Looking for 404.html');
      const notFoundKey = keys.keys.find(key => 
        key.name.startsWith('404.') && key.name.endsWith('.html')
      );
      
      if (notFoundKey) {
        console.log(`Serving 404 page: ${notFoundKey.name}`);
        const notFoundContent = await env.__STATIC_CONTENT.get(notFoundKey.name, { type: 'text' });
        return new Response(notFoundContent, {
          status: 404,
          headers: { 'Content-Type': 'text/html' }
        });
      }
      
      // Fallback response if nothing else worked
      console.log('No matching file found, returning fallback');
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