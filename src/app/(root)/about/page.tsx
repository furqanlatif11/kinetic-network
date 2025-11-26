import React from "react";
import OurValues from "./components/values";
import HeroBanner from "../_components/HeroBanner";
import MissionVision from "./components/mission";
import QuoteFormCTA from "./components/quoteForm";
import WhoWeAre from "./components/who-we-are";

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
      <WhoWeAre
        title="Who We Are"
        subtitle="Leading Security & Data Solutions Provider"
        description="At Kinetic Network, we specialize in delivering cutting-edge security systems and digital infrastructure for homes, businesses, and enterprises. Our mission is to provide trusted, scalable, and innovative solutions that ensure safety, privacy, and operational efficiency."
        image="/assets/images/heroAboutBg.png"
      />
      <MissionVision />
      <OurValues />
      <QuoteFormCTA />
    </main>
  );
}
