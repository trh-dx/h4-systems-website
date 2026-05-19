# H4 Master Router

## Purpose
This file tells Claude which H4 skill to use based on the type of request.

The router should:
- Choose only the skills needed
- Avoid using every skill at once
- Keep outputs focused
- Prioritize business value
- Follow H4 Systems brand direction

---

## Default H4 Direction

H4 Systems focuses on:
- Modern websites
- Dashboards
- Automation
- AI-assisted digital solutions
- Business modernization for small and mid-size businesses

Tone should be:
- Clear
- Practical
- Professional
- Beginner-friendly when needed
- Business-first

Avoid:
- Overly technical language
- Overbuilt solutions
- Generic agency wording
- Flashy/cyber design language

---

## Skill Routing Rules

### Website Audit Skill
Use when the request involves:
- Website reviews
- Modernization audits
- UX issues
- SEO issues
- Performance concerns
- Competitor comparisons

Use file:
`skills/website-audit.md`

---

### Conversion Copywriting Skill
Use when the request involves:
- Headlines
- Hero sections
- CTAs
- Service copy
- Messaging
- Value propositions

Use file:
`skills/conversion-copywriting.md`

---

### Design System Skill
Use when the request involves:
- Layout
- Visual design
- Spacing
- Typography
- Colors
- Cards
- Buttons
- Mobile responsiveness

Use file:
`skills/design-system.md`

---

### Technical Architecture Skill
Use when the request involves:
- Next.js
- Tailwind
- Vercel
- GitHub
- Hosting
- Domains
- Forms
- Integrations
- Deployment

Use file:
`skills/technical-architecture.md`

---

### Automation Planner Skill
Use when the request involves:
- Lead routing
- CRM workflows
- Zapier
- Make
- n8n
- Follow-up automation
- Notifications
- Business process automation

Use file:
`skills/automation-planner.md`

---

### Dashboard Strategy Skill
Use when the request involves:
- KPIs
- Reporting
- Analytics
- Dashboards
- Business metrics
- Operational visibility

Use file:
`skills/dashboard-strategy.md`

---

### Proposal Generator Skill
Use when the request involves:
- Pricing
- Scope
- Packages
- Retainers
- Project phases
- Client proposals

Use file:
`skills/proposal-generator.md`

---

## Recommended Skill Order

For a full client modernization project, use this order:

1. Website Audit
2. Conversion Copywriting
3. Design System
4. Technical Architecture
5. Automation Planner
6. Dashboard Strategy
7. Proposal Generator

For small requests, only use the specific skill needed.

---

## Examples

User request:
"Review this HVAC website and tell me what to improve."

Use:
- Website Audit Skill
- Design System Skill if visual recommendations are needed
- Conversion Copywriting Skill if messaging needs improvement

---

User request:
"Rewrite my homepage hero section."

Use:
- Conversion Copywriting Skill
- Design System Skill only if layout guidance is requested

---

User request:
"How should I connect a website form to a CRM?"

Use:
- Automation Planner Skill
- Technical Architecture Skill

---

User request:
"How much should I charge for this project?"

Use:
- Proposal Generator Skill
- Website Audit Skill if scope is unclear

---

## Final Rule

Do not activate all skills unless the user asks for a full end-to-end project plan.

Use the smallest number of skills needed to answer well.
