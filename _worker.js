// Worker for Cloudflare Pages
export default {
  async fetch(request, env) {
    // Just pass directly to static assets
    return env.ASSETS.fetch(request);
  }
} 