import HeroBanner from "../../_components/HeroBanner";
import WhyChooseKinetic from "../../_components/why-us";
import IntercomCTASection from "./_components/IntercomCTASection";
import IntercomIndustriesSection from "./_components/IntercomIndustriesSection";
import IntercomIntegrationSection from "./_components/IntercomIntegrationSection";
import IntercomIntroSection from "./_components/IntercomIntroSection";
import IntercomTypesSection from "./_components/IntercomTypesSection";

export default function AccessControlPage() {
  return (
    <div>
      <HeroBanner
        label="SMART ACCESS COMMUNICATION"
        title="Clear Communication & Secure"
        highlight="Intercom Systems"
        description="Enhance access control with high-quality audio and video intercom solutions, enabling seamless visitor communication, remote access management, and improved on-site security for any environment."
        image="/assets/images/intercomSystemsHeader.webp"
      />
      <IntercomIntroSection/>
      <IntercomTypesSection/>
      <IntercomIndustriesSection/>
      <IntercomIntegrationSection/>
      <IntercomCTASection/>
    </div>
  );
}
