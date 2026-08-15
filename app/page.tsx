"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import CaseStudies from "@/components/CaseStudies";
import EmotionalChallenges from "@/components/EmotionalChallenges";
import TargetAudience from "@/components/TargetAudience";
import ThreeSecrets from "@/components/ThreeSecrets";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import BeforeAfter from "@/components/BeforeAfter";
import AboutMohiniraj from "@/components/AboutMohiniraj";
import Certifications from "@/components/Certifications";
import ClientReviews from "@/components/ClientReviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Top Announcement Banner */}
      <TopBanner />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Impact & Experience Counters */}
      <StatsCounter />

      {/* 4. Case Studies (Transformation Stories) */}
      <CaseStudies />

      {/* 5. Emotional Challenges */}
      <EmotionalChallenges />

      {/* 6. Target Audience */}
      <TargetAudience />

      {/* 7. 3 Secrets (01, 02, 03 Stages) */}
      <ThreeSecrets />

      {/* 8. What You'll Learn & Experience */}
      <WhatYoullLearn />

      {/* 9. Before vs After Workshop */}
      <BeforeAfter />

      {/* 10. About Mohiniraj */}
      <AboutMohiniraj />

      {/* 11. Certifications */}
      <Certifications />

      {/* 12. Client Reviews */}
      <ClientReviews />

      {/* 13. Frequently Asked Questions */}
      <FAQ />

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
