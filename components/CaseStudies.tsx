"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { Quote, HeartHandshake, Target, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

export default function CaseStudies() {
  const { caseStudies } = siteData;
  const [activeIndex, setActiveIndex] = useState(0);

  const active = caseStudies[activeIndex];
  const achievementText = active.transformation || active.achievements;

  return (
    <section id="transformations" className="py-20 md:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
            <Quote className="w-4 h-4 text-brand-500" />
            <span>Case Studies</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900">
            Real Transformation Stories
          </h2>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {caseStudies.map((study, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-brand-900 text-white shadow-md scale-105"
                  : "bg-brand-50 text-slate-700 hover:bg-brand-100"
              }`}
            >
              {study.name}
            </button>
          ))}
        </div>

        {/* Interactive Storytelling Stage Card */}
        <div className="bg-brand-25 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-apple relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              {/* Photo Side */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-apple border border-slate-200">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-xl text-brand-900">{active.name}</h3>
                    <p className="editorial-heading text-sm text-brand-500 font-medium">{active.title}</p>
                  </div>
                </div>
              </div>

              {/* Story Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4 text-sm sm:text-base">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
                    <span className="font-bold text-brand-900 block mb-1.5 flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-brand-500 shrink-0" />
                      Challenges Faced:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{active.challenges}</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
                    <span className="font-bold text-brand-900 block mb-1.5 flex items-center gap-2">
                      <Target className="w-4 h-4 text-accentGold-500 shrink-0" />
                      Specific Goals:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{active.goals}</p>
                  </div>

                  {achievementText && (
                    <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 shadow-sm">
                      <span className="font-bold text-brand-900 block mb-1.5 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-500 shrink-0" />
                        Transformation & Achievements:
                      </span>
                      <p className="text-slate-800 font-medium leading-relaxed">
                        {achievementText}
                      </p>
                    </div>
                  )}
                </div>

                {/* Next/Prev Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : caseStudies.length - 1))}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-900 text-xs font-bold border border-slate-200 shadow-sm hover:bg-brand-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Story</span>
                  </button>
                  <button
                    onClick={() => setActiveIndex((prev) => (prev < caseStudies.length - 1 ? prev + 1 : 0))}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900 text-white text-xs font-bold shadow-sm hover:bg-brand-800 transition-colors"
                  >
                    <span>Next Story</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
