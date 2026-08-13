"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function WorkshopExperience() {
  return (
    <section className="py-28 bg-navy-950 text-sand-100 relative overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sage-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRACTICAL TRANSFORMATIONAL OUTCOMES</span>
          </span>
          <h2 className="editorial-heading text-4xl sm:text-6xl text-sand-100">
            What You'll Learn & Experience <span className="text-gold-gradient italic font-serif">In This Session</span>
          </h2>
          <p className="text-sand-200/70 text-sm sm:text-base font-light">
            Designed for immediate emotional release and practical daily application.
          </p>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-navy-900/60 border border-navy-800/80 rounded-3xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[16/10] bg-navy-950 overflow-hidden">
                <Image
                  src={outcome.image}
                  alt={outcome.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold-500/40 flex items-center justify-center text-gold-500 font-mono text-xs font-bold">
                  0{outcome.number}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-serif text-xl font-semibold text-sand-100 group-hover:text-gold-400 transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
