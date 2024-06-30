import NavBar from "@/components/common/NavBar";
import EngageSection from "@/components/sections/EngageSection";
import FooterSection from "@/components/sections/FooterSection";
import HelpUsSection from "@/components/sections/HelpUsSection";
import HeroSection from "@/components/sections/HeroSection";
import KickstartSection from "@/components/sections/KickstartSection";
import OnboardSection from "@/components/sections/OnboardSection";
import ReimagineSection from "@/components/sections/ReimagineSection";
import StartupSection from "@/components/sections/StartupSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-[82px] flex flex-col mx-4 md:mx-[50px] gap-[50px] md:gap-[160px]">
        <HeroSection />
        <ReimagineSection />
        <KickstartSection />
        <OnboardSection />
        <EngageSection />
        <HelpUsSection />
        <StartupSection />
        <FooterSection />
      </div>
    </main>
  );
}
