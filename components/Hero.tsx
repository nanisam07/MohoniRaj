"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { siteConfig } from "@/lib/data/content";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-24 overflow-hidden bg-navy-900">
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gold-500/10 via-sage-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-navy-700/60 via-gold-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle organic light lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1B2A41_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-800/80 border border-gold-500/20 text-gold-500 text-xs font-semibold tracking-wider uppercase w-fit backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>MOHINIRAJ • HOLISTIC HEALER & LIFE SKILLS MENTOR</span>
            </div>

            {/* Emotional Editorial Headline */}
            <div className="flex flex-col gap-3">
              <span className="text-sage-500 font-serif italic text-lg sm:text-xl lg:text-2xl tracking-wide">
                If peace, clarity, and calmness feel out of reach...
              </span>
              <h1 className="editorial-heading text-3xl sm:text-5xl lg:text-6xl text-sand-100 leading-[1.1] font-normal">
                Break Free from Stress & Heal Deep Emotional Wounds with{" "}
                <span className="text-gold-gradient italic font-serif font-semibold">
                  Ho'oponopono
                </span>
              </h1>
            </div>

            {/* Supporting Copy from Website */}
            <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              {siteConfig.heroSubheading} Experience an ancient Hawaiian healing practice that dissolves subconscious baggage, releases accumulated pain, and restores deep inner harmony.
            </p>

            {/* CTAs & Trust Badges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={openModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-navy-950 bg-gradient-to-r from-gold-500 via-sand-200 to-gold-400 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-500/15 hover:shadow-gold-500/30 hover:scale-[1.02]"
              >
                <span>REGISTER FOR FREE WORKSHOP</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href="/ho-oponopono"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-sand-100 hover:text-gold-400 bg-navy-800/40 hover:bg-navy-800/80 border border-navy-700/60 transition-all duration-300"
              >
                <span>EXPLORE THE EXPERIENCE</span>
              </Link>
            </div>

            {/* Quick social proof bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-navy-800/60 text-xs text-sand-200/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>100% Free Live Session</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-sage-500 shrink-0" />
                <span>5,000+ Attendees</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="text-gold-500 font-bold text-sm">4.9 ★</span>
                <span>Verified Client Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Cinematic Real Portrait of Mohiniraj */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Atmospheric Background Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 via-navy-700/40 to-sage-500/10 rounded-3xl blur-2xl transform scale-95" />
            
            {/* Main Portrait Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-navy-700/60 shadow-2xl shadow-navy-950/80 bg-navy-800/50 group">
              <Image
                src="/images/MohiniRaj-5-1.png"
                alt="Mohiniraj — Holistic Healer & Life Skills Mentor"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Subtle Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

              {/* Bottom Card Floating Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-gold-500/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-sand-100">
                    Mohiniraj
                  </h3>
                  <p className="text-xs text-sage-500 font-medium">
                    Life Skills Mentor & Practitioner
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-[11px] font-semibold">
                  6+ Yrs Exp
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
