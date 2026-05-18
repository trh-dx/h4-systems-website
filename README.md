# H Four Systems — Website

Marketing and lead-generation website for H Four Systems, a small business technology consultancy specializing in website modernization, business automation, dashboards, and mobile-friendly design.

Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, 4-card services grid, stats |
| `/services` | Service cards with bullets, typical results, and CTAs |
| `/case-studies` | Featured and grid case studies |
| `/industries` | 6 industry cards |
| `/process` | 4-phase methodology |
| `/about` | Positioning, trust metrics, values |
| `/contact` | Assessment offer and contact form |

---

## Brand

**Logo:** `public/brand_assets/H4 Systems Logo.png` — displayed at `h-20` inside a `h-24` navbar. src is URL-encoded as `/brand_assets/H4%20Systems%20Logo.png`.

**Colors**

| Role | Hex |
|---|---|
| Primary Navy | `#0B1220` |
| Secondary Charcoal | `#1A2333` |
| Accent Teal | `#6FAFA6` |
| Teal Hover | `#83BDB5` |
| Supporting Gray | `#AEB7C2` |
| Off-White | `#F4F7F9` |

**Typography**

| Role | Font | Size |
|---|---|---|
| Headings / Body | Montserrat (weights: 400, 700, 900) | varies |
| Nav links / Buttons / Eyebrows / Labels | Roboto Mono | `13px` |

**Font size conventions**
- Navbar links, CTA buttons, and eyebrow labels: `text-[13px]`
- Do not use `transition-all` — use specific properties (`transition-colors`, `transition-[border-color,box-shadow,transform]`, etc.)

---

## Components

| File | Description |
|---|---|
| `components/Navbar.tsx` | Fixed top navbar with logo, nav links, mobile menu |
| `components/Hero.tsx` | Homepage hero — headline, CTA buttons, cube visual |
| `components/CubeVisualization.tsx` | Animated isometric cube SVG with network labels |
| `components/ServicesGrid.tsx` | 4-card services section on homepage |
| `components/StatsSection.tsx` | Trust metrics / stats bar |
| `components/Footer.tsx` | Site footer |

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
- [Montserrat + Roboto Mono](https://fonts.google.com) — via next/font/google
