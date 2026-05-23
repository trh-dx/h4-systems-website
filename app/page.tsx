import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import ServicesPreview from "@/components/ServicesPreview";
import CredibilityBand from "@/components/CredibilityBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220]">
      <Navbar />
      <Hero />
      <ValueStrip />
      <ServicesPreview />
      <CredibilityBand />
      <Footer />
    </main>
  );
}
