"use client";

import Buttons from "@/components/Buttons";
import MainSection from "@/components/MainSection";
import TopNavbar from "@/components/TopNavbar";
import DarkVeil from "@/components/ui/DarkVeil";
import BenefitsSection from "@/components/BenefitsSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 -z-10 w-full h-full" aria-hidden="true">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="w-full pt-0 md:pt-4">
        <TopNavbar />
      </header>

      {/* Hero */}
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center"
      >
        <MainSection />
      </main>

      {/* Benefits */}
      <BenefitsSection />

      {/* Testimonials */}
      <FeedbackSection />

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
