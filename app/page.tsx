import Hero from "@/components/Hero";
import WorkshopBanner from "@/components/WorkshopBanner";
import TrustStrip from "@/components/TrustStrip";
import TransformationStoriesPreview from "@/components/TransformationStoriesPreview";
import HooponoponoSection from "@/components/HooponoponoSection";
import FourPhrases from "@/components/FourPhrases";
import ThreeSecrets from "@/components/ThreeSecrets";
import TransformationSection from "@/components/TransformationSection";
import WorkshopExperience from "@/components/WorkshopExperience";
import AboutPreview from "@/components/AboutPreview";
import Credentials from "@/components/Credentials";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="space-y-0 overflow-hidden">
      <Hero />
      <WorkshopBanner />
      <TrustStrip />
      <TransformationStoriesPreview />
      <HooponoponoSection />
      <FourPhrases />
      <ThreeSecrets />
      <TransformationSection />
      <WorkshopExperience />
      <AboutPreview />
      <Credentials />
      <TestimonialCarousel />
      <CTASection />
    </div>
  );
}
