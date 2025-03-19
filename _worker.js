// Cloudflare Worker for Next.js static site
export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      
      // For static sites, we should rely on __STATIC_CONTENT
      // instead of additional service bindings
      if (env.__STATIC_CONTENT) {
        const response = await env.__STATIC_CONTENT.fetch(request);
        
        // If we found the asset, return it
        if (response.status < 400) {
          return response;
        }
      }
      
      // Handle standard routes with fallback for SPA
      if (url.pathname === '/' || !url.pathname.includes('.')) {
        // Either serve index.html from static content or provide fallback
        try {
          const indexRequest = new Request(`${url.origin}/index.html`, request);
          if (env.__STATIC_CONTENT) {
            const indexResponse = await env.__STATIC_CONTENT.fetch(indexRequest);
            if (indexResponse.status < 400) {
              return indexResponse;
            }
          }
        } catch (e) {
          console.error("Error serving index:", e);
        }
        
        // Fallback if index.html isn't available
        return new Response("Welcome to Rochester Deck Pros", {
          headers: { "Content-Type": "text/html" }
        });
      }
      
      // 404 for all other cases
      return new Response("Not Found", { status: 404 });
    } catch (e) {
      return new Response("Error: " + e.message, { status: 500 });
    }
  }
} 