import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import manifestJSON from '__STATIC_CONTENT_MANIFEST'

const assetManifest = JSON.parse(manifestJSON)

export default {
  async fetch(request, env, ctx) {
    try {
      // Get the requested URL
      const url = new URL(request.url)
      
      try {
        // Try to get the asset from KV
        return await getAssetFromKV({
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        }, {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
        })
      } catch (e) {
        // If the page is not found, try to serve index.html
        // This is useful for SPA routing (client-side routing)
        if (e.status === 404) {
          url.pathname = '/'
          const indexRequest = new Request(url.toString(), request)
          return await getAssetFromKV({
            request: indexRequest,
            waitUntil: ctx.waitUntil.bind(ctx),
          }, {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: assetManifest,
          })
        }
        // If some other error, just return it
        return new Response(e.message || 'Error serving the requested asset', { status: e.status || 500 })
      }
    } catch (e) {
      // Log the error
      console.error(e)
      
      // Return a generic error message
      return new Response('Internal Error', { status: 500 })
    }
  },
} 