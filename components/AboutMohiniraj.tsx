"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, Award, Compass, Heart } from "lucide-react";

export default function AboutMohiniraj() {
  const { openModal } = useModal();
  const { about } = siteData;

  return (
    <section id="about" className="py-20 md:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-brand-100 rounded-3xl transform -rotate-3 scale-[1.02]" />
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-apple border border-slate-200">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-25">
                  <Image
                    src={about.image}
                    alt="Mohiniraj"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
              <Heart className="w-4 h-4 text-brand-500" />
              <span>Meet Your Mentor</span>
            </div>

            <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900">
              {about.title}
            </h2>

            <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium">
              {about.subtitle}
            </p>

            <ul className="space-y-4 pt-2">
              {about.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                  <Award className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Mission & Vision Card */}
        <div className="bg-brand-25 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-apple mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-full bg-brand-900" />
          <div className="flex items-start gap-5">
            <Compass className="w-9 h-9 text-brand-500 shrink-0 mt-1 hidden sm:block" />
            <div className="space-y-3">
              <h3 className="editorial-heading text-2xl sm:text-3xl font-bold text-brand-900">
                Mission & Vision
              </h3>
              <p className="text-slate-700 text-base sm:text-xl leading-relaxed italic">
                "{about.missionVision}"
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-base sm:text-lg shadow-apple-hover transition-all transform hover:-translate-y-0.5"
          >
            <span>REGISTER NOW FOR FREE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
