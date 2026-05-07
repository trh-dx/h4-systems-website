export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6">
          H Four Systems
        </h1>
        <p className="text-xl sm:text-2xl text-[#5cb8b2] font-medium mb-6">
          Modern websites and practical systems for growing businesses.
        </p>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
          We help small and mid-sized businesses modernize outdated websites,
          improve lead capture, and build practical digital systems that support
          growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block bg-[#5cb8b2] hover:bg-[#4aa8a2] text-[#0a1628] font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Schedule a Website Review
          </a>
          <a
            href="#"
            className="inline-block border border-[#5cb8b2] hover:bg-[#5cb8b2]/10 text-[#5cb8b2] font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            View Services
          </a>
        </div>
      </div>
    </main>
  );
}
