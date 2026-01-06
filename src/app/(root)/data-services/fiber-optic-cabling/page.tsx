import { ArrowRight } from "lucide-react";
import MainCTA from "../../_components/cta";
import HeroBanner from "../../_components/HeroBanner";
import ServiceOverview from "./components/ServiceOverview";
import TrustBar from "./components/TrustBar";

export default function DataCabling() {
  return (
    <div>
      <HeroBanner
        label="FIBER OPTIC CABLING SOLUTIONS"
        title="Ultra-Fast, Secure & Future-Proof"
        highlight="Fiber Optic Networks"
        description="From backbone installations to high-speed fiber deployments, Kinetic Network delivers robust fiber optic cabling solutions built for speed, reliability, and long-term scalability."
        image="/assets/images/fiberOpticCabling.webp"
      />
      <TrustBar />
      <ServiceOverview />
      <MainCTA
        subtitle="Ultra-Fast Fiber Connectivity"
        title="Future-Ready Fiber Optic Cabling"
        description="Experience blazing-fast, secure, and scalable fiber optic network solutions for offices, data centers, and industrial facilities. Our expert team ensures seamless installation and long-term reliability."
        buttonText="Request a Quote"
        buttonLink="/contact"
        buttonIcon={<ArrowRight className="w-5 h-5" />}
        bgImage="/assets/images/fiberOpticCta.webp"
        className="mt-16 mb-20 mx-6"
      />
    </div>
  );
}
