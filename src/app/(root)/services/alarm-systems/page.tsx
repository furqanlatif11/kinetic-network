import HeroBanner from "../../_components/HeroBanner";
import ServiceOverview from "./components/ServiceOverview";
import FeaturesGrid from "./components/features";
import AlarmTypes from "./components/alarm-types";
import WhyChooseUs from "../../_components/why-us";
import CallToAction from "../../_components/cta";
export default function AlarmSystemsPage() {
  return (
    <div>
      <HeroBanner
        label="ALARM SYSTEM SECURITY"
        title="Smarter Protection, Faster Response"
        highlight="Intelligent Alarm Systems"
        description="Stay ahead of threats with intelligent intrusion detection, instant notifications, and integrated alarm management engineered for maximum safety."
        image="/assets/images/alarmHeroBanner.webp"
      />
      <ServiceOverview/>
      <FeaturesGrid/>
      {/* <AlarmTypes/> */}
      <WhyChooseUs/>
    </div>
  );
}
