# Technical Architecture Skill

## Purpose
Advise on technical decisions for H4 Systems client websites and internal projects. Recommendations should be practical, maintainable, and appropriate for small to mid-size business budgets and team sizes.

---

## Preferred Stack

### Frontend
- **Framework:** Next.js (App Router) — default choice for all new projects
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Fonts:** next/font/google

### Hosting & Deployment
- **Primary:** Vercel — zero-config deploys, preview URLs, edge network
- **DNS:** Managed through registrar (Namecheap, GoDaddy, Cloudflare)
- **Domains:** Point to Vercel via A record or CNAME

### Forms & Contact
- **Simple forms:** Resend (email delivery) + server action
- **Advanced forms:** Typeform or Tally for external embed
- **CRM connection:** Zapier or Make webhook from form submission

### Analytics
- **Default:** Vercel Analytics (built-in, privacy-friendly)
- **Extended:** Google Analytics 4 if client needs detailed tracking

---

## Next.js Conventions

### File Structure
```
app/
  layout.tsx       — root layout, fonts, global metadata
  page.tsx         — homepage
  [route]/
    page.tsx       — route page
    layout.tsx     — route-level layout (use for metadata on client pages)
components/        — shared UI components
public/            — static assets
  brand_assets/    — logos, images
skills/            — H4 skill files
orchestrator/      — routing logic
```

### Key Rules
- Use `export const metadata` on every page for SEO
- Client pages (`"use client"`) cannot export metadata — use a `layout.tsx` in that route instead
- Use Next.js `<Image>` for all images — never raw `<img>` tags
- Use `next/link` for internal navigation — never raw `<a>` tags for routes
- Prefer server components by default — only add `"use client"` when interactivity requires it

### Performance
- Add `priority` prop to above-the-fold images
- Use `loading="lazy"` on below-fold images (Next.js default)
- Avoid `transition-all` — it forces the browser to recalculate all properties

---

## Deployment Checklist
- [ ] Environment variables set in Vercel dashboard
- [ ] Custom domain connected and SSL active
- [ ] `next build` passes with no errors
- [ ] Metadata set on all pages
- [ ] Images using `<Image>` component
- [ ] `robots.txt` and `sitemap.xml` in place
- [ ] Analytics connected

---

## What to Avoid
- WordPress for new builds — maintenance overhead, plugin bloat
- Page builders (Wix, Squarespace) for clients who want custom functionality
- Overcomplicated stacks — a 5-page marketing site does not need a CMS
- Self-hosted infrastructure unless the client specifically requires it
