# Rochester Deck Pros Website

A modern, responsive website for Rochester Deck Pros, a premium deck building company based in Rochester, NY.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: Chakra UI
- **Styling**: Emotion
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Cloudflare Workers

## Features

- Modern, mobile-responsive design
- Dark and light mode support
- Three main pages:
  - Home page with hero section, features, about us, and services preview
  - Services page with detailed service descriptions, process, and FAQs
  - Gallery page with project showcase and filtering by category
- Contact form component on every page
- Custom black and red theming that highlights Rochester aesthetic

## Local Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Simsz/rocdecpros.git
   cd rocdecpros
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) with your browser to see the result

## Deployment on Cloudflare Workers

### Setup GitHub Integration with Cloudflare

1. Go to the Cloudflare Workers & Pages dashboard
2. Click "Create application"
3. Choose "Pages" and connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Build output directory: `.vercel/output/static`
5. Deploy the project

### Manual Deployment

You can also deploy manually using Wrangler:

```bash
npm run build
npx wrangler deploy
```

## Project Structure

```
.
├── public/            # Static assets
├── src/
│   ├── app/           # App router pages
│   │   ├── page.tsx   # Home page
│   │   ├── services/  # Services page
│   │   ├── gallery/   # Gallery page
│   │   └── layout.tsx # Root layout
│   ├── components/    # Reusable components
│   │   ├── ui/        # UI components
│   │   ├── Navbar.tsx # Navigation
│   │   ├── Footer.tsx # Footer
│   │   └── ...        # Other components
│   └── theme.ts       # Chakra UI custom theme
└── wrangler.toml      # Cloudflare Workers configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.
