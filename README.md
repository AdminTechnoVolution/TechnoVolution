# Techno Volution — Corporate Landing Page

Premium corporate landing page for **Techno Volution**, built with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Design Identity

Palette extracted from the official logo:

| Token | Hex | Usage |
|-------|-----|-------|
| Navy Deep | `#060E1A` | Primary background |
| Navy | `#0B1B32` | Alternate sections |
| Cyan | `#00D2FF` | Highlights, accents |
| Purple | `#7029FF` | Brand gradient mid |
| Magenta | `#FF00D4` | CTA accents |
| White | `#FFFFFF` | Text, contrast |

**Direction:** Neo-futuristic professional — dark mode, glassmorphism cards, evolution gradient (cyan → purple → magenta), circuit motifs, smooth scroll animations.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Button, Input, Textarea, Card, Badge)
- **Framer Motion** (scroll & hover animations)
- **Lucide React** (icons)

## Project Structure

```
techno-volution-web/
├── public/
│   └── logo.png                 # Official logo
├── src/
│   ├── app/
│   │   ├── globals.css          # Theme + brand tokens
│   │   ├── layout.tsx           # SEO metadata, fonts
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx       # Sticky nav
│   │   │   └── footer.tsx
│   │   ├── sections/            # All 12 content sections
│   │   └── ui/                  # Reusable UI + shadcn
│   ├── config/                  # Editable data arrays
│   │   ├── content.ts           # Company copy
│   │   ├── navigation.ts
│   │   ├── products.ts
│   │   ├── values.ts
│   │   ├── clients.ts           # Placeholders
│   │   ├── partnerships.ts      # Placeholders
│   │   ├── team.ts
│   │   └── technologies.ts
│   └── lib/
│       └── utils.ts
├── components.json
├── package.json
└── README.md
```

## Installation

```bash
cd techno-volution-web
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Editing Content

All content is centralized in `src/config/`:

- **Company copy:** `content.ts`
- **Products:** `products.ts`
- **Team:** `team.ts`
- **Clients (placeholders):** `clients.ts` — replace with real names/logos
- **Partnerships (placeholders):** `partnerships.ts`
- **Technologies:** `technologies.ts`
- **Values:** `values.ts`

## Deployment Recommendations

### Vercel (recommended)

1. Push the repo to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Framework preset: **Next.js**
4. Deploy — zero config needed

### Other platforms

- **Netlify:** Supports Next.js via `@netlify/plugin-nextjs`
- **AWS Amplify / CloudFront + S3:** Use `output: 'export'` in `next.config.ts` for static export if no server features needed
- **Docker:** Multi-stage build with `node:20-alpine`

### Pre-deploy checklist

- [ ] Replace client/partnership placeholders with real data
- [ ] Connect contact form to backend (API route or external service like Formspree, Resend)
- [ ] Add custom domain + SSL
- [ ] Configure `metadata` Open Graph image (consider a dedicated OG image)
- [ ] Set up analytics (Vercel Analytics, Plausible, GA4)

## Contact Form Integration

The form in `contact-section.tsx` is visual-only. To connect:

```tsx
// Example: POST to /api/contact
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify({ name, email, company, message }),
});
```

Create `src/app/api/contact/route.ts` for server-side handling.

## License

Private — Techno Volution © 2026
