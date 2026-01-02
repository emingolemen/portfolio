# Product Designer Portfolio

A modern, component-based portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/             # Reusable UI components
│   │   ├── ui/                # Base UI components
│   │   └── layout/            # Layout components
│   └── lib/                   # Utilities and helpers
├── public/                     # Static assets
└── ...
```

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account

3. Click "Add New Project" and import your GitHub repository

4. Vercel will auto-detect Next.js and configure the project automatically

5. Click "Deploy" - your site will be live in minutes!

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Automatic Deployments

- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically
- Deployments are instant and include preview URLs

## Customization

### Adding New Components

Create reusable components in `src/components/ui/` and export them from `src/components/ui/index.ts`.

### Styling

Modify `tailwind.config.ts` to customize colors, fonts, and other design tokens. Global styles can be added to `src/app/globals.css`.

### Layout

Update `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx` to customize the site header and footer.

## License

MIT

