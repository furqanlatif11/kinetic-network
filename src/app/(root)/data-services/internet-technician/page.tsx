import { ArrowRight } from "lucide-react";
import MainCTA from "../../_components/cta";
import HeroBanner from "../../_components/HeroBanner";
import WhyChooseKinetic from "../../_components/why-us";
import ProblemsWeFix from "./components/problemsWeFix";
import ServiceProcess from "./components/ServiceProcess";

export default function DataCabling() {
  return (
    <div>
      <HeroBanner
        label="INTERNET TECHNICIAN SERVICES"
        title="Reliable, Fast & Secure"
        highlight="Internet Connectivity"
        description="From network troubleshooting and Wi-Fi optimization to router configuration and on-site diagnostics, Kinetic Network provides expert internet technician services to keep your connection stable, secure, and performing at its best."
        image="/assets/images/internetTechnicianCover.webp"
      />

      <ProblemsWeFix />
      <ServiceProcess />
      <WhyChooseKinetic />
      <MainCTA
        subtitle="Reliable Internet Connectivity"
        title="Professional Internet Technician Services"
        description="From troubleshooting and router setup to Wi-Fi optimization and on-site diagnostics, Kinetic Network’s expert technicians ensure your internet is stable, fast, and secure. Experience seamless connectivity without downtime."
        buttonText="Book a Technician"
        buttonLink="/contact"
        buttonIcon={<ArrowRight className="w-5 h-5" />}
        bgImage="/assets/images/fiberOpticCta.webp"
        className="mt-16 mb-20 mx-6"
      />
    </div>
  );
}
