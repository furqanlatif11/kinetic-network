import { ArrowRight } from "lucide-react";
import MainCTA from "../../_components/cta";
import HeroBanner from "../../_components/HeroBanner";
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
      <MainCTA
              title="Get The Right Intercom System for Your Property"
              buttonText="Request Free Consultation"
              buttonLink="/contact"
              buttonIcon={<ArrowRight className="w-5 h-5" />}
              bgImage="/assets/images/mainCtaBg.webp"
              className="mt-16 mb-20 mx-6"
            />
    </div>
  );
}
