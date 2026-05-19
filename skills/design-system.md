# Design System Skill

## Purpose
Enforce H4 design consistency across all client projects and the H4 website itself, covering:
- **Typography** — font choices, sizes, weights, and pairing rules
- **Spacing** — consistent scale applied to padding, margins, and gaps
- **Card layouts** — surface hierarchy, borders, shadows, and hover states
- **CTA structure** — button styles, placement, copy patterns, and interaction states
- **Mobile responsiveness** — mobile-first layouts, breakpoints, and touch targets
- **Color usage** — brand palette only, no default Tailwind colors, proper contrast
- **UI consistency** — every page, component, and state should feel like it belongs to the same system

Outputs should be modern, minimal, and business-appropriate — not flashy or generic.

---

## H4 Brand Tokens

### Colors
| Role | Hex |
|---|---|
| Primary Navy | `#0B1220` |
| Secondary Charcoal | `#1A2333` |
| Accent Teal | `#6FAFA6` |
| Teal Hover | `#83BDB5` |
| Supporting Gray | `#AEB7C2` |
| Off-White | `#F4F7F9` |

### Typography
| Role | Font |
|---|---|
| Headings / Body | Montserrat (400, 700, 900) |
| Labels / Nav / Buttons | Roboto Mono |

### Spacing Scale
Use consistent steps: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`

### Border Radius
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-md` (6px)
- Pills/tags: `rounded-full`

---

## Layout Principles

### Hierarchy
Every page needs one clear focal point. Don't compete for attention across multiple elements.

### Whitespace
More whitespace than feels comfortable. Dense layouts read as cheap.

### Grid
- Max content width: `max-w-6xl` or `max-w-7xl`
- Standard horizontal padding: `px-6 lg:px-10`
- Card grids: 1 col mobile, 2 col tablet+

### Surface Layering
- Base: `#0B1220`
- Elevated: `#1A2333`
- Floating (modals, dropdowns): `#1A2333` with border and shadow

---

## Component Patterns

### Cards
- Background: `#1A2333`
- Border: `border border-[#AEB7C2]/10`
- Hover: `hover:border-[#6FAFA6]/30`
- Shadow on hover: `hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]`
- Padding: `p-8`

### Buttons (Primary)
- Background: `bg-[#6FAFA6] hover:bg-[#83BDB5]`
- Text: `text-[#0B1220] font-bold`
- Font: Roboto Mono, `text-[13px] tracking-[0.18em]`
- Padding: `px-6 py-3`
- Radius: `rounded-md`

### Eyebrow Labels
- Font: Roboto Mono
- Size: `text-xs`
- Color: `text-[#6FAFA6]`
- Style: `uppercase tracking-widest font-semibold`

### Section Headers
- Eyebrow label above
- Heading: Montserrat bold, `clamp(22px, 3.5vw, 34px)`
- Subtext: `text-[#AEB7C2]`, `text-[15px]`, `leading-relaxed`

---

## Anti-Generic Rules
- Never use default Tailwind blue/indigo as a primary color
- Never use `shadow-md` — use custom color-tinted shadows
- Never use `transition-all` — specify exact properties
- Never use the same font for headings and body
- Every interactive element needs hover, focus-visible, and active states
- Animations: only `transform` and `opacity`. Use Framer Motion for complex sequences.
