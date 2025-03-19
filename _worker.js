// Worker script that works in both Workers and Pages environments
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    try {
      // For static asset requests (files with extensions)
      if (url.pathname.match(/\.\w+$/)) {
        // First try with env.ASSETS if available (Pages)
        if (env && typeof env.ASSETS !== 'undefined' && typeof env.ASSETS.fetch === 'function') {
          return env.ASSETS.fetch(request);
        }
        
        // Otherwise fetch directly (Workers)
        return fetch(request);
      }
      
      // For page routes (no file extension)
      // First try index.html for the route if Pages
      if (env && typeof env.ASSETS !== 'undefined' && typeof env.ASSETS.fetch === 'function') {
        // Try to get the HTML for the route
        const routeUrl = new URL(url.pathname === '/' ? '/index.html' : `${url.pathname}.html`, url.origin);
        const response = await env.ASSETS.fetch(new Request(routeUrl, request));
        
        if (response.status === 200) {
          return response;
        }
        
        // Fall back to index.html for client-side routing
        return env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
      }
      
      // For Workers without ASSETS binding
      if (url.pathname === '/' || !url.pathname.includes('.')) {
        return fetch(new URL('/index.html', url.origin).toString());
      }
      
      return fetch(request);
    } catch (error) {
      console.error("Worker error:", error);
      return new Response(`Server error: ${error.message}`, { status: 500 });
    }
  }
} 