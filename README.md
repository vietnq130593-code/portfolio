# Portfolio — Nguyễn Quốc Việt · AI Application Engineer

Personal portfolio website of **Nguyễn Quốc Việt** — AI Application Engineer (Ho Chi Minh City, Vietnam).

Highlights: ARC Prize 2026 (ARC-AGI-3) solo **top 13.4%** (658/4,923) · ~640,000+ lines of production code · CRM serving **4,199+ live customers**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + [shadcn/ui](https://ui.shadcn.com) (New York) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Image optimization | next/image |
| Runtime / package manager | Bun |

## Features

- One-page responsive portfolio (mobile-first, dark tech theme)
- Hero with achievement stats (640K+ LOC, top 13.4%, 4,199+ customers)
- Flagship project case cards with dashboard previews and metric strips
  - **TMO** — multi-agent AI platform (5-agent code team, GraphRAG: Neo4j + Qdrant, multi-LLM pool)
  - **LEVEL 1 HAIRCARE CRM** — production AI CRM (churn/no-show prediction, voice ASR assistant, 9-module BI)
- Kaggle / AI benchmark results with ranking visualizations
- Skill matrix by domain, education and contact sections
- CV download (`/cv/Nguyen-Quoc-Viet-CV.pdf`)
- Accessible: semantic HTML, ARIA labels, reduced-motion support
- SEO metadata and Open Graph tags

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server on http://localhost:3000
bun run dev
```

Other scripts:

```bash
bun run lint    # ESLint
bun run build   # Production build
```

## Project Structure

```
├── public/
│   ├── cv/                  # Downloadable CV (PDF)
│   └── projects/            # Project preview images
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + metadata
│   │   ├── page.tsx         # Portfolio page (single route)
│   │   └── globals.css      # Tailwind + design tokens
│   ├── components/ui/       # shadcn/ui component set
│   ├── hooks/               # Shared hooks
│   └── lib/                 # Utilities
├── prisma/                  # Prisma schema (optional data layer)
└── package.json
```

## Deployment

Deploy in one click on [Vercel](https://vercel.com):

1. Push this repository to GitHub.
2. Import the repo on Vercel (framework preset: **Next.js**).
3. Deploy — no environment variables are required for the portfolio page.

## License

Released under the [MIT License](LICENSE) — free to reuse with attribution.

## Contact

- **Email:** vietnq130593@gmail.com
- **GitHub:** [vietnq130593-code](https://github.com/vietnq130593-code)
- **Kaggle:** [vietnguyen130593](https://www.kaggle.com/vietnguyen130593)
- **Devpost:** [vietnq130593](https://devpost.com/vietnq130593)
