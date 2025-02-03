import HeroSection from "@/components/HeroSection";
import DefaultLayout from "@/layouts/default";
import AboutUs from "@/components/AboutUs";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <AboutUs />
    </DefaultLayout>
  );
}
