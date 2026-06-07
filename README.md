# H Four Systems — Website

Marketing and lead-generation website for H Four Systems, a practical technology partner for small businesses in North Texas. Helps businesses improve their website, lead capture, follow-up workflows, automations, dashboards, and connected tools.

Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, values strip, services preview, credibility band |
| `/services` | Services hero, value strip, 4-card service grid, process timeline, CTA |
| `/about` | Positioning ("What H4 Systems Is / Is Not"), trust metrics, methodology, guiding principles, CTA |
| `/process` | 4-phase process (Review, Prioritize, Build & Connect, Support & Improve), "You do not have to fix everything at once" section, CTA |
| `/case-studies` | Our Work — 4 scenario-based example cards (website, lead capture, workflow, reporting) with visual before/after comparisons |
| `/resources` | SMB Operations Assessment Checklist — email capture, document preview, 4-section checklist, "Coming Next" teasers |
| `/contact` | Free Website Assessment — how it works, good-fit card, contact form (submits to Google Sheets via Apps Script; Cloudflare Turnstile spam protection) |
| `/industries` | 6 industry cards (not in main nav) |

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
- Homepage hero h1: `text-[clamp(30px,4vw,54px)]` — 3-line fluid scale
- Services page hero h1: `text-[clamp(28px,4.5vw,56px)]`
- Section headings: `text-[clamp(22px,3.5vw,36px)]`
- Do not use `transition-all` — use specific properties (`transition-colors`, `transition-[border-color,box-shadow,transform]`, etc.)

**CTA buttons — standard text**
All primary contact CTAs site-wide use: **"Request Free Assessment"**
Navbar CTA uses: **"GET FREE ASSESSMENT"**

**Mobile-first responsive conventions**
- All grids collapse to `grid-cols-1` on xs before scaling up (e.g. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)
- Multi-step horizontal flows (e.g. process timeline) use `hidden lg:block` for desktop and a separate `lg:hidden` block for mobile
- Gap utilities on 2-col grids: `gap-5` at base
- Primary CTA buttons with wide letter-spacing use `whitespace-nowrap` to prevent mid-word wrapping

---

## Components

| File | Description |
|---|---|
| `components/Navbar.tsx` | Fixed top navbar with logo, nav links ("GET FREE ASSESSMENT" CTA), mobile drawer |
| `components/Hero.tsx` | Homepage hero — headline, body copy, CTA buttons, cube visualization |
| `components/CubeVisualization.tsx` | Animated isometric cube SVG with network labels |
| `components/HomepageValues.tsx` | Homepage-only values strip — 4 cards (Launch Faster, Turn Visitors Into Leads, Stop Losing Requests, Build a Foundation) |
| `components/ValueStrip.tsx` | 4-card KPI strip (Faster Delivery, Conversion Design, Streamlined Ops, Scalability) — services page only |
| `components/ServicesPreview.tsx` | Homepage services preview — 2×2 grid with "What We Build" header and Learn More links |
| `components/CredibilityBand.tsx` | Homepage credibility section — "Enterprise Experience. SMB Focus." with trust bullets and CTA |
| `components/ServicesGrid.tsx` | Detailed 4-card services section (available, not currently active) |
| `components/StatsSection.tsx` | Trust metrics / stats bar (available, not currently active) |
| `components/Footer.tsx` | Site footer |

---

## Version Control

Previous page versions are stored in `_versions/` before any significant code changes.

| Version | Date | What's Preserved |
|---|---|---|
| `v1-2026-05-23` | 2026-05-23 | Original homepage, services, contact, process, and about pages |
| `v2-2026-05-23` | 2026-05-23 | Phase 2 services page (before Additional Services cards were removed) |
| `v3-2026-05-23` | 2026-05-23 | Process page with Care Plan (before review cleanup) |
| `v4-2026-05-23` | 2026-05-23 | Original case studies page with fabricated client data (before reframe as Our Work) |
| `v5-2026-06-05` | 2026-06-05 | Homepage Hero before copy rewrite (old h1: "Modernize. Automate. Elevate.") |

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
  about/page.tsx        — About (personal story section marked TODO — pending)
  case-studies/page.tsx — Our Work page
  contact/page.tsx      — Free Website Assessment / contact form
  industries/page.tsx   — Industries page (not in main nav)
  process/page.tsx      — Our Process page
  resources/page.tsx    — Resources / SMB Checklist page
  layout.tsx
  api/
    contact/route.ts    — POST handler: verifies Turnstile token, forwards form data to Google Apps Script

components/
  Navbar.tsx
  Hero.tsx
  CubeVisualization.tsx
  HomepageValues.tsx     ← homepage values section (replaces ValueStrip on homepage)
  ValueStrip.tsx         ← services page value strip
  ServicesPreview.tsx    ← homepage "What We Build" section
  CredibilityBand.tsx    ← homepage credibility/CTA section
  ServicesGrid.tsx       ← detailed services cards (available, not active)
  StatsSection.tsx       ← stats bar (available, not active)
  Footer.tsx

public/
  brand_assets/          — Logo SVGs and brand images

_versions/
  README.md              — Version history table
  v1-2026-05-23/         — Snapshot before Phase 2 homepage + services rebuild
  v2-2026-05-23/         — Snapshot before Additional Services repositioning
  v3-2026-05-23/         — Snapshot before Process page review cleanup
  v4-2026-05-23/         — Snapshot before case studies page reframe
  v5-2026-06-05/         — Snapshot before homepage hero copy rewrite
```

---

## Environment Variables

| Variable | Where used | Description |
|---|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Client (`app/contact/page.tsx`) | Cloudflare Turnstile site key — rendered in the widget |
| `TURNSTILE_SECRET_KEY` | Server (`app/api/contact/route.ts`) | Cloudflare Turnstile secret key — used to verify tokens server-side |

Create a `.env.local` file in the project root with both values. Neither variable should be committed to version control.

---

## Stack

- [Next.js](https://nextjs.org) — App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) — v4
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered and entrance animations
- [Montserrat + Roboto Mono](https://fonts.google.com) — via next/font/google
