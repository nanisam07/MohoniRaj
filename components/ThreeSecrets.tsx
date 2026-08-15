"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { useModal } from "./ModalContext";
import { ArrowRight, KeyRound } from "lucide-react";

export default function ThreeSecrets() {
  const { openModal } = useModal();
  const { secrets } = siteData;

  return (
    <section id="secrets" className="py-20 md:py-32 bg-brand-25 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-widest">
            <KeyRound className="w-4 h-4 text-brand-500" />
            <span>Core Takeaways</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900">
            {secrets.sectionTitle}
          </h2>
        </div>

        {/* 3 Visual Stages */}
        <div className="space-y-16 lg:space-y-24 mb-16">
          {secrets.items.map((sec, idx) => {
            const isEven = idx % 2 === 1;
            const stageNum = `0${idx + 1}`;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/80 shadow-apple">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={sec.image}
                        alt={sec.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-4">
                    <span className="editorial-heading text-6xl sm:text-7xl font-bold text-brand-100">
                      {stageNum}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-brand-900 text-white text-xs font-bold uppercase tracking-wider">
                      {sec.number}
                    </span>
                  </div>

                  <h3 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900">
                    {sec.title}
                  </h3>

                  <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
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
