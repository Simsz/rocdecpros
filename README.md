# Rochester Deck Pros Website

A professional website for Rochester Deck Pros, a deck building and maintenance company based in Rochester, NY. This website is built with Next.js and TypeScript, and is designed to be deployed to Cloudflare Workers.

## Features

- Fast, responsive design using Tailwind CSS
- Modern, clean UI with Rochester, NY theming
- Optimized for Cloudflare Workers deployment
- Three main pages: Home, Services, and Gallery
- Mobile-friendly navigation
- Rochester-themed content and styling with black/red color scheme

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Workers
- **Image Optimization**: Next.js Image component (configured for Cloudflare)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rochesterdeckpros.git
   cd rochesterdeckpros
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Deploying to Cloudflare Workers

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

3. Configure wrangler.toml (if not already present):
   ```toml
   name = "rochesterdeckpros"
   type = "javascript"
   account_id = "your-account-id"
   workers_dev = true
   compatibility_date = "2023-01-01"

   [site]
   bucket = "./.next/static"
   entry-point = "."

   [build]
   command = "npm run build"
   ```

4. Deploy to Cloudflare Workers:
   ```bash
   wrangler deploy
   ```

## Project Structure

- `src/app/` - Main application pages using Next.js App Router
- `src/components/` - Reusable UI components
- `public/` - Static assets including images
- `src/app/globals.css` - Global styles and Tailwind utilities

## Image Placeholder Notes

The website uses placeholder paths for images. In a production environment, you would:

1. Replace placeholder images in the `/public/images/` directory with actual company photos
2. Update image paths in the codebase if necessary

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact [your email or contact info].
