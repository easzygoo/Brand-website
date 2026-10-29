import { AboutPreview } from "@/components/home/AboutPreview";
import { AppShowcase } from "@/components/home/AppShowcase";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AppShowcase />
      <HowItWorks />
      <FeatureGrid />
      <FinalCta />
    </>
  );
}
