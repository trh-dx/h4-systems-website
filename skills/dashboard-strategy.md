# Dashboard Strategy Skill

## Purpose
Design operational dashboards and reporting systems that give business owners and managers real-time visibility into what matters. Outputs should be practical and decision-ready — not data dumps.

---

## H4 Dashboard Philosophy

- A dashboard should answer specific questions, not display all available data
- Every metric should connect to a decision someone needs to make
- If a number can't trigger an action, question whether it belongs
- Design for the person reading it, not the person building it

---

## Dashboard Design Process

### Step 1: Define the audience
Who reads this dashboard? What decisions do they make daily, weekly, monthly?

### Step 2: Identify the key questions
What are the 3–5 questions this dashboard must answer at a glance?

### Step 3: Select metrics
For each question, what is the single best number that answers it?

### Step 4: Define data sources
Where does each metric come from? Is it real-time or updated on a schedule?

### Step 5: Design the layout
- Most important metrics: top left (where eyes go first)
- Supporting context: below or to the right
- Trends over time: charts, not just current values
- Alerts: flag when a metric is outside normal range

---

## Common Dashboard Types by Industry

### Mortgage Operations
- Loans in pipeline by stage
- Average days to close (current vs. target)
- Documents outstanding per loan
- Loans closing this week / this month

### Field Services (HVAC, Sanitation)
- Open jobs by status
- Technician utilization rate
- Revenue booked vs. target
- Jobs completed today / this week

### Professional Services
- Active clients and engagement status
- Revenue recognized vs. projected
- Proposals outstanding
- Hours logged vs. budgeted per project

### General Business
- Revenue (MTD, vs. last month, vs. target)
- New leads (source breakdown)
- Conversion rate (leads → clients)
- Operational throughput (jobs, orders, cases completed)

---

## Tool Recommendations

| Use Case | Tool |
|---|---|
| Simple internal dashboards | Google Looker Studio (free) |
| Mid-complexity ops dashboards | Retool or Glide |
| Data-heavy / analyst use | Metabase |
| Custom built into the website | Next.js + charting library (Recharts, Chart.js) |
| Spreadsheet-based reporting | Google Sheets with connected data |

---

## Output Format

When designing a dashboard strategy, deliver:

1. **Audience Summary** — who reads it and what they decide
2. **Key Questions** — the 3–5 things the dashboard must answer
3. **Metric List** — each metric, its source, and its update frequency
4. **Layout Sketch** — described in plain language or simple grid notation
5. **Tool Recommendation** — with rationale based on client's tech stack and budget
6. **Phase 2 Additions** — metrics to add once the core dashboard is working

---

## What to Avoid
- Dashboards with more than 10 metrics on the main view
- Vanity metrics (page views, social followers) without business context
- Real-time data when daily updates are sufficient — complexity without benefit
- Building before defining the questions — always start with what decisions need to be made
