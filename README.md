# H Four Systems — Website

Marketing and lead-generation website for H Four Systems, a small business technology consultancy specializing in website modernization, mobile-friendly design, and operational visibility.

Built with Next.js (App Router), Tailwind CSS, and Framer Motion.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, 4-card services grid, stats |
| `/services` | 3 service cards (Mobile-Friendly Design, Website Modernization, Operational Visibility) each with bullets, typical result, and CTA |
| `/case-studies` | Featured and grid case studies |
| `/industries` | 6 industry cards |
| `/process` | 4-phase methodology |
| `/about` | Positioning, trust metrics, values |
| `/contact` | Assessment offer and contact form |

---

## Brand

**Logo:** `public/H4 Systems Logo.png` — displayed at `h-20` inside a `h-24` navbar, consistent across all pages. src is URL-encoded as `/H4%20Systems%20Logo.png`.

**Colors**

| Role | Hex |
|---|---|
| Primary Navy | `#0B1220` |
| Secondary Slate | `#1A2333` |
| Accent Teal | `#8FBFBA` |
| Teal Hover | `#72A8A3` |
| Supporting Gray | `#AEB7C2` |
| White | `#F4F7F9` |

---

## Components

| File | Description |
|---|---|
| `components/Navbar.tsx` | Fixed top navbar with logo, nav links, mobile menu |
| `components/Hero.tsx` | Homepage hero — headline, CTA buttons, cube visual |
| `components/CubeVisualization.tsx` | Animated isometric cube SVG with network labels |
| `components/ServicesGrid.tsx` | 4-card services section on homepage |
| `components/StatsSection.tsx` | Trust metrics / stats bar |

---

## Dev

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Stack

- [Next.js](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com) — v4
- [Framer Motion](https://www.framer.com/motion/) — animations
