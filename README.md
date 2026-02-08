# Trace That Tome

A simple product campaign page for **Trace That Tome**—a bookmark with a built-in tracking tag so you can find your book when you misplace it. Built as a static site for a kid's school project.

## Tech stack

- **Next.js 16** (App Router) with **static export**
- **React 19** and **TypeScript**
- **Tailwind CSS v4** for styling
- **ShadCN** (New York, Zinc + Blue) for UI components

## Getting started

1. Install dependencies (requires network access):

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. Build for production (static export):

   ```bash
   npm run build
   ```

   Output is written to the `out/` directory.

4. Deploy: serve the `out/` folder with any static host (e.g. Vercel, Netlify, or a simple file server).

## Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `npm run dev` | Start development server   |
| `npm run build` | Build static site to `out/` |
| `npm run start` | Serve production build (requires build first) |
| `npm run lint` | Run ESLint                 |

## Project structure

- `app/` – Next.js App Router (layout, page, globals.css)
- `components/ui/` – ShadCN components (Button, Card)
- `lib/` – utilities (e.g. `cn` for class names)

No backend or real checkout; the “Order now” CTA uses a `mailto:` link for the school project.
