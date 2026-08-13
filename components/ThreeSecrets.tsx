"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Key } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function ThreeSecrets() {
  return (
    <section className="py-28 bg-navy-900 text-sand-100 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
            <Key className="w-3.5 h-3.5" />
            <span>CORE MASTERCLASS CURRICULUM</span>
          </span>
          
          <h2 className="editorial-heading text-4xl sm:text-6xl text-sand-100">
            3 Secrets You Will Unlock <span className="text-gold-gradient italic font-serif">In This Workshop</span>
          </h2>
          
          <p className="text-sand-200/70 text-sm sm:text-base font-light">
            A step-by-step framework designed to take you from subconscious friction to lasting freedom.
          </p>
        </div>

        {/* Vertical Journey Layout */}
        <div className="relative flex flex-col gap-16 lg:gap-24 max-w-5xl mx-auto">
          {/* Central connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-gold-500/50 via-sage-500/30 to-gold-500/50 -translate-x-1/2" />

          {siteConfig.threeSecrets.map((secret, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={secret.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-4 ${
                    isEven ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-gold-500/30 text-gold-500 text-xs font-mono font-bold">
                    <span>SECRET #{secret.number}</span>
                  </div>

                  <h3 className="editorial-heading text-3xl sm:text-4xl text-sand-100">
                    {secret.title} — <span className="text-gold-gradient font-serif italic">{secret.heading}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-sand-200/70 font-light leading-relaxed max-w-md">
                    {secret.description}
                  </p>
                </div>

                {/* Center Node Indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-navy-950 border-2 border-gold-500 flex items-center justify-center text-gold-500 shadow-lg shadow-gold-500/20 font-mono text-xs font-bold">
                    {secret.number}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-last" : "lg:order-first"}`}>
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-navy-700/60 shadow-xl group">
                    <Image
                      src={secret.image}
                      alt={secret.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
