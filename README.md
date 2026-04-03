# Offdesk Creative Studio

Official Website for Offdesk Creative Studio

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15 (App Router, Turbopack) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Fonts | Cormorant Garamond + Outfit (Google Fonts) |

## Pages

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Hero, stats, featured services, CTA banner |
| `/about` | `app/about/page.tsx` | Mission, values, team section |
| `/services` | `app/services/page.tsx` | Full service listing with deliverables |
| `/portfolio` | `app/portfolio/page.tsx` | Case studies grid with tags + results |
| `/contact` | `app/contact/page.tsx` | Contact form + office details |

## Project Structure

```
offdesk-creative/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, Navbar, Footer
│   ├── globals.css         # Tailwind v4 theme + CSS custom properties
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx          # Multi-column footer
│   ├── ContactForm.tsx     # Client component — contact form with state
│   └── UI.tsx              # Shared: SectionHeader, Button, StatCard, GoldLine
├── next.config.ts
├── postcss.config.mjs      # @tailwindcss/postcss (required for Tailwind v4)
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Design System

All design tokens are CSS custom properties defined in `app/globals.css` under `@theme`:

```css
--color-ink         #0d0d0d   /* Primary background */
--color-ink-soft    #1a1a1a   /* Secondary background */
--color-gold        #c9a84c   /* Accent / brand colour */
--color-gold-light  #e2c97e   /* Lighter gold */
--color-cream       #f5f0e8   /* Primary text */
--color-muted       #555555   /* Secondary text */
--color-border      #2a2a2a   /* Borders / dividers */
--font-display              /* Cormorant Garamond — headings */
--font-body                 /* Outfit — body text */
```

To change the colour scheme, update these variables in `globals.css`.

### Contact Form
The form in `components/ContactForm.tsx` uses a simulated delay. Replace the `handleSubmit` logic with your preferred solution:
- **Next.js API route**: `app/api/contact/route.ts`
- **Third-party services**: Resend, SendGrid, Formspree, etc.

### Images
The boilerplate uses placeholder layouts for the team section. Add real images via `next/image`:
```tsx
import Image from "next/image";
<Image src="/team/alex.jpg" alt="Alexandra Reid" fill className="object-cover" />
```

### Portfolio
Update the `projects` array in `app/portfolio/page.tsx` with your real case studies. Each entry supports: `client`, `industry`, `title`, `result`, and `tags`.

## Deployment

Deploy to [Vercel](https://vercel.com) in one command:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on push.
