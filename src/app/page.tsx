import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowToOrderSection } from "@/components/sections/HowToOrderSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowToOrderSection />
      <Footer />
    </div>
  );
}
