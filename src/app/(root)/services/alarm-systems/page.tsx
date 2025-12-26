import HeroBanner from "../../_components/HeroBanner";
import ServiceOverview from "./components/ServiceOverview";
import FeaturesGrid from "./components/features";
import AlarmTypes from "./components/alarm-types";
import WhyChooseUs from "../../_components/why-us";
import MainCTA from "../../_components/cta";
import { AlertTriangle } from "lucide-react";
import CallToAction from "../cctv/_components/cta";
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
      <ServiceOverview />
      <FeaturesGrid />
      <MainCTA
        subtitle="24/7 Protection, Always"
        title="Advanced Alarm Systems for Your Safety"
        description="Stay protected with intelligent alarms that detect intrusions, smoke, and emergencies, keeping your home or business safe around the clock."
        buttonText="Request Free Security Assessment"
        buttonLink="/contact"
        buttonIcon={<AlertTriangle className="w-5 h-5" />}
        bgImage="/assets/images/mainCtaBg.webp"
        className="mt-16 mb-20 mx-6"
      />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}
