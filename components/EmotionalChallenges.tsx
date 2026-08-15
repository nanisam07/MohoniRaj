"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function EmotionalChallenges() {
  const { openModal } = useModal();
  const { emotionalChallenges } = siteData;

  return (
    <section className="py-20 md:py-32 bg-brand-25 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Sticky Left Title Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
              <AlertCircle className="w-4 h-4 text-brand-500" />
              <span>Recognize Your Struggles</span>
            </div>
            
            <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
              {emotionalChallenges.sectionTitle}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Recognizing emotional blocks is the first step toward releasing baggage and stepping into clarity.
            </p>

            <div className="pt-4 hidden lg:block">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-base shadow-apple-hover transition-all transform hover:-translate-y-0.5"
              >
                <span>REGISTER NOW FOR FREE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Progressive Reveal Cards */}
          <div className="lg:col-span-7 space-y-8">
            {emotionalChallenges.challenges.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-apple hover:shadow-apple-hover transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                <div className="sm:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <h3 className="font-bold text-xl text-brand-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6 lg:hidden text-center">
              <button
                onClick={openModal}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-base shadow-apple"
              >
                <span>REGISTER NOW FOR FREE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
