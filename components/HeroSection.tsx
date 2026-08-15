"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { openModal } = useModal();
  const { hero } = siteData;

  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 bg-gradient-to-b from-white via-brand-50/40 to-white overflow-hidden border-b border-slate-100">
      {/* Apple-style background aura glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>LIVE Transformational Masterclass</span>
            </div>

            <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-900 leading-[1.08] tracking-tight">
              {hero.headline}{" "}
              <span className="block text-brand-500 font-normal italic mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {hero.subheadline}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {hero.description}
            </p>

            {/* CTAs & Free Offer Badge */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-base sm:text-lg shadow-apple-hover transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{hero.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="inline-block p-4 rounded-2xl bg-accentGold-50 border border-accentGold-400/40 text-xs sm:text-sm text-slate-800 max-w-xl text-center lg:text-left leading-relaxed shadow-sm">
                <span className="font-semibold text-accentGold-500">{hero.offerText}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Apple backdrop glass frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-brand-50 rounded-3xl transform rotate-3 scale-[1.03] shadow-apple pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-apple border border-slate-200/80">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-brand-25">
                  <Image
                    src={hero.image}
                    alt="Mohiniraj - Holistic Healer & Life Skills Mentor"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <a href="#impact" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-900 transition-colors text-xs font-semibold uppercase tracking-widest">
            <span>Explore Experience</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
