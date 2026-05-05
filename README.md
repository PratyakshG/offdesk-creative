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
| Cloudinary | For video upload and delivery |

## MongoDB Setup

This project uses MongoDB to store portfolio asset metadata. Files are stored in Cloudinary, while rich metadata (name, category, aspect ratio, tags, etc.) is stored in MongoDB.

### 1. Install MongoDB

**Local Development:**
- Install MongoDB Community Server: https://www.mongodb.com/try/download/community
- Start MongoDB: `mongod` (default port 27017)

**Cloud (Recommended for Production):**
- Use MongoDB Atlas: https://www.mongodb.com/atlas
- Create a free cluster
- Get your connection string

### 2. Configure Environment Variables

Add to `.env.local`:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/offdesk-creative
MONGODB_DB_NAME=offdesk-creative
```

For MongoDB Atlas, use your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/offdesk-creative
```

### 3. Database Schema

**Collection:** `portfolio_assets`

**Document Structure:**
```json
{
  "_id": "ObjectId",
  "name": "Summer Campaign Photo",
  "category": "Photography",
  "type": "image",
  "cloudinary_public_id": "images/photography/summer-campaign-photo-1234567890",
  "cloudinary_url": "https://res.cloudinary.com/...",
  "aspect_ratio": "16/9",
  "tags": ["summer", "campaign", "product"],
  "description": "Product photography for summer campaign",
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

## Cloudinary Setup

This project uses Cloudinary for video upload and delivery.

### 1. Get Cloudinary Credentials

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Go to your Dashboard
3. Note down your Cloud Name, API Key, and API Secret

### 2. Configure Environment Variables

Update `.env.local` with your Cloudinary credentials:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Upload Assets

Use the upload component at `/upload-video` to upload assets with metadata. Assets are automatically organized into Cloudinary folders:

- `images/photography/`
- `images/graphic-design/`
- `videos/ad-shoots/`
- `videos/videography/`

### 4. View Portfolio

Assets are dynamically loaded from MongoDB and displayed in the portfolio at `/portfolio`. The portfolio fetches assets by category and displays them with rich metadata.

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
