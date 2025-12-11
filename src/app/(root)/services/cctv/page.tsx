import FAQs from "../../_components/faqs";
import HeroBanner from "../../_components/HeroBanner";
import WhyChooseKinetic from "../../_components/why-us";
import CallToAction from "./_components/cta";
import FeaturesGrid from "./_components/features";
import ServiceOverview from "./_components/ServiceOverview";

export default function AccessControlPage() {
  return (
    <div>
      <HeroBanner
        label="INTELLIGENT SECURITY MONITORING"
        title="Advanced, Intelligent & Always Watching"
        highlight="CCTV Systems"
        description="Empowering your security with crystal-clear imagery, smart alerts, mobile access, and fully scalable surveillance setups for any environment."
        image="/assets/images/cctvHeroBanner.webp"
      />
      <ServiceOverview />
      <FeaturesGrid/>
      <WhyChooseKinetic/>
      <CallToAction/>
    </div>
  );
}
