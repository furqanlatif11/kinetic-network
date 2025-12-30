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
      <IndustriesWeServe/>
    </div>
  );
}
