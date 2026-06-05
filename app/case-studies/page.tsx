import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work — H Four Systems",
  description:
    "See the types of problems H4 Systems helps small businesses solve — outdated websites, missed leads, scattered follow-up, manual tracking, and lack of visibility.",
};

// ── Data ───────────────────────────────────────────────────────────

const scenarios = [
  {
    tag: "Website Modernization",
    industry: "Service businesses, contractors, professional services",
    title: "From outdated website to professional online presence",
    problem:
      "The business has an older website that does not look modern, is hard to use on mobile, and does not clearly guide visitors to contact the company.",
    approach:
      "Rebuild the website with a cleaner design, mobile-friendly pages, stronger calls-to-action, and clearer service information.",
    shift:
      "Customers can understand the business faster, contact the company more easily, and feel more confident before reaching out.",
  },
  {
    tag: "Lead Capture & Follow-up",
    industry: "Any business with a contact form or website",
    title: "From missed inquiries to better lead capture",
    problem:
      "Customer requests come through different places — contact forms, emails, phone calls, and text messages — making it easy for leads to get missed.",
    approach:
      "Create clearer contact forms, route submissions to the right place, and add simple tracking so new inquiries are easier to follow up on.",
    shift:
      "Leads become easier to see, easier to respond to, and less likely to fall through the cracks.",
  },
  {
    tag: "Workflow & Process",
    industry: "Trades, HVAC, field services, contractors",
    title: "From scattered follow-up to simple workflow",
    problem:
      "The business relies on memory, sticky notes, inboxes, or spreadsheets to remember who needs a response and what needs to happen next.",
    approach:
      "Set up simple follow-up steps, reminders, notifications, or spreadsheet and CRM updates so the process is easier to manage.",
    shift:
      "The owner and team have a clearer way to track requests, follow up faster, and reduce manual chasing.",
  },
  {
    tag: "Reporting & Visibility",
    industry: "Any business using spreadsheets to track activity",
    title: "From manual reporting to better visibility",
    problem:
      "Important information is spread across forms, spreadsheets, emails, and tools, making it hard to see what is happening in the business.",
    approach:
      "Create simple dashboards or reporting views that bring key information into one place.",
    shift:
      "The business can better understand leads, activity, follow-up, and trends without digging through multiple systems.",
  },
];

// ── Page ───────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">
            Our Work
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            See how outdated websites and manual processes can become better business systems.
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            These examples show the types of problems H4 Systems helps solve — lost website
            leads, scattered follow-up, manual reporting, disconnected tools, and day-to-day
            work that depends too much on memory, text messages, and spreadsheets.
          </p>
        </div>
      </section>

      {/* ── Scenario Cards ── */}
      <section className="pt-6 pb-10 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section intro */}
          <p className="text-[#AEB7C2] text-sm leading-relaxed mb-6 max-w-2xl">
            Practical examples of how H4 Systems helps small businesses look better, respond faster, and stay organized.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {scenarios.map((s) => (
              <div
                key={s.tag}
                className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl overflow-hidden
                           hover:border-[#6FAFA6]/30 transition-colors duration-200"
              >
                {/* Card header */}
                <div className="bg-[#0B1220] border-b border-[#AEB7C2]/10 px-6 py-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <span className="text-xs text-[#AEB7C2]/50 text-right hidden sm:block">{s.industry}</span>
                </div>

                <div className="p-7 flex flex-col gap-5">
                  {/* Title */}
                  <h3 className="text-[#F4F7F9] font-bold text-[15px] leading-snug tracking-tight">
                    {s.title}
                  </h3>

                  {/* Problem */}
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 mb-2">
                      The Problem
                    </div>
                    <p className="text-[#AEB7C2] text-sm leading-relaxed">{s.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 mb-2">
                      H4 Solution
                    </div>
                    <p className="text-[#AEB7C2] text-sm leading-relaxed">{s.approach}</p>
                  </div>

                  {/* Impact */}
                  <div className="bg-[#0B1220] border border-[#6FAFA6]/20 rounded-lg px-5 py-4 mt-auto">
                    <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-1">
                      Business Impact
                    </div>
                    <div className="text-[#6FAFA6] font-semibold text-sm leading-snug">
                      {s.shift}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Website Visual Comparison ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              Website Modernization
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              Example: older website vs. a cleaner, more helpful one.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl text-sm leading-relaxed">
              Many small business websites were built years ago and have not kept up. A
              simple rebuild can make it much easier for customers to understand what
              you do and how to reach you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* ── BEFORE browser ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 px-1">Before</div>
              {/* Browser chrome */}
              <div className="rounded-xl overflow-hidden border border-[#AEB7C2]/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Chrome bar */}
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/25 font-mono">
                    www.ourcompany.net
                  </div>
                </div>
                {/* Page content */}
                <div className="bg-[#f5f0e8] text-[#333]">
                  {/* Nav — crammed */}
                  <div className="bg-[#3a3a3a] px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-[10px] font-bold tracking-wide">OUR COMPANY</span>
                    <div className="flex gap-2 flex-wrap">
                      {["Home","About","Services","Products","FAQ","Blog","News","Contact"].map(item => (
                        <span key={item} className="text-white/60 text-[8px]">{item}</span>
                      ))}
                    </div>
                  </div>
                  {/* Hero — generic image block */}
                  <div className="bg-[#c8bfaa] h-28 flex flex-col items-center justify-center px-4 text-center relative">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(0,0,0,0.04)_8px,rgba(0,0,0,0.04)_9px)]" />
                    <div className="relative">
                      <div className="text-[11px] font-bold text-[#222] mb-1">WELCOME TO OUR WEBSITE</div>
                      <div className="text-[8px] text-[#444] max-w-[200px] leading-tight">
                        We provide quality services to our valued customers since 1998.
                        Please browse our site to learn more about what we do.
                      </div>
                    </div>
                  </div>
                  {/* Dense content */}
                  <div className="p-4 grid grid-cols-3 gap-3">
                    {["Our Services","About Us","Get In Touch"].map((heading) => (
                      <div key={heading}>
                        <div className="text-[9px] font-bold text-[#333] border-b border-[#bbb] pb-1 mb-2">{heading}</div>
                        {[1,2,3,4].map(i => (
                          <div key={i} className="h-1.5 bg-[#bbb] rounded-sm mb-1.5 opacity-70" style={{ width: `${75 + (i * 7) % 25}%` }} />
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="bg-[#3a3a3a] px-4 py-2 text-center">
                    <span className="text-white/40 text-[8px]">© 2019 Our Company Inc. &nbsp;|&nbsp; Phone: 555-867-5309 &nbsp;|&nbsp; email@company.net</span>
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="flex flex-wrap gap-2">
                {["No clear CTA", "Buried contact info", "Not mobile-friendly", "Zero lead capture"].map(l => (
                  <span key={l} className="text-[10px] text-[#AEB7C2]/60 bg-[#0B1220] border border-[#AEB7C2]/10 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

            {/* ── AFTER browser ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] px-1">After</div>
              {/* Browser chrome */}
              <div className="rounded-xl overflow-hidden border border-[#6FAFA6]/20 shadow-[0_8px_32px_rgba(111,175,166,0.15)]">
                {/* Chrome bar */}
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/40 font-mono">
                    www.yourbusiness.com
                  </div>
                </div>
                {/* Page content */}
                <div className="bg-[#0d1520] text-[#F4F7F9]">
                  {/* Nav — clean */}
                  <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                    <span className="text-[#6FAFA6] text-[10px] font-bold tracking-widest uppercase">YourBiz</span>
                    <div className="flex items-center gap-4">
                      {["Services","About","Process"].map(item => (
                        <span key={item} className="text-white/50 text-[9px]">{item}</span>
                      ))}
                      <span className="bg-[#6FAFA6] text-[#0B1220] text-[8px] font-bold px-2.5 py-1 rounded">Get Started</span>
                    </div>
                  </div>
                  {/* Hero — clean */}
                  <div className="px-5 pt-7 pb-5">
                    <div className="text-[8px] text-[#6FAFA6] tracking-widest uppercase mb-2 font-semibold">
                      Free Assessment
                    </div>
                    <div className="text-[13px] font-bold text-white leading-snug mb-2 max-w-[220px]">
                      Modern systems for businesses ready to grow.
                    </div>
                    <div className="text-[8px] text-white/50 leading-relaxed mb-4 max-w-[200px]">
                      We assess your operations and deliver practical digital solutions
                      that create real results.
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-[#6FAFA6] text-[#0B1220] text-[8px] font-bold px-3 py-1.5 rounded">
                        Schedule Assessment →
                      </span>
                      <span className="border border-white/20 text-white/60 text-[8px] font-bold px-3 py-1.5 rounded">
                        Our Services
                      </span>
                    </div>
                  </div>
                  {/* Value cards */}
                  <div className="px-5 pb-5 grid grid-cols-3 gap-2">
                    {["Faster delivery","Lead capture","Integrated systems"].map(card => (
                      <div key={card} className="bg-[#1A2333] border border-white/10 rounded-lg p-2.5">
                        <div className="w-4 h-0.5 bg-[#6FAFA6] mb-2 rounded-full" />
                        <div className="text-[8px] text-white/80 font-semibold leading-tight">{card}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="flex flex-wrap gap-2">
                {["Clear CTA above fold", "Integrated lead capture", "Mobile-first", "Built to convert"].map(l => (
                  <span key={l} className="text-[10px] text-[#6FAFA6] bg-[#6FAFA6]/8 border border-[#6FAFA6]/20 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Lead Capture Visual Comparison ── */}
      <section className="pt-6 pb-10 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              Lead Capture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              Example: leads buried in email vs. a simple way to track them.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl text-sm leading-relaxed">
              When inquiries land in a shared inbox mixed with newsletters and notifications,
              it is easy to miss them. Adding simple routing and tracking helps make sure
              every lead gets a follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* ── BEFORE: email inbox ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 px-1">Before</div>
              <div className="rounded-xl overflow-hidden border border-[#AEB7C2]/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Chrome */}
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/25 font-mono">
                    info@ourcompany.net — Inbox (47 unread)
                  </div>
                </div>
                {/* Email client */}
                <div className="bg-[#f6f6f6]">
                  {/* Toolbar */}
                  <div className="bg-[#1a73e8] px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-white text-[9px] font-bold">Gmail</span>
                      <div className="bg-white/20 rounded px-2 py-0.5">
                        <span className="text-white text-[8px]">Search mail</span>
                      </div>
                    </div>
                    <span className="text-white/60 text-[8px]">info@ourcompany.net</span>
                  </div>
                  {/* Inbox rows */}
                  <div className="divide-y divide-[#e0e0e0]">
                    {[
                      { from: "Wix", subject: "Your website stats this week", time: "10:14 AM", unread: false, tag: null },
                      { from: "Website Form", subject: "New Contact Form Submission", time: "9:52 AM", unread: true, tag: "lead" },
                      { from: "Mailchimp", subject: "Your campaign was sent!", time: "9:30 AM", unread: false, tag: null },
                      { from: "Website Form", subject: "New Contact Form Submission", time: "Yesterday", unread: true, tag: "lead" },
                      { from: "GoDaddy", subject: "Your domain renews in 14 days", time: "Yesterday", unread: false, tag: null },
                      { from: "Website Form", subject: "New Contact Form Submission", time: "Mon", unread: false, tag: "lead" },
                      { from: "Yelp for Business", subject: "You have a new review!", time: "Mon", unread: false, tag: null },
                      { from: "Website Form", subject: "New Contact Form Submission", time: "Mar 14", unread: false, tag: "missed" },
                      { from: "QuickBooks", subject: "Invoice #1042 is overdue", time: "Mar 12", unread: false, tag: null },
                    ].map((email, i) => (
                      <div key={i} className={`flex items-center gap-2 px-3 py-2 ${email.unread ? "bg-white font-bold" : "bg-[#f6f6f6]"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${email.unread ? "bg-[#1a73e8]" : "bg-transparent"}`} />
                        <span className={`text-[8px] w-20 truncate flex-shrink-0 ${email.unread ? "text-[#222]" : "text-[#666]"}`}>{email.from}</span>
                        <span className={`text-[8px] flex-1 truncate ${email.unread ? "text-[#222]" : "text-[#888]"} ${email.tag === "missed" ? "line-through text-[#bbb]" : ""}`}>
                          {email.subject}
                        </span>
                        {email.tag === "lead" && <span className="text-[7px] bg-[#fce8e6] text-[#c5221f] px-1.5 py-0.5 rounded flex-shrink-0">Lead?</span>}
                        {email.tag === "missed" && <span className="text-[7px] bg-[#f1f3f4] text-[#999] px-1.5 py-0.5 rounded flex-shrink-0">Never replied</span>}
                        <span className="text-[7px] text-[#999] flex-shrink-0 w-10 text-right">{email.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-3 py-2 bg-[#fff3cd] border-t border-[#f0d060] flex items-center gap-2">
                    <span className="text-[8px] text-[#856404]">⚠ 3 form submissions this week — how many did you follow up on?</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Buried in email","No follow-up tracking","Leads go cold","No intake record"].map(l => (
                  <span key={l} className="text-[10px] text-[#AEB7C2]/60 bg-[#1A2333] border border-[#AEB7C2]/10 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

            {/* ── AFTER: lead pipeline ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] px-1">After</div>
              <div className="rounded-xl overflow-hidden border border-[#6FAFA6]/20 shadow-[0_8px_32px_rgba(111,175,166,0.15)]">
                {/* Chrome */}
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/40 font-mono">
                    leads.yourbusiness.com/pipeline
                  </div>
                </div>
                {/* Pipeline view */}
                <div className="bg-[#0d1520] p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-white/80">Lead Pipeline</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[8px] text-white/30">7 leads this month</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                        <span className="text-[8px] text-[#6FAFA6] font-mono font-bold">LIVE</span>
                      </div>
                    </div>
                  </div>
                  {/* Stage summary */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { stage: "New", count: 2, color: "#6FAFA6" },
                      { stage: "Contacted", count: 3, color: "#83BDB5" },
                      { stage: "Qualified", count: 1, color: "#AEB7C2" },
                      { stage: "Proposal", count: 1, color: "#F4F7F9" },
                    ].map(s => (
                      <div key={s.stage} className="bg-[#1A2333] border border-white/10 rounded-lg p-2 text-center">
                        <div className="text-[14px] font-bold mb-0.5" style={{ color: s.color }}>{s.count}</div>
                        <div className="text-[7px] text-white/40">{s.stage}</div>
                      </div>
                    ))}
                  </div>
                  {/* Lead rows */}
                  <div className="bg-[#1A2333] border border-white/10 rounded-lg overflow-hidden mb-3">
                    <div className="px-3 py-1.5 border-b border-white/5 grid text-[7px] text-white/30 uppercase tracking-wider"
                      style={{ gridTemplateColumns: "1fr 64px 72px 60px 56px" }}>
                      <span>Contact</span><span>Source</span><span>Stage</span><span>Owner</span><span>Age</span>
                    </div>
                    {[
                      { name: "Sarah M.", source: "Website", stage: "New", owner: "You", age: "2 min", stageColor: "#6FAFA6", new: true },
                      { name: "Tom R.", source: "Website", stage: "Contacted", owner: "You", age: "1 day", stageColor: "#83BDB5", new: false },
                      { name: "Dana K.", source: "Referral", stage: "Qualified", owner: "You", age: "3 days", stageColor: "#AEB7C2", new: false },
                      { name: "Mike B.", source: "Website", stage: "Proposal", owner: "You", age: "6 days", stageColor: "#F4F7F9", new: false },
                    ].map((lead, i) => (
                      <div key={i} className={`px-3 py-2 border-b border-white/5 last:border-0 grid items-center gap-1 ${lead.new ? "bg-[#6FAFA6]/5" : ""}`}
                        style={{ gridTemplateColumns: "1fr 64px 72px 60px 56px" }}>
                        <div className="flex items-center gap-1.5">
                          {lead.new && <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] flex-shrink-0" />}
                          <span className="text-[8px] text-white/80 font-medium">{lead.name}</span>
                        </div>
                        <span className="text-[7px] text-white/40">{lead.source}</span>
                        <span className="text-[7px] font-semibold" style={{ color: lead.stageColor }}>{lead.stage}</span>
                        <span className="text-[7px] text-white/40">{lead.owner}</span>
                        <span className="text-[7px] text-white/30 font-mono">{lead.age}</span>
                      </div>
                    ))}
                  </div>
                  {/* Auto-notification */}
                  <div className="bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] flex-shrink-0" />
                    <span className="text-[8px] text-[#6FAFA6]">New lead from website — follow-up reminder set for 2 hrs</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Every lead captured","Automatic follow-up","Stage tracked","Nothing falls through"].map(l => (
                  <span key={l} className="text-[10px] text-[#6FAFA6] bg-[#6FAFA6]/8 border border-[#6FAFA6]/20 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Operational Visual Comparison ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              Reporting & Visibility
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              Example: tracking everything in a spreadsheet vs. seeing it in one place.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl text-sm leading-relaxed">
              Spreadsheets work until they get complicated. A simple dashboard can pull
              the same information together so it is easier to see what is happening
              without spending time pulling it manually.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* ── BEFORE: spreadsheet ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 px-1">Before</div>
              <div className="rounded-xl overflow-hidden border border-[#AEB7C2]/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Chrome */}
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/25 font-mono">
                    Operations_Report_FINAL_v3_USE_THIS_ONE.xlsx
                  </div>
                </div>
                {/* Spreadsheet content */}
                <div className="bg-white text-[#333]">
                  {/* Toolbar */}
                  <div className="bg-[#217346] px-3 py-1.5 flex items-center gap-3">
                    <span className="text-white text-[9px] font-bold">Excel</span>
                    <div className="flex gap-2">
                      {["File","Home","Insert","Data","Review"].map(m => (
                        <span key={m} className="text-white/70 text-[8px]">{m}</span>
                      ))}
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="text-white/50 text-[8px]">Last saved: 3 weeks ago</span>
                    </div>
                  </div>
                  {/* Formula bar */}
                  <div className="bg-[#f3f3f3] border-b border-[#d0d0d0] px-2 py-1 flex items-center gap-2">
                    <span className="text-[9px] text-[#666] font-mono bg-white border border-[#ccc] px-1.5 py-0.5">H14</span>
                    <span className="text-[9px] text-[#333] font-mono">=SUMIF(B:B,&quot;Closed&quot;,E:E)/COUNTIF(B:B,&quot;Closed&quot;)</span>
                  </div>
                  {/* Header row */}
                  <div className="grid text-[8px] font-bold bg-[#e8e8e8] border-b border-[#ccc]"
                    style={{ gridTemplateColumns: "28px 80px 64px 56px 56px 64px 72px 56px" }}>
                    {["","Client Name","Status","Amount","Rep","Last Contact","Follow-up Date","Priority"].map((h,i) => (
                      <div key={i} className="px-1.5 py-1.5 border-r border-[#ccc] text-[#444] truncate">{h}</div>
                    ))}
                  </div>
                  {/* Data rows */}
                  {[
                    ["1","Acme Corp","In Progress","$4,200","J.Smith","2 wks ago","???","HIGH"],
                    ["2","River LLC","Proposal Sent","$1,800","M.Lee","5 days ago","Friday?","med"],
                    ["3","Blue Co","CLOSED","$6,500","J.Smith","—","—","—"],
                    ["4","Star Ind.","Follow Up","$3,100","K.Jones","3 wks ago","OVERDUE","HIGH"],
                    ["5","Peak Svc","New Lead","$900","M.Lee","yesterday","TBD","low"],
                    ["6","Crest Ltd","In Progress","$5,400","K.Jones","1 wk ago","Next week","med"],
                  ].map((row, ri) => (
                    <div key={ri}
                      className={`grid text-[8px] border-b border-[#e8e8e8] ${ri % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}`}
                      style={{ gridTemplateColumns: "28px 80px 64px 56px 56px 64px 72px 56px" }}>
                      {row.map((cell, ci) => (
                        <div key={ci} className={`px-1.5 py-1.5 border-r border-[#e8e8e8] truncate font-mono
                          ${cell === "HIGH" ? "bg-[#ffe0e0] text-[#c00]" : ""}
                          ${cell === "OVERDUE" ? "bg-[#fff3cd] text-[#856404]" : ""}
                          ${cell === "CLOSED" ? "text-[#217346]" : "text-[#333]"}`}>
                          {cell}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="px-3 py-2 bg-[#f3f3f3] border-t border-[#ccc] flex items-center justify-between">
                    <span className="text-[8px] text-[#888] font-mono">Sheet1 / Sheet2 / Sheet3 / Archive_2023 / OLD</span>
                    <span className="text-[8px] text-[#c00]">⚠ Some values may be outdated</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Manually maintained","Always out of date","No real-time view","Decisions on stale data"].map(l => (
                  <span key={l} className="text-[10px] text-[#AEB7C2]/60 bg-[#1A2333] border border-[#AEB7C2]/10 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

            {/* ── AFTER: live dashboard ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] px-1">After</div>
              <div className="rounded-xl overflow-hidden border border-[#6FAFA6]/20 shadow-[0_8px_32px_rgba(111,175,166,0.15)]">
                {/* Chrome */}
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/40 font-mono">
                    ops.yourbusiness.com/dashboard
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="bg-[#0d1520] p-4">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-white/80">Operations Dashboard</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] animate-pulse" />
                      <span className="text-[8px] text-[#6FAFA6] font-mono font-bold">LIVE</span>
                    </div>
                  </div>
                  {/* KPI cards */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Revenue MTD", value: "$38.2k", delta: "+12%", up: true },
                      { label: "Open Pipeline", value: "14 deals", delta: "+3 this week", up: true },
                      { label: "Avg. Close Time", value: "18 days", delta: "↓ from 31", up: true },
                    ].map(kpi => (
                      <div key={kpi.label} className="bg-[#1A2333] border border-white/10 rounded-lg p-2.5">
                        <div className="text-[7px] text-white/40 uppercase tracking-wider mb-1">{kpi.label}</div>
                        <div className="text-[12px] font-bold text-white mb-0.5">{kpi.value}</div>
                        <div className="text-[7px] text-[#6FAFA6]">{kpi.delta}</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart */}
                  <div className="bg-[#1A2333] border border-white/10 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[8px] text-white/60 font-semibold">Pipeline by Stage</span>
                      <span className="text-[7px] text-white/30">Last 30 days</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-12">
                      {[
                        { h: "60%", label: "Lead" },
                        { h: "45%", label: "Qual." },
                        { h: "75%", label: "Prop." },
                        { h: "35%", label: "Nego." },
                        { h: "85%", label: "Close" },
                      ].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1">
                          <div className="w-full rounded-sm bg-[#6FAFA6]" style={{ height: bar.h, opacity: 0.4 + i * 0.12 }} />
                          <span className="text-[6px] text-white/30">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Status rows */}
                  <div className="bg-[#1A2333] border border-white/10 rounded-lg overflow-hidden">
                    <div className="px-3 py-1.5 border-b border-white/5 flex justify-between">
                      <span className="text-[7px] text-white/40 uppercase tracking-wider">Recent Activity</span>
                      <span className="text-[7px] text-[#6FAFA6]">View all →</span>
                    </div>
                    {[
                      { name: "Acme Corp", status: "Proposal sent", time: "2 min ago", dot: "#6FAFA6" },
                      { name: "Star Ind.", status: "Meeting booked", time: "1 hr ago", dot: "#6FAFA6" },
                      { name: "Blue Co", status: "Closed — won", time: "Today", dot: "#28C840" },
                    ].map(row => (
                      <div key={row.name} className="px-3 py-2 flex items-center justify-between border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: row.dot }} />
                          <span className="text-[8px] text-white/70 font-medium">{row.name}</span>
                          <span className="text-[7px] text-white/30">{row.status}</span>
                        </div>
                        <span className="text-[7px] text-white/25 font-mono">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Always current","Real-time KPIs","One source of truth","Built around your data"].map(l => (
                  <span key={l} className="text-[10px] text-[#6FAFA6] bg-[#6FAFA6]/8 border border-[#6FAFA6]/20 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Workflow Visual Comparison ── */}
      <section className="pt-6 pb-10 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-3">
              Workflow & Follow-up
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7F9] mb-3">
              Example: coordinating jobs over group text vs. a simple dispatch view.
            </h2>
            <p className="text-[#AEB7C2] max-w-xl text-sm leading-relaxed">
              Many field service businesses coordinate work through group texts and phone
              calls. It works until something falls through. Adding a simple structured
              view makes it easier to track who is doing what and when.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* ── BEFORE: group chat chaos ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/50 px-1">Before</div>
              <div className="rounded-xl overflow-hidden border border-[#AEB7C2]/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/25 font-mono">
                    Messages — Job Crew 🔧 (6 unread)
                  </div>
                </div>
                {/* iOS Messages style */}
                <div className="bg-[#1c1c1e]">
                  {/* Chat header */}
                  <div className="bg-[#2a2a2e] px-4 py-2 flex items-center justify-center border-b border-white/5">
                    <span className="text-[9px] text-white/50 font-semibold">Job Crew 🔧</span>
                    <span className="text-[7px] text-white/25 ml-2">Mike, Dave, Karen, +2</span>
                  </div>
                  <div className="p-3 space-y-2 max-h-72 overflow-hidden">
                    {/* Timestamp */}
                    <div className="text-center text-[7px] text-white/25 py-1">Today 7:48 AM</div>
                    {/* Messages */}
                    <div className="flex justify-start">
                      <div className="bg-[#3a3a3c] rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[7px] text-[#6FAFA6] mb-0.5 font-semibold">Boss</div>
                        <div className="text-[8px] text-white/80">Who&apos;s free for the Henderson job Thursday 9am?</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#0b84fe] rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[8px] text-white/90">I thought Mike had it?</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#3a3a3c] rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[7px] text-[#AEB7C2] mb-0.5 font-semibold">Mike</div>
                        <div className="text-[8px] text-white/80">No one told me. I&apos;m already on the Brennan job</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#3a3a3c] rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[7px] text-[#AEB7C2] mb-0.5 font-semibold">Dave</div>
                        <div className="text-[8px] text-white/80">Does anyone have the Henderson address? I can&apos;t find the work order</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#3a3a3c] rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[7px] text-[#6FAFA6] mb-0.5 font-semibold">Boss</div>
                        <div className="text-[8px] text-white/80">I emailed it last week, check your inbox</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#0b84fe] rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[8px] text-white/90">Karen can you cover? I have a conflict</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#3a3a3c] rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[7px] text-[#AEB7C2] mb-0.5 font-semibold">Karen</div>
                        <div className="text-[8px] text-white/80">what time and what&apos;s the scope? Nobody sent me details</div>
                      </div>
                    </div>
                    <div className="text-center text-[7px] text-white/25 py-1">2 missed calls from Henderson</div>
                    <div className="flex justify-start">
                      <div className="bg-[#3a3a3c] rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[75%]">
                        <div className="text-[7px] text-[#6FAFA6] mb-0.5 font-semibold">Boss</div>
                        <div className="text-[8px] text-[#FF5F57]">Henderson is calling — does ANYONE have this covered??</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2a2a2e] border-t border-white/5 px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-[#3a3a3c] rounded-full px-3 py-1.5">
                      <span className="text-[8px] text-white/20">iMessage</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["No job record","Accountability gaps","Clients left waiting","Owner firefighting daily"].map(l => (
                  <span key={l} className="text-[10px] text-[#AEB7C2]/60 bg-[#1A2333] border border-[#AEB7C2]/10 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

            {/* ── AFTER: dispatch board ── */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] px-1">After</div>
              <div className="rounded-xl overflow-hidden border border-[#6FAFA6]/20 shadow-[0_8px_32px_rgba(111,175,166,0.15)]">
                <div className="bg-[#2a2a2e] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#1c1c1e] rounded-md px-3 py-1 text-[10px] text-white/40 font-mono">
                    dispatch.yourbusiness.com
                  </div>
                </div>
                <div className="bg-[#0d1520] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-white/80">Dispatch Board</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[8px] text-white/30">Thu, May 23</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                        <span className="text-[8px] text-[#6FAFA6] font-mono font-bold">LIVE</span>
                      </div>
                    </div>
                  </div>
                  {/* Job rows */}
                  <div className="bg-[#1A2333] border border-white/10 rounded-lg overflow-hidden mb-3">
                    <div className="px-3 py-1.5 border-b border-white/5 grid text-[7px] text-white/30 uppercase tracking-wider"
                      style={{ gridTemplateColumns: "1fr 56px 72px 56px 56px" }}>
                      <span>Job / Client</span><span>Tech</span><span>Status</span><span>Start</span><span>ETA</span>
                    </div>
                    {[
                      { job: "Henderson — HVAC service", tech: "Karen", status: "Confirmed", statusColor: "#6FAFA6", start: "9:00 AM", eta: "On time" },
                      { job: "Brennan — Install", tech: "Mike", status: "En Route", statusColor: "#83BDB5", start: "8:00 AM", eta: "8:52 AM" },
                      { job: "Tully — Inspection", tech: "Dave", status: "Complete", statusColor: "#28C840", start: "7:00 AM", eta: "Done" },
                      { job: "Park Ave — Repair", tech: "Karen", status: "Scheduled", statusColor: "#AEB7C2", start: "1:00 PM", eta: "—" },
                      { job: "Westfield — Service", tech: "Mike", status: "Scheduled", statusColor: "#AEB7C2", start: "2:30 PM", eta: "—" },
                    ].map((job, i) => (
                      <div key={i} className="px-3 py-2 border-b border-white/5 last:border-0 grid items-center gap-1"
                        style={{ gridTemplateColumns: "1fr 56px 72px 56px 56px" }}>
                        <span className="text-[8px] text-white/70 font-medium truncate">{job.job}</span>
                        <span className="text-[7px] text-white/50">{job.tech}</span>
                        <span className="text-[7px] font-semibold" style={{ color: job.statusColor }}>{job.status}</span>
                        <span className="text-[7px] text-white/30 font-mono">{job.start}</span>
                        <span className="text-[7px] text-white/30 font-mono">{job.eta}</span>
                      </div>
                    ))}
                  </div>
                  {/* Auto-notifications */}
                  <div className="space-y-2">
                    <div className="bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 rounded-lg px-3 py-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] flex-shrink-0" />
                      <span className="text-[8px] text-[#6FAFA6]">Karen auto-assigned to Henderson — work order sent to her phone</span>
                    </div>
                    <div className="bg-[#1A2333] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#AEB7C2]/40 flex-shrink-0" />
                      <span className="text-[8px] text-white/40">Henderson notified: technician confirmed for 9:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Every job logged","Auto-assigned & notified","Client kept informed","Owner out of the loop"].map(l => (
                  <span key={l} className="text-[10px] text-[#6FAFA6] bg-[#6FAFA6]/8 border border-[#6FAFA6]/20 px-2.5 py-1 rounded-full">{l}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pt-6 pb-10 px-6 bg-[#1A2333]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0B1220] border border-[#AEB7C2]/15 rounded-xl overflow-hidden">
            <div className="bg-[#1A2333] border-b border-[#AEB7C2]/10 px-8 py-5 flex items-center gap-5">
              <div className="w-8 h-0.5 bg-[#6FAFA6] rounded-full" />
              <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase">
                Get Started
              </div>
            </div>
            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-[#F4F7F9] font-bold text-2xl sm:text-3xl leading-tight mb-5">
                  Not sure what your business needs first?
                </h2>
                <p className="text-[#AEB7C2] text-sm leading-relaxed mb-8">
                  Start with a free website and workflow audit. H4 Systems will review your
                  website, lead capture, follow-up process, and tools to identify what is
                  working, what is slowing you down, and what improvements would make the
                  biggest difference.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 font-mono
                             bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold
                             text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-md
                             transition-colors duration-200"
                >
                  Request a Free Website &amp; Workflow Audit
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
              <div className="space-y-4">
                {[
                  "Review your current website and customer experience",
                  "Look at how leads and inquiries are currently tracked",
                  "Understand your follow-up process and tools",
                  "Identify what is working and what is worth improving first",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6]" />
                    </div>
                    <span className="text-[#AEB7C2] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
