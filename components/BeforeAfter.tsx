"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { XCircle, CheckCircle2, RefreshCw } from "lucide-react";

export default function BeforeAfter() {
  const { beforeAfter } = siteData;
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <section className="py-20 md:py-32 bg-brand-25 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
            <RefreshCw className="w-4 h-4 text-brand-500" />
            <span>Interactive Comparison</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900">
            Before vs. After Workshop
          </h2>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "before"
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Before Workshop
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "after"
                  ? "bg-brand-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-900"
              }`}
            >
              After Workshop ✨
            </button>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Side */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-apple">
              <Image
                src={beforeAfter.image}
                alt="Mohiniraj"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

          {/* Content Points Side */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeTab === "before" ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-3xl border border-red-100 shadow-apple space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold">
                      ✕
                    </div>
                    <h3 className="editorial-heading text-2xl font-bold text-slate-800">
                      Before Workshop (Emotional Blocks)
                    </h3>
                  </div>

                  <ul className="space-y-4 text-slate-700 text-sm sm:text-base">
                    {beforeAfter.before.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-3xl border border-brand-100 shadow-apple space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <h3 className="editorial-heading text-2xl font-bold text-brand-900">
                      After Workshop (Peace & Freedom)
                    </h3>
                  </div>

                  <ul className="space-y-4 text-slate-800 text-sm sm:text-base">
                    {beforeAfter.after.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-semibold">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
