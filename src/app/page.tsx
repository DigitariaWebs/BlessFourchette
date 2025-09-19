import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowToOrderSection } from "@/components/sections/HowToOrderSection";
import { ContactAndFaqSection } from "@/components/sections/ContactAndFaqSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowToOrderSection />
      <ContactAndFaqSection />
      <Footer />
    </div>
  );
}
