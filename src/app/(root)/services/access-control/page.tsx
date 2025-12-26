import { Shield } from "lucide-react";
import MainCTA from "../../_components/cta";
import FAQs from "../../_components/faqs";
import HeroBanner from "../../_components/HeroBanner";
import WhyChooseUs from "../../_components/why-us";
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
      <MainCTA
        subtitle="Control Access with Confidence"
        title="Intelligent Access Control Solutions"
        description="Manage doors, entry points, and user permissions seamlessly with our smart access control systems for homes, offices, and industrial facilities."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        buttonIcon={<Shield className="w-5 h-5" />}
        bgImage="/assets/images/mainCtaBg.webp"
        className="mt-16 mb-20 mx-6"
      />
    </div>
  );
}
