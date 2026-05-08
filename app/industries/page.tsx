import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    name: "Mortgage & Finance",
    tag: "Financial Operations",
    challenges: [
      "Manual pipeline tracking across email and spreadsheets",
      "Compliance documentation assembled before every audit",
      "No real-time visibility into loan status or bottlenecks",
      "Slow closing timelines due to disconnected handoffs",
    ],
    opportunities: [
      "Automated loan status dashboards",
      "Document staging and compliance workflows",
      "CRM integration with LOS platforms",
      "Pipeline velocity reporting",
    ],
    systems: "LOS · CRM · Compliance Portal · Executive Dashboard",
  },
  {
    name: "HVAC & Field Services",
    tag: "Field Operations",
    challenges: [
      "Scheduling managed via phone calls and text messages",
      "Paper work orders with no digital record trail",
      "No real-time technician or job visibility",
      "Slow invoicing — often 30–60 days after job completion",
    ],
    opportunities: [
      "Digital dispatch and scheduling system",
      "Mobile work order capture",
      "Automated invoicing on job close",
      "Fleet and technician status dashboards",
    ],
    systems: "Dispatch · Scheduling · Billing · Fleet Tracking",
  },
  {
    name: "Sanitation Operations",
    tag: "Operations & Logistics",
    challenges: [
      "Route planning done manually each morning",
      "Billing cycles running 30+ days on paper",
      "No customer portal or service visibility",
      "Fleet maintenance tracked in notebooks",
    ],
    opportunities: [
      "Route optimization and digital dispatch",
      "Automated billing and collections",
      "Customer service portal",
      "Fleet health and maintenance tracking",
    ],
    systems: "Route Planning · Billing Automation · Fleet · Customer Portal",
  },
  {
    name: "Ranch & Agriculture",
    tag: "Agricultural Systems",
    challenges: [
      "Livestock records kept in physical notebooks or Excel",
      "No centralized vendor or supply chain visibility",
      "Seasonal labor and resource planning done manually",
      "Limited financial visibility across operations",
    ],
    opportunities: [
      "Livestock and inventory management system",
      "Vendor and supply chain portal",
      "Seasonal planning and resource dashboards",
      "Financial operations reporting",
    ],
    systems: "Inventory · Vendor Management · Resource Planning · Reporting",
  },
  {
    name: "Mid-Market Operations",
    tag: "Business Modernization",
    challenges: [
      "Multiple departments using disconnected tools",
      "Reporting built manually each week or month",
      "No unified view of operational performance",
      "Growth slowed by process bottlenecks",
    ],
    opportunities: [
      "Cross-department systems integration",
      "Automated operational reporting",
      "Executive performance dashboards",
      "Process standardization and automation",
    ],
    systems: "ERP Integration · Automation · Analytics · Process Design",
  },
  {
    name: "Service Businesses",
    tag: "Sales & Lead Capture",
    challenges: [
      "Website generates little to no qualified leads",
      "Proposal and quoting process is slow and manual",
      "No follow-up system after initial contact",
      "Customer lifecycle has no digital record",
    ],
    opportunities: [
      "Modern website with conversion-optimized flows",
      "Automated proposal and quoting system",
      "Lead nurture and follow-up sequences",
      "Customer portal and lifecycle management",
    ],
    systems: "Website · Lead Capture · CRM · Proposal Automation",
  },
];

const commonThreads = [
  {
    title: "Operational Automation",
    desc: "Every industry has repetitive work that can be systematized. We identify and eliminate the manual steps slowing your team down.",
  },
  {
    title: "Operational Visibility",
    desc: "Business leaders need real-time intelligence, not last week's spreadsheet. We build dashboards that surface what matters, when it matters.",
  },
  {
    title: "Lead Capture & Conversion",
    desc: "Every business needs a clear path from prospect to customer. We design and build the systems that make that path shorter and more reliable.",
  },
  {
    title: "Systems Integration",
    desc: "The tools already exist in most businesses. What's missing is the layer that connects them into a coherent operational system.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Industry Solutions</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            We understand your industry.<br className="hidden sm:block" /> Not just your technology.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Operational modernization looks different for a mortgage company than it does for an HVAC contractor. We bring industry-specific context to every engagement.
          </p>
        </div>
      </section>

      {/* ── Industry Cards ── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden hover:border-[#8FBFBA]/30 transition-colors">
                {/* Card header */}
                <div className="px-7 py-5 border-b border-[#AEB7C2]/10 flex items-center justify-between">
                  <h3 className="text-[#F4F7F9] font-semibold text-lg">{ind.name}</h3>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#8FBFBA] bg-[#8FBFBA]/10 border border-[#8FBFBA]/20 px-2.5 py-1 rounded-full">
                    {ind.tag}
                  </span>
                </div>

                <div className="p-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Challenges */}
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-3">Common Challenges</div>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs text-[#AEB7C2] leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#AEB7C2]/30 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Opportunities */}
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-[#8FBFBA] mb-3">Modernization Opportunities</div>
                      <ul className="space-y-2">
                        {ind.opportunities.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-xs text-[#AEB7C2] leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8FBFBA] flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Systems tag */}
                  <div className="pt-5 border-t border-[#AEB7C2]/10">
                    <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-1">Typical Systems Delivered</div>
                    <div className="text-[#AEB7C2] text-xs">{ind.systems}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Threads ── */}
      <section className="py-24 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-3">Across Every Industry</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">The same operational challenges. The same modern solutions.</h2>
            <p className="text-[#AEB7C2] max-w-xl">Industry context matters, but the core modernization levers are consistent across every business we work with.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonThreads.map((t) => (
              <div key={t.title} className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl p-6">
                <div className="w-8 h-0.5 bg-[#8FBFBA] mb-4 rounded-full" />
                <h3 className="text-[#F4F7F9] font-semibold mb-3">{t.title}</h3>
                <p className="text-[#AEB7C2] text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#8FBFBA] text-xs font-semibold tracking-widest uppercase mb-4">Industry-Specific Assessment</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7F9] mb-5">
            Let us assess your specific operational opportunity.
          </h2>
          <p className="text-[#AEB7C2] leading-relaxed mb-10 max-w-xl mx-auto">
            Every assessment is scoped to your industry, your systems, and your growth goals — not a generic technology checklist.
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
