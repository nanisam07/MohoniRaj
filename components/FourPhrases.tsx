"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data/content";

export default function FourPhrases() {
  return (
    <section className="py-28 bg-navy-900 text-sand-100 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-gold-500/10 via-sage-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-500 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SACRED HEALING HEURISTIC</span>
          </span>
          
          <h2 className="editorial-heading text-4xl sm:text-6xl text-sand-100">
            The Four Powerful <span className="text-gold-gradient italic font-serif">Phrases</span>
          </h2>
          
          <p className="text-sand-200/70 text-sm sm:text-base font-light leading-relaxed">
            Four simple phrases that unlock subconscious forgiveness, release years of stored emotional grief, and reconnect you with pure inner light.
          </p>
        </div>

        {/* 4 Phrases Grid / Scroll Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.fourPhrases.map((phrase, idx) => (
            <motion.div
              key={phrase.text}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-navy-800/40 border border-navy-700/60 hover:border-gold-500/40 backdrop-blur-md flex flex-col justify-between gap-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-navy-950/80"
            >
              {/* Top Index */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gold-500/70">
                  0{idx + 1}
                </span>
                <div className="w-8 h-8 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center text-gold-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              {/* Main Phrase Text */}
              <div className="flex flex-col gap-3">
                <h3 className="editorial-heading text-3xl sm:text-4xl text-sand-100 group-hover:text-gold-400 transition-colors">
                  "{phrase.text}"
                </h3>
                <p className="text-xs text-sand-200/70 font-light leading-relaxed">
                  {phrase.meaning}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="w-full h-1 rounded-full bg-navy-700/50 overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-gold-500 to-sage-500 transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
