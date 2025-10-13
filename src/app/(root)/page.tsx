import FeaturedServices from './_components/featured-services';
import Hero from './_components/hero-section';
import WhyChooseUs from './_components/why-us';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedServices/>
      <WhyChooseUs/>
      {/* Other sections will be added here */}
    </div>
  );
}