import { ArrowRight } from "lucide-react";
import MainCTA from "../../_components/cta";
import HeroBanner from "../../_components/HeroBanner";
import WhyChooseKinetic from "../../_components/why-us";
import DataCablingServices from "./_components/DataCablingServices";
import IndustriesWeServe from "./_components/IndustriesWeServe";

export default function DataCabling() {
  return (
    <div>
      <HeroBanner
        label="DATA CABLING SOLUTIONS"
        title="Structured, Reliable & High-Performance"
        highlight="Data Cabling Infrastructure"
        description="Kinetic Network provides professional structured data cabling solutions designed to support seamless connectivity, optimized performance, and future network expansion."
        image="/assets/images/dataCablingHero.webp"
      />
      <DataCablingServices />
      <WhyChooseKinetic />
      <IndustriesWeServe />
      <MainCTA
        title="Reliable Data Cabling Solutions"
        buttonText="Request a Consultation"
        buttonLink="/contact"
        buttonIcon={<ArrowRight className="w-5 h-5" />}
        bgImage="/assets/images/mainCtaBg.webp"
        className="mt-16 mb-20 mx-6"
      />
    </div>
  );
}
