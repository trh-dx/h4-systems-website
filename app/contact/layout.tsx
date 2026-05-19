import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — H Four Systems",
  description: "Schedule a free operational assessment with H Four Systems. We'll map your current systems, identify automation opportunities, and outline a practical path forward.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
