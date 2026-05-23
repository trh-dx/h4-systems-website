import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220]">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <StatsSection />
    </main>
  );
}
