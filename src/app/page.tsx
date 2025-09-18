import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <HeroSection />
    </div>
  );
}
