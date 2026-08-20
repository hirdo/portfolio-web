# Hirdo's Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **React**, **Tailwind CSS**, and **Prisma**. It showcases projects, services, skills, certifications, and a blog — all with a polished dark/light theme toggle and smooth animations.

---

## Features

- **Responsive Design** — Fully mobile-first, adapts from mobile to desktop seamlessly.
- **Dark / Light Mode** — Persistent theme toggle (`next-themes` + `localStorage`) with smooth transitions.
- **Multi-Page Routing** — Home, About, Services, Projects, Blogs, Blog Post (dynamic), Contact, Privacy Policy, Disclaimer.
- **Scroll Reveal Animations** — IntersectionObserver-based fade/slide animations for page elements.
- **Gradient Accents** — Consistent blue-purple-pink gradient tokens across pages.
- **Active Navigation Highlighting** — Current page is highlighted in the header for both desktop and mobile nav.
- **Blog System** — Markdown-powered blog posts with syntax highlighting via `rehype-pretty-code`.
- **Contact Integration** — Contact form with nodemailer backend via API routes.
- **Prisma ORM** — MySQL database integration for potential data persistence.
- **Animated Counters** — Number animations on the About page stats section.
- **Testimonials & FAQ Accordion** — Services page includes client testimonials and expandable FAQ items.
- ** Certificates Showcase** — Certification grid with modal lightbox viewer on the About page.
- **Performance Optimized** — Uses `next/image` (Sharp), code splitting, and efficient render patterns.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | JavaScript (JSX) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) + `tailwindcss-animate` + `@tailwindcss/typography` |
| UI Components | [Radix UI](https://www.radix-ui.com/) primitives, [shadcn/ui](https://ui.shadcn.com/) patterns |
| Icons | [FontAwesome](https://fontawesome.com/) (SVG core + free brands/solid), [Lucide React](https://lucide.dev/) |
| Animation | Custom `IntersectionObserver` (`ScrollReveal`), CSS keyframes |
| Content | [gray-matter](https://github.com/jonschlinkert/gray-matter) + remark/rehype ecosystem for MDX/Markdown parsing |
| Database | [Prisma](https://www.prisma.io/) ORM + MySQL (`mysql2`) |
| Email | [Nodemailer](https://nodemail.com/) |
| Linting | ESLint (Next.js config) |

---

## Project Structure

```
portfolio_website/
├── public/                    # Static assets (images, favicon, certificates, resume PDF)
├── src/
│   ├── app/
│   │   ├── api/               # Next.js API routes (e.g., contact form handler)
│   │   ├── about/             # About page
│   │   ├── blogs/             # Blog listing page
│   │   ├── blogpost/          # Dynamic blog post page ([slug])
│   │   ├── components/        # Reusable React components
│   │   ├── contact/           # Contact page
│   │   ├── disclaimer/        # Disclaimer page
│   │   ├── privacypolicy/     # Privacy Policy page
│   │   ├── projects/          # Projects page
│   │   ├── services/          # Services page
│   │   ├── globals.css        # Global styles, animations, Tailwind directives
│   │   ├── layout.js          # Root layout (metadata, theme provider, suspense boundary)
│   │   ├── page.js            # Home page (landing)
│   │   └── providers.js       # Context providers (theme, etc.)
│   └── lib/
│       └── prisma.js          # Prisma client singleton
├── prisma/
│   └── schema.prisma          # Database schema definition
├── .env                       # Environment variables
└── package.json
```

### Pages

| Page | Route | Highlights |
|------|-------|------------|
| **Home** | `/` | Hero banner with typing effect, services preview, skills grid, project slider, blog cards, contact CTA |
| **About** | `/about` | Hero, stats counters with animated numbers, bio, certification grid with modal viewer, skills list |
| **Services** | `/services` | Hero, detailed service cards, testimonials, FAQ accordion |
| **Projects** | `/projects` | Hero, project grid with tech badges and live/code links |
| **Blogs** | `/blogs` | Blog post listing with search and category filtering |
| **Blog Post** | `/blogpost/[slug]` | Dynamic route rendering individual markdown posts with code highlighting |
| **Contact** | `/contact` | Contact form, contact info cards, FAQ |
| **Privacy Policy** | `/privacypolicy` | Static policy content |
| **Disclaimer** | `/disclaimer` | Static disclaimer content |

### Key Components

| Component | Description |
|-----------|-------------|
| `Header` | Fixed responsive navbar with theme toggle, active page highlight, mobile hamburger menu |
| `Banner` | Home hero with profile image, gradient ring, typing role animation, CTA buttons |
| `PageHero` | Reusable decorative hero section used on sub-pages (About, Services, Projects, etc.) |
| `ScrollReveal` | Wrapper component that applies directional fade/slide animations on scroll |
| `GradientText` | Text with animated gradient color effect |
| `AnimatedCounter` | Count-up animation for numerical stats |
| `LoadingSpinner` | Full-screen loading indicator with progress bar (wrapped in `Suspense` for `useSearchParams`) |
| `Card` / `ServiceCard` / `ProjectCard` / `BlogCard` / `TestimonialCard` | Content card variants with hover effects and responsive layouts |
| `FAQAccordion` | Expandable/collapsible FAQ items |
| `CertModal` | Modal dialog for viewing certificate images |
| `ScrollToTop` | Floating button that appears after scrolling down |
| `Copyright` | Footer copyright section |

---

## Dark / Light Theme

The site supports a persistent dark/light toggle:
- **Light Mode**: Clean white/gray backgrounds with `gray-900` text and subtle blue/pink gradient accents.
- **Dark Mode**: Deep slate/gray backgrounds (`gray-900` to `gray-950`) with light text (`gray-300` / `white`) and slightly elevated gradient accent opacity.

Theme state is persisted via `localStorage('theme')` and applied at the document root. All page backgrounds and text colors use Tailwind's `dark:` utility classes for smooth switching.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MySQL database (for Prisma features)

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
CONTACT_EMAIL=recipient@example.com
```

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

> **Note:** The build includes `prisma generate` automatically.

### Lint

```bash
npm run lint
```

---

## Deployment

The project is configured for deployment on **Vercel**.

```bash
vercel --prod
```

Make sure to add your environment variables in your Vercel project settings.

---

## License

This is a personal portfolio project. All rights reserved.

---

Built with care by Hirdo.
