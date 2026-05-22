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
- Page hero h1s: `text-3xl sm:text-4xl md:text-5xl` — three-step scale, no jarring jumps on mobile
- Do not use `transition-all` — use specific properties (`transition-colors`, `transition-[border-color,box-shadow,transform]`, etc.)

**Mobile-first responsive conventions**
- All grids must collapse to `grid-cols-1` on xs before scaling up (e.g. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)
- Multi-step horizontal flows (e.g. workflow diagrams) use `flex-col md:flex-row` — not `sm:flex-row` — to avoid overflow on 640px screens
- Eyebrow/label text must not use `whitespace-nowrap`; let it wrap on small screens
- Gap utilities on 2-col grids should reduce on mobile: `gap-6 lg:gap-12`

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

**Screenshots**

Puppeteer is installed locally. With the dev server running:

```bash
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000 label   # saves as screenshot-N-label.png
```

Screenshots are saved to `./temporary screenshots/` and auto-incremented.

---

## Project Structure

```
app/              — Next.js App Router pages
components/       — Shared UI components
public/
  brand_assets/   — Logos and brand images
skills/           — H4 skill files (audit, copy, design, automation, etc.)
orchestrator/     — Master routing logic for skill selection
```

---

## Skills

H4 skill files guide Claude on how to handle specific types of requests.

| File | Purpose |
|---|---|
| `skills/website-audit.md` | Analyze, score, and produce modernization recommendations |
| `skills/conversion-copywriting.md` | Write and rewrite conversion-focused messaging |
| `skills/design-system.md` | Enforce H4 design consistency across all projects |
| `skills/technical-architecture.md` | Advise on stack, deployment, and Next.js conventions |
| `skills/automation-planner.md` | Design practical automation workflows |
| `skills/dashboard-strategy.md` | Plan KPI dashboards and operational reporting |
| `skills/proposal-generator.md` | Generate scoped, priced, phased client proposals |

The `orchestrator/h4-master-router.md` file determines which skill(s) to activate based on the request type.

---

## Stack

- [Next.js](https://nextjs.org) — App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) — v4
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Montserrat + Roboto Mono](https://fonts.google.com) — via next/font/google
