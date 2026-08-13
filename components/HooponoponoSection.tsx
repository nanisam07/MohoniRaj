"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, Feather, RefreshCw } from "lucide-react";

export default function HooponoponoSection() {
  return (
    <section className="py-28 bg-navy-950 text-sand-100 relative overflow-hidden">
      {/* Soft Ambient Light & Organic Shapes */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-gold-500/10 via-sage-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-navy-800/80 via-gold-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-500 text-xs font-semibold uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ANCIENT WISDOM MADE ACCESSIBLE</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="editorial-heading text-4xl sm:text-6xl text-sand-100 max-w-3xl"
        >
          What is <span className="text-gold-gradient italic font-serif">Ho'oponopono?</span>
        </motion.h2>

        {/* Main Explanation Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-sand-200/80 font-light leading-relaxed max-w-3xl"
        >
          Ho'oponopono (pronounced <span className="text-gold-400 italic">ho-o-pono-pono</span>) is an ancient Hawaiian healing practice centered on reconciliation, emotional cleansing, and forgiveness. It restores natural harmony by helping you clean stored subconscious memories, emotional blocks, and past pain.
        </motion.p>

        {/* 3 Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8"
        >
          <div className="p-8 rounded-3xl bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/30 transition-all flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-navy-800 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-sand-100">
              Subconscious Cleanse
            </h3>
            <p className="text-xs text-sand-200/70 leading-relaxed font-light">
              Clears deep-rooted emotional baggage and hidden mental blocks holding you back in life.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/30 transition-all flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-navy-800 flex items-center justify-center text-sage-500 group-hover:scale-110 transition-transform">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-sand-100">
              No Complex Steps
            </h3>
            <p className="text-xs text-sand-200/70 leading-relaxed font-light">
              No rigid posture, years of meditation, or therapy needed — just an easy, natural inner process.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/30 transition-all flex flex-col items-center text-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-navy-800 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-sand-100">
              Profound Inner Peace
            </h3>
            <p className="text-xs text-sand-200/70 leading-relaxed font-light">
              Restores emotional freedom, clarity of mind, self-worth, and harmonious relationships.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
