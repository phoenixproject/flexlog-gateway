import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import ExpectationsSection from "@/components/ExpectationsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InstitutionalSection />
      <ExpectationsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
