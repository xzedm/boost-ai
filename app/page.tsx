"use client";

import Buttons from "@/components/Buttons";
import MainSection from "@/components/MainSection";
import TopNavbar from "@/components/TopNavbar";
import DarkVeil from "@/components/ui/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";
import Image from "next/image";
import BenefitsSection from "@/components/BenefitsSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Header */}
      <header className="w-full pt-0 md:pt-4">
        <TopNavbar />
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center">
        <MainSection />
      </main>
      <section>
        <BenefitsSection />
      </section>
      <section>
        <FeedbackSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
