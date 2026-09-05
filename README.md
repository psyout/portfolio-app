# Felipe Gonzalez — Portfolio

The source for Felipe Gonzalez's full-stack development and design portfolio.
It showcases selected projects, technical capabilities, and contact details in
a responsive single-page experience.

## Prerequisites

- Node.js `>=22.13.0`

## Development

```bash
npm install
npm run dev
```

The local development server runs with Vinext and Cloudflare's Vite integration.

## Project structure

- `app/page.tsx` contains the portfolio content and project data.
- `app/project-gallery.tsx` provides the accessible project carousels and lightbox.
- `app/globals.css` contains the site-wide responsive design.
- `public/static/images/` contains the portfolio photography and mockups.
- `.openai/hosting.json` configures the OpenAI Sites project.

## Commands

- `npm run dev`: start local development
- `npm run build`: create and validate the production build
- `npm run start`: serve the production build locally
- `npm run lint`: run the code quality checks
