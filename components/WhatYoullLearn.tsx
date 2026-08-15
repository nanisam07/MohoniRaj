"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhatYoullLearn() {
  const { openModal } = useModal();
  const { whatYoullLearn } = siteData;

  return (
    <section id="outcomes" className="py-20 md:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-brand-500" />
            <span>Masterclass Curriculum</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900">
            {whatYoullLearn.sectionTitle}
          </h2>
        </div>

        {/* 6 Outcomes Feature Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whatYoullLearn.outcomes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-25 rounded-3xl overflow-hidden border border-slate-200/80 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] w-full bg-white overflow-hidden p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-brand-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                    0{idx + 1}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-2 flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-lg text-brand-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
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
