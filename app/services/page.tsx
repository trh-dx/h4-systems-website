import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function WebsiteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="8" width="36" height="26" rx="2" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="4" y1="15" x2="40" y2="15" stroke="#8FBFBA" strokeWidth="1.2" />
      <circle cx="10" cy="11.5" r="1.5" fill="#8FBFBA" opacity="0.6" />
      <circle cx="15.5" cy="11.5" r="1.5" fill="#8FBFBA" opacity="0.6" />
      <circle cx="21" cy="11.5" r="1.5" fill="#8FBFBA" opacity="0.6" />
      <rect x="10" y="20" width="10" height="8" rx="1" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="23" y1="21" x2="34" y2="21" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="24.5" x2="34" y2="24.5" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="38" x2="30" y2="38" stroke="#8FBFBA" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="34" x2="22" y2="38" stroke="#8FBFBA" strokeWidth="1.4" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="13" y="4" width="18" height="36" rx="3" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="13" y1="10" x2="31" y2="10" stroke="#8FBFBA" strokeWidth="1.2" />
      <line x1="13" y1="34" x2="31" y2="34" stroke="#8FBFBA" strokeWidth="1.2" />
      <circle cx="22" cy="37" r="1.5" fill="#8FBFBA" opacity="0.7" />
      <line x1="19" y1="17" x2="25" y2="17" stroke="#8FBFBA" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="17" y1="21" x2="27" y2="21" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="17" y1="25" x2="27" y2="25" stroke="#8FBFBA" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="4" y="6" width="36" height="26" rx="2" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="4" y1="40" x2="40" y2="40" stroke="#8FBFBA" strokeWidth="1.4" />
      <line x1="22" y1="32" x2="22" y2="40" stroke="#8FBFBA" strokeWidth="1.4" />
      <polyline points="9,26 16,17 23,21 33,11" fill="none" stroke="#8FBFBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="33" cy="11" r="2.5" fill="#8FBFBA" opacity="0.75" />
    </svg>
  );
}

const pillars = [
  {
    icon: <MobileIcon />,
    title: "Mobile-Friendly Website Design",
    description: "Make your website look great and work smoothly across phones, tablets, and desktops — so customers can easily browse, call, and request service from anywhere.",
    capabilities: [
      "Responsive mobile layouts",
      "Tap-to-call buttons",
      "Easy-to-use contact forms",
      "Faster mobile browsing",
      "Better customer experience",
    ],
    stat: "A mobile-optimized website built to reduce friction, increase customer action, and turn phone traffic into real leads.",
    cta: { label: "Make My Site Mobile-Friendly", href: "/contact" },
  },
  {
    icon: <WebsiteIcon />,
    title: "Website Transformation",
    description: null,
    capabilities: [
      "Legacy website rebuild and redesign",
      "Mobile-responsive, performance-optimized builds",
      "Modern tech stack and optimized performance",
      "SEO foundation and structured data",
      "Brand-aligned visual systems",
    ],
    stat: "A modernized website built to convert more visitors into calls, quote requests, and qualified leads.",
    cta: { label: "Transform My Website", href: "/contact" },
  },
  {
    icon: <DashboardIcon />,
    title: "Performance Dashboards",
    description: null,
    capabilities: [
      "Executive dashboard design and build",
      "KPI definition and instrumentation",
      "Real-time reporting pipelines",
      "Budget vs. actuals tracking",
      "Operational health monitoring",
    ],
    stat: "Decision latency reduced from weeks to hours",
    cta: { label: "Improve My Visibility", href: "/contact" },
  },
];

const kpiCards = [
  { label: "Open Opportunities", value: "24", trend: "+3 this week", up: true },
  { label: "Avg. Close Time", value: "18d", trend: "−6d vs last qtr", up: true },
  { label: "Pipeline Value", value: "$412K", trend: "+14% MoM", up: true },
  { label: "Active Workflows", value: "47", trend: "2 paused", up: false },
];

const statusRows = [
  { name: "Lead Intake Automation", status: "Operational", pct: 100 },
  { name: "Proposal Generation", status: "Operational", pct: 100 },
  { name: "CRM Sync — Salesforce", status: "Operational", pct: 100 },
  { name: "Invoice Export — QuickBooks", status: "Degraded", pct: 72 },
  { name: "Follow-Up Sequence", status: "Operational", pct: 100 },
];

const workflowSteps = [
  { label: "Lead Form Submission", type: "trigger" },
  { label: "CRM Record Created", type: "system" },
  { label: "Owner Notified", type: "action" },
  { label: "Proposal Auto-Generated", type: "action" },
  { label: "Follow-Up Scheduled", type: "action" },
  { label: "Outcome Logged", type: "system" },
];

const integrations = [
  { name: "CRM", desc: "Salesforce / HubSpot / Custom" },
  { name: "Billing", desc: "QuickBooks / Stripe / NetSuite" },
  { name: "Scheduling", desc: "Calendly / Jobber / ServiceTitan" },
  { name: "Docs", desc: "Google Drive / DocuSign / Dropbox" },
  { name: "Comms", desc: "Twilio / SendGrid / Slack" },
  { name: "Analytics", desc: "GA4 / Looker / Custom Dashboards" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Business Transformation Services</div>
          <h1 className="text-[clamp(1.5rem,3.2vw,3rem)] font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            <span className="block">Modern websites.</span>
            <span className="block">Better user experience.</span>
            <span className="block">More customers.</span>
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            From modern websites to the internal systems that power daily operations, we deliver AI-powered digital solutions that help you operate smarter, move faster, and compete stronger.
          </p>
        </div>
      </section>

      {/* ── Service Pillars ── */}
      <section className="pb-24 px-6 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8 flex flex-col hover:border-[#8FBFBA]/60 hover:shadow-[0_8px_32px_rgba(111,175,166,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="mb-5 p-2.5 inline-flex rounded-lg bg-[#0B1220] w-fit">
                  {p.icon}
                </div>
                <h3 className="text-[#F4F7F9] font-semibold text-xl mb-4">{p.title}</h3>
                {p.description && (
                  <p className="text-[#AEB7C2] text-sm leading-relaxed mb-5">{p.description}</p>
                )}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm text-[#AEB7C2]">
                      <span className="w-1 h-1 rounded-full bg-[#8FBFBA] flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-[#AEB7C2]/10 mt-auto">
                  {p.stat && (
                    <div className="mb-4">
                      <div className="text-xs text-[#AEB7C2]/60 mb-1 uppercase tracking-wider font-medium">Typical Result</div>
                      <div className="text-[#8FBFBA] text-sm font-medium">{p.stat}</div>
                    </div>
                  )}
                  {p.cta && (
                    <a
                      href={p.cta.href}
                      className="inline-flex items-center gap-2 bg-[#8FBFBA] hover:bg-[#72A8A3] text-[#0B1220] font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      {p.cta.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard Mockup ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">Performance Dashboards</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">Executive dashboard, built for your business.</h2>
            <p className="text-[#AEB7C2] max-w-xl">Real-time operational intelligence — not a generic BI tool. Custom-built to surface what matters for your specific operation.</p>
          </div>

          {/* Dashboard UI mockup */}
          <div className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-2xl overflow-hidden">
            {/* Title bar */}
            <div className="bg-[#1A2333] border-b border-[#AEB7C2]/10 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#AEB7C2]/20" />
                <div className="w-3 h-3 rounded-full bg-[#AEB7C2]/20" />
                <div className="w-3 h-3 rounded-full bg-[#AEB7C2]/20" />
              </div>
              <span className="text-[#AEB7C2]/60 text-xs ml-2">Operations Dashboard — H Four Systems</span>
            </div>

            <div className="p-6 sm:p-8">
              {/* KPI row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {kpiCards.map((k) => (
                  <div key={k.label} className="bg-[#1A2333] border border-[#AEB7C2]/10 rounded-xl p-5">
                    <div className="text-[#AEB7C2]/60 text-xs mb-3 uppercase tracking-wider">{k.label}</div>
                    <div className="text-[#F4F7F9] text-2xl font-bold mb-2 tracking-tight">{k.value}</div>
                    <div className={`text-xs font-medium ${k.up ? "text-[#8FBFBA]" : "text-[#AEB7C2]/60"}`}>
                      {k.up ? "↑" : "↓"} {k.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status table */}
              <div className="bg-[#1A2333] border border-[#AEB7C2]/10 rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-[#AEB7C2]/10 flex items-center justify-between">
                  <span className="text-[#F4F7F9] text-sm font-medium">Workflow Status</span>
                  <span className="text-[#8FBFBA] text-xs">Live</span>
                </div>
                <div className="divide-y divide-[#AEB7C2]/10">
                  {statusRows.map((row) => (
                    <div key={row.name} className="px-5 py-3.5 flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="text-[#F4F7F9] text-sm truncate">{row.name}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-[#0B1220] rounded-full h-1.5 overflow-hidden">
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: `${row.pct}%`,
                              background: row.pct === 100 ? "#8FBFBA" : "#AEB7C2",
                            }}
                          />
                        </div>
                        <span className={`text-xs font-medium w-20 text-right ${row.status === "Operational" ? "text-[#8FBFBA]" : "text-[#AEB7C2]"}`}>
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Automation Workflow Visual ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">Workflow Automation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">From manual handoff to automated flow.</h2>
            <p className="text-[#AEB7C2] max-w-xl">We map your current process, identify the friction points, and build automation that runs reliably in the background.</p>
          </div>

          {/* Flow diagram */}
          <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0">
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col sm:flex-row items-start sm:items-center flex-1 min-w-0">
                  {/* Step node */}
                  <div className={`flex-shrink-0 rounded-xl p-4 border text-center w-full sm:w-auto sm:min-w-[120px] ${
                    step.type === "trigger"
                      ? "bg-[#8FBFBA]/10 border-[#8FBFBA]/30"
                      : step.type === "system"
                      ? "bg-[#0B1220] border-[#AEB7C2]/20"
                      : "bg-[#0B1220] border-[#AEB7C2]/15"
                  }`}>
                    <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-1">{step.type}</div>
                    <div className="text-[#F4F7F9] text-xs font-medium leading-tight">{step.label}</div>
                  </div>
                  {/* Connector */}
                  {i < workflowSteps.length - 1 && (
                    <div className="flex-shrink-0 flex sm:flex-row flex-col items-center">
                      <div className="sm:w-4 sm:h-px w-px h-4 bg-[#AEB7C2]/25 my-1 sm:my-0 sm:mx-1" />
                      <svg className="w-3 h-3 text-[#AEB7C2]/40 sm:rotate-0 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="sm:w-4 sm:h-px w-px h-4 bg-[#AEB7C2]/25 my-1 sm:my-0 sm:mx-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#AEB7C2]/10 flex flex-col sm:flex-row gap-6">
              <div className="text-center sm:text-left">
                <div className="text-[#AEB7C2]/50 text-xs uppercase tracking-wider mb-1">Before Automation</div>
                <div className="text-[#F4F7F9] font-semibold">~4 hours per lead</div>
              </div>
              <div className="hidden sm:block w-px bg-[#AEB7C2]/10" />
              <div className="text-center sm:text-left">
                <div className="text-[#8FBFBA] text-xs uppercase tracking-wider mb-1 font-semibold">After Automation</div>
                <div className="text-[#F4F7F9] font-semibold">~8 minutes per lead</div>
              </div>
              <div className="hidden sm:block w-px bg-[#AEB7C2]/10" />
              <div className="text-center sm:text-left">
                <div className="text-[#AEB7C2]/50 text-xs uppercase tracking-wider mb-1">Reduction</div>
                <div className="text-[#8FBFBA] font-bold text-xl">97%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Integration Architecture ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">Systems Integration</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">Connect your existing tools. Eliminate the gaps.</h2>
            <p className="text-[#AEB7C2] max-w-xl">We integrate with the platforms your business already uses — connecting them into a unified operational layer.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((int) => (
              <div key={int.name} className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-5 text-center hover:border-[#8FBFBA]/30 transition-colors">
                <div className="text-[#F4F7F9] font-semibold text-sm mb-2">{int.name}</div>
                <div className="text-[#AEB7C2] text-xs leading-relaxed">{int.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-[#AEB7C2]/50 text-sm">And many others — we work with your stack, not against it.</p>
          </div>
        </div>
      </section>

      {/* ── Assessment CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Get Started</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] mb-5">
            Ready to modernize how your business operates?
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a free assessment. We map your current state, identify the highest-leverage opportunities, and define a clear modernization path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-[#8FBFBA] hover:bg-[#72A8A3] text-[#0B1220] font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule a Free Assessment
            </a>
            <a href="/case-studies" className="inline-block border border-[#8FBFBA] hover:bg-[#8FBFBA]/10 text-[#8FBFBA] font-semibold px-8 py-4 rounded-lg transition-colors">
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
