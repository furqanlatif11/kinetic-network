import { Smartphone } from "lucide-react";
import MainCTA from "./_components/cta";
import FAQs from "./_components/faqs";
import FeaturedServices from "./_components/featured-services";
import FeaturedServicesNew from "./_components/featuredServices";
import Hero from "./_components/hero-section";
import HowWeWork from "./_components/how-we-work";
import Testimonials from "./_components/testimonials";
import WhyChooseUs from "./_components/why-us";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedServicesNew />
      <FeaturedServices />
      <Testimonials />
      <MainCTA
        subtitle="Your Safety, Our Priority"
        title="Smart Security Systems Designed for You"
        description="Effortless communication, access control, and monitoring at your fingertips."
        buttonText="Request Free Consultation"
        buttonLink="/contact"
        buttonIcon={<Smartphone className="w-5 h-5" />}
        bgImage="/assets/images/mainCtaBg.webp"
        className="mt-16 mb-20 mx-6"
      />
      <HowWeWork />
      <FAQs />
      {/* Other sections will be added here */}
    </div>
  );
}
