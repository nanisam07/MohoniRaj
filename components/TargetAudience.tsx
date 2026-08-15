"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, Users } from "lucide-react";

export default function TargetAudience() {
  const { openModal } = useModal();
  const { targetAudience } = siteData;

  return (
    <section className="py-20 md:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
            <Users className="w-4 h-4 text-brand-500" />
            <span>Target Audience</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900">
            {targetAudience.sectionTitle}
          </h2>
        </div>

        {/* 4 Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {targetAudience.audiences.map((aud, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-brand-25 rounded-3xl p-8 border border-slate-200/80 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
            >
              <div className="relative w-28 h-28 shrink-0 bg-white rounded-2xl p-3 shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={aud.image}
                    alt={aud.title}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              </div>

              <div className="space-y-3 text-center sm:text-left flex-grow">
                <h3 className="editorial-heading text-2xl font-bold text-brand-900">
                  {aud.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {aud.description}
                </p>
              </div>
            </motion.div>
          ))}
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
