# Jeff Kabera — Portfolio

A high-performance, fully responsive personal portfolio built with **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Framer Motion**.

Live: [kabera-portfolio.onrender.com](https://kabera-portfolio.onrender.com)

## Features

- **Hero** — animated typewriter roles, floating badges, ambient glow
- **About** — animated stat counters, profile card
- **Skills** — categorized skill bars + infinite logo marquee
- **Projects** — spotlight cards with hover overlays, live demo / code links
- **Contact** — EmailJS-powered form (no backend) + WhatsApp, email, social links
- **Performance** — code-split sections, lazy-loaded images (WebP), self-hosted fonts, zero backdrop-blur/filter layers, GPU-composited animations
- **SEO** — Open Graph + Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`, canonical URL
- **Accessibility** — skip-to-content link, visible focus states, `prefers-reduced-motion` support
- **Robustness** — React error boundary, styled 404 page

## Tech Stack

- React 19 · Vite 7 · Tailwind CSS v4 · Framer Motion
- EmailJS (contact form) · react-icons
- Fonts: Inter + Space Grotesk (self-hosted via Fontsource)

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Configuration

The contact form supports these optional deployment variables:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Copy `.env.example` to `.env.local` for local use and set the same values in Render. EmailJS browser keys are public by design; configure its allowed origins and anti-spam protection in the EmailJS dashboard.

GitHub Actions runs linting and a production build for pushes to `main` and pull requests.

## Deployment

Hosted on **Render** (static site). The repo includes:

- `render.yaml` — Render Blueprint (build `npm run build`, publish `dist/`)
- `public/_headers` — security + caching headers
- `public/_redirects` — route normalization

Deploy: connect this repo to Render → **New → Blueprint** (or Static Site). Push to `main` auto-deploys.

## Structure

```
src/
  Components/    # Hero, About, Skills, Projects, Contact, Typewriter, Counter, ErrorBoundary
  Layout/        # Navigation, Footer
  App.jsx        # lazy section loading + idle chunk warming
public/          # images, favicons, og-image, resume, seo files
```

## Contact

- Email: jeffkaberagithara@gmail.com
- GitHub: [jeffkaberagithara-guru](https://github.com/jeffkaberagithara-guru)
- LinkedIn: [kabera-githara-21067839b](https://linkedin.com/in/kabera-githara-21067839b)
- Twitter/X: [@JeffKaberaDev](https://twitter.com/JeffKaberaDev)
