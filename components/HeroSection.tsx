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
    <section className="relative w-full min-h-[calc(100svh-68px)] lg:h-[calc(100svh-68px)] flex flex-col justify-between py-4 lg:py-5 bg-gradient-to-b from-white via-brand-50/20 to-white border-b border-slate-100">
      {/* Subtle Apple-style background aura glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-100/40 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Typography & CTAs (55% width) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-3.5 text-center lg:text-left"
          >
            {/* 1. Small badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-[11px] font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3 h-3 text-brand-500" />
              <span>LIVE Transformational Masterclass</span>
            </div>

            {/* 2. Main headline & 3. Supporting italic subheadline */}
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-brand-900 leading-[1.1] tracking-tight">
              {hero.headline}
              <span className="block text-brand-500 font-normal italic mt-1.5 text-xl sm:text-2xl md:text-3xl lg:text-[36px]">
                {hero.subheadline}
              </span>
            </h1>

            {/* 4. Short description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {hero.description}
            </p>

            {/* 5. Primary CTA & 6. Refined Offer Information */}
            <div className="pt-2 space-y-2.5">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm shadow-md hover:shadow-apple-hover transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>{hero.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="inline-block p-2.5 px-3.5 rounded-xl bg-accentGold-50/70 border border-accentGold-300/40 text-xs text-slate-700 max-w-lg text-center lg:text-left leading-snug shadow-sm">
                <span className="font-semibold text-accentGold-500">{hero.offerText}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Composition (45% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[330px]">
              {/* Subtle backdrop frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-brand-50 rounded-2xl transform rotate-1.5 scale-[1.015] shadow-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-apple border border-slate-200/80">
                <div className="relative aspect-[4/4.7] w-full rounded-xl overflow-hidden bg-brand-25">
                  <Image
                    src={hero.image}
                    alt="Mohiniraj - Holistic Healer & Life Skills Mentor"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 260px, 330px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Compact Scroll Indicator */}
      <div className="pt-1 pb-1 flex justify-center relative z-10 shrink-0">
        <a href="#impact" className="flex items-center gap-1.5 text-slate-400 hover:text-brand-900 transition-colors text-[10px] font-semibold uppercase tracking-widest">
          <span>Scroll to explore</span>
          <ChevronDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
