import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const assessmentSteps = [
  {
    title: "We review your website",
    desc: "We look at your design, mobile experience, messaging, and lead capture.",
  },
  {
    title: "We identify the biggest gaps",
    desc: "We point out what may be costing you leads, trust, or follow-up opportunities.",
  },
  {
    title: "We prioritize improvements",
    desc: "You get a clear list of what to fix first, without unnecessary complexity.",
  },
  {
    title: "We walk through next steps",
    desc: "We review the findings with you on a short video call.",
  },
];

const goodFitFor = [
  "Replace an outdated or hard-to-manage website",
  "Make your site easier to use on mobile",
  "Capture more leads from visitors already finding you",
  "Improve follow-up after someone contacts you",
  "Understand what to fix first before spending money",
];

const industries = [
  "HVAC / Home Services",
  "Mortgage / Real Estate",
  "Medical / Dental",
  "Legal / Professional Services",
  "Retail / Local Business",
  "Construction / Trades",
  "Ranch / Agriculture",
  "Other",
];

const challenges = [
  "My website is outdated",
  "My website is not mobile-friendly",
  "I need more leads",
  "I need better follow-up",
  "I need help with automation",
  "I need better visibility / dashboards",
  "I'm not sure yet",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F4F7F9]">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#6FAFA6] text-xs font-semibold tracking-widest uppercase mb-4">Free Assessment</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7F9] leading-tight tracking-tight mb-6">
            Request Your Free Website Assessment
          </h1>
          <p className="text-lg text-[#AEB7C2] leading-relaxed max-w-2xl">
            Tell us a little about your business. We&apos;ll review your website and follow up within one business day with next steps.
          </p>
        </div>
      </section>

      {/* ── Assessment detail + Form ── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* Left: Assessment detail */}
            <div className="space-y-8">
              {/* How the assessment works */}
              <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#AEB7C2]/60 mb-6">How the Assessment Works</div>
                <div className="space-y-5">
                  {assessmentSteps.map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 flex items-center justify-center mt-0.5">
                        <span className="text-[#6FAFA6] text-xs font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <div className="text-[#F4F7F9] font-semibold text-sm mb-1">{item.title}</div>
                        <div className="text-[#AEB7C2] text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good fit if you want to */}
              <div className="bg-[#0B1220] border border-[#6FAFA6]/20 rounded-xl p-8">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#6FAFA6] mb-5">Good Fit If You Want To</div>
                <ul className="space-y-3">
                  {goodFitFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#AEB7C2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6FAFA6] flex-shrink-0 mt-[5px]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#6FAFA6]/15">
                  <div className="text-xs text-[#AEB7C2]/50 uppercase tracking-wider mb-0.5">Format</div>
                  <div className="text-[#F4F7F9] text-sm font-medium">Video call — 30 to 45 minutes</div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-[#1A2333] border border-[#AEB7C2]/15 rounded-xl p-8">
              <div className="text-[#F4F7F9] font-bold text-xl mb-2">Your Information</div>
              <p className="text-[#AEB7C2] text-sm mb-8">No commitment required. We&apos;ll follow up within one business day.</p>

              <form className="space-y-5">

                {/* First + Last name — side by side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Services LLC"
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourcompany.com"
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@yourcompany.com"
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                  />
                </div>

                {/* Phone Number (optional) */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Phone Number{" "}
                    <span className="text-[#AEB7C2]/40 normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 867-5309"
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Industry
                  </label>
                  <select className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm focus:outline-none focus:border-[#6FAFA6]/60 transition-colors appearance-none">
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                {/* What do you need help with most? */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    What do you need help with most?
                  </label>
                  <select className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm focus:outline-none focus:border-[#6FAFA6]/60 transition-colors appearance-none">
                    <option value="">Select one</option>
                    {challenges.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Tell Us More (optional) */}
                <div>
                  <label className="block text-xs font-semibold text-[#AEB7C2] uppercase tracking-wider mb-2">
                    Tell Us More{" "}
                    <span className="text-[#AEB7C2]/40 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What's not working today? Share your website issues, manual tasks, tools you use, or goals for the next 30–90 days."
                    className="w-full bg-[#0B1220] border border-[#AEB7C2]/20 rounded-lg px-4 py-3 text-[#F4F7F9] text-sm placeholder-[#AEB7C2]/30 focus:outline-none focus:border-[#6FAFA6]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6FAFA6] hover:bg-[#83BDB5] text-[#0B1220] font-bold py-4 rounded-lg transition-colors text-sm tracking-wide"
                >
                  Request Free Assessment
                </button>

                <p className="text-[#AEB7C2]/40 text-xs text-center">
                  No commitment required. We will follow up within one business day.
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternative contact ── */}
      <section className="py-16 px-6 bg-[#1A2333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#AEB7C2] text-sm mb-2">Prefer to reach out directly?</div>
          <div className="text-[#F4F7F9] font-semibold text-lg mb-1">contact@hfoursystems.com</div>
          <div className="text-[#AEB7C2]/60 text-sm">We respond to all inquiries within one business day.</div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
