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
      <Marquee />
      <AboutUs />
      <StatsSection />
      <FeaturesGrid />
    </DefaultLayout>
  );
}
