import React from "react";
import OurValues from "./components/values";
import HeroBanner from "../_components/HeroBanner";
import MissionVision from "./components/mission";
import QuoteFormCTA from "./components/quoteForm";
import WhoWeAre from "./components/who-we-are";
import MainCTA from "../_components/cta";
import { Smartphone } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroBanner
        label="ABOUT KINETIC NETWORK"
        title="Powering Secure Environments Through"
        highlight="Intelligence & Innovation"
        description="At Kinetic Network, we engineer security and digital infrastructure
        that protects homes, businesses, and entire organizations. From advanced
        surveillance to intelligent access control, our solutions are built for
        reliability, scale, and future-proofing."
        image="/assets/images/heroAboutBg.png"
      />
      <MissionVision />
      <WhoWeAre
        title="Who We Are"
        description="Kinetic Network delivers top-tier security and digital solutions for homes, businesses, and enterprises. We combine intelligence, innovation, and reliability in every solution we deploy."
        mediaUrl="/assets/images/luxuryMattressImage.mp4" // video path
        isVideo={true} // set true for video
      />

      <OurValues />
      <QuoteFormCTA />
      <MainCTA
        title="Smart Security Systems Designed for You"
        buttonText="Request Free Consultation"
        buttonLink="/contact"
        buttonIcon={<Smartphone className="w-5 h-5" />}
        bgImage="/assets/images/mainCtaBg.webp"
        className="mt-16 mb-20 mx-6"
      />
    </main>
  );
}
