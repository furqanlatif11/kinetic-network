import ContactHero from "./components/contactHero";
import ContactFormSection from "./components/contactForm";
import ContactinfoSection from "./components/contactInfo";
import OfficeLocationSection from "./components/OfficeLocationSection";
export default function ContactPage() {
    return (
        <>
        <ContactHero />
        <ContactinfoSection />
        <OfficeLocationSection />
        <ContactFormSection />
        </>
    );
}