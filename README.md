# H Four Systems — Website

Marketing and lead-generation website for H Four Systems, a small business technology consultancy specializing in website modernization, business automation, dashboards, and AI-assisted development.

Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, value strip, services preview, credibility band |
| `/services` | Services hero, value strip, 4-card grid, process timeline, CTA |
| `/case-studies` | Featured and grid case studies |
| `/industries` | 6 industry cards |
| `/process` | 4-phase methodology (Discover, Strategize, Build, Optimize), Website Care Plan, assessment CTA |
| `/about` | Positioning, "What Sets Us Apart" differentiators, trust metrics, methodology, guiding principles, CTA — personal story section pending |
| `/contact` | Modernization Assessment offer (primary), assessment detail, contact form |

---

## Brand

**Logo:** `public/brand_assets/h4-systems-logo.svg` — true vector SVG, displayed at `h-20` inside a `h-24` navbar via a plain `<img>` tag with `background: #0B1220` to match the navbar background. (Note: Next.js `<Image>` is intentionally avoided for SVGs as it doesn't optimize them and can cause background rendering issues.)

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
- Homepage hero h1: `text-[clamp(52px,7vw,92px)]` — fluid scale
- Services page hero h1: `text-[clamp(28px,4.5vw,56px)]`
- Section headings: `text-[clamp(22px,3.5vw,36px)]`
- Do not use `transition-all` — use specific properties (`transition-colors`, `transition-[border-color,box-shadow,transform]`, etc.)

**Mobile-first responsive conventions**
- All grids collapse to `grid-cols-1` on xs before scaling up (e.g. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)
- Multi-step horizontal flows (e.g. process timeline) use `hidden lg:block` for desktop and a separate `lg:hidden` block for mobile
- Eyebrow/label text must not use `whitespace-nowrap`; let it wrap on small screens
- Gap utilities on 2-col grids should reduce on mobile: `gap-5` at base

---

## Components

| File | Description |
|---|---|
| `components/Navbar.tsx` | Fixed top navbar with logo, nav links, mobile drawer |
| `components/Hero.tsx` | Homepage hero — headline, body copy, CTA buttons, cube visualization |
| `components/CubeVisualization.tsx` | Animated isometric cube SVG with network labels |
| `components/ValueStrip.tsx` | 4-card KPI strip (Faster Delivery, Conversion Design, Streamlined Ops, Scalability) — shared between homepage and services page |
| `components/ServicesPreview.tsx` | Homepage services preview — clean 2×2 grid with Learn More links |
| `components/CredibilityBand.tsx` | Homepage credibility section — "Enterprise Experience. SMB Focus." with trust bullets and CTA |
| `components/ServicesGrid.tsx` | Detailed 4-card services section (kept; not currently on homepage or services page) |
| `components/StatsSection.tsx` | Trust metrics / stats bar (kept; not currently on homepage) |
| `components/Footer.tsx` | Site footer |

---

## Version Control

Previous page versions are stored in `_versions/` before any code changes.

| Version | Date | What's Preserved |
|---|---|---|
| `v1-2026-05-23` | 2026-05-23 | Original homepage, services, contact, process, and about pages |
| `v2-2026-05-23` | 2026-05-23 | Phase 2 services page (before Additional Services cards were removed) |
| `v3-2026-05-23` | 2026-05-23 | Process page with Care Plan (before review cleanup — timeline bar, Maturity Model, Guiding Principles removed; "Architect" renamed "Strategize") |

To revert a file, copy it from the relevant `_versions/` subfolder back to its original path in the project root.

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

**Screenshots**

Puppeteer is installed locally. With the dev server running:

```bash
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000/services label   # saves as screenshot-N-label.png
```

Screenshots are saved to `./temporary screenshots/` and auto-incremented (never overwritten).

---

## Project Structure

```
app/
  page.tsx              — Homepage
  services/page.tsx     — Services page
  about/page.tsx        — ⚠ Personal story section marked TODO (pending)
  case-studies/page.tsx
  contact/page.tsx
  industries/page.tsx
  process/page.tsx
  layout.tsx

components/
  Navbar.tsx
  Hero.tsx
  CubeVisualization.tsx
  ValueStrip.tsx         ← shared across homepage + services
  ServicesPreview.tsx    ← homepage services section
  CredibilityBand.tsx    ← homepage credibility section
  ServicesGrid.tsx       ← detailed services cards (available, not currently on home)
  StatsSection.tsx       ← stats bar (available, not currently on home)
  Footer.tsx

public/
  brand_assets/          — Logo SVGs and brand images

_versions/
  README.md              — Version history table
  v1-2026-05-23/         — Snapshot before Phase 2 homepage + services rebuild
  v2-2026-05-23/         — Snapshot before Additional Services repositioning
  v3-2026-05-23/         — Snapshot before Process page review cleanup
```

---

## Stack

- [Next.js](https://nextjs.org) — App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) — v4
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered and entrance animations
- [Montserrat + Roboto Mono](https://fonts.google.com) — via next/font/google
