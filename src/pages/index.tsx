import HeroSection from "@/components/HeroSection";
import DefaultLayout from "@/layouts/default";
import AboutUs from "@/components/AboutUs";
import Marquee from "@/components/Marquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/Stats";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <div className="container mx-auto max-w-[1200px]">
        {" "}
        <Marquee />
        <AboutUs />
        <StatsSection />
        <FeaturesGrid />
      </div>
    </DefaultLayout>
  );
}
