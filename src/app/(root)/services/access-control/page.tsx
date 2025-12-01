import FAQs from "../../_components/faqs";
import HeroBanner from "../../_components/HeroBanner";
import WhyChooseUs from "../../_components/why-us";
import AccessCTA from "./_components/accessCTA";
import AccessFeatures from "./_components/accessFeatures";
import AccessIndustries from "./_components/accessIndustries";
import AccessIntro from "./_components/accessIntro";
import AccessProcess from "./_components/accessProcess";
import AccessTypes from "./_components/accessTypes";


export default function AccessControlPage() {
  return (
    <div>

      <HeroBanner
        label="ACCESS CONTROL SOLUTIONS"
        title="Smart, Secure & Reliable"
        highlight="Access Control Systems"
        description="From biometric authentication to cloud-based access management, Kinetic Network delivers secure, scalable, and modern access solutions."
        image="/assets/images/accessControlHeroBanner.webp"
      />

      <AccessIntro />
      <AccessFeatures />
      <AccessTypes />
      <AccessProcess />
      <AccessIndustries />
      <WhyChooseUs />
      <FAQs />
      <AccessCTA />

    </div>
  );
}
