import FAQs from './_components/faqs';
import FeaturedServices from './_components/featured-services';
import Hero from './_components/hero-section';
import HowWeWork from './_components/how-we-work';
import Testimonials from './_components/testimonials';
import WhyChooseUs from './_components/why-us';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedServices/>
      <WhyChooseUs/>
      <Testimonials/>
      <HowWeWork/>
      <FAQs/>
      {/* Other sections will be added here */}
    </div>
  );
}