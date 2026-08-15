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
    <section className="relative w-full min-h-[calc(100svh-96px)] lg:h-[calc(100svh-96px)] flex flex-col justify-between py-4 lg:py-6 bg-gradient-to-b from-white via-brand-50/30 to-white border-b border-slate-100">
      {/* Subtle Apple-style background aura glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>LIVE Transformational Masterclass</span>
            </div>

            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.08] tracking-tight">
              {hero.headline}{" "}
              <span className="block text-brand-500 font-normal italic mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {hero.subheadline}
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {hero.description}
            </p>

            {/* CTAs & Free Offer Badge */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm sm:text-base shadow-apple-hover transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{hero.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="inline-block p-3 rounded-xl bg-accentGold-50 border border-accentGold-400/40 text-xs text-slate-800 max-w-xl text-center lg:text-left leading-snug shadow-sm">
                <span className="font-semibold text-accentGold-500">{hero.offerText}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]">
              {/* Backdrop frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-brand-50 rounded-2xl transform rotate-2 scale-[1.02] shadow-apple pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white p-2.5 shadow-apple border border-slate-200/80">
                <div className="relative aspect-[4/4.8] w-full rounded-xl overflow-hidden bg-brand-25">
                  <Image
                    src={hero.image}
                    alt="Mohiniraj - Holistic Healer & Life Skills Mentor"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 280px, 350px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Compact Scroll Indicator */}
      <div className="pt-2 pb-1 flex justify-center relative z-10 shrink-0">
        <a href="#impact" className="flex items-center gap-1.5 text-slate-400 hover:text-brand-900 transition-colors text-[11px] font-semibold uppercase tracking-widest">
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
